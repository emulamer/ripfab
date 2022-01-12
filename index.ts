import fetch from 'node-fetch';
import puppeteer from 'puppeteer'
import fs from 'fs'
import { osgjs } from './types';

async function go(url: string) {
    const browser = await puppeteer.launch({devtools: false, headless: true});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.setRequestInterception(true);
    page.on("request", async req => {
        if (!req.url().endsWith(".js")) {
            req.continue();
            return;
        }
        const f = await fetch(req.url(), {method: req.method()});
        const newheaders = {};
        const keys = f.headers.keys();
          let header = keys.next();
          while (header.value) {
            newheaders[header.value] = f.headers.get(header.value);
            header = keys.next();
        }            
        let js = await f.text();
        let idx = js.indexOf('initSceneGraph:');
        if (idx > 0) {
            console.log(`found the right js file, injecting stuff`);
            const start = js.indexOf("{", idx) + 1;
            let pos = start;
            let bractr = 1;
            while (pos < js.length && bractr > 0) {
                if (js[pos] == "{") {
                    bractr++;
                } else if (js[pos] == "}") {
                    bractr--;
                }
                pos++;
            }
            if (bractr > 0) {
                throw "Failed to find end of function"
            }
            let fbody = js.substring(start, pos - 1);
            fbody += `;dumpit((function (g) {
                var seen = [];
                var fun = (x) => {
                    if (!x) {
                        return x;
                        }
                    if (seen.includes(x)) {
                        return null;
                    }
                    seen.push(x);
                    for (let p of Object.keys(x)) {
                        if (!x[p]) {
                            continue;
                        }
                       if (Array.isArray(x[p])) { 
                         for (let i = 0; i < x[p].length; i++) {
                            const ret = fun(x[p][i]);
                            if (!ret) {
                                x[p].splice(i, 1);
                                i--;
                            }			
                         }
                        } else if (typeof x[p] === 'object') {
                          x[p] = fun(x[p]);
                        }
                    }
                    return x;
                }
                fun(g);
                return JSON.stringify(g);
                })(this._viewer.getRootModel()));`
            js = js.substring(0, start) + fbody + js.substring(pos - 1, js.length);

        } 
        req.respond({
            status: f.status,
            headers: newheaders,
            contentType: f.headers["content-type"],
            body: js
        })
    });
    page.exposeFunction('dumpit', (data) => {
        console.log("got data, doing some parsing");
       // fs.writeFileSync("dumped.json", JSON.stringify(JSON.parse(data), null, 3))
        doparse(data);
        page.close();
        browser.close();
    });

    page.goto(url);

   

}

function doparse(o: osgjs) {
    fs.writeFileSync("dump.json", JSON.stringify(o, null, 3));
    console.log("wrote to dump.json");
    const out = [];
        let findall;
        findall = (x) => {

            if (x._attributes && x._attributes.Vertex && x._attributes.Vertex._elements
                && x._primitives && x._primitives.length) {
                    let v = x._attributes.Vertex._elements;
                    v = Object.keys(v).sort((a,b) => +a - +b).map(b=> v[b]);

                    let n = x._attributes.Normal._elements;
                    n = Object.keys(n).sort((a,b) => +a - +b).map(b=> n[b]);
                    let norm = x._attributes.Normal;
                    // console.log("type: " +  norm._type);
                    // console.log("usage: " + norm._usage);
                    // console.log("nor:" + Object.keys(norm._elements).length);
                    // console.log("v: " + v.length);
                    let iis = [];
                    let tris = [];
                    for (let ind of x._primitives) {
                        //let ind = x._primitives[ind2];
                        let i = ind.indices._elements;
                        // console.log(ind.count);
                        // console.log(ind.offset);
                        // console.log(ind.mode);

                        let i2 = Object.keys(i).sort((a,b)=> +a - +b).map(b=> i[b])
                        
                     
                        for (let i3 of i2) {
                            ((ind.mode == 5)?iis:tris).push(i3);
                        }
                        
                    }
                    out.push([v,iis, tris, n]);
                }
            if (x && x.children && Array.isArray(x.children)) {
                for (let c of x.children) {

                    findall(c);
                }
            }
        }
        findall(o);
        fs.writeFileSync("out.json", JSON.stringify(o));
        console.log("wrote arbitrary arrays to out.json");
    }


setTimeout(() => {console.log("if it isn't done by now, something probably went wrong and you should ctrl-c")}, 30000);
    go('https://sketchfab.com/3d-models/nasal-cavity-with-paranasal-sinuses-1f0a6a13466941018f777e0370173c6c').then(x=> {
        console.log("ok done")
        process.exit(0);
    }).catch(e=> console.error(e));