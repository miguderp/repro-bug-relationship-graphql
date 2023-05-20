/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    examples: Example;
    'collection-with-custom-id': CollectionWithCustomId;
    'collection-without-custom-id': CollectionWithoutCustomId;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Example {
  id: string;
  relation_that_works_in_graphql?: string | CollectionWithoutCustomId;
  relation_that_does_not_work_in_graphql?: number | CollectionWithCustomId;
  someField?: string;
  updatedAt: string;
  createdAt: string;
}
export interface CollectionWithoutCustomId {
  id: string;
  someField?: string;
  updatedAt: string;
  createdAt: string;
}
export interface CollectionWithCustomId {
  id: number;
  someField?: string;
  updatedAt: string;
  createdAt: string;
}