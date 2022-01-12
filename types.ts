export interface osgjs {
  _name: string;
  _userdata?: (UserdataEntity)[] | null;
  _instanceID: number;
  children?: (ChildrenEntity)[] | null;
  _parents?: (null)[] | null;
  nodeMask: number;
  _boundingSphere: BoundingSphere;
  _boundingSphereComputed: boolean;
  _boundingBox: Box;
  _boundingBoxComputed: boolean;
  _updateCallbacks?: (null)[] | null;
  _cullingActive: boolean;
  _numChildrenWithCullingDisabled: number;
  _numChildrenRequiringUpdateTraversal: number;
  _tmpBox: Box;
  userDataMap: UserDataMap;
}
export interface UserdataEntity {
  Name: string;
  Value: string;
}
export interface ChildrenEntity {
  _instanceID: number;
  children?: (ChildrenEntity1)[] | null;
  _parents?: (null)[] | null;
  nodeMask: number;
  _boundingSphere: BoundingSphere;
  _boundingSphereComputed: boolean;
  _boundingBox: Box;
  _boundingBoxComputed: boolean;
  _updateCallbacks?: (null)[] | null;
  _cullingActive: boolean;
  _numChildrenWithCullingDisabled: number;
  _numChildrenRequiringUpdateTraversal: number;
  _tmpBox: Box;
  _uniqueID: number;
}
export interface ChildrenEntity1 {
  _name: string;
  _instanceID: number;
  children?: (ChildrenEntity2)[] | null;
  _parents?: (null)[] | null;
  nodeMask: number;
  _boundingSphere: BoundingSphere;
  _boundingSphereComputed: boolean;
  _boundingBox: Box;
  _boundingBoxComputed: boolean;
  _updateCallbacks?: (null)[] | null;
  _cullingActive: boolean;
  _numChildrenWithCullingDisabled: number;
  _numChildrenRequiringUpdateTraversal: number;
  _tmpBox: Box;
  stateset: Stateset;
}
export interface ChildrenEntity2 {
  _instanceID: number;
  children?: (null)[] | null;
  _parents?: (null)[] | null;
  nodeMask: number;
  _boundingSphere: BoundingSphere;
  _boundingSphereComputed: boolean;
  _boundingBox: Box;
  _boundingBoxComputed: boolean;
  _updateCallbacks?: (null)[] | null;
  _cullingActive: boolean;
  _numChildrenWithCullingDisabled: number;
  _numChildrenRequiringUpdateTraversal: number;
  _tmpBox: Box;
  _attributes: Attributes;
  _primitives?: (PrimitivesEntity)[] | null;
  _cacheDrawCall: any;
  _vao: any;
  _cacheVertexAttributeBufferList: any;
}
export interface BoundingSphere {
  _center: Vector3;
  _radius: number;
}
export interface Vector3 {
  0: number;
  1: number;
  2: number;
}
export interface Box {
  _min: Vector3;
  _max: Vector3;
}

export interface Attributes {
  Color?: Color | null;
  Normal: Normal;
  Vertex: Vertex;
}
export interface Color {
  _instanceID: number;
  _dirty: boolean;
  _itemSize: number;
  _target: number;
  _type: number;
  _normalize: boolean;
  _usage: number;
  _elements: Array<number>;
}

export interface Normal {
  _instanceID: number;
  _dirty: boolean;
  _itemSize: number;
  _target: number;
  _type: number;
  _normalize: boolean;
  _usage: number;
  _elements: Array<number>
}

export interface Vertex {
  _instanceID: number;
  _dirty: boolean;
  _itemSize: number;
  _target: number;
  _type: number;
  _normalize: boolean;
  _usage: number;
  _elements: Array<number>;
  processedNaN: boolean;
  _minMax?: MinMax | null;
}
export interface MinMax {
  xmin: number;
  ymin: number;
  zmin: number;
  xmax: number;
  ymax: number;
  zmax: number;
  _FQU: boolean;
}
export interface PrimitivesEntity {
  mode: number;
  count: number;
  offset: number;
  indices: Indices;
  uType: number;
}
export interface Indices {
  _instanceID: number;
  _dirty: boolean;
  _itemSize: number;
  _target: number;
  _type: number;
  _normalize: boolean;
  _usage: number;
  _elements: Array<number>;
}

export interface Stateset {
  _name: string;
  _instanceID: number;
  _parents?: (null)[] | null;
  _attributeArray?: (AttributeArrayEntity)[] | null;
  _textureAttributeArrayList?: (null)[] | null;
  _activeTextureAttributeUnit?: (null)[] | null;
  _activeAttribute?: (number)[] | null;
  _activeTextureAttribute?: (null)[] | null;
  _binName: string;
  _binNumber: number;
  _shaderGeneratorPair?: null;
  _updateCallbackList?: (null)[] | null;
  uniforms: any;
  _hasUniform: boolean;
  _drawID: number;
  _uniqueID: number;
  _materialID: number;
}
export interface AttributeArrayEntity {
  _object: Object;
  _value: number;
}
export interface Object {
  _name?: string | null;
  _instanceID: number;
  _channelMapping?: ChannelMapping | null;
  _materialModel?: MaterialModel | null;
  _stateSetContext?: null;
  _additive?: boolean | null;
  _depthWrite?: boolean | null;
  _castShadows?: boolean | null;
  _hashes?: (null)[] | null;
  _dirtyUniforms?: boolean | null;
  _activeChannels?: (null)[] | null;
  _attributeTypeIndex: number;
  _enable?: boolean | null;
  _pointSize?: number | null;
  _circleShape?: boolean | null;
  _dirtyHash?: boolean | null;
  _hash?: string | null;
  _mode?: number | null;
}
export interface ChannelMapping {
  Inspector: number;
  Matcap: number;
  Displacement: number;
  AlphaMask: number;
  RoughnessPBR: number;
  Opacity: number;
  SubsurfaceScattering: number;
  SubsurfaceTranslucency: number;
  DiffuseColor: number;
  DiffusePBR: number;
  AlbedoPBR: number;
  ClearCoat: number;
  ClearCoatRoughness: number;
  ClearCoatNormalMap: number;
  SpecularColor: number;
  DiffuseIntensity: number;
  SpecularPBR: number;
  MetalnessPBR: number;
  GlossinessPBR: number;
  NormalMap: number;
  BumpMap: number;
  AOPBR: number;
  EmitColor: number;
  CavityPBR: number;
  SpecularHardness: number;
  SpecularF0: number;
  Anisotropy: number;
  Sheen: number;
  SheenRoughness: number;
}
export interface MaterialModel {
  geometryList?: (null)[] | null;
  wireframeList?: (null)[] | null;
  texCoordUnitList?: (null)[] | null;
  vertexColorColorSpace: string;
  vertexColorEnable: boolean;
  vertexAlphaEnable: boolean;
  hasVertexColor: boolean;
  hasVertexAlpha: boolean;
  hasTriangles: boolean;
  hasPoints: boolean;
  hasLines: boolean;
  stateSet?: null;
  stateSetWireframe?: null;
  uidUniqueMerged: string;
  uidListUnusedDuplicates?: (null)[] | null;
  cullFace: number;
  id: string;
  name: string;
  reflection: number;
  shadeless: boolean;
  stateSetID: number;
  version: number;
  channels: Channels;
  missingUvs: boolean;
}
export interface Channels {
  AlphaMask: AlphaMask;
  Opacity: Opacity;
  SpecularHardness: Shader;
  BumpMap: Shader;
  Displacement: Shader;
  SubsurfaceTranslucency: SubsurfaceTranslucency;
  EmitColor: EmitColor;
  SubsurfaceScattering: SubsurfaceScattering;
  NormalMap: NormalMap;
  AOPBR: AOPBR;
  Matcap: Matcap;
  ClearCoat: ClearCoat;
  ClearCoatNormalMap: NormalMap;
  ClearCoatRoughness: Shader;
  DiffuseColor: ColorShader;
  DiffuseIntensity: ColorShader;
  SpecularColor: ColorShader;
  DiffusePBR: ColorShader;
  AlbedoPBR: ColorShader;
  SpecularPBR: ColorShader;
  GlossinessPBR: Shader;
  RoughnessPBR: Shader;
  MetalnessPBR: Shader;
  Sheen: Sheen;
  SheenRoughness: Shader;
  SpecularF0: Shader;
  CavityPBR: Shader;
  Anisotropy: Anisotropy;
  Inspector: Inspector;
}
export interface AlphaMask {
  enable: boolean;
  factor: number;
  invert: boolean;
  name: string;
  material?: null;
  displayName: string;
}
export interface Opacity {
  enable: boolean;
  factor: number;
  type: string;
  invert: boolean;
  ior: number;
  roughnessFactor: number;
  useMicrosurfaceTexture: boolean;
  useNormalOffset: boolean;
  useAlbedoTint: boolean;
  thinLayer: boolean;
  refractionColor: Vector3;
  name: string;
  material?: null;
  displayName: string;
}
export interface Shader {
  enable: boolean;
  factor: number;
  name: string;
  material?: null;
  displayName: string;
}
export interface SubsurfaceTranslucency {
  enable: boolean;
  factor: number;
  thicknessFactor: number;
  color: Vector3;
  name: string;
  material?: null;
  displayName: string;
}
export interface EmitColor {
  enable: boolean;
  factor: number;
  color: Vector3;
  type: string;
  name: string;
  material?: null;
  displayName: string;
}
export interface SubsurfaceScattering {
  enable: boolean;
  factor: number;
  profile: number;
  name: string;
  material?: null;
  displayName: string;
}
export interface NormalMap {
  enable: boolean;
  factor: number;
  flipY: boolean;
  name: string;
  material?: null;
  displayName: string;
}
export interface AOPBR {
  enable: boolean;
  factor: number;
  occludeSpecular: boolean;
  name: string;
  material?: null;
  displayName: string;
}
export interface Matcap {
  enable: boolean;
  factor: number;
  curvature: number;
  color: Vector3;
  texture: Texture;
  name: string;
  material?: null;
  displayName: string;
  textureModel: TextureModel;
}
export interface Texture {
  internalFormat: string;
  magFilter: string;
  minFilter: string;
  textureTarget: string;
  uid: string;
  wrapS: string;
  wrapT: string;
  texCoordUnit: number;
}
export interface TextureModel {
  uid: string;
  wrapS: number;
  wrapT: number;
  magFilter: number;
  minFilter: number;
  texCoordUnit: number;
  textureTarget: number;
  internalFormat: number;
  image: Image;
  textureWidth: number;
  textureHeight: number;
  multiresTexture: MultiresTexture;
}
export interface Image {
  uid: string;
  name: string;
  images?: (ImagesEntity)[] | null;
  createdAt: string;
  updatedAt: string;
  isDefault: boolean;
}
export interface ImagesEntity {
  width: number;
  height: number;
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}
export interface MultiresTexture {
  _instanceID: number;
  _magFilter: number;
  _minFilter: number;
  _maxAnisotropy: number;
  _wrapS: number;
  _wrapT: number;
  _textureWidth: number;
  _textureHeight: number;
  _unrefImageDataAfterApply: boolean;
  _internalFormat: number;
  _dirtyMipmap: boolean;
  _textureTarget: number;
  _type: number;
  _isCompressed: boolean;
  _flipY: boolean;
  _colorSpaceConversion: number;
  _dirty: boolean;
  _applyTexImage2DCallbacks?: (null)[] | null;
  _textureNull: boolean;
  _isVideo: boolean;
  _requireOriginalCompression: boolean;
  _imageModel?: null;
  _convertNPOT: boolean;
  _dirtyTextureObject: boolean;
}
export interface ClearCoat {
  enable: boolean;
  factor: number;
  tint: Vector3;
  thickness: number;
  reflectivity: number;
  name: string;
  material?: null;
  displayName: string;
}
export interface ColorShader {
  enable: boolean;
  factor: number;
  color: Vector3;
  name: string;
  material?: null;
  displayName: string;
}
export interface Sheen {
  enable: boolean;
  factor: number;
  colorFactor: Vector3;
  name: string;
  material?: null;
  displayName: string;
}
export interface Anisotropy {
  enable: boolean;
  factor: number;
  direction: number;
  flipXY: boolean;
  name: string;
  material?: null;
  displayName: string;
}
export interface Inspector {
  factor: number;
  enable: boolean;
  maskThreshold: number;
  invert: boolean;
  color: Vector3;
  name: string;
  material?: null;
  selectUV: number;
}
export interface UserDataMap {
  source: string;
  authoringTool: string;
  sourceTool: string;
}
