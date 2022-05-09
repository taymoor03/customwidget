/*!
 * Copyright 2021, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  SBUserProfile,
  UserListRequestQuery,
  UserListResponse,
} from "@staffbase/widget-sdk";

const user: SBUserProfile = {
  firstName: "Lucy",
  lastName: "Liu",
};

export const getUserInformation = async (
  _userId?: string
): Promise<SBUserProfile> => user;

export const getUserInformationByExternalId = async (
  _externalId: string
): Promise<SBUserProfile> => user;

export const getUserList = async (
  _query: UserListRequestQuery
): Promise<UserListResponse> => ({
  data: [{ id: "5c35e4feea2d15e6ffa8251d", ...user }],
  offset: 0,
  limit: 1,
  total: 1,
});
