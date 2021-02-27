/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
  PrismicImageThumbnailsType: any;
};











type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.resolutions.base64'
  | 'childrenImageSharp.resolutions.tracedSVG'
  | 'childrenImageSharp.resolutions.aspectRatio'
  | 'childrenImageSharp.resolutions.width'
  | 'childrenImageSharp.resolutions.height'
  | 'childrenImageSharp.resolutions.src'
  | 'childrenImageSharp.resolutions.srcSet'
  | 'childrenImageSharp.resolutions.srcWebp'
  | 'childrenImageSharp.resolutions.srcSetWebp'
  | 'childrenImageSharp.resolutions.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.sizes.base64'
  | 'childrenImageSharp.sizes.tracedSVG'
  | 'childrenImageSharp.sizes.aspectRatio'
  | 'childrenImageSharp.sizes.src'
  | 'childrenImageSharp.sizes.srcSet'
  | 'childrenImageSharp.sizes.srcWebp'
  | 'childrenImageSharp.sizes.srcSetWebp'
  | 'childrenImageSharp.sizes.sizes'
  | 'childrenImageSharp.sizes.originalImg'
  | 'childrenImageSharp.sizes.originalName'
  | 'childrenImageSharp.sizes.presentationWidth'
  | 'childrenImageSharp.sizes.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.resolutions.base64'
  | 'childImageSharp.resolutions.tracedSVG'
  | 'childImageSharp.resolutions.aspectRatio'
  | 'childImageSharp.resolutions.width'
  | 'childImageSharp.resolutions.height'
  | 'childImageSharp.resolutions.src'
  | 'childImageSharp.resolutions.srcSet'
  | 'childImageSharp.resolutions.srcWebp'
  | 'childImageSharp.resolutions.srcSetWebp'
  | 'childImageSharp.resolutions.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.sizes.base64'
  | 'childImageSharp.sizes.tracedSVG'
  | 'childImageSharp.sizes.aspectRatio'
  | 'childImageSharp.sizes.src'
  | 'childImageSharp.sizes.srcSet'
  | 'childImageSharp.sizes.srcWebp'
  | 'childImageSharp.sizes.srcSetWebp'
  | 'childImageSharp.sizes.sizes'
  | 'childImageSharp.sizes.originalImg'
  | 'childImageSharp.sizes.originalName'
  | 'childImageSharp.sizes.presentationWidth'
  | 'childImageSharp.sizes.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'resolutions.base64'
  | 'resolutions.tracedSVG'
  | 'resolutions.aspectRatio'
  | 'resolutions.width'
  | 'resolutions.height'
  | 'resolutions.src'
  | 'resolutions.srcSet'
  | 'resolutions.srcWebp'
  | 'resolutions.srcSetWebp'
  | 'resolutions.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'sizes.base64'
  | 'sizes.tracedSVG'
  | 'sizes.aspectRatio'
  | 'sizes.src'
  | 'sizes.srcSet'
  | 'sizes.srcWebp'
  | 'sizes.srcSetWebp'
  | 'sizes.sizes'
  | 'sizes.originalImg'
  | 'sizes.originalName'
  | 'sizes.presentationWidth'
  | 'sizes.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImgixUrlParamsInput = {
  /**
   * Specifies an aspect ratio to maintain when resizing and cropping the image.
   * [See docs](https://docs.imgix.com/apis/url/size/ar).
   */
  readonly ar: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  readonly auto: Maybe<Scalars['String']>;
  /**
   * Colors the background of padded and partially-transparent images. Default:
   * `fff`. [See docs](https://docs.imgix.com/apis/url/bg).
   */
  readonly bg: Maybe<Scalars['String']>;
  /**
   * Changes the blend alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-align).
   */
  readonly blendAlign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly blendalign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly ba: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  readonly blendAlpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly blendalpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly balph: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  readonly blendColor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendcolor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendClr: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendclr: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  readonly blendCrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly blendcrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly bc: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  readonly blendFit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly blendfit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly bf: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  readonly blendH: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  readonly blendh: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  readonly bh: Maybe<Scalars['Int']>;
  /**
   * Sets the blend mode for a blend image. Default: `overlay`. [See
   * docs](https://docs.imgix.com/apis/url/blending/blend-mode).
   */
  readonly blendMode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly blendmode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly bm: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  readonly blendPad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly blendpad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly bp: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  readonly blendSize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly blendsize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly bs: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  readonly blendW: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  readonly blendw: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  readonly bw: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-x).
   */
  readonly blendX: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly blendx: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly bx: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the blend image relative to its parent. Default: `0`.
   * [See docs](https://docs.imgix.com/apis/url/blending/blend-y).
   */
  readonly blendY: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly blendy: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly by: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  readonly blend: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  readonly b: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  readonly blur: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  readonly borderBottom: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  readonly borderLeft: Maybe<Scalars['Int']>;
  /**
   * Sets the inner radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner).
   */
  readonly borderRadiusInner: Maybe<Scalars['String']>;
  /**
   * Sets the outer radius of the image's border in pixels. [See
   * docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius).
   */
  readonly borderRadius: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  readonly borderRight: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  readonly borderTop: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  readonly border: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  readonly bri: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  readonly ch: Maybe<Scalars['String']>;
  /**
   * Specifies the output chroma subsampling rate. Default: `420`. [See
   * docs](https://docs.imgix.com/apis/url/format/chromasub).
   */
  readonly chromasub: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  readonly colorquant: Maybe<Scalars['Int']>;
  /**
   * Specifies how many colors to include in a palette-extraction response.
   * Default: `6`. [See
   * docs](https://docs.imgix.com/apis/url/color-palette/colors).
   */
  readonly colors: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  readonly con: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  readonly cornerRadius: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  readonly crop: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  readonly cs: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  readonly dl: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  readonly dpi: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  readonly dpr: Maybe<Scalars['Float']>;
  /**
   * Changes the alpha of the duotone effect atop the source image. Default: `100`.
   * [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha).
   */
  readonly duotoneAlpha: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  readonly duotone: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  readonly exp: Maybe<Scalars['Int']>;
  /**
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that
   * time will output a 404 status code. [See
   * docs](https://docs.imgix.com/apis/url/expires).
   */
  readonly expires: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  readonly faceindex: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  readonly facepad: Maybe<Scalars['Float']>;
  /**
   * Specifies that face data should be included in output when combined with
   * `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces).
   */
  readonly faces: Maybe<Scalars['Int']>;
  /**
   * Sets the fill color for images with additional space created by the fit
   * setting. Default: `fff`. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill-color).
   */
  readonly fillColor: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  readonly fillcolor: Maybe<Scalars['String']>;
  /**
   * Determines how to fill in additional space created by the fit setting. [See
   * docs](https://docs.imgix.com/apis/url/fill/fill).
   */
  readonly fill: Maybe<Scalars['String']>;
  /**
   * Specifies how to map the source image to the output image dimensions. Default:
   * `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit).
   */
  readonly fit: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  readonly f: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  readonly flip: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  readonly fm: Maybe<Scalars['String']>;
  /**
   * Displays crosshairs identifying the location of the set focal point. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug).
   */
  readonly fpDebug: Maybe<Scalars['Boolean']>;
  /**
   * Sets the relative horizontal value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x).
   */
  readonly fpX: Maybe<Scalars['Int']>;
  /**
   * Sets the relative vertical value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y).
   */
  readonly fpY: Maybe<Scalars['Int']>;
  /**
   * Sets the relative zoom value for the focal point of an image. [See
   * docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z).
   */
  readonly fpZ: Maybe<Scalars['Int']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  readonly height: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  readonly high: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  readonly htn: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  readonly hue: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  readonly invert: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  readonly inv: Maybe<Scalars['Boolean']>;
  /**
   * Specifies that the output image should be a lossless variant. Default:
   * `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless).
   */
  readonly lossless: Maybe<Scalars['Boolean']>;
  /**
   * Changes the watermark alignment relative to the parent image. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-align).
   */
  readonly markAlign: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly ma: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly markalign: Maybe<Scalars['String']>;
  /**
   * Changes the alpha of the watermark image. Default: `100`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-alpha).
   */
  readonly markAlpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly markalpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly malph: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  readonly markBase: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly mb: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly markbase: Maybe<Scalars['String']>;
  /**
   * Specifies the fit mode for watermark images. Default: `clip`. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-fit).
   */
  readonly markFit: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly mf: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly markfit: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  readonly markH: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  readonly mh: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  readonly markh: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  readonly markPad: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly mp: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly markpad: Maybe<Scalars['Int']>;
  /**
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   * Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot).
   */
  readonly markRot: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  readonly markScale: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly ms: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly markscale: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  readonly markTile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly mtile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly marktile: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  readonly markW: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  readonly mw: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  readonly markw: Maybe<Scalars['Int']>;
  /**
   * Adjusts the x-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-x).
   */
  readonly markX: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly mx: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly markx: Maybe<Scalars['Int']>;
  /**
   * Adjusts the y-offset of the watermark image relative to its parent. [See
   * docs](https://docs.imgix.com/apis/url/watermark/mark-y).
   */
  readonly markY: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly my: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly marky: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  readonly mark: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  readonly m: Maybe<Scalars['String']>;
  /**
   * Colors the background of the transparent mask area of images. Default: `fff`.
   * [See docs](https://docs.imgix.com/apis/url/mask/mask-bg).
   */
  readonly maskBg: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  readonly maskbg: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  readonly mask: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  readonly maxH: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  readonly maxHeight: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  readonly maxW: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  readonly maxWidth: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  readonly minH: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  readonly minHeight: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  readonly minW: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  readonly minWidth: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  readonly monochrome: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  readonly mono: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  readonly nr: Maybe<Scalars['Int']>;
  /**
   * Provides a threshold by which to sharpen an image. Default: `20`. [See
   * docs](https://docs.imgix.com/apis/url/noise-reduction/nrs).
   */
  readonly nrs: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  readonly orient: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  readonly or: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  readonly padBottom: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  readonly padLeft: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  readonly padRight: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  readonly padTop: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  readonly pad: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  readonly page: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  readonly palette: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  readonly pdfAnnotation: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  readonly annotation: Maybe<Scalars['Boolean']>;
  /**
   * Specifies a CSS prefix for all classes in palette-extraction. Default:
   * `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix).
   */
  readonly prefix: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  readonly px: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  readonly q: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  readonly rect: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  readonly rot: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  readonly sat: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  readonly sepia: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  readonly shad: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  readonly sharp: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  readonly transparency: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  readonly trimColor: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  readonly trimcolor: Maybe<Scalars['String']>;
  /**
   * Specifies the mean difference on a trim operation. Default: `11`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-md).
   */
  readonly trimMd: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  readonly trimmd: Maybe<Scalars['Float']>;
  /**
   * Pads the area of the source image before trimming. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-pad).
   */
  readonly trimPad: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  readonly trimpad: Maybe<Scalars['Int']>;
  /**
   * Specifies the standard deviation on a trim operation. Default: `10`. [See
   * docs](https://docs.imgix.com/apis/url/trim/trim-sd).
   */
  readonly trimSd: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  readonly trimsd: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  readonly trimTol: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  readonly trimtol: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  readonly trim: Maybe<Scalars['String']>;
  /**
   * Sets the vertical and horizontal alignment of rendered text relative to the
   * base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align).
   */
  readonly txtAlign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly txtalign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly ta: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  readonly txtClip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly txtclip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly tcl: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  readonly txtColor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtcolor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtClr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtclr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly tc: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  readonly txtFit: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  readonly txtfit: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  readonly txtFont: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly tf: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly txtfont: Maybe<Scalars['String']>;
  /**
   * Sets the leading (line spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-lead).
   */
  readonly txtLead: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  readonly txtlead: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  readonly txtLig: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  readonly txtlig: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  readonly txtLineColor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlinecolor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtLineClr: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlineclr: Maybe<Scalars['String']>;
  /**
   * Outlines the rendered text with a specified color. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-line).
   */
  readonly txtLine: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly txtline: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly tl: Maybe<Scalars['Int']>;
  /**
   * Specifies the padding (in device-independent pixels) between a textbox and the
   * edges of the base image. [See
   * docs](https://docs.imgix.com/apis/url/text/txt-pad).
   */
  readonly txtPad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly txtpad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly tp: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  readonly txtShad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly txtshad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly tsh: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  readonly txtSize: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly tsz: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly txtsize: Maybe<Scalars['Int']>;
  /**
   * Sets the tracking (letter spacing) for rendered text. Only works on the
   * multi-line text endpoint. Default: `0`. [See
   * docs](https://docs.imgix.com/apis/url/typesetting/txt-track).
   */
  readonly txtTrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly txttrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly tt: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  readonly txtWidth: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  readonly txtwidth: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  readonly txt: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  readonly t: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  readonly usm: Maybe<Scalars['Int']>;
  /**
   * Specifies the radius for an unsharp mask operation. Default: `2.5`. [See
   * docs](https://docs.imgix.com/apis/url/adjustment/usmrad).
   */
  readonly usmrad: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  readonly vib: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  readonly w: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  readonly width: Maybe<Scalars['Int']>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type PrismicAbout = PrismicDocument & Node & {
  readonly data: Maybe<PrismicAboutDataType>;
  readonly dataRaw: Scalars['JSON'];
  readonly dataString: Scalars['String'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  readonly type: Scalars['String'];
  readonly prismicId: Scalars['ID'];
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicAbout_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAbout_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAboutCareersGroupType = {
  readonly company_name: Maybe<Scalars['String']>;
  readonly from_date: Maybe<Scalars['Date']>;
  readonly end_date: Maybe<Scalars['Date']>;
  readonly description: Maybe<PrismicStructuredTextType>;
};


type PrismicAboutCareersGroupType_from_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAboutCareersGroupType_end_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAboutCareersGroupTypeFilterInput = {
  readonly company_name: Maybe<StringQueryOperatorInput>;
  readonly from_date: Maybe<DateQueryOperatorInput>;
  readonly end_date: Maybe<DateQueryOperatorInput>;
  readonly description: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicAboutCareersGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicAboutCareersGroupTypeFilterInput>;
};

type PrismicAboutConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAboutEdge>;
  readonly nodes: ReadonlyArray<PrismicAbout>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicAboutGroupConnection>;
};


type PrismicAboutConnection_distinctArgs = {
  field: PrismicAboutFieldsEnum;
};


type PrismicAboutConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAboutFieldsEnum;
};

type PrismicAboutDataType = {
  readonly profile: Maybe<PrismicImageType>;
  readonly name: Maybe<PrismicStructuredTextType>;
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly github_link: Maybe<PrismicLinkType>;
  readonly careers: Maybe<ReadonlyArray<Maybe<PrismicAboutCareersGroupType>>>;
};

type PrismicAboutDataTypeFilterInput = {
  readonly profile: Maybe<PrismicImageTypeFilterInput>;
  readonly name: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly description: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly github_link: Maybe<PrismicLinkTypeFilterInput>;
  readonly careers: Maybe<PrismicAboutCareersGroupTypeFilterListInput>;
};

type PrismicAboutEdge = {
  readonly next: Maybe<PrismicAbout>;
  readonly node: PrismicAbout;
  readonly previous: Maybe<PrismicAbout>;
};

type PrismicAboutFieldsEnum =
  | 'data.profile.alt'
  | 'data.profile.copyright'
  | 'data.profile.dimensions.width'
  | 'data.profile.dimensions.height'
  | 'data.profile.url'
  | 'data.profile.fixed.base64'
  | 'data.profile.fixed.src'
  | 'data.profile.fixed.srcSet'
  | 'data.profile.fixed.srcWebp'
  | 'data.profile.fixed.srcSetWebp'
  | 'data.profile.fixed.sizes'
  | 'data.profile.fixed.width'
  | 'data.profile.fixed.height'
  | 'data.profile.fluid.base64'
  | 'data.profile.fluid.src'
  | 'data.profile.fluid.srcSet'
  | 'data.profile.fluid.srcWebp'
  | 'data.profile.fluid.srcSetWebp'
  | 'data.profile.fluid.sizes'
  | 'data.profile.fluid.aspectRatio'
  | 'data.profile.localFile.sourceInstanceName'
  | 'data.profile.localFile.absolutePath'
  | 'data.profile.localFile.relativePath'
  | 'data.profile.localFile.extension'
  | 'data.profile.localFile.size'
  | 'data.profile.localFile.prettySize'
  | 'data.profile.localFile.modifiedTime'
  | 'data.profile.localFile.accessTime'
  | 'data.profile.localFile.changeTime'
  | 'data.profile.localFile.birthTime'
  | 'data.profile.localFile.root'
  | 'data.profile.localFile.dir'
  | 'data.profile.localFile.base'
  | 'data.profile.localFile.ext'
  | 'data.profile.localFile.name'
  | 'data.profile.localFile.relativeDirectory'
  | 'data.profile.localFile.dev'
  | 'data.profile.localFile.mode'
  | 'data.profile.localFile.nlink'
  | 'data.profile.localFile.uid'
  | 'data.profile.localFile.gid'
  | 'data.profile.localFile.rdev'
  | 'data.profile.localFile.ino'
  | 'data.profile.localFile.atimeMs'
  | 'data.profile.localFile.mtimeMs'
  | 'data.profile.localFile.ctimeMs'
  | 'data.profile.localFile.atime'
  | 'data.profile.localFile.mtime'
  | 'data.profile.localFile.ctime'
  | 'data.profile.localFile.birthtime'
  | 'data.profile.localFile.birthtimeMs'
  | 'data.profile.localFile.blksize'
  | 'data.profile.localFile.blocks'
  | 'data.profile.localFile.url'
  | 'data.profile.localFile.publicURL'
  | 'data.profile.localFile.childrenImageSharp'
  | 'data.profile.localFile.id'
  | 'data.profile.localFile.children'
  | 'data.profile.thumbnails'
  | 'data.name.html'
  | 'data.name.text'
  | 'data.name.raw'
  | 'data.description.html'
  | 'data.description.text'
  | 'data.description.raw'
  | 'data.github_link.link_type'
  | 'data.github_link.isBroken'
  | 'data.github_link.url'
  | 'data.github_link.target'
  | 'data.github_link.size'
  | 'data.github_link.id'
  | 'data.github_link.type'
  | 'data.github_link.tags'
  | 'data.github_link.lang'
  | 'data.github_link.slug'
  | 'data.github_link.uid'
  | 'data.github_link.raw'
  | 'data.careers'
  | 'data.careers.company_name'
  | 'data.careers.from_date'
  | 'data.careers.end_date'
  | 'data.careers.description.html'
  | 'data.careers.description.text'
  | 'data.careers.description.raw'
  | 'dataRaw'
  | 'dataString'
  | 'first_publication_date'
  | 'href'
  | 'url'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'alternate_languages'
  | 'alternate_languages.link_type'
  | 'alternate_languages.isBroken'
  | 'alternate_languages.url'
  | 'alternate_languages.target'
  | 'alternate_languages.size'
  | 'alternate_languages.id'
  | 'alternate_languages.type'
  | 'alternate_languages.tags'
  | 'alternate_languages.lang'
  | 'alternate_languages.slug'
  | 'alternate_languages.uid'
  | 'alternate_languages.raw'
  | 'type'
  | 'prismicId'
  | '_previewable'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicAboutFilterInput = {
  readonly data: Maybe<PrismicAboutDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicAboutGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAboutEdge>;
  readonly nodes: ReadonlyArray<PrismicAbout>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicAboutSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicAboutFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicAllDocumentTypes = PrismicPost | PrismicAbout;

type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  readonly dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified
   * via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  readonly dataString: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  readonly first_publication_date: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  readonly href: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  readonly url: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  readonly id: Scalars['ID'];
  /** The document's language. */
  readonly lang: Scalars['String'];
  /** The document's most recent publication date */
  readonly last_publication_date: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  readonly tags: ReadonlyArray<Scalars['String']>;
  /** Alternate languages for the document. */
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  readonly type: Scalars['String'];
  /** The document's Prismic ID. */
  readonly prismicId: Scalars['ID'];
  /**
   * Marks the document as previewable using Prismic's preview system. Include this
   * field if updates to the document should be previewable by content editors
   * before publishing. **Note: the value of this field is not stable and should
   * not be used directly**.
   */
  readonly _previewable: Scalars['ID'];
};


type PrismicDocument_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicDocument_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Embed videos, songs, tweets, slices, etc. */
type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  readonly author_id: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  readonly author_name: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  readonly author_url: Maybe<Scalars['String']>;
  /**
   * The suggested cache lifetime for this resource, in seconds. Consumers may
   * choose to use this value or not. Fetched via oEmbed data.
   */
  readonly cache_age: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  readonly embed_url: Maybe<Scalars['String']>;
  /**
   * The HTML required to display the resource. The HTML should have no padding or
   * margins. Consumers may wish to load the HTML in an off-domain iframe to avoid
   * XSS vulnerabilities. Fetched via oEmbed data.
   */
  readonly html: Maybe<Scalars['String']>;
  /** The name of the resource. */
  readonly name: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  readonly provider_name: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  readonly provider_url: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  readonly thumbnail_height: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  readonly thumbnail_url: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  readonly thumbnail_width: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  readonly title: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  readonly type: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  readonly version: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  readonly url: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  readonly width: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  readonly height: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  readonly media_id: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  readonly description: Maybe<Scalars['String']>;
};

/** A field for storing geo-coordinates. */
type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  readonly latitude: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  readonly longitude: Maybe<Scalars['Float']>;
};

/** Dimensions for images. */
type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  readonly width: Scalars['Int'];
  /** Height of the image in pixels. */
  readonly height: Scalars['Int'];
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type PrismicImageFixedType = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type PrismicImageFixedTypeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type PrismicImageFluidType = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly aspectRatio: Scalars['Float'];
};

type PrismicImageFluidTypeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type PrismicImageInterface = {
  /** The image's alternative text. */
  readonly alt: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  readonly copyright: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  readonly url: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  readonly localFile: Maybe<File>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
};


type PrismicImageThumbnailsTypeQueryOperatorInput = {
  readonly eq: Maybe<Scalars['PrismicImageThumbnailsType']>;
  readonly ne: Maybe<Scalars['PrismicImageThumbnailsType']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

/** An image thumbnail with constraints. */
type PrismicImageThumbnailType = PrismicImageInterface & {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  readonly url: Maybe<Scalars['String']>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
  readonly localFile: Maybe<File>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
type PrismicImageType = PrismicImageInterface & {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  readonly url: Maybe<Scalars['String']>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_urlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

type PrismicImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<PrismicImageFixedTypeFilterInput>;
  readonly fluid: Maybe<PrismicImageFluidTypeFilterInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly thumbnails: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

/** Link to web, media, and internal content. */
type PrismicLinkType = {
  /** The type of link. */
  readonly link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  readonly isBroken: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  readonly url: Maybe<Scalars['String']>;
  /** The link's target. */
  readonly target: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  readonly size: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  readonly id: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  readonly type: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  readonly lang: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  readonly uid: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  readonly document: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicLinkTypeFilterInput = {
  readonly link_type: Maybe<PrismicLinkTypesQueryOperatorInput>;
  readonly isBroken: Maybe<BooleanQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicLinkTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicLinkTypeFilterInput>;
};

/** Types of links. */
type PrismicLinkTypes =
  /** Any of the other types */
  | 'Any'
  /** Internal content */
  | 'Document'
  /** Internal media content */
  | 'Media'
  /** URL */
  | 'Web';

type PrismicLinkTypesQueryOperatorInput = {
  readonly eq: Maybe<PrismicLinkTypes>;
  readonly ne: Maybe<PrismicLinkTypes>;
  readonly in: Maybe<ReadonlyArray<Maybe<PrismicLinkTypes>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<PrismicLinkTypes>>>;
};

type PrismicPost = PrismicDocument & Node & {
  readonly data: Maybe<PrismicPostDataType>;
  readonly dataRaw: Scalars['JSON'];
  readonly dataString: Scalars['String'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  readonly type: Scalars['String'];
  readonly prismicId: Scalars['ID'];
  readonly _previewable: Scalars['ID'];
  readonly uid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicPost_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicPost_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicPostBodyHr = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicPostBodyHrConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyHrEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyHr>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostBodyHrGroupConnection>;
};


type PrismicPostBodyHrConnection_distinctArgs = {
  field: PrismicPostBodyHrFieldsEnum;
};


type PrismicPostBodyHrConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostBodyHrFieldsEnum;
};

type PrismicPostBodyHrEdge = {
  readonly next: Maybe<PrismicPostBodyHr>;
  readonly node: PrismicPostBodyHr;
  readonly previous: Maybe<PrismicPostBodyHr>;
};

type PrismicPostBodyHrFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostBodyHrFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostBodyHrGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyHrEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyHr>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostBodyHrSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostBodyHrFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPostBodyImage = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicPostBodyImagePrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicPostBodyImageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyImageEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostBodyImageGroupConnection>;
};


type PrismicPostBodyImageConnection_distinctArgs = {
  field: PrismicPostBodyImageFieldsEnum;
};


type PrismicPostBodyImageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostBodyImageFieldsEnum;
};

type PrismicPostBodyImageEdge = {
  readonly next: Maybe<PrismicPostBodyImage>;
  readonly node: PrismicPostBodyImage;
  readonly previous: Maybe<PrismicPostBodyImage>;
};

type PrismicPostBodyImageFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.image.alt'
  | 'primary.image.copyright'
  | 'primary.image.dimensions.width'
  | 'primary.image.dimensions.height'
  | 'primary.image.url'
  | 'primary.image.fixed.base64'
  | 'primary.image.fixed.src'
  | 'primary.image.fixed.srcSet'
  | 'primary.image.fixed.srcWebp'
  | 'primary.image.fixed.srcSetWebp'
  | 'primary.image.fixed.sizes'
  | 'primary.image.fixed.width'
  | 'primary.image.fixed.height'
  | 'primary.image.fluid.base64'
  | 'primary.image.fluid.src'
  | 'primary.image.fluid.srcSet'
  | 'primary.image.fluid.srcWebp'
  | 'primary.image.fluid.srcSetWebp'
  | 'primary.image.fluid.sizes'
  | 'primary.image.fluid.aspectRatio'
  | 'primary.image.localFile.sourceInstanceName'
  | 'primary.image.localFile.absolutePath'
  | 'primary.image.localFile.relativePath'
  | 'primary.image.localFile.extension'
  | 'primary.image.localFile.size'
  | 'primary.image.localFile.prettySize'
  | 'primary.image.localFile.modifiedTime'
  | 'primary.image.localFile.accessTime'
  | 'primary.image.localFile.changeTime'
  | 'primary.image.localFile.birthTime'
  | 'primary.image.localFile.root'
  | 'primary.image.localFile.dir'
  | 'primary.image.localFile.base'
  | 'primary.image.localFile.ext'
  | 'primary.image.localFile.name'
  | 'primary.image.localFile.relativeDirectory'
  | 'primary.image.localFile.dev'
  | 'primary.image.localFile.mode'
  | 'primary.image.localFile.nlink'
  | 'primary.image.localFile.uid'
  | 'primary.image.localFile.gid'
  | 'primary.image.localFile.rdev'
  | 'primary.image.localFile.ino'
  | 'primary.image.localFile.atimeMs'
  | 'primary.image.localFile.mtimeMs'
  | 'primary.image.localFile.ctimeMs'
  | 'primary.image.localFile.atime'
  | 'primary.image.localFile.mtime'
  | 'primary.image.localFile.ctime'
  | 'primary.image.localFile.birthtime'
  | 'primary.image.localFile.birthtimeMs'
  | 'primary.image.localFile.blksize'
  | 'primary.image.localFile.blocks'
  | 'primary.image.localFile.url'
  | 'primary.image.localFile.publicURL'
  | 'primary.image.localFile.childrenImageSharp'
  | 'primary.image.localFile.id'
  | 'primary.image.localFile.children'
  | 'primary.image.thumbnails'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostBodyImageFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicPostBodyImagePrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostBodyImageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyImageEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyImage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostBodyImagePrimaryType = {
  readonly image: Maybe<PrismicImageType>;
};

type PrismicPostBodyImagePrimaryTypeFilterInput = {
  readonly image: Maybe<PrismicImageTypeFilterInput>;
};

type PrismicPostBodyImageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostBodyImageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPostBodyMarkdown = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicPostBodyMarkdownPrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicPostBodyMarkdownConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyMarkdownEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyMarkdown>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostBodyMarkdownGroupConnection>;
};


type PrismicPostBodyMarkdownConnection_distinctArgs = {
  field: PrismicPostBodyMarkdownFieldsEnum;
};


type PrismicPostBodyMarkdownConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostBodyMarkdownFieldsEnum;
};

type PrismicPostBodyMarkdownEdge = {
  readonly next: Maybe<PrismicPostBodyMarkdown>;
  readonly node: PrismicPostBodyMarkdown;
  readonly previous: Maybe<PrismicPostBodyMarkdown>;
};

type PrismicPostBodyMarkdownFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.markdown.html'
  | 'primary.markdown.text'
  | 'primary.markdown.raw'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostBodyMarkdownFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicPostBodyMarkdownPrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostBodyMarkdownGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyMarkdownEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyMarkdown>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostBodyMarkdownPrimaryType = {
  readonly markdown: Maybe<PrismicStructuredTextType>;
};

type PrismicPostBodyMarkdownPrimaryTypeFilterInput = {
  readonly markdown: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicPostBodyMarkdownSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostBodyMarkdownFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPostBodyQuote = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicPostBodyQuotePrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicPostBodyQuoteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyQuoteEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyQuote>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostBodyQuoteGroupConnection>;
};


type PrismicPostBodyQuoteConnection_distinctArgs = {
  field: PrismicPostBodyQuoteFieldsEnum;
};


type PrismicPostBodyQuoteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostBodyQuoteFieldsEnum;
};

type PrismicPostBodyQuoteEdge = {
  readonly next: Maybe<PrismicPostBodyQuote>;
  readonly node: PrismicPostBodyQuote;
  readonly previous: Maybe<PrismicPostBodyQuote>;
};

type PrismicPostBodyQuoteFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.quote.html'
  | 'primary.quote.text'
  | 'primary.quote.raw'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostBodyQuoteFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicPostBodyQuotePrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostBodyQuoteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyQuoteEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyQuote>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostBodyQuotePrimaryType = {
  readonly quote: Maybe<PrismicStructuredTextType>;
};

type PrismicPostBodyQuotePrimaryTypeFilterInput = {
  readonly quote: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicPostBodyQuoteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostBodyQuoteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPostBodySlicesType = PrismicPostBodyText | PrismicPostBodyImage | PrismicPostBodyQuote | PrismicPostBodyHr | PrismicPostBodyMarkdown;

type PrismicPostBodyText = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicPostBodyTextPrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicPostBodyTextConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyTextEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyText>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostBodyTextGroupConnection>;
};


type PrismicPostBodyTextConnection_distinctArgs = {
  field: PrismicPostBodyTextFieldsEnum;
};


type PrismicPostBodyTextConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostBodyTextFieldsEnum;
};

type PrismicPostBodyTextEdge = {
  readonly next: Maybe<PrismicPostBodyText>;
  readonly node: PrismicPostBodyText;
  readonly previous: Maybe<PrismicPostBodyText>;
};

type PrismicPostBodyTextFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.content.html'
  | 'primary.content.text'
  | 'primary.content.raw'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostBodyTextFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicPostBodyTextPrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostBodyTextGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostBodyTextEdge>;
  readonly nodes: ReadonlyArray<PrismicPostBodyText>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostBodyTextPrimaryType = {
  readonly content: Maybe<PrismicStructuredTextType>;
};

type PrismicPostBodyTextPrimaryTypeFilterInput = {
  readonly content: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicPostBodyTextSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostBodyTextFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostEdge>;
  readonly nodes: ReadonlyArray<PrismicPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostGroupConnection>;
};


type PrismicPostConnection_distinctArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPostFieldsEnum;
};

type PrismicPostDataType = {
  readonly category: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
  readonly migrated_date: Maybe<Scalars['Date']>;
  readonly cover_image: Maybe<PrismicImageType>;
  readonly body: Maybe<ReadonlyArray<Maybe<PrismicPostBodySlicesType>>>;
};


type PrismicPostDataType_migrated_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicPostDataTypeFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly migrated_date: Maybe<DateQueryOperatorInput>;
  readonly cover_image: Maybe<PrismicImageTypeFilterInput>;
};

type PrismicPostEdge = {
  readonly next: Maybe<PrismicPost>;
  readonly node: PrismicPost;
  readonly previous: Maybe<PrismicPost>;
};

type PrismicPostFieldsEnum =
  | 'data.category'
  | 'data.title.html'
  | 'data.title.text'
  | 'data.title.raw'
  | 'data.migrated_date'
  | 'data.cover_image.alt'
  | 'data.cover_image.copyright'
  | 'data.cover_image.dimensions.width'
  | 'data.cover_image.dimensions.height'
  | 'data.cover_image.url'
  | 'data.cover_image.fixed.base64'
  | 'data.cover_image.fixed.src'
  | 'data.cover_image.fixed.srcSet'
  | 'data.cover_image.fixed.srcWebp'
  | 'data.cover_image.fixed.srcSetWebp'
  | 'data.cover_image.fixed.sizes'
  | 'data.cover_image.fixed.width'
  | 'data.cover_image.fixed.height'
  | 'data.cover_image.fluid.base64'
  | 'data.cover_image.fluid.src'
  | 'data.cover_image.fluid.srcSet'
  | 'data.cover_image.fluid.srcWebp'
  | 'data.cover_image.fluid.srcSetWebp'
  | 'data.cover_image.fluid.sizes'
  | 'data.cover_image.fluid.aspectRatio'
  | 'data.cover_image.localFile.sourceInstanceName'
  | 'data.cover_image.localFile.absolutePath'
  | 'data.cover_image.localFile.relativePath'
  | 'data.cover_image.localFile.extension'
  | 'data.cover_image.localFile.size'
  | 'data.cover_image.localFile.prettySize'
  | 'data.cover_image.localFile.modifiedTime'
  | 'data.cover_image.localFile.accessTime'
  | 'data.cover_image.localFile.changeTime'
  | 'data.cover_image.localFile.birthTime'
  | 'data.cover_image.localFile.root'
  | 'data.cover_image.localFile.dir'
  | 'data.cover_image.localFile.base'
  | 'data.cover_image.localFile.ext'
  | 'data.cover_image.localFile.name'
  | 'data.cover_image.localFile.relativeDirectory'
  | 'data.cover_image.localFile.dev'
  | 'data.cover_image.localFile.mode'
  | 'data.cover_image.localFile.nlink'
  | 'data.cover_image.localFile.uid'
  | 'data.cover_image.localFile.gid'
  | 'data.cover_image.localFile.rdev'
  | 'data.cover_image.localFile.ino'
  | 'data.cover_image.localFile.atimeMs'
  | 'data.cover_image.localFile.mtimeMs'
  | 'data.cover_image.localFile.ctimeMs'
  | 'data.cover_image.localFile.atime'
  | 'data.cover_image.localFile.mtime'
  | 'data.cover_image.localFile.ctime'
  | 'data.cover_image.localFile.birthtime'
  | 'data.cover_image.localFile.birthtimeMs'
  | 'data.cover_image.localFile.blksize'
  | 'data.cover_image.localFile.blocks'
  | 'data.cover_image.localFile.url'
  | 'data.cover_image.localFile.publicURL'
  | 'data.cover_image.localFile.childrenImageSharp'
  | 'data.cover_image.localFile.id'
  | 'data.cover_image.localFile.children'
  | 'data.cover_image.thumbnails'
  | 'dataRaw'
  | 'dataString'
  | 'first_publication_date'
  | 'href'
  | 'url'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'alternate_languages'
  | 'alternate_languages.link_type'
  | 'alternate_languages.isBroken'
  | 'alternate_languages.url'
  | 'alternate_languages.target'
  | 'alternate_languages.size'
  | 'alternate_languages.id'
  | 'alternate_languages.type'
  | 'alternate_languages.tags'
  | 'alternate_languages.lang'
  | 'alternate_languages.slug'
  | 'alternate_languages.uid'
  | 'alternate_languages.raw'
  | 'type'
  | 'prismicId'
  | '_previewable'
  | 'uid'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicPostFilterInput = {
  readonly data: Maybe<PrismicPostDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPostEdge>;
  readonly nodes: ReadonlyArray<PrismicPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicSliceType = {
  /** The slice type API ID. */
  readonly slice_type: Scalars['String'];
  /** The slice label. */
  readonly slice_label: Maybe<Scalars['String']>;
};

/** A text field with formatting options. */
type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  readonly html: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  readonly text: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly prismicPostBodyText: Maybe<PrismicPostBodyText>;
  readonly allPrismicPostBodyText: PrismicPostBodyTextConnection;
  readonly prismicPostBodyImage: Maybe<PrismicPostBodyImage>;
  readonly allPrismicPostBodyImage: PrismicPostBodyImageConnection;
  readonly prismicPostBodyQuote: Maybe<PrismicPostBodyQuote>;
  readonly allPrismicPostBodyQuote: PrismicPostBodyQuoteConnection;
  readonly prismicPostBodyHr: Maybe<PrismicPostBodyHr>;
  readonly allPrismicPostBodyHr: PrismicPostBodyHrConnection;
  readonly prismicPostBodyMarkdown: Maybe<PrismicPostBodyMarkdown>;
  readonly allPrismicPostBodyMarkdown: PrismicPostBodyMarkdownConnection;
  readonly prismicPost: Maybe<PrismicPost>;
  readonly allPrismicPost: PrismicPostConnection;
  readonly prismicAbout: Maybe<PrismicAbout>;
  readonly allPrismicAbout: PrismicAboutConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostBodyTextArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicPostBodyTextPrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostBodyTextArgs = {
  filter: Maybe<PrismicPostBodyTextFilterInput>;
  sort: Maybe<PrismicPostBodyTextSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostBodyImageArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicPostBodyImagePrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostBodyImageArgs = {
  filter: Maybe<PrismicPostBodyImageFilterInput>;
  sort: Maybe<PrismicPostBodyImageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostBodyQuoteArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicPostBodyQuotePrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostBodyQuoteArgs = {
  filter: Maybe<PrismicPostBodyQuoteFilterInput>;
  sort: Maybe<PrismicPostBodyQuoteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostBodyHrArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostBodyHrArgs = {
  filter: Maybe<PrismicPostBodyHrFilterInput>;
  sort: Maybe<PrismicPostBodyHrSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostBodyMarkdownArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicPostBodyMarkdownPrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostBodyMarkdownArgs = {
  filter: Maybe<PrismicPostBodyMarkdownFilterInput>;
  sort: Maybe<PrismicPostBodyMarkdownSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPostArgs = {
  data: Maybe<PrismicPostDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  type: Maybe<StringQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPostArgs = {
  filter: Maybe<PrismicPostFilterInput>;
  sort: Maybe<PrismicPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicAboutArgs = {
  data: Maybe<PrismicAboutDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  type: Maybe<StringQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicAboutArgs = {
  filter: Maybe<PrismicAboutFilterInput>;
  sort: Maybe<PrismicAboutSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly category: Maybe<Scalars['String']>;
  readonly tag: Maybe<Scalars['String']>;
  readonly hasPrevious: Maybe<Scalars['Boolean']>;
  readonly previousUid: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly hasNext: Maybe<Scalars['Boolean']>;
  readonly nextUid: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly tag: Maybe<StringQueryOperatorInput>;
  readonly hasPrevious: Maybe<BooleanQueryOperatorInput>;
  readonly previousUid: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly hasNext: Maybe<BooleanQueryOperatorInput>;
  readonly nextUid: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.category'
  | 'context.tag'
  | 'context.hasPrevious'
  | 'context.previousUid'
  | 'context.uid'
  | 'context.hasNext'
  | 'context.nextUid'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.emitSchema._xschemaxgraphql'
  | 'pluginCreator.pluginOptions.repositoryName'
  | 'pluginCreator.pluginOptions.prismicToolbar'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.policy'
  | 'pluginCreator.pluginOptions.policy.userAgent'
  | 'pluginCreator.pluginOptions.policy.allow'
  | 'pluginCreator.pluginOptions.policy.sitemap'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.feeds'
  | 'pluginCreator.pluginOptions.feeds.query'
  | 'pluginCreator.pluginOptions.feeds.output'
  | 'pluginCreator.pluginOptions.feeds.title'
  | 'pluginCreator.pluginOptions.feeds.link'
  | 'pluginCreator.pluginOptions.trackingId'
  | 'pluginCreator.pluginOptions.head'
  | 'pluginCreator.pluginOptions.anonymize'
  | 'pluginCreator.pluginOptions.respectDNT'
  | 'pluginCreator.pluginOptions.pageTransitionDelay'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.emitSchema._xschemaxgraphql'
  | 'pluginOptions.repositoryName'
  | 'pluginOptions.prismicToolbar'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.policy'
  | 'pluginOptions.policy.userAgent'
  | 'pluginOptions.policy.allow'
  | 'pluginOptions.policy.sitemap'
  | 'pluginOptions.query'
  | 'pluginOptions.feeds'
  | 'pluginOptions.feeds.query'
  | 'pluginOptions.feeds.output'
  | 'pluginOptions.feeds.title'
  | 'pluginOptions.feeds.link'
  | 'pluginOptions.trackingId'
  | 'pluginOptions.head'
  | 'pluginOptions.anonymize'
  | 'pluginOptions.respectDNT'
  | 'pluginOptions.pageTransitionDelay'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemas>;
  readonly prismicToolbar: Maybe<Scalars['Boolean']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>;
  readonly query: Maybe<Scalars['String']>;
  readonly feeds: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly trackingId: Maybe<Scalars['String']>;
  readonly head: Maybe<Scalars['Boolean']>;
  readonly anonymize: Maybe<Scalars['Boolean']>;
  readonly respectDNT: Maybe<Scalars['Boolean']>;
  readonly pageTransitionDelay: Maybe<Scalars['Int']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly _xschemaxgraphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly _xschemaxgraphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFeeds = {
  readonly query: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly repositoryName: Maybe<StringQueryOperatorInput>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  readonly prismicToolbar: Maybe<BooleanQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly feeds: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly trackingId: Maybe<StringQueryOperatorInput>;
  readonly head: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize: Maybe<BooleanQueryOperatorInput>;
  readonly respectDNT: Maybe<BooleanQueryOperatorInput>;
  readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly allow: Maybe<Scalars['String']>;
  readonly sitemap: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly allow: Maybe<StringQueryOperatorInput>;
  readonly sitemap: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

type SitePluginPluginOptionsSchemas = {
  readonly post: Maybe<SitePluginPluginOptionsSchemasPost>;
  readonly about: Maybe<SitePluginPluginOptionsSchemasAbout>;
};

type SitePluginPluginOptionsSchemasAbout = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasAboutMain>;
};

type SitePluginPluginOptionsSchemasAboutFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasAboutMainFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMain = {
  readonly profile: Maybe<SitePluginPluginOptionsSchemasAboutMainProfile>;
  readonly name: Maybe<SitePluginPluginOptionsSchemasAboutMainName>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasAboutMainDescription>;
  readonly github_link: Maybe<SitePluginPluginOptionsSchemasAboutMainGithub_link>;
  readonly careers: Maybe<SitePluginPluginOptionsSchemasAboutMainCareers>;
};

type SitePluginPluginOptionsSchemasAboutMainCareers = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFields = {
  readonly company_name: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_name>;
  readonly from_date: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_date>;
  readonly end_date: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_date>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescription>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_name = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_date = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFilterInput = {
  readonly company_name: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsCompany_nameFilterInput>;
  readonly from_date: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateFilterInput>;
  readonly end_date: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsEnd_dateFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_date = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFrom_dateConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainCareersFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainDescriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainDescriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainFilterInput = {
  readonly profile: Maybe<SitePluginPluginOptionsSchemasAboutMainProfileFilterInput>;
  readonly name: Maybe<SitePluginPluginOptionsSchemasAboutMainNameFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasAboutMainDescriptionFilterInput>;
  readonly github_link: Maybe<SitePluginPluginOptionsSchemasAboutMainGithub_linkFilterInput>;
  readonly careers: Maybe<SitePluginPluginOptionsSchemasAboutMainCareersFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainGithub_link = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainGithub_linkConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainGithub_linkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainGithub_linkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainGithub_linkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainGithub_linkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainName = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainNameConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainNameConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainNameConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainNameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainNameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasAboutMainProfile = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainProfileConfig>;
};

type SitePluginPluginOptionsSchemasAboutMainProfileConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasAboutMainProfileConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasAboutMainProfileConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasAboutMainProfileConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainProfileConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasAboutMainProfileConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasAboutMainProfileFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasAboutMainProfileConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasFilterInput = {
  readonly post: Maybe<SitePluginPluginOptionsSchemasPostFilterInput>;
  readonly about: Maybe<SitePluginPluginOptionsSchemasAboutFilterInput>;
};

type SitePluginPluginOptionsSchemasPost = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasPostMain>;
};

type SitePluginPluginOptionsSchemasPostFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasPostMainFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMain = {
  readonly category: Maybe<SitePluginPluginOptionsSchemasPostMainCategory>;
  readonly uid: Maybe<SitePluginPluginOptionsSchemasPostMainUid>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasPostMainTitle>;
  readonly migrated_date: Maybe<SitePluginPluginOptionsSchemasPostMainMigrated_date>;
  readonly cover_image: Maybe<SitePluginPluginOptionsSchemasPostMainCover_image>;
  readonly body: Maybe<SitePluginPluginOptionsSchemasPostMainBody>;
};

type SitePluginPluginOptionsSchemasPostMainBody = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfig>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfig = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabels>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoices>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoices = {
  readonly text: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesText>;
  readonly image: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImage>;
  readonly quote: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuote>;
  readonly hr: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesHr>;
  readonly markdown: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdown>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesFilterInput = {
  readonly text: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextFilterInput>;
  readonly image: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageFilterInput>;
  readonly quote: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteFilterInput>;
  readonly hr: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesHrFilterInput>;
  readonly markdown: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesHr = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesHrFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImage = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeat>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeat = {
  readonly image: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImage>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatFilterInput = {
  readonly image: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImage = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfig>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesImageNon_repeatImageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdown = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeat>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeat = {
  readonly markdown: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdown>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatFilterInput = {
  readonly markdown: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdown = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownConfig>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesMarkdownNon_repeatMarkdownConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuote = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeat>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeat = {
  readonly quote: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuote>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatFilterInput = {
  readonly quote: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuote = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteConfig>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesQuoteNon_repeatQuoteConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesText = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeat>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatFilterInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeat = {
  readonly content: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContent>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContent = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentConfig>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatFilterInput = {
  readonly content: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesTextNon_repeatContentFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigFilterInput = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsFilterInput>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigChoicesFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabels = {
  readonly text: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsText>>>;
  readonly hr: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHr>>>;
  readonly markdown: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdown>>>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsFilterInput = {
  readonly text: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsTextFilterListInput>;
  readonly hr: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHrFilterListInput>;
  readonly markdown: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdownFilterListInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHr = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHrFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHrFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsHrFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdown = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdownFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdownFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsMarkdownFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsText = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsTextFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsTextFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigLabelsTextFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainBodyFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainBodyConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainCategory = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainCategoryConfig>;
};

type SitePluginPluginOptionsSchemasPostMainCategoryConfig = {
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly default_value: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainCategoryConfigFilterInput = {
  readonly options: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainCategoryFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainCategoryConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainCover_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainCover_imageConfig>;
};

type SitePluginPluginOptionsSchemasPostMainCover_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasPostMainCover_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainCover_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasPostMainCover_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainCover_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasPostMainCover_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainCover_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainCover_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainFilterInput = {
  readonly category: Maybe<SitePluginPluginOptionsSchemasPostMainCategoryFilterInput>;
  readonly uid: Maybe<SitePluginPluginOptionsSchemasPostMainUidFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasPostMainTitleFilterInput>;
  readonly migrated_date: Maybe<SitePluginPluginOptionsSchemasPostMainMigrated_dateFilterInput>;
  readonly cover_image: Maybe<SitePluginPluginOptionsSchemasPostMainCover_imageFilterInput>;
  readonly body: Maybe<SitePluginPluginOptionsSchemasPostMainBodyFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainMigrated_date = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainMigrated_dateConfig>;
};

type SitePluginPluginOptionsSchemasPostMainMigrated_dateConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainMigrated_dateConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainMigrated_dateFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainMigrated_dateConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainTitleConfig>;
};

type SitePluginPluginOptionsSchemasPostMainTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasPostMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainUidConfig>;
};

type SitePluginPluginOptionsSchemasPostMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasPostMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasPostMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasPostMainUidConfigFilterInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type HomePostListTemplateQueryVariables = Exact<{
  category: Maybe<Scalars['String']>;
  tag: Maybe<Scalars['String']>;
}>;


type HomePostListTemplateQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly info: (
    Pick<PrismicPostConnection, 'totalCount'>
    & { readonly group: ReadonlyArray<Pick<PrismicPostGroupConnection, 'fieldValue' | 'totalCount'>> }
  ), readonly allPrismicPost: { readonly nodes: ReadonlyArray<(
      Pick<PrismicPost, 'uid' | 'first_publication_date'>
      & { first_publication_date_raw: PrismicPost['first_publication_date'] }
      & { readonly data: Maybe<(
        Pick<PrismicPostDataType, 'migrated_date'>
        & { migrated_date_raw: PrismicPostDataType['migrated_date'] }
        & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body: Maybe<ReadonlyArray<Maybe<(
          { readonly __typename: 'PrismicPostBodyText' }
          & { readonly primary: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> }
        ) | { readonly __typename: 'PrismicPostBodyImage' } | { readonly __typename: 'PrismicPostBodyQuote' } | { readonly __typename: 'PrismicPostBodyHr' } | { readonly __typename: 'PrismicPostBodyMarkdown' }>>> }
      )> }
    )> } };

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PostTemplateQueryVariables = Exact<{
  uid: Scalars['String'];
  hasNext: Scalars['Boolean'];
  nextUid: Maybe<Scalars['String']>;
  hasPrevious: Scalars['Boolean'];
  previousUid: Maybe<Scalars['String']>;
}>;


type PostTemplateQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly prismicPost: Maybe<(
    Pick<PrismicPost, 'tags' | 'uid'>
    & { publicationDate: PrismicPost['first_publication_date'], publicationDateRaw: PrismicPost['first_publication_date'] }
    & { readonly data: Maybe<(
      Pick<PrismicPostDataType, 'category' | 'migrated_date'>
      & { migrated_date_raw: PrismicPostDataType['migrated_date'] }
      & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly coverImage: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<(
              Pick<ImageSharpFluid, 'presentationWidth' | 'presentationHeight'>
              & GatsbyImageSharpFluid_withWebpFragment
            )> }> }> }>, readonly body: Maybe<ReadonlyArray<Maybe<(
        { readonly __typename: 'PrismicPostBodyText' }
        & { readonly primary: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> }
      ) | (
        { readonly __typename: 'PrismicPostBodyImage' }
        & { readonly primary: Maybe<{ readonly image: Maybe<(
            Pick<PrismicImageType, 'alt'>
            & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment> }> }> }
          )> }> }
      ) | (
        { readonly __typename: 'PrismicPostBodyQuote' }
        & { readonly primary: Maybe<{ readonly quote: Maybe<Pick<PrismicStructuredTextType, 'html' | 'text'>> }> }
      ) | { readonly __typename: 'PrismicPostBodyHr' } | { readonly __typename: 'PrismicPostBodyMarkdown' }>>> }
    )> }
  )>, readonly previousPrismicPost: Maybe<(
    Pick<PrismicPost, 'uid'>
    & { readonly data: Maybe<{ readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
  )>, readonly nextPrismicPost: Maybe<(
    Pick<PrismicPost, 'uid'>
    & { readonly data: Maybe<{ readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type AboutQueryVariables = Exact<{ [key: string]: never; }>;


type AboutQuery = { readonly prismicAbout: Maybe<{ readonly data: Maybe<{ readonly careers: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicAboutCareersGroupType, 'company_name' | 'end_date' | 'from_date'>
        & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
      )>>> }> }> };

type IndexQueryVariables = Exact<{ [key: string]: never; }>;


type IndexQuery = { readonly info: (
    Pick<PrismicPostConnection, 'totalCount'>
    & { readonly group: ReadonlyArray<Pick<PrismicPostGroupConnection, 'fieldValue' | 'totalCount'>> }
  ), readonly allPrismicPost: { readonly nodes: ReadonlyArray<(
      Pick<PrismicPost, 'uid' | 'first_publication_date'>
      & { first_publication_date_raw: PrismicPost['first_publication_date'] }
      & { readonly data: Maybe<(
        Pick<PrismicPostDataType, 'migrated_date'>
        & { migrated_date_raw: PrismicPostDataType['migrated_date'] }
        & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body: Maybe<ReadonlyArray<Maybe<(
          { readonly __typename: 'PrismicPostBodyText' }
          & { readonly primary: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'text' | 'html'>> }> }
        ) | { readonly __typename: 'PrismicPostBodyImage' } | { readonly __typename: 'PrismicPostBodyQuote' } | { readonly __typename: 'PrismicPostBodyHr' } | { readonly __typename: 'PrismicPostBodyMarkdown' }>>> }
      )> }
    )> } };

type PostProfileCardQueryVariables = Exact<{ [key: string]: never; }>;


type PostProfileCardQuery = { readonly prismicAbout: Maybe<{ readonly data: Maybe<{ readonly name: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly github_link: Maybe<Pick<PrismicLinkType, 'url'>> }> }> };

type AboutCareersQueryVariables = Exact<{ [key: string]: never; }>;


type AboutCareersQuery = { readonly prismicAbout: Maybe<{ readonly data: Maybe<{ readonly careers: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicAboutCareersGroupType, 'company_name' | 'end_date' | 'from_date'>
        & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
      )>>> }> }> };

type AboutProfileQueryVariables = Exact<{ [key: string]: never; }>;


type AboutProfileQuery = { readonly prismicAbout: Maybe<{ readonly data: Maybe<{ readonly profile: Maybe<(
        Pick<PrismicImageType, 'alt'>
        & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixed_withWebpFragment> }> }> }
      )> }> }> };

type LayoutQueryVariables = Exact<{ [key: string]: never; }>;


type LayoutQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type SEOQueryVariables = Exact<{ [key: string]: never; }>;


type SEOQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'author' | 'description' | 'siteUrl'>> }> };

type GatsbyPrismicImageFixedFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyPrismicImageFixed_noBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyPrismicImageFixed_withWebpFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFixed_withWebp_noBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFluidFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyPrismicImageFluid_noBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyPrismicImageFluid_withWebpFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyPrismicImageFluid_withWebp_noBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}