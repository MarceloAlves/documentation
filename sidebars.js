module.exports = {
  monoSidebar: [
    "index",
    {
      type: "category",
      label: "Concepts",
      collapsible: true,
      collapsed: true,
      items: [
        "temporal",
        "workflows",
        "activities",
        "retry-policies",
        "workers",
        "tasks",
        "visibility",
        "clusters",
        "namespaces",
      ],
    },
    {
      type: "category",
      label: "Application development",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "application-development/index",
      },
      items: [
        "application-development/foundations",
        "application-development/features",
        "application-development/observability",
        "application-development/testing",
        "application-development/worker-performance",
      ],
    },
    {
      type: "category",
      label: "Temporal Cloud",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "cloud/index",
      },
      items: [
        "cloud/how-to-get-started-with-temporal-cloud",
        "cloud/how-to-manage-certificates-in-temporal-cloud",
        "cloud/how-to-manage-namespaces-in-temporal-cloud",
        "cloud/how-to-monitor-temporal-cloud-metrics",
        {
          type: "category",
          label: "tcld",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "cloud/tcld/index",
          },
          items: [
            "cloud/tcld/login",
            {
              type: "category",
              label: "account",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "cloud/tcld/account/index",
              },
              items: [
                "cloud/tcld/account/get",
                {
                  type: "category",
                  label: "metrics",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: "cloud/tcld/account/metrics/index",
                  },
                  items: [
                    "cloud/tcld/account/metrics/enable",
                    "cloud/tcld/account/metrics/disable",
                    {
                      type: "category",
                      label: "accepted-client-ca",
                      collapsible: true,
                      collapsed: true,
                      link: {
                        type: "doc",
                        id: "cloud/tcld/account/metrics/accepted-client-ca/index",
                      },
                      items: [
                        "cloud/tcld/account/metrics/accepted-client-ca/add",
                        "cloud/tcld/account/metrics/accepted-client-ca/list",
                        "cloud/tcld/account/metrics/accepted-client-ca/set",
                        "cloud/tcld/account/metrics/accepted-client-ca/remove",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "namespace",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "cloud/tcld/namespace/index",
              },
              items: [
                "cloud/tcld/namespace/list",
                "cloud/tcld/namespace/get",
                {
                  type: "category",
                  label: "accepted-client-ca",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: "cloud/tcld/namespace/accepted-client-ca/index",
                  },
                  items: [
                    "cloud/tcld/namespace/accepted-client-ca/add",
                    "cloud/tcld/namespace/accepted-client-ca/list",
                    "cloud/tcld/namespace/accepted-client-ca/set",
                    "cloud/tcld/namespace/accepted-client-ca/remove",
                  ],
                },
                {
                  type: "category",
                  label: "certificate-filters",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: "cloud/tcld/namespace/certificate-filters/index",
                  },
                  items: [
                    "cloud/tcld/namespace/certificate-filters/import",
                    "cloud/tcld/namespace/certificate-filters/export",
                    "cloud/tcld/namespace/certificate-filters/clear",
                  ],
                },
                {
                  type: "category",
                  label: "search-attributes",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: "cloud/tcld/namespace/search-attributes/index",
                  },
                  items: [
                    "cloud/tcld/namespace/search-attributes/add",
                    "cloud/tcld/namespace/search-attributes/rename",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "request",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "cloud/tcld/request/index",
              },
              items: ["cloud/tcld/request/get"],
            },
            "cloud/tcld/version",
          ],
        },
        {
          type: "link",
          label: "Release notes",
          href: "https://docs.temporal.io/cloud/release-notes",
        },
      ],
    },
    "cluster-deployment-guide",
    "server/security",
    {
      type: "category",
      label: "tctl",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "tctl/index",
      },
      items: [
        "tctl/how-to-install-tctl",
        "tctl/environment-variables",
        {
          type: "category",
          label: "tctl commands",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "tctl/index",
          },
          items: [
            {
              type: "category",
              label: "activity",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/activity/index",
              },
              items: ["tctl/activity/complete", "tctl/activity/fail"],
            },

            {
              type: "category",
              label: "batch",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/batch/index",
              },
              items: [
                "tctl/batch/start",
                "tctl/batch/list",
                "tctl/batch/describe",
                "tctl/batch/terminate",
              ],
            },
            {
              type: "category",
              label: "cluster",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/cluster/index",
              },
              items: [
                "tctl/cluster/health",
                "tctl/cluster/get-search-attributes",
              ],
            },
            {
              type: "category",
              label: "data-converter",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/data-converter/index",
              },
              items: ["tctl/data-converter/web"],
            },
            {
              type: "category",
              label: "namespace",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/namespace/index",
              },
              items: [
                "tctl/namespace/describe",
                "tctl/namespace/list",
                "tctl/namespace/register",
                "tctl/namespace/update",
              ],
            },
            {
              type: "category",
              label: "schedule",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/schedule/index",
              },
              items: [
                "tctl/schedule/create",
                "tctl/schedule/describe",
                "tctl/schedule/update",
                "tctl/schedule/delete",
                "tctl/schedule/list",
                "tctl/schedule/toggle",
                "tctl/schedule/trigger",
                "tctl/schedule/backfill",
              ],
            },
            {
              type: "category",
              label: "task-queue",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/task-queue/index",
              },
              items: [
                "tctl/task-queue/describe",
                "tctl/task-queue/list-partition",
              ],
            },
            {
              type: "category",
              label: "workflow",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/workflow/index",
              },
              items: [
                "tctl/workflow/cancel",
                "tctl/workflow/count",
                "tctl/workflow/describe",
                "tctl/workflow/describeid",
                "tctl/workflow/list",
                "tctl/workflow/listall",
                "tctl/workflow/listarchived",
                "tctl/workflow/observe",
                "tctl/workflow/query",
                "tctl/workflow/reset",
                "tctl/workflow/reset-batch",
                "tctl/workflow/run",
                "tctl/workflow/scan",
                "tctl/workflow/show",
                "tctl/workflow/showid",
                "tctl/workflow/signal",
                "tctl/workflow/stack",
                "tctl/workflow/start",
                "tctl/workflow/terminate",
              ],
            },
          ],
        },
      ],
    },
    "web-ui",
    {
      type: "category",
      label: "References",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "references/index",
      },
      items: [
        "references/sdk-metrics",
        "references/commands",
        "references/events",
        "references/configuration",
        "references/ui-configuration",
        {
          type: "link",
          label: "Go SDK API",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        {
          type: "link",
          label: "Java SDK API",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        {
          type: "link",
          label: "Python SDK API",
          href: "https://python.temporal.io/",
        },
        {
          type: "link",
          label: "TypeScript SDK API",
          href: "https://typescript.temporal.io",
        },
      ],
    },
    "external-resources",
    "glossary",
    {
      type: "link",
      label: "Docs change log",
      href: "/change-log",
    },
    {
      type: "link",
      label: "Feedback",
      href: "https://github.com/temporalio/documentation/issues",
    },
    //    {
    //      type: "link",
    //      label: "Docs survey",
    //      href: "https://docs.google.com/forms/d/16iIw8p8LSMJDA2a8_3y1pdnFDP5fVg2FLAc6jm__PVc/viewform?edit_requested=true",
    //    },
  ],
  sidebarConcepts: [
    {
      type: "category",
      label: "Concepts",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/what-is-an-activity",
        "concepts/what-is-an-activity-definition",
        "concepts/what-is-an-activity-execution",
        "concepts/what-is-an-activity-heartbeat",
        "concepts/what-is-an-activity-id",
        "concepts/what-is-an-activity-task",
        "concepts/what-is-an-activity-task-execution",
        "concepts/what-is-an-activity-type",
        "concepts/what-is-advanced-visibility",
        "concepts/what-is-archival",
        "concepts/what-is-a-child-workflow-execution",
        "concepts/what-is-a-cloud-account-id",
        "concepts/what-is-a-cloud-namespace-id",
        "concepts/what-is-a-cloud_namespace-name",
        "concepts/what-is-a-command",
        "concepts/what-is-continue-as-new",
        "concepts/what-is-a-data-converter",
        "concepts/what-is-an-event",
        "concepts/what-is-an-event-history",
        "concepts/what-is-a-heartbeat-timeout",
        "concepts/what-is-a-list-filter",
        "concepts/what-is-a-local-activity",
        "concepts/what-is-a-memo",
        "concepts/what-is-a-namespace",
        "concepts/what-is-a-parent-close-policy",
        "concepts/what-is-a-query",
        "concepts/what-is-a-retry-policy",
        "concepts/what-is-a-run-id",
        "concepts/what-is-a-schedule-to-close-timeout",
        "concepts/what-is-a-schedule-to-start-timeout",
        "concepts/what-is-a-search-attribute",
        "concepts/what-is-a-side-effect",
        "concepts/what-is-a-signal",
        "concepts/what-is-standard-visibility",
        "concepts/what-is-a-start-to-close-timeout",
        "concepts/what-is-a-sticky-execution",
        "concepts/what-is-a-task-queue",
        "concepts/what-is-task-routing",
        "concepts/what-is-a-task-token",
        "concepts/what-is-a-task",
        "concepts/what-is-temporal",
        "concepts/what-is-a-temporal-application",
        "concepts/what-is-a-temporal-cluster",
        "concepts/what-is-a-temporal-cron-job",
        "concepts/what-is-the-temporal-platform",
        "concepts/what-is-a-temporal-sdk",
        "concepts/what-is-a-worker",
        "concepts/what-is-a-worker-entity",
        "concepts/what-is-a-worker-process",
        "concepts/what-is-a-worker-program",
        "concepts/what-is-a-workflow",
        "concepts/what-is-a-workflow-definition",
        "concepts/what-is-a-workflow-execution-timeout",
        "concepts/what-is-a-workflow-execution",
        "concepts/what-is-a-workflow-id-reuse-policy",
        "concepts/what-is-a-workflow-id",
        "concepts/what-is-a-workflow-run-timeout",
        "concepts/what-is-a-workflow-task",
        "concepts/what-is-a-workflow-task-execution",
        "concepts/what-is-a-workflow-task-timeout",
        "concepts/what-is-a-workflow-type",
      ],
    },
  ],
  sidebarConcepts: [
    {
      type: "category",
      label: "Concepts",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/what-is-an-activity",
        "concepts/what-is-an-activity-definition",
        "concepts/what-is-an-activity-execution",
        "concepts/what-is-an-activity-heartbeat",
        "concepts/what-is-an-activity-id",
        "concepts/what-is-an-activity-task",
        "concepts/what-is-an-activity-task-execution",
        "concepts/what-is-an-activity-type",
        "concepts/what-is-advanced-visibility",
        "concepts/what-is-archival",
        "concepts/what-is-a-child-workflow-execution",
        "concepts/what-is-a-command",
        "concepts/what-is-continue-as-new",
        "concepts/what-is-a-data-converter",
        "concepts/what-is-an-event",
        "concepts/what-is-an-event-history",
        "concepts/what-is-a-heartbeat-timeout",
        "concepts/what-is-a-list-filter",
        "concepts/what-is-a-local-activity",
        "concepts/what-is-a-memo",
        "concepts/what-is-a-namespace",
        "concepts/what-is-a-parent-close-policy",
        "concepts/what-is-a-query",
        "concepts/what-is-a-retry-policy",
        "concepts/what-is-a-run-id",
        "concepts/what-is-a-schedule-to-close-timeout",
        "concepts/what-is-a-schedule-to-start-timeout",
        "concepts/what-is-a-search-attribute",
        "concepts/what-is-a-side-effect",
        "concepts/what-is-a-signal",
        "concepts/what-is-standard-visibility",
        "concepts/what-is-a-start-to-close-timeout",
        "concepts/what-is-a-sticky-execution",
        "concepts/what-is-a-task-queue",
        "concepts/what-is-task-routing",
        "concepts/what-is-a-task-token",
        "concepts/what-is-a-task",
        "concepts/what-is-temporal",
        "concepts/what-is-a-temporal-application",
        "concepts/what-is-a-temporal-cluster",
        "concepts/what-is-a-temporal-cron-job",
        "concepts/what-is-the-temporal-platform",
        "concepts/what-is-a-temporal-sdk",
        "concepts/what-is-a-worker",
        "concepts/what-is-a-worker-entity",
        "concepts/what-is-a-worker-process",
        "concepts/what-is-a-worker-program",
        "concepts/what-is-a-workflow",
        "concepts/what-is-a-workflow-definition",
        "concepts/what-is-a-workflow-execution-timeout",
        "concepts/what-is-a-workflow-execution",
        "concepts/what-is-a-workflow-id-reuse-policy",
        "concepts/what-is-a-workflow-id",
        "concepts/what-is-a-workflow-run-timeout",
        "concepts/what-is-a-workflow-task",
        "concepts/what-is-a-workflow-task-execution",
        "concepts/what-is-a-workflow-task-timeout",
        "concepts/what-is-a-workflow-type",
      ],
    },
  ],
  sidebarCluster: [
    {
      type: "category",
      label: "Cluster how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "clusters/quick-install",
        "server/options",
        "server/production-deployment",
        "clusters/how-to-integrate-elasticsearch-into-a-temporal-cluster",
        "clusters/how-to-set-up-archival",
        "clusters/how-to-create-a-custom-archiver",
        "clusters/how-to-set-up-multi-cluster-replication",
      ],
    },
  ],
  sidebarGo: [
    {
      type: "category",
      label: "Go how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "go/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        "go/how-to-develop-a-workflow-in-go",
        "go/how-to-develop-an-activity-in-go",
        "go/how-to-spawn-an-activity-execution-in-go",
        "go/activityoptions-reference",
        "go/how-to-get-the-result-of-an-activity-execution-in-go",
        "go/how-to-spawn-a-workflow-execution-in-go",
        "go/startworkflowoptions-reference",
        "go/how-to-get-the-result-of-a-workflow-execution-in-go",
        "go/how-to-develop-a-worker-program-in-go",
        "go/how-to-set-workeroptions-in-go",
        "go/how-to-set-registerworkflowoptions-in-go",
        "go/how-to-set-registeractivityoptions-in-go",
        "go/how-to-spawn-a-child-workflow-execution-in-go",
        "go/how-to-set-childworkflowoptions-in-go",
        "go/how-to-set-clientoptions-in-go",
        "go/how-to-set-connectionoptions-in-go",
        "go/how-to-set-executelocalactivityoptions-in-go",
        "go/how-to-heartbeat-an-activity-in-go",
        "go/workflows",
        "go/how-to-use-signals-in-go",
        "go/how-to-send-a-query-to-a-workflow-execution-in-go",
        "go/how-to-handle-a-query-in-a-workflow-in-go",
        "go/error-handling",
        "go/selectors",
        "go/how-to-continue-as-new-in-go",
        "go/how-to-execute-a-side-effect-in-go",
        "go/how-to-test-workflow-definitions-in-go",
        "go/how-to-create-a-custom-data-converter-in-go",
        "go/versioning",
        "go/how-to-create-a-worker-session-in-go",
        "go/tracing",
        "go/search-apis",
      ],
    },
  ],
  sidebarJava: [
    {
      type: "category",
      label: "Java how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "java/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        "java/workflows",
        "java/activities",
        "java/workers",
        "java/task-queues",
        "java/versioning",
        "java/side-effect",
        "java/distributed-cron",
        "java/testing-and-debugging",
        "java/how-to-develop-a-workflow-in-java",
        "java/how-to-develop-an-activity-in-java",
        "java/how-to-set-activityoptions-in-java",
        "java/how-to-spawn-an-activity-execution-in-java",
        "java/reference-activityoptions",
        "java/how-to-heartbeat-an-activity-in-java",
        "java/how-to-get-the-result-of-an-activity-execution-in-java",
        "java/how-to-create-a-temporal-client-in-java",
        "java/how-to-set-workflowclientoptions-in-java",
        "java/how-to-set-workflowservicestuboptions-in-java",
        "java/how-to-spawn-a-workflow-execution-in-java",
        "java/reference-workflowoptions",
        "java/how-to-get-the-result-of-a-workflow-execution-in-java",
        "java/how-to-use-signals-in-java",
        "java/how-to-use-queries-in-java",
        "java/how-to-continue-as-new-in-java",
        "java/how-to-spawn-a-child-workflow-execution-in-java",
        "java/how-to-set-child-workflow-options-in-java",
        "java/how-to-develop-a-worker-program-in-java",
        "java/how-to-provide-an-authorization-token-in-java",
      ],
    },
  ],
  sidebarPHP: [
    {
      type: "category",
      label: "PHP how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "php/introduction",
        "php/workflows",
        "php/activities",
        "php/task-queues",
        "php/workers",
        "php/how-to-develop-a-worker-program-in-php",
        "php/signals",
        "php/queries",
        "php/retries",
        "php/error-handling",
        "php/side-effect",
        "php/versioning",
        "php/distributed-cron",
      ],
    },
  ],
  sidebarTypeScript: [
    {
      type: "category",
      label: "TypeScript how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "typescript/introduction",
        {
          type: "link",
          label: "TypeScript tutorials",
          href: "https://learn.temporal.io",
        },
        {
          type: "link",
          label: "Code samples",
          href: "https://github.com/temporalio/samples-typescript#samples",
        },
        {
          type: "category",
          label: "TS Core APIs",
          collapsed: true,
          items: [
            "typescript/workflows",
            "typescript/activities",
            "typescript/workers",
            "typescript/clients",
          ],
        },
        "typescript/troubleshooting",
        {
          type: "category",
          label: "TS Production APIs",
          collapsed: true,
          items: [
            "typescript/security",
            "typescript/testing",
            "typescript/patching",
            "typescript/logging",
            "typescript/production-deploy",
          ],
        },
        {
          type: "category",
          label: "TS Advanced APIs",
          collapsed: true,
          items: [
            "typescript/cancellation-scopes",
            "typescript/determinism",
            "typescript/handling-failure",
            "typescript/data-converters",
            "typescript/search-attributes",
            "typescript/interceptors",
          ],
        },
        {
          type: "link",
          label: "API Reference",
          href: "https://typescript.temporal.io",
        },
      ],
    },
  ],
};
