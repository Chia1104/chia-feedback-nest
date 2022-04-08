import { ApiProperty } from '@nestjs/swagger';

export class ReposDTO {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly full_name: string;
  @ApiProperty()
  readonly owner: {
    readonly login: string;
    readonly id: number;
    readonly node_id: string;
    readonly avatar_url: string;
    readonly gravatar_id: string;
    readonly url: string;
    readonly html_url: string;
    readonly followers_url: string;
    readonly following_url: string;
    readonly gists_url: string;
    readonly starred_url: string;
    readonly subscriptions_url: string;
    readonly organizations_url: string;
    readonly repos_url: string;
    readonly events_url: string;
    readonly received_events_url: string;
    readonly type: string;
    readonly site_admin: boolean;
  };
  @ApiProperty()
  readonly private: boolean;
  @ApiProperty()
  readonly html_url: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly fork: boolean;
  @ApiProperty()
  readonly url: string;
  @ApiProperty()
  readonly forks_url: string;
  @ApiProperty()
  readonly keys_url: string;
  @ApiProperty()
  readonly collaborators_url: string;
  @ApiProperty()
  readonly teams_url: string;
  @ApiProperty()
  readonly hooks_url: string;
  @ApiProperty()
  readonly issue_events_url: string;
  @ApiProperty()
  readonly events_url: string;
  @ApiProperty()
  readonly assignees_url: string;
  @ApiProperty()
  readonly branches_url: string;
  @ApiProperty()
  readonly tags_url: string;
  @ApiProperty()
  readonly blobs_url: string;
  @ApiProperty()
  readonly git_tags_url: string;
  @ApiProperty()
  readonly git_refs_url: string;
  @ApiProperty()
  readonly trees_url: string;
  @ApiProperty()
  readonly statuses_url: string;
  @ApiProperty()
  readonly languages_url: string;
  @ApiProperty()
  readonly stargazers_url: string;
  @ApiProperty()
  readonly contributors_url: string;
  @ApiProperty()
  readonly subscribers_url: string;
  @ApiProperty()
  readonly subscription_url: string;
  @ApiProperty()
  readonly commits_url: string;
  @ApiProperty()
  readonly git_commits_url: string;
  @ApiProperty()
  readonly comments_url: string;
  @ApiProperty()
  readonly issue_comment_url: string;
  @ApiProperty()
  readonly contents_url: string;
  @ApiProperty()
  readonly compare_url: string;
  @ApiProperty()
  readonly merges_url: string;
  @ApiProperty()
  readonly archive_url: string;
  @ApiProperty()
  readonly downloads_url: string;
  @ApiProperty()
  readonly issues_url: string;
  @ApiProperty()
  readonly pulls_url: string;
  @ApiProperty()
  readonly milestones_url: string;
  @ApiProperty()
  readonly notifications_url: string;
  @ApiProperty()
  readonly labels_url: string;
  @ApiProperty()
  readonly releases_url: string;
  @ApiProperty()
  readonly deployments_url: string;
  @ApiProperty()
  readonly created_at: string;
  @ApiProperty()
  readonly updated_at: string;
  @ApiProperty()
  readonly pushed_at: string;
  @ApiProperty()
  readonly git_url: string;
  @ApiProperty()
  readonly ssh_url: string;
  @ApiProperty()
  readonly clone_url: string;
  @ApiProperty()
  readonly svn_url: string;
  @ApiProperty()
  readonly homepage: string;
  @ApiProperty()
  readonly size: number;
  @ApiProperty()
  readonly stargazers_count: number;
  @ApiProperty()
  readonly watchers_count: number;
  @ApiProperty()
  readonly language: string;
  @ApiProperty()
  readonly has_issues: boolean;
  @ApiProperty()
  readonly has_projects: boolean;
  @ApiProperty()
  readonly has_downloads: boolean;
  @ApiProperty()
  readonly has_wiki: boolean;
  @ApiProperty()
  readonly has_pages: boolean;
  @ApiProperty()
  readonly forks_count: number;
  @ApiProperty()
  readonly mirror_url: string;
  @ApiProperty()
  readonly archived: boolean;
  @ApiProperty()
  readonly disabled: boolean;
  @ApiProperty()
  readonly open_issues_count: number;
  @ApiProperty()
  readonly license: {
    readonly key: string;
    readonly name: string;
    readonly spdx_id: string;
    readonly url: string;
    readonly node_id: string;
  };
  @ApiProperty()
  readonly allow_forking: boolean;
  @ApiProperty()
  readonly is_template: boolean;
  @ApiProperty()
  readonly topics: string[];
  @ApiProperty()
  readonly visibility: string;
  @ApiProperty()
  readonly forks: number;
  @ApiProperty()
  readonly open_issues: number;
  @ApiProperty()
  readonly watchers: number;
  @ApiProperty()
  readonly default_branch: string;
}
