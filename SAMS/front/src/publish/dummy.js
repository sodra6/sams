export const menuList = [
    {
        "mnuCd": "MN00000006",
        "mnuNm": "자산정보 관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "assets-menu",
        "mnuPath": [
            "MN00000002",
            "MN00000006"
        ],
        "rnk": [
            1,
            2
        ],
        "key": "12",
        "children": [
            {
                "mnuCd": "MN00000007",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000006",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000003",
                "pgmUrl": "/assets/plineAssets",
                "indcOrdr": 1,
                "depth": 3,
                "css": "assets-menu",
                "mnuPath": [
                    "MN00000002",
                    "MN00000006",
                    "MN00000007"
                ],
                "rnk": [
                    1,
                    2,
                    1
                ],
                "key": "121",
                "children": []
            },
            {
                "mnuCd": "MN00000008",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000006",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000004",
                "pgmUrl": "/assets/fcltyAssets",
                "indcOrdr": 2,
                "depth": 3,
                "css": "assets-menu",
                "mnuPath": [
                    "MN00000002",
                    "MN00000006",
                    "MN00000008"
                ],
                "rnk": [
                    1,
                    2,
                    2
                ],
                "key": "122",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000009",
        "mnuNm": "자산통계",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "css": "assets-menu",
        "mnuPath": [
            "MN00000002",
            "MN00000009"
        ],
        "rnk": [
            1,
            3
        ],
        "key": "13",
        "children": [
            {
                "mnuCd": "MN00000010",
                "mnuNm": "관로자산 통계",
                "upprMnuCd": "MN00000009",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산 통계",
                "pgmCd": "PG00000005",
                "pgmUrl": "/assets/plineAssetsStst",
                "indcOrdr": 1,
                "depth": 3,
                "css": "assets-menu",
                "mnuPath": [
                    "MN00000002",
                    "MN00000009",
                    "MN00000010"
                ],
                "rnk": [
                    1,
                    3,
                    1
                ],
                "key": "131",
                "children": []
            },
            {
                "mnuCd": "MN00000011",
                "mnuNm": "시설자산 통계",
                "upprMnuCd": "MN00000009",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산 통계",
                "pgmCd": "PG00000006",
                "pgmUrl": "/assets/fcltyAssetsStst",
                "indcOrdr": 2,
                "depth": 3,
                "css": "assets-menu",
                "mnuPath": [
                    "MN00000002",
                    "MN00000009",
                    "MN00000011"
                ],
                "rnk": [
                    1,
                    3,
                    2
                ],
                "key": "132",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000013",
        "mnuNm": "점검 및 진단",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "operation-menu",
        "mnuPath": [
            "MN00000012",
            "MN00000013"
        ],
        "rnk": [
            2,
            1
        ],
        "key": "21",
        "children": [
            {
                "mnuCd": "MN00000014",
                "mnuNm": "관망 기술진단",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관망 기술진단(확정)",
                "pgmCd": "PG00000007",
                "pgmUrl": "/operation/plineNetDgnssOld",
                "indcOrdr": 1,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000014"
                ],
                "rnk": [
                    2,
                    1,
                    1
                ],
                "key": "211",
                "children": []
            },
            {
                "mnuCd": "MN00000095",
                "mnuNm": "관망 기술진단(신규)",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관망 기술진단(신규)",
                "pgmCd": "PG00000070",
                "pgmUrl": "/operation/plineNetDgnss",
                "indcOrdr": 2,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000095"
                ],
                "rnk": [
                    2,
                    1,
                    2
                ],
                "key": "212",
                "children": []
            },
            {
                "mnuCd": "MN00000015",
                "mnuNm": "정수장 기술진단",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "정수장 기술진단",
                "pgmCd": "PG00000008",
                "pgmUrl": "/operation/fltpltDgnss",
                "indcOrdr": 3,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000015"
                ],
                "rnk": [
                    2,
                    1,
                    3
                ],
                "key": "213",
                "children": []
            },
            {
                "mnuCd": "MN00000016",
                "mnuNm": "정밀 안전점검",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "정밀 안전점검",
                "pgmCd": "PG00000009",
                "pgmUrl": "/operation/preciseSafeChck",
                "indcOrdr": 4,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000016"
                ],
                "rnk": [
                    2,
                    1,
                    4
                ],
                "key": "214",
                "children": []
            },
            {
                "mnuCd": "MN00000017",
                "mnuNm": "정기 안전점검",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "정기 안전점검",
                "pgmCd": "PG00000010",
                "pgmUrl": "/operation/fdrmSafeChck",
                "indcOrdr": 5,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000017"
                ],
                "rnk": [
                    2,
                    1,
                    5
                ],
                "key": "215",
                "children": []
            },
            {
                "mnuCd": "MN00000018",
                "mnuNm": "정밀 안전진단",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "정밀 안전진단",
                "pgmCd": "PG00000011",
                "pgmUrl": "/operation/preciseSafeDgnss",
                "indcOrdr": 6,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000018"
                ],
                "rnk": [
                    2,
                    1,
                    6
                ],
                "key": "216",
                "children": []
            },
            {
                "mnuCd": "MN00000019",
                "mnuNm": "전기설비 안전진단",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "전기설비 안전진단",
                "pgmCd": "PG00000012",
                "pgmUrl": "/operation/elctyEqpSafeDgnss",
                "indcOrdr": 7,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000019"
                ],
                "rnk": [
                    2,
                    1,
                    7
                ],
                "key": "217",
                "children": []
            },
            {
                "mnuCd": "MN00000020",
                "mnuNm": "노후관 정밀조사",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "노후관 정밀조사",
                "pgmCd": "PG00000013",
                "pgmUrl": "/operation/enlfPipePreciseSvy",
                "indcOrdr": 8,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000020"
                ],
                "rnk": [
                    2,
                    1,
                    8
                ],
                "key": "218",
                "children": []
            },
            {
                "mnuCd": "MN00000021",
                "mnuNm": "유량계 검교정",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "유량계 검교정",
                "pgmCd": "PG00000014",
                "pgmUrl": "/operation/flwmtrCrrct",
                "indcOrdr": 9,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000021"
                ],
                "rnk": [
                    2,
                    1,
                    9
                ],
                "key": "219",
                "children": []
            },
            {
                "mnuCd": "MN00000090",
                "mnuNm": "수질계측기 정도검사",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "수질계측기 정도검사",
                "pgmCd": "PG00000065",
                "pgmUrl": "/operation/wqInsp",
                "indcOrdr": 10,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000090"
                ],
                "rnk": [
                    2,
                    1,
                    10
                ],
                "key": "211",
                "children": []
            },
            {
                "mnuCd": "MN00000022",
                "mnuNm": "점검 및 진단 현황",
                "upprMnuCd": "MN00000013",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "점검 및 진단 현황",
                "pgmCd": "PG00000015",
                "pgmUrl": "/operation/chckDgnssSt",
                "indcOrdr": 11,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000013",
                    "MN00000022"
                ],
                "rnk": [
                    2,
                    1,
                    11
                ],
                "key": "211",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000023",
        "mnuNm": "보수 및 갱신",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "operation-menu",
        "mnuPath": [
            "MN00000012",
            "MN00000023"
        ],
        "rnk": [
            2,
            2
        ],
        "key": "22",
        "children": [
            {
                "mnuCd": "MN00000024",
                "mnuNm": "누수보수",
                "upprMnuCd": "MN00000023",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "누수보수",
                "pgmCd": "PG00000016",
                "pgmUrl": "/operation/mendngUpdt",
                "indcOrdr": 1,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000023",
                    "MN00000024"
                ],
                "rnk": [
                    2,
                    2,
                    1
                ],
                "key": "221",
                "children": []
            },
            {
                "mnuCd": "MN00000025",
                "mnuNm": "관세척",
                "upprMnuCd": "MN00000023",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관세척",
                "pgmCd": "PG00000017",
                "pgmUrl": "/operation/pipeClnsg",
                "indcOrdr": 2,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000023",
                    "MN00000025"
                ],
                "rnk": [
                    2,
                    2,
                    2
                ],
                "key": "222",
                "children": []
            },
            {
                "mnuCd": "MN00000026",
                "mnuNm": "관갱생",
                "upprMnuCd": "MN00000023",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관갱생",
                "pgmCd": "PG00000018",
                "pgmUrl": "/operation/pipeRgnr",
                "indcOrdr": 3,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000023",
                    "MN00000026"
                ],
                "rnk": [
                    2,
                    2,
                    3
                ],
                "key": "223",
                "children": []
            },
            {
                "mnuCd": "MN00000089",
                "mnuNm": "시설보수",
                "upprMnuCd": "MN00000023",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설보수",
                "pgmCd": "PG00000064",
                "pgmUrl": "/operation/fcltyUpdt",
                "indcOrdr": 4,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000023",
                    "MN00000089"
                ],
                "rnk": [
                    2,
                    2,
                    4
                ],
                "key": "224",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000029",
        "mnuNm": "신설 및 교체관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "css": "operation-menu",
        "mnuPath": [
            "MN00000012",
            "MN00000029"
        ],
        "rnk": [
            2,
            3
        ],
        "key": "23",
        "children": [
            {
                "mnuCd": "MN00000030",
                "mnuNm": "관로자산 공사",
                "upprMnuCd": "MN00000029",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산 공사",
                "pgmCd": "PG00000020",
                "pgmUrl": "/operation/pipeAssetCnstruc",
                "indcOrdr": 1,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000029",
                    "MN00000030"
                ],
                "rnk": [
                    2,
                    3,
                    1
                ],
                "key": "231",
                "children": []
            },
            {
                "mnuCd": "MN00000031",
                "mnuNm": "시설자산 공사",
                "upprMnuCd": "MN00000029",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산 공사",
                "pgmCd": "PG00000021",
                "pgmUrl": "/operation/fcltyAssetCnstruc",
                "indcOrdr": 2,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000029",
                    "MN00000031"
                ],
                "rnk": [
                    2,
                    3,
                    2
                ],
                "key": "232",
                "children": []
            },
            {
                "mnuCd": "MN00000122",
                "mnuNm": "신설 및 교체현황",
                "upprMnuCd": "MN00000029",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "신설 및 교체현황",
                "pgmCd": "PG00000090",
                "pgmUrl": "/operation/assetsCnstrucStatus",
                "indcOrdr": 3,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000029",
                    "MN00000122"
                ],
                "rnk": [
                    2,
                    3,
                    3
                ],
                "key": "233",
                "children": []
            },
            {
                "mnuCd": "MN00000123",
                "mnuNm": "폐기자산 조회",
                "upprMnuCd": "MN00000029",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "폐기자산 조회",
                "pgmCd": "PG00000091",
                "pgmUrl": "/operation/assetsRecovery",
                "indcOrdr": 4,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000029",
                    "MN00000123"
                ],
                "rnk": [
                    2,
                    3,
                    4
                ],
                "key": "234",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000027",
        "mnuNm": "기타 유지관리",
        "useYn": "N",
        "indcYn": "Y",
        "indcOrdr": 4,
        "depth": 2,
        "css": "operation-menu",
        "mnuPath": [
            "MN00000012",
            "MN00000027"
        ],
        "rnk": [
            2,
            4
        ],
        "key": "24",
        "children": [
            {
                "mnuCd": "MN00000028",
                "mnuNm": "현장점검(정비반)",
                "upprMnuCd": "MN00000027",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "현장점검(정비반)",
                "pgmCd": "PG00000019",
                "pgmUrl": "/operation/spotChkRepair",
                "indcOrdr": 1,
                "depth": 3,
                "css": "operation-menu",
                "mnuPath": [
                    "MN00000012",
                    "MN00000027",
                    "MN00000028"
                ],
                "rnk": [
                    2,
                    4,
                    1
                ],
                "key": "241",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000033",
        "mnuNm": "상태평가",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "evaluation-menu",
        "mnuPath": [
            "MN00000032",
            "MN00000033"
        ],
        "rnk": [
            3,
            1
        ],
        "key": "31",
        "children": [
            {
                "mnuCd": "MN00000034",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000033",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000022",
                "pgmUrl": "/evaluation/plineStatEvl",
                "indcOrdr": 1,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000033",
                    "MN00000034"
                ],
                "rnk": [
                    3,
                    1,
                    1
                ],
                "key": "311",
                "children": []
            },
            {
                "mnuCd": "MN00000035",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000033",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000023",
                "pgmUrl": "/evaluation/fcltyStatEvl",
                "indcOrdr": 2,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000033",
                    "MN00000035"
                ],
                "rnk": [
                    3,
                    1,
                    2
                ],
                "key": "312",
                "children": []
            },
            {
                "mnuCd": "MN00000128",
                "mnuNm": "관로자산(페이징테스트)",
                "upprMnuCd": "MN00000033",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산(페이징테스트)",
                "pgmCd": "PG00000096",
                "pgmUrl": "/evaluation/plineStatEvl_paging",
                "indcOrdr": 3,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000033",
                    "MN00000128"
                ],
                "rnk": [
                    3,
                    1,
                    3
                ],
                "key": "313",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000077",
        "mnuNm": "물리적 수명 관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "evaluation-menu",
        "mnuPath": [
            "MN00000032",
            "MN00000077"
        ],
        "rnk": [
            3,
            2
        ],
        "key": "32",
        "children": [
            {
                "mnuCd": "MN00000078",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000077",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000054",
                "pgmUrl": "/evaluation/plinePhysiclLgtff",
                "indcOrdr": 1,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000077",
                    "MN00000078"
                ],
                "rnk": [
                    3,
                    2,
                    1
                ],
                "key": "321",
                "children": []
            },
            {
                "mnuCd": "MN00000079",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000077",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000055",
                "pgmUrl": "/evaluation/fcltyPhysiclLgtff",
                "indcOrdr": 2,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000077",
                    "MN00000079"
                ],
                "rnk": [
                    3,
                    2,
                    2
                ],
                "key": "322",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000045",
        "mnuNm": "잔존수명 예측",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "css": "evaluation-menu",
        "mnuPath": [
            "MN00000032",
            "MN00000045"
        ],
        "rnk": [
            3,
            3
        ],
        "key": "33",
        "children": [
            {
                "mnuCd": "MN00000046",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000045",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000032",
                "pgmUrl": "/evaluation/plineSrvivePred",
                "indcOrdr": 1,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000045",
                    "MN00000046"
                ],
                "rnk": [
                    3,
                    3,
                    1
                ],
                "key": "331",
                "children": []
            },
            {
                "mnuCd": "MN00000047",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000045",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000033",
                "pgmUrl": "/evaluation/fcltySrvivePred",
                "indcOrdr": 2,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000045",
                    "MN00000047"
                ],
                "rnk": [
                    3,
                    3,
                    2
                ],
                "key": "332",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000072",
        "mnuNm": "리스크 분석결과",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 5,
        "depth": 2,
        "css": "evaluation-menu",
        "mnuPath": [
            "MN00000032",
            "MN00000072"
        ],
        "rnk": [
            3,
            5
        ],
        "key": "35",
        "children": [
            {
                "mnuCd": "MN00000073",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000072",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000050",
                "pgmUrl": "/evaluation/riskAnalRsltPipe",
                "indcOrdr": 1,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000072",
                    "MN00000073"
                ],
                "rnk": [
                    3,
                    5,
                    1
                ],
                "key": "351",
                "children": []
            },
            {
                "mnuCd": "MN00000074",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000072",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000051",
                "pgmUrl": "/evaluation/riskAnalRsltFclty",
                "indcOrdr": 2,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000072",
                    "MN00000074"
                ],
                "rnk": [
                    3,
                    5,
                    2
                ],
                "key": "352",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000040",
        "mnuNm": "개량수요 분석",
        "useYn": "N",
        "indcYn": "Y",
        "indcOrdr": 6,
        "depth": 2,
        "css": "evaluation-menu",
        "mnuPath": [
            "MN00000032",
            "MN00000040"
        ],
        "rnk": [
            3,
            6
        ],
        "key": "36",
        "children": [
            {
                "mnuCd": "MN00000041",
                "mnuNm": "개량수요 분석결과",
                "upprMnuCd": "MN00000040",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "개량수요 분석결과",
                "pgmCd": "PG00000027",
                "pgmUrl": "/evaluation/dmandAnals",
                "indcOrdr": 1,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000040",
                    "MN00000041"
                ],
                "rnk": [
                    3,
                    6,
                    1
                ],
                "key": "361",
                "children": []
            },
            {
                "mnuCd": "MN00000042",
                "mnuNm": "개량수요 분석실행",
                "upprMnuCd": "MN00000040",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "개량수요 분석실행",
                "pgmCd": "PG00000028",
                "pgmUrl": "/evaluation/dmandAnalsExecut",
                "indcOrdr": 2,
                "depth": 3,
                "css": "evaluation-menu",
                "mnuPath": [
                    "MN00000032",
                    "MN00000040",
                    "MN00000042"
                ],
                "rnk": [
                    3,
                    6,
                    2
                ],
                "key": "362",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000048",
        "mnuNm": "서비스 수준 설정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "serviceLevel-menu",
        "mnuPath": [
            "MN00000043",
            "MN00000048"
        ],
        "rnk": [
            4,
            1
        ],
        "key": "41",
        "children": [
            {
                "mnuCd": "MN00000050",
                "mnuNm": "서비스 수준 항목",
                "upprMnuCd": "MN00000048",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "서비스 수준 항목",
                "pgmCd": "PG00000034",
                "pgmUrl": "/serviceLevel/svcLvItem",
                "indcOrdr": 1,
                "depth": 3,
                "css": "serviceLevel-menu",
                "mnuPath": [
                    "MN00000043",
                    "MN00000048",
                    "MN00000050"
                ],
                "rnk": [
                    4,
                    1,
                    1
                ],
                "key": "411",
                "children": []
            },
            {
                "mnuCd": "MN00000051",
                "mnuNm": "서비스 수준 목표",
                "upprMnuCd": "MN00000048",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "서비스 수준 목표",
                "pgmCd": "PG00000035",
                "pgmUrl": "/serviceLevel/svcLvTarget",
                "indcOrdr": 2,
                "depth": 3,
                "css": "serviceLevel-menu",
                "mnuPath": [
                    "MN00000043",
                    "MN00000048",
                    "MN00000051"
                ],
                "rnk": [
                    4,
                    1,
                    2
                ],
                "key": "412",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000049",
        "mnuNm": "서비스 수준 분석",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "serviceLevel-menu",
        "mnuPath": [
            "MN00000043",
            "MN00000049"
        ],
        "rnk": [
            4,
            2
        ],
        "key": "42",
        "children": [
            {
                "mnuCd": "MN00000116",
                "mnuNm": "서비스 수준 실적등록",
                "upprMnuCd": "MN00000049",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "서비스 수준 실적등록",
                "pgmCd": "PG00000084",
                "pgmUrl": "/serviceLevel/svcLvAcms",
                "indcOrdr": 1,
                "depth": 3,
                "css": "serviceLevel-menu",
                "mnuPath": [
                    "MN00000043",
                    "MN00000049",
                    "MN00000116"
                ],
                "rnk": [
                    4,
                    2,
                    1
                ],
                "key": "421",
                "children": []
            },
            {
                "mnuCd": "MN00000052",
                "mnuNm": "서비스 수준 분석",
                "upprMnuCd": "MN00000049",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "서비스 수준 분석",
                "pgmCd": "PG00000036",
                "pgmUrl": "/serviceLevel/svcLvAnalisys",
                "indcOrdr": 2,
                "depth": 3,
                "css": "serviceLevel-menu",
                "mnuPath": [
                    "MN00000043",
                    "MN00000049",
                    "MN00000052"
                ],
                "rnk": [
                    4,
                    2,
                    2
                ],
                "key": "422",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000053",
        "mnuNm": "자산별 생애주기비용",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000053"
        ],
        "rnk": [
            5,
            1
        ],
        "key": "51",
        "children": [
            {
                "mnuCd": "MN00000056",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000053",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000038",
                "pgmUrl": "/investFinancial/plineLccAssets",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000053",
                    "MN00000056"
                ],
                "rnk": [
                    5,
                    1,
                    1
                ],
                "key": "511",
                "children": []
            },
            {
                "mnuCd": "MN00000057",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000053",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000039",
                "pgmUrl": "/investFinancial/fcltyLccAssets",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000053",
                    "MN00000057"
                ],
                "rnk": [
                    5,
                    1,
                    2
                ],
                "key": "512",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000059",
        "mnuNm": "연도별 생애주기비용 ",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000059"
        ],
        "rnk": [
            5,
            2
        ],
        "key": "52",
        "children": [
            {
                "mnuCd": "MN00000060",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000059",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000042",
                "pgmUrl": "/investFinancial/plineLccYear",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000059",
                    "MN00000060"
                ],
                "rnk": [
                    5,
                    2,
                    1
                ],
                "key": "521",
                "children": []
            },
            {
                "mnuCd": "MN00000061",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000059",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000043",
                "pgmUrl": "/investFinancial/fcltyLccYear",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000059",
                    "MN00000061"
                ],
                "rnk": [
                    5,
                    2,
                    2
                ],
                "key": "522",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000054",
        "mnuNm": "최적투자계획 관리(구)",
        "useYn": "N",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000054"
        ],
        "rnk": [
            5,
            3
        ],
        "key": "53",
        "children": [
            {
                "mnuCd": "MN00000058",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000054",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000040",
                "pgmUrl": "/investFinancial/investPlanPipe",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000054",
                    "MN00000058"
                ],
                "rnk": [
                    5,
                    3,
                    1
                ],
                "key": "531",
                "children": []
            },
            {
                "mnuCd": "MN00000062",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000054",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000044",
                "pgmUrl": "/investFinancial/investPlanFclty",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000054",
                    "MN00000062"
                ],
                "rnk": [
                    5,
                    3,
                    2
                ],
                "key": "532",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000065",
        "mnuNm": "최적투자계획 관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 4,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000065"
        ],
        "rnk": [
            5,
            4
        ],
        "key": "54",
        "children": [
            {
                "mnuCd": "MN00000066",
                "mnuNm": "관로교체",
                "upprMnuCd": "MN00000065",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로교체",
                "pgmCd": "PG00000047",
                "pgmUrl": "/investFinancial/investSimulPipe",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000065",
                    "MN00000066"
                ],
                "rnk": [
                    5,
                    4,
                    1
                ],
                "key": "541",
                "children": []
            },
            {
                "mnuCd": "MN00000067",
                "mnuNm": "시설교체",
                "upprMnuCd": "MN00000065",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설교체",
                "pgmCd": "PG00000048",
                "pgmUrl": "/investFinancial/investSimulFclty",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000065",
                    "MN00000067"
                ],
                "rnk": [
                    5,
                    4,
                    2
                ],
                "key": "542",
                "children": []
            },
            {
                "mnuCd": "MN00000094",
                "mnuNm": "관세척",
                "upprMnuCd": "MN00000065",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관세척",
                "pgmCd": "PG00000069",
                "pgmUrl": "/investFinancial/investSimulCleanPipe",
                "indcOrdr": 3,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000065",
                    "MN00000094"
                ],
                "rnk": [
                    5,
                    4,
                    3
                ],
                "key": "543",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000112",
        "mnuNm": "중장기투자계획",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 5,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000112"
        ],
        "rnk": [
            5,
            5
        ],
        "key": "55",
        "children": [
            {
                "mnuCd": "MN00000113",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000112",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000081",
                "pgmUrl": "/investFinancial/MLTPlineAsset",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000112",
                    "MN00000113"
                ],
                "rnk": [
                    5,
                    5,
                    1
                ],
                "key": "551",
                "children": []
            },
            {
                "mnuCd": "MN00000114",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000112",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000082",
                "pgmUrl": "/investFinancial/MLTFcltyAsset",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000112",
                    "MN00000114"
                ],
                "rnk": [
                    5,
                    5,
                    2
                ],
                "key": "552",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000055",
        "mnuNm": "재정계획",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 6,
        "depth": 2,
        "css": "investFinancial-menu",
        "mnuPath": [
            "MN00000044",
            "MN00000055"
        ],
        "rnk": [
            5,
            6
        ],
        "key": "56",
        "children": [
            {
                "mnuCd": "MN00000063",
                "mnuNm": "경영자료 관리",
                "upprMnuCd": "MN00000055",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "경영자료 관리",
                "pgmCd": "PG00000045",
                "pgmUrl": "/investFinancial/manageData",
                "indcOrdr": 1,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000055",
                    "MN00000063"
                ],
                "rnk": [
                    5,
                    6,
                    1
                ],
                "key": "561",
                "children": []
            },
            {
                "mnuCd": "MN00000064",
                "mnuNm": "손익추세 관리",
                "upprMnuCd": "MN00000055",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "손익추세 관리",
                "pgmCd": "PG00000046",
                "pgmUrl": "/investFinancial/rateInfo",
                "indcOrdr": 2,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000055",
                    "MN00000064"
                ],
                "rnk": [
                    5,
                    6,
                    2
                ],
                "key": "562",
                "children": []
            },
            {
                "mnuCd": "MN00000115",
                "mnuNm": "수도정비기본계획 관리",
                "upprMnuCd": "MN00000055",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "수도정비기본계획 관리",
                "pgmCd": "PG00000083",
                "pgmUrl": "/investFinancial/waterWayMasterPlan",
                "indcOrdr": 3,
                "depth": 3,
                "css": "investFinancial-menu",
                "mnuPath": [
                    "MN00000044",
                    "MN00000055",
                    "MN00000115"
                ],
                "rnk": [
                    5,
                    6,
                    3
                ],
                "key": "563",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000082",
        "mnuNm": "기본정보관리",
        "useYn": "Y",
        "indcYn": "Y",
        "pgmNm": "로그관리 대표 URL",
        "pgmCd": "PG00000058",
        "pgmUrl": "/system/mngLog",
        "indcOrdr": 1,
        "depth": 2,
        "css": "system-base-menu",
        "mnuPath": [
            "MN00000080",
            "MN00000082"
        ],
        "rnk": [
            6,
            1
        ],
        "key": "61",
        "children": [
            {
                "mnuCd": "MN00000084",
                "mnuNm": "코드 관리",
                "upprMnuCd": "MN00000082",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "코드 관리",
                "pgmCd": "PG00000059",
                "pgmUrl": "/system/mngCode",
                "indcOrdr": 1,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000082",
                    "MN00000084"
                ],
                "rnk": [
                    6,
                    1,
                    1
                ],
                "key": "611",
                "children": []
            },
            {
                "mnuCd": "MN00000087",
                "mnuNm": "메뉴 관리",
                "upprMnuCd": "MN00000082",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "메뉴 관리",
                "pgmCd": "PG00000062",
                "pgmUrl": "/system/mngMenu",
                "indcOrdr": 2,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000082",
                    "MN00000087"
                ],
                "rnk": [
                    6,
                    1,
                    2
                ],
                "key": "612",
                "children": []
            },
            {
                "mnuCd": "MN00000085",
                "mnuNm": "권한 관리",
                "upprMnuCd": "MN00000082",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "권한 관리",
                "pgmCd": "PG00000060",
                "pgmUrl": "/system/mngAuth",
                "indcOrdr": 3,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000082",
                    "MN00000085"
                ],
                "rnk": [
                    6,
                    1,
                    3
                ],
                "key": "613",
                "children": []
            },
            {
                "mnuCd": "MN00000086",
                "mnuNm": "사용자 관리",
                "upprMnuCd": "MN00000082",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "사용자 관리",
                "pgmCd": "PG00000061",
                "pgmUrl": "/system/mngUser",
                "indcOrdr": 4,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000082",
                    "MN00000086"
                ],
                "rnk": [
                    6,
                    1,
                    4
                ],
                "key": "614",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000083",
        "mnuNm": "로그관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "system-base-menu",
        "mnuPath": [
            "MN00000080",
            "MN00000083"
        ],
        "rnk": [
            6,
            2
        ],
        "key": "62",
        "children": [
            {
                "mnuCd": "MN00000088",
                "mnuNm": "사용자별 로그 관리",
                "upprMnuCd": "MN00000083",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "사용자별 로그 관리",
                "pgmCd": "PG00000063",
                "pgmUrl": "/system/mngLog",
                "indcOrdr": 1,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000083",
                    "MN00000088"
                ],
                "rnk": [
                    6,
                    2,
                    1
                ],
                "key": "621",
                "children": []
            },
            {
                "mnuCd": "MN00000091",
                "mnuNm": "배치이력 관리",
                "upprMnuCd": "MN00000083",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "배치이력 관리",
                "pgmCd": "PG00000066",
                "pgmUrl": "/system/mngBatchLog",
                "indcOrdr": 2,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000083",
                    "MN00000091"
                ],
                "rnk": [
                    6,
                    2,
                    2
                ],
                "key": "622",
                "children": []
            },
            {
                "mnuCd": "MN00000092",
                "mnuNm": "에러이력 관리",
                "upprMnuCd": "MN00000083",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "에러이력 관리",
                "pgmCd": "PG00000067",
                "pgmUrl": "/system/mngErrorLog",
                "indcOrdr": 3,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000083",
                    "MN00000092"
                ],
                "rnk": [
                    6,
                    2,
                    3
                ],
                "key": "623",
                "children": []
            },
            {
                "mnuCd": "MN00000093",
                "mnuNm": "파일업로드 이력관리",
                "upprMnuCd": "MN00000083",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "파일업로드 이력관리",
                "pgmCd": "PG00000068",
                "pgmUrl": "/system/mngIOLog",
                "indcOrdr": 4,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000083",
                    "MN00000093"
                ],
                "rnk": [
                    6,
                    2,
                    4
                ],
                "key": "624",
                "children": []
            },
            {
                "mnuCd": "MN00000126",
                "mnuNm": "자산대장이력 관리",
                "upprMnuCd": "MN00000083",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "자산대장이력 관리",
                "pgmCd": "PG00000094",
                "pgmUrl": "/system/mngArhLog",
                "indcOrdr": 5,
                "depth": 3,
                "css": "system-base-menu",
                "mnuPath": [
                    "MN00000080",
                    "MN00000083",
                    "MN00000126"
                ],
                "rnk": [
                    6,
                    2,
                    5
                ],
                "key": "625",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000003",
        "mnuNm": "기초정보 관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "system-assets-menu",
        "mnuPath": [
            "MN00000081",
            "MN00000003"
        ],
        "rnk": [
            7,
            1
        ],
        "key": "71",
        "children": [
            {
                "mnuCd": "MN00000004",
                "mnuNm": "자산 분류",
                "upprMnuCd": "MN00000003",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "자산 분류",
                "pgmCd": "PG00000001",
                "pgmUrl": "/system/assetsClft",
                "indcOrdr": 1,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000003",
                    "MN00000004"
                ],
                "rnk": [
                    7,
                    1,
                    1
                ],
                "key": "711",
                "children": []
            },
            {
                "mnuCd": "MN00000125",
                "mnuNm": "자산 분류체계",
                "upprMnuCd": "MN00000003",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "자산 분류체계",
                "pgmCd": "PG00000093",
                "pgmUrl": "/system/assetsSys",
                "indcOrdr": 2,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000003",
                    "MN00000125"
                ],
                "rnk": [
                    7,
                    1,
                    2
                ],
                "key": "712",
                "children": []
            },
            {
                "mnuCd": "MN00000005",
                "mnuNm": "평가 및 분석 분류기준",
                "upprMnuCd": "MN00000003",
                "useYn": "N",
                "indcYn": "N",
                "pgmNm": "평가 및 분석 분류기준",
                "pgmCd": "PG00000002",
                "pgmUrl": "/assets/evlAnalsClft",
                "indcOrdr": 3,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000003",
                    "MN00000005"
                ],
                "rnk": [
                    7,
                    1,
                    3
                ],
                "key": "713",
                "children": []
            },
            {
                "mnuCd": "MN00000124",
                "mnuNm": "내용연수표",
                "upprMnuCd": "MN00000003",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "내용연수표",
                "pgmCd": "PG00000092",
                "pgmUrl": "/system/ctntYyCo",
                "indcOrdr": 4,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000003",
                    "MN00000124"
                ],
                "rnk": [
                    7,
                    1,
                    4
                ],
                "key": "714",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000096",
        "mnuNm": "GIS 관리",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "system-assets-menu",
        "mnuPath": [
            "MN00000081",
            "MN00000096"
        ],
        "rnk": [
            7,
            2
        ],
        "key": "72",
        "children": [
            {
                "mnuCd": "MN00000127",
                "mnuNm": "레이어관리",
                "upprMnuCd": "MN00000096",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "레이어관리",
                "pgmCd": "PG00000095",
                "pgmUrl": "/system/mngLayer",
                "indcOrdr": 1,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000096",
                    "MN00000127"
                ],
                "rnk": [
                    7,
                    2,
                    1
                ],
                "key": "721",
                "children": []
            },
            {
                "mnuCd": "MN00000097",
                "mnuNm": "SHAPE 관리",
                "upprMnuCd": "MN00000096",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "SHAPE 관리",
                "pgmCd": "PG00000071",
                "pgmUrl": "/system/mngShape",
                "indcOrdr": 2,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000096",
                    "MN00000097"
                ],
                "rnk": [
                    7,
                    2,
                    2
                ],
                "key": "722",
                "children": []
            },
            {
                "mnuCd": "MN00000129",
                "mnuNm": "사업장 관리",
                "upprMnuCd": "MN00000096",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "사업장관리",
                "pgmCd": "PG00000097",
                "pgmUrl": "/system/mngBplc",
                "indcOrdr": 3,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000096",
                    "MN00000129"
                ],
                "rnk": [
                    7,
                    2,
                    3
                ],
                "key": "723",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000110",
        "mnuNm": "신설관로 공사비 산정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "css": "system-assets-menu",
        "mnuPath": [
            "MN00000081",
            "MN00000110"
        ],
        "rnk": [
            7,
            3
        ],
        "key": "73",
        "children": [
            {
                "mnuCd": "MN00000111",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000110",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000080",
                "pgmUrl": "/system/plineCntrwkCt",
                "indcOrdr": 1,
                "depth": 3,
                "css": "system-assets-menu",
                "mnuPath": [
                    "MN00000081",
                    "MN00000110",
                    "MN00000111"
                ],
                "rnk": [
                    7,
                    3,
                    1
                ],
                "key": "731",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000099",
        "mnuNm": "상태등급 설정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "mnuPath": [
            "MN00000098",
            "MN00000099"
        ],
        "rnk": [
            8,
            1
        ],
        "key": "81",
        "children": [
            {
                "mnuCd": "MN00000102",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000099",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000072",
                "pgmUrl": "/system/mngStatGrdOptPline",
                "indcOrdr": 1,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000099",
                    "MN00000102"
                ],
                "rnk": [
                    8,
                    1,
                    1
                ],
                "key": "811",
                "children": []
            },
            {
                "mnuCd": "MN00000103",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000099",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000073",
                "pgmUrl": "/system/mngStatGrdOptFclty",
                "indcOrdr": 2,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000099",
                    "MN00000103"
                ],
                "rnk": [
                    8,
                    1,
                    2
                ],
                "key": "812",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000100",
        "mnuNm": "Approach2 설정",
        "useYn": "N",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "mnuPath": [
            "MN00000098",
            "MN00000100"
        ],
        "rnk": [
            8,
            2
        ],
        "key": "82",
        "children": [
            {
                "mnuCd": "MN00000104",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000100",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000074",
                "pgmUrl": "/system/mngApproach2Pline",
                "indcOrdr": 1,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000100",
                    "MN00000104"
                ],
                "rnk": [
                    8,
                    2,
                    1
                ],
                "key": "821",
                "children": []
            },
            {
                "mnuCd": "MN00000105",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000100",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000075",
                "pgmUrl": "/system/mngApproach2Fclty",
                "indcOrdr": 2,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000100",
                    "MN00000105"
                ],
                "rnk": [
                    8,
                    2,
                    2
                ],
                "key": "822",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000101",
        "mnuNm": "Approach4 설정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 3,
        "depth": 2,
        "mnuPath": [
            "MN00000098",
            "MN00000101"
        ],
        "rnk": [
            8,
            3
        ],
        "key": "83",
        "children": [
            {
                "mnuCd": "MN00000106",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000101",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000076",
                "pgmUrl": "/system/mngApproach4Pline",
                "indcOrdr": 1,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000101",
                    "MN00000106"
                ],
                "rnk": [
                    8,
                    3,
                    1
                ],
                "key": "831",
                "children": []
            },
            {
                "mnuCd": "MN00000107",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000101",
                "useYn": "N",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000077",
                "pgmUrl": "/system/mngApproach4Fclty",
                "indcOrdr": 2,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000101",
                    "MN00000107"
                ],
                "rnk": [
                    8,
                    3,
                    2
                ],
                "key": "832",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000108",
        "mnuNm": "건설공사비 지수 설정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 4,
        "depth": 2,
        "mnuPath": [
            "MN00000098",
            "MN00000108"
        ],
        "rnk": [
            8,
            4
        ],
        "key": "84",
        "children": [
            {
                "mnuCd": "MN00000109",
                "mnuNm": "공통",
                "upprMnuCd": "MN00000108",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "공통",
                "pgmCd": "PG00000078",
                "pgmUrl": "/system/mngCntrwkCt",
                "indcOrdr": 1,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000108",
                    "MN00000109"
                ],
                "rnk": [
                    8,
                    4,
                    1
                ],
                "key": "841",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000036",
        "mnuNm": "리스크 분석설정",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 5,
        "depth": 2,
        "mnuPath": [
            "MN00000098",
            "MN00000036"
        ],
        "rnk": [
            8,
            5
        ],
        "key": "85",
        "children": [
            {
                "mnuCd": "MN00000075",
                "mnuNm": "관로자산",
                "upprMnuCd": "MN00000036",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "관로자산",
                "pgmCd": "PG00000052",
                "pgmUrl": "/system/mngRiskAnalSetPipe",
                "indcOrdr": 1,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000036",
                    "MN00000075"
                ],
                "rnk": [
                    8,
                    5,
                    1
                ],
                "key": "851",
                "children": []
            },
            {
                "mnuCd": "MN00000076",
                "mnuNm": "시설자산",
                "upprMnuCd": "MN00000036",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "시설자산",
                "pgmCd": "PG00000053",
                "pgmUrl": "/system/mngRiskAnalSetFclty",
                "indcOrdr": 2,
                "depth": 3,
                "mnuPath": [
                    "MN00000098",
                    "MN00000036",
                    "MN00000076"
                ],
                "rnk": [
                    8,
                    5,
                    2
                ],
                "key": "852",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000118",
        "mnuNm": "업무현황",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 1,
        "depth": 2,
        "css": "myPage-menu",
        "mnuPath": [
            "MN00000117",
            "MN00000118"
        ],
        "rnk": [
            9,
            1
        ],
        "key": "91",
        "children": [
            {
                "mnuCd": "MN00000120",
                "mnuNm": "업무현황",
                "upprMnuCd": "MN00000118",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "업무현황",
                "pgmCd": "PG00000087",
                "pgmUrl": "/mypage/workCstt",
                "indcOrdr": 1,
                "depth": 3,
                "css": "myPage-menu",
                "mnuPath": [
                    "MN00000117",
                    "MN00000118",
                    "MN00000120"
                ],
                "rnk": [
                    9,
                    1,
                    1
                ],
                "key": "911",
                "children": []
            }
        ]
    },
    {
        "mnuCd": "MN00000119",
        "mnuNm": "사용자정보",
        "useYn": "Y",
        "indcYn": "Y",
        "indcOrdr": 2,
        "depth": 2,
        "css": "myPage-menu",
        "mnuPath": [
            "MN00000117",
            "MN00000119"
        ],
        "rnk": [
            9,
            2
        ],
        "key": "92",
        "children": [
            {
                "mnuCd": "MN00000121",
                "mnuNm": "비밀번호변경",
                "upprMnuCd": "MN00000119",
                "useYn": "Y",
                "indcYn": "Y",
                "pgmNm": "비밀번호변경",
                "pgmCd": "PG00000088",
                "pgmUrl": "/mypage/chgPwd",
                "indcOrdr": 1,
                "depth": 3,
                "css": "myPage-menu",
                "mnuPath": [
                    "MN00000117",
                    "MN00000119",
                    "MN00000121"
                ],
                "rnk": [
                    9,
                    2,
                    1
                ],
                "key": "921",
                "children": []
            }
        ]
    }
];