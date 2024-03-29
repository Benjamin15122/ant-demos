
const mockdata = {
    "timestamp": 1560576808, "duration": 60,
    "graphType": "versionedApp", "elements": {
        "nodes": [{
            "data": {
                "id": "49389ccac61e7527fbd1dd3d878106c0", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "auth-service-v1",
                "app": "auth-service",
                "version": "v1",
                "isUnused": true
            }
        },
        {
            "data": {
                "id": "f7aba0737e585fca23857189c984afe8", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "auth-service-v2",
                "app": "auth-service", "version": "v2", "isUnused": true
            }
        },
        {
            "data": {
                "id": "7257586cc58ed11bf921171e6e13bd48", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "db-service-v1",
                "app": "db-service", "version": "v1", "isUnused": true
            }
        },
        {
            "data": {
                "id": "d4c87751713c553b01a0472d272fe3cf", "nodeType": "service",
                "namespace": "istio-system",
                "app": "details",
                "service": "details", "destServices": [
                    {
                        "namespace": "istio-system", "name": "details"
                    }],
                "hasVS": true
            }
        },

        {
            "data": {
                "id": "004b8b2f01bd00a2fb2a2b0adc93e022", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "details-v1",
                "app": "details", "version": "v1", "destServices": [
                    {
                        "namespace": "istio-system", "name": "details"
                    }]
            }
        },
        {
            "data": {
                "id": "01984ac1cc80c14fed76970c8ba98c9c", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-galley",
                "app": "galley", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "d2e325172dd34dd737c33d56fc466448", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "grafana",
                "app": "grafana", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "e283a25e341b367b1c0084b1f1a84b07", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-grafana-post-install-1.1.6", "app": "grafana",
                "version": "unknown",
                "isUnused": true
            }
        }, {
            "data": {
                "id": "7c38a2f217efdce645b0d8d9fab78c02", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "httpbin",

                "app": "httpbin", "version": "v1", "isUnused": true
            }
        },
        {
            "data": {
                "id": "332209947916c37701f39500789b6792", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-egressgateway",
                "app": "istio-egressgateway", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "6249668dd0a91adb9e62994d36563365", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-ingressgateway",
                "app": "istio-ingressgateway", "version": "unknown", "traffic": [
                    {
                        "protocol": "http", "rates": {
                            "httpOut": "3.36"
                        }
                    }],
                "isRoot": true
            }
        }, {
            "data": {
                "id": "0c00d723847b0568f895fb96ea801c0e", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-tracing",
                "app": "jaeger",
                "version": "unknown",
                "isUnused": true
            }
        },
        {
            "data": {
                "id": "8b1b95840d92936149ae75ea9d195dfe", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "kiali",
                "app": "kiali", "version": "unknown", "isUnused": true

            }
        },
        {
            "data": {
                "id": "e1c512260b0f6e4c873b9ecb21f3a7ce", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "location-server-v1",
                "app": "location-server", "version": "v1", "isUnused": true
            }
        },
        {
            "data": {
                "id": "239205997d8e32f24eb083ae80b16306", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-pilot",
                "app": "pilot", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "80e3e9d24f8e2b52aeb86dc0022a0d2c", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-policy",
                "app": "policy", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "2912a1899ab4d049340c32ddcaafd2c9", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "portal-service-v1",
                "app": "portal-service", "version": "v1", "isUnused": true
            }
        },
        {
            "data": {
                "id": "b71a57a960b84c6d2bb1d8a752ec549e", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "proc-service-v1",
                "app": "proc-service", "version": "v1", "isUnused": true

            }
        },
        {
            "data": {
                "id": "c7113dbdcfa8632cab3f6f1b582943aa", "nodeType": "service",
                "namespace": "istio-system",
                "app": "productpage",
                "service": "productpage", "destServices": [
                    {
                        "namespace": "istio-system", "name": "productpage"
                    }],
                "traffic": [{
                    "protocol": "http", "rates": {
                        "httpIn": "3.36", "httpIn5xx": "3.36", "httpOut": "3.36"
                    }
                }
                ],
                "hasVS": true
            }
        }, {
            "data": {
                "id": "c9dadb7b1a14e1eeb746efc410d787ca", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "productpage-v1",
                "app": "productpage",
                "version": "v1",
                "destServices": [
                    {
                        "namespace": "istio-system", "name": "productpage"
                    }],
                "traffic": [{
                    "protocol": "http", "rates": {
                        "httpIn": "3.36",
                        "httpIn5xx": "3.36"
                    }
                }]
            }
        },
        {
            "data": {

                "id": "c900b524a2c68521c8476a0d79d28059", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "prometheus",
                "app": "prometheus", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "04fd22e1e84f48ab8f86c65f05f48e93", "nodeType": "service",
                "namespace": "istio-system",
                "app": "ratings",
                "service": "ratings", "destServices": [
                    {
                        "namespace": "istio-system", "name": "ratings"
                    }],
                "hasVS": true
            }
        }, {
            "data": {
                "id": "8020c4cf3a14f8368d8c3fce015b319b", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "ratings-v1",
                "app": "ratings",
                "version": "v1",
                "destServices": [
                    {
                        "namespace": "istio-system", "name": "ratings"
                    }]
            }
        },
        {
            "data": {
                "id": "ed33a02a09789632b67ca47335b3de40", "nodeType": "service",
                "namespace": "istio-system",
                "app": "reviews",
                "service": "reviews", "destServices": [
                    {
                        "namespace": "istio-system", "name": "reviews"
                    }],
                "hasVS": true

            }
        },
        {
            "data": {
                "id": "6ffbd67237876726ff7bc798ae5f409d", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "reviews-v1",
                "app": "reviews", "version": "v1", "isUnused": true
            }
        },
        {
            "data": {
                "id": "6d0b6eaaa059560318567eb96bff1fdd", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "reviews-v2",
                "app": "reviews", "version": "v2", "destServices": [
                    {
                        "namespace": "istio-system", "name": "reviews"
                    }]
            }
        },
        {
            "data": {
                "id": "ab1c3977927d51bc74c9a4002f00e7fc", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "reviews-v3",
                "app": "reviews", "version": "v3", "isUnused": true
            }
        },
        {
            "data": {
                "id": "773e16d1e96fcc229d96ea34b9012787", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-citadel",
                "app": "security", "version": "unknown", "isUnused": true
            }
        },
        {
            "data": {
                "id": "a72196d9d07eb27e0604133339229e7f", "nodeType": "app",

                "namespace": "istio-system",
                "workload": "istio-cleanup-secrets-1.1.6", "app": "security",
                "version": "unknown",
                "isUnused": true
            }
        },
        {
            "data": {
                "id": "f31b53491d399a246d33b3bf5ee94d13", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-security-post-install-1.1.6", "app": "security",
                "version": "unknown",
                "isUnused": true
            }
        }, {
            "data": {
                "id": "4e58d8306fe037112d41299ea7d97620", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-sidecar-injector",
                "app": "sidecarInjectorWebhook",
                "version": "unknown",
                "isUnused": true
            }
        },
        {
            "data": {
                "id": "c27874a2acd42b5b977a6edf42fd4964", "nodeType": "app",
                "namespace": "istio-system",
                "workload": "istio-telemetry",
                "app": "telemetry", "version": "unknown", "isUnused": true
            }
        }
        ], "edges": [
            {
                "data": {
                    "id": "457635ad283f873871942c2219aeff50", "source": "04fd22e1e84f48ab8f86c65f05f48e93", "target": "8020c4cf3a14f8368d8c3fce015b319b", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"
                }
            }, {

                "data": {
                    "id": "1b4ccb5f5a8ab8ee9f30d07065a32dff", "source": "6249668dd0a91adb9e62994d36563365", "target": "c7113dbdcfa8632cab3f6f1b582943aa", "traffic": {
                        "protocol": "http", "rates": {
                            "http": "3.36",
                            "http5xx": "3.36", "httpPercentErr": "100.0", "httpPercentReq": "100.0"
                        }
                    },
                    "responseTime": "0"
                }
            }, {
                "data": {
                    "id": "a89f451895f0a8a7a76606eb1b9c28b3", "source": "6d0b6eaaa059560318567eb96bff1fdd", "target": "04fd22e1e84f48ab8f86c65f05f48e93", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"
                }
            }, {
                "data": {
                    "id": "994656924af2372c5cf2197678f013e9", "source": "c7113dbdcfa8632cab3f6f1b582943aa", "target": "c9dadb7b1a14e1eeb746efc410d787ca", "traffic": {
                        "protocol": "http", "rates": {
                            "http": "3.36",
                            "http5xx": "3.36", "httpPercentErr": "100.0", "httpPercentReq": "100.0"
                        }
                    },
                    "responseTime": "0"
                }
            }, {
                "data": {
                    "id": "36a98b660dbf8f6103c2a606df5e3a70", "source": "c9dadb7b1a14e1eeb746efc410d787ca", "target": "d4c87751713c553b01a0472d272fe3cf", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"

                }
            },
            {
                "data": {
                    "id": "cf21c86c79b36ad2f6c56ef2c80b7758", "source": "c9dadb7b1a14e1eeb746efc410d787ca", "target": "ed33a02a09789632b67ca47335b3de40", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"
                }
            }, {
                "data": {
                    "id": "c87bac2a6992fc6b06f18374e9c54801", "source": "d4c87751713c553b01a0472d272fe3cf", "target": "004b8b2f01bd00a2fb2a2b0adc93e022", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"
                }
            }, {
                "data": {
                    "id": "f0491443b080e68ea075933f62964726", "source": "ed33a02a09789632b67ca47335b3de40", "target": "6d0b6eaaa059560318567eb96bff1fdd", "traffic": {
                        "protocol": "",
                        "rates": null
                    },
                    "responseTime": "0"
                }
            }]
    }
}

export default {
    'GET /mockdata': mockdata
}