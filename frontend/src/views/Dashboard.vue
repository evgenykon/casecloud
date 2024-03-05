<script setup>
import { useUserStore } from '../stores/user'
import { useTestStore } from '../stores/test'
import DashboardListItem from "../components/dashboard/DashboardListItem.vue";
import ListItemBadge from "../components/dashboard/ListItemBadge.vue";
import ListItemBug from "../components/dashboard/ListItemBug.vue";
import ActivityRow from "../components/dashboard/ActivityRow.vue";
import WorkloadProgressBar from "../components/dashboard/WorkloadProgressBar.vue";
import ListItemBlock from "../components/dashboard/ListItemBlock.vue";

const users = useUserStore()
const tests = useTestStore()
</script>

<template>
  <div class="dashboard">
    <h1 class="page-title">Dashboard</h1>
    <h4>Test requests</h4>

    <div class="row">
      <div class="col card rounded">
        <div class="head">
          <span class="title">New</span>
          <span>Today</span>
          <a href="#">Week</a>
          <a href="#">All</a>
        </div>
        <div class="rows">
          <dashboard-list-item
              v-for="test of tests.createdList"
              :number="test.number"
              :branch="test.branch"
              :created-at="test.createdAt"
              :created-by="test.createdBy"
              clickable
          >
            <list-item-badge color="grey" :value="test.modulesCount" />
            <list-item-badge color="grey" :value="test.casesCount" />
          </dashboard-list-item>
        </div>
        <div class="footer">
          <a href="#">1</a>
          <a href="#">2</a>
        </div>
      </div>

      <div class="col card rounded">
        <div class="head">
          <span class="title">Tested</span>
          <span>Today</span>
          <a href="#">Week</a>
          <a href="#">All</a>
        </div>
        <div class="rows">
          <dashboard-list-item
              v-for="test of tests.testedList"
              :number="test.number"
              :branch="test.branch"
              :created-at="test.createdAt"
              :created-by="test.createdBy"
              :tested-at="test.testedAt"
              :tested-by="test.testedBy"
              clickable
          >
            <list-item-block />
            <list-item-bug :value="test.bugsCount" />
            <list-item-badge color="grey" :value="test.modulesCount" />
            <list-item-badge color="grey" :value="test.casesCount" />
          </dashboard-list-item>
        </div>
      </div>
    </div>

    <div class="row">
      <h4 class="col">Last activity</h4>
      <h4 class="col">Test team workload</h4>
    </div>

    <div class="row">
      <div class="col card rounded bg-grey">
        <activity-row v-for="item of tests.lastActivity"
                      :date-at="item.dateAt"
                      :user="item.user"
                      :branch="item.branch"
                      :action="item.action"
                      :request-number="item.requestNumber"
                      :comment="`defines ${item.modulesCount} modules with ${item.casesCount} cases to check`"
        />
      </div>
      <div class="col card rounded">
        <div class="head">
          <span class="title"></span>
          <span>1 day</span>
          <a href="#">2 days</a>
          <a href="#">1 week</a>
        </div>
        <workload-progress-bar v-for="item of tests.teamWorkload"
                               :user="item.user"
                               :completed-cases="item.completeCasesCount"
                               :total-completed-cases="item.totalCompleteCasesCount"></workload-progress-bar>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.dashboard {
  h4 {
    margin-bottom: 8px;
  }
  .card {
    padding: 5px;
    margin-bottom: 24px;
    & > .head {
      font-size: 14px;
      display: flex;
      width: 100%;
      flex-wrap: nowrap;
      justify-content: flex-start;
      gap: 10px;
      padding: 0 5px;
      margin-bottom: 6px;
      & > .title {
        flex: 1;
        font-size: 16px;
      }
      & > a {
        color: var(--link-color);
        &:hover {
          color: var(--link-hover);
          text-decoration: underline;
          text-decoration-color: var(--link-hover);
        }
      }
    }
    & > .rows {
      display: flex;
      gap: 3px;
      flex-flow: column;
    }
    & > .footer {
      font-size: 14px;
      display: flex;
      width: 100%;
      flex-wrap: nowrap;
      justify-content: flex-end;
      gap: 10px;
      padding: 0 5px;
      margin-top: 6px;
      & > a {
        font-size: 14px;
        color: var(--link-color);
        &:hover {
          color: var(--link-hover);
          text-decoration: underline;
          text-decoration-color: var(--link-hover);
        }
      }
    }
  }
}
</style>
