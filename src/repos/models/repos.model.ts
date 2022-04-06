import * as mongoose from 'mongoose';

//JavaScript object
export const ReposSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  node_id: { type: String, required: true },
  name: { type: String, required: true },
  full_name: { type: String, required: true },
  private: { type: Boolean, required: true },
  owner: {
    login: { type: String, required: true },
    id: { type: Number, required: true },
    node_id: { type: String, required: true },
    avatar_url: { type: String, required: true },
    gravatar_id: { type: String, required: true },
    url: { type: String, required: true },
    html_url: { type: String, required: true },
    followers_url: { type: String, required: true },
    following_url: { type: String, required: true },
    gists_url: { type: String, required: true },
    starred_url: { type: String, required: true },
    subscriptions_url: { type: String, required: true },
    organizations_url: { type: String, required: true },
    repos_url: { type: String, required: true },
    events_url: { type: String, required: true },
    received_events_url: { type: String, required: true },
    type: { type: String, required: true },
    site_admin: { type: Boolean, required: true },
  },
  html_url: { type: String, required: true },
  description: { type: String, required: false },
  fork: { type: Boolean, required: true },
  url: { type: String, required: true },
  forks_url: { type: String, required: true },
  keys_url: { type: String, required: true },
  collaborators_url: { type: String, required: true },
  teams_url: { type: String, required: true },
  books_url: { type: String, required: true },
  issue_events_url: { type: String, required: true },
  events_url: { type: String, required: true },
  assignees_url: { type: String, required: true },
  branches_url: { type: String, required: true },
  tags_url: { type: String, required: true },
  blobs_url: { type: String, required: true },
  git_tags_url: { type: String, required: true },
  git_refs_url: { type: String, required: true },
  trees_url: { type: String, required: true },
  statuses_url: { type: String, required: true },
  languages_url: { type: String, required: true },
  stargazers_url: { type: String, required: true },
  contributors_url: { type: String, required: true },
  subscribers_url: { type: String, required: true },
  subscription_url: { type: String, required: true },
  commits_url: { type: String, required: true },
  git_commits_url: { type: String, required: true },
  comments_url: { type: String, required: true },
  issue_comment_url: { type: String, required: true },
  contents_url: { type: String, required: true },
  compare_url: { type: String, required: true },
  merges_url: { type: String, required: true },
  archive_url: { type: String, required: true },
  downloads_url: { type: String, required: true },
  issues_url: { type: String, required: true },
  pulls_url: { type: String, required: true },
  milestones_url: { type: String, required: true },
  notifications_url: { type: String, required: true },
  labels_url: { type: String, required: true },
  releases_url: { type: String, required: true },
  deployments_url: { type: String, required: true },
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true },
  pushed_at: { type: String, required: true },
  git_url: { type: String, required: true },
  ssh_url: { type: String, required: true },
  clone_url: { type: String, required: true },
  svn_url: { type: String, required: true },
  homepage: { type: String, required: false },
  size: { type: Number, required: true },
  stargazers_count: { type: Number, required: true },
  watchers_count: { type: Number, required: true },
  language: { type: String, required: false },
  has_issues: { type: Boolean, required: true },
  has_projects: { type: Boolean, required: true },
  has_downloads: { type: Boolean, required: true },
  has_wiki: { type: Boolean, required: true },
  has_pages: { type: Boolean, required: true },
  forks_count: { type: Number, required: true },
  mirror_url: { type: String, required: false },
  archived: { type: Boolean, required: true },
  disabled: { type: Boolean, required: true },
  open_issues_count: { type: Number, required: true },
  license: {
    key: { type: String, required: false },
    name: { type: String, required: false },
    spdx_id: { type: String, required: false },
    url: { type: String, required: false },
    node_id: { type: String, required: false },
  },
  allow_forking: { type: Boolean, required: true },
  is_template: { type: Boolean, required: true },
  topics: { type: Array, required: false },
  visibility: { type: String, required: true },
  forks: { type: Number, required: true },
  open_issues: { type: Number, required: true },
  watchers: { type: Number, required: true },
  default_branch: { type: String, required: true },
});

export interface Repos extends mongoose.Document {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  books_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
