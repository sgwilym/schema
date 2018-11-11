/**
 * This file is autogenerated. Do not edit directly.
 */

export type BaseScalarNames = "String" | "Int" | "Float" | "ID" | "Boolean";

export interface Generated_Type_Query_Field_currentUser {
  returnType:
    | Generated_Type_User["backingType"]
    | PromiseLike<Generated_Type_User["backingType"]>;
  args: {};
}

export interface Generated_Type_Query_Field_entry {
  returnType:
    | null
    | Generated_Type_Entry["backingType"]
    | PromiseLike<null | Generated_Type_Entry["backingType"]>;
  args: Generated_Type_Query_Field_entry_Args;
}

export interface Generated_Type_Query_Field_entry_Args {
  repoFullName: string;
}

export interface Generated_Type_Query_Field_feed {
  returnType:
    | Generated_Type_Entry["backingType"][]
    | PromiseLike<Generated_Type_Entry["backingType"][]>
    | PromiseLike<Generated_Type_Entry["backingType"]>[];
  args: Generated_Type_Query_Field_feed_Args;
}

export interface Generated_Type_Query_Field_feed_Args {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  type: GeneratedEnums["FeedType"];
}

export interface Generated_Type_Query_Fields {
  currentUser: Generated_Type_Query_Field_currentUser;
  entry: Generated_Type_Query_Field_entry;
  feed: Generated_Type_Query_Field_feed;
}

export interface Generated_Type_Query {
  backingType: unknown;
  fields: Generated_Type_Query_Fields;
}

export interface Generated_Type_User_Field_avatar_url {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_User_Field_html_url {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_User_Field_login {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_User_Fields {
  avatar_url: Generated_Type_User_Field_avatar_url;
  html_url: Generated_Type_User_Field_html_url;
  login: Generated_Type_User_Field_login;
}

export interface Generated_Type_User {
  backingType: unknown;
  fields: Generated_Type_User_Fields;
}

export interface Generated_Type_Entry_Field_commentCount {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Entry_Field_comments {
  returnType:
    | Generated_Type_Comment["backingType"][]
    | PromiseLike<Generated_Type_Comment["backingType"][]>
    | PromiseLike<Generated_Type_Comment["backingType"]>[];
  args: Generated_Type_Entry_Field_comments_Args;
}

export interface Generated_Type_Entry_Field_comments_Args {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}

export interface Generated_Type_Entry_Field_createdAt {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Entry_Field_hotScore {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Entry_Field_id {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Entry_Field_postedBy {
  returnType:
    | null
    | Generated_Type_User["backingType"]
    | PromiseLike<null | Generated_Type_User["backingType"]>;
  args: {};
}

export interface Generated_Type_Entry_Field_repository {
  returnType:
    | Generated_Type_Repository["backingType"]
    | PromiseLike<Generated_Type_Repository["backingType"]>;
  args: {};
}

export interface Generated_Type_Entry_Field_score {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Entry_Field_vote {
  returnType:
    | Generated_Type_Vote["backingType"]
    | PromiseLike<Generated_Type_Vote["backingType"]>;
  args: {};
}

export interface Generated_Type_Entry_Fields {
  commentCount: Generated_Type_Entry_Field_commentCount;
  comments: Generated_Type_Entry_Field_comments;
  createdAt: Generated_Type_Entry_Field_createdAt;
  hotScore: Generated_Type_Entry_Field_hotScore;
  id: Generated_Type_Entry_Field_id;
  postedBy: Generated_Type_Entry_Field_postedBy;
  repository: Generated_Type_Entry_Field_repository;
  score: Generated_Type_Entry_Field_score;
  vote: Generated_Type_Entry_Field_vote;
}

export interface Generated_Type_Entry {
  backingType: unknown;
  fields: Generated_Type_Entry_Fields;
}

export interface Generated_Type_Comment_Field_content {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Comment_Field_createdAt {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Comment_Field_id {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Comment_Field_postedBy {
  returnType:
    | null
    | Generated_Type_User["backingType"]
    | PromiseLike<null | Generated_Type_User["backingType"]>;
  args: {};
}

export interface Generated_Type_Comment_Field_repoName {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Comment_Fields {
  content: Generated_Type_Comment_Field_content;
  createdAt: Generated_Type_Comment_Field_createdAt;
  id: Generated_Type_Comment_Field_id;
  postedBy: Generated_Type_Comment_Field_postedBy;
  repoName: Generated_Type_Comment_Field_repoName;
}

export interface Generated_Type_Comment {
  backingType: unknown;
  fields: Generated_Type_Comment_Fields;
}

export interface Generated_Type_Repository_Field_description {
  returnType: null | string | PromiseLike<null | string>;
  args: {};
}

export interface Generated_Type_Repository_Field_full_name {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Repository_Field_html_url {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Repository_Field_name {
  returnType: string | PromiseLike<string>;
  args: {};
}

export interface Generated_Type_Repository_Field_open_issues_count {
  returnType: null | number | PromiseLike<null | number>;
  args: {};
}

export interface Generated_Type_Repository_Field_owner {
  returnType:
    | null
    | Generated_Type_User["backingType"]
    | PromiseLike<null | Generated_Type_User["backingType"]>;
  args: {};
}

export interface Generated_Type_Repository_Field_stargazers_count {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Repository_Fields {
  description: Generated_Type_Repository_Field_description;
  full_name: Generated_Type_Repository_Field_full_name;
  html_url: Generated_Type_Repository_Field_html_url;
  name: Generated_Type_Repository_Field_name;
  open_issues_count: Generated_Type_Repository_Field_open_issues_count;
  owner: Generated_Type_Repository_Field_owner;
  stargazers_count: Generated_Type_Repository_Field_stargazers_count;
}

export interface Generated_Type_Repository {
  backingType: unknown;
  fields: Generated_Type_Repository_Fields;
}

export interface Generated_Type_Vote_Field_vote_value {
  returnType: number | PromiseLike<number>;
  args: {};
}

export interface Generated_Type_Vote_Fields {
  vote_value: Generated_Type_Vote_Field_vote_value;
}

export interface Generated_Type_Vote {
  backingType: unknown;
  fields: Generated_Type_Vote_Fields;
}

export interface Generated_Type_Mutation_Field_submitComment {
  returnType:
    | Generated_Type_Comment["backingType"]
    | PromiseLike<Generated_Type_Comment["backingType"]>;
  args: Generated_Type_Mutation_Field_submitComment_Args;
}

export interface Generated_Type_Mutation_Field_submitComment_Args {
  commentContent: string;
  repoFullName: string;
}

export interface Generated_Type_Mutation_Field_submitRepository {
  returnType:
    | Generated_Type_Entry["backingType"]
    | PromiseLike<Generated_Type_Entry["backingType"]>;
  args: Generated_Type_Mutation_Field_submitRepository_Args;
}

export interface Generated_Type_Mutation_Field_submitRepository_Args {
  repoFullName: string;
}

export interface Generated_Type_Mutation_Field_vote {
  returnType:
    | Generated_Type_Entry["backingType"]
    | PromiseLike<Generated_Type_Entry["backingType"]>;
  args: Generated_Type_Mutation_Field_vote_Args;
}

export interface Generated_Type_Mutation_Field_vote_Args {
  repoFullName: string;
  type: GeneratedEnums["VoteType"];
}

export interface Generated_Type_Mutation_Fields {
  submitComment: Generated_Type_Mutation_Field_submitComment;
  submitRepository: Generated_Type_Mutation_Field_submitRepository;
  vote: Generated_Type_Mutation_Field_vote;
}

export interface Generated_Type_Mutation {
  backingType: unknown;
  fields: Generated_Type_Mutation_Fields;
}

export interface GeneratedScalars {}

export interface GeneratedInterfaces {}

export interface GeneratedUnions {}

export interface GeneratedEnums {
  FeedType: "HOT" | "NEW" | "TOP";
  VoteType: "CANCEL" | "DOWN" | "UP";
}
export interface GeneratedInputObjects {}
export interface GeneratedObjects {
  Query: Generated_Type_Query;
  User: Generated_Type_User;
  Entry: Generated_Type_Entry;
  Comment: Generated_Type_Comment;
  Repository: Generated_Type_Repository;
  Vote: Generated_Type_Vote;
  Mutation: Generated_Type_Mutation;
}

export interface GeneratedSchema {
  context: {};
  enums: GeneratedEnums;
  objects: GeneratedObjects;
  inputObjects: GeneratedInputObjects;
  unions: GeneratedUnions;
  scalars: GeneratedScalars;
  interfaces: GeneratedInterfaces;

  // For simplicity in autocomplete:
  availableInputTypes:
    | BaseScalarNames
    | Extract<keyof GeneratedInputObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedScalars, string>;
  availableOutputTypes:
    | BaseScalarNames
    | Extract<keyof GeneratedObjects, string>
    | Extract<keyof GeneratedEnums, string>
    | Extract<keyof GeneratedUnions, string>
    | Extract<keyof GeneratedInterfaces, string>
    | Extract<keyof GeneratedScalars, string>;
}

export type Gen = GeneratedSchema;

declare global {
  interface GQLiteralGen extends GeneratedSchema {}
}
