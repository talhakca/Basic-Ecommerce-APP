export const mockCode = `
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectInterface } from 'rpd/api-sdk';
import { ActivatedRoute } from '@angular/router';
import { PAGE_DEFINITIONS, PATH_DEFINITIONS, QUERY_PARAM_DEFINITIONS } from 'rpd/shared/definitions';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { PROJECT_HOME_FEATURES_CONFIG } from 'rpd/shared/configs';
import { Tenant } from 'rpd/rappider-sdk';
import { Navigate } from 'libs/shared/src/lib/states/router/router.actions';
import { ButtonComponentConfig } from 'rpd/rappider-components/utils';

@Component({
  selector: 'rappider-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  project: ProjectInterface;
  tenant: Tenant;
  projectId: string;
  mainTitle: string;
  title: string | string[];

  QUERY_PARAM_DEFINITIONS = QUERY_PARAM_DEFINITIONS;

  subscriptions: Subscription[] = [];
  features = PROJECT_HOME_FEATURES_CONFIG;

  editButton: ButtonComponentConfig = {
    text: 'Edit Project'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit() {
    /* get project id by url and set into projectId variable */
    this.projectId = this.getProjectIdByUrl();
    /* if there is projectId id, get project details by projectId */
    if (this.projectId) {
      this.subscribeToData();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach(subscription => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToActiveProject(),
      this.subscribeToTenant()
    ];
  }

  subscribeToActiveProject() {
    return this.store.select(state => state.activeProject).subscribe(activeProject => {
      this.project = activeProject;
      if (this.project) {
        this.title = [this.project.name, PAGE_DEFINITIONS.PROJECTS.CHILDREN.PROJECTS_DETAIL.PAGE_TITLE];
      }
      this.mainTitle = 'PROJECT_MODULE.PROJECT_DETAIL_COMPONENT.PROJECT_DETAIL';
    });
  }

  subscribeToTenant() {
    return this.store.select(state => state.auth.tenant).subscribe(tenant => {
      this.tenant = tenant;
    });
  }

  getProjectIdByUrl(): string {
    return this.activatedRoute.snapshot.params.projectId;
  }
  navigateEditProject() {
    this.store.dispatch(new Navigate({ url: 'somePath' }));
  }
}

`;
