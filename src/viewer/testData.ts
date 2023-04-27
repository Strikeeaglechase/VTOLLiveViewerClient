// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface Kill {
	_id: {
		$oid: string;
	};
	id: string;
	time: {
		$numberLong: string;
	};
	victimAircraft: number;
	killerAircraft: number;
	weapon: number;
	victimId: string;
	killerId: string;
	victimTeam: number;
	killerTeam: number;
	killerPosition: {
		x: number;
		y: number;
		z: number;
	};
	victimPosition?: {
		x: number;
		y: number;
		z: number;
	};
	killerVelocity?: {
		x: number;
		y: number;
		z: number;
	};
	victimVelocity?: {
		x: number;
		y: number;
		z: number;
	};
}

export const kills: Kill[] = [
	{
		"_id": {
			"$oid": "63a6c49165c0582d3d177b86"
		},
		"id": "2125bd38-367d-44e5-aa16-4dc89f169e8c",
		"time": {
			"$numberLong": "1671873681603"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198278396328",
		"killerId": "76561198173740229",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61184.33,
			"y": 3799.5872,
			"z": 117969.945
		},
		"victimPosition": {
			"x": 63507.465,
			"y": 3802.2688,
			"z": 117786.28
		},
		"killerVelocity": {
			"x": 262.1631,
			"y": -1.7960258,
			"z": -41.491734
		},
		"victimVelocity": {
			"x": 43.00782,
			"y": -80.93462,
			"z": 211.1068
		}
	}, {
		"_id": {
			"$oid": "63a6e50b65c0582d3d177c58"
		},
		"id": "2426d90e-4d79-4c1f-b2c2-490860c87eea",
		"time": {
			"$numberLong": "1671881995776"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197970629257",
		"killerId": "76561197979206712",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58714.613,
			"y": 2093.9155,
			"z": 118698.26
		},
		"victimPosition": {
			"x": 60052.21,
			"y": 2779.0642,
			"z": 118019.04
		},
		"killerVelocity": {
			"x": 174.31523,
			"y": 73.12315,
			"z": -57.52732
		},
		"victimVelocity": {
			"x": -60.623173,
			"y": 57.903988,
			"z": -135.22092
		}
	}, {
		"_id": {
			"$oid": "63a754c665c0582d3d177e77"
		},
		"id": "fa7fb52f-76bf-494f-8a2b-0b9d8c7fbdb7",
		"time": {
			"$numberLong": "1671910598916"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198061519357",
		"killerId": "76561198143909030",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54206.812,
			"y": 1644.1211,
			"z": 110123.87
		},
		"victimPosition": {
			"x": 52898.48,
			"y": 1103.6642,
			"z": 109242.43
		},
		"killerVelocity": {
			"x": -170.71707,
			"y": -63.6981,
			"z": -119.05698
		},
		"victimVelocity": {
			"x": -173.9505,
			"y": -126.52658,
			"z": -125.53105
		}
	}, {
		"_id": {
			"$oid": "63a762b565c0582d3d177fcb"
		},
		"id": "f4ed0e1b-d19e-48bf-b9ef-db06ca2a3ca0",
		"time": {
			"$numberLong": "1671914165887"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198343850164",
		"killerId": "76561199053196878",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82941.9,
			"y": 2268.0935,
			"z": 89937.75
		},
		"victimPosition": {
			"x": 89915.28,
			"y": 1713.8627,
			"z": 87584.8
		},
		"killerVelocity": {
			"x": 364.54492,
			"y": -31.533026,
			"z": -141.83409
		},
		"victimVelocity": {
			"x": 161.78271,
			"y": -65.47318,
			"z": 158.0128
		}
	}, {
		"_id": {
			"$oid": "63a76d3a65c0582d3d17805c"
		},
		"id": "15d761d8-7f89-4969-b813-e1a023001e85",
		"time": {
			"$numberLong": "1671916858838"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198265640092",
		"killerId": "76561199058948803",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64128.902,
			"y": 764.535,
			"z": 117926.016
		},
		"victimPosition": {
			"x": 66972.52,
			"y": 1443.116,
			"z": 116057.1
		},
		"killerVelocity": {
			"x": 377.9004,
			"y": 5.3627167,
			"z": -57.391453
		},
		"victimVelocity": {
			"x": -42.179768,
			"y": 173.65701,
			"z": -241.06825
		}
	}, {
		"_id": {
			"$oid": "63a777d565c0582d3d17819b"
		},
		"id": "e884c980-9471-41a6-90fb-14677775d3c4",
		"time": {
			"$numberLong": "1671919573195"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198010390263",
		"killerId": "76561199040917056",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52523.062,
			"y": 781.941,
			"z": 116166.57
		},
		"victimPosition": {
			"x": 52753.12,
			"y": 290.88034,
			"z": 117665.57
		},
		"killerVelocity": {
			"x": -55.46154,
			"y": 44.349693,
			"z": -167.86305
		},
		"victimVelocity": {
			"x": 105.732834,
			"y": -11.654536,
			"z": -52.554485
		}
	}, {
		"_id": {
			"$oid": "63a778d665c0582d3d1781af"
		},
		"id": "e85007b9-12a6-4a4e-98c1-69d84c097aa1",
		"time": {
			"$numberLong": "1671919830169"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198010390263",
		"killerId": "76561199040917056",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72885.97,
			"y": 2518.0913,
			"z": 99668.58
		},
		"victimPosition": {
			"x": 83073.19,
			"y": 3486.575,
			"z": 93414.3
		},
		"killerVelocity": {
			"x": 265.70242,
			"y": 20.313128,
			"z": -264.1557
		},
		"victimVelocity": {
			"x": 122.42844,
			"y": -45.297905,
			"z": 177.67015
		}
	}, {
		"_id": {
			"$oid": "63a78d7465c0582d3d17839d"
		},
		"id": "0408c5d4-4794-46b5-b96d-c08cc1ef062a",
		"time": {
			"$numberLong": "1671925108084"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199173317099",
		"killerId": "76561198357643745",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 127272.13,
			"y": 2700.4492,
			"z": 55594.89
		},
		"victimPosition": {
			"x": 126019.805,
			"y": 2284.853,
			"z": 53734.734
		},
		"killerVelocity": {
			"x": -146.0611,
			"y": -37.867153,
			"z": -251.25917
		},
		"victimVelocity": {
			"x": -204.81073,
			"y": -72.09045,
			"z": -233.00552
		}
	}, {
		"_id": {
			"$oid": "63a7d3d265c0582d3d178614"
		},
		"id": "f77bd12e-dd77-4ef3-995f-6d0502fd0afa",
		"time": {
			"$numberLong": "1671943122940"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199123173008",
		"killerId": "76561198829397500",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62329.508,
			"y": 1482.0056,
			"z": 120192.055
		},
		"victimPosition": {
			"x": 61842.453,
			"y": 810.1429,
			"z": 119949.766
		},
		"killerVelocity": {
			"x": -220.88736,
			"y": -68.81579,
			"z": -93.37146
		},
		"victimVelocity": {
			"x": 168.14522,
			"y": 17.618511,
			"z": 181.19505
		}
	}, {
		"_id": {
			"$oid": "63a7d50465c0582d3d178624"
		},
		"id": "e4d27465-b24c-467b-a63b-271cfc6e2b02",
		"time": {
			"$numberLong": "1671943428205"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198217861185",
		"killerId": "76561198829397500",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 137564.42,
			"y": 2380.9766,
			"z": 62845.523
		},
		"victimPosition": {
			"x": 134657.94,
			"y": 2602.8147,
			"z": 64716.31
		},
		"killerVelocity": {
			"x": -287.67596,
			"y": 8.384151,
			"z": 196.69864
		},
		"victimVelocity": {
			"x": 282.29202,
			"y": 97.27251,
			"z": -146.43143
		}
	}, {
		"_id": {
			"$oid": "63a7d93c65c0582d3d17866b"
		},
		"id": "1f35365f-5074-4f28-ba61-de37c157e771",
		"time": {
			"$numberLong": "1671944508755"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198086600808",
		"killerId": "76561198829397500",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 132938.14,
			"y": 2936.0063,
			"z": 54709.684
		},
		"victimPosition": {
			"x": 135400.11,
			"y": 3025.635,
			"z": 56008.27
		},
		"killerVelocity": {
			"x": 298.62665,
			"y": -67.50895,
			"z": 252.38828
		},
		"victimVelocity": {
			"x": -13.72998,
			"y": 76.795906,
			"z": -354.67398
		}
	}, {
		"_id": {
			"$oid": "63a7e0e765c0582d3d1786e4"
		},
		"id": "8d542db7-a6c2-4cd1-9edc-ae7873f7ea3d",
		"time": {
			"$numberLong": "1671946471145"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199067018192",
		"killerId": "76561198829397500",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88531.72,
			"y": 3894.0635,
			"z": 69048.67
		},
		"victimPosition": {
			"x": 84085.08,
			"y": 4238.6143,
			"z": 79392.15
		},
		"killerVelocity": {
			"x": -288.55563,
			"y": -145.50673,
			"z": -179.27972
		},
		"victimVelocity": {
			"x": 328.94885,
			"y": -143.28474,
			"z": 44.64573
		}
	}, {
		"_id": {
			"$oid": "63a8037965c0582d3d17892d"
		},
		"id": "eeacd062-a7f5-4fae-b9ca-bd399c034c4e",
		"time": {
			"$numberLong": "1671955321168"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198950386863",
		"killerId": "76561198115055539",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 104730.33,
			"y": 1237.5961,
			"z": 86365.2
		},
		"victimPosition": {
			"x": 104811.61,
			"y": 1199.8341,
			"z": 85795.88
		},
		"killerVelocity": {
			"x": -241.76302,
			"y": 4.2884774,
			"z": -136.03915
		},
		"victimVelocity": {
			"x": 91.67628,
			"y": -68.5057,
			"z": 96.32591
		}
	}, {
		"_id": {
			"$oid": "63a80b9d65c0582d3d1789d6"
		},
		"id": "5a66ad2f-dbab-4751-82a5-4e4943760dba",
		"time": {
			"$numberLong": "1671957405704"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198431490897",
		"killerId": "76561198110022133",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57432.87,
			"y": 1260.4412,
			"z": 113077.23
		},
		"victimPosition": {
			"x": 57951.33,
			"y": 1283.8977,
			"z": 112951.64
		},
		"killerVelocity": {
			"x": 186.17885,
			"y": 66.05454,
			"z": -49.79052
		},
		"victimVelocity": {
			"x": -30.921703,
			"y": -124.38619,
			"z": 5.758196
		}
	}, {
		"_id": {
			"$oid": "63a8358f65c0582d3d178b50"
		},
		"id": "ea23a13b-bf67-4b67-9623-f6c1cbd97789",
		"time": {
			"$numberLong": "1671968143028"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199250832635",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64787.402,
			"y": 3932.6147,
			"z": 115959.586
		},
		"victimPosition": {
			"x": 65597.64,
			"y": 4379.8623,
			"z": 114120.97
		},
		"killerVelocity": {
			"x": 97.07043,
			"y": 50.80527,
			"z": -215.90059
		},
		"victimVelocity": {
			"x": 86.15878,
			"y": -7.3837395,
			"z": -235.04158
		}
	}, {
		"_id": {
			"$oid": "63a835f165c0582d3d178b56"
		},
		"id": "5070323c-4ceb-4ee9-a2cb-adb58392b889",
		"time": {
			"$numberLong": "1671968241551"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199250832635",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53688.67,
			"y": 781.7544,
			"z": 119454.6
		},
		"victimPosition": {
			"x": 54424.832,
			"y": 678.5319,
			"z": 119835.266
		},
		"killerVelocity": {
			"x": 195.70993,
			"y": -42.766293,
			"z": 98.232185
		},
		"victimVelocity": {
			"x": 139.47876,
			"y": 22.550919,
			"z": 84.700455
		}
	}, {
		"_id": {
			"$oid": "63a8362c65c0582d3d178b5f"
		},
		"id": "d4c292a4-970a-4dd3-87c0-ab5e06cd217f",
		"time": {
			"$numberLong": "1671968300608"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198018225308",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54523.613,
			"y": 487.55075,
			"z": 119388.78
		},
		"victimPosition": {
			"x": 52604.387,
			"y": 282.4846,
			"z": 118581.93
		},
		"killerVelocity": {
			"x": -191.38077,
			"y": -31.381622,
			"z": -72.72073
		},
		"victimVelocity": {
			"x": 16.408838,
			"y": -0.9180107,
			"z": -66.90461
		}
	}, {
		"_id": {
			"$oid": "63a8366765c0582d3d178b65"
		},
		"id": "dd62f1f2-c0e7-495b-b366-fb1592c2ae80",
		"time": {
			"$numberLong": "1671968359938"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198358586578",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48741.01,
			"y": 1195.275,
			"z": 116293.7
		},
		"victimPosition": {
			"x": 50299.926,
			"y": 758.6634,
			"z": 115983.12
		},
		"killerVelocity": {
			"x": 143.16045,
			"y": -58.39229,
			"z": -23.742764
		},
		"victimVelocity": {
			"x": 88.648445,
			"y": -99.27387,
			"z": 213.91211
		}
	}, {
		"_id": {
			"$oid": "63a8367465c0582d3d178b67"
		},
		"id": "84dad9c2-ba99-4a15-ad85-8c3d3e9f94b9",
		"time": {
			"$numberLong": "1671968372568"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199250832635",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50673.31,
			"y": 615.04474,
			"z": 117459.73
		},
		"victimPosition": {
			"x": 52011.523,
			"y": 1004.3323,
			"z": 118476.35
		},
		"killerVelocity": {
			"x": 156.65366,
			"y": 36.086582,
			"z": 154.25812
		},
		"victimVelocity": {
			"x": -23.915556,
			"y": 15.742459,
			"z": -165.46323
		}
	}, {
		"_id": {
			"$oid": "63a8368265c0582d3d178b69"
		},
		"id": "1b55a0e4-2a3c-4d8c-8032-ffe506f8d9a3",
		"time": {
			"$numberLong": "1671968386081"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198018225308",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52405.68,
			"y": 1013.50397,
			"z": 116565.805
		},
		"victimPosition": {
			"x": 52662.22,
			"y": 1227.6362,
			"z": 115627.96
		},
		"killerVelocity": {
			"x": 73.219604,
			"y": 8.034905,
			"z": -188.03665
		},
		"victimVelocity": {
			"x": -84.52884,
			"y": 40.719883,
			"z": 135.93924
		}
	}, {
		"_id": {
			"$oid": "63a8369c65c0582d3d178b6d"
		},
		"id": "208fb463-e71f-42ba-9b95-ab36620bab3a",
		"time": {
			"$numberLong": "1671968412631"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198167692926",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52915.516,
			"y": 734.8015,
			"z": 116820.01
		},
		"victimPosition": {
			"x": 53453.234,
			"y": 718.23676,
			"z": 117942.984
		},
		"killerVelocity": {
			"x": 68.70164,
			"y": 28.477102,
			"z": 119.97418
		},
		"victimVelocity": {
			"x": 23.00775,
			"y": 105.61892,
			"z": -100.53511
		}
	}, {
		"_id": {
			"$oid": "63a836e465c0582d3d178b73"
		},
		"id": "2055ecab-e52b-4ce8-9961-d1142cbb0a63",
		"time": {
			"$numberLong": "1671968484344"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199249347229",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51359.176,
			"y": 302.55017,
			"z": 118639.47
		},
		"victimPosition": {
			"x": 51049.63,
			"y": 279.47827,
			"z": 118596.35
		},
		"killerVelocity": {
			"x": -344.24948,
			"y": -31.434053,
			"z": -57.186123
		},
		"victimVelocity": {
			"x": -14.889384,
			"y": -0.00039895624,
			"z": -3.7315857
		}
	}, {
		"_id": {
			"$oid": "63a8371665c0582d3d178b75"
		},
		"id": "315a7628-75ee-4d50-93cc-fbbd02af4862",
		"time": {
			"$numberLong": "1671968534330"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198389955506",
		"killerId": "76561198358586578",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51597.19,
			"y": 638.8122,
			"z": 118989.98
		},
		"victimPosition": {
			"x": 52205.367,
			"y": 314.0628,
			"z": 117771.305
		},
		"killerVelocity": {
			"x": 87.01564,
			"y": -18.273972,
			"z": -129.19867
		},
		"victimVelocity": {
			"x": 58.55836,
			"y": -66.43514,
			"z": 28.268576
		}
	}, {
		"_id": {
			"$oid": "63a8374b65c0582d3d178b79"
		},
		"id": "2777a10d-bdfd-4245-9119-e70fc61c9156",
		"time": {
			"$numberLong": "1671968587082"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199249347229",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52311.82,
			"y": 278.80875,
			"z": 117824.47
		},
		"victimPosition": {
			"x": 52134.94,
			"y": 279.44742,
			"z": 118571.13
		},
		"killerVelocity": {
			"x": -0.055259943,
			"y": -0.0039281175,
			"z": -0.04843207
		},
		"victimVelocity": {
			"x": 0.98403347,
			"y": 0.09857785,
			"z": 2.7170408
		}
	}, {
		"_id": {
			"$oid": "63a837b865c0582d3d178b8e"
		},
		"id": "f531d1e4-51d1-4206-9d66-f1c5d5cd0f30",
		"time": {
			"$numberLong": "1671968696778"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198378108584",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51472.363,
			"y": 838.29834,
			"z": 117140.445
		},
		"victimPosition": {
			"x": 48075.06,
			"y": 851.11,
			"z": 114283.81
		},
		"killerVelocity": {
			"x": -115.05059,
			"y": 10.007297,
			"z": -97.05203
		},
		"victimVelocity": {
			"x": -51.82341,
			"y": 5.009379,
			"z": -175.30714
		}
	}, {
		"_id": {
			"$oid": "63a8384265c0582d3d178b9c"
		},
		"id": "66cbcb01-614f-46a4-8ab4-ba0ff18840c3",
		"time": {
			"$numberLong": "1671968834674"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199249347229",
		"killerId": "76561198389955506",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73607.77,
			"y": 903.78143,
			"z": 108381.21
		},
		"victimPosition": {
			"x": 72272.266,
			"y": 705.2562,
			"z": 112410.055
		},
		"killerVelocity": {
			"x": -78.99111,
			"y": -38.923798,
			"z": 337.66013
		},
		"victimVelocity": {
			"x": 306.4055,
			"y": 149.37724,
			"z": -46.01463
		}
	}, {
		"_id": {
			"$oid": "63a848c865c0582d3d178ca4"
		},
		"id": "d0507fe5-92f9-4e45-8ebb-c2070e401a63",
		"time": {
			"$numberLong": "1671973064024"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199090563519",
		"killerId": "76561198022003578",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88814.39,
			"y": 13234.11,
			"z": 75465.445
		},
		"victimPosition": {
			"x": 52522.56,
			"y": 280.0242,
			"z": 119279.67
		},
		"killerVelocity": {
			"x": 299.04413,
			"y": -7.6998305,
			"z": -170.70114
		},
		"victimVelocity": {
			"x": 0.30618912,
			"y": 4.8233795,
			"z": -12.211281
		}
	}, {
		"_id": {
			"$oid": "63a8645665c0582d3d178d6e"
		},
		"id": "c6c52d7a-197f-43d9-b92a-a9415cb4e90e",
		"time": {
			"$numberLong": "1671980118830"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199122104818",
		"killerId": "76561199122714904",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62250.344,
			"y": 1470.482,
			"z": 115087.055
		},
		"victimPosition": {
			"x": 61335.65,
			"y": 1108.9331,
			"z": 113796.28
		},
		"killerVelocity": {
			"x": -263.708,
			"y": -2.6768079,
			"z": -164.13268
		},
		"victimVelocity": {
			"x": 234.72276,
			"y": -8.995492,
			"z": -216.92975
		}
	}, {
		"_id": {
			"$oid": "63a8680d65c0582d3d178dbd"
		},
		"id": "c58dacd4-fa14-47fb-91af-f6567da58bb6",
		"time": {
			"$numberLong": "1671981069873"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198872438462",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52917.195,
			"y": 523.431,
			"z": 119556.79
		},
		"victimPosition": {
			"x": 52236.86,
			"y": 335.8028,
			"z": 118707.516
		},
		"killerVelocity": {
			"x": -214.86264,
			"y": -24.496935,
			"z": -186.6648
		},
		"victimVelocity": {
			"x": 83.725586,
			"y": 14.108392,
			"z": 62.72724
		}
	}, {
		"_id": {
			"$oid": "63a8683465c0582d3d178dc2"
		},
		"id": "4f69adf6-c707-4571-9695-7ca98154fc56",
		"time": {
			"$numberLong": "1671981108213"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198872438462",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50695.2,
			"y": 1094.4938,
			"z": 118859.48
		},
		"victimPosition": {
			"x": 51264.62,
			"y": 279.45184,
			"z": 118460.39
		},
		"killerVelocity": {
			"x": 154.53601,
			"y": -133.44594,
			"z": -66.9385
		},
		"victimVelocity": {
			"x": 12.636113,
			"y": -0.000027388334,
			"z": -2.7385144
		}
	}, {
		"_id": {
			"$oid": "63a8691365c0582d3d178dcc"
		},
		"id": "0387f5e8-d8f2-4755-9428-4aa83e4c37fa",
		"time": {
			"$numberLong": "1671981331184"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198872438462",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48516.19,
			"y": 898.1764,
			"z": 119315.22
		},
		"victimPosition": {
			"x": 48539.68,
			"y": 935.14044,
			"z": 118777.26
		},
		"killerVelocity": {
			"x": 49.549942,
			"y": 16.771423,
			"z": -240.66512
		},
		"victimVelocity": {
			"x": -62.37148,
			"y": -43.42499,
			"z": 330.25687
		}
	}, {
		"_id": {
			"$oid": "63a8691c65c0582d3d178dcf"
		},
		"id": "d047d9b4-a17b-41c4-966b-c629e3eabfaa",
		"time": {
			"$numberLong": "1671981340928"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198025197864",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50220.105,
			"y": 740.5057,
			"z": 118856.42
		},
		"victimPosition": {
			"x": 54442.29,
			"y": 263.26688,
			"z": 120031.83
		},
		"killerVelocity": {
			"x": -195.6982,
			"y": -2.9137843,
			"z": 47.580086
		},
		"victimVelocity": {
			"x": 9.121495,
			"y": 4.586486,
			"z": 8.821206
		}
	}, {
		"_id": {
			"$oid": "63a8694f65c0582d3d178dd4"
		},
		"id": "2987b646-bcd1-4529-af7c-9cf3a3a88d49",
		"time": {
			"$numberLong": "1671981391449"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198067561870",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56427.324,
			"y": 788.86426,
			"z": 122166.625
		},
		"victimPosition": {
			"x": 60908.543,
			"y": 1393.3357,
			"z": 127289.2
		},
		"killerVelocity": {
			"x": 162.72025,
			"y": -58.14122,
			"z": 80.18487
		},
		"victimVelocity": {
			"x": -80.637886,
			"y": 21.172142,
			"z": 246.82602
		}
	}, {
		"_id": {
			"$oid": "63a8695265c0582d3d178dd6"
		},
		"id": "ceab9e87-14d1-474f-8336-96abb77e0722",
		"time": {
			"$numberLong": "1671981394159"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198091500306",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56820.25,
			"y": 1085.6759,
			"z": 122530.89
		},
		"victimPosition": {
			"x": 56857.797,
			"y": 585.24554,
			"z": 122294.914
		},
		"killerVelocity": {
			"x": 303.4109,
			"y": 76.24751,
			"z": 89.408035
		},
		"victimVelocity": {
			"x": 114.51537,
			"y": -36.828365,
			"z": -14.095299
		}
	}, {
		"_id": {
			"$oid": "63a8696965c0582d3d178dd9"
		},
		"id": "3c7d9f83-e369-46ba-a239-f7f567a160be",
		"time": {
			"$numberLong": "1671981417049"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199185397619",
		"killerId": "76561198114030063",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59514.96,
			"y": 1168.0289,
			"z": 121058.516
		},
		"victimPosition": {
			"x": 56898.812,
			"y": 696.35834,
			"z": 119373.805
		},
		"killerVelocity": {
			"x": 325.58444,
			"y": 1.0321053,
			"z": -93.44614
		},
		"victimVelocity": {
			"x": -105.94969,
			"y": -69.89052,
			"z": -57.785835
		}
	}, {
		"_id": {
			"$oid": "63a86a7765c0582d3d178deb"
		},
		"id": "fb865187-06ea-4da2-adae-42d5c80cfb37",
		"time": {
			"$numberLong": "1671981687779"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198343027990",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51125.47,
			"y": 279.42426,
			"z": 118485.98
		},
		"victimPosition": {
			"x": 50744.594,
			"y": 279.49078,
			"z": 118619.35
		},
		"killerVelocity": {
			"x": -2.6956363,
			"y": -0.007865272,
			"z": 0.77558804
		},
		"victimVelocity": {
			"x": 0.88024306,
			"y": -0.00048720837,
			"z": -3.9324136
		}
	}, {
		"_id": {
			"$oid": "63a86b8d65c0582d3d178e00"
		},
		"id": "dbd6e87b-9b1c-40c3-8f68-f3d28b9a6ca6",
		"time": {
			"$numberLong": "1671981965065"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199110614864",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51376.227,
			"y": 998.278,
			"z": 117864.125
		},
		"victimPosition": {
			"x": 51768.33,
			"y": 282.5431,
			"z": 118549.92
		},
		"killerVelocity": {
			"x": 13.860022,
			"y": 15.401756,
			"z": 1.7795496
		},
		"victimVelocity": {
			"x": 84.424965,
			"y": 2.505907,
			"z": 31.13809
		}
	}, {
		"_id": {
			"$oid": "63a86be565c0582d3d178e08"
		},
		"id": "59e4520b-7bed-44a6-88b2-c0d4949c6a8b",
		"time": {
			"$numberLong": "1671982053924"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198343027990",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51739.113,
			"y": 713.54364,
			"z": 117873.195
		},
		"victimPosition": {
			"x": 50751.914,
			"y": 279.48468,
			"z": 118531.79
		},
		"killerVelocity": {
			"x": -46.061832,
			"y": -4.30523,
			"z": 13.652788
		},
		"victimVelocity": {
			"x": -0.08385763,
			"y": -0.0021387935,
			"z": -0.115569584
		}
	}, {
		"_id": {
			"$oid": "63a86beb65c0582d3d178e0a"
		},
		"id": "48a1cb9d-d0d3-439e-a463-bb8455570e3e",
		"time": {
			"$numberLong": "1671982059381"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199110614864",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51455.758,
			"y": 638.62006,
			"z": 117964.555
		},
		"victimPosition": {
			"x": 50705.453,
			"y": 279.48666,
			"z": 118336.29
		},
		"killerVelocity": {
			"x": -58.123997,
			"y": -21.267626,
			"z": 20.974611
		},
		"victimVelocity": {
			"x": 13.75013,
			"y": 0.000240542,
			"z": -16.392372
		}
	}, {
		"_id": {
			"$oid": "63a86c2865c0582d3d178e0d"
		},
		"id": "bb22ee4c-f620-4b80-bf8d-de3eb2dd2653",
		"time": {
			"$numberLong": "1671982120594"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198343027990",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51706.145,
			"y": 488.01794,
			"z": 118467.3
		},
		"victimPosition": {
			"x": 50725.52,
			"y": 279.49286,
			"z": 118238.41
		},
		"killerVelocity": {
			"x": 60.63297,
			"y": 7.928917,
			"z": -0.62949497
		},
		"victimVelocity": {
			"x": -0.00044831535,
			"y": -0.00008293986,
			"z": -0.0042271246
		}
	}, {
		"_id": {
			"$oid": "63a86c5265c0582d3d178e15"
		},
		"id": "c818306e-c7f5-467f-a2d0-d38350fc9234",
		"time": {
			"$numberLong": "1671982162447"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198022976085",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51263.387,
			"y": 278.6926,
			"z": 118607.266
		},
		"victimPosition": {
			"x": 50978.82,
			"y": 279.46945,
			"z": 118634.91
		},
		"killerVelocity": {
			"x": -2.3282003,
			"y": -0.0019463822,
			"z": 0.23758936
		},
		"victimVelocity": {
			"x": -0.00020377219,
			"y": 0.001227282,
			"z": -0.000056824705
		}
	}, {
		"_id": {
			"$oid": "63a86d2765c0582d3d178e20"
		},
		"id": "0fd4954b-6d87-4b29-9f87-4cbdeb91e0b1",
		"time": {
			"$numberLong": "1671982375868"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198022976085",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52233.082,
			"y": 444.3493,
			"z": 118620.09
		},
		"victimPosition": {
			"x": 50663.91,
			"y": 279.9614,
			"z": 118486.67
		},
		"killerVelocity": {
			"x": 65.51026,
			"y": -11.965069,
			"z": 21.906076
		},
		"victimVelocity": {
			"x": -5.674516,
			"y": -0.1839869,
			"z": -6.683881
		}
	}, {
		"_id": {
			"$oid": "63a86d6265c0582d3d178e29"
		},
		"id": "7aca7dfe-4499-4212-b795-41576856d92c",
		"time": {
			"$numberLong": "1671982434727"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198037580232",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51716.582,
			"y": 363.47064,
			"z": 118537.66
		},
		"victimPosition": {
			"x": 52723.34,
			"y": 278.68872,
			"z": 119091.52
		},
		"killerVelocity": {
			"x": -63.878654,
			"y": -3.3500316,
			"z": -11.500425
		},
		"victimVelocity": {
			"x": -0.76784325,
			"y": -0.36442214,
			"z": 0.42092514
		}
	}, {
		"_id": {
			"$oid": "63a86d7065c0582d3d178e2c"
		},
		"id": "b9767c76-5aba-4c51-8c23-76040a903440",
		"time": {
			"$numberLong": "1671982448474"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198329125964",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50792.742,
			"y": 356.37115,
			"z": 118364.29
		},
		"victimPosition": {
			"x": 51320.68,
			"y": 279.4012,
			"z": 118347.45
		},
		"killerVelocity": {
			"x": -64.69918,
			"y": 8.976722,
			"z": -4.101464
		},
		"victimVelocity": {
			"x": 11.461373,
			"y": 0.12006717,
			"z": -3.1511862
		}
	}, {
		"_id": {
			"$oid": "63a86d8a65c0582d3d178e31"
		},
		"id": "fe9f019a-f07b-4784-b7e6-245c04bdb397",
		"time": {
			"$numberLong": "1671982474550"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199442199542",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51370.883,
			"y": 351.76886,
			"z": 118686.59
		},
		"victimPosition": {
			"x": 51628.914,
			"y": 279.48376,
			"z": 118735.34
		},
		"killerVelocity": {
			"x": 62.802795,
			"y": -4.4739037,
			"z": 8.634513
		},
		"victimVelocity": {
			"x": 11.06403,
			"y": 0.00019169599,
			"z": 2.8295083
		}
	}, {
		"_id": {
			"$oid": "63a86d9565c0582d3d178e34"
		},
		"id": "0bcdbb49-57dc-41da-be86-4463304e09bb",
		"time": {
			"$numberLong": "1671982485436"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198037580232",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52076.684,
			"y": 347.38684,
			"z": 118810.98
		},
		"victimPosition": {
			"x": 52783.15,
			"y": 278.69043,
			"z": 118964.27
		},
		"killerVelocity": {
			"x": 65.15851,
			"y": 2.019463,
			"z": 13.034357
		},
		"victimVelocity": {
			"x": -3.8038874,
			"y": 0.00027953833,
			"z": -5.9266725
		}
	}, {
		"_id": {
			"$oid": "63a86d9b65c0582d3d178e36"
		},
		"id": "7c7cce46-ec9e-446e-b94a-4f0fdca56db7",
		"time": {
			"$numberLong": "1671982491528"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198320603896",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52469.098,
			"y": 365.50638,
			"z": 118897.85
		},
		"victimPosition": {
			"x": 53615.37,
			"y": 278.74765,
			"z": 119031.97
		},
		"killerVelocity": {
			"x": 63.311268,
			"y": 4.439439,
			"z": 15.071654
		},
		"victimVelocity": {
			"x": 112.224205,
			"y": -0.153989,
			"z": 28.84542
		}
	}, {
		"_id": {
			"$oid": "63a86dd365c0582d3d178e3f"
		},
		"id": "9974e7f9-4bd8-4d45-8837-425e6db188fc",
		"time": {
			"$numberLong": "1671982547341"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198037580232",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52406.094,
			"y": 349.90353,
			"z": 118666.86
		},
		"victimPosition": {
			"x": 52709.887,
			"y": 278.69043,
			"z": 118840.78
		},
		"killerVelocity": {
			"x": 42.089108,
			"y": -8.20748,
			"z": 12.40901
		},
		"victimVelocity": {
			"x": -5.3764734,
			"y": -0.0003715381,
			"z": -8.933306
		}
	}, {
		"_id": {
			"$oid": "63a86dd865c0582d3d178e41"
		},
		"id": "6da85636-12ff-4c64-885d-faa7790d0b5a",
		"time": {
			"$numberLong": "1671982552576"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198320603896",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52631.76,
			"y": 342.15018,
			"z": 118758.125
		},
		"victimPosition": {
			"x": 52547.777,
			"y": 281.46432,
			"z": 118749.016
		},
		"killerVelocity": {
			"x": 41.240227,
			"y": 5.2108226,
			"z": 20.147966
		},
		"victimVelocity": {
			"x": 71.1292,
			"y": 2.290053,
			"z": 33.21062
		}
	}, {
		"_id": {
			"$oid": "63a86e0165c0582d3d178e45"
		},
		"id": "21ec0124-bc23-451b-924a-ece43f30cdfc",
		"time": {
			"$numberLong": "1671982593049"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199442199542",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52145.996,
			"y": 329.22522,
			"z": 118719.92
		},
		"victimPosition": {
			"x": 53914.92,
			"y": 278.78748,
			"z": 118604.26
		},
		"killerVelocity": {
			"x": -58.395138,
			"y": -3.7900648,
			"z": -22.22428
		},
		"victimVelocity": {
			"x": 98.27002,
			"y": 7.9514704,
			"z": 31.453045
		}
	}, {
		"_id": {
			"$oid": "63a86e2f65c0582d3d178e49"
		},
		"id": "237b8b02-91fa-48c6-a61a-bc3c790c574a",
		"time": {
			"$numberLong": "1671982639189"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199442199542",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52056.133,
			"y": 372.51712,
			"z": 118759.91
		},
		"victimPosition": {
			"x": 52365.637,
			"y": 279.50296,
			"z": 118912.52
		},
		"killerVelocity": {
			"x": 44.101578,
			"y": 1.5714259,
			"z": 12.768211
		},
		"victimVelocity": {
			"x": 109.626595,
			"y": -1.6980437,
			"z": 24.082455
		}
	}, {
		"_id": {
			"$oid": "63a86e3465c0582d3d178e4c"
		},
		"id": "53b5c1a7-6d08-4ddc-84f1-d7cd6323b755",
		"time": {
			"$numberLong": "1671982644721"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198037580232",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52313.074,
			"y": 359.15894,
			"z": 118748.484
		},
		"victimPosition": {
			"x": 52546.28,
			"y": 278.69373,
			"z": 118729.53
		},
		"killerVelocity": {
			"x": 48.548954,
			"y": -13.257227,
			"z": -17.739172
		},
		"victimVelocity": {
			"x": -35.355278,
			"y": 0.002748683,
			"z": -11.799594
		}
	}, {
		"_id": {
			"$oid": "63a86e3865c0582d3d178e4e"
		},
		"id": "f17648ae-5da4-4441-89fd-74f45ff3eab4",
		"time": {
			"$numberLong": "1671982648418"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561197975050781",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52500.66,
			"y": 313.68262,
			"z": 118664.51
		},
		"victimPosition": {
			"x": 52172.52,
			"y": 279.4881,
			"z": 118774.695
		},
		"killerVelocity": {
			"x": 51.379658,
			"y": -2.4016194,
			"z": -24.54173
		},
		"victimVelocity": {
			"x": 17.107637,
			"y": -0.025809623,
			"z": 8.799918
		}
	}, {
		"_id": {
			"$oid": "63a86e5765c0582d3d178e53"
		},
		"id": "85de1ffd-4be3-4f69-8044-124a65b20b65",
		"time": {
			"$numberLong": "1671982679106"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199442199542",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51972.004,
			"y": 391.36298,
			"z": 118590.74
		},
		"victimPosition": {
			"x": 51616.984,
			"y": 279.41595,
			"z": 118693.695
		},
		"killerVelocity": {
			"x": -55.351303,
			"y": -9.782477,
			"z": 21.216923
		},
		"victimVelocity": {
			"x": 17.035553,
			"y": 0.24640408,
			"z": 10.119149
		}
	}, {
		"_id": {
			"$oid": "63a86e8a65c0582d3d178e57"
		},
		"id": "7b79039f-d503-485c-8988-52d39f0554e2",
		"time": {
			"$numberLong": "1671982730164"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199442199542",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51863.797,
			"y": 572.5186,
			"z": 118080.41
		},
		"victimPosition": {
			"x": 51908.84,
			"y": 279.3869,
			"z": 118629.37
		},
		"killerVelocity": {
			"x": 23.487822,
			"y": 6.116556,
			"z": -91.410385
		},
		"victimVelocity": {
			"x": 17.525444,
			"y": 0.20916149,
			"z": -2.8536594
		}
	}, {
		"_id": {
			"$oid": "63a86ebb65c0582d3d178e5c"
		},
		"id": "5db4dd3e-4beb-42ba-b305-bca0b4cc4cc8",
		"time": {
			"$numberLong": "1671982779497"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198037580232",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51731.66,
			"y": 503.56546,
			"z": 116853.664
		},
		"victimPosition": {
			"x": 51942.52,
			"y": 602.5746,
			"z": 116747.21
		},
		"killerVelocity": {
			"x": 90.11927,
			"y": 26.667152,
			"z": -61.00127
		},
		"victimVelocity": {
			"x": 50.819336,
			"y": 38.884045,
			"z": 26.84624
		}
	}, {
		"_id": {
			"$oid": "63a86ee065c0582d3d178e5f"
		},
		"id": "176d045e-21d5-47d1-bedd-96fd5ccdb9b3",
		"time": {
			"$numberLong": "1671982816731"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198091500306",
		"killerId": "76561199442199542",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52791.977,
			"y": 482.8664,
			"z": 118244.43
		},
		"victimPosition": {
			"x": 50149.527,
			"y": 405.06445,
			"z": 118428.25
		},
		"killerVelocity": {
			"x": -158.62819,
			"y": -33.03018,
			"z": 51.74261
		},
		"victimVelocity": {
			"x": -21.223587,
			"y": -4.615308,
			"z": 50.42514
		}
	}, {
		"_id": {
			"$oid": "63a86f5e65c0582d3d178e6d"
		},
		"id": "d816b6f0-eaf5-45b0-9e65-4416da8d483a",
		"time": {
			"$numberLong": "1671982942810"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198091500306",
		"killerId": "76561199367592015",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52371.35,
			"y": 787.7637,
			"z": 118317.45
		},
		"victimPosition": {
			"x": 53388.152,
			"y": 779.16846,
			"z": 117890.445
		},
		"killerVelocity": {
			"x": 310.74387,
			"y": 12.98546,
			"z": -138.17946
		},
		"victimVelocity": {
			"x": 43.372128,
			"y": -7.0806108,
			"z": 48.51419
		}
	}, {
		"_id": {
			"$oid": "63a876db65c0582d3d178ede"
		},
		"id": "0a25f994-187a-472b-9ec5-9f6b1673945e",
		"time": {
			"$numberLong": "1671984859648"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198059203759",
		"killerId": "76561199442199542",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51236.52,
			"y": 293.1736,
			"z": 118622.98
		},
		"victimPosition": {
			"x": 50966.137,
			"y": 279.49338,
			"z": 118684.12
		},
		"killerVelocity": {
			"x": -269.23428,
			"y": -0.17289081,
			"z": 64.907555
		},
		"victimVelocity": {
			"x": 1.4051821,
			"y": -0.00017588586,
			"z": -7.648453
		}
	}, {
		"_id": {
			"$oid": "63a8773665c0582d3d178ee3"
		},
		"id": "b74c0bab-4b92-49b2-8659-1673b2a3a2ae",
		"time": {
			"$numberLong": "1671984950475"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198968646845",
		"killerId": "76561199442199542",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52171.945,
			"y": 275.69534,
			"z": 119381.95
		},
		"victimPosition": {
			"x": 71047.695,
			"y": 991.9255,
			"z": 73259.67
		},
		"killerVelocity": {
			"x": -0.00814965,
			"y": -0.00059717894,
			"z": 0.018517759
		},
		"victimVelocity": {
			"x": -4.617529,
			"y": -132.64615,
			"z": -200.2651
		}
	}, {
		"_id": {
			"$oid": "63a8820465c0582d3d178fc0"
		},
		"id": "18a6cd8d-53fc-4512-9910-14594f33d8ef",
		"time": {
			"$numberLong": "1671987716707"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198806182846",
		"killerId": "76561198957886247",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 122188.45,
			"y": 1560.6208,
			"z": 83165.36
		},
		"victimPosition": {
			"x": 122711.984,
			"y": 1560.3093,
			"z": 81815.516
		},
		"killerVelocity": {
			"x": 294.07462,
			"y": -24.246159,
			"z": -109.32501
		},
		"victimVelocity": {
			"x": 35.260197,
			"y": 36.55548,
			"z": 14.02063
		}
	}, {
		"_id": {
			"$oid": "63a884fb65c0582d3d178ff7"
		},
		"id": "f88476b0-655c-4b60-9059-b4210d71674d",
		"time": {
			"$numberLong": "1671988475605"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199452105949",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49550.06,
			"y": 578.79297,
			"z": 118236.734
		},
		"victimPosition": {
			"x": 48824.91,
			"y": 764.13873,
			"z": 118096.36
		},
		"killerVelocity": {
			"x": -157.5689,
			"y": 22.922167,
			"z": -94.32857
		},
		"victimVelocity": {
			"x": -186.32538,
			"y": 55.92897,
			"z": -40.91078
		}
	}, {
		"_id": {
			"$oid": "63a8856a65c0582d3d178ffd"
		},
		"id": "0156e2f5-2654-4547-8624-d772f2dbf86a",
		"time": {
			"$numberLong": "1671988586467"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199452105949",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52477.605,
			"y": 386.0696,
			"z": 118629.07
		},
		"victimPosition": {
			"x": 52804.363,
			"y": 428.14868,
			"z": 118687.96
		},
		"killerVelocity": {
			"x": 243.64569,
			"y": -44.16718,
			"z": -10.680398
		},
		"victimVelocity": {
			"x": 182.4778,
			"y": 25.971378,
			"z": 33.787952
		}
	}, {
		"_id": {
			"$oid": "63a8862d65c0582d3d179001"
		},
		"id": "7a62a059-7ba6-4ce4-b13a-06fa9ca9f2ec",
		"time": {
			"$numberLong": "1671988781650"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199452105949",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55556.37,
			"y": 425.10236,
			"z": 119287.93
		},
		"victimPosition": {
			"x": 54935.7,
			"y": 513.78845,
			"z": 119145.45
		},
		"killerVelocity": {
			"x": 295.87686,
			"y": 46.61624,
			"z": -43.46578
		},
		"victimVelocity": {
			"x": 129.6529,
			"y": -41.261948,
			"z": -23.692448
		}
	}, {
		"_id": {
			"$oid": "63a8869165c0582d3d179008"
		},
		"id": "349b5ef9-05b6-4781-8803-3c8bba2b7a24",
		"time": {
			"$numberLong": "1671988881495"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199452105949",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51752.86,
			"y": 278.65897,
			"z": 118737.5
		},
		"victimPosition": {
			"x": 51573.66,
			"y": 279.4256,
			"z": 118705.57
		},
		"killerVelocity": {
			"x": -8.365787,
			"y": 0.055924498,
			"z": -1.6512437
		},
		"victimVelocity": {
			"x": 0.05803659,
			"y": -0.011948653,
			"z": -0.059676327
		}
	}, {
		"_id": {
			"$oid": "63a886f765c0582d3d17900e"
		},
		"id": "3f0f8efe-b395-4fe8-b68e-318a28e54e9d",
		"time": {
			"$numberLong": "1671988983015"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199452105949",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57072.582,
			"y": 475.48712,
			"z": 120100.8
		},
		"victimPosition": {
			"x": 55778.06,
			"y": 256.25565,
			"z": 119406.43
		},
		"killerVelocity": {
			"x": 271.40182,
			"y": 55.858593,
			"z": -15.399425
		},
		"victimVelocity": {
			"x": 63.722126,
			"y": -53.513565,
			"z": 23.169193
		}
	}, {
		"_id": {
			"$oid": "63a88bd565c0582d3d179075"
		},
		"id": "83d210ca-15d9-4f54-9672-7badd6c9f3c9",
		"time": {
			"$numberLong": "1671990229896"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199153452000",
		"killerId": "76561199381272752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56483.79,
			"y": 795.59875,
			"z": 124632.32
		},
		"victimPosition": {
			"x": 54720.355,
			"y": 737.664,
			"z": 124158.11
		},
		"killerVelocity": {
			"x": -18.118935,
			"y": -4.9604955,
			"z": 140.09816
		},
		"victimVelocity": {
			"x": -179.87302,
			"y": -57.64739,
			"z": -2.9227498
		}
	}, {
		"_id": {
			"$oid": "63a8a1d565c0582d3d17914d"
		},
		"id": "4342494c-1c56-409a-b437-886e6e6c5e71",
		"time": {
			"$numberLong": "1671995861118"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199081580274",
		"killerId": "76561198353116012",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91217.78,
			"y": 4249.8877,
			"z": 85290.05
		},
		"victimPosition": {
			"x": 87977.12,
			"y": 3721.8533,
			"z": 83465.695
		},
		"killerVelocity": {
			"x": -203.56096,
			"y": -39.28913,
			"z": -308.15158
		},
		"victimVelocity": {
			"x": -299.40356,
			"y": -72.363556,
			"z": -14.742337
		}
	}, {
		"_id": {
			"$oid": "63a8ab4865c0582d3d179232"
		},
		"id": "3756cacb-f0f5-4507-9ed3-97de85188408",
		"time": {
			"$numberLong": "1671998280509"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198165408741",
		"killerId": "76561199262976447",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83733.39,
			"y": 1183.1359,
			"z": 114060.2
		},
		"victimPosition": {
			"x": 89931.08,
			"y": 1166.6982,
			"z": 112846.02
		},
		"killerVelocity": {
			"x": 382.4761,
			"y": -9.66191,
			"z": -28.50252
		},
		"victimVelocity": {
			"x": -267.53708,
			"y": -68.603065,
			"z": -100.652275
		}
	}, {
		"_id": {
			"$oid": "63a8affb65c0582d3d17929c"
		},
		"id": "d26f609a-525c-4329-a122-9bdced5b35d9",
		"time": {
			"$numberLong": "1671999483352"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198256453647",
		"killerId": "76561197983736363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83526.93,
			"y": 5493.3975,
			"z": 114668.43
		},
		"victimPosition": {
			"x": 85368.17,
			"y": 6003.8325,
			"z": 112065.44
		},
		"killerVelocity": {
			"x": 194.23367,
			"y": 36.51089,
			"z": -327.1047
		},
		"victimVelocity": {
			"x": 154.05858,
			"y": 28.835028,
			"z": -339.42358
		}
	}, {
		"_id": {
			"$oid": "63a8b0a765c0582d3d1792b1"
		},
		"id": "4ad0f949-d995-4335-827a-8e47be6596b2",
		"time": {
			"$numberLong": "1671999655706"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198356590129",
		"killerId": "76561197983736363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 118480.62,
			"y": 2916.4458,
			"z": 80022.64
		},
		"victimPosition": {
			"x": 118121.23,
			"y": 2433.8958,
			"z": 79887.79
		},
		"killerVelocity": {
			"x": -249.6876,
			"y": -228.36008,
			"z": -190.08768
		},
		"victimVelocity": {
			"x": -85.02011,
			"y": -111.522446,
			"z": 154.064
		}
	}, {
		"_id": {
			"$oid": "63a8b0e365c0582d3d1792b3"
		},
		"id": "b78b3dba-320a-4325-8dd6-7b9bf1092685",
		"time": {
			"$numberLong": "1671999715268"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199112545519",
		"killerId": "76561197983736363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 111175.4,
			"y": 2133.2756,
			"z": 79008.586
		},
		"victimPosition": {
			"x": 111712.1,
			"y": 1801.2268,
			"z": 79659.91
		},
		"killerVelocity": {
			"x": 159.76913,
			"y": -58.98954,
			"z": 175.78484
		},
		"victimVelocity": {
			"x": -119.608574,
			"y": -109.19324,
			"z": 73.29617
		}
	}, {
		"_id": {
			"$oid": "63a8b2b965c0582d3d1792ce"
		},
		"id": "65b6a94a-074c-46ca-90a5-2c90c6218d03",
		"time": {
			"$numberLong": "1672000185029"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197983736363",
		"killerId": "76561198050284681",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75384.484,
			"y": 965.67267,
			"z": 92894.28
		},
		"victimPosition": {
			"x": 80474.93,
			"y": 2478.6997,
			"z": 90268.57
		},
		"killerVelocity": {
			"x": 181.67429,
			"y": 55.472305,
			"z": -66.900505
		},
		"victimVelocity": {
			"x": 77.19146,
			"y": -37.42046,
			"z": -97.807884
		}
	}, {
		"_id": {
			"$oid": "63a8ba4565c0582d3d179370"
		},
		"id": "4407525a-36ee-47d2-90a4-84abacfd8fca",
		"time": {
			"$numberLong": "1672002117922"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199441932128",
		"killerId": "76561199081580274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55062.8,
			"y": 697.1411,
			"z": 117733.805
		},
		"victimPosition": {
			"x": 55438.406,
			"y": 794.3932,
			"z": 116374.88
		},
		"killerVelocity": {
			"x": 74.53814,
			"y": -0.96340954,
			"z": -205.73003
		},
		"victimVelocity": {
			"x": 14.908794,
			"y": 49.748768,
			"z": -187.36102
		}
	}, {
		"_id": {
			"$oid": "63a8ba4965c0582d3d179372"
		},
		"id": "d4a10c50-07b9-40c6-ac31-0c1058c5fe40",
		"time": {
			"$numberLong": "1672002121854"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199198171619",
		"killerId": "76561197992647892",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70553.89,
			"y": 1409.664,
			"z": 97220.484
		},
		"victimPosition": {
			"x": 77710.71,
			"y": 1670.9587,
			"z": 95282.58
		},
		"killerVelocity": {
			"x": 173.2775,
			"y": 4.6777,
			"z": 1.2881485
		},
		"victimVelocity": {
			"x": -233.88431,
			"y": 9.457077,
			"z": -52.258366
		}
	}, {
		"_id": {
			"$oid": "63a8be4465c0582d3d1793bb"
		},
		"id": "198b6f7e-416d-4849-9b98-4ff81ba063e8",
		"time": {
			"$numberLong": "1672003140659"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199377601035",
		"killerId": "76561199441932128",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85722.77,
			"y": 3549.7742,
			"z": 73116.945
		},
		"victimPosition": {
			"x": 85803.3,
			"y": 3345.4807,
			"z": 71302.43
		},
		"killerVelocity": {
			"x": 180.81947,
			"y": -40.039715,
			"z": -364.87015
		},
		"victimVelocity": {
			"x": 19.10391,
			"y": -53.308292,
			"z": -244.4713
		}
	}, {
		"_id": {
			"$oid": "63a8d7a5faabb276553f8be1"
		},
		"id": "3d16155c-0e15-4e4a-b16f-79564a802dfe",
		"time": {
			"$numberLong": "1672009637866"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198094654812",
		"killerId": "76561199154348102",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60030.598,
			"y": 1033.7922,
			"z": 114802.67
		},
		"victimPosition": {
			"x": 58750.125,
			"y": 1413.6295,
			"z": 117722.44
		},
		"killerVelocity": {
			"x": -89.41544,
			"y": 10.257014,
			"z": 203.92775
		},
		"victimVelocity": {
			"x": 206.29176,
			"y": -10.6007185,
			"z": -197.1238
		}
	}, {
		"_id": {
			"$oid": "63a8d7a8faabb276553f8be3"
		},
		"id": "cd336743-829d-48cb-8e34-56a305353eb8",
		"time": {
			"$numberLong": "1672009640636"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199154348102",
		"killerId": "76561198094654812",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59288.586,
			"y": 1350.7167,
			"z": 117197.62
		},
		"victimPosition": {
			"x": 59793.28,
			"y": 1069.2896,
			"z": 115397.69
		},
		"killerVelocity": {
			"x": 188.58951,
			"y": -32.740917,
			"z": -185.35504
		},
		"victimVelocity": {
			"x": -83.2603,
			"y": 15.755891,
			"z": 215.30849
		}
	}, {
		"_id": {
			"$oid": "63a8d845faabb276553f8bf4"
		},
		"id": "f42a1da4-84b4-43c1-9938-111195a9dcdf",
		"time": {
			"$numberLong": "1672009797427"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198094654812",
		"killerId": "76561199154348102",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63705.145,
			"y": 626.45624,
			"z": 112268.45
		},
		"victimPosition": {
			"x": 64916.26,
			"y": 545.7475,
			"z": 110637.74
		},
		"killerVelocity": {
			"x": 187.64009,
			"y": -5.6135964,
			"z": -236.10527
		},
		"victimVelocity": {
			"x": 212.09839,
			"y": -31.40458,
			"z": -269.91937
		}
	}, {
		"_id": {
			"$oid": "63a90161faabb276553f8f3c"
		},
		"id": "730dd50a-b915-499b-ba5e-acf40cf8a162",
		"time": {
			"$numberLong": "1672020321927"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199250254977",
		"killerId": "76561199046328344",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55152.715,
			"y": 489.77917,
			"z": 118409.72
		},
		"victimPosition": {
			"x": 58422.05,
			"y": 613.7076,
			"z": 117776.12
		},
		"killerVelocity": {
			"x": 189.3704,
			"y": -32.28363,
			"z": -46.604218
		},
		"victimVelocity": {
			"x": 256.93674,
			"y": -17.253643,
			"z": -85.27444
		}
	}, {
		"_id": {
			"$oid": "63a902a8faabb276553f8f6a"
		},
		"id": "a792abb0-3096-48e5-8275-d51e9643ae9b",
		"time": {
			"$numberLong": "1672020648925"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 5,
		"victimId": "76561199046328344",
		"killerId": "76561198058649726",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 51980.01,
			"y": 279.4323,
			"z": 118820.78
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -0.39749292,
			"y": -0.0009095818,
			"z": 0.22833423
		}
	}, {
		"_id": {
			"$oid": "63a905e5faabb276553f8fbe"
		},
		"id": "db4d9150-e93e-449e-b599-fb297414f811",
		"time": {
			"$numberLong": "1672021477107"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199025467198",
		"killerId": "76561198058649726",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71138.43,
			"y": 548.201,
			"z": 111093.23
		},
		"victimPosition": {
			"x": 74664.17,
			"y": 770.10297,
			"z": 108613.82
		},
		"killerVelocity": {
			"x": 277.43948,
			"y": -24.611412,
			"z": 117.61057
		},
		"victimVelocity": {
			"x": 256.08365,
			"y": 89.46211,
			"z": -185.535
		}
	}, {
		"_id": {
			"$oid": "63a908abfaabb276553f9007"
		},
		"id": "467aa274-6321-41c1-8de0-c5609c4e33e5",
		"time": {
			"$numberLong": "1672022187286"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198971520391",
		"killerId": "76561198084243112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58028.574,
			"y": 4256.9937,
			"z": 109755.32
		},
		"victimPosition": {
			"x": 64031.94,
			"y": 1667.262,
			"z": 107198.164
		},
		"killerVelocity": {
			"x": 168.30801,
			"y": 5.289561,
			"z": -24.85634
		},
		"victimVelocity": {
			"x": 149.59415,
			"y": -183.0947,
			"z": -50.7767
		}
	}, {
		"_id": {
			"$oid": "63a90963faabb276553f900d"
		},
		"id": "c8354226-2da0-4efc-b047-35c458dd1317",
		"time": {
			"$numberLong": "1672022371743"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198084243112",
		"killerId": "76561198971520391",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81096.17,
			"y": 7586.747,
			"z": 113683.734
		},
		"victimPosition": {
			"x": 94113.09,
			"y": 6859.249,
			"z": 111217.42
		},
		"killerVelocity": {
			"x": 333.01184,
			"y": 16.719194,
			"z": -132.54683
		},
		"victimVelocity": {
			"x": -127.469345,
			"y": -100.44359,
			"z": -114.20828
		}
	}, {
		"_id": {
			"$oid": "63a9116afaabb276553f90f6"
		},
		"id": "c71c2200-2d17-4081-b762-36d12cf8fea2",
		"time": {
			"$numberLong": "1672024426262"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198813195056",
		"killerId": "76561198329125964",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87291.42,
			"y": 1206.7668,
			"z": 78320.25
		},
		"victimPosition": {
			"x": 88848.125,
			"y": 449.83606,
			"z": 77443.516
		},
		"killerVelocity": {
			"x": 206.55243,
			"y": -80.31175,
			"z": -155.91937
		},
		"victimVelocity": {
			"x": 67.78926,
			"y": -77.048,
			"z": -174.39351
		}
	}, {
		"_id": {
			"$oid": "63a91631faabb276553f9169"
		},
		"id": "89c2a929-7f8b-41f1-8399-369680743220",
		"time": {
			"$numberLong": "1672025649717"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197985157646",
		"killerId": "76561199025467198",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61330.36,
			"y": 1545.4376,
			"z": 104056.01
		},
		"victimPosition": {
			"x": 63980.39,
			"y": 1062.1726,
			"z": 99994.82
		},
		"killerVelocity": {
			"x": 184.97804,
			"y": -0.8561703,
			"z": -315.75677
		},
		"victimVelocity": {
			"x": -83.97354,
			"y": -79.83802,
			"z": -264.78687
		}
	}, {
		"_id": {
			"$oid": "63a92000faabb276553f9267"
		},
		"id": "b1a7a58f-0a30-4e45-8916-454fed68f0db",
		"time": {
			"$numberLong": "1672028160767"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198108619440",
		"killerId": "76561198125239287",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73324.85,
			"y": 1456.7373,
			"z": 104689.32
		},
		"victimPosition": {
			"x": 74284.016,
			"y": 613.27405,
			"z": 104114.73
		},
		"killerVelocity": {
			"x": 353.92477,
			"y": -8.868653,
			"z": -163.01297
		},
		"victimVelocity": {
			"x": 45.20077,
			"y": -40.324196,
			"z": -152.331
		}
	}, {
		"_id": {
			"$oid": "63a95b64faabb276553f9720"
		},
		"id": "ef5ef9c2-0198-4f2a-b8ea-92cb798d21b7",
		"time": {
			"$numberLong": "1672043364079"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198880471637",
		"killerId": "76561198403187486",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98772.125,
			"y": 3141.6577,
			"z": 82073.25
		},
		"victimPosition": {
			"x": 96721.945,
			"y": 3534.9592,
			"z": 79963.195
		},
		"killerVelocity": {
			"x": -213.06496,
			"y": 18.47039,
			"z": -231.48029
		},
		"victimVelocity": {
			"x": 355.03632,
			"y": 20.132631,
			"z": 32.912533
		}
	}, {
		"_id": {
			"$oid": "63a95cd0faabb276553f9740"
		},
		"id": "23e7d4b2-3007-4b96-b00e-f6244b235413",
		"time": {
			"$numberLong": "1672043728475"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198069307629",
		"killerId": "76561198403187486",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82431.17,
			"y": 3449.1653,
			"z": 90418.92
		},
		"victimPosition": {
			"x": 86360.09,
			"y": 3845.804,
			"z": 79903.24
		},
		"killerVelocity": {
			"x": 123.18671,
			"y": 12.028541,
			"z": -365.62067
		},
		"victimVelocity": {
			"x": 135.08884,
			"y": -286.25867,
			"z": -149.46
		}
	}, {
		"_id": {
			"$oid": "63a95cf1faabb276553f9744"
		},
		"id": "a80210ae-f90a-4895-a17e-63830c21fa68",
		"time": {
			"$numberLong": "1672043761347"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198403187486",
		"killerId": "76561197971168124",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96208.15,
			"y": 11993.578,
			"z": 70062.21
		},
		"victimPosition": {
			"x": 89159.39,
			"y": 2553.0525,
			"z": 79547.82
		},
		"killerVelocity": {
			"x": -331.99243,
			"y": 4.252358,
			"z": 193.65294
		},
		"victimVelocity": {
			"x": 235.95227,
			"y": 8.533555,
			"z": -312.71704
		}
	}, {
		"_id": {
			"$oid": "63a95d92faabb276553f9751"
		},
		"id": "a4c44ebc-6b14-4b60-a55b-c0b70e3e8efe",
		"time": {
			"$numberLong": "1672043922125"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198403187486",
		"killerId": "76561197971168124",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51182.566,
			"y": 310.84073,
			"z": 118335.32
		},
		"victimPosition": {
			"x": 51104.855,
			"y": 279.4862,
			"z": 118607.484
		},
		"killerVelocity": {
			"x": -100.74885,
			"y": -54.00315,
			"z": 356.40863
		},
		"victimVelocity": {
			"x": -13.029534,
			"y": 0.0015106574,
			"z": -3.1361341
		}
	}, {
		"_id": {
			"$oid": "63a96d15faabb276553f9893"
		},
		"id": "1ec67afb-23ca-4065-bfa1-ca7671be9d5b",
		"time": {
			"$numberLong": "1672047893825"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198008375577",
		"killerId": "76561198833889577",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63522.086,
			"y": 1288.2927,
			"z": 104305
		},
		"victimPosition": {
			"x": 62302.777,
			"y": 1372.4619,
			"z": 103725.71
		},
		"killerVelocity": {
			"x": -5.6043406,
			"y": 15.785636,
			"z": -271.43265
		},
		"victimVelocity": {
			"x": 70.01363,
			"y": -24.242844,
			"z": 59.75335
		}
	}, {
		"_id": {
			"$oid": "63a97d7afaabb276553f9973"
		},
		"id": "87391029-01c8-4cea-bf22-31b8566897fd",
		"time": {
			"$numberLong": "1672052090654"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199050310074",
		"killerId": "76561199078083999",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89489.46,
			"y": 1635.2798,
			"z": 85025.72
		},
		"victimPosition": {
			"x": 89873.555,
			"y": 1625.8622,
			"z": 84762.805
		},
		"killerVelocity": {
			"x": 262.752,
			"y": 40.40712,
			"z": -270.98294
		},
		"victimVelocity": {
			"x": 242.49406,
			"y": 9.607358,
			"z": -250.59373
		}
	}, {
		"_id": {
			"$oid": "63a98b80faabb276553f9ac0"
		},
		"id": "1f900e98-2960-4ab4-9ccb-ac4bc05689ef",
		"time": {
			"$numberLong": "1672055680094"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198364060019",
		"killerId": "76561199441934258",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 110209.54,
			"y": 1908.7878,
			"z": 77526.516
		},
		"victimPosition": {
			"x": 111438.7,
			"y": 1799.6538,
			"z": 72676.79
		},
		"killerVelocity": {
			"x": 264.3066,
			"y": 13.9210205,
			"z": -258.6959
		},
		"victimVelocity": {
			"x": -55.88069,
			"y": -22.553324,
			"z": -259.60544
		}
	}, {
		"_id": {
			"$oid": "63a9922cfaabb276553f9b53"
		},
		"id": "7cbbab20-1561-47a2-9982-b25af40e14f3",
		"time": {
			"$numberLong": "1672057388788"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198066006379",
		"killerId": "76561199232381554",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55810.977,
			"y": 686.41876,
			"z": 119140.6
		},
		"victimPosition": {
			"x": 56749.938,
			"y": 454.81293,
			"z": 118741.02
		},
		"killerVelocity": {
			"x": -336.85513,
			"y": 54.41557,
			"z": 104.57846
		},
		"victimVelocity": {
			"x": -125.34164,
			"y": -54.054462,
			"z": 52.85049
		}
	}, {
		"_id": {
			"$oid": "63a99267faabb276553f9b64"
		},
		"id": "7faaff53-3add-40e9-85b3-920fa222d772",
		"time": {
			"$numberLong": "1672057447847"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198016022937",
		"killerId": "76561199232381554",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52116.23,
			"y": 739.2498,
			"z": 118426.31
		},
		"victimPosition": {
			"x": 53755.504,
			"y": 580.5536,
			"z": 117190.9
		},
		"killerVelocity": {
			"x": 265.63806,
			"y": -29.945923,
			"z": -91.48468
		},
		"victimVelocity": {
			"x": 41.010612,
			"y": 7.8079243,
			"z": -150.78198
		}
	}, {
		"_id": {
			"$oid": "63a992a5faabb276553f9b6a"
		},
		"id": "387fc63f-493f-4b0c-ab2b-d05aaacaea7a",
		"time": {
			"$numberLong": "1672057509917"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199232381554",
		"killerId": "76561198066006379",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61563.387,
			"y": 2615.366,
			"z": 114278.99
		},
		"victimPosition": {
			"x": 63547.598,
			"y": 2731.9116,
			"z": 112446.84
		},
		"killerVelocity": {
			"x": 254.4867,
			"y": 55.892345,
			"z": -202.10114
		},
		"victimVelocity": {
			"x": -52.254627,
			"y": -134.99792,
			"z": 74.7868
		}
	}, {
		"_id": {
			"$oid": "63a9b821faabb276553f9c8b"
		},
		"id": "b37cf8d3-c135-4361-bd39-ded0736e205f",
		"time": {
			"$numberLong": "1672067105793"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199096628107",
		"killerId": "76561199150979859",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59729.297,
			"y": 1602.755,
			"z": 126444.97
		},
		"victimPosition": {
			"x": 59043.547,
			"y": 1426.4064,
			"z": 126205.05
		},
		"killerVelocity": {
			"x": -260.88004,
			"y": 21.003937,
			"z": 0.37988394
		},
		"victimVelocity": {
			"x": -233.17104,
			"y": -73.56299,
			"z": -140.30911
		}
	}, {
		"_id": {
			"$oid": "63a9b973faabb276553f9cb0"
		},
		"id": "9dedec02-f867-4274-b63e-e69e07fe1521",
		"time": {
			"$numberLong": "1672067443145"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199150979859",
		"killerId": "76561198319083049",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58924.71,
			"y": 1389.5778,
			"z": 119546.52
		},
		"victimPosition": {
			"x": 62611.734,
			"y": 2582.712,
			"z": 118227.7
		},
		"killerVelocity": {
			"x": 303.359,
			"y": -12.197986,
			"z": -23.925072
		},
		"victimVelocity": {
			"x": 139.55829,
			"y": -9.516675,
			"z": 127.284
		}
	}, {
		"_id": {
			"$oid": "63a9d130faabb276553f9e96"
		},
		"id": "7ec2a57f-5a2e-40e1-9b97-9c880b10d642",
		"time": {
			"$numberLong": "1672073520701"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199164231524",
		"killerId": "76561198141342602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50763.066,
			"y": 279.4885,
			"z": 118525.45
		},
		"victimPosition": {
			"x": 50691.754,
			"y": 279.4649,
			"z": 118351.08
		},
		"killerVelocity": {
			"x": -8.598975,
			"y": -0.00030789524,
			"z": -2.0761788
		},
		"victimVelocity": {
			"x": -0.0004647583,
			"y": -0.00015383214,
			"z": 0.0012040576
		}
	}, {
		"_id": {
			"$oid": "63a9d8e2faabb276553f9f3b"
		},
		"id": "4bf0735c-5bc9-4ed9-91db-86e4f9cdcd84",
		"time": {
			"$numberLong": "1672075490491"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199122114952",
		"killerId": "76561199096628107",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94700.6,
			"y": 1566.3009,
			"z": 94148.234
		},
		"victimPosition": {
			"x": 100477.23,
			"y": 928.77423,
			"z": 93197.36
		},
		"killerVelocity": {
			"x": -101.63533,
			"y": -7.788725,
			"z": 287.39334
		},
		"victimVelocity": {
			"x": -183.57574,
			"y": -177.92134,
			"z": 155.7384
		}
	}, {
		"_id": {
			"$oid": "63a9f4bcfaabb276553fa19e"
		},
		"id": "1b1ee51e-78a2-4dc8-964a-0dfdf55eb2e8",
		"time": {
			"$numberLong": "1672082620294"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198380933937",
		"killerId": "76561199280293773",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82772.93,
			"y": 1587.2953,
			"z": 99447.375
		},
		"victimPosition": {
			"x": 97371.7,
			"y": 1693.2472,
			"z": 102195.15
		},
		"killerVelocity": {
			"x": 296.49463,
			"y": -16.62993,
			"z": -197.5422
		},
		"victimVelocity": {
			"x": 248.1412,
			"y": -107.37016,
			"z": 133.0927
		}
	}, {
		"_id": {
			"$oid": "63a9f680faabb276553fa1d9"
		},
		"id": "89eae771-2e50-4f9c-9596-82f27e93dbf0",
		"time": {
			"$numberLong": "1672083072882"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198054130330",
		"killerId": "76561198299533614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83471.01,
			"y": 1322.0131,
			"z": 110556.82
		},
		"victimPosition": {
			"x": 85207.13,
			"y": 1492.6241,
			"z": 107192.805
		},
		"killerVelocity": {
			"x": 83.26508,
			"y": -4.3047,
			"z": -156.0677
		},
		"victimVelocity": {
			"x": -247.18024,
			"y": -32.009144,
			"z": -97.245445
		}
	}, {
		"_id": {
			"$oid": "63a9f735faabb276553fa1ec"
		},
		"id": "560a59e5-d763-45ed-9ada-96a9020ceb9e",
		"time": {
			"$numberLong": "1672083253238"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199196563059",
		"killerId": "76561198299533614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62895.05,
			"y": 1748.358,
			"z": 117018.625
		},
		"victimPosition": {
			"x": 71827.6,
			"y": 2204.3506,
			"z": 116313.625
		},
		"killerVelocity": {
			"x": 270.7897,
			"y": 30.276726,
			"z": -24.165554
		},
		"victimVelocity": {
			"x": 2.3391097,
			"y": -145.95819,
			"z": -3.7486734
		}
	}, {
		"_id": {
			"$oid": "63a9f7c9faabb276553fa204"
		},
		"id": "da05ff14-8075-4c49-93d8-e4ace1547e22",
		"time": {
			"$numberLong": "1672083401599"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199019539574",
		"killerId": "76561198299533614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56694.4,
			"y": 775.61414,
			"z": 119236.64
		},
		"victimPosition": {
			"x": 60290.074,
			"y": 1238.6594,
			"z": 119207.83
		},
		"killerVelocity": {
			"x": 214.35944,
			"y": 24.027534,
			"z": -1.3257109
		},
		"victimVelocity": {
			"x": 144.13869,
			"y": -0.35407382,
			"z": -41.34343
		}
	}, {
		"_id": {
			"$oid": "63a9f85afaabb276553fa213"
		},
		"id": "ff1e69ea-9504-4793-9b3c-cfadc99347ec",
		"time": {
			"$numberLong": "1672083546711"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199196563059",
		"killerId": "76561198299533614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71254.19,
			"y": 1823.2225,
			"z": 114207.25
		},
		"victimPosition": {
			"x": 59930.375,
			"y": 367.69568,
			"z": 119099.086
		},
		"killerVelocity": {
			"x": -236.41559,
			"y": 9.34817,
			"z": 78.949036
		},
		"victimVelocity": {
			"x": -63.06974,
			"y": -8.761179,
			"z": -158.41925
		}
	}, {
		"_id": {
			"$oid": "63a9f8e3faabb276553fa21d"
		},
		"id": "37c75ad5-7797-4241-8e89-96e68c26f863",
		"time": {
			"$numberLong": "1672083683642"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198353437379",
		"killerId": "76561199196563059",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67710.33,
			"y": 2294.1157,
			"z": 110866.98
		},
		"victimPosition": {
			"x": 77133.54,
			"y": 2215.4404,
			"z": 107018.8
		},
		"killerVelocity": {
			"x": 197.16646,
			"y": 57.438232,
			"z": -199.81342
		},
		"victimVelocity": {
			"x": -67.98272,
			"y": -242.37514,
			"z": 57.508343
		}
	}, {
		"_id": {
			"$oid": "63a9fb5bfaabb276553fa25a"
		},
		"id": "dcf2b447-ae8b-49df-a12b-a62fed2a5dee",
		"time": {
			"$numberLong": "1672084315712"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199208286816",
		"killerId": "76561199275822597",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100573.01,
			"y": 2136.9849,
			"z": 93022.055
		},
		"victimPosition": {
			"x": 101648.39,
			"y": 633.4875,
			"z": 91432.23
		},
		"killerVelocity": {
			"x": -43.485077,
			"y": 28.624651,
			"z": 48.91579
		},
		"victimVelocity": {
			"x": 13.466381,
			"y": -42.6896,
			"z": -25.446949
		}
	}, {
		"_id": {
			"$oid": "63a9fbdffaabb276553fa264"
		},
		"id": "16b75475-8dc9-4995-9628-aac28b5f85d4",
		"time": {
			"$numberLong": "1672084447954"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199229652947",
		"killerId": "76561199275822597",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75421,
			"y": 2544.593,
			"z": 84274.35
		},
		"victimPosition": {
			"x": 75410.94,
			"y": 2341.116,
			"z": 81534.97
		},
		"killerVelocity": {
			"x": 13.51278,
			"y": -3.7863865,
			"z": -384.33667
		},
		"victimVelocity": {
			"x": -100.42623,
			"y": 16.297806,
			"z": -365.20114
		}
	}, {
		"_id": {
			"$oid": "63a9fc8bfaabb276553fa26f"
		},
		"id": "a6b6b4ec-0b69-4ea8-adb3-34c5556d684b",
		"time": {
			"$numberLong": "1672084619337"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199196563059",
		"killerId": "76561199229652947",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64262.945,
			"y": 1193.2281,
			"z": 116194.62
		},
		"victimPosition": {
			"x": 66947.94,
			"y": 3038.7349,
			"z": 116504.43
		},
		"killerVelocity": {
			"x": 327.29623,
			"y": 40.44988,
			"z": -116.87907
		},
		"victimVelocity": {
			"x": 58.48067,
			"y": 130.43512,
			"z": 119.167015
		}
	}, {
		"_id": {
			"$oid": "63aa009ffaabb276553fa2ce"
		},
		"id": "8e8d5497-8607-479c-898d-f509020bc7e8",
		"time": {
			"$numberLong": "1672085663968"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198881716360",
		"killerId": "76561199208286816",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62266.547,
			"y": 2125.7075,
			"z": 110771.37
		},
		"victimPosition": {
			"x": 63332.113,
			"y": 3066.1875,
			"z": 109081.67
		},
		"killerVelocity": {
			"x": 120.26389,
			"y": 53.958256,
			"z": -134.06471
		},
		"victimVelocity": {
			"x": -145.61357,
			"y": -73.80196,
			"z": 34.172913
		}
	}, {
		"_id": {
			"$oid": "63aa037afaabb276553fa30e"
		},
		"id": "17a1950a-c3fe-4fdf-88f3-6277474e57c7",
		"time": {
			"$numberLong": "1672086394855"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199438082907",
		"killerId": "76561199208286816",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66532,
			"y": 551.86884,
			"z": 110490.82
		},
		"victimPosition": {
			"x": 96161.54,
			"y": 346.07513,
			"z": 93946.82
		},
		"killerVelocity": {
			"x": -31.102005,
			"y": -16.394361,
			"z": 159.35316
		},
		"victimVelocity": {
			"x": 287.3186,
			"y": 1.574014,
			"z": -18.021053
		}
	}, {
		"_id": {
			"$oid": "63aa03bdfaabb276553fa312"
		},
		"id": "e35bc928-5c67-43b6-8954-fb267d14497b",
		"time": {
			"$numberLong": "1672086461573"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199196563059",
		"killerId": "76561199208286816",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55151.684,
			"y": 531.96533,
			"z": 118359.57
		},
		"victimPosition": {
			"x": 53689.246,
			"y": 316.0255,
			"z": 119229.17
		},
		"killerVelocity": {
			"x": -136.76108,
			"y": -15.239251,
			"z": 182.18198
		},
		"victimVelocity": {
			"x": 114.29931,
			"y": -22.137487,
			"z": 13.384476
		}
	}, {
		"_id": {
			"$oid": "63aa03c7faabb276553fa314"
		},
		"id": "efa3847a-de73-4d59-99dc-8ccb68bee73c",
		"time": {
			"$numberLong": "1672086471900"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198881716360",
		"killerId": "76561199208286816",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56049.84,
			"y": 740.8156,
			"z": 119572.33
		},
		"victimPosition": {
			"x": 56403.59,
			"y": 308.4941,
			"z": 118765.17
		},
		"killerVelocity": {
			"x": 155.86406,
			"y": 28.864368,
			"z": -21.800163
		},
		"victimVelocity": {
			"x": 90.25704,
			"y": -52.296608,
			"z": -49.6274
		}
	}, {
		"_id": {
			"$oid": "63aa174cfaabb276553fa4e9"
		},
		"id": "9e3a885b-abb5-4760-bf44-c8b1cc6f9263",
		"time": {
			"$numberLong": "1672091468692"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199302551204",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53941.195,
			"y": 853.4201,
			"z": 118639.04
		},
		"victimPosition": {
			"x": 54132.465,
			"y": 901.57416,
			"z": 118556.63
		},
		"killerVelocity": {
			"x": 159.167,
			"y": 35.1884,
			"z": -58.59273
		},
		"victimVelocity": {
			"x": 102.87111,
			"y": 24.169073,
			"z": -52.52821
		}
	}, {
		"_id": {
			"$oid": "63aa1818faabb276553fa500"
		},
		"id": "06b0cbb8-b597-447a-9521-91a235c9096b",
		"time": {
			"$numberLong": "1672091672691"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199026280943",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73183.266,
			"y": 1466.0845,
			"z": 98108.47
		},
		"victimPosition": {
			"x": 76997.06,
			"y": 1168.945,
			"z": 91479.11
		},
		"killerVelocity": {
			"x": 198.6776,
			"y": -16.528482,
			"z": -312.3733
		},
		"victimVelocity": {
			"x": -19.36656,
			"y": -64.31705,
			"z": -107.90895
		}
	}, {
		"_id": {
			"$oid": "63aa184afaabb276553fa505"
		},
		"id": "d80a1ea5-caf3-41be-9761-18f051b1ca6f",
		"time": {
			"$numberLong": "1672091722146"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199302551204",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 78864.14,
			"y": 3866.3025,
			"z": 99611.086
		},
		"victimPosition": {
			"x": 78490.47,
			"y": 6145.734,
			"z": 103780.266
		},
		"killerVelocity": {
			"x": -25.051916,
			"y": 133.89807,
			"z": 245.5553
		},
		"victimVelocity": {
			"x": 204.61101,
			"y": -4.6343937,
			"z": -153.80197
		}
	}, {
		"_id": {
			"$oid": "63aa1862faabb276553fa508"
		},
		"id": "1795aa05-7d16-4f09-9781-bc6ea4569bd2",
		"time": {
			"$numberLong": "1672091746128"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199026280943",
		"killerId": "76561198157237603",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51320.477,
			"y": 604.0028,
			"z": 117346.85
		},
		"victimPosition": {
			"x": 52871.273,
			"y": 279.37027,
			"z": 119113.57
		},
		"killerVelocity": {
			"x": -62.69415,
			"y": -63.515335,
			"z": 186.00522
		},
		"victimVelocity": {
			"x": 13.725432,
			"y": 3.2011156,
			"z": 20.836592
		}
	}, {
		"_id": {
			"$oid": "63aa188dfaabb276553fa50f"
		},
		"id": "6399a10a-2cf5-4c4b-ad69-5c22bef3e1d5",
		"time": {
			"$numberLong": "1672091789235"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198288685708",
		"killerId": "76561198157237603",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56647.457,
			"y": 450.23102,
			"z": 114522.52
		},
		"victimPosition": {
			"x": 50971.504,
			"y": 279.46417,
			"z": 118664.52
		},
		"killerVelocity": {
			"x": 171.1642,
			"y": 66.55215,
			"z": -186.21605
		},
		"victimVelocity": {
			"x": -0.009351514,
			"y": 0.0012552217,
			"z": 0.034538846
		}
	}, {
		"_id": {
			"$oid": "63aa188ffaabb276553fa512"
		},
		"id": "56284084-058b-4080-b3b3-bbb34ca53317",
		"time": {
			"$numberLong": "1672091791320"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198157237603",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67848.16,
			"y": 3382.5054,
			"z": 110614.875
		},
		"victimPosition": {
			"x": 57035.465,
			"y": 668.87695,
			"z": 114257.305
		},
		"killerVelocity": {
			"x": -221.3527,
			"y": -198.96632,
			"z": 145.36293
		},
		"victimVelocity": {
			"x": 185.62259,
			"y": 141.07025,
			"z": -67.14926
		}
	}, {
		"_id": {
			"$oid": "63aa1891faabb276553fa514"
		},
		"id": "d6d6d1fd-837f-4373-983f-a38a28d51003",
		"time": {
			"$numberLong": "1672091793065"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198310103184",
		"killerId": "76561198157237603",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57358.613,
			"y": 893.0925,
			"z": 114146.43
		},
		"victimPosition": {
			"x": 67472.94,
			"y": 2983.3767,
			"z": 110858.73
		},
		"killerVelocity": {
			"x": 178.90944,
			"y": 117.35012,
			"z": -61.387245
		},
		"victimVelocity": {
			"x": -203.15845,
			"y": -246.16872,
			"z": 130.72295
		}
	}, {
		"_id": {
			"$oid": "63aa19b4faabb276553fa52b"
		},
		"id": "c9494618-9107-47db-82d1-c54a03d758db",
		"time": {
			"$numberLong": "1672092084356"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561197996771534",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48825.81,
			"y": 1347.8856,
			"z": 120022.38
		},
		"victimPosition": {
			"x": 45978.68,
			"y": 1973.1149,
			"z": 121348.38
		},
		"killerVelocity": {
			"x": -168.77843,
			"y": 50.776222,
			"z": 51.303673
		},
		"victimVelocity": {
			"x": -174.83897,
			"y": -75.02545,
			"z": 85.77529
		}
	}, {
		"_id": {
			"$oid": "63aa19f2faabb276553fa531"
		},
		"id": "85b3cfe3-6ac9-4f73-810b-9ee50f9e2bfa",
		"time": {
			"$numberLong": "1672092146222"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198147471406",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49039.43,
			"y": 990.00934,
			"z": 119489.75
		},
		"victimPosition": {
			"x": 50278.28,
			"y": 896.6207,
			"z": 118274.1
		},
		"killerVelocity": {
			"x": 178.39545,
			"y": 8.910049,
			"z": -75.27084
		},
		"victimVelocity": {
			"x": -144.64088,
			"y": 56.555767,
			"z": -18.898056
		}
	}, {
		"_id": {
			"$oid": "63aa19fafaabb276553fa535"
		},
		"id": "f9eea71d-714e-4510-9587-996c034b307f",
		"time": {
			"$numberLong": "1672092154605"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198310103184",
		"killerId": "76561198144441716",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48899.992,
			"y": 1102.8333,
			"z": 119329.46
		},
		"victimPosition": {
			"x": 49693.56,
			"y": 1251.7003,
			"z": 118285.47
		},
		"killerVelocity": {
			"x": 143.9792,
			"y": 4.0785356,
			"z": -102.29711
		},
		"victimVelocity": {
			"x": -78.308655,
			"y": 20.397146,
			"z": -154.58043
		}
	}, {
		"_id": {
			"$oid": "63aa1a5bfaabb276553fa53d"
		},
		"id": "8e8be8e1-305e-4a65-a1e9-f6120f0a8e93",
		"time": {
			"$numberLong": "1672092251939"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198310103184",
		"killerId": "76561198147471406",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55248.664,
			"y": 1665.7417,
			"z": 120099.76
		},
		"victimPosition": {
			"x": 57603.996,
			"y": 1304.7242,
			"z": 118992.234
		},
		"killerVelocity": {
			"x": 162.26883,
			"y": 195.67076,
			"z": 94.09403
		},
		"victimVelocity": {
			"x": 114.5252,
			"y": -7.2320666,
			"z": -20.668333
		}
	}, {
		"_id": {
			"$oid": "63aa2111faabb276553fa5f3"
		},
		"id": "8d063a31-d3bf-4fda-aff4-58195df5570d",
		"time": {
			"$numberLong": "1672093969760"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197996771534",
		"killerId": "76561198147471406",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84611.42,
			"y": 8175.12,
			"z": 89590.234
		},
		"victimPosition": {
			"x": 85745.35,
			"y": 8306.743,
			"z": 88593.43
		},
		"killerVelocity": {
			"x": 255.22827,
			"y": 39.953934,
			"z": -233.80098
		},
		"victimVelocity": {
			"x": 213.0646,
			"y": 12.175691,
			"z": -225.13354
		}
	}, {
		"_id": {
			"$oid": "63aa217efaabb276553fa5fe"
		},
		"id": "0a3ce1c6-2141-4a68-a31a-0f0fc5f5b9ae",
		"time": {
			"$numberLong": "1672094078507"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198147471406",
		"killerId": "76561197972678754",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80380.7,
			"y": 5907.6963,
			"z": 89306.336
		},
		"victimPosition": {
			"x": 81595.63,
			"y": 5946.0093,
			"z": 87700.22
		},
		"killerVelocity": {
			"x": 216.73466,
			"y": 31.812206,
			"z": -312.63666
		},
		"victimVelocity": {
			"x": -173.46707,
			"y": -88.63758,
			"z": 307.63452
		}
	}, {
		"_id": {
			"$oid": "63aa21a8faabb276553fa602"
		},
		"id": "2054798d-d5a3-40ab-bc74-fc6e8e4b4be5",
		"time": {
			"$numberLong": "1672094120665"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197972678754",
		"killerId": "76561198147471406",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79729.65,
			"y": 824.1945,
			"z": 91582.625
		},
		"victimPosition": {
			"x": 80896.34,
			"y": 4461.946,
			"z": 84566.39
		},
		"killerVelocity": {
			"x": 2.4737828,
			"y": 1.32411,
			"z": -0.0046002483
		},
		"victimVelocity": {
			"x": -57.199043,
			"y": -98.40469,
			"z": 58.252262
		}
	}, {
		"_id": {
			"$oid": "63aa2d9cfaabb276553fa737"
		},
		"id": "749979d9-14d5-49cc-bc75-0a6e665a3772",
		"time": {
			"$numberLong": "1672097180349"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197996771534",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56878.48,
			"y": 1135.0306,
			"z": 113040.266
		},
		"victimPosition": {
			"x": 66146.88,
			"y": 5404.1626,
			"z": 109569.26
		},
		"killerVelocity": {
			"x": 259.13422,
			"y": -26.240252,
			"z": -145.1979
		},
		"victimVelocity": {
			"x": 169.75015,
			"y": 164.1136,
			"z": -82.87682
		}
	}, {
		"_id": {
			"$oid": "63aa2da9faabb276553fa73a"
		},
		"id": "0ac10a34-e9ea-40dc-a854-5dbf1bdb640b",
		"time": {
			"$numberLong": "1672097193568"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086600808",
		"killerId": "76561198310103184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60571.875,
			"y": 1288.7463,
			"z": 111046.984
		},
		"victimPosition": {
			"x": 64539.637,
			"y": 2219.2837,
			"z": 111396.65
		},
		"killerVelocity": {
			"x": 296.32803,
			"y": 27.592566,
			"z": -150.7826
		},
		"victimVelocity": {
			"x": -228.11679,
			"y": -142.83333,
			"z": -110.472626
		}
	}, {
		"_id": {
			"$oid": "63aa2dadfaabb276553fa73d"
		},
		"id": "25e6c404-d0fb-4fb3-b319-9e68bdc11d1c",
		"time": {
			"$numberLong": "1672097197389"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198310103184",
		"killerId": "76561198086600808",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63712.76,
			"y": 1627.1721,
			"z": 111009.87
		},
		"victimPosition": {
			"x": 61582.27,
			"y": 1680.3225,
			"z": 110525.32
		},
		"killerVelocity": {
			"x": -207.44179,
			"y": -168.23245,
			"z": -99.13678
		},
		"victimVelocity": {
			"x": 190.25732,
			"y": 192.29016,
			"z": -133.97946
		}
	}, {
		"_id": {
			"$oid": "63aa3b89faabb276553fa869"
		},
		"id": "b0424598-780a-4420-9ab5-1e6ccdfbb7fa",
		"time": {
			"$numberLong": "1672100745522"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197965142204",
		"killerId": "76561198185252034",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62069.09,
			"y": 856.09155,
			"z": 111741.03
		},
		"victimPosition": {
			"x": 63233.848,
			"y": 257.0392,
			"z": 110601.336
		},
		"killerVelocity": {
			"x": -207.70404,
			"y": 82.37608,
			"z": -60.224804
		},
		"victimVelocity": {
			"x": 132.05185,
			"y": -57.22597,
			"z": -168.5011
		}
	}, {
		"_id": {
			"$oid": "63aa3cb6faabb276553fa88c"
		},
		"id": "0c2cd1b5-7559-4986-a48b-04090db020b8",
		"time": {
			"$numberLong": "1672101046172"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199229554382",
		"killerId": "76561199058143396",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56751.812,
			"y": 545.13855,
			"z": 119155.64
		},
		"victimPosition": {
			"x": 59599.875,
			"y": 1240.0477,
			"z": 117463.76
		},
		"killerVelocity": {
			"x": 143.99544,
			"y": 18.598946,
			"z": -68.77675
		},
		"victimVelocity": {
			"x": -119.18437,
			"y": 84.98283,
			"z": -177.17271
		}
	}, {
		"_id": {
			"$oid": "63aa3e2afaabb276553fa8ae"
		},
		"id": "0cc33126-1f20-47e2-b000-8f5b7353e8dd",
		"time": {
			"$numberLong": "1672101418768"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197965142204",
		"killerId": "76561199058143396",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79026.11,
			"y": 588.11914,
			"z": 94955.82
		},
		"victimPosition": {
			"x": 78521.96,
			"y": 750.26514,
			"z": 96187.38
		},
		"killerVelocity": {
			"x": 266.60544,
			"y": -63.459988,
			"z": 107.77534
		},
		"victimVelocity": {
			"x": -219.9214,
			"y": -8.299823,
			"z": 119.92351
		}
	}, {
		"_id": {
			"$oid": "63aa3f42faabb276553fa8c3"
		},
		"id": "b35ce327-b6b0-436f-8607-6cfe52bc53a6",
		"time": {
			"$numberLong": "1672101698842"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198185252034",
		"killerId": "76561197965142204",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83834,
			"y": 1426.967,
			"z": 89365.83
		},
		"victimPosition": {
			"x": 84196.195,
			"y": 1534.2328,
			"z": 88890.47
		},
		"killerVelocity": {
			"x": 253.61015,
			"y": -16.590631,
			"z": -120.70831
		},
		"victimVelocity": {
			"x": 172.7119,
			"y": 3.9777,
			"z": -70.08974
		}
	}, {
		"_id": {
			"$oid": "63aa50cefaabb276553faa9d"
		},
		"id": "b4fb7ce3-220d-48c8-a819-672d13f84f3a",
		"time": {
			"$numberLong": "1672106190211"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199085880358",
		"killerId": "76561199085165741",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50014.67,
			"y": 2298.933,
			"z": 106905.39
		},
		"victimPosition": {
			"x": 49597.824,
			"y": 1413.2777,
			"z": 99978.125
		},
		"killerVelocity": {
			"x": -39.8429,
			"y": -28.580557,
			"z": -337.84427
		},
		"victimVelocity": {
			"x": 34.075108,
			"y": -116.69957,
			"z": 15.750339
		}
	}, {
		"_id": {
			"$oid": "63aa6314faabb276553fac6c"
		},
		"id": "f4c388b5-9d20-4b5d-a59e-fad6c8ec7330",
		"time": {
			"$numberLong": "1672110868647"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198963195327",
		"killerId": "76561198453350557",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60603.79,
			"y": 1239.5426,
			"z": 109915.83
		},
		"victimPosition": {
			"x": 60784.27,
			"y": 1446.574,
			"z": 107137.39
		},
		"killerVelocity": {
			"x": 241.86975,
			"y": 4.131075,
			"z": -217.09882
		},
		"victimVelocity": {
			"x": -240.09631,
			"y": 3.3105233,
			"z": -92.26627
		}
	}, {
		"_id": {
			"$oid": "63aa72cbfaabb276553fae5d"
		},
		"id": "3ca69c33-384f-4dc7-b05a-8454425926ec",
		"time": {
			"$numberLong": "1672114891070"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198963195327",
		"killerId": "76561199259230137",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 118309.49,
			"y": 4400.535,
			"z": 49461.945
		},
		"victimPosition": {
			"x": 122571.195,
			"y": 4745.37,
			"z": 48962.867
		},
		"killerVelocity": {
			"x": 318.78693,
			"y": 16.734526,
			"z": -49.62941
		},
		"victimVelocity": {
			"x": -254.90717,
			"y": 78.01205,
			"z": 255.32416
		}
	}, {
		"_id": {
			"$oid": "63aa73fffaabb276553fae7b"
		},
		"id": "bfcc449f-f186-4f8c-a8a4-67305f951c3a",
		"time": {
			"$numberLong": "1672115199326"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561199259230137",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 86914.64,
			"y": 4149.683,
			"z": 88277.05
		},
		"victimPosition": {
			"x": 91068.34,
			"y": 1361.6204,
			"z": 76485.49
		},
		"killerVelocity": {
			"x": 257.43387,
			"y": -23.13599,
			"z": -309.0498
		},
		"victimVelocity": {
			"x": 138.991,
			"y": 28.378342,
			"z": 147.65585
		}
	}, {
		"_id": {
			"$oid": "63aa7b59faabb276553faf2e"
		},
		"id": "6a3ed957-44d0-4f82-b472-e43398466743",
		"time": {
			"$numberLong": "1672117081410"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199178085725",
		"killerId": "76561198300159777",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73121.625,
			"y": 1877.9465,
			"z": 82574.05
		},
		"victimPosition": {
			"x": 83927.64,
			"y": 1785.3817,
			"z": 83864.43
		},
		"killerVelocity": {
			"x": 115.33984,
			"y": -37.64798,
			"z": 267.4081
		},
		"victimVelocity": {
			"x": 64.942696,
			"y": -50.636242,
			"z": 133.49036
		}
	}, {
		"_id": {
			"$oid": "63aa7d9ffaabb276553faf61"
		},
		"id": "40825431-c5d1-426d-951d-e1488c6b234d",
		"time": {
			"$numberLong": "1672117663482"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199066698672",
		"killerId": "76561198066520714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56624.35,
			"y": 2284.8745,
			"z": 113118.14
		},
		"victimPosition": {
			"x": 57018.934,
			"y": 2205.0298,
			"z": 112973.45
		},
		"killerVelocity": {
			"x": 202.31854,
			"y": -12.4167595,
			"z": -115.190834
		},
		"victimVelocity": {
			"x": -11.028392,
			"y": -84.0584,
			"z": 78.839096
		}
	}, {
		"_id": {
			"$oid": "63aa7deafaabb276553faf6b"
		},
		"id": "0ca596d6-8f7e-469b-9811-ca0f865de0c7",
		"time": {
			"$numberLong": "1672117738285"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198039266576",
		"killerId": "76561198066520714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53451.273,
			"y": 392.3462,
			"z": 117583.516
		},
		"victimPosition": {
			"x": 52566.633,
			"y": 364.3907,
			"z": 118830.805
		},
		"killerVelocity": {
			"x": -189.42542,
			"y": -16.534725,
			"z": 261.31644
		},
		"victimVelocity": {
			"x": 7.747623,
			"y": 10.454231,
			"z": -13.882208
		}
	}, {
		"_id": {
			"$oid": "63aa7e2dfaabb276553faf71"
		},
		"id": "0024da08-f13b-40c7-a76d-4fa450897bd9",
		"time": {
			"$numberLong": "1672117805366"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198039266576",
		"killerId": "76561198066520714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53457.258,
			"y": 413.2036,
			"z": 118567.1
		},
		"victimPosition": {
			"x": 52571.484,
			"y": 329.73077,
			"z": 118788.91
		},
		"killerVelocity": {
			"x": -237.32202,
			"y": -22.953377,
			"z": 54.40418
		},
		"victimVelocity": {
			"x": 2.44649,
			"y": 4.525537,
			"z": -5.467956
		}
	}, {
		"_id": {
			"$oid": "63aa7e3dfaabb276553faf74"
		},
		"id": "8ce70db8-cff9-4719-8561-fea76af89a20",
		"time": {
			"$numberLong": "1672117821794"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198080851997",
		"killerId": "76561198066520714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53374.188,
			"y": 945.8015,
			"z": 117522.29
		},
		"victimPosition": {
			"x": 54879.586,
			"y": 946.4946,
			"z": 117045.55
		},
		"killerVelocity": {
			"x": 197.94359,
			"y": -18.097012,
			"z": -65.311
		},
		"victimVelocity": {
			"x": 171.8922,
			"y": 6.259839,
			"z": -19.177425
		}
	}, {
		"_id": {
			"$oid": "63aa7e74faabb276553faf79"
		},
		"id": "d86792d2-41af-43a3-b373-3a61b9b37cd2",
		"time": {
			"$numberLong": "1672117876996"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198080851997",
		"killerId": "76561198066520714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51115.12,
			"y": 318.90817,
			"z": 118570.35
		},
		"victimPosition": {
			"x": 50855.703,
			"y": 279.49115,
			"z": 118552.15
		},
		"killerVelocity": {
			"x": -260.18985,
			"y": -58.73607,
			"z": -17.356335
		},
		"victimVelocity": {
			"x": 25.91864,
			"y": 0.00045419484,
			"z": 5.1415334
		}
	}, {
		"_id": {
			"$oid": "63aa7e7ffaabb276553faf7b"
		},
		"id": "d13b68d4-8ae8-4bed-9551-7324792aa48f",
		"time": {
			"$numberLong": "1672117887734"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198066520714",
		"killerId": "76561198179056431",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51265.25,
			"y": 723.18256,
			"z": 118630.18
		},
		"victimPosition": {
			"x": 49756.082,
			"y": 685.6304,
			"z": 117757.26
		},
		"killerVelocity": {
			"x": -184.79184,
			"y": 49.174957,
			"z": -12.173931
		},
		"victimVelocity": {
			"x": -53.529663,
			"y": -6.8566093,
			"z": -58.79975
		}
	}, {
		"_id": {
			"$oid": "63aa8cd9faabb276553fb0a8"
		},
		"id": "a0c85d49-f849-40ea-a3e4-03ea4de2e3c9",
		"time": {
			"$numberLong": "1672121561230"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199073770053",
		"killerId": "76561199081580274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52326.508,
			"y": 279.42,
			"z": 118857.15
		},
		"victimPosition": {
			"x": 50312.113,
			"y": 477.87683,
			"z": 118135.79
		},
		"killerVelocity": {
			"x": 0.56177443,
			"y": 0.046349548,
			"z": -4.424357
		},
		"victimVelocity": {
			"x": -36.822254,
			"y": -4.089017,
			"z": -80.90138
		}
	}, {
		"_id": {
			"$oid": "63aa9498faabb276553fb157"
		},
		"id": "0b5f5f14-bbe2-4995-bd4b-529b14f27299",
		"time": {
			"$numberLong": "1672123544210"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199130777388",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61778.68,
			"y": 1008.5183,
			"z": 110061.46
		},
		"victimPosition": {
			"x": 69123.086,
			"y": 1411.6667,
			"z": 103967.97
		},
		"killerVelocity": {
			"x": 272.966,
			"y": 24.986223,
			"z": -232.73904
		},
		"victimVelocity": {
			"x": -45.47148,
			"y": -8.906715,
			"z": -142.00516
		}
	}, {
		"_id": {
			"$oid": "63aa962afaabb276553fb17b"
		},
		"id": "bca46353-9b9d-4fcd-ab1a-276fab15f16c",
		"time": {
			"$numberLong": "1672123946913"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198868725141",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50801.707,
			"y": 327.8779,
			"z": 118370.82
		},
		"victimPosition": {
			"x": 51388.445,
			"y": 279.4828,
			"z": 118674.49
		},
		"killerVelocity": {
			"x": 32.453518,
			"y": 1.2949665,
			"z": 14.028726
		},
		"victimVelocity": {
			"x": -3.361301,
			"y": 0.0020582974,
			"z": -3.1395764
		}
	}, {
		"_id": {
			"$oid": "63aa96cffaabb276553fb18b"
		},
		"id": "0c63e36e-433d-4654-9010-c16ce1e61edc",
		"time": {
			"$numberLong": "1672124111454"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198039266576",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54021.69,
			"y": 834.1978,
			"z": 117387.1
		},
		"victimPosition": {
			"x": 53294.176,
			"y": 380.44098,
			"z": 117554.98
		},
		"killerVelocity": {
			"x": -46.58687,
			"y": -18.816193,
			"z": 9.688427
		},
		"victimVelocity": {
			"x": 40.062035,
			"y": -11.855558,
			"z": -83.67014
		}
	}, {
		"_id": {
			"$oid": "63aa973bfaabb276553fb18e"
		},
		"id": "d8060d23-c4bd-4e3f-a88b-0278728f4ca2",
		"time": {
			"$numberLong": "1672124219981"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198868725141",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52319.766,
			"y": 430.367,
			"z": 118549.54
		},
		"victimPosition": {
			"x": 51558.543,
			"y": 279.49118,
			"z": 118740.46
		},
		"killerVelocity": {
			"x": -34.125328,
			"y": -4.444695,
			"z": 17.241238
		},
		"victimVelocity": {
			"x": 0.039638583,
			"y": 0.00009506941,
			"z": -0.19041929
		}
	}, {
		"_id": {
			"$oid": "63aa9765faabb276553fb192"
		},
		"id": "ad5f65db-b791-41a2-a8d8-bdd511cc03e0",
		"time": {
			"$numberLong": "1672124261465"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198392426247",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51134.23,
			"y": 351.46698,
			"z": 118309.74
		},
		"victimPosition": {
			"x": 50920.215,
			"y": 279.48215,
			"z": 118565.5
		},
		"killerVelocity": {
			"x": 22.653688,
			"y": 0.61515975,
			"z": 33.852764
		},
		"victimVelocity": {
			"x": -0.00005123813,
			"y": -0.00025123358,
			"z": 0.00051240216
		}
	}, {
		"_id": {
			"$oid": "63aa9773faabb276553fb194"
		},
		"id": "410f808f-b2e5-4396-ba7c-28823860c384",
		"time": {
			"$numberLong": "1672124275808"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199465790728",
		"killerId": "76561198039266576",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51335.355,
			"y": 359.3989,
			"z": 118506.01
		},
		"victimPosition": {
			"x": 51563.79,
			"y": 348.9381,
			"z": 118286.39
		},
		"killerVelocity": {
			"x": 1.1637288,
			"y": 5.7408276,
			"z": -7.6315665
		},
		"victimVelocity": {
			"x": 25.77791,
			"y": -5.2147284,
			"z": 20.294607
		}
	}, {
		"_id": {
			"$oid": "63aa97a1faabb276553fb198"
		},
		"id": "0a80219d-c057-4077-9867-3a8aa0453448",
		"time": {
			"$numberLong": "1672124321877"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198039266576",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52713.08,
			"y": 286.58658,
			"z": 119100.81
		},
		"victimPosition": {
			"x": 52788.055,
			"y": 279.74857,
			"z": 118868.086
		},
		"killerVelocity": {
			"x": 0.9889914,
			"y": -0.6007385,
			"z": 0.20076929
		},
		"victimVelocity": {
			"x": 78.89439,
			"y": -4.135029,
			"z": 11.105059
		}
	}, {
		"_id": {
			"$oid": "63aacc1dfaabb276553fb4cc"
		},
		"id": "35aee9c4-a7c0-4f03-8fd4-285ce0ec4cca",
		"time": {
			"$numberLong": "1672137757229"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198055265330",
		"killerId": "76561198200732757",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67040.836,
			"y": 1649.055,
			"z": 105546.78
		},
		"victimPosition": {
			"x": 68442.55,
			"y": 1126.3618,
			"z": 101725.69
		},
		"killerVelocity": {
			"x": 47.114178,
			"y": 56.552,
			"z": -306.44522
		},
		"victimVelocity": {
			"x": -105.31466,
			"y": 7.048931,
			"z": -299.53583
		}
	}, {
		"_id": {
			"$oid": "63aadf41faabb276553fb5ad"
		},
		"id": "e4b035fc-fdcc-4a2a-b749-cca321e13b56",
		"time": {
			"$numberLong": "1672142657168"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199098873392",
		"killerId": "76561197970364229",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51310.96,
			"y": 473.7724,
			"z": 118176.89
		},
		"victimPosition": {
			"x": 49814.457,
			"y": 556.26447,
			"z": 118204.78
		},
		"killerVelocity": {
			"x": -222.78711,
			"y": -10.721892,
			"z": -15.472691
		},
		"victimVelocity": {
			"x": 7.9102798,
			"y": -11.881019,
			"z": -83.9523
		}
	}, {
		"_id": {
			"$oid": "63aadfecfaabb276553fb5b7"
		},
		"id": "97210b30-2016-4e89-a479-6b00402bffef",
		"time": {
			"$numberLong": "1672142828768"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199230530085",
		"killerId": "76561199098873392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53437.973,
			"y": 553.8551,
			"z": 120684.914
		},
		"victimPosition": {
			"x": 53753.066,
			"y": 292.70737,
			"z": 120725.42
		},
		"killerVelocity": {
			"x": -180.3827,
			"y": -6.317335,
			"z": 51.85541
		},
		"victimVelocity": {
			"x": -118.76111,
			"y": -86.1538,
			"z": 11.351526
		}
	}, {
		"_id": {
			"$oid": "63aae116faabb276553fb5c0"
		},
		"id": "ab7fd070-7442-435f-b0a1-9dffc1b1c835",
		"time": {
			"$numberLong": "1672143126723"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199280293773",
		"killerId": "76561197970364229",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51494.75,
			"y": 279.48898,
			"z": 118704.81
		},
		"victimPosition": {
			"x": 51487.03,
			"y": 279.38538,
			"z": 118707.414
		},
		"killerVelocity": {
			"x": 68.10889,
			"y": -0.00035098195,
			"z": 17.903685
		},
		"victimVelocity": {
			"x": -5.799381,
			"y": -0.016665332,
			"z": 0.2940612
		}
	}, {
		"_id": {
			"$oid": "63aae123faabb276553fb5c4"
		},
		"id": "40987336-a8e7-4a63-ae3f-6a04f0bb68f6",
		"time": {
			"$numberLong": "1672143139500"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 0,
		"victimId": "76561198368163632",
		"killerId": "76561197970364229",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 50791.223,
			"y": 279.44507,
			"z": 117797.54
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 21.982723,
			"y": 0.47834393,
			"z": -22.511915
		}
	}, {
		"_id": {
			"$oid": "63ab050efaabb276553fb73d"
		},
		"id": "7175c981-14ec-4b60-ab55-c984e31eefc8",
		"time": {
			"$numberLong": "1672152334318"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198126285727",
		"killerId": "76561199222102803",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72748.19,
			"y": 1239.0684,
			"z": 104817.05
		},
		"victimPosition": {
			"x": 81636.71,
			"y": 326.20953,
			"z": 96891.34
		},
		"killerVelocity": {
			"x": 220.87259,
			"y": 14.331779,
			"z": -216.13695
		},
		"victimVelocity": {
			"x": -157.46518,
			"y": -11.4317,
			"z": 182.38963
		}
	}, {
		"_id": {
			"$oid": "63ab06f4faabb276553fb765"
		},
		"id": "b2326fc8-0e77-4475-92a5-2d1df3f2ba1e",
		"time": {
			"$numberLong": "1672152820258"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198126285727",
		"killerId": "76561198861753380",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 113965.38,
			"y": 5578.4697,
			"z": 87326.86
		},
		"victimPosition": {
			"x": 113862.98,
			"y": 2003.1006,
			"z": 96423.91
		},
		"killerVelocity": {
			"x": 259.4278,
			"y": -59.966343,
			"z": -131.24048
		},
		"victimVelocity": {
			"x": -321.13336,
			"y": -107.90258,
			"z": -117.197914
		}
	}, {
		"_id": {
			"$oid": "63ab12b2faabb276553fb871"
		},
		"id": "7abc7692-c876-4bdc-a7f6-1892a0c55e18",
		"time": {
			"$numberLong": "1672155826958"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198318090168",
		"killerId": "76561199453846057",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54712.26,
			"y": 1489.4084,
			"z": 108960.42
		},
		"victimPosition": {
			"x": 54344.086,
			"y": 1257.8477,
			"z": 105335.914
		},
		"killerVelocity": {
			"x": 45.148964,
			"y": -41.779747,
			"z": 296.97162
		},
		"victimVelocity": {
			"x": 72.19874,
			"y": 5.8506517,
			"z": -27.943567
		}
	}, {
		"_id": {
			"$oid": "63ab14b4faabb276553fb8a5"
		},
		"id": "c62103f6-9158-4fe3-a398-f2905555a5e0",
		"time": {
			"$numberLong": "1672156340385"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198318090168",
		"killerId": "76561199453846057",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58624.67,
			"y": 1321.3018,
			"z": 107045.766
		},
		"victimPosition": {
			"x": 57835.14,
			"y": 1373.039,
			"z": 108213.86
		},
		"killerVelocity": {
			"x": -118.614136,
			"y": 0.6925872,
			"z": 151.40178
		},
		"victimVelocity": {
			"x": -19.527893,
			"y": -15.893292,
			"z": 101.86296
		}
	}, {
		"_id": {
			"$oid": "63ab1553faabb276553fb8b7"
		},
		"id": "d7f77fce-e645-4061-84b1-d11a3a9194b8",
		"time": {
			"$numberLong": "1672156499969"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198318090168",
		"killerId": "76561199453846057",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59539.48,
			"y": 599.55066,
			"z": 113628.016
		},
		"victimPosition": {
			"x": 61869.215,
			"y": 891.4763,
			"z": 113013.02
		},
		"killerVelocity": {
			"x": 150.44612,
			"y": -18.283073,
			"z": -120.659386
		},
		"victimVelocity": {
			"x": 185.48247,
			"y": -24.127693,
			"z": 119.50383
		}
	}, {
		"_id": {
			"$oid": "63ab258afaabb276553fba35"
		},
		"id": "94e672e8-e291-421f-b7bb-1e1dc18757e5",
		"time": {
			"$numberLong": "1672160650599"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199385088495",
		"killerId": "76561199232381554",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52489.625,
			"y": 278.68594,
			"z": 119068.445
		},
		"victimPosition": {
			"x": 52497,
			"y": 279.47824,
			"z": 119057.53
		},
		"killerVelocity": {
			"x": -0.0034446882,
			"y": 0.029773079,
			"z": 0.013272227
		},
		"victimVelocity": {
			"x": 0.0008773961,
			"y": 0.0001462698,
			"z": 0.00048274122
		}
	}, {
		"_id": {
			"$oid": "63ab25e5faabb276553fba3a"
		},
		"id": "82847216-5f7b-4940-847c-605e51be17a3",
		"time": {
			"$numberLong": "1672160741614"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197988807107",
		"killerId": "76561199385088495",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52136.32,
			"y": 279.34,
			"z": 118755.34
		},
		"victimPosition": {
			"x": 52196.21,
			"y": 279.47552,
			"z": 118758.73
		},
		"killerVelocity": {
			"x": 27.984926,
			"y": 0.12660098,
			"z": 1.4627382
		},
		"victimVelocity": {
			"x": 0.0038740197,
			"y": -0.00019351393,
			"z": 0.0013607005
		}
	}, {
		"_id": {
			"$oid": "63ab2671faabb276553fba4f"
		},
		"id": "1537a1bd-41f2-4271-bab2-58578ddeda91",
		"time": {
			"$numberLong": "1672160881179"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197988807107",
		"killerId": "76561199385088495",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53091.93,
			"y": 429.88776,
			"z": 118909.055
		},
		"victimPosition": {
			"x": 49418.086,
			"y": 335.9839,
			"z": 117502.78
		},
		"killerVelocity": {
			"x": 141.2994,
			"y": 29.095766,
			"z": 43.48988
		},
		"victimVelocity": {
			"x": -33.72347,
			"y": 7.6299677,
			"z": -53.8429
		}
	}, {
		"_id": {
			"$oid": "63ab2b03faabb276553fbad0"
		},
		"id": "975c6790-1c68-4019-b48b-d1cae2fc4994",
		"time": {
			"$numberLong": "1672162051371"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199148629604",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72581.52,
			"y": 3198.5564,
			"z": 122148.98
		},
		"victimPosition": {
			"x": 82317.52,
			"y": 1189.8494,
			"z": 124828.69
		},
		"killerVelocity": {
			"x": 284.5677,
			"y": -46.494034,
			"z": 154.17645
		},
		"victimVelocity": {
			"x": -98.74286,
			"y": -15.7478695,
			"z": -200.90346
		}
	}, {
		"_id": {
			"$oid": "63ab2b27faabb276553fbad5"
		},
		"id": "71f140da-2f88-448c-864f-887930202b55",
		"time": {
			"$numberLong": "1672162087362"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198344848128",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84607.91,
			"y": 2581.891,
			"z": 125535.69
		},
		"victimPosition": {
			"x": 88904.164,
			"y": 2555.8633,
			"z": 126875.4
		},
		"killerVelocity": {
			"x": 346.77542,
			"y": -8.74378,
			"z": 8.987494
		},
		"victimVelocity": {
			"x": 30.998976,
			"y": -34.87315,
			"z": -51.901394
		}
	}, {
		"_id": {
			"$oid": "63ab2bf6faabb276553fbaec"
		},
		"id": "fbb2ecab-f353-45cf-9451-72c6f511bc7b",
		"time": {
			"$numberLong": "1672162294135"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199262427498",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59945.215,
			"y": 1570.8047,
			"z": 115174.95
		},
		"victimPosition": {
			"x": 63141.215,
			"y": 1251.1267,
			"z": 107785.73
		},
		"killerVelocity": {
			"x": 97.66028,
			"y": -17.726534,
			"z": -275.8781
		},
		"victimVelocity": {
			"x": -264.35596,
			"y": -0.1287495,
			"z": 7.4757257
		}
	}, {
		"_id": {
			"$oid": "63ab2ca0faabb276553fbaf6"
		},
		"id": "ea08c483-2595-46d5-a36a-5d22f003c360",
		"time": {
			"$numberLong": "1672162464149"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199148629604",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 86417.58,
			"y": 1233.5835,
			"z": 99740.08
		},
		"victimPosition": {
			"x": 94362.49,
			"y": 635.3605,
			"z": 94360.57
		},
		"killerVelocity": {
			"x": 241.15314,
			"y": -3.550122,
			"z": -243.35553
		},
		"victimVelocity": {
			"x": -253.28806,
			"y": -5.1799836,
			"z": 64.59209
		}
	}, {
		"_id": {
			"$oid": "63ab31a5faabb276553fbb6d"
		},
		"id": "6a925318-39ea-4ba2-8138-e7653d3ae55f",
		"time": {
			"$numberLong": "1672163749692"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198182079570",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54116.652,
			"y": 1496.6228,
			"z": 119468.62
		},
		"victimPosition": {
			"x": 58200.754,
			"y": 530.1495,
			"z": 117722.51
		},
		"killerVelocity": {
			"x": 301.00577,
			"y": -86.24653,
			"z": -105.597305
		},
		"victimVelocity": {
			"x": 123.11425,
			"y": -50.16357,
			"z": 231.01283
		}
	}, {
		"_id": {
			"$oid": "63ab31c0faabb276553fbb70"
		},
		"id": "9ce226a0-f543-49cc-a9cf-fce458e0ef61",
		"time": {
			"$numberLong": "1672163776254"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199148629604",
		"killerId": "76561199084675265",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62075.004,
			"y": 1856.6129,
			"z": 115009.21
		},
		"victimPosition": {
			"x": 63495.344,
			"y": 2176.8987,
			"z": 114820.1
		},
		"killerVelocity": {
			"x": 348.35944,
			"y": 37.956055,
			"z": -6.122113
		},
		"victimVelocity": {
			"x": -134.21698,
			"y": 1.8229874,
			"z": 108.46108
		}
	}, {
		"_id": {
			"$oid": "63ab3b79faabb276553fbc68"
		},
		"id": "10654eab-504d-402a-a85c-ee5c3cec8522",
		"time": {
			"$numberLong": "1672166265233"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199046235436",
		"killerId": "76561199133377537",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68296.38,
			"y": 2130.632,
			"z": 112231.555
		},
		"victimPosition": {
			"x": 69444.56,
			"y": 2216.668,
			"z": 114430.14
		},
		"killerVelocity": {
			"x": 195.21408,
			"y": 14.40929,
			"z": 329.572
		},
		"victimVelocity": {
			"x": -125.89406,
			"y": 74.1999,
			"z": 221.52087
		}
	}, {
		"_id": {
			"$oid": "63ab3fd2faabb276553fbccb"
		},
		"id": "5fadde3b-6240-4e9b-9f69-397d14bea9d7",
		"time": {
			"$numberLong": "1672167378619"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199178085725",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59273.664,
			"y": 1303.2195,
			"z": 113975.05
		},
		"victimPosition": {
			"x": 59140.855,
			"y": 739.8575,
			"z": 114533.2
		},
		"killerVelocity": {
			"x": 179.55943,
			"y": 64.857574,
			"z": -111.956245
		},
		"victimVelocity": {
			"x": 139.06747,
			"y": -71.03997,
			"z": -2.4922976
		}
	}, {
		"_id": {
			"$oid": "63ab4e5efaabb276553fbe68"
		},
		"id": "d1621a0f-ba26-4a5f-be48-66db116271ce",
		"time": {
			"$numberLong": "1672171102379"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198041467874",
		"killerId": "76561198422629776",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53819.594,
			"y": 2337.4907,
			"z": 117584.695
		},
		"victimPosition": {
			"x": 53173.207,
			"y": 2466.176,
			"z": 117282.73
		},
		"killerVelocity": {
			"x": -231.72351,
			"y": 35.777714,
			"z": -103.903824
		},
		"victimVelocity": {
			"x": -228.8735,
			"y": 40.56157,
			"z": -102.51905
		}
	}, {
		"_id": {
			"$oid": "63ab6194faabb276553fc000"
		},
		"id": "da80ab44-1d3f-4697-83a7-8a6d1c2a5a61",
		"time": {
			"$numberLong": "1672176020437"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199252376032",
		"killerId": "76561199025467198",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51181.23,
			"y": 279.45743,
			"z": 118629.23
		},
		"victimPosition": {
			"x": 51416.918,
			"y": 279.45456,
			"z": 118687.58
		},
		"killerVelocity": {
			"x": 14.783341,
			"y": -0.040203944,
			"z": 3.5617466
		},
		"victimVelocity": {
			"x": -7.993192,
			"y": -0.027406983,
			"z": -2.0940967
		}
	}, {
		"_id": {
			"$oid": "63ab61ebfaabb276553fc00f"
		},
		"id": "6ef48363-0fcd-45e1-9fc0-2bb0337ee5d0",
		"time": {
			"$numberLong": "1672176107984"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199252376032",
		"killerId": "76561199025467198",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58171.66,
			"y": 1082.7026,
			"z": 118072.44
		},
		"victimPosition": {
			"x": 50668.51,
			"y": 279.4778,
			"z": 118452.68
		},
		"killerVelocity": {
			"x": 191.18567,
			"y": 24.07797,
			"z": -72.05064
		},
		"victimVelocity": {
			"x": 0.28272474,
			"y": -0.0006039515,
			"z": -1.2305717
		}
	}, {
		"_id": {
			"$oid": "63ab6da3faabb276553fc10a"
		},
		"id": "298eef55-2711-41eb-9374-48d54d893303",
		"time": {
			"$numberLong": "1672179107345"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198029986625",
		"killerId": "76561199013476433",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81111.62,
			"y": 1122.3135,
			"z": 96604.65
		},
		"victimPosition": {
			"x": 36733.062,
			"y": 2911.971,
			"z": 116907.11
		},
		"killerVelocity": {
			"x": 263.22266,
			"y": 28.306469,
			"z": -222.68063
		},
		"victimVelocity": {
			"x": -343.39072,
			"y": 99.96113,
			"z": 96.771545
		}
	}, {
		"_id": {
			"$oid": "63ab7507faabb276553fc1b3"
		},
		"id": "c9adc55e-1324-465f-8c7a-3eeb8f4a0ac8",
		"time": {
			"$numberLong": "1672180999318"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199024289581",
		"killerId": "76561198868725141",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64193.26,
			"y": 2690.0212,
			"z": 118690.65
		},
		"victimPosition": {
			"x": 61490.168,
			"y": 2653.2947,
			"z": 117486.84
		},
		"killerVelocity": {
			"x": -174.19666,
			"y": -103.52791,
			"z": -211.12653
		},
		"victimVelocity": {
			"x": 162.95079,
			"y": 27.488613,
			"z": -133.63737
		}
	}, {
		"_id": {
			"$oid": "63ab8bf7faabb276553fc420"
		},
		"id": "ac87edee-1acb-4938-a1ed-9686fdd27953",
		"time": {
			"$numberLong": "1672186871431"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198004903227",
		"killerId": "76561199068120510",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 141768.88,
			"y": 3654.4827,
			"z": 43374.26
		},
		"victimPosition": {
			"x": 122527.07,
			"y": 1116.6155,
			"z": 75000.58
		},
		"killerVelocity": {
			"x": -13.319523,
			"y": 47.066277,
			"z": -268.27054
		},
		"victimVelocity": {
			"x": -187.88373,
			"y": -12.317558,
			"z": 104.29418
		}
	}, {
		"_id": {
			"$oid": "63ab97a4faabb276553fc53e"
		},
		"id": "c10fda22-2c40-45a9-8c15-52a573a1d855",
		"time": {
			"$numberLong": "1672189860202"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198363816597",
		"killerId": "76561198159977154",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51204.96,
			"y": 279.48288,
			"z": 118441.43
		},
		"victimPosition": {
			"x": 51417.707,
			"y": 279.46857,
			"z": 118510.78
		},
		"killerVelocity": {
			"x": 0.9242182,
			"y": 0.036638983,
			"z": 0.28097868
		},
		"victimVelocity": {
			"x": 1.4961991,
			"y": 0.011816114,
			"z": -6.4229116
		}
	}, {
		"_id": {
			"$oid": "63ab9afffaabb276553fc587"
		},
		"id": "dfaa08a6-6d97-4369-a027-975484589ef1",
		"time": {
			"$numberLong": "1672190719191"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198363816597",
		"killerId": "76561198159977154",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50962.258,
			"y": 279.49023,
			"z": 118703.18
		},
		"victimPosition": {
			"x": 151737.7,
			"y": 2913.9758,
			"z": 40814.68
		},
		"killerVelocity": {
			"x": 0.00007708575,
			"y": -0.00009599328,
			"z": -0.00014155163
		},
		"victimVelocity": {
			"x": 72.4642,
			"y": -22.919823,
			"z": 21.337116
		}
	}, {
		"_id": {
			"$oid": "63ab9cacfaabb276553fc5aa"
		},
		"id": "52187e96-111b-4029-ac23-6e07652ea65f",
		"time": {
			"$numberLong": "1672191148611"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198159977154",
		"killerId": "76561198363816597",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76228.21,
			"y": 5502.5107,
			"z": 81321.1
		},
		"victimPosition": {
			"x": 76280.414,
			"y": 5414.5796,
			"z": 81689.42
		},
		"killerVelocity": {
			"x": 14.871685,
			"y": -69.7152,
			"z": 308.22076
		},
		"victimVelocity": {
			"x": 37.692013,
			"y": -15.897252,
			"z": 200.17337
		}
	}, {
		"_id": {
			"$oid": "63aba3b3faabb276553fc674"
		},
		"id": "d719930d-fa18-42a2-a09e-4856adbda813",
		"time": {
			"$numberLong": "1672192947325"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199061241780",
		"killerId": "76561198981720680",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51811.055,
			"y": 279.38782,
			"z": 119234.34
		},
		"victimPosition": {
			"x": 50661.32,
			"y": 279.45517,
			"z": 118379.53
		},
		"killerVelocity": {
			"x": -14.070159,
			"y": 0.029494464,
			"z": 2.5015748
		},
		"victimVelocity": {
			"x": 0.0013009249,
			"y": -0.00016758591,
			"z": -0.0027343798
		}
	}, {
		"_id": {
			"$oid": "63abbb77faabb276553fc8c3"
		},
		"id": "232481f5-53ab-4b80-99b6-3eda30a5b18a",
		"time": {
			"$numberLong": "1672199031289"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198121298900",
		"killerId": "76561199217992561",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72112.414,
			"y": 836.25195,
			"z": 112763.74
		},
		"victimPosition": {
			"x": 74462.625,
			"y": 791.9384,
			"z": 109923.89
		},
		"killerVelocity": {
			"x": 115.581505,
			"y": -59.238552,
			"z": -249.13246
		},
		"victimVelocity": {
			"x": -21.394997,
			"y": -49.87067,
			"z": 88.59552
		}
	}, {
		"_id": {
			"$oid": "63abbc4cfaabb276553fc8dd"
		},
		"id": "9ebe0c4c-b856-41f4-9b5a-250637d940cc",
		"time": {
			"$numberLong": "1672199244117"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199197257839",
		"killerId": "76561199179176837",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77655.02,
			"y": 2009.431,
			"z": 81119.71
		},
		"victimPosition": {
			"x": 81744.98,
			"y": 1544.8389,
			"z": 79648
		},
		"killerVelocity": {
			"x": -173.60266,
			"y": 114.500244,
			"z": -238.87437
		},
		"victimVelocity": {
			"x": 30.46258,
			"y": 76.612625,
			"z": -99.24636
		}
	}, {
		"_id": {
			"$oid": "63abec17faabb276553fcc9d"
		},
		"id": "bd3746af-56b8-4f9d-a1ae-68edb4a96250",
		"time": {
			"$numberLong": "1672211479242"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198885593617",
		"killerId": "76561198159977154",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55005.883,
			"y": 1928.2181,
			"z": 118558.31
		},
		"victimPosition": {
			"x": 54989.902,
			"y": 1876.4979,
			"z": 118408.04
		},
		"killerVelocity": {
			"x": -50.97769,
			"y": -73.517075,
			"z": -146.24763
		},
		"victimVelocity": {
			"x": 0.6989323,
			"y": -97.04226,
			"z": -84.326675
		}
	}, {
		"_id": {
			"$oid": "63abecddfaabb276553fccb7"
		},
		"id": "58b71c9d-9958-4d00-9471-756b53a6c45e",
		"time": {
			"$numberLong": "1672211677322"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198029662011",
		"killerId": "76561198159977154",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56584.645,
			"y": 1529.5771,
			"z": 117848.336
		},
		"victimPosition": {
			"x": 57933.33,
			"y": 1994.1941,
			"z": 116861.25
		},
		"killerVelocity": {
			"x": 188.98822,
			"y": 67.18231,
			"z": -129.18283
		},
		"victimVelocity": {
			"x": 165.46748,
			"y": 31.995863,
			"z": -130.47575
		}
	}, {
		"_id": {
			"$oid": "63abf0e8faabb276553fcd1e"
		},
		"id": "1563476f-9c48-49a3-92b3-4082a14e3f88",
		"time": {
			"$numberLong": "1672212712209"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199101593757",
		"killerId": "76561198959077450",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59020.676,
			"y": 1066.7806,
			"z": 100994.17
		},
		"victimPosition": {
			"x": 61706.598,
			"y": 1318.7416,
			"z": 99522.22
		},
		"killerVelocity": {
			"x": 172.23831,
			"y": -35.778954,
			"z": -157.47374
		},
		"victimVelocity": {
			"x": 152.90022,
			"y": -127.74006,
			"z": -98.36764
		}
	}, {
		"_id": {
			"$oid": "63ac04e6faabb276553fce8a"
		},
		"id": "4ffb8e79-7b29-43c4-b780-8ae7a7a7f7a4",
		"time": {
			"$numberLong": "1672217830069"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199232542398",
		"killerId": "76561198967384307",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51971.434,
			"y": 279.4286,
			"z": 118787.73
		},
		"victimPosition": {
			"x": 49690.043,
			"y": 305.3379,
			"z": 118462.24
		},
		"killerVelocity": {
			"x": 0.000026256686,
			"y": 0.000760071,
			"z": 0.000036692167
		},
		"victimVelocity": {
			"x": 22.419868,
			"y": -29.62226,
			"z": -45.100773
		}
	}, {
		"_id": {
			"$oid": "63ac278afaabb276553fd005"
		},
		"id": "e3c1ce13-882a-4649-9fb4-de341fc1f183",
		"time": {
			"$numberLong": "1672226698109"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199153548254",
		"killerId": "76561198158948850",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 111683.625,
			"y": 3223.8064,
			"z": 47944.65
		},
		"victimPosition": {
			"x": 112466.81,
			"y": 1102.2563,
			"z": 39357.266
		},
		"killerVelocity": {
			"x": 362.2217,
			"y": -17.807295,
			"z": -170.0267
		},
		"victimVelocity": {
			"x": -110.22756,
			"y": 34.183212,
			"z": 151.23209
		}
	}, {
		"_id": {
			"$oid": "63ac3cf3faabb276553fd17a"
		},
		"id": "766354d9-a02c-4dc0-83e9-25fbcf98b740",
		"time": {
			"$numberLong": "1672232179481"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198967001480",
		"killerId": "76561199052903353",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63055.66,
			"y": 1810.091,
			"z": 92655.76
		},
		"victimPosition": {
			"x": 62065.316,
			"y": 1505.0973,
			"z": 88391.61
		},
		"killerVelocity": {
			"x": -35.821747,
			"y": 17.642485,
			"z": -383.80002
		},
		"victimVelocity": {
			"x": 142.53342,
			"y": 57.718964,
			"z": -251.90076
		}
	}, {
		"_id": {
			"$oid": "63ac4d63faabb276553fd296"
		},
		"id": "f18d8013-037b-4b1d-96ec-dae964dad428",
		"time": {
			"$numberLong": "1672236387236"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199176173137",
		"killerId": "76561198380641479",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54348.684,
			"y": 2593.708,
			"z": 110370.484
		},
		"victimPosition": {
			"x": 54611.79,
			"y": 2232.8743,
			"z": 109864.29
		},
		"killerVelocity": {
			"x": 53.841812,
			"y": 19.83544,
			"z": -296.67563
		},
		"victimVelocity": {
			"x": 24.756012,
			"y": -64.685844,
			"z": -159.1395
		}
	}, {
		"_id": {
			"$oid": "63ac5eaafaabb276553fd3e7"
		},
		"id": "41966c62-a79f-4f2f-8a41-b08fdfb49c00",
		"time": {
			"$numberLong": "1672240810667"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198160695811",
		"killerId": "76561199047405333",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 142325.22,
			"y": 2506.4092,
			"z": 38945.1
		},
		"victimPosition": {
			"x": 149073.28,
			"y": 2593.0996,
			"z": 34251.87
		},
		"killerVelocity": {
			"x": 171.41234,
			"y": -6.051552,
			"z": -153.09956
		},
		"victimVelocity": {
			"x": 128.66322,
			"y": -50.83892,
			"z": -80.08213
		}
	}, {
		"_id": {
			"$oid": "63ac671cfaabb276553fd49e"
		},
		"id": "731e59a8-c8f9-4a11-bec8-faef703047a3",
		"time": {
			"$numberLong": "1672242972035"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199150979859",
		"killerId": "76561198070007976",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 126622.67,
			"y": 5666.3247,
			"z": 57981.062
		},
		"victimPosition": {
			"x": 123633.484,
			"y": 1451.5018,
			"z": 60083.63
		},
		"killerVelocity": {
			"x": 100.53907,
			"y": -188.36238,
			"z": 406.91525
		},
		"victimVelocity": {
			"x": -276.67813,
			"y": 18.648813,
			"z": -47.231297
		}
	}, {
		"_id": {
			"$oid": "63ac88affaabb276553fd6c6"
		},
		"id": "94d11a79-f768-4b82-95b1-4034e7842de6",
		"time": {
			"$numberLong": "1672251567616"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198882841683",
		"killerId": "76561198136445575",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52958.24,
			"y": 3246.0757,
			"z": 102133.016
		},
		"victimPosition": {
			"x": 56134.65,
			"y": 1554.4039,
			"z": 98802.61
		},
		"killerVelocity": {
			"x": 151.1493,
			"y": -87.30449,
			"z": -169.54456
		},
		"victimVelocity": {
			"x": 6.3554287,
			"y": -310.01056,
			"z": 122.37
		}
	}, {
		"_id": {
			"$oid": "63ac89abfaabb276553fd6d4"
		},
		"id": "01804fc7-ce09-4a93-8037-a1033bc24b23",
		"time": {
			"$numberLong": "1672251819867"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198376528157",
		"killerId": "76561198059132551",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89230.33,
			"y": 2192.4307,
			"z": 90420.64
		},
		"victimPosition": {
			"x": 91223.05,
			"y": 1529.4225,
			"z": 84610.65
		},
		"killerVelocity": {
			"x": 143.40758,
			"y": 65.74739,
			"z": -208.82625
		},
		"victimVelocity": {
			"x": -162.03839,
			"y": 55.47035,
			"z": 134.31223
		}
	}, {
		"_id": {
			"$oid": "63ac8fa8faabb276553fd760"
		},
		"id": "c926a521-7399-4905-81b3-b86eb88b1a3f",
		"time": {
			"$numberLong": "1672253352988"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198376528157",
		"killerId": "76561198059132551",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101435.23,
			"y": 2074.8438,
			"z": 68551.15
		},
		"victimPosition": {
			"x": 102825.78,
			"y": 1484.9279,
			"z": 63681
		},
		"killerVelocity": {
			"x": 33.034733,
			"y": 1.5773419,
			"z": -320.37506
		},
		"victimVelocity": {
			"x": -324.27457,
			"y": -25.974512,
			"z": -99.66961
		}
	}, {
		"_id": {
			"$oid": "63ac9ae0faabb276553fd856"
		},
		"id": "314daf06-4d2a-45d0-a2cb-b338f7c9dd53",
		"time": {
			"$numberLong": "1672256224540"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 8,
		"victimId": "76561198992384970",
		"killerId": "76561199210841643",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58601.09,
			"y": 818.9083,
			"z": 111537.375
		},
		"victimPosition": {
			"x": 59084.688,
			"y": 527.9396,
			"z": 110477.79
		},
		"killerVelocity": {
			"x": 137.13239,
			"y": -65.51186,
			"z": -285.30933
		},
		"victimVelocity": {
			"x": 44.61445,
			"y": -52.233597,
			"z": -103.116165
		}
	}, {
		"_id": {
			"$oid": "63ac9b6dfaabb276553fd866"
		},
		"id": "93f90b4e-971c-40a4-b472-1cdb7e09263b",
		"time": {
			"$numberLong": "1672256365048"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198392426247",
		"killerId": "76561199210841643",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74939.35,
			"y": 2180.273,
			"z": 94396.766
		},
		"victimPosition": {
			"x": 86189.47,
			"y": 1049.4733,
			"z": 81857.33
		},
		"killerVelocity": {
			"x": 288.30386,
			"y": 21.845228,
			"z": -46.372185
		},
		"victimVelocity": {
			"x": -138.29904,
			"y": 48.178013,
			"z": -19.67754
		}
	}, {
		"_id": {
			"$oid": "63aca58bfaabb276553fd957"
		},
		"id": "c0f9786d-6b0a-4082-91aa-fefd6b4a159c",
		"time": {
			"$numberLong": "1672258955703"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199092546581",
		"killerId": "76561198060714161",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87486.695,
			"y": 1334.0103,
			"z": 105549.38
		},
		"victimPosition": {
			"x": 84657.41,
			"y": 1599.27,
			"z": 106207.17
		},
		"killerVelocity": {
			"x": -269.72925,
			"y": 39.0957,
			"z": -6.759445
		},
		"victimVelocity": {
			"x": 42.383236,
			"y": -16.910172,
			"z": 194.43163
		}
	}, {
		"_id": {
			"$oid": "63acc30daba13c63590cfd14"
		},
		"id": "91e7494a-599f-494b-90ac-f9ab313b0e59",
		"time": {
			"$numberLong": "1672266509417"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199099671979",
		"killerId": "76561199007273889",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52080.83,
			"y": 279.46667,
			"z": 118610.52
		},
		"victimPosition": {
			"x": 52084.38,
			"y": 279.44855,
			"z": 118611.31
		},
		"killerVelocity": {
			"x": 31.123306,
			"y": 0.017216347,
			"z": -5.396783
		},
		"victimVelocity": {
			"x": 5.828245,
			"y": 0.0047713444,
			"z": 3.2045598
		}
	}, {
		"_id": {
			"$oid": "63acc353aba13c63590cfd28"
		},
		"id": "ca508bbe-f110-4b4e-9829-c81f223b9b62",
		"time": {
			"$numberLong": "1672266579542"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199075900731",
		"killerId": "76561199007273889",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52355.992,
			"y": 279.43652,
			"z": 118920.695
		},
		"victimPosition": {
			"x": 52509.9,
			"y": 278.6815,
			"z": 118960.69
		},
		"killerVelocity": {
			"x": 105.390114,
			"y": -0.32868385,
			"z": 27.661715
		},
		"victimVelocity": {
			"x": -2.688019,
			"y": -0.0027721599,
			"z": -8.647589
		}
	}, {
		"_id": {
			"$oid": "63acc3e2aba13c63590cfd44"
		},
		"id": "9450e7b0-8075-4536-941c-c9e16e8340fc",
		"time": {
			"$numberLong": "1672266722590"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199075900731",
		"killerId": "76561199007273889",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65467.004,
			"y": 279.4331,
			"z": 115146.164
		},
		"victimPosition": {
			"x": 53641.42,
			"y": 277.50125,
			"z": 118950.85
		},
		"killerVelocity": {
			"x": 0.0014647141,
			"y": -0.030202761,
			"z": 0.00089061214
		},
		"victimVelocity": {
			"x": 101.08662,
			"y": -5.517043,
			"z": 18.769304
		}
	}, {
		"_id": {
			"$oid": "63acc41daba13c63590cfd49"
		},
		"id": "c5122eb7-5e3a-4c5c-b039-b236a2848cab",
		"time": {
			"$numberLong": "1672266781919"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199132899687",
		"killerId": "76561199007273889",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52013.766,
			"y": 279.43475,
			"z": 118832.26
		},
		"victimPosition": {
			"x": 52123.164,
			"y": 278.68945,
			"z": 118857.48
		},
		"killerVelocity": {
			"x": 30.533178,
			"y": -0.0014323741,
			"z": 7.678928
		},
		"victimVelocity": {
			"x": -8.67097,
			"y": -0.004960969,
			"z": -2.4640508
		}
	}, {
		"_id": {
			"$oid": "63acce78aba13c63590cfe75"
		},
		"id": "56fc7fee-ea3d-4a15-82f4-c5d4f060e882",
		"time": {
			"$numberLong": "1672269432400"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198254217939",
		"killerId": "76561198281573644",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71226.52,
			"y": 984.25934,
			"z": 106786.41
		},
		"victimPosition": {
			"x": 72196.58,
			"y": 670.03284,
			"z": 100059.95
		},
		"killerVelocity": {
			"x": 286.4213,
			"y": -36.07143,
			"z": -182.82506
		},
		"victimVelocity": {
			"x": -37.999405,
			"y": -13.417367,
			"z": -294.99173
		}
	}, {
		"_id": {
			"$oid": "63acd98caba13c63590cff69"
		},
		"id": "483c73e7-e062-4ad3-96af-8bef68e18e5c",
		"time": {
			"$numberLong": "1672272268563"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198006221840",
		"killerId": "76561199042609815",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51784.46,
			"y": 441.50864,
			"z": 119334.8
		},
		"victimPosition": {
			"x": 51776.246,
			"y": 447.32498,
			"z": 119438.805
		},
		"killerVelocity": {
			"x": -70.84939,
			"y": -5.0258465,
			"z": 209.35892
		},
		"victimVelocity": {
			"x": 81.75221,
			"y": -25.350164,
			"z": -32.737892
		}
	}, {
		"_id": {
			"$oid": "63acde55aba13c63590cfff8"
		},
		"id": "a33d0bc4-9d06-49a4-8f08-b9904a2979b8",
		"time": {
			"$numberLong": "1672273493627"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198392426247",
		"killerId": "76561199042609815",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99719.41,
			"y": 5277.57,
			"z": 75520.98
		},
		"victimPosition": {
			"x": 100981.875,
			"y": 5865.2295,
			"z": 72995.1
		},
		"killerVelocity": {
			"x": 150.66972,
			"y": 86.00026,
			"z": -288.75977
		},
		"victimVelocity": {
			"x": 86.66226,
			"y": -53.732162,
			"z": -221.3142
		}
	}, {
		"_id": {
			"$oid": "63ace852aba13c63590d011a"
		},
		"id": "49ebaa3a-0d1f-4b30-9b1c-751b9e92bf98",
		"time": {
			"$numberLong": "1672276050772"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561197976557758",
		"killerId": "76561198131360112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57142.926,
			"y": 1590.9711,
			"z": 110258.15
		},
		"victimPosition": {
			"x": 62253.348,
			"y": 1763.4043,
			"z": 103152.78
		},
		"killerVelocity": {
			"x": 6.201635,
			"y": -32.27277,
			"z": -253.52394
		},
		"victimVelocity": {
			"x": -181.20885,
			"y": -17.909115,
			"z": -241.32152
		}
	}, {
		"_id": {
			"$oid": "63acf5bbaba13c63590d0212"
		},
		"id": "a7ef478a-c39a-4b95-b798-c6fbe0e496cd",
		"time": {
			"$numberLong": "1672279483409"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198884738345",
		"killerId": "76561199465790728",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73959.27,
			"y": 1877.5929,
			"z": 105553.625
		},
		"victimPosition": {
			"x": 74019.555,
			"y": 1057.8997,
			"z": 107747.31
		},
		"killerVelocity": {
			"x": 24.17989,
			"y": 13.477795,
			"z": -291.5676
		},
		"victimVelocity": {
			"x": 21.6461,
			"y": -92.74191,
			"z": -24.091185
		}
	}, {
		"_id": {
			"$oid": "63acf995aba13c63590d0245"
		},
		"id": "5292623a-c322-4c39-a79c-b16c381e136f",
		"time": {
			"$numberLong": "1672280469110"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199451684154",
		"killerId": "76561198884738345",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 119365.89,
			"y": 2943.827,
			"z": 111633.18
		},
		"victimPosition": {
			"x": 120553.16,
			"y": 2417.1436,
			"z": 110030.7
		},
		"killerVelocity": {
			"x": 235.75406,
			"y": -13.864472,
			"z": -318.79205
		},
		"victimVelocity": {
			"x": 180.74947,
			"y": -60.694298,
			"z": -306.29538
		}
	}, {
		"_id": {
			"$oid": "63acfadbaba13c63590d025c"
		},
		"id": "14fe2230-d3bb-4c31-a4dd-d74320a0a84e",
		"time": {
			"$numberLong": "1672280795660"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199451684154",
		"killerId": "76561198884738345",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 109606.5,
			"y": 2804.4263,
			"z": 116094.28
		},
		"victimPosition": {
			"x": 111914.22,
			"y": 3235.6255,
			"z": 116036.39
		},
		"killerVelocity": {
			"x": 354.08398,
			"y": 52.167114,
			"z": -34.85396
		},
		"victimVelocity": {
			"x": 200.00926,
			"y": 24.818747,
			"z": 52.226234
		}
	}, {
		"_id": {
			"$oid": "63ad04cfaba13c63590d0341"
		},
		"id": "31a0c31c-a322-4d46-a065-8dede602ebc7",
		"time": {
			"$numberLong": "1672283343506"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199132899687",
		"killerId": "76561198050284681",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54749.36,
			"y": 431.34872,
			"z": 115055.76
		},
		"victimPosition": {
			"x": 63215.13,
			"y": 603.7968,
			"z": 115805.57
		},
		"killerVelocity": {
			"x": 18.13238,
			"y": 6.585577,
			"z": -264.21732
		},
		"victimVelocity": {
			"x": -92.35439,
			"y": -78.94442,
			"z": 252.91689
		}
	}, {
		"_id": {
			"$oid": "63ad07e3aba13c63590d0392"
		},
		"id": "45914f46-c2f3-4b94-8f07-ee7386bbe08a",
		"time": {
			"$numberLong": "1672284131674"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199447930716",
		"killerId": "76561198050284681",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96884.03,
			"y": 1772.8247,
			"z": 74013.06
		},
		"victimPosition": {
			"x": 98534.58,
			"y": 1656.9543,
			"z": 72457.52
		},
		"killerVelocity": {
			"x": 287.14542,
			"y": -46.67431,
			"z": -240.93864
		},
		"victimVelocity": {
			"x": 266.31577,
			"y": -32.19319,
			"z": -210.91418
		}
	}, {
		"_id": {
			"$oid": "63ad0884aba13c63590d03a7"
		},
		"id": "f8aeea4f-0f15-4ca1-838e-2ab7ba30d0bb",
		"time": {
			"$numberLong": "1672284292530"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199039234838",
		"killerId": "76561199447930716",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57066.72,
			"y": 2050.078,
			"z": 104535.65
		},
		"victimPosition": {
			"x": 61994.41,
			"y": 997.6065,
			"z": 95623.82
		},
		"killerVelocity": {
			"x": 138.8327,
			"y": -47.56753,
			"z": -285.6539
		},
		"victimVelocity": {
			"x": 275.5282,
			"y": -23.458002,
			"z": 0.26864332
		}
	}, {
		"_id": {
			"$oid": "63ad0cdfaba13c63590d0409"
		},
		"id": "3ef11a6c-070c-412b-ac4e-209ea801328b",
		"time": {
			"$numberLong": "1672285407779"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199179176837",
		"killerId": "76561198868725141",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 129326.305,
			"y": 2708.4873,
			"z": 40459.61
		},
		"victimPosition": {
			"x": 129884.79,
			"y": 3097.8982,
			"z": 38213.22
		},
		"killerVelocity": {
			"x": 204.39192,
			"y": -24.058321,
			"z": -189.28503
		},
		"victimVelocity": {
			"x": -66.17516,
			"y": 4.8003974,
			"z": -218.76318
		}
	}, {
		"_id": {
			"$oid": "63ad0f4daba13c63590d0442"
		},
		"id": "6f6c3483-6f9b-44e4-a610-9f571edd7204",
		"time": {
			"$numberLong": "1672286029355"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199075604305",
		"killerId": "76561198254217939",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49604.84,
			"y": 1950.5844,
			"z": 118189.21
		},
		"victimPosition": {
			"x": 53398.227,
			"y": 279.22955,
			"z": 119393.7
		},
		"killerVelocity": {
			"x": 126.05335,
			"y": 140.01297,
			"z": 32.019135
		},
		"victimVelocity": {
			"x": 107.90516,
			"y": -45.528286,
			"z": 84.92193
		}
	}, {
		"_id": {
			"$oid": "63ad0f5eaba13c63590d0445"
		},
		"id": "410929ab-aac0-4c0c-8988-a64833f34b78",
		"time": {
			"$numberLong": "1672286046886"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198254217939",
		"killerId": "76561199128369112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51404.105,
			"y": 2036.4727,
			"z": 121066.68
		},
		"victimPosition": {
			"x": 51418.246,
			"y": 1200.7395,
			"z": 118397.08
		},
		"killerVelocity": {
			"x": -16.022455,
			"y": 53.213158,
			"z": -357.18048
		},
		"victimVelocity": {
			"x": 109.73252,
			"y": -167.35553,
			"z": 15.514042
		}
	}, {
		"_id": {
			"$oid": "63ad1214aba13c63590d047c"
		},
		"id": "f9a28bb9-daea-4d1e-afe3-2d23062b5212",
		"time": {
			"$numberLong": "1672286740817"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198254217939",
		"killerId": "76561199128369112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89796.84,
			"y": 6242.307,
			"z": 105675.36
		},
		"victimPosition": {
			"x": 93200.94,
			"y": 534.96466,
			"z": 95964.65
		},
		"killerVelocity": {
			"x": 59.515106,
			"y": 54.795265,
			"z": -311.54813
		},
		"victimVelocity": {
			"x": 312.82816,
			"y": -58.255177,
			"z": -31.028158
		}
	}, {
		"_id": {
			"$oid": "63ad1ad9aba13c63590d0587"
		},
		"id": "87bb19ba-fd4a-43e6-b235-4d01ca90ceb4",
		"time": {
			"$numberLong": "1672288985810"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198873733478",
		"killerId": "76561198290426573",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99279.625,
			"y": 1527.378,
			"z": 95805.15
		},
		"victimPosition": {
			"x": 100064.41,
			"y": 752.51685,
			"z": 96323.164
		},
		"killerVelocity": {
			"x": 231.17758,
			"y": 39.25753,
			"z": -248.38228
		},
		"victimVelocity": {
			"x": 88.02592,
			"y": -37.092247,
			"z": 40.338943
		}
	}, {
		"_id": {
			"$oid": "63ad2c5e109c9d48f459b015"
		},
		"id": "7d1450ec-f43c-4568-9cd0-14b41394a2ca",
		"time": {
			"$numberLong": "1672293470195"
		},
		"victimAircraft": 4,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198080851997",
		"killerId": "76561199245437664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52871.875,
			"y": 2367.2876,
			"z": 96620.984
		},
		"victimPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"killerVelocity": {
			"x": -17.320675,
			"y": 16.147566,
			"z": 355.8765
		},
		"victimVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		}
	}, {
		"_id": {
			"$oid": "63ad2d7e109c9d48f459b039"
		},
		"id": "38a8f996-4b15-45ec-8ac1-bf9adcf87235",
		"time": {
			"$numberLong": "1672293758316"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198153819286",
		"killerId": "76561199245437664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59524.797,
			"y": 432.6469,
			"z": 117215.02
		},
		"victimPosition": {
			"x": 61582.918,
			"y": 465.94113,
			"z": 117352.766
		},
		"killerVelocity": {
			"x": 324.59232,
			"y": 6.6617103,
			"z": 13.012786
		},
		"victimVelocity": {
			"x": 126.154076,
			"y": -20.544456,
			"z": 107.17149
		}
	}, {
		"_id": {
			"$oid": "63ad4573109c9d48f459b2ae"
		},
		"id": "9ea19c5d-977c-4f75-abaf-17b369cfc0a1",
		"time": {
			"$numberLong": "1672299891008"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199059432916",
		"killerId": "76561199018954854",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52686.06,
			"y": 278.7402,
			"z": 119115.75
		},
		"victimPosition": {
			"x": 53150.203,
			"y": 282.5738,
			"z": 119128.4
		},
		"killerVelocity": {
			"x": -0.00021853848,
			"y": 0.000028170645,
			"z": -0.000050130846
		},
		"victimVelocity": {
			"x": 2.4499512,
			"y": -19.952175,
			"z": 10.777262
		}
	}, {
		"_id": {
			"$oid": "63ad55e3109c9d48f459b44e"
		},
		"id": "ab619f5c-d104-462b-81e4-d6fdef2a0395",
		"time": {
			"$numberLong": "1672304099823"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199104802172",
		"killerId": "76561198880946766",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 143436.19,
			"y": 2148.6694,
			"z": 55357.27
		},
		"victimPosition": {
			"x": 141730.5,
			"y": 2708.4536,
			"z": 53163.043
		},
		"killerVelocity": {
			"x": -29.02073,
			"y": -4.3538914,
			"z": -216.44327
		},
		"victimVelocity": {
			"x": -291.4943,
			"y": -3.9762125,
			"z": -31.994318
		}
	}, {
		"_id": {
			"$oid": "63ad56ae109c9d48f459b464"
		},
		"id": "de67324c-6e0b-4073-bf50-5b2d9882ad75",
		"time": {
			"$numberLong": "1672304302495"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198380641479",
		"killerId": "76561198987265620",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 145380.9,
			"y": 3001.7517,
			"z": 37769.074
		},
		"victimPosition": {
			"x": 146147.86,
			"y": 2953.2053,
			"z": 37771.984
		},
		"killerVelocity": {
			"x": 154.08122,
			"y": -18.797764,
			"z": 28.255405
		},
		"victimVelocity": {
			"x": 113.57697,
			"y": -22.131317,
			"z": 22.619694
		}
	}, {
		"_id": {
			"$oid": "63ad80de109c9d48f459b5d2"
		},
		"id": "43180108-d466-4231-97e8-4fea1c9dfae0",
		"time": {
			"$numberLong": "1672315102620"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199146631681",
		"killerId": "76561199153548254",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70192.734,
			"y": 2005.6476,
			"z": 104292.52
		},
		"victimPosition": {
			"x": 75131.266,
			"y": 900.1047,
			"z": 102172.375
		},
		"killerVelocity": {
			"x": 297.7754,
			"y": -58.922882,
			"z": -184.78758
		},
		"victimVelocity": {
			"x": 70.89016,
			"y": -21.340525,
			"z": 245.81966
		}
	}, {
		"_id": {
			"$oid": "63ad80f8109c9d48f459b5d9"
		},
		"id": "c419f275-8f9a-4e68-ab65-b053847044c4",
		"time": {
			"$numberLong": "1672315128292"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198164572818",
		"killerId": "76561199195005447",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76570.6,
			"y": 2062.7117,
			"z": 100979.625
		},
		"victimPosition": {
			"x": 79904.55,
			"y": 519.16486,
			"z": 102814.1
		},
		"killerVelocity": {
			"x": 283.95667,
			"y": -116.99634,
			"z": 136.3025
		},
		"victimVelocity": {
			"x": -229.90239,
			"y": -18.864872,
			"z": -106.76159
		}
	}, {
		"_id": {
			"$oid": "63ad8791109c9d48f459b672"
		},
		"id": "dd5694a5-35f9-49f3-8549-d00eb496264d",
		"time": {
			"$numberLong": "1672316817401"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199153548254",
		"killerId": "76561198880946766",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114167.89,
			"y": 1950.7749,
			"z": 65039.414
		},
		"victimPosition": {
			"x": 121138.19,
			"y": 1483.7651,
			"z": 57345.414
		},
		"killerVelocity": {
			"x": 296.8767,
			"y": -6.4197974,
			"z": -258.34897
		},
		"victimVelocity": {
			"x": -149.93326,
			"y": 25.471876,
			"z": 101.964905
		}
	}, {
		"_id": {
			"$oid": "63ad87bf109c9d48f459b67a"
		},
		"id": "3ed69899-32d3-4a7c-a3d3-a27e2c65e4fb",
		"time": {
			"$numberLong": "1672316863228"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198046915473",
		"killerId": "76561198092238967",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76026.375,
			"y": 3865.1218,
			"z": 85510.75
		},
		"victimPosition": {
			"x": 76242.58,
			"y": 2797.6482,
			"z": 82704.26
		},
		"killerVelocity": {
			"x": 51.572605,
			"y": -105.594376,
			"z": -335.4267
		},
		"victimVelocity": {
			"x": 232.56682,
			"y": -1.3530753,
			"z": 36.781265
		}
	}, {
		"_id": {
			"$oid": "63ad8833109c9d48f459b684"
		},
		"id": "0add7f5a-9de5-48b5-bd1e-cd38397658c7",
		"time": {
			"$numberLong": "1672316979855"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199096770244",
		"killerId": "76561198087346955",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 119797.03,
			"y": 1951.1271,
			"z": 50547.855
		},
		"victimPosition": {
			"x": 116973.586,
			"y": 1730.6061,
			"z": 43288.973
		},
		"killerVelocity": {
			"x": -319.78226,
			"y": 21.577381,
			"z": -195.46654
		},
		"victimVelocity": {
			"x": -55.8867,
			"y": -18.297348,
			"z": -292.679
		}
	}, {
		"_id": {
			"$oid": "63ad8e46109c9d48f459b703"
		},
		"id": "fbf09734-d637-429e-8438-a828d117ae84",
		"time": {
			"$numberLong": "1672318534159"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198971891326",
		"killerId": "76561198039383350",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59608.457,
			"y": 924.67346,
			"z": 115075.16
		},
		"victimPosition": {
			"x": 58115.117,
			"y": 561.52057,
			"z": 117654.84
		},
		"killerVelocity": {
			"x": -231.67719,
			"y": -58.834938,
			"z": 300.08597
		},
		"victimVelocity": {
			"x": 253.1812,
			"y": -1.5542654,
			"z": -142.50534
		}
	}, {
		"_id": {
			"$oid": "63adbfc0109c9d48f459bb16"
		},
		"id": "098c2ed9-ba91-4b4f-8a6a-a94245f0114c",
		"time": {
			"$numberLong": "1672331200960"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199039234838",
		"killerId": "76561199046613272",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58957.125,
			"y": 1443.2336,
			"z": 117854.05
		},
		"victimPosition": {
			"x": 59259.16,
			"y": 591.63104,
			"z": 117985.33
		},
		"killerVelocity": {
			"x": 138.73866,
			"y": -217.56647,
			"z": 152.80942
		},
		"victimVelocity": {
			"x": 222.82741,
			"y": -0.047711574,
			"z": -157.56827
		}
	}, {
		"_id": {
			"$oid": "63adcf45109c9d48f459bca1"
		},
		"id": "d1c0e675-50c0-491b-bd29-33e2c655b9b9",
		"time": {
			"$numberLong": "1672335173674"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199046235436",
		"killerId": "76561198272370133",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 115786.695,
			"y": 3254.6,
			"z": 82613.336
		},
		"victimPosition": {
			"x": 117986.336,
			"y": 3317.19,
			"z": 82162.164
		},
		"killerVelocity": {
			"x": 390.2803,
			"y": -26.238585,
			"z": -87.45846
		},
		"victimVelocity": {
			"x": -189.60225,
			"y": 128.28839,
			"z": 266.15784
		}
	}, {
		"_id": {
			"$oid": "63adda99109c9d48f459bd91"
		},
		"id": "c85ed030-ce3c-4210-8969-4928ebd2b200",
		"time": {
			"$numberLong": "1672338073385"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198381071451",
		"killerId": "76561199043102709",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50772.93,
			"y": 279.34488,
			"z": 118379.266
		},
		"victimPosition": {
			"x": 50690.066,
			"y": 279.46585,
			"z": 118362.04
		},
		"killerVelocity": {
			"x": -26.3348,
			"y": -0.20195043,
			"z": -5.4901667
		},
		"victimVelocity": {
			"x": 0.006796194,
			"y": 0.019699238,
			"z": -0.038143456
		}
	}, {
		"_id": {
			"$oid": "63addb65109c9d48f459bdad"
		},
		"id": "f9173982-9b08-4f3c-876f-fc5b1d8ee1ce",
		"time": {
			"$numberLong": "1672338277450"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198381071451",
		"killerId": "76561199043102709",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58660.965,
			"y": 1434.7738,
			"z": 118654.33
		},
		"victimPosition": {
			"x": 58594.223,
			"y": 654.9708,
			"z": 118450.35
		},
		"killerVelocity": {
			"x": 178.69458,
			"y": 13.452138,
			"z": -151.59705
		},
		"victimVelocity": {
			"x": 41.02993,
			"y": -100.12824,
			"z": -92.20088
		}
	}, {
		"_id": {
			"$oid": "63adfdfd109c9d48f459c11c"
		},
		"id": "5b519124-a0ee-4194-9e78-2cac915c0914",
		"time": {
			"$numberLong": "1672347133164"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198207822743",
		"killerId": "76561198967983348",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54490.395,
			"y": 1664.2935,
			"z": 116481.44
		},
		"victimPosition": {
			"x": 56858.207,
			"y": 653.2792,
			"z": 114740.8
		},
		"killerVelocity": {
			"x": 342.03488,
			"y": -69.24643,
			"z": -61.92594
		},
		"victimVelocity": {
			"x": -240.30176,
			"y": -68.17412,
			"z": -77.0934
		}
	}, {
		"_id": {
			"$oid": "63adfe45109c9d48f459c122"
		},
		"id": "40c53c89-d997-4b46-8f4a-42df6505ef0d",
		"time": {
			"$numberLong": "1672347205364"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198967983348",
		"killerId": "76561198207822743",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54616.125,
			"y": 462.68365,
			"z": 118605.555
		},
		"victimPosition": {
			"x": 54747.137,
			"y": 483.85953,
			"z": 118563.945
		},
		"killerVelocity": {
			"x": 198.69577,
			"y": 24.143007,
			"z": -71.42566
		},
		"victimVelocity": {
			"x": -338.8468,
			"y": -55.24249,
			"z": 133.26857
		}
	}, {
		"_id": {
			"$oid": "63adfe45109c9d48f459c124"
		},
		"id": "10f02cf9-30be-420d-a57a-fa3bc34531a5",
		"time": {
			"$numberLong": "1672347205813"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198207822743",
		"killerId": "76561198967983348",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54604.79,
			"y": 459.94342,
			"z": 118619.31
		},
		"victimPosition": {
			"x": 54704.965,
			"y": 472.75864,
			"z": 118573.58
		},
		"killerVelocity": {
			"x": -335.02142,
			"y": -58.362835,
			"z": 130.71288
		},
		"victimVelocity": {
			"x": 201.28694,
			"y": 20.61165,
			"z": -72.40653
		}
	}, {
		"_id": {
			"$oid": "63ae0a27109c9d48f459c228"
		},
		"id": "7f0c7382-6126-49a6-97e2-f5edeb9dd259",
		"time": {
			"$numberLong": "1672350247291"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199013453548",
		"killerId": "76561199229463862",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54819.926,
			"y": 1078.1044,
			"z": 118770.875
		},
		"victimPosition": {
			"x": 56256.906,
			"y": 1412.1351,
			"z": 119732.45
		},
		"killerVelocity": {
			"x": 8.747191,
			"y": 41.58046,
			"z": -101.59245
		},
		"victimVelocity": {
			"x": 123.862236,
			"y": 42.387024,
			"z": 66.38376
		}
	}, {
		"_id": {
			"$oid": "63ae0ac5109c9d48f459c248"
		},
		"id": "90f7d6c0-30a4-413b-984a-b1d36c5de06e",
		"time": {
			"$numberLong": "1672350405226"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198864743430",
		"killerId": "76561199229463862",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52551.812,
			"y": 689.9494,
			"z": 119110.836
		},
		"victimPosition": {
			"x": 52311.32,
			"y": 1251.087,
			"z": 119214.516
		},
		"killerVelocity": {
			"x": 89.87542,
			"y": 18.181465,
			"z": -23.146063
		},
		"victimVelocity": {
			"x": -83.943855,
			"y": -27.906685,
			"z": -76.04853
		}
	}, {
		"_id": {
			"$oid": "63ae333b109c9d48f459c612"
		},
		"id": "778195b6-37d3-4f88-aa6f-369241355181",
		"time": {
			"$numberLong": "1672360763892"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198005339534",
		"killerId": "76561199075900731",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 154194.4,
			"y": 3226.7031,
			"z": 52444.887
		},
		"victimPosition": {
			"x": 159017.36,
			"y": 2578.9138,
			"z": 52839.703
		},
		"killerVelocity": {
			"x": 396.7554,
			"y": -58.806705,
			"z": 61.16495
		},
		"victimVelocity": {
			"x": -14.876408,
			"y": -41.450592,
			"z": 174.73572
		}
	}, {
		"_id": {
			"$oid": "63ae43b6109c9d48f459c734"
		},
		"id": "4fd66dbc-4fc1-4418-975f-e216ea44f627",
		"time": {
			"$numberLong": "1672364982438"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199044698969",
		"killerId": "76561199082776306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60912.324,
			"y": 1866.7324,
			"z": 112974.97
		},
		"victimPosition": {
			"x": 71941.5,
			"y": 1790.2803,
			"z": 100699.49
		},
		"killerVelocity": {
			"x": 62.58123,
			"y": 24.246523,
			"z": -97.555916
		},
		"victimVelocity": {
			"x": 113.50914,
			"y": 51.062557,
			"z": -251.9246
		}
	}, {
		"_id": {
			"$oid": "63ae78c8109c9d48f459cc0d"
		},
		"id": "5bd0ebb0-ce41-426e-ac77-5bfdb754c054",
		"time": {
			"$numberLong": "1672378568663"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199122240525",
		"killerId": "76561198141976044",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56000.793,
			"y": 1545.3273,
			"z": 96942.36
		},
		"victimPosition": {
			"x": 55530.32,
			"y": 1067.9117,
			"z": 98023.51
		},
		"killerVelocity": {
			"x": -117.618576,
			"y": -82.74105,
			"z": 209.91887
		},
		"victimVelocity": {
			"x": -92.547714,
			"y": -101.21022,
			"z": 228.28969
		}
	}, {
		"_id": {
			"$oid": "63ae8136109c9d48f459cca6"
		},
		"id": "85b63bf5-afa8-40d2-b937-1bf58277ada4",
		"time": {
			"$numberLong": "1672380726010"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198910925585",
		"killerId": "76561198880556557",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87235.414,
			"y": 7900.728,
			"z": 82846.7
		},
		"victimPosition": {
			"x": 98353.78,
			"y": 2026.6393,
			"z": 79185.6
		},
		"killerVelocity": {
			"x": 296.23624,
			"y": 66.221535,
			"z": -266.56253
		},
		"victimVelocity": {
			"x": 90.11871,
			"y": 28.560545,
			"z": -207.14012
		}
	}, {
		"_id": {
			"$oid": "63ae9cc6109c9d48f459ce65"
		},
		"id": "e78fdd07-e8fa-40f0-9884-de43db05f877",
		"time": {
			"$numberLong": "1672387782330"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198879988455",
		"killerId": "76561199402358392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50934.89,
			"y": 420.48428,
			"z": 118240.586
		},
		"victimPosition": {
			"x": 52640.11,
			"y": 281.97873,
			"z": 118773.586
		},
		"killerVelocity": {
			"x": -57.24176,
			"y": 24.471167,
			"z": -49.732616
		},
		"victimVelocity": {
			"x": 89.604645,
			"y": 3.3000114,
			"z": 33.08764
		}
	}, {
		"_id": {
			"$oid": "63ae9d3d109c9d48f459ce74"
		},
		"id": "9a541f27-3e06-46cd-8ca5-3842f2744fa6",
		"time": {
			"$numberLong": "1672387901484"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198879988455",
		"killerId": "76561199402358392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 47529.305,
			"y": 1087.5815,
			"z": 115195.02
		},
		"victimPosition": {
			"x": 47761.637,
			"y": 626.0141,
			"z": 118823.445
		},
		"killerVelocity": {
			"x": 182.84827,
			"y": -54.857285,
			"z": 229.55699
		},
		"victimVelocity": {
			"x": 81.50772,
			"y": -66.50946,
			"z": 86.90805
		}
	}, {
		"_id": {
			"$oid": "63aea4cc109c9d48f459ced2"
		},
		"id": "790e4beb-7218-488a-9a31-e0c3f299200e",
		"time": {
			"$numberLong": "1672389836218"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199065193280",
		"killerId": "76561198879988455",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60033.793,
			"y": 870.48114,
			"z": 116421.52
		},
		"victimPosition": {
			"x": 60737.387,
			"y": 718.0168,
			"z": 117746.51
		},
		"killerVelocity": {
			"x": 214.46109,
			"y": -45.784042,
			"z": 136.1714
		},
		"victimVelocity": {
			"x": -161.7981,
			"y": 17.92528,
			"z": 184.76268
		}
	}, {
		"_id": {
			"$oid": "63aea7c2109c9d48f459cf08"
		},
		"id": "b25146fc-b1c7-4f6a-9bb7-1f1a9f2b7dd4",
		"time": {
			"$numberLong": "1672390594070"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199455604616",
		"killerId": "76561198945637389",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90658.11,
			"y": 1598.6171,
			"z": 86156.89
		},
		"victimPosition": {
			"x": 90309.6,
			"y": 825.86176,
			"z": 85921.12
		},
		"killerVelocity": {
			"x": 337.8636,
			"y": 10.97864,
			"z": -145.2375
		},
		"victimVelocity": {
			"x": -262.35297,
			"y": 10.5593815,
			"z": 26.051788
		}
	}, {
		"_id": {
			"$oid": "63aeb195109c9d48f459cff9"
		},
		"id": "e1de6584-49f9-42cb-856a-a29879fbbe03",
		"time": {
			"$numberLong": "1672393109234"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198945637389",
		"killerId": "76561197994830964",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74083.77,
			"y": 1760.4501,
			"z": 87218.71
		},
		"victimPosition": {
			"x": 73572.84,
			"y": 1493.9178,
			"z": 85229.234
		},
		"killerVelocity": {
			"x": -131.58368,
			"y": 28.144983,
			"z": -217.19576
		},
		"victimVelocity": {
			"x": 272.2111,
			"y": -23.876947,
			"z": -131.48978
		}
	}, {
		"_id": {
			"$oid": "63aed006109c9d48f459d234"
		},
		"id": "7864366c-9e49-4b12-91f0-3bcdead46be5",
		"time": {
			"$numberLong": "1672400902172"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198996168815",
		"killerId": "76561199013154936",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61194.1,
			"y": 1085.1497,
			"z": 110991.71
		},
		"victimPosition": {
			"x": 62687.77,
			"y": 1187.4845,
			"z": 105343.516
		},
		"killerVelocity": {
			"x": 143.28197,
			"y": -5.982404,
			"z": -194.25368
		},
		"victimVelocity": {
			"x": -225.42351,
			"y": 10.1576805,
			"z": -15.886869
		}
	}, {
		"_id": {
			"$oid": "63aed54b109c9d48f459d292"
		},
		"id": "49c83e70-f98a-4f76-9a7d-ba98a3e1a0e5",
		"time": {
			"$numberLong": "1672402251293"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198321357998",
		"killerId": "76561199260468673",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55743.156,
			"y": 961.16956,
			"z": 113594.23
		},
		"victimPosition": {
			"x": 57897.72,
			"y": 1696.3208,
			"z": 111501.67
		},
		"killerVelocity": {
			"x": 149.06522,
			"y": 11.329758,
			"z": -245.61098
		},
		"victimVelocity": {
			"x": 239.96555,
			"y": 10.711055,
			"z": -70.38908
		}
	}, {
		"_id": {
			"$oid": "63aedb91109c9d48f459d30d"
		},
		"id": "342d76d5-60fc-4600-9837-c61d5ab7c76b",
		"time": {
			"$numberLong": "1672403857655"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199260468673",
		"killerId": "76561198418370111",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 103195.484,
			"y": 2090.7585,
			"z": 64779.812
		},
		"victimPosition": {
			"x": 106758.57,
			"y": 3271.6057,
			"z": 66698.99
		},
		"killerVelocity": {
			"x": 197.07797,
			"y": 32.88074,
			"z": 78.335266
		},
		"victimVelocity": {
			"x": -5.4291973,
			"y": 20.159784,
			"z": -1.1355284
		}
	}, {
		"_id": {
			"$oid": "63aef912109c9d48f459d535"
		},
		"id": "4ab7579c-1ac0-43d6-bb72-292f6627bb03",
		"time": {
			"$numberLong": "1672411410604"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198393340144",
		"killerId": "76561198799583715",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 155001.94,
			"y": 2783.1401,
			"z": 60224.84
		},
		"victimPosition": {
			"x": 155147.39,
			"y": 2508.598,
			"z": 57381.918
		},
		"killerVelocity": {
			"x": 47.624615,
			"y": -22.68263,
			"z": -322.48224
		},
		"victimVelocity": {
			"x": -314.4272,
			"y": 97.19239,
			"z": 36.816784
		}
	}, {
		"_id": {
			"$oid": "63af00b6109c9d48f459d5d6"
		},
		"id": "8c2dd546-1224-4bbe-9a0e-a31ccd86406d",
		"time": {
			"$numberLong": "1672413366483"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198144441716",
		"killerId": "76561199110963905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55333,
			"y": 713.466,
			"z": 119365.05
		},
		"victimPosition": {
			"x": 56034.066,
			"y": 916.23474,
			"z": 119325.78
		},
		"killerVelocity": {
			"x": 211.28876,
			"y": 57.545822,
			"z": -31.847061
		},
		"victimVelocity": {
			"x": 190.66228,
			"y": 32.719246,
			"z": -21.73986
		}
	}, {
		"_id": {
			"$oid": "63af0108109c9d48f459d5da"
		},
		"id": "b2518810-b398-4528-9b6b-aa94d75ff41b",
		"time": {
			"$numberLong": "1672413448027"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199075900731",
		"killerId": "76561199110963905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69016.016,
			"y": 3856.995,
			"z": 100397.11
		},
		"victimPosition": {
			"x": 72309.36,
			"y": 3815.346,
			"z": 91418.47
		},
		"killerVelocity": {
			"x": 123.78389,
			"y": 11.512194,
			"z": -367.8145
		},
		"victimVelocity": {
			"x": -34.78985,
			"y": -105.45332,
			"z": 154.3139
		}
	}, {
		"_id": {
			"$oid": "63af07ac109c9d48f459d64f"
		},
		"id": "75b7def8-b7a9-4da1-b6d6-224a5b53f51b",
		"time": {
			"$numberLong": "1672415148983"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199029487428",
		"killerId": "76561198393340144",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 149727.1,
			"y": 1655.8833,
			"z": 44838.746
		},
		"victimPosition": {
			"x": 149526.16,
			"y": 1905.5471,
			"z": 42653.742
		},
		"killerVelocity": {
			"x": 100.791985,
			"y": -40.761852,
			"z": -166.14598
		},
		"victimVelocity": {
			"x": -41.54681,
			"y": 2.6483805,
			"z": -135.59306
		}
	}, {
		"_id": {
			"$oid": "63af0b9e109c9d48f459d682"
		},
		"id": "a4822319-7b77-4999-a5c1-c9c83f79d8ca",
		"time": {
			"$numberLong": "1672416158582"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198393340144",
		"killerId": "76561199057914312",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65594.23,
			"y": 1644.4768,
			"z": 90555.8
		},
		"victimPosition": {
			"x": 64092.895,
			"y": 2227.6257,
			"z": 87649.02
		},
		"killerVelocity": {
			"x": 20.471956,
			"y": 36.00524,
			"z": -288.13727
		},
		"victimVelocity": {
			"x": -149.5604,
			"y": -142.60547,
			"z": 209.8682
		}
	}, {
		"_id": {
			"$oid": "63af1e6f109c9d48f459d7f6"
		},
		"id": "10fadbf7-2db1-4714-ac65-779735013c2b",
		"time": {
			"$numberLong": "1672420975805"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199192436164",
		"killerId": "76561199449543755",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70777.61,
			"y": 1389.0475,
			"z": 112432.516
		},
		"victimPosition": {
			"x": 72506.48,
			"y": 1664.9713,
			"z": 111904.24
		},
		"killerVelocity": {
			"x": 103.90275,
			"y": -134.26534,
			"z": 10.528613
		},
		"victimVelocity": {
			"x": 27.46928,
			"y": 76.56091,
			"z": 122.55617
		}
	}, {
		"_id": {
			"$oid": "63af2f0f109c9d48f459d94e"
		},
		"id": "4e481ad1-8a18-44d8-96a0-eca9fc3a2263",
		"time": {
			"$numberLong": "1672425231384"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198392426247",
		"killerId": "76561199466028344",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66759.03,
			"y": 1798.2277,
			"z": 91116.836
		},
		"victimPosition": {
			"x": 67876.18,
			"y": 1760.5878,
			"z": 89363.04
		},
		"killerVelocity": {
			"x": 179.66759,
			"y": -54.39437,
			"z": -281.6237
		},
		"victimVelocity": {
			"x": -59.013588,
			"y": -88.84669,
			"z": -62.42567
		}
	}, {
		"_id": {
			"$oid": "63af390c109c9d48f459da23"
		},
		"id": "1daa2a8b-f13d-410a-924e-bef6629e16df",
		"time": {
			"$numberLong": "1672427788981"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198126285727",
		"killerId": "76561199055050866",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55883.008,
			"y": 792.09766,
			"z": 116908.7
		},
		"victimPosition": {
			"x": 56653.605,
			"y": 1516.4619,
			"z": 114981.06
		},
		"killerVelocity": {
			"x": 53.768547,
			"y": 24.053408,
			"z": -106.37805
		},
		"victimVelocity": {
			"x": 49.077232,
			"y": 33.523678,
			"z": -226.25018
		}
	}, {
		"_id": {
			"$oid": "63af3938109c9d48f459da29"
		},
		"id": "263029b7-cfa3-4a0a-930a-670c3aa0bb40",
		"time": {
			"$numberLong": "1672427832954"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199096770244",
		"killerId": "76561199055050866",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58444.06,
			"y": 984.9625,
			"z": 115163.15
		},
		"victimPosition": {
			"x": 58850.727,
			"y": 2380.557,
			"z": 118604.65
		},
		"killerVelocity": {
			"x": 14.569586,
			"y": 50.244755,
			"z": 159.72069
		},
		"victimVelocity": {
			"x": 211.71402,
			"y": 90.40984,
			"z": -48.62623
		}
	}, {
		"_id": {
			"$oid": "63af4436109c9d48f459db01"
		},
		"id": "925ba13a-ed6c-41eb-80bc-692bcc998fab",
		"time": {
			"$numberLong": "1672430646241"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199144971802",
		"killerId": "76561199119586237",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 146560.31,
			"y": 6116.8667,
			"z": 52693.566
		},
		"victimPosition": {
			"x": 146540.58,
			"y": 4927.2686,
			"z": 58689.38
		},
		"killerVelocity": {
			"x": 146.39754,
			"y": -42.246323,
			"z": 77.740135
		},
		"victimVelocity": {
			"x": 23.34799,
			"y": -258.62125,
			"z": -36.053192
		}
	}, {
		"_id": {
			"$oid": "63af4ab9109c9d48f459db9a"
		},
		"id": "14d1983b-134e-4b1a-a791-80aae0934340",
		"time": {
			"$numberLong": "1672432313136"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198015500841",
		"killerId": "76561198945637389",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100395.3,
			"y": 3022.4326,
			"z": 79561.68
		},
		"victimPosition": {
			"x": 104522.805,
			"y": 3514.986,
			"z": 78700.766
		},
		"killerVelocity": {
			"x": 237.47041,
			"y": -49.049694,
			"z": -61.615498
		},
		"victimVelocity": {
			"x": -172.19449,
			"y": -246.88406,
			"z": -59.32652
		}
	}, {
		"_id": {
			"$oid": "63af6266109c9d48f459dddb"
		},
		"id": "39575c58-8c8f-43d9-b39f-668b5e2627f5",
		"time": {
			"$numberLong": "1672438374714"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198346457012",
		"killerId": "76561198945637389",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88526.65,
			"y": 1451.732,
			"z": 55500.883
		},
		"victimPosition": {
			"x": 85537.35,
			"y": 688.405,
			"z": 54706.1
		},
		"killerVelocity": {
			"x": 8.152563,
			"y": -85.540886,
			"z": -350.6269
		},
		"victimVelocity": {
			"x": -77.792465,
			"y": 32.89561,
			"z": -58.683857
		}
	}, {
		"_id": {
			"$oid": "63af672b109c9d48f459de33"
		},
		"id": "ec74e101-6e94-44c4-bfde-3aafeede076e",
		"time": {
			"$numberLong": "1672439595426"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198346457012",
		"killerId": "76561198136011937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 106389.36,
			"y": 2233.4363,
			"z": 55727.492
		},
		"victimPosition": {
			"x": 104702.695,
			"y": 2322.754,
			"z": 54409.465
		},
		"killerVelocity": {
			"x": -277.09283,
			"y": 36.62654,
			"z": -223.18893
		},
		"victimVelocity": {
			"x": -362.25583,
			"y": 44.34413,
			"z": -126.96329
		}
	}, {
		"_id": {
			"$oid": "63af6cce109c9d48f459deb1"
		},
		"id": "d0994d25-aa4e-47b7-81b8-3639c90d733b",
		"time": {
			"$numberLong": "1672441038720"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198346457012",
		"killerId": "76561199373422279",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108280.7,
			"y": 1366.5859,
			"z": 63830.227
		},
		"victimPosition": {
			"x": 107018.1,
			"y": 2179.5435,
			"z": 63689.094
		},
		"killerVelocity": {
			"x": -129.60202,
			"y": -223.75136,
			"z": 204.98625
		},
		"victimVelocity": {
			"x": -117.22826,
			"y": -69.22173,
			"z": -25.911646
		}
	}, {
		"_id": {
			"$oid": "63af733b109c9d48f459df46"
		},
		"id": "6d1ce140-200a-4175-9eae-01d93c4fa86f",
		"time": {
			"$numberLong": "1672442683572"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198254217939",
		"killerId": "76561198263783408",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87821.734,
			"y": 1036.8345,
			"z": 97876.164
		},
		"victimPosition": {
			"x": 84844.516,
			"y": 1690.453,
			"z": 97771.1
		},
		"killerVelocity": {
			"x": 157.6815,
			"y": -2.8645375,
			"z": 45.40839
		},
		"victimVelocity": {
			"x": -231.28804,
			"y": -15.319451,
			"z": -31.133644
		}
	}, {
		"_id": {
			"$oid": "63af78b5109c9d48f459dfdf"
		},
		"id": "1f0ad193-94fe-45f7-b218-9d1ed141ba69",
		"time": {
			"$numberLong": "1672444085555"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198162340088",
		"killerId": "76561198136011937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114897.99,
			"y": 3356.7368,
			"z": 60636.516
		},
		"victimPosition": {
			"x": 120445.484,
			"y": 1836.256,
			"z": 61075.863
		},
		"killerVelocity": {
			"x": 345.28482,
			"y": -43.202847,
			"z": -149.45009
		},
		"victimVelocity": {
			"x": -18.73604,
			"y": -16.991587,
			"z": 205.93452
		}
	}, {
		"_id": {
			"$oid": "63af830f109c9d48f459e0e5"
		},
		"id": "c8c52066-5ae2-4ee8-9938-7da57bc0ccb2",
		"time": {
			"$numberLong": "1672446735265"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198195729671",
		"killerId": "76561199044685534",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57733.785,
			"y": 1351.8607,
			"z": 109806.95
		},
		"victimPosition": {
			"x": 58341.293,
			"y": 956.0592,
			"z": 103203.28
		},
		"killerVelocity": {
			"x": 39.846436,
			"y": 70.48496,
			"z": -264.56268
		},
		"victimVelocity": {
			"x": 96.204384,
			"y": 14.045351,
			"z": -305.41522
		}
	}, {
		"_id": {
			"$oid": "63af84bd109c9d48f459e10c"
		},
		"id": "8d065a12-ed66-4b91-86e4-c96db9adada5",
		"time": {
			"$numberLong": "1672447165466"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199044685534",
		"killerId": "76561198872506280",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57025.42,
			"y": 777.24347,
			"z": 113613.664
		},
		"victimPosition": {
			"x": 55404.902,
			"y": 873.0662,
			"z": 113603.29
		},
		"killerVelocity": {
			"x": -219.62605,
			"y": -2.7798452,
			"z": 55.1223
		},
		"victimVelocity": {
			"x": 180.26,
			"y": 23.968842,
			"z": -125.428474
		}
	}, {
		"_id": {
			"$oid": "63af8815109c9d48f459e15c"
		},
		"id": "cdf09fec-cace-49a7-a561-dd0dc23b5095",
		"time": {
			"$numberLong": "1672448021190"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199209664767",
		"killerId": "76561199085941522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55122.297,
			"y": 880.6974,
			"z": 119172.79
		},
		"victimPosition": {
			"x": 55987.984,
			"y": 263.33383,
			"z": 118986.59
		},
		"killerVelocity": {
			"x": -201.54668,
			"y": -72.614525,
			"z": -38.93363
		},
		"victimVelocity": {
			"x": 105.439255,
			"y": 2.3722594,
			"z": -42.29125
		}
	}, {
		"_id": {
			"$oid": "63af881e109c9d48f459e15e"
		},
		"id": "8327c956-0400-4a9d-8dfb-6d5776b6ee3b",
		"time": {
			"$numberLong": "1672448030491"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199103499682",
		"killerId": "76561199085941522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52816.008,
			"y": 423.1264,
			"z": 118892.65
		},
		"victimPosition": {
			"x": 50656.066,
			"y": 279.45694,
			"z": 118436.3
		},
		"killerVelocity": {
			"x": -285.62964,
			"y": -24.44235,
			"z": -36.416824
		},
		"victimVelocity": {
			"x": 3.5795732,
			"y": 0.09927737,
			"z": -5.316181
		}
	}, {
		"_id": {
			"$oid": "63af98a2109c9d48f459e2ba"
		},
		"id": "a6a66cb2-b9da-450b-ac77-efd564fbae3a",
		"time": {
			"$numberLong": "1672452258734"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199224499394",
		"killerId": "76561199465324188",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73292.97,
			"y": 2038.036,
			"z": 93378.836
		},
		"victimPosition": {
			"x": 71297.055,
			"y": 1851.9307,
			"z": 92375.22
		},
		"killerVelocity": {
			"x": -93.46563,
			"y": 21.393171,
			"z": -216.4177
		},
		"victimVelocity": {
			"x": -248.19745,
			"y": -49.86143,
			"z": 183.95638
		}
	}, {
		"_id": {
			"$oid": "63afd9a9109c9d48f459e887"
		},
		"id": "2f8c23e5-189e-43f6-b4c5-38455a7d13b2",
		"time": {
			"$numberLong": "1672468905628"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199065193280",
		"killerId": "76561198142450548",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87629,
			"y": 1382.2208,
			"z": 83474.36
		},
		"victimPosition": {
			"x": 83583.99,
			"y": 1921.9083,
			"z": 70939.52
		},
		"killerVelocity": {
			"x": -35.28126,
			"y": 47.127487,
			"z": -164.02339
		},
		"victimVelocity": {
			"x": 175.90858,
			"y": -12.028146,
			"z": -225.53479
		}
	}, {
		"_id": {
			"$oid": "63aff236d0f1444f756ae22b"
		},
		"id": "944aae9b-a87f-457a-8e4b-1c0eed2170fe",
		"time": {
			"$numberLong": "1672475190028"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198945637389",
		"killerId": "76561198021172526",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82842.44,
			"y": 2870.51,
			"z": 65178.305
		},
		"victimPosition": {
			"x": 89759.305,
			"y": 2567.559,
			"z": 62501.223
		},
		"killerVelocity": {
			"x": 276.04218,
			"y": -1.4219435,
			"z": -254.22678
		},
		"victimVelocity": {
			"x": 162.64082,
			"y": 5.599034,
			"z": -13.851122
		}
	}, {
		"_id": {
			"$oid": "63affb45d0f1444f756ae2df"
		},
		"id": "956432dc-8c26-40c1-83f4-0a61cd6c70af",
		"time": {
			"$numberLong": "1672477509455"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198945637389",
		"killerId": "76561198153880213",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96105.055,
			"y": 1358.0112,
			"z": 87908.125
		},
		"victimPosition": {
			"x": 96312.22,
			"y": 1857.6155,
			"z": 87570.6
		},
		"killerVelocity": {
			"x": 32.038914,
			"y": 44.610687,
			"z": -41.597187
		},
		"victimVelocity": {
			"x": -86.533554,
			"y": -196.05585,
			"z": 139.89267
		}
	}, {
		"_id": {
			"$oid": "63b01c25d0f1444f756ae4ba"
		},
		"id": "e8f56ccd-e0ea-4d88-a016-aaa4eb101a92",
		"time": {
			"$numberLong": "1672485925338"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197985512589",
		"killerId": "76561198453883502",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58004.336,
			"y": 707.16437,
			"z": 113009.89
		},
		"victimPosition": {
			"x": 60571.707,
			"y": 1101.5892,
			"z": 112111.86
		},
		"killerVelocity": {
			"x": 322.1769,
			"y": 60.00862,
			"z": -117.660126
		},
		"victimVelocity": {
			"x": -72.8681,
			"y": -21.207817,
			"z": 78.04642
		}
	}, {
		"_id": {
			"$oid": "63b01d3bd0f1444f756ae4c4"
		},
		"id": "0e8e3ab6-c8b0-427b-bc5b-cd8305676905",
		"time": {
			"$numberLong": "1672486203086"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198034784905",
		"killerId": "76561199093991606",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 121990.42,
			"y": 2294.8408,
			"z": 38126.664
		},
		"victimPosition": {
			"x": 121350.67,
			"y": 2442.8987,
			"z": 39264.395
		},
		"killerVelocity": {
			"x": -171.07109,
			"y": 65.33022,
			"z": 291.58014
		},
		"victimVelocity": {
			"x": -239.66618,
			"y": 6.415274,
			"z": 249.29681
		}
	}, {
		"_id": {
			"$oid": "63b01d53d0f1444f756ae4c6"
		},
		"id": "0648b29b-50a4-419e-8289-8931540908ae",
		"time": {
			"$numberLong": "1672486227157"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197985512589",
		"killerId": "76561198453883502",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50918.78,
			"y": 1164.3635,
			"z": 114558.22
		},
		"victimPosition": {
			"x": 52282.652,
			"y": 1063.4624,
			"z": 113695.9
		},
		"killerVelocity": {
			"x": 148.89581,
			"y": -2.2448244,
			"z": -74.32937
		},
		"victimVelocity": {
			"x": 176.74971,
			"y": -109.413666,
			"z": -140.78342
		}
	}, {
		"_id": {
			"$oid": "63b03dbcd0f1444f756ae6e6"
		},
		"id": "448f3884-f89b-4329-b424-c2d2ca47f0c8",
		"time": {
			"$numberLong": "1672494524862"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198393340144",
		"killerId": "76561198321838899",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105541.15,
			"y": 3528.2273,
			"z": 94799.9
		},
		"victimPosition": {
			"x": 109337.914,
			"y": 5362.5728,
			"z": 93038.64
		},
		"killerVelocity": {
			"x": 59.061913,
			"y": -235.6589,
			"z": -82.97331
		},
		"victimVelocity": {
			"x": 159.19637,
			"y": -121.87538,
			"z": 199.09048
		}
	}, {
		"_id": {
			"$oid": "63b054f5d0f1444f756ae841"
		},
		"id": "0b069cfd-f04c-49b3-a8c3-e7aed40649f4",
		"time": {
			"$numberLong": "1672500469595"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198086069372",
		"killerId": "76561199227027875",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54832.86,
			"y": 446.83517,
			"z": 119513.96
		},
		"victimPosition": {
			"x": 58090.254,
			"y": 285.47687,
			"z": 120326.81
		},
		"killerVelocity": {
			"x": 231.9833,
			"y": -17.657335,
			"z": 93.87024
		},
		"victimVelocity": {
			"x": 117.06302,
			"y": 8.383717,
			"z": -96.44301
		}
	}, {
		"_id": {
			"$oid": "63b055c9d0f1444f756ae851"
		},
		"id": "e9b12c77-ca9f-4081-a633-f1785e28ad1e",
		"time": {
			"$numberLong": "1672500681197"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199161806225",
		"killerId": "76561198086069372",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59139.184,
			"y": 1003.0332,
			"z": 115828.04
		},
		"victimPosition": {
			"x": 59683.098,
			"y": 284.1535,
			"z": 116113.97
		},
		"killerVelocity": {
			"x": -83.77239,
			"y": 0.8793581,
			"z": -150.40784
		},
		"victimVelocity": {
			"x": 20.683422,
			"y": -55.83577,
			"z": -54.01714
		}
	}, {
		"_id": {
			"$oid": "63b076bbd0f1444f756aeafd"
		},
		"id": "0fc9414b-172f-48a0-95f6-3aca2e5700b0",
		"time": {
			"$numberLong": "1672509115562"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199157478873",
		"killerId": "76561199092678524",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57281.516,
			"y": 1904.2083,
			"z": 131660.66
		},
		"victimPosition": {
			"x": 45250.246,
			"y": 1544.0222,
			"z": 117639.51
		},
		"killerVelocity": {
			"x": -42.767525,
			"y": 5.3756814,
			"z": 285.28687
		},
		"victimVelocity": {
			"x": -100.1891,
			"y": -96.36075,
			"z": -76.77141
		}
	}, {
		"_id": {
			"$oid": "63b07ad3d0f1444f756aeb55"
		},
		"id": "940a4847-8f69-4bf4-8080-8ee1d3f5d17c",
		"time": {
			"$numberLong": "1672510163273"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198039870838",
		"killerId": "76561198239105244",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85007.32,
			"y": 2355.3992,
			"z": 79081.15
		},
		"victimPosition": {
			"x": 84400.445,
			"y": 2527.8186,
			"z": 77922.266
		},
		"killerVelocity": {
			"x": -66.477135,
			"y": 28.256195,
			"z": -262.84464
		},
		"victimVelocity": {
			"x": -281.0353,
			"y": 33.009354,
			"z": 20.908503
		}
	}, {
		"_id": {
			"$oid": "63b089c0d0f1444f756aec52"
		},
		"id": "dc317c74-c844-40c0-8e5e-31fb980763d2",
		"time": {
			"$numberLong": "1672513984915"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199210807311",
		"killerId": "76561198336186833",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66445.11,
			"y": 3040.0884,
			"z": 109623.484
		},
		"victimPosition": {
			"x": 67834.625,
			"y": 2195.4324,
			"z": 110475.33
		},
		"killerVelocity": {
			"x": -166.23781,
			"y": -33.830185,
			"z": -315.32272
		},
		"victimVelocity": {
			"x": 103.76351,
			"y": -111.988884,
			"z": -91.68396
		}
	}, {
		"_id": {
			"$oid": "63b08b0fd0f1444f756aec66"
		},
		"id": "8536c862-6108-4bd0-bd25-f189e383758c",
		"time": {
			"$numberLong": "1672514319298"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198256453647",
		"killerId": "76561198996561970",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72575.11,
			"y": 1294.7632,
			"z": 113511.75
		},
		"victimPosition": {
			"x": 73802.23,
			"y": 1269.4534,
			"z": 111201.2
		},
		"killerVelocity": {
			"x": 230.94606,
			"y": 6.7841134,
			"z": -168.45074
		},
		"victimVelocity": {
			"x": 188.17506,
			"y": 18.991425,
			"z": -208.2572
		}
	}, {
		"_id": {
			"$oid": "63b08b56d0f1444f756aec69"
		},
		"id": "49a27f80-416d-4c57-baac-31965394012f",
		"time": {
			"$numberLong": "1672514390808"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198336186833",
		"killerId": "76561198996561970",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75505.484,
			"y": 819.34845,
			"z": 109259.695
		},
		"victimPosition": {
			"x": 76678.63,
			"y": 853.6184,
			"z": 110966.57
		},
		"killerVelocity": {
			"x": 154.46927,
			"y": 18.709631,
			"z": -66.38995
		},
		"victimVelocity": {
			"x": 165.53592,
			"y": -2.6537154,
			"z": 81.844406
		}
	}, {
		"_id": {
			"$oid": "63b09633d0f1444f756aed6b"
		},
		"id": "eefdcadd-b5bd-41cc-a1d4-509f22176d32",
		"time": {
			"$numberLong": "1672517171901"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199024630122",
		"killerId": "76561198982932902",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94246.58,
			"y": 636.5925,
			"z": 71900.46
		},
		"victimPosition": {
			"x": 109822.98,
			"y": 1219.8358,
			"z": 79458.38
		},
		"killerVelocity": {
			"x": -70.4651,
			"y": -66.58879,
			"z": -207.85283
		},
		"victimVelocity": {
			"x": 169.4691,
			"y": -66.89812,
			"z": 50.170162
		}
	}, {
		"_id": {
			"$oid": "63b0b194d0f1444f756aef9f"
		},
		"id": "896d934c-8704-4134-b227-d1a6c7da188e",
		"time": {
			"$numberLong": "1672524180404"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199228821954",
		"killerId": "76561198194839267",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72817.07,
			"y": 1878.7085,
			"z": 105774.59
		},
		"victimPosition": {
			"x": 73439.516,
			"y": 1739.59,
			"z": 104758.11
		},
		"killerVelocity": {
			"x": 160.72,
			"y": 15.225194,
			"z": -270.93652
		},
		"victimVelocity": {
			"x": 147.34082,
			"y": -53.572605,
			"z": -277.5804
		}
	}, {
		"_id": {
			"$oid": "63b0bdc2d0f1444f756af067"
		},
		"id": "3c03ec19-5921-492e-9316-3b560050d025",
		"time": {
			"$numberLong": "1672527298077"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198999107761",
		"killerId": "76561198849831226",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67886.086,
			"y": 1374.1866,
			"z": 109401.805
		},
		"victimPosition": {
			"x": 51582.79,
			"y": 279.3357,
			"z": 118033.64
		},
		"killerVelocity": {
			"x": 279.5361,
			"y": 16.429146,
			"z": -251.2138
		},
		"victimVelocity": {
			"x": 13.214419,
			"y": 0.17508063,
			"z": -26.54647
		}
	}, {
		"_id": {
			"$oid": "63b0c7afd0f1444f756af106"
		},
		"id": "b0558a82-10e6-48f8-9751-d832157a77f3",
		"time": {
			"$numberLong": "1672529839544"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198188101630",
		"killerId": "76561198887357103",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95440.625,
			"y": 2115.3394,
			"z": 63345.453
		},
		"victimPosition": {
			"x": 95655.016,
			"y": 2083.9624,
			"z": 63519.2
		},
		"killerVelocity": {
			"x": 257.99823,
			"y": -72.06681,
			"z": 149.51495
		},
		"victimVelocity": {
			"x": 118.37003,
			"y": -41.929283,
			"z": 10.107682
		}
	}, {
		"_id": {
			"$oid": "63b0c849d0f1444f756af113"
		},
		"id": "3b95b1a3-9d58-4d72-99aa-e64e86bd043f",
		"time": {
			"$numberLong": "1672529993946"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199084389693",
		"killerId": "76561198188101630",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63086.363,
			"y": 1170.562,
			"z": 119510.86
		},
		"victimPosition": {
			"x": 67869.555,
			"y": 953.2059,
			"z": 120003
		},
		"killerVelocity": {
			"x": 251.12155,
			"y": -19.505655,
			"z": 33.74963
		},
		"victimVelocity": {
			"x": -194.0782,
			"y": -33.918705,
			"z": -23.087486
		}
	}, {
		"_id": {
			"$oid": "63b0c8dbd0f1444f756af11e"
		},
		"id": "d27760f2-3fd8-4468-89b1-30c48dd79469",
		"time": {
			"$numberLong": "1672530139650"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198823281550",
		"killerId": "76561198188101630",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85386.84,
			"y": 2269.0784,
			"z": 85921.79
		},
		"victimPosition": {
			"x": 86223.46,
			"y": 2424.676,
			"z": 85364.41
		},
		"killerVelocity": {
			"x": 338.30365,
			"y": 65.2505,
			"z": -93.81048
		},
		"victimVelocity": {
			"x": 130.11473,
			"y": 78.684875,
			"z": -183.44574
		}
	}, {
		"_id": {
			"$oid": "63b0c930d0f1444f756af126"
		},
		"id": "9a3cc2d0-f570-443a-bef8-ed56f36a8097",
		"time": {
			"$numberLong": "1672530224355"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198274021099",
		"killerId": "76561199084940935",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59637.594,
			"y": 1713.2223,
			"z": 114089.61
		},
		"victimPosition": {
			"x": 62983.715,
			"y": 2655.8704,
			"z": 111098.95
		},
		"killerVelocity": {
			"x": 188.4412,
			"y": 40.70907,
			"z": -201.13367
		},
		"victimVelocity": {
			"x": -187.16959,
			"y": -22.42428,
			"z": 304.6798
		}
	}, {
		"_id": {
			"$oid": "63b0c930d0f1444f756af128"
		},
		"id": "72e1c410-ed12-4f60-a990-63acd3da5570",
		"time": {
			"$numberLong": "1672530224740"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199084940935",
		"killerId": "76561198274021099",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62915.414,
			"y": 2647.0518,
			"z": 111210.14
		},
		"victimPosition": {
			"x": 59709.96,
			"y": 1729.3126,
			"z": 114014.9
		},
		"killerVelocity": {
			"x": -185.45099,
			"y": -25.655533,
			"z": 301.8808
		},
		"victimVelocity": {
			"x": 194.15204,
			"y": 44.152008,
			"z": -194.98222
		}
	}, {
		"_id": {
			"$oid": "63b0cb6cd0f1444f756af157"
		},
		"id": "fe75bd20-3fad-44e5-a107-c297d37f7d3d",
		"time": {
			"$numberLong": "1672530796006"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198140685704",
		"killerId": "76561198887357103",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61484.668,
			"y": 918.0245,
			"z": 113915.04
		},
		"victimPosition": {
			"x": 60534.41,
			"y": 1319.9924,
			"z": 113832.36
		},
		"killerVelocity": {
			"x": -184.6285,
			"y": 22.439316,
			"z": 62.360085
		},
		"victimVelocity": {
			"x": 242.5517,
			"y": 85.30023,
			"z": -160.56888
		}
	}, {
		"_id": {
			"$oid": "63b0ccd5d0f1444f756af175"
		},
		"id": "a71ebe47-4735-4912-a311-7bc34b7a6322",
		"time": {
			"$numberLong": "1672531157964"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198846122469",
		"killerId": "76561199084940935",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58776.88,
			"y": 1359.6442,
			"z": 124686.8
		},
		"victimPosition": {
			"x": 56051.94,
			"y": 1281.5759,
			"z": 128547.68
		},
		"killerVelocity": {
			"x": -123.48314,
			"y": -0.42081198,
			"z": 280.36105
		},
		"victimVelocity": {
			"x": 121.0944,
			"y": 32.39065,
			"z": -301.18365
		}
	}, {
		"_id": {
			"$oid": "63b0e70fd0f1444f756af36c"
		},
		"id": "63f4d5df-0e9d-4632-b557-c9194273d0b8",
		"time": {
			"$numberLong": "1672537871765"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198138966440",
		"killerId": "76561198207787252",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72573.36,
			"y": 2036.4749,
			"z": 86669.57
		},
		"victimPosition": {
			"x": 75874.125,
			"y": 2856.8772,
			"z": 84795.53
		},
		"killerVelocity": {
			"x": 213.52646,
			"y": -33.631355,
			"z": -145.37117
		},
		"victimVelocity": {
			"x": -212.69751,
			"y": -45.399097,
			"z": 96.89725
		}
	}, {
		"_id": {
			"$oid": "63b0e715d0f1444f756af36e"
		},
		"id": "f8f4fea9-be11-4a5b-91cf-26a7eea924bb",
		"time": {
			"$numberLong": "1672537877370"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198207787252",
		"killerId": "76561198138966440",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74727.6,
			"y": 2458.2542,
			"z": 85326.61
		},
		"victimPosition": {
			"x": 73000.195,
			"y": 1771.2684,
			"z": 85488.945
		},
		"killerVelocity": {
			"x": -196.72508,
			"y": -95.09738,
			"z": 88.32321
		},
		"victimVelocity": {
			"x": 16.755686,
			"y": -58.44351,
			"z": -214.994
		}
	}, {
		"_id": {
			"$oid": "63b0e8f6d0f1444f756af397"
		},
		"id": "b67de3ae-532f-4082-8c4f-fa325df64338",
		"time": {
			"$numberLong": "1672538358508"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198122168645",
		"killerId": "76561199382116873",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62939.15,
			"y": 557.50916,
			"z": 110501.44
		},
		"victimPosition": {
			"x": 65634.93,
			"y": 264.4277,
			"z": 109149.984
		},
		"killerVelocity": {
			"x": 286.418,
			"y": -36.90191,
			"z": -228.17145
		},
		"victimVelocity": {
			"x": -76.21078,
			"y": -13.48484,
			"z": 182.51352
		}
	}, {
		"_id": {
			"$oid": "63b0ea81d0f1444f756af3a8"
		},
		"id": "961b96ff-89da-498f-aff3-857f04064bc3",
		"time": {
			"$numberLong": "1672538753683"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199382116873",
		"killerId": "76561198138966440",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74015.77,
			"y": 1013.6051,
			"z": 108190.086
		},
		"victimPosition": {
			"x": 75479.3,
			"y": 1336.8057,
			"z": 108649.05
		},
		"killerVelocity": {
			"x": 78.95059,
			"y": 24.39184,
			"z": 235.33427
		},
		"victimVelocity": {
			"x": 277.29303,
			"y": 112.75187,
			"z": -141.17273
		}
	}, {
		"_id": {
			"$oid": "63b0efded0f1444f756af3e9"
		},
		"id": "ccc44e41-8edd-406b-8ad6-261d3b176afc",
		"time": {
			"$numberLong": "1672540126095"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198122168645",
		"killerId": "76561198977069687",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56281.816,
			"y": 1348.4701,
			"z": 118979.61
		},
		"victimPosition": {
			"x": 55589.582,
			"y": 507.7131,
			"z": 117811
		},
		"killerVelocity": {
			"x": -229.15053,
			"y": -80.34449,
			"z": -63.785816
		},
		"victimVelocity": {
			"x": 123.65095,
			"y": 67.35038,
			"z": -6.527532
		}
	}, {
		"_id": {
			"$oid": "63b0f12cd0f1444f756af400"
		},
		"id": "b0874245-90b4-4256-a0c2-97df697eca9d",
		"time": {
			"$numberLong": "1672540460173"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199382116873",
		"killerId": "76561199209664767",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62753.984,
			"y": 1433.1086,
			"z": 109107.46
		},
		"victimPosition": {
			"x": 64185.11,
			"y": 940.9007,
			"z": 106965.57
		},
		"killerVelocity": {
			"x": -126.581436,
			"y": 14.471866,
			"z": -328.87787
		},
		"victimVelocity": {
			"x": 205.60648,
			"y": -7.2823477,
			"z": 215.82658
		}
	}, {
		"_id": {
			"$oid": "63b10d56d0f1444f756af646"
		},
		"id": "05960c34-4949-4aca-a15c-1c1a331c37a8",
		"time": {
			"$numberLong": "1672547670912"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199230141112",
		"killerId": "76561199030089501",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56026.62,
			"y": 1922.1088,
			"z": 106825.69
		},
		"victimPosition": {
			"x": 55825.22,
			"y": 2057.92,
			"z": 106102.5
		},
		"killerVelocity": {
			"x": -46.059853,
			"y": 19.815456,
			"z": -168.87405
		},
		"victimVelocity": {
			"x": -29.021809,
			"y": -52.518005,
			"z": -37.387596
		}
	}, {
		"_id": {
			"$oid": "63b11733d0f1444f756af6f3"
		},
		"id": "ba317b0f-caa3-4c82-97ad-af112797a86c",
		"time": {
			"$numberLong": "1672550195215"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199138223673",
		"killerId": "76561198846545659",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51519.13,
			"y": 279.42426,
			"z": 118714.68
		},
		"victimPosition": {
			"x": 51584.77,
			"y": 279.4752,
			"z": 118728.27
		},
		"killerVelocity": {
			"x": 81.266785,
			"y": 0.017013513,
			"z": 19.91665
		},
		"victimVelocity": {
			"x": 7.993732,
			"y": 0.00089570135,
			"z": -0.26556242
		}
	}, {
		"_id": {
			"$oid": "63b1176fd0f1444f756af6fd"
		},
		"id": "c9de4042-f63c-4d4c-ad75-17b1658cb71d",
		"time": {
			"$numberLong": "1672550255142"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199138223673",
		"killerId": "76561198846545659",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52669.01,
			"y": 462.8797,
			"z": 119015.49
		},
		"victimPosition": {
			"x": 52361.305,
			"y": 280.03046,
			"z": 118919.47
		},
		"killerVelocity": {
			"x": 139.23862,
			"y": 20.361317,
			"z": 39.352886
		},
		"victimVelocity": {
			"x": 79.74048,
			"y": 0.13995716,
			"z": 16.901598
		}
	}, {
		"_id": {
			"$oid": "63b12ea0d0f1444f756af8f7"
		},
		"id": "8f710285-f37e-476c-a8c3-c87a120e3a31",
		"time": {
			"$numberLong": "1672556192235"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198122168645",
		"killerId": "76561199154734223",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 154533.47,
			"y": 2234.8228,
			"z": 51497.81
		},
		"victimPosition": {
			"x": 144114.14,
			"y": 5146.097,
			"z": 44169.74
		},
		"killerVelocity": {
			"x": 130.3341,
			"y": -0.28645733,
			"z": -294.22272
		},
		"victimVelocity": {
			"x": 6.922983,
			"y": -113.3226,
			"z": 80.76263
		}
	}, {
		"_id": {
			"$oid": "63b13f58d0f1444f756af99a"
		},
		"id": "115bd877-19ad-4074-987d-7574a1fbcc14",
		"time": {
			"$numberLong": "1672560472612"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198967996053",
		"killerId": "76561198977808415",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62381.023,
			"y": 2001.7501,
			"z": 120394.95
		},
		"victimPosition": {
			"x": 63789.297,
			"y": 1623.7264,
			"z": 119681.55
		},
		"killerVelocity": {
			"x": 385.62817,
			"y": -125.08872,
			"z": 140.60034
		},
		"victimVelocity": {
			"x": 260.58157,
			"y": -57.606934,
			"z": 5.579805
		}
	}, {
		"_id": {
			"$oid": "63b14037d0f1444f756af9af"
		},
		"id": "76927db2-dbc6-4221-8635-77c094f34e1f",
		"time": {
			"$numberLong": "1672560695633"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199153848530",
		"killerId": "76561198167900881",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68128.516,
			"y": 1241.3269,
			"z": 122487.35
		},
		"victimPosition": {
			"x": 71501.875,
			"y": 290.65024,
			"z": 127131.445
		},
		"killerVelocity": {
			"x": 86.393555,
			"y": -54.342136,
			"z": -156.74052
		},
		"victimVelocity": {
			"x": 10.698455,
			"y": 13.760105,
			"z": 0.015253839
		}
	}, {
		"_id": {
			"$oid": "63b15429d0f1444f756afb25"
		},
		"id": "b5d68572-e03d-4fb6-8e39-9359f6a5d2f1",
		"time": {
			"$numberLong": "1672565801741"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 1,
		"victimId": "76561198022976085",
		"killerId": "76561198202641070",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 127717.91,
			"y": 2813.9282,
			"z": 76862.5
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 131.61395,
			"y": -12.671535,
			"z": -5.1250453
		}
	}, {
		"_id": {
			"$oid": "63b17d85d0f1444f756afd27"
		},
		"id": "d75ab2c1-9729-4da4-bd22-3af7d659a0bd",
		"time": {
			"$numberLong": "1672576389785"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198281573644",
		"killerId": "76561198868152605",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91954.21,
			"y": 3515.5862,
			"z": 72159.086
		},
		"victimPosition": {
			"x": 92495.44,
			"y": 3499.0168,
			"z": 60500.11
		},
		"killerVelocity": {
			"x": 83.34317,
			"y": -13.993545,
			"z": -292.65192
		},
		"victimVelocity": {
			"x": -160.26271,
			"y": -67.00216,
			"z": 196.85835
		}
	}, {
		"_id": {
			"$oid": "63b1aea3d0f1444f756b0098"
		},
		"id": "20f38469-b79a-4b29-be4a-092aa2ef1314",
		"time": {
			"$numberLong": "1672588963778"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198126285727",
		"killerId": "76561198038233115",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71250.01,
			"y": 1536.4799,
			"z": 100856.46
		},
		"victimPosition": {
			"x": 70941.47,
			"y": 2560.5334,
			"z": 100653.75
		},
		"killerVelocity": {
			"x": -116.89896,
			"y": 191.17549,
			"z": -19.730206
		},
		"victimVelocity": {
			"x": 324.59518,
			"y": -103.59038,
			"z": -22.195017
		}
	}, {
		"_id": {
			"$oid": "63b1b3c8d0f1444f756b0124"
		},
		"id": "3ca0f469-11fe-4079-a851-f8b91d073cb6",
		"time": {
			"$numberLong": "1672590280563"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198892427649",
		"killerId": "76561199114146101",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65467.04,
			"y": 2904.4106,
			"z": 107516.016
		},
		"victimPosition": {
			"x": 69153.91,
			"y": 4067.182,
			"z": 102626.875
		},
		"killerVelocity": {
			"x": 320.32565,
			"y": 42.22919,
			"z": -90.46819
		},
		"victimVelocity": {
			"x": 189.62068,
			"y": -5.3752103,
			"z": -194.72263
		}
	}, {
		"_id": {
			"$oid": "63b1b3f9d0f1444f756b012e"
		},
		"id": "be9f2526-ebe0-4aa7-bc1f-eb9a3741ce71",
		"time": {
			"$numberLong": "1672590329000"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198039870838",
		"killerId": "76561199267884134",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59030.215,
			"y": 804.2237,
			"z": 114719.57
		},
		"victimPosition": {
			"x": 65576.82,
			"y": 347.1523,
			"z": 111787.055
		},
		"killerVelocity": {
			"x": 285.21716,
			"y": -48.43083,
			"z": -111.69874
		},
		"victimVelocity": {
			"x": -148.94223,
			"y": 18.544746,
			"z": 167.72621
		}
	}, {
		"_id": {
			"$oid": "63b1b75ed0f1444f756b0186"
		},
		"id": "9536f3cc-eeb9-4de8-8e8d-f6b77f869db7",
		"time": {
			"$numberLong": "1672591198712"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198878629585",
		"killerId": "76561199267884134",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64922.2,
			"y": 1311.5288,
			"z": 112069.8
		},
		"victimPosition": {
			"x": 67623.43,
			"y": 1489.5751,
			"z": 109775.31
		},
		"killerVelocity": {
			"x": 208.98285,
			"y": 18.898668,
			"z": -178.12082
		},
		"victimVelocity": {
			"x": 150.75981,
			"y": -123.968956,
			"z": -116.92657
		}
	}, {
		"_id": {
			"$oid": "63b1c0dfd0f1444f756b0250"
		},
		"id": "d8819503-0670-43c9-87db-daff0a5f95aa",
		"time": {
			"$numberLong": "1672593631060"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198210869339",
		"killerId": "76561198041114962",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69303.43,
			"y": 1534.9082,
			"z": 69048.92
		},
		"victimPosition": {
			"x": 67270.13,
			"y": 1686.1771,
			"z": 70564.09
		},
		"killerVelocity": {
			"x": -199.45366,
			"y": -74.27802,
			"z": -175.19356
		},
		"victimVelocity": {
			"x": -135.7625,
			"y": -51.376186,
			"z": -112.74239
		}
	}, {
		"_id": {
			"$oid": "63b1df28d0f1444f756b04d4"
		},
		"id": "3aadecfb-b51b-45bd-8f2a-da4056ebe8fa",
		"time": {
			"$numberLong": "1672601384212"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199029487428",
		"killerId": "76561199206279177",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98760.85,
			"y": 5454.0386,
			"z": 84016.195
		},
		"victimPosition": {
			"x": 112071.61,
			"y": 6411.9453,
			"z": 74896.25
		},
		"killerVelocity": {
			"x": 352.75958,
			"y": -15.005743,
			"z": -107.137726
		},
		"victimVelocity": {
			"x": 325.29434,
			"y": -45.705708,
			"z": -148.31003
		}
	}, {
		"_id": {
			"$oid": "63b1df6ad0f1444f756b04dd"
		},
		"id": "5f163643-ea42-481c-955e-4b374aa39aab",
		"time": {
			"$numberLong": "1672601450805"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199119586237",
		"killerId": "76561199206279177",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114673.445,
			"y": 1900.7062,
			"z": 75385.67
		},
		"victimPosition": {
			"x": 115839.63,
			"y": 2402.2874,
			"z": 73619.555
		},
		"killerVelocity": {
			"x": 166.68387,
			"y": 32.772274,
			"z": -242.80708
		},
		"victimVelocity": {
			"x": -225.26663,
			"y": -27.487385,
			"z": 242.68222
		}
	}, {
		"_id": {
			"$oid": "63b1ee90d0f1444f756b05fd"
		},
		"id": "5e40e796-d47d-474b-8f7d-381f21d6b240",
		"time": {
			"$numberLong": "1672605328716"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199442641427",
		"killerId": "76561199157478873",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83215.85,
			"y": 794.0736,
			"z": 98266.77
		},
		"victimPosition": {
			"x": 82564.555,
			"y": 357.53442,
			"z": 99312.22
		},
		"killerVelocity": {
			"x": -357.97635,
			"y": -51.06501,
			"z": 75.881874
		},
		"victimVelocity": {
			"x": -151.14027,
			"y": -17.59095,
			"z": 52.014008
		}
	}, {
		"_id": {
			"$oid": "63b1ef06d0f1444f756b0603"
		},
		"id": "ce99cb61-850b-4a7c-b6d9-51a0b33265e0",
		"time": {
			"$numberLong": "1672605446557"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199442641427",
		"killerId": "76561199157478873",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55290.37,
			"y": 903.94403,
			"z": 114284.945
		},
		"victimPosition": {
			"x": 55501.344,
			"y": 1074.4218,
			"z": 114890.6
		},
		"killerVelocity": {
			"x": 25.175604,
			"y": 39.636375,
			"z": 194.20006
		},
		"victimVelocity": {
			"x": 176.08066,
			"y": -3.8714287,
			"z": -208.36856
		}
	}, {
		"_id": {
			"$oid": "63b1fa85d0f1444f756b06d9"
		},
		"id": "6758b1b3-9ff7-4942-a99c-8f83524dfb90",
		"time": {
			"$numberLong": "1672608389572"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197962337875",
		"killerId": "76561198216166840",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70939.69,
			"y": 1883.6691,
			"z": 105186.68
		},
		"victimPosition": {
			"x": 64253.465,
			"y": 270.54562,
			"z": 110902.516
		},
		"killerVelocity": {
			"x": -177.19992,
			"y": -54.64686,
			"z": 148.91142
		},
		"victimVelocity": {
			"x": -4.92603,
			"y": -97.62003,
			"z": 105.44358
		}
	}, {
		"_id": {
			"$oid": "63b20b56d0f1444f756b0836"
		},
		"id": "31de0d4a-edbb-4460-9ab8-6a891a9d2129",
		"time": {
			"$numberLong": "1672612694007"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199401436824",
		"killerId": "76561198872339110",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69843.06,
			"y": 1712.5986,
			"z": 86777.33
		},
		"victimPosition": {
			"x": 71413.805,
			"y": 3020.1472,
			"z": 80062.77
		},
		"killerVelocity": {
			"x": -13.743294,
			"y": 24.43848,
			"z": -190.8339
		},
		"victimVelocity": {
			"x": 104.71188,
			"y": 24.311405,
			"z": 63.76494
		}
	}, {
		"_id": {
			"$oid": "63b21780d0f1444f756b0938"
		},
		"id": "278c3ba0-3ae9-43ae-acc0-e3e8764ff413",
		"time": {
			"$numberLong": "1672615808759"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198300159777",
		"killerId": "76561198977821758",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82311.914,
			"y": 553.5939,
			"z": 98881.57
		},
		"victimPosition": {
			"x": 81959.65,
			"y": 574.18536,
			"z": 97441.78
		},
		"killerVelocity": {
			"x": -63.001377,
			"y": -4.438686,
			"z": -297.58536
		},
		"victimVelocity": {
			"x": -76.16815,
			"y": 50.095657,
			"z": -210.7112
		}
	}, {
		"_id": {
			"$oid": "63b22e80d0f1444f756b0b1a"
		},
		"id": "8fde4de8-927f-4cd1-bf2e-839c74c97485",
		"time": {
			"$numberLong": "1672621696206"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199122916807",
		"killerId": "76561198207600712",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87798.4,
			"y": 1068.2766,
			"z": 110942.016
		},
		"victimPosition": {
			"x": 88858.414,
			"y": 1225.9694,
			"z": 111369.4
		},
		"killerVelocity": {
			"x": 370.16223,
			"y": -50.683994,
			"z": 45.37865
		},
		"victimVelocity": {
			"x": 172.49272,
			"y": 100.85846,
			"z": 150.21175
		}
	}, {
		"_id": {
			"$oid": "63b22eb1d0f1444f756b0b21"
		},
		"id": "dc65d517-2784-4650-8e92-1deb8375ffd2",
		"time": {
			"$numberLong": "1672621745843"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198094761886",
		"killerId": "76561198207600712",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91514.45,
			"y": 2032.79,
			"z": 107179.84
		},
		"victimPosition": {
			"x": 89940.05,
			"y": 1296.6997,
			"z": 104182.48
		},
		"killerVelocity": {
			"x": -97.37029,
			"y": -55.452736,
			"z": -203.1094
		},
		"victimVelocity": {
			"x": -224.3879,
			"y": -59.850513,
			"z": 10.244371
		}
	}, {
		"_id": {
			"$oid": "63b245f0d0f1444f756b0d45"
		},
		"id": "caa02ab7-de53-49ac-84e7-ca9a98aca152",
		"time": {
			"$numberLong": "1672627696355"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199002754175",
		"killerId": "76561198346424825",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58722.152,
			"y": 1037.8242,
			"z": 116973.9
		},
		"victimPosition": {
			"x": 58549.758,
			"y": 262.50195,
			"z": 115750.516
		},
		"killerVelocity": {
			"x": 167.7864,
			"y": 9.132151,
			"z": -94.7999
		},
		"victimVelocity": {
			"x": -58.283974,
			"y": -19.882772,
			"z": -97.24212
		}
	}, {
		"_id": {
			"$oid": "63b25325d0f1444f756b0e40"
		},
		"id": "fc1fce17-4c22-4e59-90fe-21390b7c048c",
		"time": {
			"$numberLong": "1672631077313"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199002754175",
		"killerId": "76561198086702732",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88372.47,
			"y": 1600.3352,
			"z": 95424.1
		},
		"victimPosition": {
			"x": 93682.516,
			"y": 621.4021,
			"z": 90496.21
		},
		"killerVelocity": {
			"x": 294.9101,
			"y": -16.228285,
			"z": -264.79416
		},
		"victimVelocity": {
			"x": 117.84894,
			"y": -68.69944,
			"z": -301.40942
		}
	}, {
		"_id": {
			"$oid": "63b25d9fd0f1444f756b0f32"
		},
		"id": "cd21d828-02e1-4a8e-bf5f-734e49381fab",
		"time": {
			"$numberLong": "1672633759843"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199306184758",
		"killerId": "76561198838708761",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 111405.01,
			"y": 1522.4056,
			"z": 63425.86
		},
		"victimPosition": {
			"x": 109444.59,
			"y": 1362.8743,
			"z": 64578.28
		},
		"killerVelocity": {
			"x": 281.09283,
			"y": -7.363905,
			"z": 159.52385
		},
		"victimVelocity": {
			"x": -23.945488,
			"y": -45.357063,
			"z": 71.45615
		}
	}, {
		"_id": {
			"$oid": "63b2642cd0f1444f756b0fbf"
		},
		"id": "7cb2977d-28e2-43b6-9842-3b8b39bb4c93",
		"time": {
			"$numberLong": "1672635436856"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199306184758",
		"killerId": "76561198346424825",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 136828.4,
			"y": 2920.835,
			"z": 52323.164
		},
		"victimPosition": {
			"x": 138304.1,
			"y": 2770.1997,
			"z": 52660.06
		},
		"killerVelocity": {
			"x": 333.96478,
			"y": -4.474591,
			"z": 21.151579
		},
		"victimVelocity": {
			"x": 227.0829,
			"y": -60.970673,
			"z": 222.64651
		}
	}, {
		"_id": {
			"$oid": "63b32aebd0f1444f756b14ef"
		},
		"id": "5b050e0e-9bf3-4fa0-89ae-728908f966d4",
		"time": {
			"$numberLong": "1672686315619"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198300159777",
		"killerId": "76561199018354756",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 115406.09,
			"y": 2172.554,
			"z": 74144.97
		},
		"victimPosition": {
			"x": 113317.8,
			"y": 2470.919,
			"z": 73226.02
		},
		"killerVelocity": {
			"x": -208.13344,
			"y": 17.6434,
			"z": -112.39018
		},
		"victimVelocity": {
			"x": -106.14342,
			"y": -107.20032,
			"z": 213.09839
		}
	}, {
		"_id": {
			"$oid": "63b3379c58ca2f531d08abde"
		},
		"id": "6471b007-fba4-462f-927f-900babc2726b",
		"time": {
			"$numberLong": "1672689564338"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198862770833",
		"killerId": "76561199000324931",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54131.016,
			"y": 1254.9668,
			"z": 117930.9
		},
		"victimPosition": {
			"x": 56574.887,
			"y": 263.4567,
			"z": 116243.234
		},
		"killerVelocity": {
			"x": -54.12387,
			"y": -64.345146,
			"z": 56.10043
		},
		"victimVelocity": {
			"x": 126.70855,
			"y": -64.79477,
			"z": -71.63037
		}
	}, {
		"_id": {
			"$oid": "63b3a8e158ca2f531d08b31f"
		},
		"id": "35985255-8f6b-49f5-9fbe-523cc6daa048",
		"time": {
			"$numberLong": "1672718561019"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199232722579",
		"killerId": "76561198035805698",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55736.066,
			"y": 2397.2622,
			"z": 91608.29
		},
		"victimPosition": {
			"x": 49800.434,
			"y": 3648.244,
			"z": 79392.36
		},
		"killerVelocity": {
			"x": -82.44901,
			"y": 6.567442,
			"z": -278.00772
		},
		"victimVelocity": {
			"x": -144.76729,
			"y": -14.216672,
			"z": 21.929077
		}
	}, {
		"_id": {
			"$oid": "63b3acbb58ca2f531d08b363"
		},
		"id": "2fd3f4d7-f61b-40c2-b182-e05a9a95fe65",
		"time": {
			"$numberLong": "1672719547511"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086382864",
		"killerId": "76561198443531228",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52639.23,
			"y": 1237.5945,
			"z": 98474.4
		},
		"victimPosition": {
			"x": 52799.027,
			"y": 1764.4152,
			"z": 92055.02
		},
		"killerVelocity": {
			"x": -193.08919,
			"y": 31.242407,
			"z": -320.2534
		},
		"victimVelocity": {
			"x": -135.86525,
			"y": -77.403175,
			"z": -2.0607352
		}
	}, {
		"_id": {
			"$oid": "63b3b8ff58ca2f531d08b47c"
		},
		"id": "252409a1-67bd-45a7-8e15-8851c70866bf",
		"time": {
			"$numberLong": "1672722687617"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198353442566",
		"killerId": "76561198957239614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60559.836,
			"y": 823.08,
			"z": 116043.19
		},
		"victimPosition": {
			"x": 63043.094,
			"y": 1706.7767,
			"z": 114918.67
		},
		"killerVelocity": {
			"x": 294.96497,
			"y": 80.64275,
			"z": -87.91218
		},
		"victimVelocity": {
			"x": 10.731381,
			"y": 112.52131,
			"z": -12.556296
		}
	}, {
		"_id": {
			"$oid": "63b3b99f58ca2f531d08b492"
		},
		"id": "33ef552a-538f-4165-9876-228415f70932",
		"time": {
			"$numberLong": "1672722847746"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198327119473",
		"killerId": "76561198957239614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51707.07,
			"y": 279.4207,
			"z": 118770.58
		},
		"victimPosition": {
			"x": 51414.465,
			"y": 279.4879,
			"z": 118507.445
		},
		"killerVelocity": {
			"x": -7.493508,
			"y": 0.0207038,
			"z": -6.6689415
		},
		"victimVelocity": {
			"x": 0.72562414,
			"y": 0.0017067939,
			"z": -5.0205154
		}
	}, {
		"_id": {
			"$oid": "63b3c6f858ca2f531d08b5f3"
		},
		"id": "828d4c58-5adc-417a-8322-b68c6609cc2e",
		"time": {
			"$numberLong": "1672726264925"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198171431283",
		"killerId": "76561199427399537",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101520.51,
			"y": 1801.5481,
			"z": 78000.47
		},
		"victimPosition": {
			"x": 104478.88,
			"y": 2049.4304,
			"z": 77767.664
		},
		"killerVelocity": {
			"x": 312.2211,
			"y": 56.203106,
			"z": -144.2878
		},
		"victimVelocity": {
			"x": 134.8463,
			"y": -93.894966,
			"z": 162.22124
		}
	}, {
		"_id": {
			"$oid": "63b3d28c58ca2f531d08b6bf"
		},
		"id": "f6cfdd65-ad8c-4ef2-a33b-0f2a819e3e0f",
		"time": {
			"$numberLong": "1672729228138"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199157732353",
		"killerId": "76561198093124125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60801.934,
			"y": 3052.6355,
			"z": 112890.01
		},
		"victimPosition": {
			"x": 59792.92,
			"y": 3550.7075,
			"z": 110865.73
		},
		"killerVelocity": {
			"x": -69.82022,
			"y": 52.377823,
			"z": -137.04166
		},
		"victimVelocity": {
			"x": 212.77214,
			"y": -157.53824,
			"z": 34.22061
		}
	}, {
		"_id": {
			"$oid": "63b3d31b58ca2f531d08b6d2"
		},
		"id": "49576baa-37aa-4c27-81bd-d0019286a5e5",
		"time": {
			"$numberLong": "1672729371168"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197998846985",
		"killerId": "76561199157732353",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52529.902,
			"y": 331.63632,
			"z": 118944.414
		},
		"victimPosition": {
			"x": 55399.164,
			"y": 850.2778,
			"z": 118739.27
		},
		"killerVelocity": {
			"x": 158.02219,
			"y": 11.031832,
			"z": 28.500433
		},
		"victimVelocity": {
			"x": 147.53188,
			"y": 47.977646,
			"z": -80.20217
		}
	}, {
		"_id": {
			"$oid": "63b3d33058ca2f531d08b6d5"
		},
		"id": "6df34835-dae4-4dcc-b14d-0672d1dc7f1d",
		"time": {
			"$numberLong": "1672729392658"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199157732353",
		"killerId": "76561198148393334",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52726.27,
			"y": 355.1958,
			"z": 118972.81
		},
		"victimPosition": {
			"x": 56863.973,
			"y": 559.1142,
			"z": 119041.25
		},
		"killerVelocity": {
			"x": -5.7065406,
			"y": 8.141578,
			"z": -15.906805
		},
		"victimVelocity": {
			"x": 70.742584,
			"y": 5.77363,
			"z": 187.17989
		}
	}, {
		"_id": {
			"$oid": "63b3d35b58ca2f531d08b6d8"
		},
		"id": "66eb30a3-02a1-446d-8432-84bd223d5d60",
		"time": {
			"$numberLong": "1672729435779"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198148393334",
		"killerId": "76561199157732353",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52425.22,
			"y": 443.41824,
			"z": 118910.32
		},
		"victimPosition": {
			"x": 54019.137,
			"y": 585.7751,
			"z": 117348.36
		},
		"killerVelocity": {
			"x": 141.46062,
			"y": 29.785358,
			"z": 30.43552
		},
		"victimVelocity": {
			"x": -126.59893,
			"y": -31.5762,
			"z": -10.341144
		}
	}, {
		"_id": {
			"$oid": "63b409a858ca2f531d08b997"
		},
		"id": "4c3d0ab9-d7b9-452b-8813-e7f90c1de56f",
		"time": {
			"$numberLong": "1672743336926"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198380641479",
		"killerId": "76561199332272389",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52489.625,
			"y": 278.68173,
			"z": 119068.445
		},
		"victimPosition": {
			"x": 57440.746,
			"y": 313.612,
			"z": 115352.984
		},
		"killerVelocity": {
			"x": -0.000004846901,
			"y": -0.000096067786,
			"z": 0.00016624745
		},
		"victimVelocity": {
			"x": 280.42368,
			"y": -28.36651,
			"z": 15.56794
		}
	}, {
		"_id": {
			"$oid": "63b4185e58ca2f531d08ba68"
		},
		"id": "bc8e850b-3e07-4002-9093-3c33b966bab3",
		"time": {
			"$numberLong": "1672747102844"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198379761472",
		"killerId": "76561198380933937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114600.93,
			"y": 1636.9539,
			"z": 96902.55
		},
		"victimPosition": {
			"x": 115574.516,
			"y": 1245.2472,
			"z": 91538.555
		},
		"killerVelocity": {
			"x": 40.709908,
			"y": -21.422543,
			"z": -366.7436
		},
		"victimVelocity": {
			"x": -248.10219,
			"y": -50.91421,
			"z": -60.285492
		}
	}, {
		"_id": {
			"$oid": "63b418ac58ca2f531d08ba71"
		},
		"id": "51631fb3-17a5-41f2-9955-3cd260e8b6c8",
		"time": {
			"$numberLong": "1672747180379"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199060001782",
		"killerId": "76561198380933937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 129979.266,
			"y": 1914.6642,
			"z": 82260.83
		},
		"victimPosition": {
			"x": 131053.664,
			"y": 2055.021,
			"z": 81468.19
		},
		"killerVelocity": {
			"x": 165.87842,
			"y": 34.79947,
			"z": -107.19769
		},
		"victimVelocity": {
			"x": -34.716747,
			"y": -77.322716,
			"z": -215.72974
		}
	}, {
		"_id": {
			"$oid": "63b4294958ca2f531d08bb86"
		},
		"id": "ade72ae5-a370-4ace-9605-0d14b02f52c2",
		"time": {
			"$numberLong": "1672751433495"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199060001782",
		"killerId": "76561198086382864",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50982.14,
			"y": 279.48932,
			"z": 118620.98
		},
		"victimPosition": {
			"x": 102056.336,
			"y": 2365.7485,
			"z": 98694.09
		},
		"killerVelocity": {
			"x": 2.3163726,
			"y": -0.00042890757,
			"z": -9.531767
		},
		"victimVelocity": {
			"x": -313.43503,
			"y": 0.65112334,
			"z": 171.49974
		}
	}, {
		"_id": {
			"$oid": "63b45af89677db3b15714586"
		},
		"id": "047ff32a-fd56-406e-8274-6e92a9c69444",
		"time": {
			"$numberLong": "1672764152660"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198202169393",
		"killerId": "76561198147213935",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71817.01,
			"y": 5157.676,
			"z": 99274.72
		},
		"victimPosition": {
			"x": 87607.98,
			"y": 1034.8756,
			"z": 90915.83
		},
		"killerVelocity": {
			"x": 282.96255,
			"y": 33.0517,
			"z": -245.0524
		},
		"victimVelocity": {
			"x": -81.20633,
			"y": -70.38766,
			"z": 193.0098
		}
	}, {
		"_id": {
			"$oid": "63b462eb9677db3b1571462a"
		},
		"id": "e869c22e-31c8-4e38-bec4-23fc3490ca25",
		"time": {
			"$numberLong": "1672766187303"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198417029934",
		"killerId": "76561199121802870",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92473.67,
			"y": 1746.3635,
			"z": 76038.06
		},
		"victimPosition": {
			"x": 90419.18,
			"y": 868.9904,
			"z": 75007.39
		},
		"killerVelocity": {
			"x": 129.59808,
			"y": -39.627213,
			"z": -120.477745
		},
		"victimVelocity": {
			"x": -146.82092,
			"y": -80.02827,
			"z": -83.084526
		}
	}, {
		"_id": {
			"$oid": "63b474ee9677db3b15714721"
		},
		"id": "608c3279-6676-4525-bcf3-4016cda68b51",
		"time": {
			"$numberLong": "1672770798825"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199365840078",
		"killerId": "76561198047816095",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 158258.66,
			"y": 3485.0625,
			"z": 45902.113
		},
		"victimPosition": {
			"x": 154677.8,
			"y": 2579.7197,
			"z": 46082.383
		},
		"killerVelocity": {
			"x": -91.981766,
			"y": -29.925571,
			"z": -3.8740113
		},
		"victimVelocity": {
			"x": -160.65633,
			"y": -21.767553,
			"z": -39.24316
		}
	}, {
		"_id": {
			"$oid": "63b47f559677db3b1571477a"
		},
		"id": "34e9973b-91be-4aa7-9a53-cb6d96584bba",
		"time": {
			"$numberLong": "1672773461811"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199121802870",
		"killerId": "76561198957239614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57409.184,
			"y": 612.67194,
			"z": 116857.45
		},
		"victimPosition": {
			"x": 58824.05,
			"y": 332.3773,
			"z": 114198.09
		},
		"killerVelocity": {
			"x": 236.35774,
			"y": 9.05492,
			"z": -161.27997
		},
		"victimVelocity": {
			"x": -57.823856,
			"y": -79.77127,
			"z": -222.60707
		}
	}, {
		"_id": {
			"$oid": "63b4805d9677db3b15714799"
		},
		"id": "4223cba0-a617-4126-bbea-4955f1af74c6",
		"time": {
			"$numberLong": "1672773725512"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198195729671",
		"killerId": "76561198957239614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51837.668,
			"y": 577.76196,
			"z": 117774.836
		},
		"victimPosition": {
			"x": 50867.508,
			"y": 279.48993,
			"z": 118553.27
		},
		"killerVelocity": {
			"x": -267.39877,
			"y": -53.748695,
			"z": 169.68414
		},
		"victimVelocity": {
			"x": 37.117413,
			"y": -0.0009602159,
			"z": 10.330435
		}
	}, {
		"_id": {
			"$oid": "63b4809c9677db3b1571479f"
		},
		"id": "117032df-e5e9-4dba-96df-6076a7a432ac",
		"time": {
			"$numberLong": "1672773788133"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197985157646",
		"killerId": "76561198053278730",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82168.62,
			"y": 4152.114,
			"z": 85279.84
		},
		"victimPosition": {
			"x": 93886.07,
			"y": 1472.2509,
			"z": 78998.15
		},
		"killerVelocity": {
			"x": 200.71535,
			"y": 28.139032,
			"z": -251.94249
		},
		"victimVelocity": {
			"x": -11.210571,
			"y": -9.7451105,
			"z": 112.081154
		}
	}, {
		"_id": {
			"$oid": "63b487349677db3b15714825"
		},
		"id": "9e1db71a-6779-4fc5-81da-916ad5cc52fc",
		"time": {
			"$numberLong": "1672775476016"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199201199520",
		"killerId": "76561198027413865",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 35553.766,
			"y": 1437.7332,
			"z": 116907.96
		},
		"victimPosition": {
			"x": 37035.508,
			"y": 1159.183,
			"z": 114848.32
		},
		"killerVelocity": {
			"x": -83.62149,
			"y": 52.62307,
			"z": -180.34898
		},
		"victimVelocity": {
			"x": 98.93622,
			"y": -17.43224,
			"z": 101.30782
		}
	}, {
		"_id": {
			"$oid": "63b498059677db3b157149bf"
		},
		"id": "18982af4-5b87-4bd4-8171-28c7f01ea572",
		"time": {
			"$numberLong": "1672779781770"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198060714161",
		"killerId": "76561198041769443",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91088.62,
			"y": 910.279,
			"z": 95722.28
		},
		"victimPosition": {
			"x": 97877.99,
			"y": 1102.4575,
			"z": 92713.836
		},
		"killerVelocity": {
			"x": 331.81595,
			"y": 0.55549973,
			"z": -122.014046
		},
		"victimVelocity": {
			"x": 53.345917,
			"y": 216.99265,
			"z": 84.84189
		}
	}, {
		"_id": {
			"$oid": "63b4b0ec9677db3b15714b81"
		},
		"id": "b80c069d-2953-4015-92db-1477b8b0176e",
		"time": {
			"$numberLong": "1672786156157"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198008478379",
		"killerId": "76561198331049527",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64732.73,
			"y": 1022.76587,
			"z": 108416.42
		},
		"victimPosition": {
			"x": 66121.43,
			"y": 977.924,
			"z": 104382.414
		},
		"killerVelocity": {
			"x": 263.4773,
			"y": 0.58024824,
			"z": -206.68303
		},
		"victimVelocity": {
			"x": -61.563293,
			"y": 10.952231,
			"z": -86.40809
		}
	}, {
		"_id": {
			"$oid": "63b4b4eb9677db3b15714bcc"
		},
		"id": "d102a1ee-dc1c-4a03-b7d7-271eb045c08e",
		"time": {
			"$numberLong": "1672787179583"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199369545869",
		"killerId": "76561198413150030",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 111979.97,
			"y": 2228.8958,
			"z": 49799.25
		},
		"victimPosition": {
			"x": 109909.43,
			"y": 2160.0337,
			"z": 50367.234
		},
		"killerVelocity": {
			"x": -287.0491,
			"y": 50.5345,
			"z": 199.10316
		},
		"victimVelocity": {
			"x": -198.1051,
			"y": 4.0134087,
			"z": 6.9361362
		}
	}, {
		"_id": {
			"$oid": "63b4b6729677db3b15714bec"
		},
		"id": "dc7ad9c7-7191-46a9-a02e-89e5a0d3de1a",
		"time": {
			"$numberLong": "1672787570572"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199239980022",
		"killerId": "76561199120782461",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66203.695,
			"y": 1235.4342,
			"z": 112789.29
		},
		"victimPosition": {
			"x": 67143.11,
			"y": 1098.2473,
			"z": 111784.71
		},
		"killerVelocity": {
			"x": 202.25089,
			"y": -34.057026,
			"z": -163.82304
		},
		"victimVelocity": {
			"x": 218.0429,
			"y": -45.926483,
			"z": -198.05399
		}
	}, {
		"_id": {
			"$oid": "63b4b70b9677db3b15714bf4"
		},
		"id": "86d91f44-b531-4bb3-b426-97e98b36657d",
		"time": {
			"$numberLong": "1672787723739"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199120782461",
		"killerId": "76561198331049527",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100451.54,
			"y": 1264.5763,
			"z": 83719.81
		},
		"victimPosition": {
			"x": 100795.8,
			"y": 853.36926,
			"z": 83303.07
		},
		"killerVelocity": {
			"x": 145.14113,
			"y": -9.269958,
			"z": -139.04974
		},
		"victimVelocity": {
			"x": 116.34971,
			"y": -75.87704,
			"z": -120.74759
		}
	}, {
		"_id": {
			"$oid": "63b4d6239677db3b15714e33"
		},
		"id": "494e72d4-632e-4e5e-b5a6-6d0509ecc4b1",
		"time": {
			"$numberLong": "1672795683986"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 6,
		"victimId": "76561198093124125",
		"killerId": "76561198067509348",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81253.18,
			"y": 3913.5977,
			"z": 106228.89
		},
		"victimPosition": {
			"x": 78892.05,
			"y": 4864.106,
			"z": 107402.48
		},
		"killerVelocity": {
			"x": -217.34668,
			"y": 38.13394,
			"z": 174.48564
		},
		"victimVelocity": {
			"x": 292.18826,
			"y": 30.206417,
			"z": -236.01945
		}
	}, {
		"_id": {
			"$oid": "63b4d6a59677db3b15714e49"
		},
		"id": "1bc7edfa-d8ff-4b3c-8ec4-729bbfe4a6d8",
		"time": {
			"$numberLong": "1672795813604"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199093385666",
		"killerId": "76561198093124125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53810.703,
			"y": 599.93207,
			"z": 116452.06
		},
		"victimPosition": {
			"x": 53992.344,
			"y": 1143.8971,
			"z": 110926.266
		},
		"killerVelocity": {
			"x": -2.9131277,
			"y": 24.6551,
			"z": -179.1899
		},
		"victimVelocity": {
			"x": -239.31203,
			"y": -60.03095,
			"z": 39.527813
		}
	}, {
		"_id": {
			"$oid": "63b4d9479677db3b15714e8e"
		},
		"id": "070ddaa0-2034-4c35-86b2-c6f20f0753c3",
		"time": {
			"$numberLong": "1672796487895"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198931137368",
		"killerId": "76561198031116602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62987.312,
			"y": 1289.7993,
			"z": 104901.08
		},
		"victimPosition": {
			"x": 62257.277,
			"y": 1084.81,
			"z": 105153.43
		},
		"killerVelocity": {
			"x": -67.32325,
			"y": -34.181046,
			"z": -296.3755
		},
		"victimVelocity": {
			"x": -149.35478,
			"y": -7.3570294,
			"z": 222.65263
		}
	}, {
		"_id": {
			"$oid": "63b4ddd39677db3b15714ee2"
		},
		"id": "eab16684-d880-4db1-a8b6-6fa10bbdf94e",
		"time": {
			"$numberLong": "1672797651790"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198171431283",
		"killerId": "76561199089750060",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92278.04,
			"y": 2560.2085,
			"z": 90046.445
		},
		"victimPosition": {
			"x": 96497.33,
			"y": 1062.5728,
			"z": 84171.97
		},
		"killerVelocity": {
			"x": 164.12265,
			"y": -66.317894,
			"z": -245.8072
		},
		"victimVelocity": {
			"x": -291.13034,
			"y": -122.902084,
			"z": 35.27426
		}
	}, {
		"_id": {
			"$oid": "63b4dde19677db3b15714ee4"
		},
		"id": "518952a7-b612-445e-aff9-2e0b841cd33d",
		"time": {
			"$numberLong": "1672797665192"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198144441716",
		"killerId": "76561199066008766",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89814.055,
			"y": 1160.7869,
			"z": 106398.18
		},
		"victimPosition": {
			"x": 95617.78,
			"y": 5182.1562,
			"z": 95926.086
		},
		"killerVelocity": {
			"x": 362.036,
			"y": 6.0582294,
			"z": 115.55212
		},
		"victimVelocity": {
			"x": 37.684265,
			"y": 26.247631,
			"z": 190.3418
		}
	}, {
		"_id": {
			"$oid": "63b4e5239677db3b15714f92"
		},
		"id": "23172d15-17e0-439b-a3bc-b2d258ee649c",
		"time": {
			"$numberLong": "1672799523440"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199155241701",
		"killerId": "76561198879750481",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107024.81,
			"y": 2165.8508,
			"z": 85592.08
		},
		"victimPosition": {
			"x": 107014.62,
			"y": 639.6957,
			"z": 85357.19
		},
		"killerVelocity": {
			"x": 283.7522,
			"y": 33.06331,
			"z": 169.57214
		},
		"victimVelocity": {
			"x": 66.029106,
			"y": 4.23058,
			"z": 41.13554
		}
	}, {
		"_id": {
			"$oid": "63b4fa739677db3b15715123"
		},
		"id": "fb244e4d-7894-476b-89c3-2a3d0da5449c",
		"time": {
			"$numberLong": "1672804979239"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199384093810",
		"killerId": "76561199381230224",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54391.137,
			"y": 2076.1057,
			"z": 111556.07
		},
		"victimPosition": {
			"x": 59236.695,
			"y": 1344.82,
			"z": 107638.875
		},
		"killerVelocity": {
			"x": 203.44873,
			"y": -7.320486,
			"z": -211.79414
		},
		"victimVelocity": {
			"x": -221.40271,
			"y": 36.24242,
			"z": -31.477173
		}
	}, {
		"_id": {
			"$oid": "63b4fbc59677db3b15715154"
		},
		"id": "58b9d498-cf48-4673-a887-8571d573bda8",
		"time": {
			"$numberLong": "1672805317280"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198072118294",
		"killerId": "76561198979194174",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80595.766,
			"y": 1467.9431,
			"z": 126259.625
		},
		"victimPosition": {
			"x": 81722.23,
			"y": 1344.3722,
			"z": 127544.54
		},
		"killerVelocity": {
			"x": 77.642365,
			"y": -7.513406,
			"z": 337.67874
		},
		"victimVelocity": {
			"x": 303.8014,
			"y": 9.949041,
			"z": 76.25659
		}
	}, {
		"_id": {
			"$oid": "63b4ff6d9677db3b157151af"
		},
		"id": "1351a96a-90f1-40de-a7b1-ffc0acb87d2d",
		"time": {
			"$numberLong": "1672806253036"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198979194174",
		"killerId": "76561197990144940",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70410.195,
			"y": 1816.1583,
			"z": 107258.734
		},
		"victimPosition": {
			"x": 72546.04,
			"y": 1149.58,
			"z": 105849.45
		},
		"killerVelocity": {
			"x": 323.78,
			"y": -85.175896,
			"z": -190.09389
		},
		"victimVelocity": {
			"x": -207.74341,
			"y": 195.39583,
			"z": 34.416527
		}
	}, {
		"_id": {
			"$oid": "63b50b6f9677db3b1571528e"
		},
		"id": "f7898087-eb8f-49ba-aa0e-7c1f3db5e09b",
		"time": {
			"$numberLong": "1672809327865"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198408142674",
		"killerId": "76561198450458455",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52650.15,
			"y": 389.19318,
			"z": 118220.73
		},
		"victimPosition": {
			"x": 53646.56,
			"y": 617.695,
			"z": 117347.87
		},
		"killerVelocity": {
			"x": 120.22049,
			"y": 10.496199,
			"z": -98.053444
		},
		"victimVelocity": {
			"x": 46.586002,
			"y": 81.60423,
			"z": -145.28217
		}
	}, {
		"_id": {
			"$oid": "63b50b8a9677db3b15715293"
		},
		"id": "a3f683c6-da3b-4057-9d59-f4fb98460c67",
		"time": {
			"$numberLong": "1672809354376"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199106825805",
		"killerId": "76561198450458455",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58106.3,
			"y": 991.68365,
			"z": 115483.68
		},
		"victimPosition": {
			"x": 58722.375,
			"y": 648.20337,
			"z": 113849.89
		},
		"killerVelocity": {
			"x": 143.6464,
			"y": 55.939823,
			"z": -242.42252
		},
		"victimVelocity": {
			"x": -230.12619,
			"y": -22.163893,
			"z": 66.96821
		}
	}, {
		"_id": {
			"$oid": "63b534d50c20d42cf2c31fe5"
		},
		"id": "57ac7d9a-f1de-479e-8a00-75199dd9f9bf",
		"time": {
			"$numberLong": "1672819925440"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198020137477",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51011.684,
			"y": 279.4829,
			"z": 118470.71
		},
		"victimPosition": {
			"x": 51031.613,
			"y": 279.48514,
			"z": 118381.98
		},
		"killerVelocity": {
			"x": 5.1839814,
			"y": -0.040187016,
			"z": -32.929935
		},
		"victimVelocity": {
			"x": 70.22397,
			"y": -0.003871262,
			"z": 16.012577
		}
	}, {
		"_id": {
			"$oid": "63b536150c20d42cf2c31ff6"
		},
		"id": "883d8614-3d8f-4826-b4a5-88020cec0e5c",
		"time": {
			"$numberLong": "1672820245575"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199165485270",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58720.684,
			"y": 986.4368,
			"z": 119167.21
		},
		"victimPosition": {
			"x": 56762.63,
			"y": 606.4429,
			"z": 116945.87
		},
		"killerVelocity": {
			"x": -320.2645,
			"y": -17.438316,
			"z": -134.54387
		},
		"victimVelocity": {
			"x": -159.48953,
			"y": 32.98665,
			"z": -170.26215
		}
	}, {
		"_id": {
			"$oid": "63b556860c20d42cf2c32138"
		},
		"id": "2c800692-4db8-4c8b-9019-6034f961ae4b",
		"time": {
			"$numberLong": "1672828550539"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199466915107",
		"killerId": "76561199154734223",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 33321.86,
			"y": 1873.5798,
			"z": 110889.43
		},
		"victimPosition": {
			"x": 32101.28,
			"y": 3330.9514,
			"z": 109875.305
		},
		"killerVelocity": {
			"x": -260.19553,
			"y": 92.14234,
			"z": -51.53033
		},
		"victimVelocity": {
			"x": 84.85123,
			"y": -48.743744,
			"z": -71.68069
		}
	}, {
		"_id": {
			"$oid": "63b558490c20d42cf2c32145"
		},
		"id": "b3cd4faf-5230-4ac8-8860-da90607a902f",
		"time": {
			"$numberLong": "1672829001376"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199229902489",
		"killerId": "76561199466915107",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58628.11,
			"y": 658.63824,
			"z": 116743.06
		},
		"victimPosition": {
			"x": 58460.305,
			"y": 739.6456,
			"z": 114985.95
		},
		"killerVelocity": {
			"x": 0.6504724,
			"y": -2.6104395,
			"z": -184.98796
		},
		"victimVelocity": {
			"x": -80.74752,
			"y": -26.546171,
			"z": -90.20736
		}
	}, {
		"_id": {
			"$oid": "63b57c140c20d42cf2c32224"
		},
		"id": "ffef0123-a500-49e9-ab86-2e571b45453f",
		"time": {
			"$numberLong": "1672838164839"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198882841683",
		"killerId": "76561199369902817",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61197.207,
			"y": 1519.4584,
			"z": 112903.99
		},
		"victimPosition": {
			"x": 59925.766,
			"y": 1051.9354,
			"z": 114286.984
		},
		"killerVelocity": {
			"x": -244.69933,
			"y": -96.809494,
			"z": 264.8998
		},
		"victimVelocity": {
			"x": 201.85617,
			"y": -74.69735,
			"z": -16.830235
		}
	}, {
		"_id": {
			"$oid": "63b58d980c20d42cf2c32327"
		},
		"id": "d872e31b-de92-453a-86eb-aaf6f4fdaad4",
		"time": {
			"$numberLong": "1672842648355"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198002089501",
		"killerId": "76561198079242563",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 142504.56,
			"y": 1374.3451,
			"z": 36792.074
		},
		"victimPosition": {
			"x": 142752.03,
			"y": 970.7259,
			"z": 34735.484
		},
		"killerVelocity": {
			"x": 109.77929,
			"y": 18.077204,
			"z": -168.42812
		},
		"victimVelocity": {
			"x": 11.310381,
			"y": -13.262989,
			"z": -43.456566
		}
	}, {
		"_id": {
			"$oid": "63b5ad530c20d42cf2c323e2"
		},
		"id": "8d2fa817-c04d-47c1-8988-ffd2606ab33b",
		"time": {
			"$numberLong": "1672850771993"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199021657667",
		"killerId": "76561198281744647",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80366.234,
			"y": 1921.5573,
			"z": 106344.31
		},
		"victimPosition": {
			"x": 72445.69,
			"y": 2838.108,
			"z": 108471.13
		},
		"killerVelocity": {
			"x": -192.92386,
			"y": -104.20883,
			"z": 38.34669
		},
		"victimVelocity": {
			"x": 81.51261,
			"y": -78.31226,
			"z": -313.7344
		}
	}, {
		"_id": {
			"$oid": "63b5ad5a0c20d42cf2c323e4"
		},
		"id": "ac41c23b-8722-44df-8fbe-79b5cf85510e",
		"time": {
			"$numberLong": "1672850778844"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198281744647",
		"killerId": "76561199021657667",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72484.61,
			"y": 2209.7,
			"z": 106958.83
		},
		"victimPosition": {
			"x": 79617.13,
			"y": 953.55273,
			"z": 105559.57
		},
		"killerVelocity": {
			"x": -9.794784,
			"y": -94.084526,
			"z": -159.77403
		},
		"victimVelocity": {
			"x": -65.196335,
			"y": -161.74963,
			"z": -188.52025
		}
	}, {
		"_id": {
			"$oid": "63b5b57d0c20d42cf2c32419"
		},
		"id": "8dabf029-7e2a-47d8-9dc5-3b4582478388",
		"time": {
			"$numberLong": "1672852861527"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199108001590",
		"killerId": "76561199074280061",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51302.793,
			"y": 279.39783,
			"z": 118631.73
		},
		"victimPosition": {
			"x": 51514.14,
			"y": 279.4601,
			"z": 118525.18
		},
		"killerVelocity": {
			"x": 8.647992,
			"y": -0.030115917,
			"z": -4.131278
		},
		"victimVelocity": {
			"x": -19.28589,
			"y": 0.024688505,
			"z": -19.623087
		}
	}, {
		"_id": {
			"$oid": "63b5e27c0c20d42cf2c3272f"
		},
		"id": "acb4828e-4e4e-4f34-8c2f-044b9a5fcb5d",
		"time": {
			"$numberLong": "1672864380853"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199058947963",
		"killerId": "76561199165485270",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53287.145,
			"y": 1125.399,
			"z": 111398.016
		},
		"victimPosition": {
			"x": 47252.99,
			"y": 1265.6487,
			"z": 115369.59
		},
		"killerVelocity": {
			"x": -245.15987,
			"y": -22.978916,
			"z": 148.13138
		},
		"victimVelocity": {
			"x": 135.7935,
			"y": -12.103247,
			"z": -136.88469
		}
	}, {
		"_id": {
			"$oid": "63b5e29d0c20d42cf2c32735"
		},
		"id": "1c39c6e9-ad3b-4b7f-b2a6-74f53132c023",
		"time": {
			"$numberLong": "1672864413040"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198385806874",
		"killerId": "76561198315602878",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72052.07,
			"y": 1046.1652,
			"z": 105621.91
		},
		"victimPosition": {
			"x": 83344.43,
			"y": 1940.9198,
			"z": 109296.77
		},
		"killerVelocity": {
			"x": 173.18672,
			"y": -1.5109442,
			"z": -30.927334
		},
		"victimVelocity": {
			"x": 224.64632,
			"y": 87.09789,
			"z": 73.94904
		}
	}, {
		"_id": {
			"$oid": "63b5e3150c20d42cf2c32742"
		},
		"id": "53aa8b5c-afca-4c6c-b2cc-3999e90c466a",
		"time": {
			"$numberLong": "1672864533562"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199165485270",
		"killerId": "76561198038207394",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71109.04,
			"y": 3211.2188,
			"z": 102869.875
		},
		"victimPosition": {
			"x": 70350.78,
			"y": 2933.0598,
			"z": 100348.195
		},
		"killerVelocity": {
			"x": -82.2811,
			"y": -59.703533,
			"z": -373.04257
		},
		"victimVelocity": {
			"x": -56.152924,
			"y": 56.5157,
			"z": 296.50647
		}
	}, {
		"_id": {
			"$oid": "63b5ef980c20d42cf2c3285c"
		},
		"id": "4c4e3cda-6d55-448a-a8a9-1c123a0648c6",
		"time": {
			"$numberLong": "1672867736467"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198862770833",
		"killerId": "76561198920084515",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73389.8,
			"y": 3127.3364,
			"z": 78531.61
		},
		"victimPosition": {
			"x": 74364.47,
			"y": 4487.738,
			"z": 77666.33
		},
		"killerVelocity": {
			"x": 28.620592,
			"y": 131.63847,
			"z": -143.36777
		},
		"victimVelocity": {
			"x": -196.21692,
			"y": -118.417366,
			"z": 278.8177
		}
	}, {
		"_id": {
			"$oid": "63b64ed60c20d42cf2c33074"
		},
		"id": "7deb9d3e-925e-4129-8811-a910f40e3361",
		"time": {
			"$numberLong": "1672892118384"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198985514270",
		"killerId": "76561199427399537",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99759.63,
			"y": 1574.349,
			"z": 64045.344
		},
		"victimPosition": {
			"x": 101252.09,
			"y": 1812.2705,
			"z": 64031.36
		},
		"killerVelocity": {
			"x": 276.136,
			"y": 19.210636,
			"z": -256.1763
		},
		"victimVelocity": {
			"x": 101.3631,
			"y": 6.679031,
			"z": -63.00879
		}
	}, {
		"_id": {
			"$oid": "63b670a10c20d42cf2c332e8"
		},
		"id": "fa2e1a01-bb91-421c-bfb5-d7ea82168555",
		"time": {
			"$numberLong": "1672900769506"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197982548387",
		"killerId": "76561198025628522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59867.824,
			"y": 2814.0884,
			"z": 100630.86
		},
		"victimPosition": {
			"x": 67204.12,
			"y": 1311.6226,
			"z": 90541.195
		},
		"killerVelocity": {
			"x": 33.391212,
			"y": 22.439869,
			"z": -312.1858
		},
		"victimVelocity": {
			"x": -42.21403,
			"y": -45.5801,
			"z": 108.87307
		}
	}, {
		"_id": {
			"$oid": "63b6751c0c20d42cf2c3334b"
		},
		"id": "35cf2e9a-e69d-4e12-9401-2559c719ec31",
		"time": {
			"$numberLong": "1672901916896"
		},
		"victimAircraft": 2,
		"killerAircraft": 4,
		"weapon": 5,
		"victimId": "76561197982548387",
		"killerId": "76561198050772384",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 80181.95,
			"y": 1081.0103,
			"z": 87225.33
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 42.591846,
			"y": -8.301653,
			"z": 4.454171
		}
	}, {
		"_id": {
			"$oid": "63b6b4260c20d42cf2c33543"
		},
		"id": "ded58cf8-0ab8-448d-9fd0-d61a48b9424b",
		"time": {
			"$numberLong": "1672918054025"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198086069372",
		"killerId": "76561198861753380",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58234.52,
			"y": 630.0318,
			"z": 117348.73
		},
		"victimPosition": {
			"x": 59809.42,
			"y": 1202.4493,
			"z": 116149.11
		},
		"killerVelocity": {
			"x": 241.21085,
			"y": -53.607803,
			"z": -193.59328
		},
		"victimVelocity": {
			"x": 21.176868,
			"y": 118.50682,
			"z": 167.74779
		}
	}, {
		"_id": {
			"$oid": "63b6b8440c20d42cf2c33560"
		},
		"id": "199f3ddb-16ba-4f6c-932b-24db03039fcd",
		"time": {
			"$numberLong": "1672919108362"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198443531228",
		"killerId": "76561199195005447",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96178.266,
			"y": 6017.288,
			"z": 131527.67
		},
		"victimPosition": {
			"x": 95929.81,
			"y": 3712.8599,
			"z": 131595.8
		},
		"killerVelocity": {
			"x": 214.87004,
			"y": -23.34318,
			"z": 64.579155
		},
		"victimVelocity": {
			"x": 40.18989,
			"y": -123.47892,
			"z": 28.6374
		}
	}, {
		"_id": {
			"$oid": "63b6c4690c20d42cf2c335af"
		},
		"id": "e5d86783-837c-448a-a884-ddb73078acba",
		"time": {
			"$numberLong": "1672922217422"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198915789383",
		"killerId": "76561198384321096",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53315.266,
			"y": 849.9696,
			"z": 123953.62
		},
		"victimPosition": {
			"x": 53221.336,
			"y": 885.88086,
			"z": 124998
		},
		"killerVelocity": {
			"x": -20.911655,
			"y": 3.2103038,
			"z": 218.05446
		},
		"victimVelocity": {
			"x": -28.242441,
			"y": -31.098995,
			"z": 112.87544
		}
	}, {
		"_id": {
			"$oid": "63b6cc170c20d42cf2c335f8"
		},
		"id": "5cbc6179-5840-41a5-a123-3d647c6341cc",
		"time": {
			"$numberLong": "1672924183066"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198273681123",
		"killerId": "76561198343179469",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82183.94,
			"y": 6447.4453,
			"z": 109523.234
		},
		"victimPosition": {
			"x": 87967.22,
			"y": 7477.7446,
			"z": 102761.74
		},
		"killerVelocity": {
			"x": 159.91258,
			"y": 16.497654,
			"z": -184.14052
		},
		"victimVelocity": {
			"x": 202.26138,
			"y": 36.057354,
			"z": -243.03336
		}
	}, {
		"_id": {
			"$oid": "63b6ce090c20d42cf2c3361d"
		},
		"id": "46d53f06-2910-4331-9b13-bd1a7117697f",
		"time": {
			"$numberLong": "1672924681063"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198393385488",
		"killerId": "76561199401194157",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62669.586,
			"y": 2599.2056,
			"z": 114669.24
		},
		"victimPosition": {
			"x": 64763.383,
			"y": 2710.0955,
			"z": 111801.54
		},
		"killerVelocity": {
			"x": 189.29886,
			"y": 22.887985,
			"z": -202.94037
		},
		"victimVelocity": {
			"x": 28.126333,
			"y": -124.46101,
			"z": -130.79198
		}
	}, {
		"_id": {
			"$oid": "63b6f51a0c20d42cf2c3385a"
		},
		"id": "4cdce354-2fba-4631-88ff-cf3e7a6aa280",
		"time": {
			"$numberLong": "1672934682453"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199391443424",
		"killerId": "76561199122587823",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59662.348,
			"y": 1252.8577,
			"z": 117309.8
		},
		"victimPosition": {
			"x": 60990.023,
			"y": 639.96674,
			"z": 116254.51
		},
		"killerVelocity": {
			"x": 301.13318,
			"y": 7.205156,
			"z": -95.407974
		},
		"victimVelocity": {
			"x": 183.31503,
			"y": -128.19702,
			"z": -105.592995
		}
	}, {
		"_id": {
			"$oid": "63b6f5790c20d42cf2c33868"
		},
		"id": "697251a2-ff56-49b4-9f27-b5401d7a6fa7",
		"time": {
			"$numberLong": "1672934777312"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198256673858",
		"killerId": "76561199122587823",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 86396.586,
			"y": 2117.8433,
			"z": 100320.41
		},
		"victimPosition": {
			"x": 89384.88,
			"y": 521.0192,
			"z": 95791.53
		},
		"killerVelocity": {
			"x": 238.67209,
			"y": -22.541315,
			"z": -302.91946
		},
		"victimVelocity": {
			"x": -327.81287,
			"y": -69.8017,
			"z": -107.85863
		}
	}, {
		"_id": {
			"$oid": "63b6f5f30c20d42cf2c33872"
		},
		"id": "ec861a55-9e60-4166-8655-46fdf2ac8d76",
		"time": {
			"$numberLong": "1672934899095"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199391443424",
		"killerId": "76561198068241155",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59961.305,
			"y": 902.2192,
			"z": 118068.35
		},
		"victimPosition": {
			"x": 59117.93,
			"y": 802.08984,
			"z": 120119.94
		},
		"killerVelocity": {
			"x": -177.52534,
			"y": -27.031609,
			"z": 279.02457
		},
		"victimVelocity": {
			"x": 72.53431,
			"y": 10.090161,
			"z": 225.6485
		}
	}, {
		"_id": {
			"$oid": "63b6f8b60c20d42cf2c338a2"
		},
		"id": "c6525569-3454-43a7-bd28-96ea93bdd1eb",
		"time": {
			"$numberLong": "1672935606116"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199007911842",
		"killerId": "76561199107886369",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56007.773,
			"y": 1060.6599,
			"z": 119326.65
		},
		"victimPosition": {
			"x": 56503.31,
			"y": 2004.0604,
			"z": 118479.98
		},
		"killerVelocity": {
			"x": 58.732704,
			"y": 49.455357,
			"z": -60.64778
		},
		"victimVelocity": {
			"x": -23.304792,
			"y": 84.782585,
			"z": -89.59795
		}
	}, {
		"_id": {
			"$oid": "63b6fb2a0c20d42cf2c338bd"
		},
		"id": "d432847e-a5d3-44a9-bda0-b35626fd6e26",
		"time": {
			"$numberLong": "1672936234944"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198275482929",
		"killerId": "76561199107886369",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49773.305,
			"y": 916.7867,
			"z": 117685.96
		},
		"victimPosition": {
			"x": 51680.08,
			"y": 280.9173,
			"z": 118500.89
		},
		"killerVelocity": {
			"x": -146.81033,
			"y": 78.24003,
			"z": -123.139595
		},
		"victimVelocity": {
			"x": 5.672661,
			"y": 0.065073796,
			"z": -3.4244566
		}
	}, {
		"_id": {
			"$oid": "63b713b30c20d42cf2c339b6"
		},
		"id": "fa3b4b8c-f082-4300-8b15-b87dfb8bafe4",
		"time": {
			"$numberLong": "1672942515822"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198125494259",
		"killerId": "76561199367516045",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67221.14,
			"y": 1364.7035,
			"z": 98783.78
		},
		"victimPosition": {
			"x": 67535.58,
			"y": 1152.8391,
			"z": 99108.414
		},
		"killerVelocity": {
			"x": 81.79321,
			"y": -52.62918,
			"z": 70.6507
		},
		"victimVelocity": {
			"x": 16.919174,
			"y": -138.82672,
			"z": -2.8001456
		}
	}, {
		"_id": {
			"$oid": "63b7195a0c20d42cf2c33a06"
		},
		"id": "50d66854-c869-4abf-8293-8de9abdac3d8",
		"time": {
			"$numberLong": "1672943962295"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198125494259",
		"killerId": "76561198037479382",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58278.38,
			"y": 687.1847,
			"z": 117450.88
		},
		"victimPosition": {
			"x": 58042.832,
			"y": 257.19943,
			"z": 117640.58
		},
		"killerVelocity": {
			"x": 223.84633,
			"y": -4.6494474,
			"z": -175.57999
		},
		"victimVelocity": {
			"x": 43.01532,
			"y": -14.276084,
			"z": -10.371804
		}
	}, {
		"_id": {
			"$oid": "63b71e710c20d42cf2c33a87"
		},
		"id": "41d8b89a-0038-4bec-8f4f-98692dcbf995",
		"time": {
			"$numberLong": "1672945265221"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199367516045",
		"killerId": "76561199213425192",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58171.715,
			"y": 558.2522,
			"z": 114091.99
		},
		"victimPosition": {
			"x": 57656.613,
			"y": 1336.7898,
			"z": 113594.57
		},
		"killerVelocity": {
			"x": -102.63472,
			"y": 1.1220602,
			"z": 89.983345
		},
		"victimVelocity": {
			"x": 106.08986,
			"y": 146.52115,
			"z": -91.08111
		}
	}, {
		"_id": {
			"$oid": "63b7384e0c20d42cf2c33c69"
		},
		"id": "d293d94d-0235-47bd-b4ad-e7ab34d12370",
		"time": {
			"$numberLong": "1672951886064"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198385806874",
		"killerId": "76561199316912166",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65770.88,
			"y": 2303.1362,
			"z": 116556.78
		},
		"victimPosition": {
			"x": 71498.875,
			"y": 551.8631,
			"z": 113637.44
		},
		"killerVelocity": {
			"x": 128.45529,
			"y": 191.4653,
			"z": 14.659788
		},
		"victimVelocity": {
			"x": 365.84775,
			"y": -36.323025,
			"z": -56.15922
		}
	}, {
		"_id": {
			"$oid": "63b739610c20d42cf2c33c88"
		},
		"id": "3a601a11-3d06-4d78-aeb7-6f2103364250",
		"time": {
			"$numberLong": "1672952161319"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198385806874",
		"killerId": "76561199316912166",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56830.934,
			"y": 633.60266,
			"z": 118396.62
		},
		"victimPosition": {
			"x": 60028.52,
			"y": 734.68744,
			"z": 115391.055
		},
		"killerVelocity": {
			"x": 167.45596,
			"y": -11.025102,
			"z": -117.045135
		},
		"victimVelocity": {
			"x": -289.49844,
			"y": 23.173506,
			"z": 187.66928
		}
	}, {
		"_id": {
			"$oid": "63b73fbe0c20d42cf2c33d3f"
		},
		"id": "5e4e0cca-d16c-4f5c-b54e-9df659872232",
		"time": {
			"$numberLong": "1672953790812"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198129307330",
		"killerId": "76561199078466572",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65206.84,
			"y": 814.08325,
			"z": 112898.3
		},
		"victimPosition": {
			"x": 64580.58,
			"y": 2430.5288,
			"z": 107744.055
		},
		"killerVelocity": {
			"x": 128.464,
			"y": -211.81458,
			"z": -51.276794
		},
		"victimVelocity": {
			"x": -43.154804,
			"y": -263.19443,
			"z": -116.61442
		}
	}, {
		"_id": {
			"$oid": "63b74c200c20d42cf2c33e43"
		},
		"id": "b87efd47-e78e-4abd-b24b-5fe88193d88c",
		"time": {
			"$numberLong": "1672956960717"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199154734223",
		"killerId": "76561199099671745",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58966.29,
			"y": 820.8495,
			"z": 115253.04
		},
		"victimPosition": {
			"x": 59392.99,
			"y": 416.83807,
			"z": 110565.375
		},
		"killerVelocity": {
			"x": 190.9649,
			"y": -47.51166,
			"z": 60.15003
		},
		"victimVelocity": {
			"x": -25.851315,
			"y": 8.235078,
			"z": -289.85358
		}
	}, {
		"_id": {
			"$oid": "63b74d7b0c20d42cf2c33e6b"
		},
		"id": "ab85c0c0-39f6-4588-b587-ced573208a7b",
		"time": {
			"$numberLong": "1672957307311"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199095113449",
		"killerId": "76561199099671745",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51491.406,
			"y": 279.54016,
			"z": 118481.63
		},
		"victimPosition": {
			"x": 52628.312,
			"y": 286.19397,
			"z": 118980.03
		},
		"killerVelocity": {
			"x": 24.649448,
			"y": 0.026883833,
			"z": -5.9718857
		},
		"victimVelocity": {
			"x": 116.64015,
			"y": 7.7083473,
			"z": 28.964529
		}
	}, {
		"_id": {
			"$oid": "63b792ac0c20d42cf2c33fd4"
		},
		"id": "e0f2ffd9-aa2b-4d26-93a3-be2a635f6f1c",
		"time": {
			"$numberLong": "1672975020007"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199440693315",
		"killerId": "76561198005339534",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 113781.94,
			"y": 4590.696,
			"z": 71230.35
		},
		"victimPosition": {
			"x": 105973.14,
			"y": 3600.3074,
			"z": 65302.785
		},
		"killerVelocity": {
			"x": -178.40453,
			"y": -170.47527,
			"z": -334.20294
		},
		"victimVelocity": {
			"x": 84.45538,
			"y": -128.53717,
			"z": 52.316322
		}
	}, {
		"_id": {
			"$oid": "63b7a6960c20d42cf2c341c9"
		},
		"id": "dada1cec-ab60-47d5-89b2-6bee78a99c72",
		"time": {
			"$numberLong": "1672980118582"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198034802007",
		"killerId": "76561198858640751",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 121388.586,
			"y": 2630.1194,
			"z": 63439.312
		},
		"victimPosition": {
			"x": 121617.44,
			"y": 2662.089,
			"z": 64002.156
		},
		"killerVelocity": {
			"x": 13.123601,
			"y": 10.100871,
			"z": 130.93585
		},
		"victimVelocity": {
			"x": 166.52487,
			"y": -29.831293,
			"z": -36.734085
		}
	}, {
		"_id": {
			"$oid": "63b7a81c0c20d42cf2c341e8"
		},
		"id": "abd69dbe-22b5-4760-80b0-fc7436de141f",
		"time": {
			"$numberLong": "1672980508735"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198005339534",
		"killerId": "76561198858640751",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67438.05,
			"y": 3390.7444,
			"z": 93688.04
		},
		"victimPosition": {
			"x": 67354.02,
			"y": 3258.597,
			"z": 97335.93
		},
		"killerVelocity": {
			"x": -19.16592,
			"y": 1.9286587,
			"z": 303.6389
		},
		"victimVelocity": {
			"x": 223.79646,
			"y": -46.402126,
			"z": 168.61292
		}
	}, {
		"_id": {
			"$oid": "63b7f39a0c20d42cf2c346ad"
		},
		"id": "8e2af63d-68e4-43f9-bf08-276f1be57403",
		"time": {
			"$numberLong": "1672999834202"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199044384038",
		"killerId": "76561198356590129",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73733.41,
			"y": 5170.3076,
			"z": 105783.09
		},
		"victimPosition": {
			"x": 73385.36,
			"y": 3734.5415,
			"z": 108944.72
		},
		"killerVelocity": {
			"x": -21.625093,
			"y": 20.187683,
			"z": 279.58176
		},
		"victimVelocity": {
			"x": -76.05705,
			"y": -292.0055,
			"z": -133.59903
		}
	}, {
		"_id": {
			"$oid": "63b85c540a1a8b20cd2cdf02"
		},
		"id": "52c975e6-ed07-4f7d-aa6a-bb8cde81a52b",
		"time": {
			"$numberLong": "1673026644276"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198385806874",
		"killerId": "76561199389899023",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51389.86,
			"y": 279.48843,
			"z": 118622.2
		},
		"victimPosition": {
			"x": 52639.44,
			"y": 279.81613,
			"z": 118976.08
		},
		"killerVelocity": {
			"x": 1.1304888,
			"y": -0.00030248612,
			"z": -6.02955
		},
		"victimVelocity": {
			"x": 126.99779,
			"y": -2.0224957,
			"z": 20.831644
		}
	}, {
		"_id": {
			"$oid": "63b85fce0a1a8b20cd2cdf57"
		},
		"id": "fd47f471-fe20-433f-b52e-d44517bd1529",
		"time": {
			"$numberLong": "1673027534149"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198822853364",
		"killerId": "76561198280125225",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83806.76,
			"y": 500.2206,
			"z": 93458.79
		},
		"victimPosition": {
			"x": 85059.23,
			"y": 543.9006,
			"z": 92507.016
		},
		"killerVelocity": {
			"x": 333.6038,
			"y": 26.62465,
			"z": -186.70247
		},
		"victimVelocity": {
			"x": -205.07913,
			"y": 56.140522,
			"z": -167.16492
		}
	}, {
		"_id": {
			"$oid": "63b868cb0a1a8b20cd2ce02f"
		},
		"id": "64a1b41d-16cd-4761-9f72-144c3ce17d69",
		"time": {
			"$numberLong": "1673029835838"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197962364929",
		"killerId": "76561199396930044",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68350.99,
			"y": 752.6248,
			"z": 113104.37
		},
		"victimPosition": {
			"x": 71657.82,
			"y": 4620.9927,
			"z": 100642.72
		},
		"killerVelocity": {
			"x": 312.19986,
			"y": -46.340656,
			"z": -170.3557
		},
		"victimVelocity": {
			"x": -20.836176,
			"y": 49.55902,
			"z": 118.16658
		}
	}, {
		"_id": {
			"$oid": "63b869d70a1a8b20cd2ce048"
		},
		"id": "46efbb6a-66b5-4f3d-8edb-c7eb2eaf073e",
		"time": {
			"$numberLong": "1673030103523"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198356590129",
		"killerId": "76561199396930044",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51659.562,
			"y": 279.43457,
			"z": 118742.14
		},
		"victimPosition": {
			"x": 51653.83,
			"y": 279.49014,
			"z": 118742.695
		},
		"killerVelocity": {
			"x": 95.585884,
			"y": 0.027757548,
			"z": 23.11936
		},
		"victimVelocity": {
			"x": -40.85687,
			"y": 0.0016742796,
			"z": -9.985324
		}
	}, {
		"_id": {
			"$oid": "63b87ee30a1a8b20cd2ce1d4"
		},
		"id": "5758a473-333c-4a25-bfec-18b518c8b6bf",
		"time": {
			"$numberLong": "1673035491279"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198027355575",
		"killerId": "76561199180679229",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83846.03,
			"y": 2323.3345,
			"z": 85950.086
		},
		"victimPosition": {
			"x": 84499.49,
			"y": 1078.0934,
			"z": 86064.805
		},
		"killerVelocity": {
			"x": 56.910576,
			"y": -139.3028,
			"z": -189.52098
		},
		"victimVelocity": {
			"x": -22.852419,
			"y": -5.79512,
			"z": -20.141138
		}
	}, {
		"_id": {
			"$oid": "63b87f9b0a1a8b20cd2ce1e3"
		},
		"id": "1db139fb-36b7-45a8-aed7-f36c6973e348",
		"time": {
			"$numberLong": "1673035675998"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198866622701",
		"killerId": "76561199401194157",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100096.35,
			"y": 1597.4786,
			"z": 86722.28
		},
		"victimPosition": {
			"x": 103644.164,
			"y": 2009.7562,
			"z": 84847.7
		},
		"killerVelocity": {
			"x": 190.91452,
			"y": 7.142844,
			"z": -90.00294
		},
		"victimVelocity": {
			"x": 179.55997,
			"y": -25.585047,
			"z": -89.43465
		}
	}, {
		"_id": {
			"$oid": "63b884f00a1a8b20cd2ce277"
		},
		"id": "5b804ca3-b943-4e9c-8809-8d9ab49d97d3",
		"time": {
			"$numberLong": "1673037040311"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199115201881",
		"killerId": "76561199040945899",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50962.6,
			"y": 279.49597,
			"z": 118701.77
		},
		"victimPosition": {
			"x": 51092.082,
			"y": 279.39725,
			"z": 118497.48
		},
		"killerVelocity": {
			"x": 0.08307415,
			"y": 0.0001417473,
			"z": -0.34223285
		},
		"victimVelocity": {
			"x": 0.71623904,
			"y": -0.01078634,
			"z": 0.7916392
		}
	}, {
		"_id": {
			"$oid": "63b885340a1a8b20cd2ce280"
		},
		"id": "28be42f1-b379-471b-b77d-7c48811b55e6",
		"time": {
			"$numberLong": "1673037108136"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197998961977",
		"killerId": "76561199040945899",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51107.414,
			"y": 279.40237,
			"z": 118543.35
		},
		"victimPosition": {
			"x": 51131.258,
			"y": 279.3658,
			"z": 118493.58
		},
		"killerVelocity": {
			"x": 3.554431,
			"y": -0.0836728,
			"z": -11.202879
		},
		"victimVelocity": {
			"x": 23.410015,
			"y": 0.124146394,
			"z": -9.729774
		}
	}, {
		"_id": {
			"$oid": "63b889000a1a8b20cd2ce2be"
		},
		"id": "69f20e84-1a9b-48ac-82a4-e15a78680b0d",
		"time": {
			"$numberLong": "1673038080398"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198202953400",
		"killerId": "76561199442641427",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 141226.83,
			"y": 2258.849,
			"z": 52280.11
		},
		"victimPosition": {
			"x": 144716.62,
			"y": 1999.6234,
			"z": 50724.6
		},
		"killerVelocity": {
			"x": 366.8522,
			"y": -38.12564,
			"z": -22.502151
		},
		"victimVelocity": {
			"x": -98.14439,
			"y": -18.485458,
			"z": 234.06429
		}
	}, {
		"_id": {
			"$oid": "63b8915b0a1a8b20cd2ce383"
		},
		"id": "55b0834e-1093-4fd6-8d12-a554759a9d5f",
		"time": {
			"$numberLong": "1673040219558"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199442641427",
		"killerId": "76561198410285683",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 131179.42,
			"y": 1930.7844,
			"z": 40935.105
		},
		"victimPosition": {
			"x": 131457.73,
			"y": 1400.1038,
			"z": 40155.152
		},
		"killerVelocity": {
			"x": 155.61201,
			"y": -135.77388,
			"z": -352.4032
		},
		"victimVelocity": {
			"x": -86.70034,
			"y": 54.414223,
			"z": 363.0946
		}
	}, {
		"_id": {
			"$oid": "63b892f60a1a8b20cd2ce3a8"
		},
		"id": "44d2c3d4-a5a7-497c-8e9d-3e06b2635e0d",
		"time": {
			"$numberLong": "1673040630633"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198363580967",
		"killerId": "76561199147282184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73705.67,
			"y": 1038.5242,
			"z": 98901.65
		},
		"victimPosition": {
			"x": 75170.93,
			"y": 1780.3992,
			"z": 94773.75
		},
		"killerVelocity": {
			"x": -17.510906,
			"y": -103.75076,
			"z": -113.14392
		},
		"victimVelocity": {
			"x": 181.99199,
			"y": -35.425213,
			"z": -24.10844
		}
	}, {
		"_id": {
			"$oid": "63b893a20a1a8b20cd2ce3bd"
		},
		"id": "bd2dfb43-e8cf-402d-89ed-4cfe748b8fc1",
		"time": {
			"$numberLong": "1673040802271"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199005453437",
		"killerId": "76561198363580967",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73136.625,
			"y": 1649.1084,
			"z": 92858.79
		},
		"victimPosition": {
			"x": 74706.04,
			"y": 1321.8823,
			"z": 90872.38
		},
		"killerVelocity": {
			"x": 241.02306,
			"y": -46.669506,
			"z": -289.16788
		},
		"victimVelocity": {
			"x": -19.09741,
			"y": 18.027964,
			"z": 275.37332
		}
	}, {
		"_id": {
			"$oid": "63b8a47b0a1a8b20cd2ce54b"
		},
		"id": "673ee3cb-608c-4c4b-a5fb-bba89d990d6f",
		"time": {
			"$numberLong": "1673045115625"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198435131387",
		"killerId": "76561198028534691",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60667.47,
			"y": 1373.8104,
			"z": 114963.23
		},
		"victimPosition": {
			"x": 61948.508,
			"y": 1513.1685,
			"z": 110513.305
		},
		"killerVelocity": {
			"x": 305.30743,
			"y": 21.949923,
			"z": -161.32207
		},
		"victimVelocity": {
			"x": -77.65933,
			"y": 141.8847,
			"z": -109.49585
		}
	}, {
		"_id": {
			"$oid": "63b8ab850a1a8b20cd2ce600"
		},
		"id": "b3437cc7-94e7-4fb0-9db9-edd0e9045606",
		"time": {
			"$numberLong": "1673046917504"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199120782461",
		"killerId": "76561198865816180",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 110962.05,
			"y": 1514.4285,
			"z": 72813.586
		},
		"victimPosition": {
			"x": 112910.3,
			"y": 1401.9628,
			"z": 71288.86
		},
		"killerVelocity": {
			"x": -61.09304,
			"y": -12.600386,
			"z": -226.42331
		},
		"victimVelocity": {
			"x": 160.79877,
			"y": 49.593727,
			"z": -43.111485
		}
	}, {
		"_id": {
			"$oid": "63b8b4de0a1a8b20cd2ce6cc"
		},
		"id": "f6a28a19-c7cd-45e0-aa69-1765c41d0f53",
		"time": {
			"$numberLong": "1673049310262"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199442641427",
		"killerId": "76561199433775877",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 118551.08,
			"y": 2474.7583,
			"z": 51238.996
		},
		"victimPosition": {
			"x": 125012.3,
			"y": 2039.2925,
			"z": 47126.85
		},
		"killerVelocity": {
			"x": 227.25426,
			"y": -9.257199,
			"z": -118.182625
		},
		"victimVelocity": {
			"x": -18.614428,
			"y": 19.644634,
			"z": -195.39313
		}
	}, {
		"_id": {
			"$oid": "63b8b4ee0a1a8b20cd2ce6cf"
		},
		"id": "cb6be484-8756-43d0-89d5-c49b65ea0096",
		"time": {
			"$numberLong": "1673049326597"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197972065410",
		"killerId": "76561199144729508",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66600.805,
			"y": 3615.4385,
			"z": 97350.09
		},
		"victimPosition": {
			"x": 71670.01,
			"y": 559.52594,
			"z": 96835.69
		},
		"killerVelocity": {
			"x": -295.8836,
			"y": 74.57503,
			"z": -133.73486
		},
		"victimVelocity": {
			"x": 18.780443,
			"y": -44.041607,
			"z": 54.45346
		}
	}, {
		"_id": {
			"$oid": "63b8b4f50a1a8b20cd2ce6d1"
		},
		"id": "fe918834-341d-406f-b59a-3aa7d2970346",
		"time": {
			"$numberLong": "1673049333150"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199144729508",
		"killerId": "76561199012175819",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72459.72,
			"y": 2822.5386,
			"z": 97249.8
		},
		"victimPosition": {
			"x": 64711.562,
			"y": 3485.1445,
			"z": 96599.78
		},
		"killerVelocity": {
			"x": -279.432,
			"y": 24.797499,
			"z": -2.0515623
		},
		"victimVelocity": {
			"x": -258.65424,
			"y": -182.0285,
			"z": -76.03781
		}
	}, {
		"_id": {
			"$oid": "63b8c1de0a1a8b20cd2ce800"
		},
		"id": "cc658cc6-7ead-416a-b7c1-c0a78d3c1f6e",
		"time": {
			"$numberLong": "1673052638155"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199442641427",
		"killerId": "76561198802339021",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62267.332,
			"y": 2293.1248,
			"z": 110157.41
		},
		"victimPosition": {
			"x": 71984.734,
			"y": 932.6334,
			"z": 103418.98
		},
		"killerVelocity": {
			"x": 319.26346,
			"y": -16.506224,
			"z": -228.90288
		},
		"victimVelocity": {
			"x": 185.41219,
			"y": -129.9883,
			"z": -207.98328
		}
	}, {
		"_id": {
			"$oid": "63b8d9290a1a8b20cd2cea1e"
		},
		"id": "e48f4e80-7ee1-4989-b0f0-65917c1203a4",
		"time": {
			"$numberLong": "1673058601957"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198816839430",
		"killerId": "76561198960670727",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77304.09,
			"y": 3381.3914,
			"z": 95863.63
		},
		"victimPosition": {
			"x": 77889.766,
			"y": 3203.0056,
			"z": 95167.94
		},
		"killerVelocity": {
			"x": 15.29947,
			"y": -103.23317,
			"z": -105.06771
		},
		"victimVelocity": {
			"x": 92.55396,
			"y": 31.407314,
			"z": 126.13764
		}
	}, {
		"_id": {
			"$oid": "63b8f00f0a1a8b20cd2cebea"
		},
		"id": "6bab8eba-d301-4525-9d17-0edfdabeff0b",
		"time": {
			"$numberLong": "1673064463041"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 2,
		"victimId": "76561199053285936",
		"killerId": "76561198086261144",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 55740.27,
			"y": 301.48492,
			"z": 117707.83
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 27.813713,
			"y": -107.47619,
			"z": -70.63265
		}
	}, {
		"_id": {
			"$oid": "63b8f08d0a1a8b20cd2cebf4"
		},
		"id": "94243c13-58b1-437d-a219-389fe7c68df6",
		"time": {
			"$numberLong": "1673064589671"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199053285936",
		"killerId": "76561198086261144",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57514.81,
			"y": 1251.3752,
			"z": 116494.47
		},
		"victimPosition": {
			"x": 58425.203,
			"y": 1679.079,
			"z": 116373.64
		},
		"killerVelocity": {
			"x": 144.5638,
			"y": 9.856827,
			"z": -162.35474
		},
		"victimVelocity": {
			"x": 103.467766,
			"y": 3.459571,
			"z": -51.711025
		}
	}, {
		"_id": {
			"$oid": "63b8fd970a1a8b20cd2ceccb"
		},
		"id": "85fa0d27-5bee-4a21-9cf5-5464a7c9e357",
		"time": {
			"$numberLong": "1673067927544"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198328742825",
		"killerId": "76561199010968952",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 125058.39,
			"y": 3562.4216,
			"z": 57161.977
		},
		"victimPosition": {
			"x": 129720.99,
			"y": 5411.8057,
			"z": 59900.305
		},
		"killerVelocity": {
			"x": 254.51218,
			"y": 61.458294,
			"z": 262.56616
		},
		"victimVelocity": {
			"x": -237.06702,
			"y": -46.931347,
			"z": 19.054348
		}
	}, {
		"_id": {
			"$oid": "63b92e160a1a8b20cd2cf09f"
		},
		"id": "30c60837-aceb-4f98-9d28-432fe6e75eee",
		"time": {
			"$numberLong": "1673080342180"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199049662064",
		"killerId": "76561198196874474",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57178.17,
			"y": 495.85,
			"z": 115955.234
		},
		"victimPosition": {
			"x": 56975.438,
			"y": 496.55054,
			"z": 116498.47
		},
		"killerVelocity": {
			"x": -222.62354,
			"y": 29.24468,
			"z": 173.91788
		},
		"victimVelocity": {
			"x": -130.26616,
			"y": -98.522026,
			"z": 109.22478
		}
	}, {
		"_id": {
			"$oid": "63b92e2e0a1a8b20cd2cf0a2"
		},
		"id": "570d0339-9ea2-4487-ba44-e4fe2a333172",
		"time": {
			"$numberLong": "1673080366040"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199081580274",
		"killerId": "76561198212191571",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52314.15,
			"y": 1515.8671,
			"z": 120371.12
		},
		"victimPosition": {
			"x": 52416.49,
			"y": 280.28632,
			"z": 118920.92
		},
		"killerVelocity": {
			"x": -195.91032,
			"y": -38.234097,
			"z": -14.853686
		},
		"victimVelocity": {
			"x": 90.07823,
			"y": 0.22344151,
			"z": 10.936024
		}
	}, {
		"_id": {
			"$oid": "63b92e3d0a1a8b20cd2cf0a5"
		},
		"id": "c7806e01-5592-4e77-bf63-b979ebfbcb19",
		"time": {
			"$numberLong": "1673080381429"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198878782197",
		"killerId": "76561198196874474",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51345.36,
			"y": 790.9017,
			"z": 118329.875
		},
		"victimPosition": {
			"x": 51137.59,
			"y": 279.2326,
			"z": 118648.37
		},
		"killerVelocity": {
			"x": -137.70567,
			"y": 19.888468,
			"z": -121.27217
		},
		"victimVelocity": {
			"x": -33.63719,
			"y": 0.098798946,
			"z": -0.055155054
		}
	}, {
		"_id": {
			"$oid": "63b92e8f0a1a8b20cd2cf0a8"
		},
		"id": "015272c1-80ac-44ca-8418-1be7458dd0cd",
		"time": {
			"$numberLong": "1673080463047"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198878782197",
		"killerId": "76561199081580274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53253.03,
			"y": 564.82697,
			"z": 118079.98
		},
		"victimPosition": {
			"x": 54003.203,
			"y": 626.3314,
			"z": 118021.13
		},
		"killerVelocity": {
			"x": 46.987885,
			"y": 42.179203,
			"z": -124.25828
		},
		"victimVelocity": {
			"x": -24.298027,
			"y": -8.29759,
			"z": 86.214874
		}
	}, {
		"_id": {
			"$oid": "63b92fb10a1a8b20cd2cf0c2"
		},
		"id": "5f6b432d-554f-4dac-992e-e12b594a2f4d",
		"time": {
			"$numberLong": "1673080753734"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198878782197",
		"killerId": "76561199081580274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51051.484,
			"y": 279.35797,
			"z": 118495.734
		},
		"victimPosition": {
			"x": 51134.64,
			"y": 278.67587,
			"z": 118398.22
		},
		"killerVelocity": {
			"x": 11.689559,
			"y": 0.06651252,
			"z": -13.30914
		},
		"victimVelocity": {
			"x": 7.8432155,
			"y": 0.024983846,
			"z": -3.6225753
		}
	}, {
		"_id": {
			"$oid": "63b935a50a1a8b20cd2cf120"
		},
		"id": "9b80175b-7fee-4c7e-a8e2-a6ec9c8240ae",
		"time": {
			"$numberLong": "1673082277945"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199049662064",
		"killerId": "76561198258507238",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73306.37,
			"y": 575.1402,
			"z": 110835.805
		},
		"victimPosition": {
			"x": 74313.73,
			"y": 841.9885,
			"z": 109480.336
		},
		"killerVelocity": {
			"x": 154.28244,
			"y": -3.1872466,
			"z": -252.23424
		},
		"victimVelocity": {
			"x": 162.55627,
			"y": 123.504524,
			"z": -19.519188
		}
	}, {
		"_id": {
			"$oid": "63b9366c0a1a8b20cd2cf127"
		},
		"id": "5738c142-a901-4304-93d8-754cad661fe3",
		"time": {
			"$numberLong": "1673082476678"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199132644524",
		"killerId": "76561198258507238",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56251.758,
			"y": 1362.4952,
			"z": 112693.234
		},
		"victimPosition": {
			"x": 53545.703,
			"y": 1355.5875,
			"z": 114350.59
		},
		"killerVelocity": {
			"x": -336.87573,
			"y": 6.300756,
			"z": 188.15935
		},
		"victimVelocity": {
			"x": 214.11159,
			"y": 9.464253,
			"z": -94.4195
		}
	}, {
		"_id": {
			"$oid": "63b96ff20a1a8b20cd2cf4c0"
		},
		"id": "7ce8c9da-76ea-47f7-9d56-e606ae1fa08a",
		"time": {
			"$numberLong": "1673097202950"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199121465996",
		"killerId": "76561199055429714",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79495.08,
			"y": 4040.1628,
			"z": 95466.44
		},
		"victimPosition": {
			"x": 81674.53,
			"y": 4331.061,
			"z": 94470.695
		},
		"killerVelocity": {
			"x": 267.78802,
			"y": 16.76974,
			"z": -198.54996
		},
		"victimVelocity": {
			"x": 316.498,
			"y": 8.958291,
			"z": -85.154076
		}
	}, {
		"_id": {
			"$oid": "63b992660a1a8b20cd2cf735"
		},
		"id": "d6233e36-9762-4a6d-b57f-8ba585ee8038",
		"time": {
			"$numberLong": "1673106022371"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199115201881",
		"killerId": "76561199466271626",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56875.3,
			"y": 698.65967,
			"z": 119623.54
		},
		"victimPosition": {
			"x": 61322.53,
			"y": 923.80084,
			"z": 119452.875
		},
		"killerVelocity": {
			"x": 209.9415,
			"y": 32.34837,
			"z": 21.031597
		},
		"victimVelocity": {
			"x": 119.80703,
			"y": 14.779453,
			"z": -126.68394
		}
	}, {
		"_id": {
			"$oid": "63b9940a0a1a8b20cd2cf75a"
		},
		"id": "fc4f8a03-2cc8-4721-bf52-dbcb96650715",
		"time": {
			"$numberLong": "1673106442675"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198441881267",
		"killerId": "76561199466271626",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58678.242,
			"y": 472.25635,
			"z": 115284.52
		},
		"victimPosition": {
			"x": 59114.5,
			"y": 313.74365,
			"z": 114536.32
		},
		"killerVelocity": {
			"x": 223.30759,
			"y": 10.1119375,
			"z": -137.72699
		},
		"victimVelocity": {
			"x": 65.214,
			"y": -50.66297,
			"z": -70.14011
		}
	}, {
		"_id": {
			"$oid": "63b996620a1a8b20cd2cf77f"
		},
		"id": "217075f9-ddfe-4c5b-bc9c-9dda63e3d82f",
		"time": {
			"$numberLong": "1673107042409"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198129307330",
		"killerId": "76561198860835931",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 137300.47,
			"y": 2527.0354,
			"z": 73810.61
		},
		"victimPosition": {
			"x": 139901.8,
			"y": 1957.0568,
			"z": 73433.11
		},
		"killerVelocity": {
			"x": 358.57138,
			"y": -103.073685,
			"z": 92.08658
		},
		"victimVelocity": {
			"x": -316.35806,
			"y": 64.17704,
			"z": 128.48134
		}
	}, {
		"_id": {
			"$oid": "63b9d895c587f50eddb500be"
		},
		"id": "e941d4df-67b3-4429-99ac-09bb245082db",
		"time": {
			"$numberLong": "1673123989570"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199220363262",
		"killerId": "76561198324327930",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50762.26,
			"y": 279.3691,
			"z": 118385.76
		},
		"victimPosition": {
			"x": 50721.97,
			"y": 279.4916,
			"z": 118517.16
		},
		"killerVelocity": {
			"x": -1.671507,
			"y": -0.07532783,
			"z": 4.9406967
		},
		"victimVelocity": {
			"x": -11.261728,
			"y": 0.00014732778,
			"z": -2.2826574
		}
	}, {
		"_id": {
			"$oid": "63b9da78c587f50eddb500e3"
		},
		"id": "abd97fce-82db-4d3c-b601-8ab4ba330413",
		"time": {
			"$numberLong": "1673124472363"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199220363262",
		"killerId": "76561198324327930",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55067.74,
			"y": 1056.6096,
			"z": 118459.234
		},
		"victimPosition": {
			"x": 88286.484,
			"y": 1488.1864,
			"z": 73238.42
		},
		"killerVelocity": {
			"x": 117.849396,
			"y": 42.904358,
			"z": -80.348465
		},
		"victimVelocity": {
			"x": -148.47443,
			"y": -157.25543,
			"z": -212.96857
		}
	}, {
		"_id": {
			"$oid": "63b9ebb2c587f50eddb5027f"
		},
		"id": "a21fe4e6-a11f-44be-9c4e-d1b78fa0083b",
		"time": {
			"$numberLong": "1673128882181"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198356590129",
		"killerId": "76561199085613365",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88655.05,
			"y": 1354.226,
			"z": 73724.375
		},
		"victimPosition": {
			"x": 91718.695,
			"y": 2031.4232,
			"z": 76814.55
		},
		"killerVelocity": {
			"x": -69.9182,
			"y": 40.6037,
			"z": -251.39731
		},
		"victimVelocity": {
			"x": -52.66673,
			"y": 67.63014,
			"z": 276.23862
		}
	}, {
		"_id": {
			"$oid": "63b9ed15c587f50eddb502a6"
		},
		"id": "5dd89931-daeb-4576-8e28-23f3bed119e1",
		"time": {
			"$numberLong": "1673129237424"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199120820950",
		"killerId": "76561198356590129",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73184.71,
			"y": 1996.923,
			"z": 99134.22
		},
		"victimPosition": {
			"x": 78052.586,
			"y": 1353.1279,
			"z": 89008.45
		},
		"killerVelocity": {
			"x": 178.01375,
			"y": -38.95057,
			"z": -354.87656
		},
		"victimVelocity": {
			"x": 152.42404,
			"y": -53.125603,
			"z": -59.173695
		}
	}, {
		"_id": {
			"$oid": "63b9f20fc587f50eddb50308"
		},
		"id": "d841690a-45e4-452d-b2c7-bc6cf7dc3ab3",
		"time": {
			"$numberLong": "1673130511437"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198886719254",
		"killerId": "76561199461429370",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53380.754,
			"y": 278.8137,
			"z": 118950.34
		},
		"victimPosition": {
			"x": 55542.83,
			"y": 735.5638,
			"z": 119423.3
		},
		"killerVelocity": {
			"x": -0.90393966,
			"y": 0.83245474,
			"z": 0.80214655
		},
		"victimVelocity": {
			"x": 172.06587,
			"y": 53.842888,
			"z": 41.19907
		}
	}, {
		"_id": {
			"$oid": "63b9f280c587f50eddb50312"
		},
		"id": "f32e3800-b6cb-4deb-98a0-afc415e02e0c",
		"time": {
			"$numberLong": "1673130624459"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198117038184",
		"killerId": "76561199096176276",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63401.645,
			"y": 899.89374,
			"z": 109737.05
		},
		"victimPosition": {
			"x": 64531.168,
			"y": 1931.7028,
			"z": 107671.95
		},
		"killerVelocity": {
			"x": 135.898,
			"y": 13.68033,
			"z": -316.79874
		},
		"victimVelocity": {
			"x": 35.224895,
			"y": -6.237094,
			"z": -250.84521
		}
	}, {
		"_id": {
			"$oid": "63b9f412c587f50eddb50330"
		},
		"id": "4433eaa6-4351-4e13-a6b9-ed0bbfcc86b3",
		"time": {
			"$numberLong": "1673131026127"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198016022937",
		"killerId": "76561198886719254",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101890.52,
			"y": 3177.5588,
			"z": 81924.98
		},
		"victimPosition": {
			"x": 103645.5,
			"y": 1341.5967,
			"z": 80047.37
		},
		"killerVelocity": {
			"x": 276.9743,
			"y": 54.137535,
			"z": -241.79071
		},
		"victimVelocity": {
			"x": -113.99364,
			"y": -186.39659,
			"z": -219.4583
		}
	}, {
		"_id": {
			"$oid": "63ba6d8ddc305315a7180ef7"
		},
		"id": "22b80bc4-1469-4fd5-b7eb-fee31cac5037",
		"time": {
			"$numberLong": "1673162125127"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199226072648",
		"killerId": "76561199401436824",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72206.73,
			"y": 2418.2224,
			"z": 112059.04
		},
		"victimPosition": {
			"x": 71647.9,
			"y": 2755.0945,
			"z": 111801.9
		},
		"killerVelocity": {
			"x": -306.69727,
			"y": 111.005646,
			"z": -7.2044225
		},
		"victimVelocity": {
			"x": 246.04204,
			"y": 36.31681,
			"z": -119.65346
		}
	}, {
		"_id": {
			"$oid": "63ba6ee0dc305315a7180f08"
		},
		"id": "3d3a5fc6-be73-43b5-8bee-cf73ee64fb54",
		"time": {
			"$numberLong": "1673162464068"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199226072648",
		"killerId": "76561199401436824",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73350.49,
			"y": 3048.2275,
			"z": 98859.49
		},
		"victimPosition": {
			"x": 70947.78,
			"y": 3771.791,
			"z": 95940.375
		},
		"killerVelocity": {
			"x": -123.87815,
			"y": 34.21339,
			"z": -130.8537
		},
		"victimVelocity": {
			"x": 23.790983,
			"y": -251.12338,
			"z": -116.20455
		}
	}, {
		"_id": {
			"$oid": "63ba86ebdc305315a71810fc"
		},
		"id": "619cce8f-5167-4468-ad90-bbe81196beb6",
		"time": {
			"$numberLong": "1673168619004"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199058078263",
		"killerId": "76561198346122277",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60574.77,
			"y": 830.2698,
			"z": 112132.69
		},
		"victimPosition": {
			"x": 61657.94,
			"y": 638.5381,
			"z": 110372.945
		},
		"killerVelocity": {
			"x": 230.0707,
			"y": -12.879656,
			"z": -272.98788
		},
		"victimVelocity": {
			"x": -144.04912,
			"y": -0.5785549,
			"z": 75.19799
		}
	}, {
		"_id": {
			"$oid": "63ba8d2adc305315a7181165"
		},
		"id": "be00304c-6631-4eb1-b005-9929111f6804",
		"time": {
			"$numberLong": "1673170218897"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199102859221",
		"killerId": "76561199058078263",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75909.73,
			"y": 8437.865,
			"z": 94766.03
		},
		"victimPosition": {
			"x": 74864.9,
			"y": 7470.589,
			"z": 87617.25
		},
		"killerVelocity": {
			"x": 39.964386,
			"y": -9.526697,
			"z": -317.88455
		},
		"victimVelocity": {
			"x": 29.979433,
			"y": 98.13496,
			"z": -333.12286
		}
	}, {
		"_id": {
			"$oid": "63ba9706dc305315a718121c"
		},
		"id": "83fb53ba-a131-4cfb-a79a-ec40df37700f",
		"time": {
			"$numberLong": "1673172742503"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198016022937",
		"killerId": "76561199131237024",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61781.805,
			"y": 2211.0437,
			"z": 111362.58
		},
		"victimPosition": {
			"x": 63154.77,
			"y": 2420.4016,
			"z": 110253.53
		},
		"killerVelocity": {
			"x": 249.21791,
			"y": 27.494072,
			"z": -166.55916
		},
		"victimVelocity": {
			"x": 269.9339,
			"y": 33.895515,
			"z": -191.77794
		}
	}, {
		"_id": {
			"$oid": "63ba99cadc305315a718123f"
		},
		"id": "04ffe7fd-32e8-4eee-9e3d-dcd39ce72af1",
		"time": {
			"$numberLong": "1673173450959"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199131237024",
		"killerId": "76561198286096593",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55543.125,
			"y": 1837.1233,
			"z": 114036.59
		},
		"victimPosition": {
			"x": 54482.664,
			"y": 2699.8965,
			"z": 113161.82
		},
		"killerVelocity": {
			"x": -143.10617,
			"y": 124.52382,
			"z": -146.1898
		},
		"victimVelocity": {
			"x": -90.58334,
			"y": 56.14115,
			"z": 47.471996
		}
	}, {
		"_id": {
			"$oid": "63ba9c7bdc305315a718126c"
		},
		"id": "038bd566-b95f-421f-a11c-3f1f7fd676dc",
		"time": {
			"$numberLong": "1673174139227"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199126544538",
		"killerId": "76561198286096593",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55392.305,
			"y": 2021.9459,
			"z": 106160.08
		},
		"victimPosition": {
			"x": 61415.77,
			"y": 366.45883,
			"z": 110841.05
		},
		"killerVelocity": {
			"x": 127.318,
			"y": -63.378056,
			"z": 180.04643
		},
		"victimVelocity": {
			"x": 113.766136,
			"y": 49.193806,
			"z": -94.24095
		}
	}, {
		"_id": {
			"$oid": "63bb119c973e27337a6fef51"
		},
		"id": "8c440318-131b-444c-91f5-fbed9db8d2a3",
		"time": {
			"$numberLong": "1673204124375"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199075715079",
		"killerId": "76561198033910202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61580.734,
			"y": 976.1117,
			"z": 113252.164
		},
		"victimPosition": {
			"x": 65302.27,
			"y": 2724.781,
			"z": 110714.93
		},
		"killerVelocity": {
			"x": 173.28964,
			"y": -58.452366,
			"z": -300.67584
		},
		"victimVelocity": {
			"x": -2.7934766,
			"y": 27.04105,
			"z": 52.836838
		}
	}, {
		"_id": {
			"$oid": "63bb1fbe973e27337a6ff05e"
		},
		"id": "d975b0f7-2dcd-4499-9f8e-25eb687ac0fa",
		"time": {
			"$numberLong": "1673207742278"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198126285727",
		"killerId": "76561198384321096",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85948.27,
			"y": 1669.3322,
			"z": 86391.08
		},
		"victimPosition": {
			"x": 87632.47,
			"y": 845.8055,
			"z": 85226.086
		},
		"killerVelocity": {
			"x": 88.49482,
			"y": -85.64368,
			"z": -307.2735
		},
		"victimVelocity": {
			"x": 63.634407,
			"y": 50.00637,
			"z": 104.84227
		}
	}, {
		"_id": {
			"$oid": "63bb2e7d973e27337a6ff17f"
		},
		"id": "b6a9bdc0-bbab-45c2-8555-08cd9c636a93",
		"time": {
			"$numberLong": "1673211517110"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199101196379",
		"killerId": "76561199173503080",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52330.97,
			"y": 412.1996,
			"z": 118705.086
		},
		"victimPosition": {
			"x": 53647.832,
			"y": 318.18878,
			"z": 119123.234
		},
		"killerVelocity": {
			"x": 142.02048,
			"y": 14.341369,
			"z": 47.518044
		},
		"victimVelocity": {
			"x": 103.28492,
			"y": -43.49087,
			"z": -24.047787
		}
	}, {
		"_id": {
			"$oid": "63bb2f2e973e27337a6ff18d"
		},
		"id": "9e4d8a11-ed7a-44fe-8de1-3bb91a627bfb",
		"time": {
			"$numberLong": "1673211694162"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199173503080",
		"killerId": "76561198033910202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54165.23,
			"y": 563.38586,
			"z": 120032.29
		},
		"victimPosition": {
			"x": 53065.65,
			"y": 283.46765,
			"z": 118953.72
		},
		"killerVelocity": {
			"x": -257.69916,
			"y": -6.748495,
			"z": -245.13347
		},
		"victimVelocity": {
			"x": -20.568596,
			"y": -16.447086,
			"z": -86.639915
		}
	}, {
		"_id": {
			"$oid": "63bb3558973e27337a6ff20e"
		},
		"id": "bb1f5701-2f25-4117-adcd-886aaaedc227",
		"time": {
			"$numberLong": "1673213272130"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198280125225",
		"killerId": "76561198181715289",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 102496.2,
			"y": 1378.6252,
			"z": 89350.38
		},
		"victimPosition": {
			"x": 112064.484,
			"y": 1543.5281,
			"z": 84850.51
		},
		"killerVelocity": {
			"x": -76.134735,
			"y": -54.198177,
			"z": 197.7167
		},
		"victimVelocity": {
			"x": 252.77698,
			"y": 72.87922,
			"z": 122.02488
		}
	}, {
		"_id": {
			"$oid": "63bb69dd973e27337a6ff6af"
		},
		"id": "36c58720-21e0-45c0-958b-58d759e8f57a",
		"time": {
			"$numberLong": "1673226717256"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198156796666",
		"killerId": "76561198873439288",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94013.24,
			"y": 1741.8033,
			"z": 85353.94
		},
		"victimPosition": {
			"x": 105454.63,
			"y": 802.3337,
			"z": 83627.69
		},
		"killerVelocity": {
			"x": 348.85788,
			"y": -38.04076,
			"z": -49.52719
		},
		"victimVelocity": {
			"x": 60.143585,
			"y": -55.332985,
			"z": 333.15134
		}
	}, {
		"_id": {
			"$oid": "63bb79e5973e27337a6ff83a"
		},
		"id": "ec07d218-94fa-4427-8446-c2b58d552b4f",
		"time": {
			"$numberLong": "1673230821692"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199039234838",
		"killerId": "76561198093920565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50720.344,
			"y": 2375.6848,
			"z": 117265.77
		},
		"victimPosition": {
			"x": 61100.51,
			"y": 965.1036,
			"z": 118614.13
		},
		"killerVelocity": {
			"x": 375.7972,
			"y": -83.16172,
			"z": 33.919537
		},
		"victimVelocity": {
			"x": 15.504268,
			"y": 17.146254,
			"z": 86.50806
		}
	}, {
		"_id": {
			"$oid": "63bb7ae2973e27337a6ff856"
		},
		"id": "76c034c2-3110-45af-922e-0b0dddedba61",
		"time": {
			"$numberLong": "1673231074277"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199039234838",
		"killerId": "76561198093920565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51534.367,
			"y": 279.4695,
			"z": 118837.06
		},
		"victimPosition": {
			"x": 83570.44,
			"y": 475.2951,
			"z": 97276.04
		},
		"killerVelocity": {
			"x": -0.00006809173,
			"y": -0.0000827983,
			"z": 0.0007107578
		},
		"victimVelocity": {
			"x": 95.39711,
			"y": 9.6968355,
			"z": 13.545602
		}
	}, {
		"_id": {
			"$oid": "63bb7edf973e27337a6ff8c7"
		},
		"id": "b3255654-8ed3-4a58-b832-d355684e2428",
		"time": {
			"$numberLong": "1673232095091"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198019492093",
		"killerId": "76561198183927851",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57928.17,
			"y": 1941.4342,
			"z": 114331.83
		},
		"victimPosition": {
			"x": 58024.25,
			"y": 2049.7444,
			"z": 113900.27
		},
		"killerVelocity": {
			"x": 101.59635,
			"y": 69.18614,
			"z": -235.70464
		},
		"victimVelocity": {
			"x": 0.5252248,
			"y": 31.805326,
			"z": -109.14193
		}
	}, {
		"_id": {
			"$oid": "63bb8481973e27337a6ff949"
		},
		"id": "ccd5af91-a0cd-4420-9aaa-e38de9b4e4a2",
		"time": {
			"$numberLong": "1673233537498"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198183927851",
		"killerId": "76561198122755845",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73388.31,
			"y": 1022.7527,
			"z": 116925.73
		},
		"victimPosition": {
			"x": 72791.63,
			"y": 588.6728,
			"z": 118042.79
		},
		"killerVelocity": {
			"x": -212.60822,
			"y": -62.992203,
			"z": 188.0361
		},
		"victimVelocity": {
			"x": -93.674805,
			"y": 15.078902,
			"z": -156.00053
		}
	}, {
		"_id": {
			"$oid": "63bb8a2c973e27337a6ff9bd"
		},
		"id": "414fe2b2-dc5c-46e8-b080-d51dfe744efb",
		"time": {
			"$numberLong": "1673234988650"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198832840395",
		"killerId": "76561198170435241",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 78357.375,
			"y": 5689.443,
			"z": 103028.836
		},
		"victimPosition": {
			"x": 91586.266,
			"y": 491.1961,
			"z": 92961.15
		},
		"killerVelocity": {
			"x": 184.88182,
			"y": 65.32089,
			"z": -225.97284
		},
		"victimVelocity": {
			"x": -243.67134,
			"y": -0.7038804,
			"z": 247.23364
		}
	}, {
		"_id": {
			"$oid": "63bb8efe973e27337a6ffa2b"
		},
		"id": "69f64ece-9036-4251-83bf-5f538bc3fc90",
		"time": {
			"$numberLong": "1673236222628"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198151068299",
		"killerId": "76561198832840395",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 109279.72,
			"y": 2214.4395,
			"z": 81037.766
		},
		"victimPosition": {
			"x": 111567.33,
			"y": 1671.0603,
			"z": 79181.016
		},
		"killerVelocity": {
			"x": 236.98898,
			"y": 15.148527,
			"z": -220.76132
		},
		"victimVelocity": {
			"x": -106.14265,
			"y": -51.287292,
			"z": 192.17474
		}
	}, {
		"_id": {
			"$oid": "63bbe04c973e27337a6ffd7f"
		},
		"id": "0d74ce60-202e-4c13-879c-ca5901a98def",
		"time": {
			"$numberLong": "1673257036806"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199318909274",
		"killerId": "76561199410676407",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60763.594,
			"y": 1630.1193,
			"z": 108395.54
		},
		"victimPosition": {
			"x": 61990.594,
			"y": 1739.5284,
			"z": 106090.74
		},
		"killerVelocity": {
			"x": 297.61432,
			"y": -0.23184827,
			"z": -232.84511
		},
		"victimVelocity": {
			"x": 136.61183,
			"y": -21.1494,
			"z": -161.64478
		}
	}, {
		"_id": {
			"$oid": "63bbf2c7973e27337a6ffdaa"
		},
		"id": "2163a3dc-59e8-49c1-9f9e-b9e68bb8378e",
		"time": {
			"$numberLong": "1673261767180"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199195718812",
		"killerId": "76561199260373039",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54956.66,
			"y": 2718.9968,
			"z": 115469.67
		},
		"victimPosition": {
			"x": 51361.31,
			"y": 1622.7339,
			"z": 116553.32
		},
		"killerVelocity": {
			"x": -344.63223,
			"y": -55.4404,
			"z": -18.55524
		},
		"victimVelocity": {
			"x": 190.76625,
			"y": 43.16499,
			"z": -50.90206
		}
	}, {
		"_id": {
			"$oid": "63bbf328973e27337a6ffdad"
		},
		"id": "1c76a901-e6c2-4398-b55a-cafd2943099b",
		"time": {
			"$numberLong": "1673261864668"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199260373039",
		"killerId": "76561199195718812",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58526.832,
			"y": 1497.3915,
			"z": 116519.12
		},
		"victimPosition": {
			"x": 57661.027,
			"y": 1873.5353,
			"z": 116290.27
		},
		"killerVelocity": {
			"x": 231.28555,
			"y": -0.6872451,
			"z": -124.15818
		},
		"victimVelocity": {
			"x": -88.85911,
			"y": -104.235,
			"z": 50.590374
		}
	}, {
		"_id": {
			"$oid": "63bc3b4b973e27337a6ffee1"
		},
		"id": "bedee4a1-d5bd-46ab-bc10-8c9552836668",
		"time": {
			"$numberLong": "1673280331713"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199260461177",
		"killerId": "76561199454277354",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52603.992,
			"y": 388.36343,
			"z": 118922.64
		},
		"victimPosition": {
			"x": 55137.516,
			"y": 937.31726,
			"z": 117317.555
		},
		"killerVelocity": {
			"x": 12.868096,
			"y": 1.8150659,
			"z": -0.15404248
		},
		"victimVelocity": {
			"x": -16.620888,
			"y": -37.034256,
			"z": -32.490154
		}
	}, {
		"_id": {
			"$oid": "63bc7d52973e27337a700227"
		},
		"id": "97d1b683-622c-452f-90f6-dd1f0ed320bc",
		"time": {
			"$numberLong": "1673297234434"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199198171619",
		"killerId": "76561197960480867",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61620.902,
			"y": 1331.0895,
			"z": 110857.164
		},
		"victimPosition": {
			"x": 62949.125,
			"y": 1150.0891,
			"z": 109420.4
		},
		"killerVelocity": {
			"x": 234.65962,
			"y": -8.021478,
			"z": -275.08063
		},
		"victimVelocity": {
			"x": 257.1424,
			"y": -146.31621,
			"z": -89.99585
		}
	}, {
		"_id": {
			"$oid": "63bc8428973e27337a7002cc"
		},
		"id": "84ee42a8-a18e-400b-91b6-fb01a643e2b0",
		"time": {
			"$numberLong": "1673298984933"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199136053490",
		"killerId": "76561198029168210",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92308.23,
			"y": 3680.9204,
			"z": 83515.97
		},
		"victimPosition": {
			"x": 103009.914,
			"y": 1115.514,
			"z": 79834.18
		},
		"killerVelocity": {
			"x": 229.01515,
			"y": -68.26792,
			"z": -342.47345
		},
		"victimVelocity": {
			"x": 40.15628,
			"y": -52.495907,
			"z": 137.58755
		}
	}, {
		"_id": {
			"$oid": "63bc8443973e27337a7002d0"
		},
		"id": "985f5435-066a-4afe-9e66-6023cf58c736",
		"time": {
			"$numberLong": "1673299011123"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199199285357",
		"killerId": "76561198280125225",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107149.37,
			"y": 1020.1304,
			"z": 82499.7
		},
		"victimPosition": {
			"x": 107002.88,
			"y": 710.4057,
			"z": 82934.06
		},
		"killerVelocity": {
			"x": -322.92242,
			"y": 28.366062,
			"z": 121.24932
		},
		"victimVelocity": {
			"x": 306.7946,
			"y": 27.682863,
			"z": -59.45291
		}
	}, {
		"_id": {
			"$oid": "63bc88d9973e27337a70031d"
		},
		"id": "5112405e-13db-4999-9a42-a5f655b6f5ba",
		"time": {
			"$numberLong": "1673300185164"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199387321562",
		"killerId": "76561199365657610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82534.05,
			"y": 1525.4526,
			"z": 52845.086
		},
		"victimPosition": {
			"x": 80760.055,
			"y": 1367.5884,
			"z": 52651.586
		},
		"killerVelocity": {
			"x": -245.45862,
			"y": -26.147352,
			"z": -111.09079
		},
		"victimVelocity": {
			"x": -259.68945,
			"y": -48.688465,
			"z": -0.7943729
		}
	}, {
		"_id": {
			"$oid": "63bc8fc9973e27337a700382"
		},
		"id": "f80f3c1c-013b-4700-bc8a-8c0f2afc24c1",
		"time": {
			"$numberLong": "1673301961288"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199387321562",
		"killerId": "76561198356590129",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63291.48,
			"y": 10623.464,
			"z": 111720.16
		},
		"victimPosition": {
			"x": 93848.47,
			"y": 1776.1646,
			"z": 97140.56
		},
		"killerVelocity": {
			"x": 329.14288,
			"y": 7.3645782,
			"z": -221.50012
		},
		"victimVelocity": {
			"x": -268.40817,
			"y": -127.503746,
			"z": -17.5322
		}
	}, {
		"_id": {
			"$oid": "63bc908a973e27337a70038b"
		},
		"id": "d4540b05-0031-48ef-899e-7f910c2151a1",
		"time": {
			"$numberLong": "1673302154351"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198085328200",
		"killerId": "76561199051795898",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89691.695,
			"y": 5852.905,
			"z": 112938.516
		},
		"victimPosition": {
			"x": 90037.37,
			"y": 2513.148,
			"z": 110509.63
		},
		"killerVelocity": {
			"x": 55.033714,
			"y": -319.34918,
			"z": -279.57477
		},
		"victimVelocity": {
			"x": 62.839493,
			"y": -121.38968,
			"z": 162.92645
		}
	}, {
		"_id": {
			"$oid": "63bc9991973e27337a7003d6"
		},
		"id": "7e0f6887-9e89-4261-a92d-ed590ac82c0f",
		"time": {
			"$numberLong": "1673304465864"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198248662418",
		"killerId": "76561199088184413",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52393.64,
			"y": 278.71494,
			"z": 118694.94
		},
		"victimPosition": {
			"x": 52445.21,
			"y": 278.70847,
			"z": 118713.74
		},
		"killerVelocity": {
			"x": 109.81565,
			"y": 0.02670627,
			"z": 28.629227
		},
		"victimVelocity": {
			"x": -41.59081,
			"y": 0.045207165,
			"z": -8.030942
		}
	}, {
		"_id": {
			"$oid": "63bcdd92973e27337a70094e"
		},
		"id": "30b4dbcb-9056-4920-a812-725eaeab248e",
		"time": {
			"$numberLong": "1673321874643"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198151068299",
		"killerId": "76561198041769443",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92784.08,
			"y": 1173.1665,
			"z": 107276.3
		},
		"victimPosition": {
			"x": 92007.19,
			"y": 1458.6211,
			"z": 109745.62
		},
		"killerVelocity": {
			"x": 15.069659,
			"y": -35.65821,
			"z": 326.14185
		},
		"victimVelocity": {
			"x": -177.50934,
			"y": -20.316366,
			"z": 50.14493
		}
	}, {
		"_id": {
			"$oid": "63bcddc8973e27337a700953"
		},
		"id": "6578506f-6aaa-4355-8533-827aaa93cd84",
		"time": {
			"$numberLong": "1673321928580"
		},
		"victimAircraft": 2,
		"killerAircraft": 4,
		"weapon": 2,
		"victimId": "76561198216166840",
		"killerId": "76561198144441716",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 65504.387,
			"y": 1530.1198,
			"z": 82611.414
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 26.071854,
			"y": -36.84649,
			"z": -85.8305
		}
	}, {
		"_id": {
			"$oid": "63bce7ea973e27337a700a3a"
		},
		"id": "4e85e205-044b-4fd2-94d8-d5d04dc05454",
		"time": {
			"$numberLong": "1673324522423"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198156796666",
		"killerId": "76561198880849737",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83950.64,
			"y": 1087.3153,
			"z": 81921.5
		},
		"victimPosition": {
			"x": 83866.016,
			"y": 698.42535,
			"z": 83543.9
		},
		"killerVelocity": {
			"x": -3.729387,
			"y": -50.92242,
			"z": 228.20972
		},
		"victimVelocity": {
			"x": -221.56311,
			"y": -11.5213785,
			"z": 85.86947
		}
	}, {
		"_id": {
			"$oid": "63bce852973e27337a700a46"
		},
		"id": "4e9c4d05-fbae-42e0-94de-9e4869be4081",
		"time": {
			"$numberLong": "1673324626129"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198156796666",
		"killerId": "76561198880849737",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51609.043,
			"y": 279.36917,
			"z": 118636.414
		},
		"victimPosition": {
			"x": 51273.582,
			"y": 280.03128,
			"z": 118646.695
		},
		"killerVelocity": {
			"x": -12.014285,
			"y": -0.20336442,
			"z": 2.558645
		},
		"victimVelocity": {
			"x": -88.69591,
			"y": 0.14249727,
			"z": -21.737993
		}
	}, {
		"_id": {
			"$oid": "63bd1669973e27337a700d2d"
		},
		"id": "4dad22ba-2b98-44a8-bf44-2e2d62b9fc38",
		"time": {
			"$numberLong": "1673336425523"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198295090549",
		"killerId": "76561199195945332",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90895.7,
			"y": 1422.2811,
			"z": 90722.44
		},
		"victimPosition": {
			"x": 92647.2,
			"y": 1628.7246,
			"z": 89405.63
		},
		"killerVelocity": {
			"x": 275.6569,
			"y": 51.581436,
			"z": -260.41913
		},
		"victimVelocity": {
			"x": 193.33224,
			"y": 124.696625,
			"z": 150.95946
		}
	}, {
		"_id": {
			"$oid": "63bd1769973e27337a700d3b"
		},
		"id": "60c0a448-5455-46c8-bc44-2c05d139feae",
		"time": {
			"$numberLong": "1673336681859"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198291809937",
		"killerId": "76561198295090549",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77949.945,
			"y": 1212.1104,
			"z": 117600.65
		},
		"victimPosition": {
			"x": 71490.41,
			"y": 2438.8577,
			"z": 126249.43
		},
		"killerVelocity": {
			"x": 217.28133,
			"y": -31.874489,
			"z": -245.16864
		},
		"victimVelocity": {
			"x": 85.2839,
			"y": -124.619576,
			"z": -293.03445
		}
	}, {
		"_id": {
			"$oid": "63bd1a20973e27337a700d73"
		},
		"id": "c320b082-b059-43b3-b5e0-c160a77b1830",
		"time": {
			"$numberLong": "1673337376543"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198086961565",
		"killerId": "76561199195945332",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92941.29,
			"y": 2150.4194,
			"z": 86275.19
		},
		"victimPosition": {
			"x": 93013.15,
			"y": 1173.6848,
			"z": 83256.65
		},
		"killerVelocity": {
			"x": 177.26538,
			"y": -55.744522,
			"z": -371.1317
		},
		"victimVelocity": {
			"x": -56.757355,
			"y": 51.823093,
			"z": -235.74318
		}
	}, {
		"_id": {
			"$oid": "63bd1b22973e27337a700d7f"
		},
		"id": "7d6b95a0-d67b-4208-99d0-d386d45991d2",
		"time": {
			"$numberLong": "1673337634562"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199442641427",
		"killerId": "76561198295090549",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 104087.84,
			"y": 6469.068,
			"z": 78395.86
		},
		"victimPosition": {
			"x": 109702.88,
			"y": 1522.8416,
			"z": 72166.09
		},
		"killerVelocity": {
			"x": 296.15063,
			"y": 37.103004,
			"z": -307.04388
		},
		"victimVelocity": {
			"x": -96.452576,
			"y": -9.442236,
			"z": -169.66116
		}
	}, {
		"_id": {
			"$oid": "63bd286f973e27337a700e16"
		},
		"id": "f0f5c4ad-c124-4afd-b0be-4c373bb07982",
		"time": {
			"$numberLong": "1673341039735"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198832840395",
		"killerId": "76561198048089125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 146062.66,
			"y": 4690.6343,
			"z": 74479.016
		},
		"victimPosition": {
			"x": 143097.67,
			"y": 5370.5063,
			"z": 75951.336
		},
		"killerVelocity": {
			"x": 117.13537,
			"y": 52.207207,
			"z": -20.93185
		},
		"victimVelocity": {
			"x": -195.36194,
			"y": 44.754826,
			"z": 66.24797
		}
	}, {
		"_id": {
			"$oid": "63bd6103973e27337a700f88"
		},
		"id": "3b89a8ea-dd7f-48c3-8fcc-8d130ec7fb02",
		"time": {
			"$numberLong": "1673355523275"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198385806874",
		"killerId": "76561198203693168",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73064.71,
			"y": 1362.0322,
			"z": 108567.555
		},
		"victimPosition": {
			"x": 74060.58,
			"y": 1895.7256,
			"z": 109680.99
		},
		"killerVelocity": {
			"x": 113.70708,
			"y": 76.83039,
			"z": 177.13329
		},
		"victimVelocity": {
			"x": 150.55734,
			"y": -20.224096,
			"z": -240.10435
		}
	}, {
		"_id": {
			"$oid": "63bd7327973e27337a701093"
		},
		"id": "7fc54208-b918-4f33-8b2a-9fb655d8cb30",
		"time": {
			"$numberLong": "1673360167763"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198067382448",
		"killerId": "76561198019895029",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 102384.85,
			"y": 1369.0142,
			"z": 106888.96
		},
		"victimPosition": {
			"x": 103617.484,
			"y": 1125.8612,
			"z": 104782.59
		},
		"killerVelocity": {
			"x": 62.573257,
			"y": -10.992204,
			"z": -312.95688
		},
		"victimVelocity": {
			"x": -136.08328,
			"y": -15.580995,
			"z": -42.551132
		}
	}, {
		"_id": {
			"$oid": "63bd8c57973e27337a701163"
		},
		"id": "09a0e32b-df2a-4e49-aeef-f76ffd7d319f",
		"time": {
			"$numberLong": "1673366615512"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198288152566",
		"killerId": "76561199066940919",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75104.9,
			"y": 9987.6,
			"z": 104756.77
		},
		"victimPosition": {
			"x": 80374.266,
			"y": 11999.482,
			"z": 101985.68
		},
		"killerVelocity": {
			"x": 289.37387,
			"y": 94.82764,
			"z": -147.4964
		},
		"victimVelocity": {
			"x": 283.3739,
			"y": 46.90038,
			"z": 13.004281
		}
	}, {
		"_id": {
			"$oid": "63bd9e1a973e27337a70126e"
		},
		"id": "f4be0888-859f-432a-aab9-8c9ff882a77a",
		"time": {
			"$numberLong": "1673371162258"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198144441716",
		"killerId": "76561199122534751",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84758.99,
			"y": 1373.222,
			"z": 92729.99
		},
		"victimPosition": {
			"x": 89963.734,
			"y": 1320.5988,
			"z": 91749.08
		},
		"killerVelocity": {
			"x": 218.93553,
			"y": -39.76312,
			"z": -134.55661
		},
		"victimVelocity": {
			"x": -250.0839,
			"y": 30.905552,
			"z": 87.908615
		}
	}, {
		"_id": {
			"$oid": "63bda129973e27337a70128e"
		},
		"id": "b4ca1815-dd15-49a3-b732-7d5fb9ef2da6",
		"time": {
			"$numberLong": "1673371945721"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198144441716",
		"killerId": "76561198385806874",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61040.715,
			"y": 3588.2334,
			"z": 100949.016
		},
		"victimPosition": {
			"x": 61892.86,
			"y": 6578.4395,
			"z": 95305.49
		},
		"killerVelocity": {
			"x": 1.3164618,
			"y": 81.00648,
			"z": -158.79398
		},
		"victimVelocity": {
			"x": 190.95107,
			"y": -142.88022,
			"z": -25.927607
		}
	}, {
		"_id": {
			"$oid": "63bdb687973e27337a701309"
		},
		"id": "8a48e2dc-6175-47a3-bd80-c03a118095e7",
		"time": {
			"$numberLong": "1673377415636"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198443122739",
		"killerId": "76561199152232269",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 225944.72,
			"y": 3271.9102,
			"z": 132838.72
		},
		"victimPosition": {
			"x": 225270.22,
			"y": 3235.133,
			"z": 133727.34
		},
		"killerVelocity": {
			"x": -113.260086,
			"y": 20.102495,
			"z": 125.90212
		},
		"victimVelocity": {
			"x": 93.8452,
			"y": -91.92881,
			"z": -72.5641
		}
	}, {
		"_id": {
			"$oid": "63bdb74a973e27337a701313"
		},
		"id": "00c14ad3-310a-4c05-91b2-63ed96d992cb",
		"time": {
			"$numberLong": "1673377610240"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198443122739",
		"killerId": "76561199152232269",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56399.24,
			"y": 420.40155,
			"z": 119805.04
		},
		"victimPosition": {
			"x": 57069.93,
			"y": 663.0506,
			"z": 119860.19
		},
		"killerVelocity": {
			"x": 102.833244,
			"y": 56.81525,
			"z": 37.51004
		},
		"victimVelocity": {
			"x": 143.25748,
			"y": 62.98727,
			"z": -80.86722
		}
	}, {
		"_id": {
			"$oid": "63bdb7ba973e27337a70131a"
		},
		"id": "4e4b04a1-f3ac-4f30-9ba2-0a445df7e035",
		"time": {
			"$numberLong": "1673377722336"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198203693168",
		"killerId": "76561198443122739",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56459.812,
			"y": 1791.8395,
			"z": 115007.73
		},
		"victimPosition": {
			"x": 57965.3,
			"y": 2606.6785,
			"z": 115096.52
		},
		"killerVelocity": {
			"x": 200.511,
			"y": 114.16148,
			"z": -61.022903
		},
		"victimVelocity": {
			"x": 83.79339,
			"y": -1.0415336,
			"z": 198.31688
		}
	}, {
		"_id": {
			"$oid": "63bdd5f7973e27337a7014db"
		},
		"id": "42ad7ff8-b787-4188-b5c9-5c3f1b8535ad",
		"time": {
			"$numberLong": "1673385463055"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198408148552",
		"killerId": "76561199455220614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57973.62,
			"y": 984.659,
			"z": 119013.03
		},
		"victimPosition": {
			"x": 57976.324,
			"y": 854.18805,
			"z": 118928.91
		},
		"killerVelocity": {
			"x": 335.49243,
			"y": -78.988144,
			"z": 24.67402
		},
		"victimVelocity": {
			"x": 93.381134,
			"y": -72.452065,
			"z": -2.389424
		}
	}, {
		"_id": {
			"$oid": "63bdde26973e27337a7015b0"
		},
		"id": "30237934-8f30-4151-bce6-6330e3543504",
		"time": {
			"$numberLong": "1673387558036"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198411539564",
		"killerId": "76561198408148552",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71013.65,
			"y": 1881.9246,
			"z": 108075.484
		},
		"victimPosition": {
			"x": 60834.387,
			"y": 2453.6943,
			"z": 119197.42
		},
		"killerVelocity": {
			"x": 74.66375,
			"y": -51.97847,
			"z": 206.51637
		},
		"victimVelocity": {
			"x": -114.19539,
			"y": -57.17137,
			"z": 135.71802
		}
	}, {
		"_id": {
			"$oid": "63bddf4a973e27337a7015ca"
		},
		"id": "82d38a4b-6092-47f5-ab3b-52a298c10500",
		"time": {
			"$numberLong": "1673387850769"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198258916727",
		"killerId": "76561198411539564",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84473.63,
			"y": 6958.1797,
			"z": 95236.74
		},
		"victimPosition": {
			"x": 85950.18,
			"y": 7379.724,
			"z": 93687.59
		},
		"killerVelocity": {
			"x": 204.77179,
			"y": 50.866882,
			"z": -240.37297
		},
		"victimVelocity": {
			"x": 294.0231,
			"y": 49.499947,
			"z": -105.576614
		}
	}, {
		"_id": {
			"$oid": "63be0189973e27337a7017e4"
		},
		"id": "c3c04cf1-75a2-4f8d-99be-1ba0d8327654",
		"time": {
			"$numberLong": "1673396617577"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197982548387",
		"killerId": "76561198966827526",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88598.07,
			"y": 1382.7467,
			"z": 98643.016
		},
		"victimPosition": {
			"x": 89245.47,
			"y": 1521.4078,
			"z": 99530.234
		},
		"killerVelocity": {
			"x": 182.20837,
			"y": -51.031467,
			"z": 305.4707
		},
		"victimVelocity": {
			"x": -247.03172,
			"y": -102.04908,
			"z": 76.74841
		}
	}, {
		"_id": {
			"$oid": "63be0322973e27337a701811"
		},
		"id": "a635f2b8-5f73-4ff7-ab1d-793623769e9e",
		"time": {
			"$numberLong": "1673397026202"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198151068299",
		"killerId": "76561199242695827",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 135790.56,
			"y": 2783.0503,
			"z": 48770.375
		},
		"victimPosition": {
			"x": 137262.67,
			"y": 3087.5618,
			"z": 49950.25
		},
		"killerVelocity": {
			"x": 311.5543,
			"y": 8.127746,
			"z": -40.090385
		},
		"victimVelocity": {
			"x": -243.0887,
			"y": 11.580242,
			"z": 109.491806
		}
	}, {
		"_id": {
			"$oid": "63be05f5973e27337a70184b"
		},
		"id": "03bbf59c-9065-478f-99f6-54db92c66e89",
		"time": {
			"$numberLong": "1673397749467"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198284213146",
		"killerId": "76561199270033524",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105868.664,
			"y": 4839.74,
			"z": 65996.63
		},
		"victimPosition": {
			"x": 107925.81,
			"y": 4295.3765,
			"z": 67226.97
		},
		"killerVelocity": {
			"x": 241.78827,
			"y": -44.916534,
			"z": -325.56525
		},
		"victimVelocity": {
			"x": 150.06381,
			"y": -258.05457,
			"z": 9.071042
		}
	}, {
		"_id": {
			"$oid": "63be149f973e27337a701991"
		},
		"id": "bf943bc1-45b8-4322-8d86-72773a912198",
		"time": {
			"$numberLong": "1673401503682"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198017778651",
		"killerId": "76561198121896671",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72256.7,
			"y": 850.05286,
			"z": 109234.22
		},
		"victimPosition": {
			"x": 73990.805,
			"y": 643.8101,
			"z": 107475.04
		},
		"killerVelocity": {
			"x": 256.1503,
			"y": -29.410208,
			"z": -243.52496
		},
		"victimVelocity": {
			"x": 146.799,
			"y": 13.381754,
			"z": -329.71817
		}
	}, {
		"_id": {
			"$oid": "63be3f3d973e27337a701d15"
		},
		"id": "f9d2690d-51d0-4afc-9557-a151616804d6",
		"time": {
			"$numberLong": "1673412413770"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198874163866",
		"killerId": "76561197982548387",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72865.055,
			"y": 1149.7189,
			"z": 110298.914
		},
		"victimPosition": {
			"x": 73425.98,
			"y": 1283.6051,
			"z": 111346.555
		},
		"killerVelocity": {
			"x": 140.67805,
			"y": -62.196175,
			"z": 309.50555
		},
		"victimVelocity": {
			"x": -172.58298,
			"y": 20.349966,
			"z": -183.48149
		}
	}, {
		"_id": {
			"$oid": "63be6954973e27337a70206d"
		},
		"id": "fa260093-9729-4285-a926-42f4953e17fd",
		"time": {
			"$numberLong": "1673423188745"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198067382448",
		"killerId": "76561198012089041",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100317.07,
			"y": 1071.4557,
			"z": 93845.28
		},
		"victimPosition": {
			"x": 95741.164,
			"y": 981.9283,
			"z": 97341.234
		},
		"killerVelocity": {
			"x": 201.7872,
			"y": -32.328804,
			"z": -294.21603
		},
		"victimVelocity": {
			"x": -239.73932,
			"y": -79.66521,
			"z": 86.28249
		}
	}, {
		"_id": {
			"$oid": "63bef777973e27337a70230e"
		},
		"id": "b1ffdeff-19fd-4eeb-86a1-4d094743f0f3",
		"time": {
			"$numberLong": "1673459575539"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198069930645",
		"killerId": "76561198126785997",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55283.91,
			"y": 959.7742,
			"z": 114675.89
		},
		"victimPosition": {
			"x": 56339.574,
			"y": 752.9855,
			"z": 115429.2
		},
		"killerVelocity": {
			"x": 219.88669,
			"y": -63.795197,
			"z": 242.31834
		},
		"victimVelocity": {
			"x": -130.88069,
			"y": 24.514107,
			"z": -201.78955
		}
	}, {
		"_id": {
			"$oid": "63bef80d973e27337a702320"
		},
		"id": "c4385aac-057f-4a53-b3a1-f51c5fa8e326",
		"time": {
			"$numberLong": "1673459725119"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198126785997",
		"killerId": "76561198069930645",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55324.35,
			"y": 829.96344,
			"z": 116992.086
		},
		"victimPosition": {
			"x": 56114.867,
			"y": 1337.3547,
			"z": 117895.03
		},
		"killerVelocity": {
			"x": 64.01568,
			"y": 8.903483,
			"z": 142.76518
		},
		"victimVelocity": {
			"x": 170.19823,
			"y": 32.56496,
			"z": -94.52471
		}
	}, {
		"_id": {
			"$oid": "63befd07973e27337a70237b"
		},
		"id": "db72412a-2828-4244-af0a-adc9a619ebac",
		"time": {
			"$numberLong": "1673460999358"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198126785997",
		"killerId": "76561198144441716",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94390.68,
			"y": 912.2862,
			"z": 100558.945
		},
		"victimPosition": {
			"x": 97256.78,
			"y": 1129.0017,
			"z": 98110.28
		},
		"killerVelocity": {
			"x": -293.5512,
			"y": -14.787865,
			"z": -152.8167
		},
		"victimVelocity": {
			"x": -33.88252,
			"y": -119.14831,
			"z": -1.8813761
		}
	}, {
		"_id": {
			"$oid": "63bf0589973e27337a7023f1"
		},
		"id": "52b6ec19-f113-4a75-b3f2-e28467403715",
		"time": {
			"$numberLong": "1673463177291"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199192215243",
		"killerId": "76561199110963905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55793.004,
			"y": 511.48068,
			"z": 117448.836
		},
		"victimPosition": {
			"x": 58951.664,
			"y": 583.2305,
			"z": 116017.35
		},
		"killerVelocity": {
			"x": 201.9141,
			"y": -15.139557,
			"z": -73.87407
		},
		"victimVelocity": {
			"x": -173.77075,
			"y": 9.320208,
			"z": 144.00758
		}
	}, {
		"_id": {
			"$oid": "63bf2780973e27337a70269c"
		},
		"id": "a2a7c181-69cc-47a0-9da4-c07e0a8e9b64",
		"time": {
			"$numberLong": "1673471872759"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198798384224",
		"killerId": "76561199122163785",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63183.2,
			"y": 1889.3971,
			"z": 105808.66
		},
		"victimPosition": {
			"x": 61852.74,
			"y": 504.36078,
			"z": 109466.516
		},
		"killerVelocity": {
			"x": -58.95245,
			"y": -47.61409,
			"z": 233.34348
		},
		"victimVelocity": {
			"x": -73.43071,
			"y": -34.518486,
			"z": -338.1672
		}
	}, {
		"_id": {
			"$oid": "63bf7ad9973e27337a70289f"
		},
		"id": "a2dbf16c-fb2f-4550-b9dc-6cefb270453e",
		"time": {
			"$numberLong": "1673493209258"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198864461209",
		"killerId": "76561198072189139",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100302.04,
			"y": 2983.8657,
			"z": 52033.855
		},
		"victimPosition": {
			"x": 99230.36,
			"y": 1325.346,
			"z": 50822.875
		},
		"killerVelocity": {
			"x": -205.4713,
			"y": -42.37777,
			"z": -268.60883
		},
		"victimVelocity": {
			"x": -314.1293,
			"y": -129.78833,
			"z": -68.997444
		}
	}, {
		"_id": {
			"$oid": "63bf9131973e27337a702a5c"
		},
		"id": "a418f169-2cae-4cfe-9992-e609d53d8278",
		"time": {
			"$numberLong": "1673498929902"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199240347481",
		"killerId": "76561198120228844",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61820.7,
			"y": 356.4551,
			"z": 113116.7
		},
		"victimPosition": {
			"x": 60519.285,
			"y": 761.10803,
			"z": 110864.14
		},
		"killerVelocity": {
			"x": 277.20996,
			"y": -3.1614473,
			"z": -3.8614378
		},
		"victimVelocity": {
			"x": 23.55294,
			"y": -94.27721,
			"z": -68.02582
		}
	}, {
		"_id": {
			"$oid": "63bf9c6e973e27337a702b46"
		},
		"id": "77ec3dc8-d62b-4b79-9eb1-42edeb857b45",
		"time": {
			"$numberLong": "1673501806232"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198034463881",
		"killerId": "76561199088539026",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55293.457,
			"y": 688.58936,
			"z": 118765.56
		},
		"victimPosition": {
			"x": 54030.555,
			"y": 547.4746,
			"z": 119103.93
		},
		"killerVelocity": {
			"x": -285.5343,
			"y": -33.545097,
			"z": 86.49345
		},
		"victimVelocity": {
			"x": 184.18068,
			"y": 54.78054,
			"z": 45.992054
		}
	}, {
		"_id": {
			"$oid": "63bfc319973e27337a702d13"
		},
		"id": "eb6626f0-f874-4bc3-a936-f0a517100cd2",
		"time": {
			"$numberLong": "1673511705418"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198061767001",
		"killerId": "76561198126595656",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79127.89,
			"y": 3248.7493,
			"z": 73575.17
		},
		"victimPosition": {
			"x": 80400.84,
			"y": 2582.3904,
			"z": 73479.45
		},
		"killerVelocity": {
			"x": 142.39134,
			"y": -63.403236,
			"z": -38.437065
		},
		"victimVelocity": {
			"x": 68.08934,
			"y": -112.48478,
			"z": 229.63708
		}
	}, {
		"_id": {
			"$oid": "63bfe717973e27337a702d1f"
		},
		"id": "fdfdcda6-5a40-410b-aa16-67206df4c500",
		"time": {
			"$numberLong": "1673520919278"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198340653701",
		"killerId": "76561198024178722",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57461.594,
			"y": 1636.2477,
			"z": 110872.516
		},
		"victimPosition": {
			"x": 58340.996,
			"y": 1589.2357,
			"z": 108072.69
		},
		"killerVelocity": {
			"x": 83.26819,
			"y": 5.0164304,
			"z": -237.21692
		},
		"victimVelocity": {
			"x": 85.11445,
			"y": -149.37732,
			"z": -226.56264
		}
	}, {
		"_id": {
			"$oid": "63c00142973e27337a702dbe"
		},
		"id": "5e40359e-729f-499d-b383-6f8e149ce268",
		"time": {
			"$numberLong": "1673527618547"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199202948426",
		"killerId": "76561198291809937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 109231.62,
			"y": 11329.664,
			"z": 65476.477
		},
		"victimPosition": {
			"x": 78899.73,
			"y": 8547.219,
			"z": 80612.445
		},
		"killerVelocity": {
			"x": 351.42743,
			"y": 4.1217127,
			"z": -263.1742
		},
		"victimVelocity": {
			"x": -104.077385,
			"y": -127.6666,
			"z": 19.831448
		}
	}, {
		"_id": {
			"$oid": "63c00214973e27337a702dc4"
		},
		"id": "90aea930-99dc-4a5d-8166-d0b47836fab8",
		"time": {
			"$numberLong": "1673527828614"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199212030703",
		"killerId": "76561198291809937",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56872.02,
			"y": 1626.5411,
			"z": 113798.83
		},
		"victimPosition": {
			"x": 54398.367,
			"y": 507.46173,
			"z": 115734.56
		},
		"killerVelocity": {
			"x": -304.34564,
			"y": -28.269115,
			"z": 250.66899
		},
		"victimVelocity": {
			"x": 192.20786,
			"y": 1.8255233,
			"z": -95.03454
		}
	}, {
		"_id": {
			"$oid": "63c01401973e27337a702e5c"
		},
		"id": "3a0e4529-1bc3-43b5-bfe7-8d6210fa652a",
		"time": {
			"$numberLong": "1673532417453"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198398976513",
		"killerId": "76561199210352747",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79023.25,
			"y": 7400.606,
			"z": 113728.07
		},
		"victimPosition": {
			"x": 82257.01,
			"y": 8232.459,
			"z": 110465.55
		},
		"killerVelocity": {
			"x": 279.0598,
			"y": 96.7036,
			"z": -204.9441
		},
		"victimVelocity": {
			"x": 27.781609,
			"y": -98.236855,
			"z": -248.96371
		}
	}, {
		"_id": {
			"$oid": "63c0339c973e27337a702f05"
		},
		"id": "d64c7cb3-3065-4347-af30-1bb8ea1b2971",
		"time": {
			"$numberLong": "1673540508965"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199009506848",
		"killerId": "76561198352899022",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68904.48,
			"y": 1343.3507,
			"z": 104245.73
		},
		"victimPosition": {
			"x": 68840.32,
			"y": 1347.1757,
			"z": 104434.06
		},
		"killerVelocity": {
			"x": -25.346195,
			"y": 53.54192,
			"z": 282.5992
		},
		"victimVelocity": {
			"x": -60.967083,
			"y": -59.206093,
			"z": -341.2728
		}
	}, {
		"_id": {
			"$oid": "63c034a1973e27337a702f15"
		},
		"id": "a2f1a7a4-540d-4f4d-8b42-b45c11e61a9e",
		"time": {
			"$numberLong": "1673540769811"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198365910587",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66561.82,
			"y": 1360.9677,
			"z": 112993.48
		},
		"victimPosition": {
			"x": 65615.52,
			"y": 3355.9229,
			"z": 111488.125
		},
		"killerVelocity": {
			"x": 216.4175,
			"y": -95.754684,
			"z": -243.91522
		},
		"victimVelocity": {
			"x": 86.092125,
			"y": -124.46884,
			"z": -25.602169
		}
	}, {
		"_id": {
			"$oid": "63c034df973e27337a702f26"
		},
		"id": "4a241f93-9e3e-4a7b-af28-83f3acf9fbaa",
		"time": {
			"$numberLong": "1673540831276"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198118011458",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70643.2,
			"y": 1057.6404,
			"z": 99597.77
		},
		"victimPosition": {
			"x": 71858.836,
			"y": 390.4518,
			"z": 100899.984
		},
		"killerVelocity": {
			"x": 185.3588,
			"y": -9.684121,
			"z": -229.02977
		},
		"victimVelocity": {
			"x": 106.84999,
			"y": -80.27918,
			"z": 114.40615
		}
	}, {
		"_id": {
			"$oid": "63c03696973e27337a702f47"
		},
		"id": "bfd4e43d-d16b-4c85-ae90-7642bde15904",
		"time": {
			"$numberLong": "1673541270755"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198352899022",
		"killerId": "76561198365910587",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74889.3,
			"y": 2430.542,
			"z": 80028.94
		},
		"victimPosition": {
			"x": 75831.58,
			"y": 2872.96,
			"z": 80880.76
		},
		"killerVelocity": {
			"x": 161.68721,
			"y": -20.74026,
			"z": 46.38913
		},
		"victimVelocity": {
			"x": -135.22563,
			"y": -32.284134,
			"z": -326.0361
		}
	}, {
		"_id": {
			"$oid": "63c03bf3973e27337a702fb3"
		},
		"id": "bb99c99f-6307-4887-8c5c-41a6dda1d878",
		"time": {
			"$numberLong": "1673542643158"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198385806874",
		"killerId": "76561198093124125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 116554.95,
			"y": 2526.885,
			"z": 53375.76
		},
		"victimPosition": {
			"x": 116284.086,
			"y": 2874.7827,
			"z": 54927.094
		},
		"killerVelocity": {
			"x": -77.214615,
			"y": -3.7985582,
			"z": 330.68597
		},
		"victimVelocity": {
			"x": 72.51353,
			"y": -17.461597,
			"z": 60.568108
		}
	}, {
		"_id": {
			"$oid": "63c0402f973e27337a703002"
		},
		"id": "3efe89d9-f24d-4acb-833a-b1dcb1f5819e",
		"time": {
			"$numberLong": "1673543727853"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198118011458",
		"killerId": "76561198874781145",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57522.49,
			"y": 724.51624,
			"z": 119839.9
		},
		"victimPosition": {
			"x": 57748.02,
			"y": 770.6886,
			"z": 119845.81
		},
		"killerVelocity": {
			"x": 267.43146,
			"y": 37.94914,
			"z": 51.591576
		},
		"victimVelocity": {
			"x": -189.91985,
			"y": -5.131125,
			"z": -41.775524
		}
	}, {
		"_id": {
			"$oid": "63c055b9973e27337a7031df"
		},
		"id": "ad811c75-aa71-45c9-9e04-054ef27dea2b",
		"time": {
			"$numberLong": "1673549241858"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198093124125",
		"killerId": "76561198404885184",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59445.926,
			"y": 1641.2961,
			"z": 104635.32
		},
		"victimPosition": {
			"x": 61263.95,
			"y": 1674.9427,
			"z": 99353.65
		},
		"killerVelocity": {
			"x": 151.21487,
			"y": 1.7977531,
			"z": -157.31299
		},
		"victimVelocity": {
			"x": 219.4137,
			"y": 74.357765,
			"z": -241.44388
		}
	}, {
		"_id": {
			"$oid": "63c05dfd973e27337a703258"
		},
		"id": "f5ea9ecd-102b-46db-8d61-75129eb35cc1",
		"time": {
			"$numberLong": "1673551357889"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198313221465",
		"killerId": "76561199202948426",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55665.35,
			"y": 677.72894,
			"z": 116088.19
		},
		"victimPosition": {
			"x": 55675.914,
			"y": 671.23004,
			"z": 116086.336
		},
		"killerVelocity": {
			"x": -181.75256,
			"y": 0.5602501,
			"z": -2.2178357
		},
		"victimVelocity": {
			"x": -166.9101,
			"y": 9.411898,
			"z": 0.4662759
		}
	}, {
		"_id": {
			"$oid": "63c05fe1973e27337a70327a"
		},
		"id": "2a7fff82-c91a-4f51-861f-8d1fa2ff129e",
		"time": {
			"$numberLong": "1673551841184"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199202948426",
		"killerId": "76561198313221465",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54797.414,
			"y": 923.829,
			"z": 116285.35
		},
		"victimPosition": {
			"x": 55046.293,
			"y": 790.6347,
			"z": 116616.06
		},
		"killerVelocity": {
			"x": 216.47498,
			"y": -45.066143,
			"z": 292.72052
		},
		"victimVelocity": {
			"x": -210.16116,
			"y": -51.590115,
			"z": -137.81992
		}
	}, {
		"_id": {
			"$oid": "63c08782973e27337a70346c"
		},
		"id": "c41aec86-7270-4384-b8e4-2662ee6b3c84",
		"time": {
			"$numberLong": "1673561986514"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 4,
		"victimId": "76561198874559423",
		"killerId": "76561198981476845",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51732.73,
			"y": 279.4867,
			"z": 118880.51
		},
		"victimPosition": {
			"x": 52341.758,
			"y": 279.4489,
			"z": 118868.07
		},
		"killerVelocity": {
			"x": 0.81318134,
			"y": -0.00031446666,
			"z": -3.3493075
		},
		"victimVelocity": {
			"x": 47.588837,
			"y": 0.016554274,
			"z": 15.23859
		}
	}, {
		"_id": {
			"$oid": "63c08fb0973e27337a7034f0"
		},
		"id": "cacc7b69-d163-4d39-8c86-8eea03001047",
		"time": {
			"$numberLong": "1673564080245"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198070007976",
		"killerId": "76561199143212830",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100285.72,
			"y": 8338.415,
			"z": 94397.32
		},
		"victimPosition": {
			"x": 122957.79,
			"y": 9145.172,
			"z": 79390.75
		},
		"killerVelocity": {
			"x": 265.96835,
			"y": 47.573463,
			"z": -212.25536
		},
		"victimVelocity": {
			"x": 332.24493,
			"y": -191.70161,
			"z": -246.5401
		}
	}, {
		"_id": {
			"$oid": "63c090dc973e27337a703501"
		},
		"id": "14c6c518-4d81-4f5b-90a6-f32db94e1f6e",
		"time": {
			"$numberLong": "1673564380390"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198961224983",
		"killerId": "76561199143212830",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88051.7,
			"y": 6602.375,
			"z": 101653.44
		},
		"victimPosition": {
			"x": 94519.21,
			"y": 6576.4224,
			"z": 98767.164
		},
		"killerVelocity": {
			"x": 364.1102,
			"y": 52.48906,
			"z": -137.78882
		},
		"victimVelocity": {
			"x": 31.898392,
			"y": -144.76053,
			"z": -118.33888
		}
	}, {
		"_id": {
			"$oid": "63c0ae51973e27337a7036e8"
		},
		"id": "ae9e0a9d-b880-4a37-9ca2-0f33ca96a4c1",
		"time": {
			"$numberLong": "1673571921764"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198027355575",
		"killerId": "76561198042453667",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100067.125,
			"y": 13711.549,
			"z": 98328.586
		},
		"victimPosition": {
			"x": 104941.81,
			"y": 13837.62,
			"z": 93792.52
		},
		"killerVelocity": {
			"x": 255.7082,
			"y": 67.82153,
			"z": -156.8057
		},
		"victimVelocity": {
			"x": 96.313065,
			"y": -44.421448,
			"z": -248.69371
		}
	}, {
		"_id": {
			"$oid": "63c0b886973e27337a7037bb"
		},
		"id": "bbf36579-5a36-470c-91ba-d4dea633c770",
		"time": {
			"$numberLong": "1673574534898"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198144441716",
		"killerId": "76561198880693369",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70686.84,
			"y": 4311.247,
			"z": 109194.18
		},
		"victimPosition": {
			"x": 71817.086,
			"y": 4591.7036,
			"z": 109887.6
		},
		"killerVelocity": {
			"x": 354.68347,
			"y": -10.719117,
			"z": 80.99662
		},
		"victimVelocity": {
			"x": -200.52045,
			"y": 57.509155,
			"z": -131.52281
		}
	}, {
		"_id": {
			"$oid": "63c0b8b9973e27337a7037bf"
		},
		"id": "b409188a-99b6-4f18-ac91-dece40029bc7",
		"time": {
			"$numberLong": "1673574585958"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199087992885",
		"killerId": "76561198880693369",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85464.54,
			"y": 2477.253,
			"z": 96730.67
		},
		"victimPosition": {
			"x": 93199.99,
			"y": 775.50665,
			"z": 91059.65
		},
		"killerVelocity": {
			"x": 293.567,
			"y": -32.9028,
			"z": -280.2437
		},
		"victimVelocity": {
			"x": 351.43304,
			"y": -28.315504,
			"z": -28.1697
		}
	}, {
		"_id": {
			"$oid": "63c0d1e3973e27337a70392e"
		},
		"id": "fbd631bc-2398-4156-8519-9d47eed01e9e",
		"time": {
			"$numberLong": "1673581027280"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198958625583",
		"killerId": "76561198067685118",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74177.52,
			"y": 1700.2771,
			"z": 69494.23
		},
		"victimPosition": {
			"x": 52945.688,
			"y": 278.85803,
			"z": 119050.586
		},
		"killerVelocity": {
			"x": -142.54674,
			"y": -22.014702,
			"z": 116.20232
		},
		"victimVelocity": {
			"x": 47.06762,
			"y": 2.4065318,
			"z": 7.4207106
		}
	}, {
		"_id": {
			"$oid": "63c0e40d973e27337a703ab8"
		},
		"id": "5ed54da5-9afd-4ca5-99ca-22124090d740",
		"time": {
			"$numberLong": "1673585677749"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198027946784",
		"killerId": "76561198065598224",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105081.01,
			"y": 3405.4197,
			"z": 75278.93
		},
		"victimPosition": {
			"x": 101899.33,
			"y": 2154.0256,
			"z": 73594.39
		},
		"killerVelocity": {
			"x": 107.568695,
			"y": -63.067574,
			"z": -318.22458
		},
		"victimVelocity": {
			"x": -87.28935,
			"y": -84.694084,
			"z": -99.08615
		}
	}, {
		"_id": {
			"$oid": "63c0eee3973e27337a703bab"
		},
		"id": "ce85f053-8122-4beb-b488-154ddd6c4a80",
		"time": {
			"$numberLong": "1673588451676"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199134278683",
		"killerId": "76561199055281148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83310.59,
			"y": 3472.3362,
			"z": 98769.09
		},
		"victimPosition": {
			"x": 84847.67,
			"y": 3839.6057,
			"z": 97570.66
		},
		"killerVelocity": {
			"x": 213.20967,
			"y": 28.787376,
			"z": -278.6697
		},
		"victimVelocity": {
			"x": 1.1227033,
			"y": -112.135445,
			"z": 343.18967
		}
	}, {
		"_id": {
			"$oid": "63c0f599973e27337a703c12"
		},
		"id": "df4ef919-3e42-4216-88b6-649a971f2b9a",
		"time": {
			"$numberLong": "1673590169604"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561197976952083",
		"killerId": "76561199055281148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 144435.11,
			"y": 3025.1658,
			"z": 59761.094
		},
		"victimPosition": {
			"x": 146006.69,
			"y": 2586.4543,
			"z": 51992.234
		},
		"killerVelocity": {
			"x": 38.699062,
			"y": -84.25534,
			"z": 50.691753
		},
		"victimVelocity": {
			"x": -74.59664,
			"y": -149.70369,
			"z": 240.31216
		}
	}, {
		"_id": {
			"$oid": "63c0f59f973e27337a703c16"
		},
		"id": "e27bf743-4e64-482e-a080-60a559627947",
		"time": {
			"$numberLong": "1673590175628"
		},
		"victimAircraft": 4,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199055281148",
		"killerId": "76561197976952083",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 145886.56,
			"y": 1655.1074,
			"z": 52947.953
		},
		"victimPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"killerVelocity": {
			"x": -23.788042,
			"y": -145.57755,
			"z": 100.15233
		},
		"victimVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		}
	}, {
		"_id": {
			"$oid": "63c18db2973e27337a703d25"
		},
		"id": "543ae5aa-744d-4418-9a67-ee5015924b76",
		"time": {
			"$numberLong": "1673629106995"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198278548830",
		"killerId": "76561199214869050",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59475.613,
			"y": 891.41656,
			"z": 111411.766
		},
		"victimPosition": {
			"x": 59943.98,
			"y": 743.1374,
			"z": 111307.62
		},
		"killerVelocity": {
			"x": 66.00534,
			"y": -25.841534,
			"z": -41.966747
		},
		"victimVelocity": {
			"x": 50.063793,
			"y": -95.09745,
			"z": 11.27152
		}
	}, {
		"_id": {
			"$oid": "63c196a3973e27337a703e09"
		},
		"id": "cc002e6a-e57b-48bb-8876-f703bfc01087",
		"time": {
			"$numberLong": "1673631395376"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198328189196",
		"killerId": "76561199134702363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83691.96,
			"y": 4892.1533,
			"z": 102348.67
		},
		"victimPosition": {
			"x": 83612.914,
			"y": 1619.2578,
			"z": 96995.266
		},
		"killerVelocity": {
			"x": 6.6477656,
			"y": -246.17516,
			"z": -388.91315
		},
		"victimVelocity": {
			"x": -25.927395,
			"y": 120.68222,
			"z": 262.7431
		}
	}, {
		"_id": {
			"$oid": "63c197e7973e27337a703e21"
		},
		"id": "46174986-bcbc-437a-9d24-720ad5fdbcf1",
		"time": {
			"$numberLong": "1673631719172"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199025105074",
		"killerId": "76561198438507899",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75332.31,
			"y": 1167.0847,
			"z": 100011.01
		},
		"victimPosition": {
			"x": 76655.195,
			"y": 663.0934,
			"z": 94217.82
		},
		"killerVelocity": {
			"x": 92.379715,
			"y": -29.462717,
			"z": -298.867
		},
		"victimVelocity": {
			"x": -62.06691,
			"y": 20.208534,
			"z": 181.92422
		}
	}, {
		"_id": {
			"$oid": "63c1db3c973e27337a7041c5"
		},
		"id": "723040a7-35f8-472d-acd9-1a7c5d88bf6a",
		"time": {
			"$numberLong": "1673648956207"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197997932245",
		"killerId": "76561199061384524",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88255.45,
			"y": 1744.768,
			"z": 81550.5
		},
		"victimPosition": {
			"x": 90263.31,
			"y": 1732.1357,
			"z": 79419.35
		},
		"killerVelocity": {
			"x": 86.94903,
			"y": -1.2069135,
			"z": -310.14014
		},
		"victimVelocity": {
			"x": -208.13643,
			"y": 44.548668,
			"z": 142.38785
		}
	}, {
		"_id": {
			"$oid": "63c1e1cd973e27337a70425b"
		},
		"id": "6da101e6-6921-4ea1-add0-744c48443849",
		"time": {
			"$numberLong": "1673650637143"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198069073607",
		"killerId": "76561199021972099",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95940.31,
			"y": 1967.6587,
			"z": 59930.523
		},
		"victimPosition": {
			"x": 104085.69,
			"y": 1411.8633,
			"z": 62209.43
		},
		"killerVelocity": {
			"x": -59.2158,
			"y": -2.0063598,
			"z": 305.33847
		},
		"victimVelocity": {
			"x": -64.337326,
			"y": -42.192673,
			"z": 348.62625
		}
	}, {
		"_id": {
			"$oid": "63c1e397973e27337a704290"
		},
		"id": "21b1ab6f-e1d2-41e8-b4d6-3493e20de707",
		"time": {
			"$numberLong": "1673651095529"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199021972099",
		"killerId": "76561197997932245",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97567.625,
			"y": 2324.4802,
			"z": 70160.01
		},
		"victimPosition": {
			"x": 89904.15,
			"y": 1593.5403,
			"z": 72801.945
		},
		"killerVelocity": {
			"x": 329.93997,
			"y": 64.64881,
			"z": -190.94066
		},
		"victimVelocity": {
			"x": -221.70169,
			"y": -18.207075,
			"z": 97.669136
		}
	}, {
		"_id": {
			"$oid": "63c1eaa9973e27337a704362"
		},
		"id": "32bc8782-c14c-4933-ad78-5ebee85d2cd3",
		"time": {
			"$numberLong": "1673652905269"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199121580589",
		"killerId": "76561199021972099",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71292.97,
			"y": 1892.1433,
			"z": 98222.92
		},
		"victimPosition": {
			"x": 78059.836,
			"y": 1067.311,
			"z": 92325.555
		},
		"killerVelocity": {
			"x": 276.21484,
			"y": 1.603392,
			"z": -273.51385
		},
		"victimVelocity": {
			"x": -171.90732,
			"y": -86.51131,
			"z": 115.8374
		}
	}, {
		"_id": {
			"$oid": "63c20729973e27337a7045ca"
		},
		"id": "cb3902aa-a407-4fa7-95de-625a9d4a01c4",
		"time": {
			"$numberLong": "1673660201722"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 5,
		"victimId": "76561198187439499",
		"killerId": "76561198385806874",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 69369.83,
			"y": 1231.4845,
			"z": 105366.195
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 160.25519,
			"y": 108.53961,
			"z": 184.10677
		}
	}, {
		"_id": {
			"$oid": "63c233b8973e27337a704793"
		},
		"id": "8372ea55-6c33-48e6-95e5-4be514a18dec",
		"time": {
			"$numberLong": "1673671608516"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199097802079",
		"killerId": "76561198883062068",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57709.28,
			"y": 1104.0126,
			"z": 114007.46
		},
		"victimPosition": {
			"x": 59210.98,
			"y": 1315.6903,
			"z": 112271.48
		},
		"killerVelocity": {
			"x": 159.92534,
			"y": 21.829489,
			"z": -221.73438
		},
		"victimVelocity": {
			"x": 77.34433,
			"y": -10.864595,
			"z": -13.015786
		}
	}, {
		"_id": {
			"$oid": "63c246e1973e27337a704908"
		},
		"id": "99621d87-597b-4dfb-9d83-63c53885db70",
		"time": {
			"$numberLong": "1673676513178"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198030664763",
		"killerId": "76561198106467823",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89552.88,
			"y": 2290.7344,
			"z": 144099.19
		},
		"victimPosition": {
			"x": 99786.06,
			"y": 1503.1234,
			"z": 146246.12
		},
		"killerVelocity": {
			"x": 307.3307,
			"y": -32.569347,
			"z": 73.12907
		},
		"victimVelocity": {
			"x": -221.14977,
			"y": -18.79777,
			"z": -169.1012
		}
	}, {
		"_id": {
			"$oid": "63c24b89973e27337a704946"
		},
		"id": "a89d573f-0cac-4293-b997-270a367147ad",
		"time": {
			"$numberLong": "1673677705572"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199187473024",
		"killerId": "76561198420365633",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80392.9,
			"y": 7637.2485,
			"z": 97365.02
		},
		"victimPosition": {
			"x": 81509.97,
			"y": 6958.912,
			"z": 92470.6
		},
		"killerVelocity": {
			"x": 65.934555,
			"y": -94.44674,
			"z": -388.18964
		},
		"victimVelocity": {
			"x": -79.283134,
			"y": -183.57323,
			"z": -238.29935
		}
	}, {
		"_id": {
			"$oid": "63c24bed973e27337a70494b"
		},
		"id": "8807e414-6edf-42d8-916d-05757d421c7a",
		"time": {
			"$numberLong": "1673677805482"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197998846985",
		"killerId": "76561198420365633",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65918.305,
			"y": 1580.6179,
			"z": 105634.734
		},
		"victimPosition": {
			"x": 66480.11,
			"y": 511.2773,
			"z": 107800.82
		},
		"killerVelocity": {
			"x": 109.66853,
			"y": -134.45836,
			"z": 347.16205
		},
		"victimVelocity": {
			"x": 69.503685,
			"y": 1.9710355,
			"z": -296.21826
		}
	}, {
		"_id": {
			"$oid": "63c24d36973e27337a70496f"
		},
		"id": "a3d816ad-fc4a-4a70-bcdf-c729eaad92f1",
		"time": {
			"$numberLong": "1673678134400"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197998846985",
		"killerId": "76561198962737012",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55044.73,
			"y": 3214.9316,
			"z": 107580.875
		},
		"victimPosition": {
			"x": 54733.73,
			"y": 3963.5593,
			"z": 101785.92
		},
		"killerVelocity": {
			"x": 22.177767,
			"y": 18.916525,
			"z": -296.92007
		},
		"victimVelocity": {
			"x": -198.25581,
			"y": 5.2680745,
			"z": 105.448555
		}
	}, {
		"_id": {
			"$oid": "63c25f57973e27337a704a6b"
		},
		"id": "31a83aee-1e30-468d-ba0e-af17ba514138",
		"time": {
			"$numberLong": "1673682775512"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199122181364",
		"killerId": "76561199252081209",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56211.785,
			"y": 1051.0614,
			"z": 115283.91
		},
		"victimPosition": {
			"x": 57974.41,
			"y": 1201.2152,
			"z": 114943.06
		},
		"killerVelocity": {
			"x": 221.49974,
			"y": 106.9813,
			"z": -82.933235
		},
		"victimVelocity": {
			"x": -158.13911,
			"y": -46.90944,
			"z": 61.90788
		}
	}, {
		"_id": {
			"$oid": "63c29b72973e27337a704b23"
		},
		"id": "142467d1-449e-4f9e-babe-784e646e0dd9",
		"time": {
			"$numberLong": "1673698162103"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199451981886",
		"killerId": "76561198838928185",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59119.895,
			"y": 771.106,
			"z": 120367.99
		},
		"victimPosition": {
			"x": 57019.19,
			"y": 892.40656,
			"z": 120270.1
		},
		"killerVelocity": {
			"x": -213.6486,
			"y": -0.060279593,
			"z": 23.136372
		},
		"victimVelocity": {
			"x": -79.945694,
			"y": 43.240417,
			"z": 163.07495
		}
	}, {
		"_id": {
			"$oid": "63c29be3973e27337a704b26"
		},
		"id": "8bb0af37-1e64-46ae-a5fd-7f011b312f3a",
		"time": {
			"$numberLong": "1673698275734"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197972180550",
		"killerId": "76561198838928185",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49580.793,
			"y": 2423.1555,
			"z": 113606.04
		},
		"victimPosition": {
			"x": 53403.098,
			"y": 701.38837,
			"z": 118580.555
		},
		"killerVelocity": {
			"x": 290.6155,
			"y": -112.86054,
			"z": 252.54904
		},
		"victimVelocity": {
			"x": -79.91026,
			"y": 10.430614,
			"z": -50.384895
		}
	}, {
		"_id": {
			"$oid": "63c2ba94973e27337a704c1d"
		},
		"id": "d69300a4-ddb0-4dbf-bf2a-57f24ad2a0cb",
		"time": {
			"$numberLong": "1673706132096"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198243593924",
		"killerId": "76561198242518470",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60151.438,
			"y": 1139.6686,
			"z": 108980.75
		},
		"victimPosition": {
			"x": 60711.547,
			"y": 852.1202,
			"z": 107501.766
		},
		"killerVelocity": {
			"x": 204.39322,
			"y": -35.72392,
			"z": 14.123717
		},
		"victimVelocity": {
			"x": 35.203636,
			"y": -61.316906,
			"z": -146.86748
		}
	}, {
		"_id": {
			"$oid": "63c2be03973e27337a704c60"
		},
		"id": "11ddc0c0-d524-4ed3-a0a2-da8b684d8805",
		"time": {
			"$numberLong": "1673707011400"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199223951887",
		"killerId": "76561199359526274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60504.457,
			"y": 1456.3423,
			"z": 118499.76
		},
		"victimPosition": {
			"x": 60501.86,
			"y": 1442.4984,
			"z": 118499.336
		},
		"killerVelocity": {
			"x": -96.42379,
			"y": 1.2427689,
			"z": 83.94651
		},
		"victimVelocity": {
			"x": 91.11538,
			"y": -56.750637,
			"z": -87.20196
		}
	}, {
		"_id": {
			"$oid": "63c2c443973e27337a704cd1"
		},
		"id": "07ac6574-5aa8-4eaa-b605-1e830ecc94a2",
		"time": {
			"$numberLong": "1673708611364"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198025116158",
		"killerId": "76561198146987393",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 106328.445,
			"y": 11784.913,
			"z": 80178.28
		},
		"victimPosition": {
			"x": 106581.586,
			"y": 10651.692,
			"z": 77363.69
		},
		"killerVelocity": {
			"x": -48.620583,
			"y": -35.07364,
			"z": -323.50568
		},
		"victimVelocity": {
			"x": -20.661724,
			"y": -301.70862,
			"z": -70.22382
		}
	}, {
		"_id": {
			"$oid": "63c30855973e27337a705013"
		},
		"id": "89630381-302e-4800-98a8-80553776c8f9",
		"time": {
			"$numberLong": "1673726037551"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199071154836",
		"killerId": "76561198414753307",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89516.67,
			"y": 5231.8184,
			"z": 94081.51
		},
		"victimPosition": {
			"x": 100561.11,
			"y": 4853.426,
			"z": 83848.59
		},
		"killerVelocity": {
			"x": 300.02133,
			"y": 25.794643,
			"z": -249.64034
		},
		"victimVelocity": {
			"x": 187.00221,
			"y": -143.36417,
			"z": -189.01964
		}
	}, {
		"_id": {
			"$oid": "63c30a56973e27337a705045"
		},
		"id": "85133106-1e7f-43e9-9837-e0e37d180ea3",
		"time": {
			"$numberLong": "1673726550527"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198087980522",
		"killerId": "76561198271406893",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95009.23,
			"y": 796.54816,
			"z": 89046.43
		},
		"victimPosition": {
			"x": 92559.2,
			"y": 949.3632,
			"z": 89877.586
		},
		"killerVelocity": {
			"x": -275.0545,
			"y": -59.872448,
			"z": 27.565104
		},
		"victimVelocity": {
			"x": -25.823195,
			"y": -46.892395,
			"z": -56.88316
		}
	}, {
		"_id": {
			"$oid": "63c313b4973e27337a705104"
		},
		"id": "2976b4f0-5400-483f-8c1a-dced14c9bbdb",
		"time": {
			"$numberLong": "1673728948596"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199148886866",
		"killerId": "76561198946052625",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52249.227,
			"y": 348.3611,
			"z": 118519.69
		},
		"victimPosition": {
			"x": 52369.773,
			"y": 279.54172,
			"z": 118723.67
		},
		"killerVelocity": {
			"x": 74.634056,
			"y": -64.19405,
			"z": 136.48772
		},
		"victimVelocity": {
			"x": 56.519962,
			"y": 0.029509835,
			"z": 5.455021
		}
	}, {
		"_id": {
			"$oid": "63c313bf973e27337a705108"
		},
		"id": "51af79dc-c484-4075-a83c-2378ce423288",
		"time": {
			"$numberLong": "1673728959524"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198946052625",
		"killerId": "76561198087980522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52693.445,
			"y": 510.90305,
			"z": 118075.51
		},
		"victimPosition": {
			"x": 53251.883,
			"y": 706.2802,
			"z": 119323.734
		},
		"killerVelocity": {
			"x": 61.321712,
			"y": 17.308266,
			"z": 152.65862
		},
		"victimVelocity": {
			"x": 80.71192,
			"y": 32.339375,
			"z": -42.60933
		}
	}, {
		"_id": {
			"$oid": "63c314e8973e27337a70512c"
		},
		"id": "00b4efcb-0409-4f13-b96d-29c150e394c8",
		"time": {
			"$numberLong": "1673729256175"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198085773935",
		"killerId": "76561198946052625",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51633.574,
			"y": 279.4775,
			"z": 118710.125
		},
		"victimPosition": {
			"x": 51620.71,
			"y": 279.47488,
			"z": 118679.52
		},
		"killerVelocity": {
			"x": -2.0498888,
			"y": -0.02193062,
			"z": -5.061376
		},
		"victimVelocity": {
			"x": -5.04249,
			"y": -0.02387876,
			"z": -9.402652
		}
	}, {
		"_id": {
			"$oid": "63c31532973e27337a705137"
		},
		"id": "a1a6337a-443c-4bdc-a021-e779864ce203",
		"time": {
			"$numberLong": "1673729330005"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198085773935",
		"killerId": "76561198946052625",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51587.62,
			"y": 279.36737,
			"z": 118656.54
		},
		"victimPosition": {
			"x": 51561.945,
			"y": 279.41772,
			"z": 118583.484
		},
		"killerVelocity": {
			"x": -5.3258176,
			"y": -0.083292484,
			"z": -13.897356
		},
		"victimVelocity": {
			"x": -9.662435,
			"y": 0.013359182,
			"z": -18.486725
		}
	}, {
		"_id": {
			"$oid": "63c315ed973e27337a705140"
		},
		"id": "b041d58f-0e12-4c26-b043-8a060d779eca",
		"time": {
			"$numberLong": "1673729517644"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199122091924",
		"killerId": "76561199016173392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96454.16,
			"y": 1104.6406,
			"z": 101315.49
		},
		"victimPosition": {
			"x": 96952.11,
			"y": 1148.3618,
			"z": 101405.82
		},
		"killerVelocity": {
			"x": 368.7241,
			"y": 18.21545,
			"z": 6.9624186
		},
		"victimVelocity": {
			"x": 305.2563,
			"y": -51.256016,
			"z": 38.4612
		}
	}, {
		"_id": {
			"$oid": "63c31cd2973e27337a70520d"
		},
		"id": "a5232475-1b3a-4e1e-8784-7c126e02a529",
		"time": {
			"$numberLong": "1673731282817"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199097352636",
		"killerId": "76561197985157646",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64969.78,
			"y": 780.2851,
			"z": 116208.85
		},
		"victimPosition": {
			"x": 65138.67,
			"y": 951.4572,
			"z": 115847.21
		},
		"killerVelocity": {
			"x": 276.67157,
			"y": 26.029985,
			"z": -115.524216
		},
		"victimVelocity": {
			"x": 137.13332,
			"y": -10.174837,
			"z": -49.026707
		}
	}, {
		"_id": {
			"$oid": "63c34d4e973e27337a705446"
		},
		"id": "ffafef53-44bd-49fe-957f-2d4aa9cf1c4e",
		"time": {
			"$numberLong": "1673743694156"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198353029942",
		"killerId": "76561199134702363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53857.645,
			"y": 312.4702,
			"z": 118283.42
		},
		"victimPosition": {
			"x": 54119.637,
			"y": 323.14142,
			"z": 118185.31
		},
		"killerVelocity": {
			"x": 212.14725,
			"y": 3.5470092,
			"z": -67.43024
		},
		"victimVelocity": {
			"x": 120.06162,
			"y": -1.764818,
			"z": -49.118195
		}
	}, {
		"_id": {
			"$oid": "63c35a78973e27337a705511"
		},
		"id": "dd1cd769-2517-4421-8db6-9f4668784d62",
		"time": {
			"$numberLong": "1673747064739"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199059891988",
		"killerId": "76561199096470924",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80098.25,
			"y": 1244.5791,
			"z": 89758.09
		},
		"victimPosition": {
			"x": 80959.2,
			"y": 926.91895,
			"z": 87922.04
		},
		"killerVelocity": {
			"x": 172.92,
			"y": -16.474628,
			"z": -305.3386
		},
		"victimVelocity": {
			"x": 155.00117,
			"y": 20.8541,
			"z": -231.29005
		}
	}, {
		"_id": {
			"$oid": "63c38432c33df875e843abf1"
		},
		"id": "c19a90ed-f38d-4b27-8379-00045c0752e1",
		"time": {
			"$numberLong": "1673757746353"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199159302966",
		"killerId": "76561199082928949",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89210.516,
			"y": 1660.7917,
			"z": 80691.914
		},
		"victimPosition": {
			"x": 91016.3,
			"y": 1917.0623,
			"z": 78544.19
		},
		"killerVelocity": {
			"x": 277.19772,
			"y": -49.9986,
			"z": -263.46872
		},
		"victimVelocity": {
			"x": 55.715355,
			"y": -200.3482,
			"z": -283.5922
		}
	}, {
		"_id": {
			"$oid": "63c38a8fc33df875e843ac5c"
		},
		"id": "fc944a1a-202d-4360-9598-4b87d2707dab",
		"time": {
			"$numberLong": "1673759375397"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198450359260",
		"killerId": "76561197982548387",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 103649.33,
			"y": 9551.978,
			"z": 64483.46
		},
		"victimPosition": {
			"x": 109383.36,
			"y": 2562.63,
			"z": 71517.6
		},
		"killerVelocity": {
			"x": 79.50131,
			"y": -146.01073,
			"z": 349.1916
		},
		"victimVelocity": {
			"x": -61.873547,
			"y": -5.2827773,
			"z": 115.568115
		}
	}, {
		"_id": {
			"$oid": "63c3a18bc33df875e843add5"
		},
		"id": "982edcca-defd-4074-a3af-e1ef7f02af29",
		"time": {
			"$numberLong": "1673765259214"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199160702772",
		"killerId": "76561198055544423",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71755.31,
			"y": 6071.0034,
			"z": 103143.055
		},
		"victimPosition": {
			"x": 63459.234,
			"y": 12419.004,
			"z": 93156.37
		},
		"killerVelocity": {
			"x": -188.22522,
			"y": 127.14037,
			"z": -207.36404
		},
		"victimVelocity": {
			"x": 178.54324,
			"y": 88.59498,
			"z": -124.29698
		}
	}, {
		"_id": {
			"$oid": "63c3a7cbc33df875e843ae26"
		},
		"id": "ea43fde8-f7cb-45d2-9123-2635aa287075",
		"time": {
			"$numberLong": "1673766859224"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198967264187",
		"killerId": "76561199272060105",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92134.53,
			"y": 1177.7827,
			"z": 94537.34
		},
		"victimPosition": {
			"x": 91513.484,
			"y": 1458.3776,
			"z": 94751.06
		},
		"killerVelocity": {
			"x": -169.48729,
			"y": 60.552677,
			"z": 57.6809
		},
		"victimVelocity": {
			"x": -51.70545,
			"y": 86.43945,
			"z": 12.559293
		}
	}, {
		"_id": {
			"$oid": "63c3c123c33df875e843afba"
		},
		"id": "099f5446-4b87-448e-943b-a204acde4d60",
		"time": {
			"$numberLong": "1673773347399"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199153548254",
		"killerId": "76561198332336634",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114198.71,
			"y": 2638.3445,
			"z": 67167.13
		},
		"victimPosition": {
			"x": 98779.25,
			"y": 2399.22,
			"z": 75330.984
		},
		"killerVelocity": {
			"x": -226.51062,
			"y": -8.229365,
			"z": 97.0499
		},
		"victimVelocity": {
			"x": -179.72408,
			"y": -15.975711,
			"z": 128.88272
		}
	}, {
		"_id": {
			"$oid": "63c447f8c33df875e843b32b"
		},
		"id": "f8f6fc08-069a-4be2-8829-104463981146",
		"time": {
			"$numberLong": "1673807864033"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199430462992",
		"killerId": "76561199016173392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58417.46,
			"y": 1764.2335,
			"z": 118029.555
		},
		"victimPosition": {
			"x": 61171.695,
			"y": 2250.9634,
			"z": 115685.516
		},
		"killerVelocity": {
			"x": 209.64995,
			"y": 6.31637,
			"z": -128.09192
		},
		"victimVelocity": {
			"x": -112.869774,
			"y": -220.73947,
			"z": -119.24823
		}
	}, {
		"_id": {
			"$oid": "63c44873c33df875e843b332"
		},
		"id": "0ee240ea-151c-47d8-a09d-29152a44569f",
		"time": {
			"$numberLong": "1673807987967"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199418532149",
		"killerId": "76561199019789231",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50495.656,
			"y": 1041.5675,
			"z": 118390.234
		},
		"victimPosition": {
			"x": 51957.387,
			"y": 277.6025,
			"z": 118918.375
		},
		"killerVelocity": {
			"x": -111.027664,
			"y": 114.93767,
			"z": 193.56555
		},
		"victimVelocity": {
			"x": -0.00006118551,
			"y": 0.000049211085,
			"z": -0.000020804982
		}
	}, {
		"_id": {
			"$oid": "63c44e05c33df875e843b3a1"
		},
		"id": "d90251d5-8da8-45d9-8a87-045a6e96e637",
		"time": {
			"$numberLong": "1673809413243"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199128369112",
		"killerId": "76561198286058794",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61007.676,
			"y": 1610.1288,
			"z": 122174.914
		},
		"victimPosition": {
			"x": 61076.54,
			"y": 798.702,
			"z": 121451.945
		},
		"killerVelocity": {
			"x": 189.06104,
			"y": -7.502523,
			"z": 189.27196
		},
		"victimVelocity": {
			"x": 161.86115,
			"y": -172.6331,
			"z": 55.332897
		}
	}, {
		"_id": {
			"$oid": "63c5021bca8dd411d5704daa"
		},
		"id": "7a5d75a8-e470-401b-b19a-25555722acf7",
		"time": {
			"$numberLong": "1673855515926"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198746677086",
		"killerId": "76561198032668202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90526.15,
			"y": 2118.9685,
			"z": 58475.45
		},
		"victimPosition": {
			"x": 89760.55,
			"y": 1286.1022,
			"z": 56427.594
		},
		"killerVelocity": {
			"x": -128.14763,
			"y": -44.37313,
			"z": -267.04645
		},
		"victimVelocity": {
			"x": -30.359245,
			"y": -70.39962,
			"z": -116.50025
		}
	}, {
		"_id": {
			"$oid": "63c524daca8dd411d5704e59"
		},
		"id": "4efcecc9-d55f-4c6a-ba5d-f33a7a081426",
		"time": {
			"$numberLong": "1673864410957"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198271842363",
		"killerId": "76561198143617447",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64583.297,
			"y": 3086.3162,
			"z": 129381.53
		},
		"victimPosition": {
			"x": 63800.914,
			"y": 2452.9175,
			"z": 129683.82
		},
		"killerVelocity": {
			"x": -214.49777,
			"y": -120.45454,
			"z": 47.656284
		},
		"victimVelocity": {
			"x": -174.14194,
			"y": -138.33543,
			"z": 46.59917
		}
	}, {
		"_id": {
			"$oid": "63c5255bca8dd411d5704e5c"
		},
		"id": "760638a3-e764-4837-8f04-d6a49cafd8b7",
		"time": {
			"$numberLong": "1673864539388"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198271842363",
		"killerId": "76561198143617447",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55813.324,
			"y": 659.9765,
			"z": 116574.51
		},
		"victimPosition": {
			"x": 56670.312,
			"y": 794.73193,
			"z": 115977.29
		},
		"killerVelocity": {
			"x": 117.06527,
			"y": 2.5694292,
			"z": -75.451515
		},
		"victimVelocity": {
			"x": 183.15845,
			"y": -2.2973354,
			"z": -92.6419
		}
	}, {
		"_id": {
			"$oid": "63c560a2ca8dd411d5704fd3"
		},
		"id": "972d017d-9984-4041-821f-a41d6e9ce9d0",
		"time": {
			"$numberLong": "1673879714798"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199092086779",
		"killerId": "76561198991562015",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60293.75,
			"y": 1144.9352,
			"z": 118399.2
		},
		"victimPosition": {
			"x": 61731.684,
			"y": 1341.7933,
			"z": 118210.85
		},
		"killerVelocity": {
			"x": 308.50018,
			"y": 62.698727,
			"z": -22.839096
		},
		"victimVelocity": {
			"x": 76.18322,
			"y": 5.901128,
			"z": -140.1292
		}
	}, {
		"_id": {
			"$oid": "63c56138ca8dd411d5704fdb"
		},
		"id": "4b681302-0286-47f7-b05d-d9e92dde0869",
		"time": {
			"$numberLong": "1673879864922"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198065598224",
		"killerId": "76561198991562015",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52888.336,
			"y": 360.0363,
			"z": 118947.28
		},
		"victimPosition": {
			"x": 54098.86,
			"y": 501.2693,
			"z": 118805.35
		},
		"killerVelocity": {
			"x": 182.68102,
			"y": 27.35602,
			"z": 15.6379
		},
		"victimVelocity": {
			"x": 145.59995,
			"y": 19.938667,
			"z": -104.65366
		}
	}, {
		"_id": {
			"$oid": "63c561f5ca8dd411d5704fe0"
		},
		"id": "67dfa4e0-fe21-4803-90ff-0c3c98bda7c7",
		"time": {
			"$numberLong": "1673880053066"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199092086779",
		"killerId": "76561198273163140",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 28909.096,
			"y": 2006.6964,
			"z": 133811.44
		},
		"victimPosition": {
			"x": 28652.938,
			"y": 1919.6741,
			"z": 133939.77
		},
		"killerVelocity": {
			"x": -182.94699,
			"y": -79.56358,
			"z": 64.9669
		},
		"victimVelocity": {
			"x": -134.9288,
			"y": 31.236465,
			"z": 69.74528
		}
	}, {
		"_id": {
			"$oid": "63c57472ca8dd411d57050b0"
		},
		"id": "dd2347f6-9c0b-4f8d-bc26-2b7513136c3b",
		"time": {
			"$numberLong": "1673884786773"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198093124125",
		"killerId": "76561198265145789",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60966.3,
			"y": 1731.2687,
			"z": 94007.08
		},
		"victimPosition": {
			"x": 60065.004,
			"y": 1558.5951,
			"z": 92720.84
		},
		"killerVelocity": {
			"x": 51.10257,
			"y": 44.675156,
			"z": -345.15747
		},
		"victimVelocity": {
			"x": -272.7838,
			"y": 3.0734358,
			"z": -105.65125
		}
	}, {
		"_id": {
			"$oid": "63c58824ca8dd411d570519a"
		},
		"id": "7581ebd9-3425-4645-868f-a4c6a6358c3b",
		"time": {
			"$numberLong": "1673889828283"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198428825812",
		"killerId": "76561199369902817",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54775.977,
			"y": 1888.4244,
			"z": 118589.5
		},
		"victimPosition": {
			"x": 53026.992,
			"y": 358.53873,
			"z": 118641.63
		},
		"killerVelocity": {
			"x": -212.6662,
			"y": -44.045002,
			"z": -130.72647
		},
		"victimVelocity": {
			"x": 124.13049,
			"y": 17.94478,
			"z": 0.92186725
		}
	}, {
		"_id": {
			"$oid": "63c5926cca8dd411d5705227"
		},
		"id": "1c6021a9-f001-43cb-b8e1-4d949c27e804",
		"time": {
			"$numberLong": "1673892460989"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198410239522",
		"killerId": "76561199192215243",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74321.97,
			"y": 3373.9094,
			"z": 104503.055
		},
		"victimPosition": {
			"x": 76685.83,
			"y": 3371.3843,
			"z": 102590.92
		},
		"killerVelocity": {
			"x": 126.61346,
			"y": 24.619848,
			"z": -123.89471
		},
		"victimVelocity": {
			"x": 64.953606,
			"y": -299.93414,
			"z": -10.842676
		}
	}, {
		"_id": {
			"$oid": "63c59345ca8dd411d5705236"
		},
		"id": "e42acdd2-5b62-4595-a427-49a0c1c8b575",
		"time": {
			"$numberLong": "1673892677742"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199192215243",
		"killerId": "76561198410239522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54155.76,
			"y": 647.03064,
			"z": 118339.086
		},
		"victimPosition": {
			"x": 52967.453,
			"y": 527.51105,
			"z": 117891.04
		},
		"killerVelocity": {
			"x": -105.007805,
			"y": -22.096663,
			"z": -69.184044
		},
		"victimVelocity": {
			"x": -24.261126,
			"y": 10.589854,
			"z": -72.4916
		}
	}, {
		"_id": {
			"$oid": "63c59381ca8dd411d5705239"
		},
		"id": "b671fa83-4a56-495f-bb0c-8374203fe6bf",
		"time": {
			"$numberLong": "1673892737867"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199192215243",
		"killerId": "76561198410239522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52475.336,
			"y": 573.9449,
			"z": 119803.84
		},
		"victimPosition": {
			"x": 52861.098,
			"y": 514.1364,
			"z": 119714.33
		},
		"killerVelocity": {
			"x": 173.44107,
			"y": -7.787432,
			"z": -48.382282
		},
		"victimVelocity": {
			"x": -95.33156,
			"y": 0.9174766,
			"z": 26.771076
		}
	}, {
		"_id": {
			"$oid": "63c593bdca8dd411d5705243"
		},
		"id": "4e890459-2254-4721-91fd-511effd8cbca",
		"time": {
			"$numberLong": "1673892797713"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199192215243",
		"killerId": "76561198977161082",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52600.945,
			"y": 279.3568,
			"z": 119007.81
		},
		"victimPosition": {
			"x": 52679.13,
			"y": 278.71585,
			"z": 118995.46
		},
		"killerVelocity": {
			"x": 45.955753,
			"y": -0.07139107,
			"z": 0.66102785
		},
		"victimVelocity": {
			"x": 49.032383,
			"y": 0.013797499,
			"z": 11.394841
		}
	}, {
		"_id": {
			"$oid": "63c5ac0dca8dd411d5705379"
		},
		"id": "fc25493d-2f71-41b2-9736-47837a148f07",
		"time": {
			"$numberLong": "1673899021362"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198085998214",
		"killerId": "76561199008326292",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 103412.38,
			"y": 1715.0647,
			"z": 93029.33
		},
		"victimPosition": {
			"x": 103662.92,
			"y": 7857.9824,
			"z": 77124.03
		},
		"killerVelocity": {
			"x": 158.61845,
			"y": 121.8489,
			"z": -190.83589
		},
		"victimVelocity": {
			"x": -36.10002,
			"y": 57.8433,
			"z": 12.102312
		}
	}, {
		"_id": {
			"$oid": "63c5b5a7ca8dd411d57053e4"
		},
		"id": "2241282b-7b22-4772-bf98-569664f434c8",
		"time": {
			"$numberLong": "1673901479635"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199008326292",
		"killerId": "76561199096481873",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49590.43,
			"y": 1004.8305,
			"z": 118563.91
		},
		"victimPosition": {
			"x": 50699.918,
			"y": 279.4706,
			"z": 118332
		},
		"killerVelocity": {
			"x": 323.78534,
			"y": -183.27975,
			"z": -43.61496
		},
		"victimVelocity": {
			"x": 4.966981,
			"y": -0.005674191,
			"z": -15.260166
		}
	}, {
		"_id": {
			"$oid": "63c62a38ca8dd411d57057ed"
		},
		"id": "68539525-24ec-4756-a215-06cb0c20d908",
		"time": {
			"$numberLong": "1673931320675"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199377398097",
		"killerId": "76561199012923966",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53564.49,
			"y": 344.70358,
			"z": 118770.68
		},
		"victimPosition": {
			"x": 53269.926,
			"y": 278.9704,
			"z": 118810.62
		},
		"killerVelocity": {
			"x": -254.6321,
			"y": -27.99021,
			"z": 2.6761177
		},
		"victimVelocity": {
			"x": -9.355885,
			"y": -0.27580428,
			"z": 3.8112195
		}
	}, {
		"_id": {
			"$oid": "63c62a5bca8dd411d57057f4"
		},
		"id": "9f971dac-e729-474a-b320-23288af1d29c",
		"time": {
			"$numberLong": "1673931355741"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199096713872",
		"killerId": "76561199012923966",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49908.902,
			"y": 915.3099,
			"z": 118090.93
		},
		"victimPosition": {
			"x": 50688.73,
			"y": 279.46884,
			"z": 118367.91
		},
		"killerVelocity": {
			"x": 145.10066,
			"y": -137.67061,
			"z": 69.61397
		},
		"victimVelocity": {
			"x": 0.005383775,
			"y": -0.004526004,
			"z": 0.008376685
		}
	}, {
		"_id": {
			"$oid": "63c649edca8dd411d5705a24"
		},
		"id": "706375de-0a92-48a4-838e-423949d2fb43",
		"time": {
			"$numberLong": "1673939437504"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198047870626",
		"killerId": "76561199140613965",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65103.227,
			"y": 940.3503,
			"z": 118254.52
		},
		"victimPosition": {
			"x": 66664.97,
			"y": 1028.9358,
			"z": 118656.07
		},
		"killerVelocity": {
			"x": 235.7636,
			"y": 5.9289184,
			"z": -121.792465
		},
		"victimVelocity": {
			"x": -320.54993,
			"y": 0.4715334,
			"z": 50.741
		}
	}, {
		"_id": {
			"$oid": "63c64c87ca8dd411d5705a51"
		},
		"id": "562e621f-1b76-4ea5-bf26-ca2285909d5d",
		"time": {
			"$numberLong": "1673940103751"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199086426163",
		"killerId": "76561199140613965",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54133.02,
			"y": 420.4078,
			"z": 119475.625
		},
		"victimPosition": {
			"x": 55579.67,
			"y": 784.69824,
			"z": 120362.74
		},
		"killerVelocity": {
			"x": 142.0979,
			"y": 8.815439,
			"z": 70.62012
		},
		"victimVelocity": {
			"x": 167.30261,
			"y": -4.42668,
			"z": 125.863716
		}
	}, {
		"_id": {
			"$oid": "63c64d90ca8dd411d5705a62"
		},
		"id": "ac416423-46c9-4b8f-9144-ae4eb188b010",
		"time": {
			"$numberLong": "1673940368720"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199086426163",
		"killerId": "76561198864002033",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62281.07,
			"y": 2406.4316,
			"z": 109328.805
		},
		"victimPosition": {
			"x": 62398.062,
			"y": 1509.945,
			"z": 110462.29
		},
		"killerVelocity": {
			"x": -24.292496,
			"y": -11.569909,
			"z": 235.73538
		},
		"victimVelocity": {
			"x": -33.85011,
			"y": -28.42399,
			"z": -90.339935
		}
	}, {
		"_id": {
			"$oid": "63c65186ca8dd411d5705a9d"
		},
		"id": "bc291548-7e63-48b6-8da5-88f56a602eb0",
		"time": {
			"$numberLong": "1673941382901"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199055281148",
		"killerId": "76561198391449362",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54946.242,
			"y": 452.01797,
			"z": 119009.12
		},
		"victimPosition": {
			"x": 57771.215,
			"y": 263.95807,
			"z": 115766.08
		},
		"killerVelocity": {
			"x": 246.66429,
			"y": 24.586134,
			"z": -31.602179
		},
		"victimVelocity": {
			"x": 5.091116,
			"y": 27.758373,
			"z": -132.25931
		}
	}, {
		"_id": {
			"$oid": "63c6be5a56db6e1b4ce8c358"
		},
		"id": "02c1d80f-8a87-4461-83ab-b716a97eaa97",
		"time": {
			"$numberLong": "1673969242062"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198093124125",
		"killerId": "76561199454599665",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51030.62,
			"y": 3304.6233,
			"z": 120979.66
		},
		"victimPosition": {
			"x": 56933.137,
			"y": 3975.3887,
			"z": 124157.945
		},
		"killerVelocity": {
			"x": 223.71999,
			"y": 19.383512,
			"z": 119.54877
		},
		"victimVelocity": {
			"x": 323.23132,
			"y": 12.920038,
			"z": 35.694023
		}
	}, {
		"_id": {
			"$oid": "63c6c25256db6e1b4ce8c37c"
		},
		"id": "45522c8c-e83a-4bd5-b4de-99526c3dfa1c",
		"time": {
			"$numberLong": "1673970258571"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198365831579",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69125.4,
			"y": 3073.9617,
			"z": 121258.52
		},
		"victimPosition": {
			"x": 68737.2,
			"y": 2720.8848,
			"z": 120115.51
		},
		"killerVelocity": {
			"x": 13.016312,
			"y": -24.131674,
			"z": -316.96747
		},
		"victimVelocity": {
			"x": -244.35748,
			"y": -22.090887,
			"z": -112.57745
		}
	}, {
		"_id": {
			"$oid": "63c6c28e56db6e1b4ce8c380"
		},
		"id": "e53fc64f-ee2c-498b-88aa-5bcac9d06e47",
		"time": {
			"$numberLong": "1673970318209"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198006227049",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62008.043,
			"y": 7264.4717,
			"z": 106896.016
		},
		"victimPosition": {
			"x": 62755.918,
			"y": 8075.072,
			"z": 106784.484
		},
		"killerVelocity": {
			"x": 145.46916,
			"y": 150.18546,
			"z": -186.45732
		},
		"victimVelocity": {
			"x": 146.57037,
			"y": 105.205826,
			"z": -107.877045
		}
	}, {
		"_id": {
			"$oid": "63c6e0de56db6e1b4ce8c53e"
		},
		"id": "5b558ef5-7d3a-4c15-9c4b-5f5cb0dd2639",
		"time": {
			"$numberLong": "1673978078855"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199446899060",
		"killerId": "76561197970513067",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66425.414,
			"y": 1978.8522,
			"z": 110439.945
		},
		"victimPosition": {
			"x": 66384.5,
			"y": 1997.8115,
			"z": 110685.76
		},
		"killerVelocity": {
			"x": -19.824984,
			"y": -5.647581,
			"z": 118.81052
		},
		"victimVelocity": {
			"x": -26.129522,
			"y": -7.1640606,
			"z": 125.86799
		}
	}, {
		"_id": {
			"$oid": "63c6e58256db6e1b4ce8c595"
		},
		"id": "61dbbf97-b818-4cdf-843f-2ace63ad2bd6",
		"time": {
			"$numberLong": "1673979266312"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198093124125",
		"killerId": "76561198449564798",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90683.375,
			"y": 1372.5801,
			"z": 75139.64
		},
		"victimPosition": {
			"x": 92029.11,
			"y": 1118.2552,
			"z": 75326.2
		},
		"killerVelocity": {
			"x": 198.12776,
			"y": 26.145016,
			"z": 190.21585
		},
		"victimVelocity": {
			"x": 162.79723,
			"y": 21.66003,
			"z": 13.427726
		}
	}, {
		"_id": {
			"$oid": "63c6f5a756db6e1b4ce8c69c"
		},
		"id": "ecd0a0fa-ae25-4354-ba02-489f9defafd5",
		"time": {
			"$numberLong": "1673983399783"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199009506848",
		"killerId": "76561199384092703",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57390.11,
			"y": 1027.543,
			"z": 114175.734
		},
		"victimPosition": {
			"x": 58181.79,
			"y": 584.12885,
			"z": 110627.98
		},
		"killerVelocity": {
			"x": 46.712624,
			"y": -47.873516,
			"z": -269.27805
		},
		"victimVelocity": {
			"x": -83.807274,
			"y": -16.258017,
			"z": -294.36246
		}
	}, {
		"_id": {
			"$oid": "63c6f60a56db6e1b4ce8c6a7"
		},
		"id": "9cf81b38-ead6-4294-b500-d66f81a27295",
		"time": {
			"$numberLong": "1673983498622"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199446899060",
		"killerId": "76561198031896877",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70872.42,
			"y": 1261.3097,
			"z": 111525.06
		},
		"victimPosition": {
			"x": 71402.984,
			"y": 1154.4622,
			"z": 111756.76
		},
		"killerVelocity": {
			"x": 171.32463,
			"y": -35.412655,
			"z": 70.18185
		},
		"victimVelocity": {
			"x": 231.7442,
			"y": -42.828186,
			"z": 73.20253
		}
	}, {
		"_id": {
			"$oid": "63c6f72256db6e1b4ce8c6b5"
		},
		"id": "a329c038-6b26-41f9-8802-792d00942365",
		"time": {
			"$numberLong": "1673983778059"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199009506848",
		"killerId": "76561198031896877",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95125.87,
			"y": 3275.3003,
			"z": 100789.164
		},
		"victimPosition": {
			"x": 98916.445,
			"y": 1259.1226,
			"z": 100969.56
		},
		"killerVelocity": {
			"x": -11.385345,
			"y": -163.0093,
			"z": 57.227776
		},
		"victimVelocity": {
			"x": 133.91553,
			"y": -222.88477,
			"z": -1.015087
		}
	}, {
		"_id": {
			"$oid": "63c702d356db6e1b4ce8c764"
		},
		"id": "47689d89-98df-416e-8c2d-1cbbf6734f7d",
		"time": {
			"$numberLong": "1673986771616"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199068737183",
		"killerId": "76561198384492993",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64833.316,
			"y": 1996.5049,
			"z": 112173.484
		},
		"victimPosition": {
			"x": 67278.375,
			"y": 1802.5853,
			"z": 110593.516
		},
		"killerVelocity": {
			"x": 301.57053,
			"y": 31.693768,
			"z": -177.67097
		},
		"victimVelocity": {
			"x": 223.42027,
			"y": -216.20096,
			"z": -113.14668
		}
	}, {
		"_id": {
			"$oid": "63c71bb656db6e1b4ce8c890"
		},
		"id": "549ba48f-9a2a-49db-9434-355bedc8dcce",
		"time": {
			"$numberLong": "1673993142581"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199117088933",
		"killerId": "76561199026117565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61859.25,
			"y": 3072.5698,
			"z": 103041.91
		},
		"victimPosition": {
			"x": 63490.01,
			"y": 2706.0986,
			"z": 100162.49
		},
		"killerVelocity": {
			"x": 169.85326,
			"y": -58.61189,
			"z": -166.62378
		},
		"victimVelocity": {
			"x": 61.923946,
			"y": -18.104677,
			"z": -276.0156
		}
	}, {
		"_id": {
			"$oid": "63c71c1456db6e1b4ce8c896"
		},
		"id": "169e3713-d8b3-41fc-86f1-a63ecf2d9a22",
		"time": {
			"$numberLong": "1673993236512"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199117088933",
		"killerId": "76561199026117565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53917.785,
			"y": 349.3401,
			"z": 117460.31
		},
		"victimPosition": {
			"x": 55865.54,
			"y": 286.4504,
			"z": 117049.78
		},
		"killerVelocity": {
			"x": 148.4361,
			"y": 8.768166,
			"z": -142.23584
		},
		"victimVelocity": {
			"x": 91.19954,
			"y": 18.21186,
			"z": -27.168114
		}
	}, {
		"_id": {
			"$oid": "63c76ae956db6e1b4ce8ca24"
		},
		"id": "2120d34b-2e67-4063-942f-b052c1c73008",
		"time": {
			"$numberLong": "1674013417150"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198096000762",
		"killerId": "76561199229830165",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83756.234,
			"y": 2903.0632,
			"z": 102838.78
		},
		"victimPosition": {
			"x": 84825.664,
			"y": 3122.614,
			"z": 100254.7
		},
		"killerVelocity": {
			"x": 245.50815,
			"y": -22.811548,
			"z": -316.23676
		},
		"victimVelocity": {
			"x": -228.98586,
			"y": 67.80186,
			"z": 168.02507
		}
	}, {
		"_id": {
			"$oid": "63c77bf756db6e1b4ce8cb78"
		},
		"id": "d3a6f581-893a-4fe5-b0f5-2df3c130142c",
		"time": {
			"$numberLong": "1674017783483"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198962737012",
		"killerId": "76561199187473024",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72207.984,
			"y": 4419.014,
			"z": 88128.38
		},
		"victimPosition": {
			"x": 50303.605,
			"y": 1106.8837,
			"z": 116815.28
		},
		"killerVelocity": {
			"x": 144.36258,
			"y": -77.05691,
			"z": -225.3723
		},
		"victimVelocity": {
			"x": 53.600502,
			"y": 13.875195,
			"z": -99.19346
		}
	}, {
		"_id": {
			"$oid": "63c7ebc156db6e1b4ce8ce8c"
		},
		"id": "bf8cce2a-bc16-4d31-85fc-d75e9a98911e",
		"time": {
			"$numberLong": "1674046401156"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198070925405",
		"killerId": "76561198391449362",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53328.918,
			"y": 341.35117,
			"z": 118929.6
		},
		"victimPosition": {
			"x": 56625.87,
			"y": 682.6417,
			"z": 118872.98
		},
		"killerVelocity": {
			"x": 153.23833,
			"y": -17.861656,
			"z": 22.38225
		},
		"victimVelocity": {
			"x": 25.267824,
			"y": -28.834612,
			"z": -195.10365
		}
	}, {
		"_id": {
			"$oid": "63c7ec4b56db6e1b4ce8ce98"
		},
		"id": "8da1a02a-8248-4b09-878b-c57ac420c44f",
		"time": {
			"$numberLong": "1674046539183"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198070925405",
		"killerId": "76561198873585008",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56802.51,
			"y": 1186.6025,
			"z": 117350.13
		},
		"victimPosition": {
			"x": 57714.85,
			"y": 1635.8884,
			"z": 116021.164
		},
		"killerVelocity": {
			"x": 90.82743,
			"y": 38.230743,
			"z": -181.31526
		},
		"victimVelocity": {
			"x": 197.00102,
			"y": 65.17983,
			"z": 140.49956
		}
	}, {
		"_id": {
			"$oid": "63c8068156db6e1b4ce8cfa7"
		},
		"id": "6933dc2e-8ca3-46d9-9f94-6513c89b94bb",
		"time": {
			"$numberLong": "1674053249550"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199129755354",
		"killerId": "76561199011815258",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55794.25,
			"y": 1119.0039,
			"z": 119701.35
		},
		"victimPosition": {
			"x": 56547.633,
			"y": 1422.6981,
			"z": 120874.1
		},
		"killerVelocity": {
			"x": 113.58203,
			"y": 50.0106,
			"z": 135.6876
		},
		"victimVelocity": {
			"x": 183.2925,
			"y": 60.31387,
			"z": 82.16655
		}
	}, {
		"_id": {
			"$oid": "63c8352856db6e1b4ce8d10a"
		},
		"id": "2e519d48-7ae4-4415-a647-e452d607f1c3",
		"time": {
			"$numberLong": "1674065192150"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198152044289",
		"killerId": "76561199164592664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54236.785,
			"y": 518.91626,
			"z": 119177.305
		},
		"victimPosition": {
			"x": 54381.977,
			"y": 522.922,
			"z": 119199.09
		},
		"killerVelocity": {
			"x": 184.10593,
			"y": 13.241927,
			"z": 21.758854
		},
		"victimVelocity": {
			"x": 129.62636,
			"y": 3.792319,
			"z": 15.240797
		}
	}, {
		"_id": {
			"$oid": "63c8414856db6e1b4ce8d1ec"
		},
		"id": "15562bb9-a454-466d-ab95-143b44dedf95",
		"time": {
			"$numberLong": "1674068296307"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198893721215",
		"killerId": "76561198283455815",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63520.54,
			"y": 711.5345,
			"z": 113984.89
		},
		"victimPosition": {
			"x": 64244.234,
			"y": 309.70172,
			"z": 114239.586
		},
		"killerVelocity": {
			"x": 192.9586,
			"y": -59.888935,
			"z": 266.2853
		},
		"victimVelocity": {
			"x": 103.259224,
			"y": -36.34669,
			"z": 125.579796
		}
	}, {
		"_id": {
			"$oid": "63c856f956db6e1b4ce8d31d"
		},
		"id": "a54be6cf-4a7a-400f-8bee-0886ced3dd11",
		"time": {
			"$numberLong": "1674073849025"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198297307372",
		"killerId": "76561198040399281",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53323.17,
			"y": 424.8069,
			"z": 118098.6
		},
		"victimPosition": {
			"x": 52057.258,
			"y": 303.6135,
			"z": 117095.984
		},
		"killerVelocity": {
			"x": -60.291542,
			"y": -21.865,
			"z": -73.388565
		},
		"victimVelocity": {
			"x": 32.170948,
			"y": 0.4467664,
			"z": 0.28238606
		}
	}, {
		"_id": {
			"$oid": "63c8573356db6e1b4ce8d324"
		},
		"id": "ceaf4b60-069a-4c11-8b30-946cc9ac53d3",
		"time": {
			"$numberLong": "1674073907066"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198297307372",
		"killerId": "76561198040399281",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51731.676,
			"y": 294.95496,
			"z": 118542.086
		},
		"victimPosition": {
			"x": 51987.12,
			"y": 285.23416,
			"z": 118584.32
		},
		"killerVelocity": {
			"x": 286.57977,
			"y": -12.634957,
			"z": 52.69194
		},
		"victimVelocity": {
			"x": 110.96607,
			"y": 11.56511,
			"z": 16.779203
		}
	}, {
		"_id": {
			"$oid": "63c8721156db6e1b4ce8d500"
		},
		"id": "b8b47c38-5ba2-472b-a9cc-59725f3557cd",
		"time": {
			"$numberLong": "1674080785825"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197980907753",
		"killerId": "76561199070203608",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58268.812,
			"y": 1969.0435,
			"z": 119384.234
		},
		"victimPosition": {
			"x": 60021.105,
			"y": 1740.11,
			"z": 118784.49
		},
		"killerVelocity": {
			"x": 380.04218,
			"y": 9.206519,
			"z": -61.475655
		},
		"victimVelocity": {
			"x": 11.636741,
			"y": -137.54083,
			"z": -57.398293
		}
	}, {
		"_id": {
			"$oid": "63c8726656db6e1b4ce8d50c"
		},
		"id": "726a7de7-a2d3-439f-86fe-e4eba06f4f2c",
		"time": {
			"$numberLong": "1674080870874"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198806156651",
		"killerId": "76561199070203608",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55782.098,
			"y": 472.20285,
			"z": 118612.305
		},
		"victimPosition": {
			"x": 54147.83,
			"y": 379.61615,
			"z": 119037.016
		},
		"killerVelocity": {
			"x": -155.6581,
			"y": -5.1476917,
			"z": 51.749382
		},
		"victimVelocity": {
			"x": 91.56291,
			"y": -47.888184,
			"z": -32.322926
		}
	}, {
		"_id": {
			"$oid": "63c88c3a56db6e1b4ce8d6b1"
		},
		"id": "b244ebcd-19ea-45ee-be7e-6b20d974eed9",
		"time": {
			"$numberLong": "1674087482153"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198108171877",
		"killerId": "76561198970744665",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71628.29,
			"y": 1157.1427,
			"z": 106393.53
		},
		"victimPosition": {
			"x": 71386.34,
			"y": 1030.2554,
			"z": 105260.07
		},
		"killerVelocity": {
			"x": 124.422325,
			"y": -25.65546,
			"z": -293.29562
		},
		"victimVelocity": {
			"x": 259.07123,
			"y": -47.46817,
			"z": -80.04721
		}
	}, {
		"_id": {
			"$oid": "63c88c3b56db6e1b4ce8d6b3"
		},
		"id": "4dcef5b2-831c-4363-a52b-78c04f7c661f",
		"time": {
			"$numberLong": "1674087483525"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197972180550",
		"killerId": "76561198970744665",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71869.8,
			"y": 1135.9756,
			"z": 106039.836
		},
		"victimPosition": {
			"x": 66859.76,
			"y": 1579.6115,
			"z": 111564.336
		},
		"killerVelocity": {
			"x": 220.51477,
			"y": -24.227837,
			"z": -220.3728
		},
		"victimVelocity": {
			"x": 324.03424,
			"y": 28.17204,
			"z": -138.55804
		}
	}, {
		"_id": {
			"$oid": "63c88d6756db6e1b4ce8d6cb"
		},
		"id": "9f79cfe0-f00f-46e1-a7b1-b0ba41cb2dc3",
		"time": {
			"$numberLong": "1674087783984"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198108171877",
		"killerId": "76561198812067632",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70796.586,
			"y": 2665.0327,
			"z": 94995.86
		},
		"victimPosition": {
			"x": 75045.945,
			"y": 1259.9977,
			"z": 86916.62
		},
		"killerVelocity": {
			"x": 208.11664,
			"y": -17.842361,
			"z": -333.1958
		},
		"victimVelocity": {
			"x": -185.06345,
			"y": 34.579163,
			"z": 158.50446
		}
	}, {
		"_id": {
			"$oid": "63c8955b56db6e1b4ce8d753"
		},
		"id": "6bbe1ce7-674c-4182-b4d7-5c6424653344",
		"time": {
			"$numberLong": "1674089819358"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198162340088",
		"killerId": "76561198848109816",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58067.38,
			"y": 506.1723,
			"z": 116328.016
		},
		"victimPosition": {
			"x": 55627.098,
			"y": 661.36255,
			"z": 117605.984
		},
		"killerVelocity": {
			"x": -173.68478,
			"y": -14.708308,
			"z": 74.245125
		},
		"victimVelocity": {
			"x": 197.34506,
			"y": 13.818499,
			"z": -123.63962
		}
	}, {
		"_id": {
			"$oid": "63c8a7c556db6e1b4ce8d8ac"
		},
		"id": "06500ab3-9940-4ed2-85a7-e26d7dc61cd2",
		"time": {
			"$numberLong": "1674094533709"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198300159777",
		"killerId": "76561198069073607",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68073.02,
			"y": 2530.6584,
			"z": 88660.4
		},
		"victimPosition": {
			"x": 68679.72,
			"y": 1315.7399,
			"z": 86431.62
		},
		"killerVelocity": {
			"x": 135.48279,
			"y": -222.672,
			"z": 34.237453
		},
		"victimVelocity": {
			"x": 36.280777,
			"y": -29.20961,
			"z": -92.30877
		}
	}, {
		"_id": {
			"$oid": "63c8a8c756db6e1b4ce8d8ca"
		},
		"id": "4c8b70c5-f9cd-485f-8a9a-30ae211c9a47",
		"time": {
			"$numberLong": "1674094791716"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198069073607",
		"killerId": "76561198991562015",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53631.293,
			"y": 702.9226,
			"z": 118762.37
		},
		"victimPosition": {
			"x": 55097.785,
			"y": 1037.6636,
			"z": 117441.82
		},
		"killerVelocity": {
			"x": 159.04494,
			"y": 36.06862,
			"z": -97.8769
		},
		"victimVelocity": {
			"x": 126.775665,
			"y": 100.672516,
			"z": 30.19429
		}
	}, {
		"_id": {
			"$oid": "63c8a9eb56db6e1b4ce8d8e5"
		},
		"id": "6b286854-0377-4d8f-aa72-aa48bd30f0d2",
		"time": {
			"$numberLong": "1674095083893"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199471599417",
		"killerId": "76561198991562015",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50546.79,
			"y": 279.3646,
			"z": 118515.39
		},
		"victimPosition": {
			"x": 49732.188,
			"y": 300.10602,
			"z": 118456.46
		},
		"killerVelocity": {
			"x": -26.767344,
			"y": 0.045676194,
			"z": -0.7670371
		},
		"victimVelocity": {
			"x": -20.060614,
			"y": 0.62508494,
			"z": 20.890049
		}
	}, {
		"_id": {
			"$oid": "63c9504156db6e1b4ce8dd2c"
		},
		"id": "a5a20b95-8059-4bfe-ad47-d2c62a0f1ba6",
		"time": {
			"$numberLong": "1674137665228"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198278674071",
		"killerId": "76561198801373292",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66820.74,
			"y": 1872.3439,
			"z": 115118.3
		},
		"victimPosition": {
			"x": 80656.91,
			"y": 7101.862,
			"z": 114891.61
		},
		"killerVelocity": {
			"x": 311.99167,
			"y": 76.47779,
			"z": -57.475792
		},
		"victimVelocity": {
			"x": -186.15952,
			"y": -113.70333,
			"z": 109.43225
		}
	}, {
		"_id": {
			"$oid": "63c953db56db6e1b4ce8dd51"
		},
		"id": "f4ddfa0f-aa5b-4122-a1d8-d7aef6648a16",
		"time": {
			"$numberLong": "1674138587736"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198362057199",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89709.82,
			"y": 5356.544,
			"z": 91170.88
		},
		"victimPosition": {
			"x": 102680.72,
			"y": 4466.886,
			"z": 83968.47
		},
		"killerVelocity": {
			"x": 300.35757,
			"y": 1.3581784,
			"z": -248.15509
		},
		"victimVelocity": {
			"x": 13.3064,
			"y": -88.01015,
			"z": 269.7223
		}
	}, {
		"_id": {
			"$oid": "63c9540e56db6e1b4ce8dd54"
		},
		"id": "1afd19c4-06f1-4d0e-98ab-f45284043f0e",
		"time": {
			"$numberLong": "1674138638301"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198801373292",
		"killerId": "76561199229603610",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107809.42,
			"y": 4088.9941,
			"z": 81806.96
		},
		"victimPosition": {
			"x": 122906.36,
			"y": 1927.2335,
			"z": 78391.9
		},
		"killerVelocity": {
			"x": 399.64594,
			"y": -40.074802,
			"z": -127.464325
		},
		"victimVelocity": {
			"x": 34.819813,
			"y": -28.460674,
			"z": 225.45981
		}
	}, {
		"_id": {
			"$oid": "63c95a3056db6e1b4ce8dd93"
		},
		"id": "7f98d668-d194-4398-9048-1892221f4ba5",
		"time": {
			"$numberLong": "1674140208506"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198358720155",
		"killerId": "76561198093124125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67474.7,
			"y": 1304.9592,
			"z": 87149.29
		},
		"victimPosition": {
			"x": 67545.21,
			"y": 2451.9397,
			"z": 90020.45
		},
		"killerVelocity": {
			"x": 231.66544,
			"y": -65.767235,
			"z": 131.41948
		},
		"victimVelocity": {
			"x": 8.397921,
			"y": 34.350452,
			"z": -316.6293
		}
	}, {
		"_id": {
			"$oid": "63c99a6f56db6e1b4ce8e0ba"
		},
		"id": "c5fccd73-f483-4f28-8327-3d89498af189",
		"time": {
			"$numberLong": "1674156655991"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198037025585",
		"killerId": "76561198017511559",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 127047.8,
			"y": 3052.9272,
			"z": 72085.18
		},
		"victimPosition": {
			"x": 127798.055,
			"y": 2996.0293,
			"z": 70113.16
		},
		"killerVelocity": {
			"x": 169.10475,
			"y": 19.34375,
			"z": -225.22995
		},
		"victimVelocity": {
			"x": -237.98412,
			"y": 8.631373,
			"z": -171.99464
		}
	}, {
		"_id": {
			"$oid": "63cb1df3862f8e159cefd124"
		},
		"id": "0b7b9dbf-5ac4-424e-8333-f061a78d45ec",
		"time": {
			"$numberLong": "1674255859774"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199250862024",
		"killerId": "76561199471732298",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68127.66,
			"y": 4303.0405,
			"z": 119120.31
		},
		"victimPosition": {
			"x": 71321.65,
			"y": 5040.017,
			"z": 119439.86
		},
		"killerVelocity": {
			"x": 314.57242,
			"y": 62.37039,
			"z": -58.13192
		},
		"victimVelocity": {
			"x": 186.50801,
			"y": -10.804731,
			"z": 181.57408
		}
	}, {
		"_id": {
			"$oid": "63cb4dad862f8e159cefd1df"
		},
		"id": "046bdbcb-be3b-441b-8e7d-7402e61d9056",
		"time": {
			"$numberLong": "1674268077393"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198187439499",
		"killerId": "76561198203026585",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 133326.47,
			"y": 4356.6885,
			"z": 59689.883
		},
		"victimPosition": {
			"x": 144602.06,
			"y": 6399.403,
			"z": 49122.43
		},
		"killerVelocity": {
			"x": 301.0487,
			"y": 15.5078535,
			"z": -258.73102
		},
		"victimVelocity": {
			"x": -106.552864,
			"y": -128.47134,
			"z": -32.640568
		}
	}, {
		"_id": {
			"$oid": "63cb6219862f8e159cefd3df"
		},
		"id": "f5547500-256d-4167-b4af-517aca57bbdc",
		"time": {
			"$numberLong": "1674273305645"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198106467823",
		"killerId": "76561198012217456",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56990.82,
			"y": 1973.0267,
			"z": 115241.586
		},
		"victimPosition": {
			"x": 55311.406,
			"y": 1016.3746,
			"z": 119420
		},
		"killerVelocity": {
			"x": -291.42395,
			"y": -106.702896,
			"z": 196.19023
		},
		"victimVelocity": {
			"x": 173.8523,
			"y": 37.63933,
			"z": -79.4248
		}
	}, {
		"_id": {
			"$oid": "63cb6226862f8e159cefd3e1"
		},
		"id": "82e1b76a-f142-4d07-a742-b5238640645b",
		"time": {
			"$numberLong": "1674273318501"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199015865405",
		"killerId": "76561198012217456",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52866.586,
			"y": 615.3053,
			"z": 116970.195
		},
		"victimPosition": {
			"x": 51612.46,
			"y": 279.3831,
			"z": 118581.84
		},
		"killerVelocity": {
			"x": -348.35736,
			"y": -36.58758,
			"z": -101.43917
		},
		"victimVelocity": {
			"x": 10.024388,
			"y": 0.04170639,
			"z": -12.697553
		}
	}, {
		"_id": {
			"$oid": "63cb6ace862f8e159cefd484"
		},
		"id": "7e5237d1-6b26-4d67-bf25-22892af4db44",
		"time": {
			"$numberLong": "1674275534502"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197985157646",
		"killerId": "76561197982311348",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90722.42,
			"y": 1312.2621,
			"z": 102805.37
		},
		"victimPosition": {
			"x": 89947.016,
			"y": 1370.38,
			"z": 103938.4
		},
		"killerVelocity": {
			"x": -137.47035,
			"y": 43.52448,
			"z": 323.644
		},
		"victimVelocity": {
			"x": -241.29944,
			"y": -80.55305,
			"z": -67.457245
		}
	}, {
		"_id": {
			"$oid": "63cb6bf7862f8e159cefd4a7"
		},
		"id": "68948515-cf1f-4675-a9a8-8cd5a52e736f",
		"time": {
			"$numberLong": "1674275831846"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198985917972",
		"killerId": "76561199152633724",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80529.35,
			"y": 3584.429,
			"z": 97897.445
		},
		"victimPosition": {
			"x": 87701.38,
			"y": 4046.8328,
			"z": 89879.984
		},
		"killerVelocity": {
			"x": 271.03802,
			"y": 5.4258814,
			"z": -208.53014
		},
		"victimVelocity": {
			"x": 47.68532,
			"y": -9.976955,
			"z": -360.80777
		}
	}, {
		"_id": {
			"$oid": "63cb71e8862f8e159cefd538"
		},
		"id": "c114eaf6-d265-4922-a9b8-9652440ac780",
		"time": {
			"$numberLong": "1674277352528"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199178085725",
		"killerId": "76561199085880358",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 130137.875,
			"y": 2346.8196,
			"z": 47084.523
		},
		"victimPosition": {
			"x": 130730.91,
			"y": 2256.3882,
			"z": 45456.88
		},
		"killerVelocity": {
			"x": -185.27625,
			"y": 21.803253,
			"z": -299.85126
		},
		"victimVelocity": {
			"x": -113.751724,
			"y": -12.818212,
			"z": -198.52515
		}
	}, {
		"_id": {
			"$oid": "63ce4f47862f8e159cefdc9d"
		},
		"id": "7c7e42b3-94d2-46de-9fea-926f1731fea9",
		"time": {
			"$numberLong": "1674465095268"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198028166289",
		"killerId": "76561198258451026",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58074.695,
			"y": 1709.0321,
			"z": 109482.99
		},
		"victimPosition": {
			"x": 57372.582,
			"y": 575.2622,
			"z": 108417.76
		},
		"killerVelocity": {
			"x": -183.19926,
			"y": -22.842907,
			"z": -144.51007
		},
		"victimVelocity": {
			"x": 137.47884,
			"y": -55.773514,
			"z": 143.612
		}
	}, {
		"_id": {
			"$oid": "63cedb00862f8e159cefdfdd"
		},
		"id": "cf14516d-b728-47f7-aa86-2551d620e470",
		"time": {
			"$numberLong": "1674500864704"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199096770244",
		"killerId": "76561198144441716",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61152.074,
			"y": 1911.7163,
			"z": 88549.66
		},
		"victimPosition": {
			"x": 62384.22,
			"y": 1346.5261,
			"z": 88892.71
		},
		"killerVelocity": {
			"x": 235.25114,
			"y": 36.153324,
			"z": -12.10273
		},
		"victimVelocity": {
			"x": -35.48565,
			"y": -65.41545,
			"z": 313.5955
		}
	}, {
		"_id": {
			"$oid": "63cf36c0862f8e159cefe2b3"
		},
		"id": "7cb9ab5a-be96-4766-9450-5cf3d31f54b9",
		"time": {
			"$numberLong": "1674524352315"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197965142204",
		"killerId": "76561199117860352",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62435.383,
			"y": 1505.4788,
			"z": 97452.305
		},
		"victimPosition": {
			"x": 60169.504,
			"y": 648.7082,
			"z": 95671.586
		},
		"killerVelocity": {
			"x": -105.59692,
			"y": -70.31769,
			"z": -349.84927
		},
		"victimVelocity": {
			"x": 252.7459,
			"y": -27.568285,
			"z": 126.14569
		}
	}, {
		"_id": {
			"$oid": "63cf4a8e862f8e159cefe4a1"
		},
		"id": "35d81947-5464-4d58-a268-395c046074c9",
		"time": {
			"$numberLong": "1674529422990"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199252934707",
		"killerId": "76561199355640176",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65466.906,
			"y": 1833.2462,
			"z": 107170.65
		},
		"victimPosition": {
			"x": 68005.15,
			"y": 1798.8335,
			"z": 103790.2
		},
		"killerVelocity": {
			"x": 190.09723,
			"y": -6.692908,
			"z": -234.34482
		},
		"victimVelocity": {
			"x": 22.207462,
			"y": -161.87631,
			"z": -41.560158
		}
	}, {
		"_id": {
			"$oid": "63cf4ab7862f8e159cefe4a7"
		},
		"id": "ca844cbf-3131-46d8-8410-ae91d3121976",
		"time": {
			"$numberLong": "1674529463195"
		},
		"victimAircraft": 4,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199252934707",
		"killerId": "76561199355640176",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68036.55,
			"y": 2258.6807,
			"z": 96824.19
		},
		"victimPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"killerVelocity": {
			"x": -226.16345,
			"y": 1.6347603,
			"z": -115.43775
		},
		"victimVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		}
	}, {
		"_id": {
			"$oid": "63cf532d862f8e159cefe560"
		},
		"id": "d335cf7a-1df7-48dd-8526-4e5ae8dec1e6",
		"time": {
			"$numberLong": "1674531629178"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197985157646",
		"killerId": "76561199022941161",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55890.95,
			"y": 432.79584,
			"z": 118172.5
		},
		"victimPosition": {
			"x": 56406.76,
			"y": 255.66637,
			"z": 117972.68
		},
		"killerVelocity": {
			"x": 204.8255,
			"y": -65.66533,
			"z": -106.25466
		},
		"victimVelocity": {
			"x": 117.45217,
			"y": -16.756792,
			"z": -23.401894
		}
	}, {
		"_id": {
			"$oid": "63cf5396862f8e159cefe569"
		},
		"id": "e5663446-19a3-4c20-bda4-3d2811f7b795",
		"time": {
			"$numberLong": "1674531734992"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198195554158",
		"killerId": "76561198012570648",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108833.02,
			"y": 1490.0447,
			"z": 108679.18
		},
		"victimPosition": {
			"x": 108011.945,
			"y": 1844.1873,
			"z": 113836
		},
		"killerVelocity": {
			"x": 57.15362,
			"y": 20.970057,
			"z": 333.6708
		},
		"victimVelocity": {
			"x": -46.85825,
			"y": -52.674187,
			"z": 100.07357
		}
	}, {
		"_id": {
			"$oid": "63cf5885862f8e159cefe5cb"
		},
		"id": "ae71831d-9ee7-48e5-8250-056bda95cdf8",
		"time": {
			"$numberLong": "1674532997483"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197985157646",
		"killerId": "76561198954940345",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97846.64,
			"y": 2778.662,
			"z": 102778.484
		},
		"victimPosition": {
			"x": 100818.91,
			"y": 1396.167,
			"z": 101627.734
		},
		"killerVelocity": {
			"x": 287.37973,
			"y": -46.511734,
			"z": -254.63803
		},
		"victimVelocity": {
			"x": 22.555027,
			"y": -23.215197,
			"z": 268.82858
		}
	}, {
		"_id": {
			"$oid": "63cf6245862f8e159cefe681"
		},
		"id": "a686d57f-6262-40a1-9911-aa9761309c88",
		"time": {
			"$numberLong": "1674535493385"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198829719934",
		"killerId": "76561198098285884",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72009.58,
			"y": 1535.0806,
			"z": 66215.91
		},
		"victimPosition": {
			"x": 70183.73,
			"y": 1465.8298,
			"z": 64915.098
		},
		"killerVelocity": {
			"x": -176.8368,
			"y": -20.913567,
			"z": -60.90716
		},
		"victimVelocity": {
			"x": -171.56091,
			"y": 0.35968512,
			"z": -222.05054
		}
	}, {
		"_id": {
			"$oid": "63cf9018862f8e159cefe6ea"
		},
		"id": "0cf36ba1-3726-4208-870b-947a4c0199dd",
		"time": {
			"$numberLong": "1674547224146"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198068366275",
		"killerId": "76561198971498905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52587.465,
			"y": 393.95428,
			"z": 118452.38
		},
		"victimPosition": {
			"x": 52364.523,
			"y": 364.16644,
			"z": 118594.53
		},
		"killerVelocity": {
			"x": -9.24014,
			"y": 3.2750056,
			"z": -18.100662
		},
		"victimVelocity": {
			"x": 121.07123,
			"y": 20.690962,
			"z": -55.61956
		}
	}, {
		"_id": {
			"$oid": "63cff94f862f8e159cefe7f9"
		},
		"id": "4816a892-333a-4177-bb74-c8f120d0069a",
		"time": {
			"$numberLong": "1674574159728"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198835990817",
		"killerId": "76561198038207394",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58997.4,
			"y": 4206.401,
			"z": 83606.664
		},
		"victimPosition": {
			"x": 58275.37,
			"y": 3531.316,
			"z": 83299.35
		},
		"killerVelocity": {
			"x": -22.956589,
			"y": -55.35537,
			"z": -130.75235
		},
		"victimVelocity": {
			"x": 139.61093,
			"y": 121.43389,
			"z": 103.76126
		}
	}, {
		"_id": {
			"$oid": "63cff950862f8e159cefe7fb"
		},
		"id": "0ab65453-29a0-431b-81de-1a585ee33e28",
		"time": {
			"$numberLong": "1674574160831"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198038207394",
		"killerId": "76561198835990817",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58429.484,
			"y": 3660.6475,
			"z": 83411.3
		},
		"victimPosition": {
			"x": 58955.598,
			"y": 4156.6562,
			"z": 83455.81
		},
		"killerVelocity": {
			"x": 137.82176,
			"y": 112.84725,
			"z": 95.40392
		},
		"victimVelocity": {
			"x": -46.769684,
			"y": -30.909147,
			"z": -117.162384
		}
	}, {
		"_id": {
			"$oid": "63d04067862f8e159cefeb67"
		},
		"id": "8a189179-250f-446b-8ea3-5e2a2c6de093",
		"time": {
			"$numberLong": "1674592359125"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199252934707",
		"killerId": "76561199013632842",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61737.188,
			"y": 1633.4431,
			"z": 114898.21
		},
		"victimPosition": {
			"x": 60583.543,
			"y": 1397.9695,
			"z": 115961.22
		},
		"killerVelocity": {
			"x": -272.4563,
			"y": -38.940228,
			"z": 262.60974
		},
		"victimVelocity": {
			"x": 157.46722,
			"y": 62.07615,
			"z": -156.36562
		}
	}, {
		"_id": {
			"$oid": "63d040ba862f8e159cefeb6f"
		},
		"id": "c5c4c26e-3c22-4156-ae7b-1342396ffd69",
		"time": {
			"$numberLong": "1674592442826"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199252934707",
		"killerId": "76561199013632842",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53514.062,
			"y": 670.8513,
			"z": 118867.76
		},
		"victimPosition": {
			"x": 53840.383,
			"y": 420.14252,
			"z": 118824.51
		},
		"killerVelocity": {
			"x": 155.30484,
			"y": 84.25192,
			"z": 32.50243
		},
		"victimVelocity": {
			"x": 81.77188,
			"y": -26.092527,
			"z": -19.273726
		}
	}, {
		"_id": {
			"$oid": "63d042ee862f8e159cefeb9e"
		},
		"id": "f05d3b66-dbed-4177-a05a-58a493c6ed37",
		"time": {
			"$numberLong": "1674593006153"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198275252068",
		"killerId": "76561199013632842",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48357.355,
			"y": 1515.5558,
			"z": 125017.52
		},
		"victimPosition": {
			"x": 57650.75,
			"y": 259.32492,
			"z": 119859.45
		},
		"killerVelocity": {
			"x": -270.90726,
			"y": 31.502195,
			"z": -141.51103
		},
		"victimVelocity": {
			"x": -1.8771094,
			"y": -0.6863842,
			"z": -17.81662
		}
	}, {
		"_id": {
			"$oid": "63d045cd862f8e159cefebc8"
		},
		"id": "5c189d1e-abf9-4736-ae83-e0971025a704",
		"time": {
			"$numberLong": "1674593741685"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199176551504",
		"killerId": "76561199455690286",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69168.37,
			"y": 2221.2717,
			"z": 110782.46
		},
		"victimPosition": {
			"x": 74001.66,
			"y": 1609.9988,
			"z": 108954.31
		},
		"killerVelocity": {
			"x": 151.45879,
			"y": 44.81846,
			"z": -287.6513
		},
		"victimVelocity": {
			"x": 197.13596,
			"y": -70.57786,
			"z": 99.599754
		}
	}, {
		"_id": {
			"$oid": "63d04915862f8e159cefec19"
		},
		"id": "b1ea36c7-86d9-41f2-9d3b-33014bde293b",
		"time": {
			"$numberLong": "1674594581256"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199064561783",
		"killerId": "76561199013632842",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 121132.98,
			"y": 2505.9634,
			"z": 44801.4
		},
		"victimPosition": {
			"x": 126483.99,
			"y": 1533.3912,
			"z": 41408.69
		},
		"killerVelocity": {
			"x": 358.50015,
			"y": -18.764168,
			"z": -138.58412
		},
		"victimVelocity": {
			"x": -204.76642,
			"y": -11.430292,
			"z": 55.92313
		}
	}, {
		"_id": {
			"$oid": "63d04b7d862f8e159cefec34"
		},
		"id": "47d3aa7d-44c1-45d0-9990-6bee9f428aff",
		"time": {
			"$numberLong": "1674595197669"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199455690286",
		"killerId": "76561199084354178",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94053.17,
			"y": 1177.4169,
			"z": 73104.28
		},
		"victimPosition": {
			"x": 97740.586,
			"y": 1232.735,
			"z": 65118.82
		},
		"killerVelocity": {
			"x": 305.62534,
			"y": 2.1989903,
			"z": -202.13301
		},
		"victimVelocity": {
			"x": 57.4076,
			"y": 10.826869,
			"z": -264.64197
		}
	}, {
		"_id": {
			"$oid": "63d04c63862f8e159cefec3f"
		},
		"id": "1c06a2c8-dfe1-408b-978b-38666aa3ebe1",
		"time": {
			"$numberLong": "1674595427460"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199084354178",
		"killerId": "76561199455690286",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61650.74,
			"y": 999.7168,
			"z": 112694.086
		},
		"victimPosition": {
			"x": 63717.93,
			"y": 291.2304,
			"z": 107779.14
		},
		"killerVelocity": {
			"x": -6.6886706,
			"y": 20.699621,
			"z": 154.54947
		},
		"victimVelocity": {
			"x": 60.20598,
			"y": 33.25787,
			"z": -73.660164
		}
	}, {
		"_id": {
			"$oid": "63d0b54a862f8e159cefee35"
		},
		"id": "e4e3df1d-22bb-49b0-813e-8e817edb72eb",
		"time": {
			"$numberLong": "1674622282954"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198149299132",
		"killerId": "76561199120231413",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60018.703,
			"y": 877.28345,
			"z": 117574.195
		},
		"victimPosition": {
			"x": 61122.105,
			"y": 817.2577,
			"z": 117301.7
		},
		"killerVelocity": {
			"x": 274.24557,
			"y": 1.6628511,
			"z": -108.26831
		},
		"victimVelocity": {
			"x": 228.96814,
			"y": -44.616093,
			"z": -41.547688
		}
	}, {
		"_id": {
			"$oid": "63d11fe2862f8e159ceff2c5"
		},
		"id": "42440214-4df2-4e21-91ac-9bdfee246f9a",
		"time": {
			"$numberLong": "1674649570886"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198080451967",
		"killerId": "76561198975408772",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58603.4,
			"y": 1425.89,
			"z": 113469.71
		},
		"victimPosition": {
			"x": 60784.035,
			"y": 2170.429,
			"z": 110898.17
		},
		"killerVelocity": {
			"x": 166.13739,
			"y": 45.173996,
			"z": -180.0515
		},
		"victimVelocity": {
			"x": -71.55818,
			"y": 137.71907,
			"z": -140.80849
		}
	}, {
		"_id": {
			"$oid": "63d122c7862f8e159ceff2f8"
		},
		"id": "900f5fe2-b1eb-4eec-94de-844e6d6b23d1",
		"time": {
			"$numberLong": "1674650311778"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198062141451",
		"killerId": "76561198418370111",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108881.484,
			"y": 1976.7,
			"z": 85625.234
		},
		"victimPosition": {
			"x": 122611.58,
			"y": 2668.96,
			"z": 83022.8
		},
		"killerVelocity": {
			"x": 149.29572,
			"y": -8.61442,
			"z": -320.84354
		},
		"victimVelocity": {
			"x": 156.90398,
			"y": -248.51288,
			"z": -22.231794
		}
	}, {
		"_id": {
			"$oid": "63d139aa862f8e159ceff410"
		},
		"id": "30bc67ca-9fc8-4479-9412-d4fa1fb65df2",
		"time": {
			"$numberLong": "1674656170640"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198144441716",
		"killerId": "76561198059127839",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97678.836,
			"y": 1616.6771,
			"z": 88537.21
		},
		"victimPosition": {
			"x": 96984.05,
			"y": 1874.0487,
			"z": 87593.72
		},
		"killerVelocity": {
			"x": -63.77849,
			"y": 19.624859,
			"z": 206.91827
		},
		"victimVelocity": {
			"x": 7.5938993,
			"y": -65.59011,
			"z": -204.56375
		}
	}, {
		"_id": {
			"$oid": "63d15ab3862f8e159ceff596"
		},
		"id": "b586f1ca-f77b-47ca-8487-ae6d34e4d4c2",
		"time": {
			"$numberLong": "1674664627862"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198030695930",
		"killerId": "76561198979507203",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74001.16,
			"y": 5030.9897,
			"z": 84818.61
		},
		"victimPosition": {
			"x": 72575.43,
			"y": 5183.9224,
			"z": 84582.14
		},
		"killerVelocity": {
			"x": -331.26294,
			"y": 37.34414,
			"z": -81.80212
		},
		"victimVelocity": {
			"x": -343.60428,
			"y": 27.083078,
			"z": -94.353386
		}
	}, {
		"_id": {
			"$oid": "63d167e4862f8e159ceff664"
		},
		"id": "090ac40f-dfa9-4e57-a2f1-1e9c5ba64229",
		"time": {
			"$numberLong": "1674668004946"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198881102929",
		"killerId": "76561198395184996",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71639.99,
			"y": 3150.4436,
			"z": 107920
		},
		"victimPosition": {
			"x": 68964.375,
			"y": 1618.3595,
			"z": 111038.766
		},
		"killerVelocity": {
			"x": -248.12233,
			"y": -70.772964,
			"z": 315.80997
		},
		"victimVelocity": {
			"x": -146.21527,
			"y": -168.91554,
			"z": -248.95558
		}
	}, {
		"_id": {
			"$oid": "63d18d27862f8e159ceff749"
		},
		"id": "fa857213-3a27-49fd-a2a8-bb47f610354a",
		"time": {
			"$numberLong": "1674677543150"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199229984000",
		"killerId": "76561198976321361",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75557.7,
			"y": 1370.7949,
			"z": 99334.04
		},
		"victimPosition": {
			"x": 81743.87,
			"y": 755.0459,
			"z": 100028.83
		},
		"killerVelocity": {
			"x": -309.43997,
			"y": -74.30265,
			"z": 163.58955
		},
		"victimVelocity": {
			"x": 144.97266,
			"y": -134.45084,
			"z": -117.51102
		}
	}, {
		"_id": {
			"$oid": "63d18f6c862f8e159ceff77c"
		},
		"id": "c373f808-d68a-4a51-aba7-1e0569ff931e",
		"time": {
			"$numberLong": "1674678124672"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198287829910",
		"killerId": "76561198355303894",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 102279.14,
			"y": 1672.9608,
			"z": 92876.55
		},
		"victimPosition": {
			"x": 114219.86,
			"y": 830.7979,
			"z": 91206.49
		},
		"killerVelocity": {
			"x": 269.11935,
			"y": -66.43275,
			"z": -182.19075
		},
		"victimVelocity": {
			"x": -204.61404,
			"y": -48.827785,
			"z": 2.0164502
		}
	}, {
		"_id": {
			"$oid": "63d1b814862f8e159ceff92f"
		},
		"id": "688db498-2c8c-4b77-a829-0cbc77ef4978",
		"time": {
			"$numberLong": "1674688532801"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199389140414",
		"killerId": "76561199192098222",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76666.57,
			"y": 3482.418,
			"z": 102393.36
		},
		"victimPosition": {
			"x": 84874.14,
			"y": 4655.608,
			"z": 99988.25
		},
		"killerVelocity": {
			"x": 287.4016,
			"y": 60.083557,
			"z": -200.7454
		},
		"victimVelocity": {
			"x": 37.859455,
			"y": 218.93219,
			"z": -5.729917
		}
	}, {
		"_id": {
			"$oid": "63d1bebf862f8e159ceff9e1"
		},
		"id": "91f0312f-a9cf-4e78-9026-ebf88d33f523",
		"time": {
			"$numberLong": "1674690239979"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197960780798",
		"killerId": "76561199355640176",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87562.76,
			"y": 1424.0708,
			"z": 94015.8
		},
		"victimPosition": {
			"x": 89284.65,
			"y": 1339.1073,
			"z": 93901.195
		},
		"killerVelocity": {
			"x": 381.52704,
			"y": -56.991066,
			"z": -24.81857
		},
		"victimVelocity": {
			"x": -271.9888,
			"y": 18.00661,
			"z": 83.38414
		}
	}, {
		"_id": {
			"$oid": "63d1c4e9862f8e159ceffa5c"
		},
		"id": "81093c25-6669-4d22-8493-6b0d2ea5901e",
		"time": {
			"$numberLong": "1674691817314"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198073139879",
		"killerId": "76561199013260463",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56286.188,
			"y": 541.5189,
			"z": 119326.05
		},
		"victimPosition": {
			"x": 55940.65,
			"y": 437.25134,
			"z": 119443.73
		},
		"killerVelocity": {
			"x": -239.06267,
			"y": -47.618828,
			"z": 10.014741
		},
		"victimVelocity": {
			"x": 187.00774,
			"y": 6.5549884,
			"z": 37.02241
		}
	}, {
		"_id": {
			"$oid": "63d1c5aa862f8e159ceffa66"
		},
		"id": "2ef511ce-eeb3-4784-9c36-e4af7724b276",
		"time": {
			"$numberLong": "1674692010312"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198113074438",
		"killerId": "76561199013260463",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52206.215,
			"y": 408.2101,
			"z": 118983.25
		},
		"victimPosition": {
			"x": 52962.008,
			"y": 1000.64825,
			"z": 121444.04
		},
		"killerVelocity": {
			"x": 53.130592,
			"y": 32.271652,
			"z": 101.4257
		},
		"victimVelocity": {
			"x": -290.72156,
			"y": -0.26462826,
			"z": 89.93949
		}
	}, {
		"_id": {
			"$oid": "63d1cfc9862f8e159ceffb26"
		},
		"id": "e24bf36b-bf6c-439f-b412-63351db5b8bc",
		"time": {
			"$numberLong": "1674694601827"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199252934707",
		"killerId": "76561199118858608",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75306.85,
			"y": 1338.3806,
			"z": 107932.43
		},
		"victimPosition": {
			"x": 73178.18,
			"y": 3264.147,
			"z": 107487.24
		},
		"killerVelocity": {
			"x": -143.06816,
			"y": 57.18561,
			"z": 143.32147
		},
		"victimVelocity": {
			"x": 140.41377,
			"y": 2.424556,
			"z": -89.64159
		}
	}, {
		"_id": {
			"$oid": "63d1d1ac862f8e159ceffb57"
		},
		"id": "ebdc8104-d69e-4b85-97d1-fb87e4579f0b",
		"time": {
			"$numberLong": "1674695084997"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199118858608",
		"killerId": "76561199012923085",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83340.03,
			"y": 1824.167,
			"z": 102112.85
		},
		"victimPosition": {
			"x": 90671.94,
			"y": 2238.3345,
			"z": 105684.05
		},
		"killerVelocity": {
			"x": 343.96017,
			"y": 21.400972,
			"z": 153.00381
		},
		"victimVelocity": {
			"x": -1.4294266,
			"y": -24.631487,
			"z": -259.46246
		}
	}, {
		"_id": {
			"$oid": "63d1dfd0862f8e159ceffc06"
		},
		"id": "86a6e55f-a41f-4cc0-a204-d4a19563a348",
		"time": {
			"$numberLong": "1674698704839"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198228906000",
		"killerId": "76561199096535602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94183.125,
			"y": 1893.9847,
			"z": 124061.266
		},
		"victimPosition": {
			"x": 95577.47,
			"y": 2230.703,
			"z": 124115.68
		},
		"killerVelocity": {
			"x": 265.91776,
			"y": 76.80576,
			"z": -43.93445
		},
		"victimVelocity": {
			"x": 79.398994,
			"y": 26.956924,
			"z": 51.674744
		}
	}, {
		"_id": {
			"$oid": "63d1dfe8862f8e159ceffc09"
		},
		"id": "3e8a1f76-4e2d-4143-9ff2-7cf0d363c649",
		"time": {
			"$numberLong": "1674698728139"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199096535602",
		"killerId": "76561199229326175",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95135.016,
			"y": 2478.6165,
			"z": 123723.95
		},
		"victimPosition": {
			"x": 93529.99,
			"y": 2272.0583,
			"z": 125482.33
		},
		"killerVelocity": {
			"x": -220.06023,
			"y": -29.211473,
			"z": 259.8813
		},
		"victimVelocity": {
			"x": -179.98145,
			"y": -32.746693,
			"z": -68.004
		}
	}, {
		"_id": {
			"$oid": "63d1e04c862f8e159ceffc0d"
		},
		"id": "30dc6a2f-6505-4bb5-9048-c41fb5665853",
		"time": {
			"$numberLong": "1674698828834"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199230578995",
		"killerId": "76561199096535602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51901.72,
			"y": 279.41193,
			"z": 118653.46
		},
		"victimPosition": {
			"x": 51734.39,
			"y": 279.4836,
			"z": 118872.9
		},
		"killerVelocity": {
			"x": -1.8424405,
			"y": 0.08953302,
			"z": 2.3613646
		},
		"victimVelocity": {
			"x": 1.3636377,
			"y": 0.00018785149,
			"z": -6.0068326
		}
	}, {
		"_id": {
			"$oid": "63d1e0c7862f8e159ceffc19"
		},
		"id": "0ac14654-beee-4413-ab70-0fed6a87042f",
		"time": {
			"$numberLong": "1674698951470"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198058033098",
		"killerId": "76561199229326175",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52414.996,
			"y": 294.89758,
			"z": 118931.734
		},
		"victimPosition": {
			"x": 52532.086,
			"y": 343.8915,
			"z": 118947.83
		},
		"killerVelocity": {
			"x": 112.84426,
			"y": 19.299562,
			"z": 29.105772
		},
		"victimVelocity": {
			"x": -40.542515,
			"y": 0.3106814,
			"z": -10.866274
		}
	}, {
		"_id": {
			"$oid": "63d1e22a862f8e159ceffc2d"
		},
		"id": "98993a7d-549a-4783-bf39-3a6368056b7c",
		"time": {
			"$numberLong": "1674699306125"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199230578995",
		"killerId": "76561199229326175",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53826.547,
			"y": 600.39343,
			"z": 119122.63
		},
		"victimPosition": {
			"x": 55267.418,
			"y": 924.2569,
			"z": 119368.16
		},
		"killerVelocity": {
			"x": 201.0486,
			"y": 35.74741,
			"z": 32.166718
		},
		"victimVelocity": {
			"x": 195.11725,
			"y": 28.379112,
			"z": 18.668802
		}
	}, {
		"_id": {
			"$oid": "63d1e419862f8e159ceffc66"
		},
		"id": "ccb94378-5fa2-4d0b-afc4-4c8e546a2da5",
		"time": {
			"$numberLong": "1674699801787"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199229326175",
		"killerId": "76561199230578995",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 124786.41,
			"y": 4502.6357,
			"z": 51828.375
		},
		"victimPosition": {
			"x": 123826.625,
			"y": 2177.0215,
			"z": 53505.297
		},
		"killerVelocity": {
			"x": 292.2253,
			"y": -49.435562,
			"z": -270.34204
		},
		"victimVelocity": {
			"x": 110.01587,
			"y": -193.39671,
			"z": -9.147095
		}
	}, {
		"_id": {
			"$oid": "63d1edd9862f8e159ceffd38"
		},
		"id": "d24a7b9f-20a9-4de1-9204-f0dfdaa9f7a0",
		"time": {
			"$numberLong": "1674702297952"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086961565",
		"killerId": "76561198948418930",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60281.94,
			"y": 2045.6049,
			"z": 107940.21
		},
		"victimPosition": {
			"x": 56378.44,
			"y": 534.25244,
			"z": 110624.26
		},
		"killerVelocity": {
			"x": -357.5918,
			"y": -87.02164,
			"z": 152.27074
		},
		"victimVelocity": {
			"x": 208.40341,
			"y": 2.076666,
			"z": 90.6907
		}
	}, {
		"_id": {
			"$oid": "63d1ee60862f8e159ceffd3f"
		},
		"id": "049f3a52-f020-477b-9184-4f37162ec084",
		"time": {
			"$numberLong": "1674702432357"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198125914623",
		"killerId": "76561198277405884",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57687.582,
			"y": 2133.488,
			"z": 112278.63
		},
		"victimPosition": {
			"x": 54991.54,
			"y": 1980.6714,
			"z": 114560.48
		},
		"killerVelocity": {
			"x": -305.77866,
			"y": -7.054069,
			"z": 246.09265
		},
		"victimVelocity": {
			"x": -269.3468,
			"y": -24.422468,
			"z": 221.99751
		}
	}, {
		"_id": {
			"$oid": "63d1f1b6862f8e159ceffd9e"
		},
		"id": "1bb48809-a38c-4a31-9bfa-bfa0d222c2c9",
		"time": {
			"$numberLong": "1674703286485"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198277405884",
		"killerId": "76561198948418930",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73593.16,
			"y": 545.7289,
			"z": 109217.11
		},
		"victimPosition": {
			"x": 74206.76,
			"y": 539.07043,
			"z": 108405.26
		},
		"killerVelocity": {
			"x": 245.89972,
			"y": 4.0506024,
			"z": -282.2093
		},
		"victimVelocity": {
			"x": 173.92307,
			"y": 1.882528,
			"z": -222.06671
		}
	}, {
		"_id": {
			"$oid": "63d1f5bb862f8e159ceffdf2"
		},
		"id": "5caf7371-1760-43b1-9cc9-ebe8eaf091db",
		"time": {
			"$numberLong": "1674704315089"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198086961565",
		"killerId": "76561198277405884",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49805.39,
			"y": 1877.866,
			"z": 100591.12
		},
		"victimPosition": {
			"x": 42360.668,
			"y": 736.6429,
			"z": 99449.82
		},
		"killerVelocity": {
			"x": -319.45367,
			"y": 27.892824,
			"z": -101.461464
		},
		"victimVelocity": {
			"x": -47.84545,
			"y": -11.97245,
			"z": 192.30617
		}
	}, {
		"_id": {
			"$oid": "63d1f6a8862f8e159ceffe02"
		},
		"id": "55c40046-1df9-4715-a133-dca7448689ad",
		"time": {
			"$numberLong": "1674704552390"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086961565",
		"killerId": "76561199055281148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 126735.13,
			"y": 2099.6545,
			"z": 65798.74
		},
		"victimPosition": {
			"x": 100595.92,
			"y": 4591.8037,
			"z": 73087.42
		},
		"killerVelocity": {
			"x": -0.007871189,
			"y": 0.0031380728,
			"z": 0.016997417
		},
		"victimVelocity": {
			"x": -1.8928654,
			"y": 39.44857,
			"z": -280.9585
		}
	}, {
		"_id": {
			"$oid": "63d1f891862f8e159ceffe14"
		},
		"id": "6df40a63-f9cb-418b-a986-ec220e7a916a",
		"time": {
			"$numberLong": "1674705041570"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198161439433",
		"killerId": "76561198277405884",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52824.45,
			"y": 612.0198,
			"z": 118900.51
		},
		"victimPosition": {
			"x": 54814.312,
			"y": 712.63477,
			"z": 117960.375
		},
		"killerVelocity": {
			"x": 17.735209,
			"y": 12.9003935,
			"z": -11.66536
		},
		"victimVelocity": {
			"x": 157.09288,
			"y": 13.0725,
			"z": -73.14273
		}
	}, {
		"_id": {
			"$oid": "63d20028862f8e159ceffe6f"
		},
		"id": "830b568a-4b95-4ad7-9c54-8eda93f1b92f",
		"time": {
			"$numberLong": "1674706984367"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199189695432",
		"killerId": "76561198211655924",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79990.3,
			"y": 880.378,
			"z": 102385.09
		},
		"victimPosition": {
			"x": 81885.836,
			"y": 667.53937,
			"z": 102303.695
		},
		"killerVelocity": {
			"x": 277.22845,
			"y": 60.910896,
			"z": -96.93949
		},
		"victimVelocity": {
			"x": 97.64302,
			"y": -49.450306,
			"z": -231.04732
		}
	}, {
		"_id": {
			"$oid": "63d26031862f8e159cf0001f"
		},
		"id": "d4f1ce96-be8f-4697-a327-735e820302f5",
		"time": {
			"$numberLong": "1674731569556"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199131237024",
		"killerId": "76561198975408772",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49990.81,
			"y": 902.04803,
			"z": 116882.6
		},
		"victimPosition": {
			"x": 51228.227,
			"y": 902.7506,
			"z": 115577.21
		},
		"killerVelocity": {
			"x": 99.61836,
			"y": -2.1135502,
			"z": -99.20929
		},
		"victimVelocity": {
			"x": 110.16549,
			"y": -4.14191,
			"z": -182.11862
		}
	}, {
		"_id": {
			"$oid": "63d26053862f8e159cf00022"
		},
		"id": "92483726-757f-435c-8154-eb39c82033c2",
		"time": {
			"$numberLong": "1674731603293"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198071652604",
		"killerId": "76561198975408772",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54977.266,
			"y": 1197.846,
			"z": 116545.81
		},
		"victimPosition": {
			"x": 58425.18,
			"y": 1262.1838,
			"z": 117819.65
		},
		"killerVelocity": {
			"x": 181.41336,
			"y": 23.608019,
			"z": 47.23415
		},
		"victimVelocity": {
			"x": -105.50038,
			"y": -37.88418,
			"z": 139.3032
		}
	}, {
		"_id": {
			"$oid": "63d26b55862f8e159cf00063"
		},
		"id": "13400cc4-76a2-48f8-a79f-9b65fa8f04c8",
		"time": {
			"$numberLong": "1674734421295"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198021581899",
		"killerId": "76561199275633587",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 134029.14,
			"y": 3294.4233,
			"z": 42323.24
		},
		"victimPosition": {
			"x": 141493.45,
			"y": 1140.1278,
			"z": 39997.855
		},
		"killerVelocity": {
			"x": -13.142429,
			"y": 41.50679,
			"z": 207.46518
		},
		"victimVelocity": {
			"x": 13.593254,
			"y": -12.647535,
			"z": 120.92598
		}
	}, {
		"_id": {
			"$oid": "63d277db862f8e159cf000c5"
		},
		"id": "8422379c-af3b-40e6-a175-2f70683c0391",
		"time": {
			"$numberLong": "1674737627843"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198410923594",
		"killerId": "76561199277771858",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53169.91,
			"y": 381.2212,
			"z": 118765.47
		},
		"victimPosition": {
			"x": 52566.023,
			"y": 325.2708,
			"z": 118824.02
		},
		"killerVelocity": {
			"x": -242.3121,
			"y": 4.4901853,
			"z": 7.060551
		},
		"victimVelocity": {
			"x": 6.0762897,
			"y": 4.5590115,
			"z": -16.271427
		}
	}, {
		"_id": {
			"$oid": "63d277fd862f8e159cf000c7"
		},
		"id": "873712e2-d021-4dbd-86e0-d03e69760a82",
		"time": {
			"$numberLong": "1674737661654"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198155163511",
		"killerId": "76561199277771858",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51177.543,
			"y": 647.9417,
			"z": 118640.95
		},
		"victimPosition": {
			"x": 51122.832,
			"y": 836.21173,
			"z": 119321.14
		},
		"killerVelocity": {
			"x": -46.13212,
			"y": 38.277454,
			"z": 132.5119
		},
		"victimVelocity": {
			"x": -31.2367,
			"y": -56.00889,
			"z": -85.001236
		}
	}, {
		"_id": {
			"$oid": "63d2a2fd862f8e159cf00163"
		},
		"id": "1e8f62dc-9f96-4e2d-a1e7-fbfdf233e439",
		"time": {
			"$numberLong": "1674748669541"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199167509986",
		"killerId": "76561199128369112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62957.426,
			"y": 1354.2445,
			"z": 117539.38
		},
		"victimPosition": {
			"x": 63622.105,
			"y": 1339.2323,
			"z": 118550.89
		},
		"killerVelocity": {
			"x": 219.09056,
			"y": -0.34173506,
			"z": 298.4735
		},
		"victimVelocity": {
			"x": -108.229324,
			"y": -87.961815,
			"z": 186.42061
		}
	}, {
		"_id": {
			"$oid": "63d2a33e862f8e159cf00167"
		},
		"id": "99469705-519a-4b99-b0a7-621e43da69cb",
		"time": {
			"$numberLong": "1674748734622"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198259752365",
		"killerId": "76561199128369112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51515.527,
			"y": 878.0014,
			"z": 118606.69
		},
		"victimPosition": {
			"x": 51535.758,
			"y": 279.4881,
			"z": 118498.39
		},
		"killerVelocity": {
			"x": 109.14395,
			"y": -147.16801,
			"z": -95.35969
		},
		"victimVelocity": {
			"x": -0.000009012733,
			"y": -0.000112600625,
			"z": 1.10195614e-7
		}
	}, {
		"_id": {
			"$oid": "63d2a3b8862f8e159cf0016c"
		},
		"id": "6d5de2b4-edfe-42f4-9074-d51019558bcb",
		"time": {
			"$numberLong": "1674748856212"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198259752365",
		"killerId": "76561199167509986",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54340.887,
			"y": 710.81,
			"z": 119519.03
		},
		"victimPosition": {
			"x": 61592.99,
			"y": 954.19244,
			"z": 117205.29
		},
		"killerVelocity": {
			"x": 172.31454,
			"y": 19.293901,
			"z": 182.32793
		},
		"victimVelocity": {
			"x": -68.13657,
			"y": -55.74975,
			"z": 111.619896
		}
	}, {
		"_id": {
			"$oid": "63d2b695862f8e159cf0027c"
		},
		"id": "2cb7d7dd-4f7d-4c91-beb4-806fb60a2b2c",
		"time": {
			"$numberLong": "1674753685888"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198988759144",
		"killerId": "76561198968646845",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58751.395,
			"y": 946.31793,
			"z": 118543.56
		},
		"victimPosition": {
			"x": 63051.05,
			"y": 1741.1799,
			"z": 120737.08
		},
		"killerVelocity": {
			"x": 276.269,
			"y": 34.9521,
			"z": 123.34463
		},
		"victimVelocity": {
			"x": -64.25234,
			"y": 3.542241,
			"z": 75.65017
		}
	}, {
		"_id": {
			"$oid": "63d2b735862f8e159cf00281"
		},
		"id": "f2d46247-641d-49de-a39b-f4cec16f56ce",
		"time": {
			"$numberLong": "1674753845722"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197976066897",
		"killerId": "76561198968646845",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93679.75,
			"y": 2777.2314,
			"z": 142690.47
		},
		"victimPosition": {
			"x": 92571.914,
			"y": 556.1709,
			"z": 143393.66
		},
		"killerVelocity": {
			"x": -147.35513,
			"y": -171.04474,
			"z": 250.05923
		},
		"victimVelocity": {
			"x": 78.953514,
			"y": -29.471947,
			"z": 46.306828
		}
	}, {
		"_id": {
			"$oid": "63d2b979862f8e159cf002b1"
		},
		"id": "bc73af99-9ae4-4602-a2a3-7e1c04c59203",
		"time": {
			"$numberLong": "1674754425627"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199401194157",
		"killerId": "76561199442123863",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52265.094,
			"y": 278.69666,
			"z": 118700.695
		},
		"victimPosition": {
			"x": 52170.85,
			"y": 279.4575,
			"z": 118654.45
		},
		"killerVelocity": {
			"x": -28.438717,
			"y": 0.00027356297,
			"z": -14.086386
		},
		"victimVelocity": {
			"x": 0.22038746,
			"y": -0.0003266558,
			"z": 0.055340994
		}
	}, {
		"_id": {
			"$oid": "63d2bf09862f8e159cf0031f"
		},
		"id": "b7879558-8789-4060-b290-b18384439074",
		"time": {
			"$numberLong": "1674755849218"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198414004468",
		"killerId": "76561199164592664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58843.99,
			"y": 891.0778,
			"z": 112913.29
		},
		"victimPosition": {
			"x": 59844.246,
			"y": 259.75128,
			"z": 110831.086
		},
		"killerVelocity": {
			"x": 61.53734,
			"y": 4.709208,
			"z": -232.99513
		},
		"victimVelocity": {
			"x": 40.055454,
			"y": -8.886388,
			"z": -81.24551
		}
	}, {
		"_id": {
			"$oid": "63d2bf86862f8e159cf0032c"
		},
		"id": "d45cfda0-b7d8-4f18-820f-1517a0b690f6",
		"time": {
			"$numberLong": "1674755974926"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199009925467",
		"killerId": "76561197963693248",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51613.52,
			"y": 279.42508,
			"z": 118554.67
		},
		"victimPosition": {
			"x": 51740.816,
			"y": 279.4788,
			"z": 118532.37
		},
		"killerVelocity": {
			"x": 8.782341,
			"y": 0.031215347,
			"z": -2.2339003
		},
		"victimVelocity": {
			"x": 10.104923,
			"y": -0.001766786,
			"z": -6.237896
		}
	}, {
		"_id": {
			"$oid": "63d2bfa5862f8e159cf00338"
		},
		"id": "6f332f95-7f8c-40c8-862b-672167f921e6",
		"time": {
			"$numberLong": "1674756005944"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197963693248",
		"killerId": "76561199164592664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50942.73,
			"y": 279.49066,
			"z": 118564.47
		},
		"victimPosition": {
			"x": 53964.97,
			"y": 887.72876,
			"z": 119085.836
		},
		"killerVelocity": {
			"x": 28.677925,
			"y": -0.00063197315,
			"z": 6.883177
		},
		"victimVelocity": {
			"x": 67.44544,
			"y": 79.629486,
			"z": 45.50402
		}
	}, {
		"_id": {
			"$oid": "63d2c0a8862f8e159cf00346"
		},
		"id": "7a23480a-0fd6-46a8-b3cb-66f824bd2d1b",
		"time": {
			"$numberLong": "1674756264387"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199061484296",
		"killerId": "76561199009925467",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58778.145,
			"y": 1610.9772,
			"z": 114638.9
		},
		"victimPosition": {
			"x": 58541.418,
			"y": 814.41846,
			"z": 115085.086
		},
		"killerVelocity": {
			"x": -81.42939,
			"y": -167.52937,
			"z": 10.210449
		},
		"victimVelocity": {
			"x": 148.85753,
			"y": 3.8339705,
			"z": 91.39682
		}
	}, {
		"_id": {
			"$oid": "63d2c0d5862f8e159cf00352"
		},
		"id": "1da4a721-26e0-4d73-96c8-2ca276279ee1",
		"time": {
			"$numberLong": "1674756309415"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198449041970",
		"killerId": "76561199009925467",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60182.12,
			"y": 1102.1683,
			"z": 116169.64
		},
		"victimPosition": {
			"x": 60045.816,
			"y": 1465.1854,
			"z": 114466.25
		},
		"killerVelocity": {
			"x": -60.072495,
			"y": 20.803865,
			"z": -182.027
		},
		"victimVelocity": {
			"x": 233.1163,
			"y": -16.70168,
			"z": -72.50546
		}
	}, {
		"_id": {
			"$oid": "63d30cc8862f8e159cf006a3"
		},
		"id": "fb4bf2c2-9a1f-43e5-8af3-4e5173d2d7de",
		"time": {
			"$numberLong": "1674775752957"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198030792096",
		"killerId": "76561199229546048",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57482.375,
			"y": 838.36194,
			"z": 116667.83
		},
		"victimPosition": {
			"x": 53711.055,
			"y": 278.91867,
			"z": 119104.76
		},
		"killerVelocity": {
			"x": 267.74033,
			"y": 7.458805,
			"z": -135.29149
		},
		"victimVelocity": {
			"x": 46.986946,
			"y": -0.52913344,
			"z": 92.46515
		}
	}, {
		"_id": {
			"$oid": "63d326c8862f8e159cf00879"
		},
		"id": "6234e468-1342-4351-84d4-f0bdca7293da",
		"time": {
			"$numberLong": "1674782408689"
		},
		"victimAircraft": 2,
		"killerAircraft": 4,
		"weapon": 5,
		"victimId": "76561198835990817",
		"killerId": "76561198385157009",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 72706.09,
			"y": 858.94086,
			"z": 88445.7
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -0.77791214,
			"y": -7.2242546,
			"z": -11.48097
		}
	}, {
		"_id": {
			"$oid": "63d32a13862f8e159cf008d0"
		},
		"id": "85bedbf7-32c0-471a-a11b-d8db06a56285",
		"time": {
			"$numberLong": "1674783251697"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197976066897",
		"killerId": "76561198108619440",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 86350.24,
			"y": 1140.3024,
			"z": 118256.32
		},
		"victimPosition": {
			"x": 91157.26,
			"y": 1889.4124,
			"z": 118154.984
		},
		"killerVelocity": {
			"x": 100.18236,
			"y": -15.475733,
			"z": 352.2128
		},
		"victimVelocity": {
			"x": -206.54953,
			"y": -101.016846,
			"z": -148.22139
		}
	}, {
		"_id": {
			"$oid": "63d32a88862f8e159cf008e5"
		},
		"id": "e5304beb-45c9-4386-abca-84d5c40e7b39",
		"time": {
			"$numberLong": "1674783368886"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198962539069",
		"killerId": "76561198835990817",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57186.297,
			"y": 541.74536,
			"z": 117894.45
		},
		"victimPosition": {
			"x": 60670.12,
			"y": 687.708,
			"z": 117145.516
		},
		"killerVelocity": {
			"x": 178.37804,
			"y": -11.049489,
			"z": 3.4309893
		},
		"victimVelocity": {
			"x": -0.45564803,
			"y": 2.725647,
			"z": -175.7184
		}
	}, {
		"_id": {
			"$oid": "63d32b03862f8e159cf008ef"
		},
		"id": "2fd9bfcf-711a-4d61-963e-51a2e0b1ce1d",
		"time": {
			"$numberLong": "1674783491768"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198835990817",
		"killerId": "76561198962539069",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58124.53,
			"y": 961.4644,
			"z": 113494.31
		},
		"victimPosition": {
			"x": 56088.867,
			"y": 256.76425,
			"z": 118276.82
		},
		"killerVelocity": {
			"x": 253.35825,
			"y": 13.866563,
			"z": -189.90913
		},
		"victimVelocity": {
			"x": 44.391434,
			"y": 1.3718764,
			"z": -57.07274
		}
	}, {
		"_id": {
			"$oid": "63d32bec862f8e159cf0090c"
		},
		"id": "88c2d0bb-da5f-4a25-9c6d-17dcba475ab7",
		"time": {
			"$numberLong": "1674783724448"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198962539069",
		"killerId": "76561198835990817",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82831.14,
			"y": 1458.6412,
			"z": 84340.805
		},
		"victimPosition": {
			"x": 93976.32,
			"y": 6014.2007,
			"z": 71955.59
		},
		"killerVelocity": {
			"x": 244.52309,
			"y": -6.873556,
			"z": -274.1385
		},
		"victimVelocity": {
			"x": 87.50987,
			"y": -157.04185,
			"z": 157.24869
		}
	}, {
		"_id": {
			"$oid": "63d36205862f8e159cf00d69"
		},
		"id": "4ca82f62-0008-45f0-b52e-31a5b03fa84e",
		"time": {
			"$numberLong": "1674797573756"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198966625155",
		"killerId": "76561199124687158",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 106489.03,
			"y": 1653.8903,
			"z": 83283.12
		},
		"victimPosition": {
			"x": 109295.19,
			"y": 1764.7563,
			"z": 79319.766
		},
		"killerVelocity": {
			"x": 197.36432,
			"y": 36.183987,
			"z": -123.34299
		},
		"victimVelocity": {
			"x": -107.7531,
			"y": -30.705273,
			"z": 90.55826
		}
	}, {
		"_id": {
			"$oid": "63d394bb862f8e159cf00eb3"
		},
		"id": "3a16ab79-e58d-4e93-ba99-a4f00fd1bbbf",
		"time": {
			"$numberLong": "1674810555627"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198003475602",
		"killerId": "76561198977232814",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82794.49,
			"y": 4523.1387,
			"z": 96754.17
		},
		"victimPosition": {
			"x": 86264.92,
			"y": 3398.4211,
			"z": 96110.68
		},
		"killerVelocity": {
			"x": -295.89856,
			"y": -14.4636965,
			"z": 90.8664
		},
		"victimVelocity": {
			"x": 233.29465,
			"y": -111.625275,
			"z": -7.1024175
		}
	}, {
		"_id": {
			"$oid": "63d39537862f8e159cf00ebd"
		},
		"id": "ae53922b-2c27-4953-912e-646a04c7b114",
		"time": {
			"$numberLong": "1674810679861"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197976066897",
		"killerId": "76561198003475602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55496.348,
			"y": 592.0254,
			"z": 116815.88
		},
		"victimPosition": {
			"x": 60995.758,
			"y": 2814.9033,
			"z": 114690.01
		},
		"killerVelocity": {
			"x": 102.39711,
			"y": -14.507967,
			"z": -200.25552
		},
		"victimVelocity": {
			"x": 200.88048,
			"y": 142.42874,
			"z": -91.07068
		}
	}, {
		"_id": {
			"$oid": "63d3953d862f8e159cf00ebf"
		},
		"id": "54037d13-fdeb-4c8e-ad0c-a5213adaee7c",
		"time": {
			"$numberLong": "1674810685630"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198977232814",
		"killerId": "76561198003475602",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55982.695,
			"y": 656.01733,
			"z": 115546.6
		},
		"victimPosition": {
			"x": 58846.38,
			"y": 1026.344,
			"z": 113473.37
		},
		"killerVelocity": {
			"x": 78.59095,
			"y": 65.43685,
			"z": -221.25554
		},
		"victimVelocity": {
			"x": 70.78616,
			"y": -36.542076,
			"z": 123.65586
		}
	}, {
		"_id": {
			"$oid": "63d3be1c862f8e159cf010c6"
		},
		"id": "6035bf6d-a719-4124-87ec-0b3c73cb6951",
		"time": {
			"$numberLong": "1674821148868"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198075579413",
		"killerId": "76561198021581899",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 47787.426,
			"y": 1619.661,
			"z": 107928.14
		},
		"victimPosition": {
			"x": 52656.14,
			"y": 1536.8551,
			"z": 108302.766
		},
		"killerVelocity": {
			"x": 213.07661,
			"y": -68.892715,
			"z": -226.07635
		},
		"victimVelocity": {
			"x": 213.99316,
			"y": -117.061226,
			"z": -60.981182
		}
	}, {
		"_id": {
			"$oid": "63d3cd48862f8e159cf0113d"
		},
		"id": "3778affa-ee31-4c6b-9a7b-6b1b54db2c92",
		"time": {
			"$numberLong": "1674825032430"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198160266818",
		"killerId": "76561198012332936",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62311.746,
			"y": 2988.8337,
			"z": 125019.89
		},
		"victimPosition": {
			"x": 62089.71,
			"y": 3768.5354,
			"z": 124915.86
		},
		"killerVelocity": {
			"x": -83.55774,
			"y": 238.70328,
			"z": -33.882107
		},
		"victimVelocity": {
			"x": -13.151461,
			"y": 114.878334,
			"z": 202.07181
		}
	}, {
		"_id": {
			"$oid": "63d3f530862f8e159cf01209"
		},
		"id": "bfb3306c-72b9-48d3-b5ee-935fa40acedd",
		"time": {
			"$numberLong": "1674835248593"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199189200645",
		"killerId": "76561198847216192",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100738.95,
			"y": 3209.1042,
			"z": 90807.234
		},
		"victimPosition": {
			"x": 100840.01,
			"y": 4666.8447,
			"z": 91253.36
		},
		"killerVelocity": {
			"x": 3.0601754,
			"y": 175.80309,
			"z": 91.414444
		},
		"victimVelocity": {
			"x": 79.448555,
			"y": 10.038424,
			"z": -382.9594
		}
	}, {
		"_id": {
			"$oid": "63d3fc95862f8e159cf0126c"
		},
		"id": "8b791fd7-0692-4af9-a35b-db57734fd173",
		"time": {
			"$numberLong": "1674837141579"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198998436782",
		"killerId": "76561198866579438",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112293.17,
			"y": 1157.3036,
			"z": 99697.086
		},
		"victimPosition": {
			"x": 111446.16,
			"y": 1101.6738,
			"z": 93246.34
		},
		"killerVelocity": {
			"x": -99.05655,
			"y": -2.9727197,
			"z": 24.822163
		},
		"victimVelocity": {
			"x": 301.15674,
			"y": -13.755172,
			"z": 62.093212
		}
	}, {
		"_id": {
			"$oid": "63d41ebb862f8e159cf0131a"
		},
		"id": "49622c76-b6b6-4a2a-a757-b7be089b252a",
		"time": {
			"$numberLong": "1674845883376"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199333576573",
		"killerId": "76561199057477061",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58708.297,
			"y": 593.463,
			"z": 116539.63
		},
		"victimPosition": {
			"x": 58584.242,
			"y": 708.9111,
			"z": 113977.5
		},
		"killerVelocity": {
			"x": 0.12680261,
			"y": -10.397414,
			"z": -277.62177
		},
		"victimVelocity": {
			"x": -1.3299655,
			"y": 39.377502,
			"z": -296.56372
		}
	}, {
		"_id": {
			"$oid": "63d425d8862f8e159cf01369"
		},
		"id": "41d2e3d9-e18c-4025-8854-6f215e0ca58c",
		"time": {
			"$numberLong": "1674847704658"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199164435473",
		"killerId": "76561198091500306",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79599.99,
			"y": 3928.6653,
			"z": 85331.125
		},
		"victimPosition": {
			"x": 88918.66,
			"y": 3930.3804,
			"z": 76195.71
		},
		"killerVelocity": {
			"x": 285.0541,
			"y": -24.355202,
			"z": -272.07727
		},
		"victimVelocity": {
			"x": -198.62608,
			"y": -50.8163,
			"z": 149.07907
		}
	}, {
		"_id": {
			"$oid": "63d43ea3862f8e159cf014d6"
		},
		"id": "feda49c1-7457-4158-94d1-59665e110c07",
		"time": {
			"$numberLong": "1674854051059"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199092959600",
		"killerId": "76561199447509819",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51491.7,
			"y": 279.39145,
			"z": 118703.6
		},
		"victimPosition": {
			"x": 51451.83,
			"y": 279.4913,
			"z": 118693.61
		},
		"killerVelocity": {
			"x": -1.1579849,
			"y": 0.0038948879,
			"z": -0.28934497
		},
		"victimVelocity": {
			"x": -0.012603335,
			"y": -0.0022401512,
			"z": -0.0032192008
		}
	}, {
		"_id": {
			"$oid": "63d46273862f8e159cf01799"
		},
		"id": "dd68f6dd-543d-4ac2-ae7a-112f7c691bca",
		"time": {
			"$numberLong": "1674863219506"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198809257066",
		"killerId": "76561198414004468",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82185.68,
			"y": 7920.6313,
			"z": 101396.65
		},
		"victimPosition": {
			"x": 95947.43,
			"y": 5609.951,
			"z": 102056.305
		},
		"killerVelocity": {
			"x": 259.06662,
			"y": -49.566906,
			"z": -290.19138
		},
		"victimVelocity": {
			"x": 284.4326,
			"y": 35.49508,
			"z": -177.23407
		}
	}, {
		"_id": {
			"$oid": "63d472c7862f8e159cf018f8"
		},
		"id": "704b915e-4953-4c42-8b86-92e7ae308130",
		"time": {
			"$numberLong": "1674867399649"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197996124008",
		"killerId": "76561198801376013",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54336.54,
			"y": 560.25586,
			"z": 118924.67
		},
		"victimPosition": {
			"x": 55081.08,
			"y": 595.44946,
			"z": 118957.055
		},
		"killerVelocity": {
			"x": 209.10205,
			"y": 3.0691566,
			"z": -18.31145
		},
		"victimVelocity": {
			"x": 227.83124,
			"y": -16.48356,
			"z": -11.379017
		}
	}, {
		"_id": {
			"$oid": "63d472cb862f8e159cf018fa"
		},
		"id": "e556db75-f41f-48a0-93b1-6f76085aa4b8",
		"time": {
			"$numberLong": "1674867403442"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198801376013",
		"killerId": "76561198039688860",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53789.605,
			"y": 543.6526,
			"z": 118767.24
		},
		"victimPosition": {
			"x": 55085.133,
			"y": 552.30786,
			"z": 118853.42
		},
		"killerVelocity": {
			"x": 176.53668,
			"y": 4.727195,
			"z": 18.123901
		},
		"victimVelocity": {
			"x": 203.99254,
			"y": -10.391357,
			"z": -10.7881155
		}
	}, {
		"_id": {
			"$oid": "63d472f0862f8e159cf018fd"
		},
		"id": "e2d8a007-6de3-4fa5-ac32-4abb2875ac6a",
		"time": {
			"$numberLong": "1674867440804"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199439094376",
		"killerId": "76561198039688860",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52351.082,
			"y": 580.8896,
			"z": 118422.6
		},
		"victimPosition": {
			"x": 52196,
			"y": 445.3328,
			"z": 118214.945
		},
		"killerVelocity": {
			"x": -161.27116,
			"y": -1.6126183,
			"z": 19.438953
		},
		"victimVelocity": {
			"x": -103.44324,
			"y": -59.32845,
			"z": -45.456665
		}
	}, {
		"_id": {
			"$oid": "63d4740d862f8e159cf01915"
		},
		"id": "91d3d05d-1d0c-451b-b0ec-0e335767db1c",
		"time": {
			"$numberLong": "1674867725212"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198806156651",
		"killerId": "76561198801376013",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68314.336,
			"y": 1915.4852,
			"z": 111753.02
		},
		"victimPosition": {
			"x": 70026.9,
			"y": 237.31087,
			"z": 112839.555
		},
		"killerVelocity": {
			"x": 184.13663,
			"y": 83.97508,
			"z": -178.07014
		},
		"victimVelocity": {
			"x": 187.382,
			"y": -45.13412,
			"z": 40.50691
		}
	}, {
		"_id": {
			"$oid": "63d47a3a862f8e159cf019a3"
		},
		"id": "a08d64d1-8ccb-474b-832a-e80464373b84",
		"time": {
			"$numberLong": "1674869306274"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198239675794",
		"killerId": "76561198045977300",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65302.684,
			"y": 1353.8416,
			"z": 130420.875
		},
		"victimPosition": {
			"x": 66330.89,
			"y": 1574.038,
			"z": 131663.12
		},
		"killerVelocity": {
			"x": 159.96857,
			"y": 72.40377,
			"z": 222.22166
		},
		"victimVelocity": {
			"x": -189.15712,
			"y": 40.28621,
			"z": 124.785614
		}
	}, {
		"_id": {
			"$oid": "63d4960c862f8e159cf01c4c"
		},
		"id": "d5866b76-fd13-4d1c-9116-1a3ad6085164",
		"time": {
			"$numberLong": "1674876428434"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198315134232",
		"killerId": "76561198151068299",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82347.51,
			"y": 1386.1957,
			"z": 81348.52
		},
		"victimPosition": {
			"x": 81812.45,
			"y": 1801.606,
			"z": 79675.07
		},
		"killerVelocity": {
			"x": -20.097794,
			"y": -58.146782,
			"z": -263.4766
		},
		"victimVelocity": {
			"x": -234.5987,
			"y": -7.116708,
			"z": -7.6149826
		}
	}, {
		"_id": {
			"$oid": "63d496b3862f8e159cf01c62"
		},
		"id": "89934638-f864-46d4-82c4-0a9a30c25890",
		"time": {
			"$numberLong": "1674876595653"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199013154936",
		"killerId": "76561198272386690",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55543.53,
			"y": 532.27313,
			"z": 116593.2
		},
		"victimPosition": {
			"x": 57246.816,
			"y": 902.1667,
			"z": 113543.24
		},
		"killerVelocity": {
			"x": 105.28257,
			"y": -4.897058,
			"z": -143.37378
		},
		"victimVelocity": {
			"x": -101.04972,
			"y": -129.81679,
			"z": -21.34885
		}
	}, {
		"_id": {
			"$oid": "63d4971a862f8e159cf01c6a"
		},
		"id": "5dd911d0-669d-4a84-b450-e9959d815099",
		"time": {
			"$numberLong": "1674876698053"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199076208037",
		"killerId": "76561199013154936",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54127.48,
			"y": 536.5115,
			"z": 118820.64
		},
		"victimPosition": {
			"x": 53918.094,
			"y": 466.55844,
			"z": 118792.58
		},
		"killerVelocity": {
			"x": -137.8794,
			"y": -79.588,
			"z": 15.713215
		},
		"victimVelocity": {
			"x": 33.421104,
			"y": -14.884909,
			"z": -92.639145
		}
	}, {
		"_id": {
			"$oid": "63d497a6862f8e159cf01c7a"
		},
		"id": "2d6b2c21-356c-4fa4-b9f4-0ec88ef83d87",
		"time": {
			"$numberLong": "1674876838680"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199013154936",
		"killerId": "76561199076208037",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 39342.562,
			"y": 1049.174,
			"z": 121982.484
		},
		"victimPosition": {
			"x": 40808.07,
			"y": 1170.6305,
			"z": 121035.695
		},
		"killerVelocity": {
			"x": 159.53842,
			"y": 5.446506,
			"z": -85.46583
		},
		"victimVelocity": {
			"x": -79.50374,
			"y": -51.79254,
			"z": -197.67802
		}
	}, {
		"_id": {
			"$oid": "63d4981d862f8e159cf01c81"
		},
		"id": "2d19181a-5e88-43c4-84f6-a45c48299d79",
		"time": {
			"$numberLong": "1674876957902"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199076208037",
		"killerId": "76561198272386690",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52851.34,
			"y": 528.84174,
			"z": 119790.7
		},
		"victimPosition": {
			"x": 51721.61,
			"y": 984.04083,
			"z": 120262.2
		},
		"killerVelocity": {
			"x": -77.89924,
			"y": 10.596816,
			"z": 39.187206
		},
		"victimVelocity": {
			"x": 20.988234,
			"y": -43.454224,
			"z": -77.0547
		}
	}, {
		"_id": {
			"$oid": "63d49f16862f8e159cf01d1c"
		},
		"id": "1e128e60-3b51-409a-885b-6fe6e3f31d2f",
		"time": {
			"$numberLong": "1674878742090"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199013786044",
		"killerId": "76561199202778301",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64681.71,
			"y": 1302.7721,
			"z": 110320.92
		},
		"victimPosition": {
			"x": 66165.11,
			"y": 2522.4849,
			"z": 108770.336
		},
		"killerVelocity": {
			"x": 249.99184,
			"y": 16.125248,
			"z": -219.35115
		},
		"victimVelocity": {
			"x": -59.37089,
			"y": 189.24817,
			"z": 96.5573
		}
	}, {
		"_id": {
			"$oid": "63d4bc23862f8e159cf01f68"
		},
		"id": "3d716211-112e-4fb5-b440-dbd4adaef996",
		"time": {
			"$numberLong": "1674886179598"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198963195327",
		"killerId": "76561199243357932",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 102462.64,
			"y": 2947.732,
			"z": 56408.92
		},
		"victimPosition": {
			"x": 102852.63,
			"y": 3130.2593,
			"z": 57074.504
		},
		"killerVelocity": {
			"x": 172.77351,
			"y": 64.857735,
			"z": 200.93445
		},
		"victimVelocity": {
			"x": -350.69168,
			"y": -33.02647,
			"z": 153.82884
		}
	}, {
		"_id": {
			"$oid": "63d4c664862f8e159cf0207c"
		},
		"id": "a79f7445-7bed-4878-95bb-8cf1de811615",
		"time": {
			"$numberLong": "1674888804975"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198093124125",
		"killerId": "76561199243357932",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108300.41,
			"y": 1116.9226,
			"z": 89365.34
		},
		"victimPosition": {
			"x": 100696.71,
			"y": 622.12616,
			"z": 84892.945
		},
		"killerVelocity": {
			"x": 296.1656,
			"y": 14.350378,
			"z": -38.67443
		},
		"victimVelocity": {
			"x": 7.460721,
			"y": -39.55622,
			"z": 14.846826
		}
	}, {
		"_id": {
			"$oid": "63d4ca76862f8e159cf020f4"
		},
		"id": "28678117-4f97-4697-99d6-75812f0188d4",
		"time": {
			"$numberLong": "1674889846869"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199206110480",
		"killerId": "76561198088270455",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87049.08,
			"y": 5328.303,
			"z": 90095.766
		},
		"victimPosition": {
			"x": 75221.33,
			"y": 6693.5557,
			"z": 102894.16
		},
		"killerVelocity": {
			"x": 328.97363,
			"y": -66.25827,
			"z": 212.57849
		},
		"victimVelocity": {
			"x": 283.03534,
			"y": -137.32745,
			"z": -230.81526
		}
	}, {
		"_id": {
			"$oid": "63d51ccb862f8e159cf023be"
		},
		"id": "8691efd3-e94a-41da-9c69-9c5beff0f8bd",
		"time": {
			"$numberLong": "1674910923232"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198166803077",
		"killerId": "76561198025761476",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 122019.47,
			"y": 6856.8706,
			"z": 74920.13
		},
		"victimPosition": {
			"x": 123452.47,
			"y": 1794.6965,
			"z": 74561.63
		},
		"killerVelocity": {
			"x": -356.94147,
			"y": -339.47342,
			"z": 34.452213
		},
		"victimVelocity": {
			"x": 126.58401,
			"y": 159.93628,
			"z": 97.691895
		}
	}, {
		"_id": {
			"$oid": "63d5403b862f8e159cf0240f"
		},
		"id": "79ee8be1-539d-46f9-9080-25e14a4ff0b0",
		"time": {
			"$numberLong": "1674919995884"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198179625150",
		"killerId": "76561199125142058",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93588.42,
			"y": 4840.134,
			"z": 90373.78
		},
		"victimPosition": {
			"x": 100386.39,
			"y": 4737.1167,
			"z": 89418.875
		},
		"killerVelocity": {
			"x": 397.30417,
			"y": -13.92926,
			"z": -53.296562
		},
		"victimVelocity": {
			"x": -234.15186,
			"y": 24.231737,
			"z": 66.92079
		}
	}, {
		"_id": {
			"$oid": "63d54323862f8e159cf02443"
		},
		"id": "d88f680c-4ec8-4819-b27d-3e94fb00490a",
		"time": {
			"$numberLong": "1674920739666"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198159886826",
		"killerId": "76561197986485136",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56726.977,
			"y": 2715.37,
			"z": 114839.336
		},
		"victimPosition": {
			"x": 60317.168,
			"y": 2291.8735,
			"z": 114384.53
		},
		"killerVelocity": {
			"x": 235.91078,
			"y": -13.072148,
			"z": -51.360233
		},
		"victimVelocity": {
			"x": -98.89249,
			"y": -67.95901,
			"z": 156.5017
		}
	}, {
		"_id": {
			"$oid": "63d54512862f8e159cf0246f"
		},
		"id": "593c37a7-f86c-4369-b1d6-fac4bd5018a2",
		"time": {
			"$numberLong": "1674921234843"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197986485136",
		"killerId": "76561199467138239",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93677.83,
			"y": 4847.139,
			"z": 90712.53
		},
		"victimPosition": {
			"x": 97602.05,
			"y": 3884.282,
			"z": 92101.96
		},
		"killerVelocity": {
			"x": 272.86182,
			"y": -96.826935,
			"z": 8.31805
		},
		"victimVelocity": {
			"x": -118.57276,
			"y": 23.253147,
			"z": 271.71753
		}
	}, {
		"_id": {
			"$oid": "63d54681862f8e159cf02488"
		},
		"id": "183c8979-682d-4f60-bb2d-1d7c884eb7d4",
		"time": {
			"$numberLong": "1674921601084"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198179625150",
		"killerId": "76561199467138239",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95261.92,
			"y": 10937.492,
			"z": 104534.05
		},
		"victimPosition": {
			"x": 98258.22,
			"y": 12506.385,
			"z": 110930.63
		},
		"killerVelocity": {
			"x": 191.62234,
			"y": 60.619976,
			"z": 315.62018
		},
		"victimVelocity": {
			"x": -131.45073,
			"y": -2.6423252,
			"z": 276.48935
		}
	}, {
		"_id": {
			"$oid": "63d5506b862f8e159cf0253b"
		},
		"id": "c6dc7ec4-6bb4-44d9-ad51-5b32366d5bd7",
		"time": {
			"$numberLong": "1674924139160"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198084229001",
		"killerId": "76561199098452448",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55790.47,
			"y": 758.86066,
			"z": 118777.6
		},
		"victimPosition": {
			"x": 57817.887,
			"y": 1560.1149,
			"z": 119833.016
		},
		"killerVelocity": {
			"x": 256.7835,
			"y": -8.359706,
			"z": 11.919293
		},
		"victimVelocity": {
			"x": -64.720665,
			"y": -17.204422,
			"z": 89.23618
		}
	}, {
		"_id": {
			"$oid": "63d569de862f8e159cf0265e"
		},
		"id": "5ec343e9-b313-4aea-b66d-2973fecc30d5",
		"time": {
			"$numberLong": "1674930654492"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198199553401",
		"killerId": "76561199125142058",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76817.914,
			"y": 1157.537,
			"z": 100799.336
		},
		"victimPosition": {
			"x": 80303.21,
			"y": 1082.4818,
			"z": 94975.1
		},
		"killerVelocity": {
			"x": 183.44145,
			"y": 2.2851765,
			"z": -338.0603
		},
		"victimVelocity": {
			"x": -192.86777,
			"y": -19.730448,
			"z": -47.79746
		}
	}, {
		"_id": {
			"$oid": "63d57b4a862f8e159cf027d2"
		},
		"id": "caf956d2-64ec-4502-a861-e4553f718603",
		"time": {
			"$numberLong": "1674935114179"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198797659825",
		"killerId": "76561199429531176",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81543.52,
			"y": 723.2774,
			"z": 94299.03
		},
		"victimPosition": {
			"x": 76435.25,
			"y": 504.05627,
			"z": 93867.02
		},
		"killerVelocity": {
			"x": 183.30008,
			"y": 52.074543,
			"z": -136.47342
		},
		"victimVelocity": {
			"x": -80.54276,
			"y": -139.99347,
			"z": 151.17055
		}
	}, {
		"_id": {
			"$oid": "63d58011862f8e159cf02855"
		},
		"id": "d2f20dae-4a96-495c-80bd-b8c43576cb6d",
		"time": {
			"$numberLong": "1674936337260"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198998534580",
		"killerId": "76561198986587205",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85607.45,
			"y": 1679.9954,
			"z": 97979.08
		},
		"victimPosition": {
			"x": 93454.3,
			"y": 2671.9966,
			"z": 92173.445
		},
		"killerVelocity": {
			"x": 358.6868,
			"y": -33.612984,
			"z": -89.78352
		},
		"victimVelocity": {
			"x": -72.128784,
			"y": -91.84687,
			"z": 36.23736
		}
	}, {
		"_id": {
			"$oid": "63d58678862f8e159cf02908"
		},
		"id": "e8ce2bce-a435-4e1c-bf25-2cf143c79a82",
		"time": {
			"$numberLong": "1674937976881"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198797659825",
		"killerId": "76561198449041970",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79077.5,
			"y": 1193.6559,
			"z": 108460.99
		},
		"victimPosition": {
			"x": 81330.23,
			"y": 2009.345,
			"z": 103724.445
		},
		"killerVelocity": {
			"x": 136.28922,
			"y": 48.812717,
			"z": -210.05362
		},
		"victimVelocity": {
			"x": -136.33014,
			"y": -82.566284,
			"z": -54.236103
		}
	}, {
		"_id": {
			"$oid": "63d588ac862f8e159cf02930"
		},
		"id": "79c298a8-ec0e-4c70-8bc1-8fe5dc568304",
		"time": {
			"$numberLong": "1674938540850"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198854890090",
		"killerId": "76561199098361850",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62017.59,
			"y": 1462.2795,
			"z": 115946.58
		},
		"victimPosition": {
			"x": 63004.016,
			"y": 1400.8933,
			"z": 115241.586
		},
		"killerVelocity": {
			"x": 214.18167,
			"y": 17.349096,
			"z": -167.39777
		},
		"victimVelocity": {
			"x": 231.45007,
			"y": -122.955635,
			"z": -182.44405
		}
	}, {
		"_id": {
			"$oid": "63d58913862f8e159cf02942"
		},
		"id": "2369983e-6cfb-4ab3-ab46-e1c6c8eb2965",
		"time": {
			"$numberLong": "1674938643924"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198854890090",
		"killerId": "76561199131543290",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55335.594,
			"y": 701.56335,
			"z": 116224.92
		},
		"victimPosition": {
			"x": 55892.2,
			"y": 807.48486,
			"z": 115726.414
		},
		"killerVelocity": {
			"x": 156.46889,
			"y": 22.547651,
			"z": -141.63222
		},
		"victimVelocity": {
			"x": 177.3713,
			"y": 15.3547125,
			"z": -150.37341
		}
	}, {
		"_id": {
			"$oid": "63d58c11862f8e159cf0298b"
		},
		"id": "bdb11a2a-d5c6-41c0-9a34-d354b73359b5",
		"time": {
			"$numberLong": "1674939409397"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199131543290",
		"killerId": "76561199231853481",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92549.02,
			"y": 2497.8655,
			"z": 62914.637
		},
		"victimPosition": {
			"x": 93522.24,
			"y": 2923.6028,
			"z": 62853.152
		},
		"killerVelocity": {
			"x": 304.40802,
			"y": 135.56932,
			"z": -62.488426
		},
		"victimVelocity": {
			"x": 111.29995,
			"y": 58.67954,
			"z": 189.27036
		}
	}, {
		"_id": {
			"$oid": "63d5956c862f8e159cf02a42"
		},
		"id": "3964f752-a6de-4da9-8266-4216feb2365a",
		"time": {
			"$numberLong": "1674941804541"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198817444062",
		"killerId": "76561198166185188",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67609.06,
			"y": 4389.35,
			"z": 110863.49
		},
		"victimPosition": {
			"x": 67901.07,
			"y": 4471.69,
			"z": 110973.84
		},
		"killerVelocity": {
			"x": 150.94727,
			"y": 36.964302,
			"z": 47.165047
		},
		"victimVelocity": {
			"x": 166.6479,
			"y": 46.83302,
			"z": 58.243755
		}
	}, {
		"_id": {
			"$oid": "63d5976b862f8e159cf02a5f"
		},
		"id": "ec1ee3d8-5ee2-44be-ab60-7941e63667ac",
		"time": {
			"$numberLong": "1674942315195"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198874559423",
		"killerId": "76561198166185188",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75927.695,
			"y": 3507.0234,
			"z": 90922.555
		},
		"victimPosition": {
			"x": 77675.85,
			"y": 3086.3418,
			"z": 88123.5
		},
		"killerVelocity": {
			"x": 210.61285,
			"y": -68.84394,
			"z": -299.63553
		},
		"victimVelocity": {
			"x": 97.193085,
			"y": 29.329607,
			"z": -232.74918
		}
	}, {
		"_id": {
			"$oid": "63d5c221862f8e159cf02e4c"
		},
		"id": "a042294d-bcef-42ca-8e0e-a9cbdf402ed8",
		"time": {
			"$numberLong": "1674953249231"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198018674524",
		"killerId": "76561198993758509",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51638.79,
			"y": 278.6833,
			"z": 118740.195
		},
		"victimPosition": {
			"x": 51537.383,
			"y": 279.47195,
			"z": 118720.664
		},
		"killerVelocity": {
			"x": -21.620983,
			"y": -0.0067550614,
			"z": -4.082798
		},
		"victimVelocity": {
			"x": -7.983924,
			"y": 0.099145226,
			"z": -4.5654626
		}
	}, {
		"_id": {
			"$oid": "63d5c7a4862f8e159cf02ede"
		},
		"id": "941a59c9-8770-43c7-a964-f8c206e08c3e",
		"time": {
			"$numberLong": "1674954660008"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198327746426",
		"killerId": "76561198129307330",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107752.69,
			"y": 1950.3442,
			"z": 47270.06
		},
		"victimPosition": {
			"x": 107173.234,
			"y": 1820.7604,
			"z": 45898.727
		},
		"killerVelocity": {
			"x": -46.990795,
			"y": -40.888325,
			"z": -261.67242
		},
		"victimVelocity": {
			"x": -251.08931,
			"y": -44.72906,
			"z": 76.089096
		}
	}, {
		"_id": {
			"$oid": "63d5ed42862f8e159cf03153"
		},
		"id": "28359c86-6f94-48dc-b2b7-9795364d91ed",
		"time": {
			"$numberLong": "1674964290805"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198873733478",
		"killerId": "76561197997932245",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66090.766,
			"y": 2664.1157,
			"z": 109769.77
		},
		"victimPosition": {
			"x": 69643.31,
			"y": 6183.8374,
			"z": 104806.59
		},
		"killerVelocity": {
			"x": 235.72287,
			"y": 76.868355,
			"z": -252.70476
		},
		"victimVelocity": {
			"x": 262.8416,
			"y": -46.29965,
			"z": -176.68283
		}
	}, {
		"_id": {
			"$oid": "63d5fa10862f8e159cf03229"
		},
		"id": "1cf10084-1bbd-4a7b-acd7-1895d24d8977",
		"time": {
			"$numberLong": "1674967568278"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198873733478",
		"killerId": "76561199232532146",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83289.49,
			"y": 3055.7583,
			"z": 80817.26
		},
		"victimPosition": {
			"x": 77734.664,
			"y": 2317.1208,
			"z": 78720.336
		},
		"killerVelocity": {
			"x": -402.13577,
			"y": -25.07045,
			"z": -50.534004
		},
		"victimVelocity": {
			"x": 99.217064,
			"y": 39.34186,
			"z": -114.660706
		}
	}, {
		"_id": {
			"$oid": "63d61ba3862f8e159cf03472"
		},
		"id": "cf5beeab-3a5b-4e0a-a0ab-c34cedf49888",
		"time": {
			"$numberLong": "1674976163941"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199214025382",
		"killerId": "76561198004646970",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67983.29,
			"y": 1467.7642,
			"z": 65227.78
		},
		"victimPosition": {
			"x": 78131.71,
			"y": 2252.9497,
			"z": 69256.21
		},
		"killerVelocity": {
			"x": -318.78174,
			"y": 65.32938,
			"z": 87.310974
		},
		"victimVelocity": {
			"x": 33.42292,
			"y": 6.358368,
			"z": 7.850242
		}
	}, {
		"_id": {
			"$oid": "63d6705a862f8e159cf03765"
		},
		"id": "7fc38834-7b69-4e85-bbfd-7d69b1011161",
		"time": {
			"$numberLong": "1674997850102"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199015587901",
		"killerId": "76561198393149752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71096.766,
			"y": 2596.1003,
			"z": 112792.12
		},
		"victimPosition": {
			"x": 73340.92,
			"y": 2747.7485,
			"z": 113674.99
		},
		"killerVelocity": {
			"x": 184.09969,
			"y": 50.7302,
			"z": 124.51488
		},
		"victimVelocity": {
			"x": -260.41653,
			"y": -150.9893,
			"z": -110.83712
		}
	}, {
		"_id": {
			"$oid": "63d6705d862f8e159cf03767"
		},
		"id": "e2be52fd-5170-41e7-a63f-828608dfc11e",
		"time": {
			"$numberLong": "1674997853190"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198393149752",
		"killerId": "76561199015587901",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72622.48,
			"y": 2333.5767,
			"z": 113293.195
		},
		"victimPosition": {
			"x": 71514.44,
			"y": 2636.4492,
			"z": 113270.484
		},
		"killerVelocity": {
			"x": -205.05605,
			"y": -128.56586,
			"z": -103.33838
		},
		"victimVelocity": {
			"x": 68.064606,
			"y": -47.24484,
			"z": 172.0711
		}
	}, {
		"_id": {
			"$oid": "63d673eb862f8e159cf03799"
		},
		"id": "3fa61f50-1f32-4edc-b8c5-4271c14b6e97",
		"time": {
			"$numberLong": "1674998763818"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199275633587",
		"killerId": "76561198393149752",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70056.39,
			"y": 3593.1135,
			"z": 88307.23
		},
		"victimPosition": {
			"x": 69953.67,
			"y": 4795.46,
			"z": 90634.89
		},
		"killerVelocity": {
			"x": 34.224228,
			"y": 136.8359,
			"z": 228.1581
		},
		"victimVelocity": {
			"x": 142.16917,
			"y": -9.483307,
			"z": -59.628513
		}
	}, {
		"_id": {
			"$oid": "63d68772862f8e159cf03866"
		},
		"id": "9a3d0563-124f-4ee9-bb2e-22f63c805205",
		"time": {
			"$numberLong": "1675003762933"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198318317977",
		"killerId": "76561198205705021",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52879.23,
			"y": 279.3951,
			"z": 118959.77
		},
		"victimPosition": {
			"x": 52792.273,
			"y": 278.69684,
			"z": 119002.586
		},
		"killerVelocity": {
			"x": -12.7254925,
			"y": 0.12872958,
			"z": 7.2915406
		},
		"victimVelocity": {
			"x": -2.4588387,
			"y": 0.0028907284,
			"z": 4.3510203
		}
	}, {
		"_id": {
			"$oid": "63d687ab862f8e159cf0386c"
		},
		"id": "a8eec5c6-d0eb-4401-b7c4-4f73ab3a11b6",
		"time": {
			"$numberLong": "1675003819625"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198205705021",
		"killerId": "76561198318317977",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52499.36,
			"y": 278.69675,
			"z": 119061.59
		},
		"victimPosition": {
			"x": 52583.402,
			"y": 279.39133,
			"z": 119016.67
		},
		"killerVelocity": {
			"x": 1.4774433,
			"y": 0.007635668,
			"z": -0.8534033
		},
		"victimVelocity": {
			"x": -14.452841,
			"y": 0.039573766,
			"z": 8.493401
		}
	}, {
		"_id": {
			"$oid": "63d68820862f8e159cf03873"
		},
		"id": "db507e91-ea39-47ef-85f1-d4b5b5ad5672",
		"time": {
			"$numberLong": "1675003936033"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198322992603",
		"killerId": "76561198205705021",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51157.12,
			"y": 279.3826,
			"z": 118417.43
		},
		"victimPosition": {
			"x": 51170.73,
			"y": 279.46707,
			"z": 118420.67
		},
		"killerVelocity": {
			"x": 0.0017876594,
			"y": 0.00037852675,
			"z": 0.0003937743
		},
		"victimVelocity": {
			"x": 0.0017342898,
			"y": 0.00019019842,
			"z": 0.001367561
		}
	}, {
		"_id": {
			"$oid": "63d68be9862f8e159cf038be"
		},
		"id": "41562767-9a6c-465c-83e7-71e28c9a4f01",
		"time": {
			"$numberLong": "1675004905594"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199131237024",
		"killerId": "76561198287340101",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100898.05,
			"y": 2468.375,
			"z": 61725.336
		},
		"victimPosition": {
			"x": 101574.19,
			"y": 2616.6853,
			"z": 60674.387
		},
		"killerVelocity": {
			"x": 351.07547,
			"y": -65.30305,
			"z": 61.95798
		},
		"victimVelocity": {
			"x": 146.6822,
			"y": -51.328175,
			"z": -45.560413
		}
	}, {
		"_id": {
			"$oid": "63d68fc1862f8e159cf038fa"
		},
		"id": "e93827ba-366d-4fe7-9784-9bff98f35cc9",
		"time": {
			"$numberLong": "1675005889664"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199131237024",
		"killerId": "76561198137339095",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66459.1,
			"y": 2382.307,
			"z": 84353.82
		},
		"victimPosition": {
			"x": 67005.04,
			"y": 2529.5476,
			"z": 82992.64
		},
		"killerVelocity": {
			"x": 93.78748,
			"y": 23.71938,
			"z": -203.59651
		},
		"victimVelocity": {
			"x": 139.87828,
			"y": 0.18837264,
			"z": -298.9109
		}
	}, {
		"_id": {
			"$oid": "63d694a5862f8e159cf0396a"
		},
		"id": "afec61c2-20b0-40ef-b089-d477c2ca63a7",
		"time": {
			"$numberLong": "1675007141395"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199131237024",
		"killerId": "76561199165298080",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59137.09,
			"y": 1246.7771,
			"z": 117755.84
		},
		"victimPosition": {
			"x": 55538.176,
			"y": 377.91022,
			"z": 119214.38
		},
		"killerVelocity": {
			"x": -317.4897,
			"y": -66.69452,
			"z": 131.51945
		},
		"victimVelocity": {
			"x": 124.230965,
			"y": 5.8357124,
			"z": -134.35811
		}
	}, {
		"_id": {
			"$oid": "63d69507862f8e159cf03978"
		},
		"id": "d626a4c9-b10f-4e6d-9075-e801a5167e4d",
		"time": {
			"$numberLong": "1675007239903"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199131237024",
		"killerId": "76561198816468511",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62841.34,
			"y": 1306.8448,
			"z": 113070.336
		},
		"victimPosition": {
			"x": 63160.87,
			"y": 1235.8712,
			"z": 112984.76
		},
		"killerVelocity": {
			"x": 290.5852,
			"y": -59.450077,
			"z": -111.74771
		},
		"victimVelocity": {
			"x": 299.83554,
			"y": -27.600105,
			"z": -56.417454
		}
	}, {
		"_id": {
			"$oid": "63d69512862f8e159cf0397c"
		},
		"id": "7d7c6439-8431-4816-ba95-028c91ec8622",
		"time": {
			"$numberLong": "1675007250787"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198816468511",
		"killerId": "76561199165298080",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63358.484,
			"y": 2393.9707,
			"z": 116154.04
		},
		"victimPosition": {
			"x": 66326.61,
			"y": 1296.2612,
			"z": 112783.62
		},
		"killerVelocity": {
			"x": 220.13342,
			"y": -171.15892,
			"z": -240.37723
		},
		"victimVelocity": {
			"x": 331.5335,
			"y": -0.12079144,
			"z": 21.826466
		}
	}, {
		"_id": {
			"$oid": "63d69625862f8e159cf0399b"
		},
		"id": "5364b7df-1d0a-44da-96fe-b3e26d6aad7b",
		"time": {
			"$numberLong": "1675007525928"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198892427649",
		"killerId": "76561198816468511",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60796.15,
			"y": 1727.4761,
			"z": 114680.46
		},
		"victimPosition": {
			"x": 64526.348,
			"y": 2349.123,
			"z": 110671.086
		},
		"killerVelocity": {
			"x": 198.65965,
			"y": -12.537277,
			"z": -203.20782
		},
		"victimVelocity": {
			"x": -255.7555,
			"y": -73.693306,
			"z": -149.80022
		}
	}, {
		"_id": {
			"$oid": "63d6a405862f8e159cf03ae2"
		},
		"id": "e386a034-d0d1-43f7-bcb4-c62e133d5e3b",
		"time": {
			"$numberLong": "1675011077184"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198874559423",
		"killerId": "76561199401194157",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56366.605,
			"y": 487.11807,
			"z": 116922.07
		},
		"victimPosition": {
			"x": 57779.656,
			"y": 920.14124,
			"z": 114990.57
		},
		"killerVelocity": {
			"x": 111.88349,
			"y": 9.077177,
			"z": -158.30196
		},
		"victimVelocity": {
			"x": -135.30519,
			"y": 26.73341,
			"z": 296.74954
		}
	}, {
		"_id": {
			"$oid": "63d6aea9862f8e159cf03bbc"
		},
		"id": "e6362e5f-267a-4c77-a26e-e442af220930",
		"time": {
			"$numberLong": "1675013801199"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198863045414",
		"killerId": "76561198071134596",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51532.035,
			"y": 279.47623,
			"z": 118716.875
		},
		"victimPosition": {
			"x": 51516.684,
			"y": 281.0985,
			"z": 118713.22
		},
		"killerVelocity": {
			"x": -0.00050198846,
			"y": 0.00029197335,
			"z": -0.0002975086
		},
		"victimVelocity": {
			"x": 94.31508,
			"y": 3.0690205,
			"z": 24.55538
		}
	}, {
		"_id": {
			"$oid": "63d6b2e7862f8e159cf03c20"
		},
		"id": "64d06a28-fa94-4b40-ba1d-c9ae9a706649",
		"time": {
			"$numberLong": "1675014887749"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198272370133",
		"killerId": "76561198322992603",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92958.61,
			"y": 1806.4302,
			"z": 77915.86
		},
		"victimPosition": {
			"x": 92904.1,
			"y": 1566.6754,
			"z": 75245.99
		},
		"killerVelocity": {
			"x": -112.87834,
			"y": -59.710342,
			"z": -365.32263
		},
		"victimVelocity": {
			"x": -28.045095,
			"y": -59.293915,
			"z": -229.47536
		}
	}, {
		"_id": {
			"$oid": "63d6b884862f8e159cf03c86"
		},
		"id": "c66f63f1-2a61-4666-a9e7-4cc3e86b5ac6",
		"time": {
			"$numberLong": "1675016324106"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198122505723",
		"killerId": "76561199155288544",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88663.055,
			"y": 1010.17975,
			"z": 87663
		},
		"victimPosition": {
			"x": 89915.61,
			"y": 1780.071,
			"z": 85147.055
		},
		"killerVelocity": {
			"x": 153.46243,
			"y": -5.722822,
			"z": -273.057
		},
		"victimVelocity": {
			"x": 148.69603,
			"y": 32.84958,
			"z": 53.05121
		}
	}, {
		"_id": {
			"$oid": "63d6c885862f8e159cf03dd7"
		},
		"id": "e074b6a4-1224-4f89-bb1e-a7fba2a2af0f",
		"time": {
			"$numberLong": "1675020421709"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197994876868",
		"killerId": "76561198322992603",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 106959.02,
			"y": 3003.6152,
			"z": 95439.75
		},
		"victimPosition": {
			"x": 110527.97,
			"y": 3815.7693,
			"z": 95714.59
		},
		"killerVelocity": {
			"x": 376.0019,
			"y": 92.64539,
			"z": 40.294132
		},
		"victimVelocity": {
			"x": -137.83331,
			"y": 20.87191,
			"z": -168.02937
		}
	}, {
		"_id": {
			"$oid": "63d6e2b6862f8e159cf04078"
		},
		"id": "d477b04c-c4a9-453b-94ca-2a68b9f76b07",
		"time": {
			"$numberLong": "1675027126282"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199016427002",
		"killerId": "76561198086961565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 130563.14,
			"y": 2425.6558,
			"z": 57093.227
		},
		"victimPosition": {
			"x": 126181.12,
			"y": 1715.3113,
			"z": 56833.11
		},
		"killerVelocity": {
			"x": 113.17265,
			"y": -35.829124,
			"z": -321.7973
		},
		"victimVelocity": {
			"x": -1.5613618,
			"y": -31.602163,
			"z": 42.303696
		}
	}, {
		"_id": {
			"$oid": "63d70a38862f8e159cf04312"
		},
		"id": "b0d265b5-2138-4d66-bee2-bb2ea8aacf94",
		"time": {
			"$numberLong": "1675037240053"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198179944875",
		"killerId": "76561198110109999",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81766.336,
			"y": 9006.152,
			"z": 103867.74
		},
		"victimPosition": {
			"x": 91892.48,
			"y": 1090.218,
			"z": 100731.51
		},
		"killerVelocity": {
			"x": 272.47025,
			"y": 3.0663865,
			"z": -169.02275
		},
		"victimVelocity": {
			"x": -102.11018,
			"y": 4.134399,
			"z": 47.415386
		}
	}, {
		"_id": {
			"$oid": "63d70d0a862f8e159cf0435c"
		},
		"id": "1913cf6d-f179-476a-b9a4-0f21a0bf1351",
		"time": {
			"$numberLong": "1675037962713"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197985157646",
		"killerId": "76561199243239123",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50758.695,
			"y": 279.40414,
			"z": 118574.8
		},
		"victimPosition": {
			"x": 53579.285,
			"y": 278.7266,
			"z": 118839.48
		},
		"killerVelocity": {
			"x": 3.5268857,
			"y": 0.016313873,
			"z": -12.555092
		},
		"victimVelocity": {
			"x": -78.126434,
			"y": -24.47736,
			"z": -41.747433
		}
	}, {
		"_id": {
			"$oid": "63d725f3862f8e159cf04534"
		},
		"id": "18f832ca-7302-4f5c-8efa-ced1b2cffa5c",
		"time": {
			"$numberLong": "1675044339537"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198298699368",
		"killerId": "76561199175771249",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91433.016,
			"y": 2627.2637,
			"z": 69856.35
		},
		"victimPosition": {
			"x": 94588.55,
			"y": 2836.275,
			"z": 66418.086
		},
		"killerVelocity": {
			"x": 262.8598,
			"y": -0.6202496,
			"z": -240.04129
		},
		"victimVelocity": {
			"x": 314.91476,
			"y": -217.22543,
			"z": -12.660653
		}
	}, {
		"_id": {
			"$oid": "63d72688862f8e159cf0453e"
		},
		"id": "445e582b-4c10-42e3-8317-1316e519626c",
		"time": {
			"$numberLong": "1675044488677"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199215092202",
		"killerId": "76561199133371466",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50962.258,
			"y": 279.48895,
			"z": 118703.18
		},
		"victimPosition": {
			"x": 100830.89,
			"y": 6982.583,
			"z": 86959.7
		},
		"killerVelocity": {
			"x": -0.00006090819,
			"y": -0.000009544194,
			"z": 0.000042420157
		},
		"victimVelocity": {
			"x": -160.14044,
			"y": -178.19899,
			"z": -96.06231
		}
	}, {
		"_id": {
			"$oid": "63d728c8862f8e159cf04579"
		},
		"id": "682471af-409b-442e-98a6-dac317122d05",
		"time": {
			"$numberLong": "1675045064604"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198086600808",
		"killerId": "76561198175127865",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67386.55,
			"y": 1454.5557,
			"z": 113654.836
		},
		"victimPosition": {
			"x": 70945.78,
			"y": 598.73737,
			"z": 114056.61
		},
		"killerVelocity": {
			"x": 164.76726,
			"y": -123.729866,
			"z": -137.00795
		},
		"victimVelocity": {
			"x": -295.89648,
			"y": -97.97479,
			"z": -220.99695
		}
	}, {
		"_id": {
			"$oid": "63d72a8d862f8e159cf0459d"
		},
		"id": "729c1286-0acb-490f-bd60-edc4b90b84f3",
		"time": {
			"$numberLong": "1675045517937"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086600808",
		"killerId": "76561198875582392",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 118248.71,
			"y": 5030.3086,
			"z": 79375.77
		},
		"victimPosition": {
			"x": 126566.91,
			"y": 1980.5553,
			"z": 79171.445
		},
		"killerVelocity": {
			"x": 386.85056,
			"y": -176.01924,
			"z": 170.65865
		},
		"victimVelocity": {
			"x": 155.91127,
			"y": -12.592449,
			"z": -14.520165
		}
	}, {
		"_id": {
			"$oid": "63d730a6862f8e159cf04619"
		},
		"id": "f3cf5bf7-df08-4185-8b75-907083b215e3",
		"time": {
			"$numberLong": "1675047078618"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198875582392",
		"killerId": "76561199232600099",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59576.42,
			"y": 1009.3729,
			"z": 114801.19
		},
		"victimPosition": {
			"x": 58706.63,
			"y": 656.106,
			"z": 116572.234
		},
		"killerVelocity": {
			"x": -351.46365,
			"y": 3.5743785,
			"z": 45.686
		},
		"victimVelocity": {
			"x": 279.37833,
			"y": 12.105207,
			"z": -150.70123
		}
	}, {
		"_id": {
			"$oid": "63d74766862f8e159cf047d3"
		},
		"id": "5cc807c1-a658-4f50-9b0e-773bcd80d1de",
		"time": {
			"$numberLong": "1675052902904"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199446899060",
		"killerId": "76561199233407202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53215.445,
			"y": 612.8859,
			"z": 116583.9
		},
		"victimPosition": {
			"x": 53211.492,
			"y": 617.5616,
			"z": 116578.375
		},
		"killerVelocity": {
			"x": 54.731503,
			"y": -14.602453,
			"z": 187.45216
		},
		"victimVelocity": {
			"x": 42.4726,
			"y": -12.778388,
			"z": 91.55272
		}
	}, {
		"_id": {
			"$oid": "63d747d1862f8e159cf047e1"
		},
		"id": "5afce4bf-3714-4531-a567-0655ac2f9866",
		"time": {
			"$numberLong": "1675053009763"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199123067106",
		"killerId": "76561199233407202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51463.29,
			"y": 344.53912,
			"z": 118510.22
		},
		"victimPosition": {
			"x": 51438.3,
			"y": 279.4182,
			"z": 118704.984
		},
		"killerVelocity": {
			"x": -14.9833,
			"y": -64.31141,
			"z": 137.12912
		},
		"victimVelocity": {
			"x": -6.3401637,
			"y": 0.10384994,
			"z": 1.0555879
		}
	}, {
		"_id": {
			"$oid": "63d74a43862f8e159cf0480d"
		},
		"id": "5b6b79ee-5386-49ed-a2e5-12be369354b5",
		"time": {
			"$numberLong": "1675053635823"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197994876868",
		"killerId": "76561199233407202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 47557.17,
			"y": 1328.3331,
			"z": 117514.99
		},
		"victimPosition": {
			"x": 51115.367,
			"y": 279.49716,
			"z": 118413.43
		},
		"killerVelocity": {
			"x": -214.27235,
			"y": -1.1640605,
			"z": -44.00943
		},
		"victimVelocity": {
			"x": 0.23685183,
			"y": 0.0020131618,
			"z": -0.14393605
		}
	}, {
		"_id": {
			"$oid": "63d74c97862f8e159cf04829"
		},
		"id": "e2fe871d-4eaf-4af3-8057-d5e951839e70",
		"time": {
			"$numberLong": "1675054231639"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199233407202",
		"killerId": "76561199095113449",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65554.18,
			"y": 7050.6475,
			"z": 109184.336
		},
		"victimPosition": {
			"x": 69092.32,
			"y": 1676.0107,
			"z": 107795.45
		},
		"killerVelocity": {
			"x": 310.84393,
			"y": -13.015339,
			"z": -153.82954
		},
		"victimVelocity": {
			"x": 38.90118,
			"y": -116.73003,
			"z": 133.10141
		}
	}, {
		"_id": {
			"$oid": "63d74e3e862f8e159cf04853"
		},
		"id": "f4e87bff-f675-49ca-b6eb-75b75d1df99f",
		"time": {
			"$numberLong": "1675054654730"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199233407202",
		"killerId": "76561199095113449",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52181.902,
			"y": 278.68234,
			"z": 118655.25
		},
		"victimPosition": {
			"x": 52215.36,
			"y": 279.49542,
			"z": 118668.11
		},
		"killerVelocity": {
			"x": -97.25737,
			"y": 0.035894744,
			"z": -14.812343
		},
		"victimVelocity": {
			"x": 111.79365,
			"y": -0.0008464679,
			"z": 22.466
		}
	}, {
		"_id": {
			"$oid": "63d75483862f8e159cf048e0"
		},
		"id": "e819bc25-0cfa-4b58-92fe-f790dec3c2f0",
		"time": {
			"$numberLong": "1675056259673"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198809356158",
		"killerId": "76561199369632988",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67327.52,
			"y": 1209.336,
			"z": 113983.586
		},
		"victimPosition": {
			"x": 69677.26,
			"y": 1496.1348,
			"z": 112235.23
		},
		"killerVelocity": {
			"x": 218.45848,
			"y": -11.199349,
			"z": -151.65553
		},
		"victimVelocity": {
			"x": 235.42305,
			"y": -104.072624,
			"z": -87.639305
		}
	}, {
		"_id": {
			"$oid": "63d75c72862f8e159cf0493a"
		},
		"id": "d67341a5-b851-4a66-86cc-332ff47340ea",
		"time": {
			"$numberLong": "1675058290284"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198033112592",
		"killerId": "76561199088184413",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55895.195,
			"y": 567.934,
			"z": 116381.9
		},
		"victimPosition": {
			"x": 55572.71,
			"y": 414.5985,
			"z": 116450.88
		},
		"killerVelocity": {
			"x": -105.868195,
			"y": -43.92226,
			"z": 16.897594
		},
		"victimVelocity": {
			"x": 133.28357,
			"y": -13.290869,
			"z": -9.059135
		}
	}, {
		"_id": {
			"$oid": "63d75cf0862f8e159cf0493e"
		},
		"id": "89dbe3b0-1a39-4901-9481-e210bf2a34eb",
		"time": {
			"$numberLong": "1675058416450"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198058289738",
		"killerId": "76561199088184413",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76635.87,
			"y": 602.09076,
			"z": 112412.17
		},
		"victimPosition": {
			"x": 73221.125,
			"y": 601.32385,
			"z": 109340.99
		},
		"killerVelocity": {
			"x": -214.5314,
			"y": -24.080029,
			"z": -169.05678
		},
		"victimVelocity": {
			"x": 87.436264,
			"y": 14.762412,
			"z": 147.73184
		}
	}, {
		"_id": {
			"$oid": "63d77812862f8e159cf04a68"
		},
		"id": "668339dc-58b5-43a1-8963-a093e770d9bc",
		"time": {
			"$numberLong": "1675065362350"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199161067281",
		"killerId": "76561198797819887",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 130610.125,
			"y": 1763.7291,
			"z": 43075.168
		},
		"victimPosition": {
			"x": 134423.11,
			"y": 2152.9338,
			"z": 42420.35
		},
		"killerVelocity": {
			"x": 200.72887,
			"y": 54.773243,
			"z": -50.953327
		},
		"victimVelocity": {
			"x": -265.45868,
			"y": -22.09599,
			"z": 50.974415
		}
	}, {
		"_id": {
			"$oid": "63d7ba9d862f8e159cf04b0b"
		},
		"id": "b5f3d5e1-b57e-4468-8047-ee86a87f1aac",
		"time": {
			"$numberLong": "1675082397848"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198273681123",
		"killerId": "76561198169070191",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52551.53,
			"y": 278.64908,
			"z": 119031.016
		},
		"victimPosition": {
			"x": 52699.87,
			"y": 278.68448,
			"z": 119063.74
		},
		"killerVelocity": {
			"x": 13.090775,
			"y": -0.021102749,
			"z": 2.133235
		},
		"victimVelocity": {
			"x": 2.56523,
			"y": -0.0013665035,
			"z": -9.732952
		}
	}, {
		"_id": {
			"$oid": "63d7baed862f8e159cf04b10"
		},
		"id": "95a709a9-cc39-4bd7-8289-9263e7b7890c",
		"time": {
			"$numberLong": "1675082477462"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198273681123",
		"killerId": "76561198169070191",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51606.074,
			"y": 361.64636,
			"z": 118387.58
		},
		"victimPosition": {
			"x": 50099.41,
			"y": 730.28864,
			"z": 118103.47
		},
		"killerVelocity": {
			"x": -95.39523,
			"y": 24.925253,
			"z": -18.456713
		},
		"victimVelocity": {
			"x": -168.16928,
			"y": 23.641615,
			"z": -50.067585
		}
	}, {
		"_id": {
			"$oid": "63d7e849862f8e159cf04c27"
		},
		"id": "ce4af1b3-88e5-48b3-81c8-81e12102a690",
		"time": {
			"$numberLong": "1675094089783"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199021036760",
		"killerId": "76561199379327237",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 44112.223,
			"y": 1785.2092,
			"z": 123285.89
		},
		"victimPosition": {
			"x": 44093.133,
			"y": 1611.0403,
			"z": 122966.23
		},
		"killerVelocity": {
			"x": 19.016167,
			"y": -161.35847,
			"z": -259.0956
		},
		"victimVelocity": {
			"x": 26.16353,
			"y": 139.94557,
			"z": 153.93216
		}
	}, {
		"_id": {
			"$oid": "63d7e9fb862f8e159cf04c45"
		},
		"id": "24caf749-f2d1-48cf-9104-bbf0cb7ae361",
		"time": {
			"$numberLong": "1675094523259"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199465742460",
		"killerId": "76561199379327237",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52409.97,
			"y": 468.91592,
			"z": 119488.95
		},
		"victimPosition": {
			"x": 52601.6,
			"y": 1340.8799,
			"z": 120947.445
		},
		"killerVelocity": {
			"x": 38.415707,
			"y": 23.295666,
			"z": 113.37739
		},
		"victimVelocity": {
			"x": -109.194466,
			"y": 36.574898,
			"z": -69.20352
		}
	}, {
		"_id": {
			"$oid": "63d7eb0b862f8e159cf04c63"
		},
		"id": "466482fd-d203-4006-b59f-1db41f8fb697",
		"time": {
			"$numberLong": "1675094795144"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198802323929",
		"killerId": "76561197960476246",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63994.074,
			"y": 2612.4255,
			"z": 107162.14
		},
		"victimPosition": {
			"x": 63163.387,
			"y": 1978.7211,
			"z": 105843.41
		},
		"killerVelocity": {
			"x": -54.578743,
			"y": -88.481316,
			"z": -336.58902
		},
		"victimVelocity": {
			"x": -295.04062,
			"y": -70.03199,
			"z": 75.91419
		}
	}, {
		"_id": {
			"$oid": "63d7eb7a862f8e159cf04c6b"
		},
		"id": "dda46a90-ffa8-429c-8101-808535fb110a",
		"time": {
			"$numberLong": "1675094906989"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198122505723",
		"killerId": "76561197960476246",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74079.38,
			"y": 4380.892,
			"z": 86970.414
		},
		"victimPosition": {
			"x": 73170.14,
			"y": 5416.617,
			"z": 89915.31
		},
		"killerVelocity": {
			"x": -153.53073,
			"y": -0.4727745,
			"z": 338.52713
		},
		"victimVelocity": {
			"x": -79.10339,
			"y": 51.88298,
			"z": 310.13766
		}
	}, {
		"_id": {
			"$oid": "63d7eca6862f8e159cf04c86"
		},
		"id": "acb3f511-d2ad-4bf4-8ba4-576e2d96f9ff",
		"time": {
			"$numberLong": "1675095206061"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199465742460",
		"killerId": "76561199379327237",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60444.59,
			"y": 1399.2838,
			"z": 114612.94
		},
		"victimPosition": {
			"x": 62171.727,
			"y": 1464.8174,
			"z": 113409.3
		},
		"killerVelocity": {
			"x": 209.2546,
			"y": 12.75797,
			"z": -195.73576
		},
		"victimVelocity": {
			"x": 128.36737,
			"y": -46.485783,
			"z": -49.658245
		}
	}, {
		"_id": {
			"$oid": "63d7ee46862f8e159cf04ca6"
		},
		"id": "3aca60ba-4361-4b54-a27e-e0e4ac9d0a77",
		"time": {
			"$numberLong": "1675095622391"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198159138689",
		"killerId": "76561199379327237",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53977.273,
			"y": 377.56665,
			"z": 118881.87
		},
		"victimPosition": {
			"x": 54576.73,
			"y": 469.95154,
			"z": 118606.77
		},
		"killerVelocity": {
			"x": 142.47003,
			"y": 25.566956,
			"z": -77.31961
		},
		"victimVelocity": {
			"x": 154.97115,
			"y": 7.077259,
			"z": -108.5408
		}
	}, {
		"_id": {
			"$oid": "63d7f535862f8e159cf04d14"
		},
		"id": "57af4df6-cc26-4f01-bbc4-2d670f81cb6c",
		"time": {
			"$numberLong": "1675097397537"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198371068011",
		"killerId": "76561198357196685",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94617.73,
			"y": 1329.098,
			"z": 95677.85
		},
		"victimPosition": {
			"x": 100523.31,
			"y": 1197.0079,
			"z": 90495.32
		},
		"killerVelocity": {
			"x": 281.0105,
			"y": -67.64351,
			"z": -191.83823
		},
		"victimVelocity": {
			"x": -158.4687,
			"y": 92.924835,
			"z": -265.18704
		}
	}, {
		"_id": {
			"$oid": "63d7f692862f8e159cf04d3b"
		},
		"id": "a5c4800e-ed10-4b60-ad51-c0b4ce1fd06f",
		"time": {
			"$numberLong": "1675097746789"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198340055731",
		"killerId": "76561198823701170",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 96350.93,
			"y": 2695.7874,
			"z": 90675.54
		},
		"victimPosition": {
			"x": 96557.18,
			"y": 2706.9126,
			"z": 90493.85
		},
		"killerVelocity": {
			"x": 281.97293,
			"y": 10.132943,
			"z": -255.46704
		},
		"victimVelocity": {
			"x": 266.59906,
			"y": 21.32118,
			"z": -232.55807
		}
	}, {
		"_id": {
			"$oid": "63d841c4862f8e159cf04fcd"
		},
		"id": "c289cdbb-c390-4fc1-9a01-c08620fda174",
		"time": {
			"$numberLong": "1675116996204"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198376235102",
		"killerId": "76561199053214971",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64552.48,
			"y": 2062.9514,
			"z": 120548.14
		},
		"victimPosition": {
			"x": 71830.03,
			"y": 860.7889,
			"z": 117496.86
		},
		"killerVelocity": {
			"x": 313.9308,
			"y": 27.783398,
			"z": 52.279324
		},
		"victimVelocity": {
			"x": -152.01848,
			"y": 35.39375,
			"z": 2.596371
		}
	}, {
		"_id": {
			"$oid": "63d84212862f8e159cf04fd3"
		},
		"id": "e657c50f-444f-4642-8ad8-200635d8b42a",
		"time": {
			"$numberLong": "1675117074409"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199053214971",
		"killerId": "76561198302630864",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74022.99,
			"y": 1007.8367,
			"z": 113115.2
		},
		"victimPosition": {
			"x": 77236.52,
			"y": 93.68904,
			"z": 113190.2
		},
		"killerVelocity": {
			"x": 238.46207,
			"y": -38.46127,
			"z": 109.55276
		},
		"victimVelocity": {
			"x": 160.98936,
			"y": -16.65954,
			"z": 65.79455
		}
	}, {
		"_id": {
			"$oid": "63d85f21862f8e159cf05176"
		},
		"id": "e85f4266-e1d2-469f-973e-6385e2b27ae6",
		"time": {
			"$numberLong": "1675124513399"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199017535634",
		"killerId": "76561198973856898",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62391.008,
			"y": 1591.4661,
			"z": 117126.734
		},
		"victimPosition": {
			"x": 62410.305,
			"y": 1408.2438,
			"z": 116465.336
		},
		"killerVelocity": {
			"x": -360.9103,
			"y": -18.68759,
			"z": 60.09628
		},
		"victimVelocity": {
			"x": 103.75704,
			"y": -56.668514,
			"z": -165.3099
		}
	}, {
		"_id": {
			"$oid": "63d85f4a862f8e159cf05181"
		},
		"id": "09a8b379-9969-4816-a8c3-b7481f8edb0e",
		"time": {
			"$numberLong": "1675124554806"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199252599338",
		"killerId": "76561198973856898",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57468.68,
			"y": 669.45703,
			"z": 118285.836
		},
		"victimPosition": {
			"x": 56458.38,
			"y": 471.66287,
			"z": 118599.95
		},
		"killerVelocity": {
			"x": -316.80307,
			"y": 4.2500067,
			"z": 85.14968
		},
		"victimVelocity": {
			"x": 197.44928,
			"y": -57.61751,
			"z": 29.013206
		}
	}, {
		"_id": {
			"$oid": "63d86b06862f8e159cf0523c"
		},
		"id": "420b1d8f-af48-4d75-992c-cc0620d5decb",
		"time": {
			"$numberLong": "1675127558072"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198901092109",
		"killerId": "76561198119670867",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74964.734,
			"y": 4787.2183,
			"z": 100737.99
		},
		"victimPosition": {
			"x": 81508.99,
			"y": 4229.413,
			"z": 98563.44
		},
		"killerVelocity": {
			"x": 111.208855,
			"y": 40.963543,
			"z": -337.95798
		},
		"victimVelocity": {
			"x": 46.916363,
			"y": -317.422,
			"z": -68.626526
		}
	}, {
		"_id": {
			"$oid": "63d86e46862f8e159cf05245"
		},
		"id": "07b608be-2a40-432d-adcf-c322fdacba65",
		"time": {
			"$numberLong": "1675128390470"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199009506848",
		"killerId": "76561199470187671",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 113827.086,
			"y": 14570.986,
			"z": 80766.54
		},
		"victimPosition": {
			"x": 105662.97,
			"y": 11320.06,
			"z": 83306.766
		},
		"killerVelocity": {
			"x": -195.65187,
			"y": -81.44712,
			"z": 43.59045
		},
		"victimVelocity": {
			"x": 265.05844,
			"y": 124.81757,
			"z": -80.67896
		}
	}, {
		"_id": {
			"$oid": "63d86e4d862f8e159cf05247"
		},
		"id": "78bf1054-18fc-4d4e-b445-1e55064f9475",
		"time": {
			"$numberLong": "1675128397095"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199470187671",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107342.94,
			"y": 11986.731,
			"z": 82802.81
		},
		"victimPosition": {
			"x": 112632.76,
			"y": 13729.554,
			"z": 80900.53
		},
		"killerVelocity": {
			"x": 227.63574,
			"y": 77.46927,
			"z": -66.02641
		},
		"victimVelocity": {
			"x": -178.81514,
			"y": -131.63557,
			"z": 12.605541
		}
	}, {
		"_id": {
			"$oid": "63d8aada862f8e159cf0535e"
		},
		"id": "e4e62ae0-4b8d-487f-9a1a-97ba83bec009",
		"time": {
			"$numberLong": "1675143898626"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199232532146",
		"killerId": "76561199228949031",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71959.36,
			"y": 2413.007,
			"z": 100893.12
		},
		"victimPosition": {
			"x": 75170.82,
			"y": 1787.2576,
			"z": 100376.984
		},
		"killerVelocity": {
			"x": 282.2684,
			"y": -90.685555,
			"z": -12.729845
		},
		"victimVelocity": {
			"x": 2.6557791,
			"y": -213.01602,
			"z": -174.78926
		}
	}, {
		"_id": {
			"$oid": "63d8afeb862f8e159cf0538d"
		},
		"id": "2dc93739-512d-464d-9a04-5688611e34f5",
		"time": {
			"$numberLong": "1675145195734"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198086961565",
		"killerId": "76561198453173903",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 127270.18,
			"y": 2510.8496,
			"z": 52613.934
		},
		"victimPosition": {
			"x": 127564,
			"y": 2162.3735,
			"z": 53569.15
		},
		"killerVelocity": {
			"x": 30.131012,
			"y": -68.93728,
			"z": 304.02954
		},
		"victimVelocity": {
			"x": 174.17966,
			"y": -44.53979,
			"z": 283.7587
		}
	}, {
		"_id": {
			"$oid": "63d8df1a862f8e159cf054ee"
		},
		"id": "2756dd93-0c1a-4d4c-8d67-3587c58b4a37",
		"time": {
			"$numberLong": "1675157274765"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198122224177",
		"killerId": "76561199093514777",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58764.58,
			"y": 588.5757,
			"z": 115619.82
		},
		"victimPosition": {
			"x": 58761.46,
			"y": 593.75183,
			"z": 115627.74
		},
		"killerVelocity": {
			"x": 123.88494,
			"y": 95.17048,
			"z": 14.832135
		},
		"victimVelocity": {
			"x": 84.969376,
			"y": 61.387558,
			"z": 19.700277
		}
	}, {
		"_id": {
			"$oid": "63d8e53b862f8e159cf05544"
		},
		"id": "1b34828d-e2eb-468d-a7f9-abebb4d916fb",
		"time": {
			"$numberLong": "1675158843750"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198363194577",
		"killerId": "76561198122224177",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98493.914,
			"y": 2273.2637,
			"z": 106123.52
		},
		"victimPosition": {
			"x": 98703.22,
			"y": 2466.98,
			"z": 106170.94
		},
		"killerVelocity": {
			"x": 112.19296,
			"y": 102.705826,
			"z": 39.66945
		},
		"victimVelocity": {
			"x": -106.12442,
			"y": -133.10176,
			"z": -46.855984
		}
	}, {
		"_id": {
			"$oid": "63d913b6862f8e159cf05626"
		},
		"id": "7531f62c-e8d1-444e-a9e5-7dfcbb1b725f",
		"time": {
			"$numberLong": "1675170742525"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198416153147",
		"killerId": "76561199102008227",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56144.37,
			"y": 2498.3857,
			"z": 108555.61
		},
		"victimPosition": {
			"x": 56008.25,
			"y": 2774.7473,
			"z": 105761.33
		},
		"killerVelocity": {
			"x": -17.768715,
			"y": 78.23011,
			"z": -340.69247
		},
		"victimVelocity": {
			"x": -94.366776,
			"y": -89.38702,
			"z": 133.89832
		}
	}, {
		"_id": {
			"$oid": "63d920e0862f8e159cf056e3"
		},
		"id": "6aec074a-e82a-4563-9a83-557611c15eae",
		"time": {
			"$numberLong": "1675174112048"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197960476246",
		"killerId": "76561198018528962",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 129312.68,
			"y": 1858.3452,
			"z": 38249.637
		},
		"victimPosition": {
			"x": 128087.82,
			"y": 997.9004,
			"z": 35100.355
		},
		"killerVelocity": {
			"x": 196.36551,
			"y": 20.012543,
			"z": 54.208633
		},
		"victimVelocity": {
			"x": -103.111565,
			"y": -19.168896,
			"z": 164.25204
		}
	}, {
		"_id": {
			"$oid": "63d94c09862f8e159cf0590e"
		},
		"id": "eab90202-53cc-42b9-8cb3-301df9e505f2",
		"time": {
			"$numberLong": "1675185161297"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199122007766",
		"killerId": "76561198985922150",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60832.297,
			"y": 1168.3177,
			"z": 112590.305
		},
		"victimPosition": {
			"x": 61074.36,
			"y": 1157.0707,
			"z": 112164.54
		},
		"killerVelocity": {
			"x": 212.48387,
			"y": 42.203304,
			"z": -301.05597
		},
		"victimVelocity": {
			"x": 87.37399,
			"y": -23.709213,
			"z": -214.94824
		}
	}, {
		"_id": {
			"$oid": "63d94cba862f8e159cf05920"
		},
		"id": "dbee400f-e961-4caa-881e-91f67ad64ce4",
		"time": {
			"$numberLong": "1675185338777"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199122007766",
		"killerId": "76561198985922150",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56258.793,
			"y": 840.8686,
			"z": 111930.52
		},
		"victimPosition": {
			"x": 58589.227,
			"y": 1233.2225,
			"z": 110900.56
		},
		"killerVelocity": {
			"x": 334.27673,
			"y": 19.752623,
			"z": -100.659676
		},
		"victimVelocity": {
			"x": -214.10982,
			"y": 14.20549,
			"z": -107.23619
		}
	}, {
		"_id": {
			"$oid": "63d94de2862f8e159cf05933"
		},
		"id": "8867846a-1c02-4710-9aa3-3f8ce1402fc9",
		"time": {
			"$numberLong": "1675185634227"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199122007766",
		"killerId": "76561197970743509",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60750.02,
			"y": 735.1396,
			"z": 112209.78
		},
		"victimPosition": {
			"x": 62156.746,
			"y": 975.5241,
			"z": 110784.03
		},
		"killerVelocity": {
			"x": 98.397255,
			"y": 4.8989687,
			"z": -87.23052
		},
		"victimVelocity": {
			"x": 176.96834,
			"y": -42.431076,
			"z": -28.834991
		}
	}, {
		"_id": {
			"$oid": "63d94f92862f8e159cf0595d"
		},
		"id": "dc1cbc12-a17d-4587-aaba-1ad67dc750fb",
		"time": {
			"$numberLong": "1675186066716"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198094696315",
		"killerId": "76561199122007766",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69624.164,
			"y": 3183.2585,
			"z": 100487.945
		},
		"victimPosition": {
			"x": 73694.54,
			"y": 2280.0754,
			"z": 95839.625
		},
		"killerVelocity": {
			"x": 171.38828,
			"y": -27.043997,
			"z": -139.00497
		},
		"victimVelocity": {
			"x": -231.61075,
			"y": -7.6647797,
			"z": 72.08415
		}
	}, {
		"_id": {
			"$oid": "63d95035862f8e159cf05969"
		},
		"id": "0d1a8d81-45cc-49ca-87e2-830a21fe12ba",
		"time": {
			"$numberLong": "1675186229959"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199122007766",
		"killerId": "76561198094696315",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54238.504,
			"y": 1955.0404,
			"z": 107200.1
		},
		"victimPosition": {
			"x": 55321.113,
			"y": 2239.9343,
			"z": 106927.05
		},
		"killerVelocity": {
			"x": 198.4845,
			"y": 45.24431,
			"z": -85.929375
		},
		"victimVelocity": {
			"x": 74.86801,
			"y": -22.24786,
			"z": 157.37532
		}
	}, {
		"_id": {
			"$oid": "63d951c3862f8e159cf05982"
		},
		"id": "a73e330e-3c92-43fe-a124-e16d8ec69431",
		"time": {
			"$numberLong": "1675186627041"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197970743509",
		"killerId": "76561198094696315",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88956.99,
			"y": 939.96497,
			"z": 84277.984
		},
		"victimPosition": {
			"x": 98127.766,
			"y": 1514.8983,
			"z": 81002.88
		},
		"killerVelocity": {
			"x": 195.31038,
			"y": -81.90028,
			"z": -156.09027
		},
		"victimVelocity": {
			"x": -55.239433,
			"y": -35.27755,
			"z": 55.92007
		}
	}, {
		"_id": {
			"$oid": "63d969f4862f8e159cf05b13"
		},
		"id": "7add17dd-8f7a-410b-a060-b20f27a22fe5",
		"time": {
			"$numberLong": "1675192820748"
		},
		"victimAircraft": 2,
		"killerAircraft": 4,
		"weapon": 2,
		"victimId": "76561199456427844",
		"killerId": "76561198126285727",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 64236.996,
			"y": 927.4368,
			"z": 97118.8
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -1.0142543,
			"y": 0.54108983,
			"z": 0.6279427
		}
	}, {
		"_id": {
			"$oid": "63d97437862f8e159cf05bd6"
		},
		"id": "9b5a4cd9-eb1b-474e-a071-6acc5fcd2390",
		"time": {
			"$numberLong": "1675195447550"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198287340101",
		"killerId": "76561198414004468",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94826.15,
			"y": 8999.984,
			"z": 77232.4
		},
		"victimPosition": {
			"x": 106288.15,
			"y": 4307.9946,
			"z": 72940.484
		},
		"killerVelocity": {
			"x": 407.50543,
			"y": 41.898167,
			"z": -63.876675
		},
		"victimVelocity": {
			"x": 247.89293,
			"y": -2.0950065,
			"z": -228.87643
		}
	}, {
		"_id": {
			"$oid": "63d97822862f8e159cf05c26"
		},
		"id": "20272628-49ba-45fe-b5be-0515ff24b49b",
		"time": {
			"$numberLong": "1675196450753"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198026571049",
		"killerId": "76561198037025585",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64158.76,
			"y": 1864.104,
			"z": 92892.64
		},
		"victimPosition": {
			"x": 63693.13,
			"y": 3076.8618,
			"z": 86456.69
		},
		"killerVelocity": {
			"x": 346.99054,
			"y": -88.55757,
			"z": -129.38461
		},
		"victimVelocity": {
			"x": 87.925995,
			"y": 11.483163,
			"z": 145.11557
		}
	}, {
		"_id": {
			"$oid": "63d97e46862f8e159cf05cc7"
		},
		"id": "f3579c26-1494-4f4a-b321-322a4596e9b5",
		"time": {
			"$numberLong": "1675198022389"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199441932128",
		"killerId": "76561198826178840",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54908.125,
			"y": 565.83344,
			"z": 115300.13
		},
		"victimPosition": {
			"x": 58042.215,
			"y": 508.33215,
			"z": 114779.69
		},
		"killerVelocity": {
			"x": 256.69952,
			"y": -9.786664,
			"z": -80.61499
		},
		"victimVelocity": {
			"x": 193.04095,
			"y": -22.792252,
			"z": 162.34584
		}
	}, {
		"_id": {
			"$oid": "63d97e65862f8e159cf05ccd"
		},
		"id": "3f73a9c4-6cae-4322-a899-8e5db332b720",
		"time": {
			"$numberLong": "1675198053757"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198826178840",
		"killerId": "76561198078190522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60020.574,
			"y": 892.08966,
			"z": 110769.2
		},
		"victimPosition": {
			"x": 58584.992,
			"y": 470.6771,
			"z": 109410.836
		},
		"killerVelocity": {
			"x": -241.05312,
			"y": -6.0608096,
			"z": 98.61422
		},
		"victimVelocity": {
			"x": 88.3537,
			"y": 27.920156,
			"z": -220.74843
		}
	}, {
		"_id": {
			"$oid": "63d9855a862f8e159cf05d86"
		},
		"id": "a3f0ae49-903d-4f63-974d-57ac3957dff9",
		"time": {
			"$numberLong": "1675199834796"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198078190522",
		"killerId": "76561199091319562",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56648.51,
			"y": 2052.6174,
			"z": 117802.25
		},
		"victimPosition": {
			"x": 58270.438,
			"y": 2699.432,
			"z": 116562.766
		},
		"killerVelocity": {
			"x": 136.652,
			"y": 55.80379,
			"z": -112.464
		},
		"victimVelocity": {
			"x": 186.06029,
			"y": 96.164696,
			"z": -153.1712
		}
	}, {
		"_id": {
			"$oid": "63d985e9862f8e159cf05d93"
		},
		"id": "2c65697b-c2c1-46ec-aa2f-0623ceca8440",
		"time": {
			"$numberLong": "1675199977737"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199461217148",
		"killerId": "76561199091319562",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58228.11,
			"y": 1118.8231,
			"z": 116608.68
		},
		"victimPosition": {
			"x": 53606.438,
			"y": 342.68784,
			"z": 118984.02
		},
		"killerVelocity": {
			"x": -316.38702,
			"y": -45.466934,
			"z": 142.29074
		},
		"victimVelocity": {
			"x": 121.80255,
			"y": 24.662437,
			"z": 21.68089
		}
	}, {
		"_id": {
			"$oid": "63d9871d862f8e159cf05da1"
		},
		"id": "b7b9dd06-0b2b-4857-86b9-71e2644bb11a",
		"time": {
			"$numberLong": "1675200285874"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199461217148",
		"killerId": "76561199091319562",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59395.88,
			"y": 1051.9639,
			"z": 111788.73
		},
		"victimPosition": {
			"x": 57178.883,
			"y": 263.0305,
			"z": 113154.23
		},
		"killerVelocity": {
			"x": -198.21942,
			"y": -62.052486,
			"z": 215.45189
		},
		"victimVelocity": {
			"x": -17.272388,
			"y": -155.11314,
			"z": -52.48041
		}
	}, {
		"_id": {
			"$oid": "63d9888e862f8e159cf05db4"
		},
		"id": "a7370729-bf88-4451-b741-22f26d296c2a",
		"time": {
			"$numberLong": "1675200654896"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199273142253",
		"killerId": "76561199091319562",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57060.637,
			"y": 1373.0281,
			"z": 120807.84
		},
		"victimPosition": {
			"x": 62829.266,
			"y": 583.3766,
			"z": 115158.49
		},
		"killerVelocity": {
			"x": 188.62961,
			"y": -4.293989,
			"z": -161.82117
		},
		"victimVelocity": {
			"x": 46.26697,
			"y": -115.86855,
			"z": 5.9922066
		}
	}, {
		"_id": {
			"$oid": "63d99ee6862f8e159cf05ecd"
		},
		"id": "bea3d258-179b-43fb-8d57-eee0b1503d87",
		"time": {
			"$numberLong": "1675206374036"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197970743509",
		"killerId": "76561199060216189",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52767.004,
			"y": 306.06308,
			"z": 118737.18
		},
		"victimPosition": {
			"x": 53002.633,
			"y": 333.97964,
			"z": 118720.06
		},
		"killerVelocity": {
			"x": 144.51028,
			"y": 5.7597666,
			"z": -1.4605819
		},
		"victimVelocity": {
			"x": 39.04683,
			"y": -1.7019435,
			"z": -20.236986
		}
	}, {
		"_id": {
			"$oid": "63d99faf862f8e159cf05ee6"
		},
		"id": "8cb5bfc1-41c4-47f3-acd3-74e0db81ef9d",
		"time": {
			"$numberLong": "1675206575149"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199304852224",
		"killerId": "76561198180350197",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62332.535,
			"y": 2428.6392,
			"z": 110823.87
		},
		"victimPosition": {
			"x": 62945.49,
			"y": 2265.2493,
			"z": 108223.8
		},
		"killerVelocity": {
			"x": 57.02321,
			"y": -17.006115,
			"z": -160.10669
		},
		"victimVelocity": {
			"x": 121.14803,
			"y": -150.99893,
			"z": -196.83867
		}
	}, {
		"_id": {
			"$oid": "63d9a01f862f8e159cf05efa"
		},
		"id": "48175973-0b2d-49c6-8db5-269f22e927fa",
		"time": {
			"$numberLong": "1675206687778"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199304852224",
		"killerId": "76561198180350197",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82073.22,
			"y": 1312.4438,
			"z": 86274.63
		},
		"victimPosition": {
			"x": 51550.043,
			"y": 279.47903,
			"z": 118482.88
		},
		"killerVelocity": {
			"x": 107.20741,
			"y": -37.670708,
			"z": -322.9663
		},
		"victimVelocity": {
			"x": 105.910995,
			"y": 0.0010156855,
			"z": 23.985731
		}
	}, {
		"_id": {
			"$oid": "63d9dbfe5f9de03c5567144c"
		},
		"id": "47a482db-e0f5-4a55-b83b-8ca58d95687f",
		"time": {
			"$numberLong": "1675222014478"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197990116667",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73011.27,
			"y": 5071.57,
			"z": 111129.94
		},
		"victimPosition": {
			"x": 71649.25,
			"y": 2605.6316,
			"z": 112203.266
		},
		"killerVelocity": {
			"x": 147.98494,
			"y": -155.40083,
			"z": -192.54987
		},
		"victimVelocity": {
			"x": -67.868355,
			"y": 41.127575,
			"z": -344.7485
		}
	}, {
		"_id": {
			"$oid": "63d9f8835f9de03c556715ec"
		},
		"id": "d30b4187-42ba-47d2-a7e9-e9cb32a08ce9",
		"time": {
			"$numberLong": "1675229315474"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199009506848",
		"killerId": "76561198249543250",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105037.86,
			"y": 10521.145,
			"z": 78560.54
		},
		"victimPosition": {
			"x": 112724.66,
			"y": 8474.233,
			"z": 78357.11
		},
		"killerVelocity": {
			"x": 306.54504,
			"y": -95.15678,
			"z": 14.616039
		},
		"victimVelocity": {
			"x": -215.14445,
			"y": -165.91138,
			"z": 188.16124
		}
	}, {
		"_id": {
			"$oid": "63d9f9455f9de03c55671601"
		},
		"id": "688c6ba8-1ef8-49e9-91c6-2f87162e6c74",
		"time": {
			"$numberLong": "1675229509756"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199162233312",
		"killerId": "76561198249543250",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79611.63,
			"y": 4757.384,
			"z": 107980.734
		},
		"victimPosition": {
			"x": 82553.72,
			"y": 2996.2307,
			"z": 105751.67
		},
		"killerVelocity": {
			"x": 349.10126,
			"y": -8.07901,
			"z": -154.30667
		},
		"victimVelocity": {
			"x": -50.231697,
			"y": -328.25626,
			"z": -152.76738
		}
	}, {
		"_id": {
			"$oid": "63d9fe655f9de03c55671681"
		},
		"id": "22b7379e-3a03-403d-aa56-20faf545991f",
		"time": {
			"$numberLong": "1675230821377"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199131543290",
		"killerId": "76561199365601840",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58154.43,
			"y": 254.32616,
			"z": 114648.44
		},
		"victimPosition": {
			"x": 73296.03,
			"y": 254.12726,
			"z": 110513.3
		},
		"killerVelocity": {
			"x": 0.0011452404,
			"y": -0.007118508,
			"z": 0.0032872052
		},
		"victimVelocity": {
			"x": -50.063435,
			"y": -44.896355,
			"z": 187.02823
		}
	}, {
		"_id": {
			"$oid": "63da340f5f9de03c55671936"
		},
		"id": "48a1ec40-e3c0-4797-8356-477db4e80340",
		"time": {
			"$numberLong": "1675244559012"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199005731695",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 126772.945,
			"y": 2876.6716,
			"z": 44374.953
		},
		"victimPosition": {
			"x": 123962.37,
			"y": 3236.9153,
			"z": 46031.645
		},
		"killerVelocity": {
			"x": -286.70654,
			"y": -81.3417,
			"z": -52.17486
		},
		"victimVelocity": {
			"x": -72.46271,
			"y": 125.02428,
			"z": 276.81842
		}
	}, {
		"_id": {
			"$oid": "63da40be5f9de03c556719b3"
		},
		"id": "c83d7fa2-e6cd-4632-8a50-02908fd99b74",
		"time": {
			"$numberLong": "1675247806965"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199010115873",
		"killerId": "76561199044059423",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51752.02,
			"y": 783.5569,
			"z": 120898.89
		},
		"victimPosition": {
			"x": 50847.164,
			"y": 911.88336,
			"z": 121769.27
		},
		"killerVelocity": {
			"x": -237.2884,
			"y": -20.806389,
			"z": 204.70578
		},
		"victimVelocity": {
			"x": -141.53955,
			"y": 66.56688,
			"z": 70.648994
		}
	}, {
		"_id": {
			"$oid": "63da45ec5f9de03c556719f5"
		},
		"id": "2ffc3b3e-628e-4dda-8815-e2687bc5eca1",
		"time": {
			"$numberLong": "1675249132394"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199153548254",
		"killerId": "76561198843514063",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56784.383,
			"y": 2279.5276,
			"z": 105640.89
		},
		"victimPosition": {
			"x": 53506.152,
			"y": 1342.3134,
			"z": 107999.5
		},
		"killerVelocity": {
			"x": 313.9901,
			"y": 74.24562,
			"z": 21.35157
		},
		"victimVelocity": {
			"x": 11.545814,
			"y": -51.263924,
			"z": 41.038956
		}
	}, {
		"_id": {
			"$oid": "63da5f855f9de03c55671a52"
		},
		"id": "89c62842-f7b6-441a-b88b-d9a685ab0f51",
		"time": {
			"$numberLong": "1675255685592"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198360283541",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87107.38,
			"y": 6593.906,
			"z": 98116.01
		},
		"victimPosition": {
			"x": 71498.97,
			"y": 3878.3394,
			"z": 108035.43
		},
		"killerVelocity": {
			"x": -319.24966,
			"y": -57.24613,
			"z": 179.94489
		},
		"victimVelocity": {
			"x": 187.21657,
			"y": -122.73727,
			"z": 20.973286
		}
	}, {
		"_id": {
			"$oid": "63da71745f9de03c55671a88"
		},
		"id": "f389af4f-34f3-4806-bcc4-920b82668f5c",
		"time": {
			"$numberLong": "1675260276962"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198980582998",
		"killerId": "76561198366279468",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 48852.28,
			"y": 561.4491,
			"z": 117535.28
		},
		"victimPosition": {
			"x": 48736.902,
			"y": 582.48047,
			"z": 117399.414
		},
		"killerVelocity": {
			"x": -168.86655,
			"y": 24.614624,
			"z": -172.6939
		},
		"victimVelocity": {
			"x": 136.12419,
			"y": -33.581287,
			"z": 91.87566
		}
	}, {
		"_id": {
			"$oid": "63da71cf5f9de03c55671a8f"
		},
		"id": "ad5e9536-0747-42de-b623-61fe1eb94bfe",
		"time": {
			"$numberLong": "1675260367845"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199098858768",
		"killerId": "76561198980582998",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 49077.535,
			"y": 408.1438,
			"z": 119437.95
		},
		"victimPosition": {
			"x": 44417.723,
			"y": 830.56586,
			"z": 123095.33
		},
		"killerVelocity": {
			"x": -151.76779,
			"y": 20.874187,
			"z": 96.01682
		},
		"victimVelocity": {
			"x": 268.95615,
			"y": 12.521718,
			"z": 8.304144
		}
	}, {
		"_id": {
			"$oid": "63da724c5f9de03c55671a99"
		},
		"id": "d8027e7c-12ad-456b-84bd-3b6dc7e028ff",
		"time": {
			"$numberLong": "1675260492917"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199098858768",
		"killerId": "76561199299669565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51896.508,
			"y": 279.4919,
			"z": 118808.305
		},
		"victimPosition": {
			"x": 52276.58,
			"y": 279.47586,
			"z": 118895.46
		},
		"killerVelocity": {
			"x": 82.309875,
			"y": 0.0031759217,
			"z": 20.647968
		},
		"victimVelocity": {
			"x": 29.045595,
			"y": 0.00004335493,
			"z": 7.431353
		}
	}, {
		"_id": {
			"$oid": "63da82745f9de03c55671b8e"
		},
		"id": "31377f17-1324-45d8-ab3a-26d45a928640",
		"time": {
			"$numberLong": "1675264628005"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197976066897",
		"killerId": "76561198397785870",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66746.75,
			"y": 1822.7157,
			"z": 111517.336
		},
		"victimPosition": {
			"x": 70351.3,
			"y": 2479.576,
			"z": 108119.125
		},
		"killerVelocity": {
			"x": 237.49895,
			"y": 47.229298,
			"z": -187.46558
		},
		"victimVelocity": {
			"x": 209.02737,
			"y": 58.84556,
			"z": -251.63637
		}
	}, {
		"_id": {
			"$oid": "63da82f25f9de03c55671b9a"
		},
		"id": "8653b697-a1c3-43f3-a31d-69fc057d4c13",
		"time": {
			"$numberLong": "1675264754448"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198866601853",
		"killerId": "76561199455930807",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54728.246,
			"y": 469.80884,
			"z": 119300.66
		},
		"victimPosition": {
			"x": 55931.07,
			"y": 724.62177,
			"z": 119440.03
		},
		"killerVelocity": {
			"x": 175.36066,
			"y": 27.645826,
			"z": 28.600374
		},
		"victimVelocity": {
			"x": 187.5118,
			"y": 28.156366,
			"z": 27.051897
		}
	}, {
		"_id": {
			"$oid": "63da85565f9de03c55671bb6"
		},
		"id": "2d9ab92a-36ed-4798-a69d-d66a202bee6b",
		"time": {
			"$numberLong": "1675265366382"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198866601853",
		"killerId": "76561198397785870",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108371.03,
			"y": 1657.9258,
			"z": 108898.78
		},
		"victimPosition": {
			"x": 109662.82,
			"y": 1635.3668,
			"z": 104234.59
		},
		"killerVelocity": {
			"x": 34.897713,
			"y": -6.922567,
			"z": -248.8439
		},
		"victimVelocity": {
			"x": -156.77055,
			"y": -30.537872,
			"z": -180.52432
		}
	}, {
		"_id": {
			"$oid": "63da8e595f9de03c55671c2b"
		},
		"id": "9a5fddac-4e72-4570-b923-b7a3689266a6",
		"time": {
			"$numberLong": "1675267673502"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 0,
		"victimId": "76561199241301333",
		"killerId": "76561199455930807",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 50991.117,
			"y": 279.46942,
			"z": 118580.336
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -0.00011108144,
			"y": 0.00019937009,
			"z": 0.00019810289
		}
	}, {
		"_id": {
			"$oid": "63da8f505f9de03c55671c3b"
		},
		"id": "947e9db7-fb7b-4e3c-b12a-c8a835c064c5",
		"time": {
			"$numberLong": "1675267920725"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199299669565",
		"killerId": "76561198114233790",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59303.363,
			"y": 1236.8254,
			"z": 119371.875
		},
		"victimPosition": {
			"x": 59547.83,
			"y": 1408.3363,
			"z": 119388.9
		},
		"killerVelocity": {
			"x": 218.90378,
			"y": 119.155815,
			"z": -1.3947713
		},
		"victimVelocity": {
			"x": 164.35564,
			"y": 98.06323,
			"z": 39.247353
		}
	}, {
		"_id": {
			"$oid": "63da8f6d5f9de03c55671c3e"
		},
		"id": "c2ef304f-ebc2-4a77-8edb-2c4b6a5ad7b2",
		"time": {
			"$numberLong": "1675267949140"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199241301333",
		"killerId": "76561198114233790",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64477.996,
			"y": 2935.2122,
			"z": 118476.49
		},
		"victimPosition": {
			"x": 64442.832,
			"y": 2946.8904,
			"z": 118429.336
		},
		"killerVelocity": {
			"x": -115.57363,
			"y": 25.408955,
			"z": -194.58295
		},
		"victimVelocity": {
			"x": -43.981575,
			"y": 32.835625,
			"z": -117.52
		}
	}, {
		"_id": {
			"$oid": "63da92225f9de03c55671c57"
		},
		"id": "e034eda9-4bb9-40e5-bfd3-b077616fecd2",
		"time": {
			"$numberLong": "1675268642824"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199241301333",
		"killerId": "76561199455930807",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62247.8,
			"y": 1500.2622,
			"z": 123132.41
		},
		"victimPosition": {
			"x": 61746.527,
			"y": 848.1245,
			"z": 121952.07
		},
		"killerVelocity": {
			"x": -75.74031,
			"y": -146.1112,
			"z": -161.51917
		},
		"victimVelocity": {
			"x": -109.35199,
			"y": -9.422209,
			"z": -205.34085
		}
	}, {
		"_id": {
			"$oid": "63dac4575f9de03c55671d15"
		},
		"id": "3f00ae91-06cc-430a-9805-402e86f01f0e",
		"time": {
			"$numberLong": "1675281495671"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199232381554",
		"killerId": "76561198845179262",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 102316.17,
			"y": 3137.1182,
			"z": 74113.73
		},
		"victimPosition": {
			"x": 96853.78,
			"y": 2796.5518,
			"z": 77674.96
		},
		"killerVelocity": {
			"x": -180.0642,
			"y": -20.428637,
			"z": 108.98906
		},
		"victimVelocity": {
			"x": 197.9328,
			"y": -97.81433,
			"z": -274.88043
		}
	}, {
		"_id": {
			"$oid": "63dac4695f9de03c55671d17"
		},
		"id": "8fdce330-6220-4058-a0b3-47e5c5d98473",
		"time": {
			"$numberLong": "1675281513854"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198016085376",
		"killerId": "76561198845179262",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99381,
			"y": 1810.6904,
			"z": 73405.78
		},
		"victimPosition": {
			"x": 98252.125,
			"y": 987.4041,
			"z": 71191.85
		},
		"killerVelocity": {
			"x": -100.21104,
			"y": -67.1543,
			"z": -229.18176
		},
		"victimVelocity": {
			"x": -229.85245,
			"y": -87.19671,
			"z": -227.29405
		}
	}, {
		"_id": {
			"$oid": "63dad5895f9de03c55671ea4"
		},
		"id": "602fcd1b-1177-45ec-a283-1cad35de467d",
		"time": {
			"$numberLong": "1675285897438"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198381513191",
		"killerId": "76561199455558598",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57726.46,
			"y": 799.0533,
			"z": 118808.58
		},
		"victimPosition": {
			"x": 59082.863,
			"y": 1114.0078,
			"z": 118925.98
		},
		"killerVelocity": {
			"x": 274.67123,
			"y": 57.00149,
			"z": -6.7399654
		},
		"victimVelocity": {
			"x": -91.40585,
			"y": -59.37961,
			"z": 99.82821
		}
	}, {
		"_id": {
			"$oid": "63dad8eb5f9de03c55671eee"
		},
		"id": "ffc2370d-1e92-4762-904f-01ef7623198a",
		"time": {
			"$numberLong": "1675286763558"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198801362761",
		"killerId": "76561199455558598",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 139809.47,
			"y": 7477.724,
			"z": 75714.02
		},
		"victimPosition": {
			"x": 142155,
			"y": 8194.803,
			"z": 73515.164
		},
		"killerVelocity": {
			"x": 259.99448,
			"y": 76.35785,
			"z": -227.41449
		},
		"victimVelocity": {
			"x": 212.56352,
			"y": -87.33452,
			"z": -92.14883
		}
	}, {
		"_id": {
			"$oid": "63dae3e35f9de03c55671fbf"
		},
		"id": "908e4a98-dfa7-4463-a2a5-f8bfa08ff944",
		"time": {
			"$numberLong": "1675289571116"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198986170725",
		"killerId": "76561198951161969",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57757.61,
			"y": 1900.9341,
			"z": 105246.8
		},
		"victimPosition": {
			"x": 54336.53,
			"y": 1331.9957,
			"z": 102742.516
		},
		"killerVelocity": {
			"x": -289.53162,
			"y": -39.76165,
			"z": -239.73436
		},
		"victimVelocity": {
			"x": -312.94727,
			"y": 11.366306,
			"z": -32.90827
		}
	}, {
		"_id": {
			"$oid": "63dae4255f9de03c55671fc6"
		},
		"id": "23b9e1ee-59e0-488d-a8b2-dfc5032c0c43",
		"time": {
			"$numberLong": "1675289637826"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198080851997",
		"killerId": "76561198951161969",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56630.39,
			"y": 2834.79,
			"z": 115538.53
		},
		"victimPosition": {
			"x": 56555.082,
			"y": 2484.7998,
			"z": 115065.01
		},
		"killerVelocity": {
			"x": 231.22913,
			"y": 84.228004,
			"z": 114.4332
		},
		"victimVelocity": {
			"x": 115.34594,
			"y": -60.098618,
			"z": -49.969395
		}
	}, {
		"_id": {
			"$oid": "63dae7035f9de03c55671fff"
		},
		"id": "89397acd-425b-418c-9004-88d834fdeb8f",
		"time": {
			"$numberLong": "1675290371832"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199069396280",
		"killerId": "76561197968066534",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72598.73,
			"y": 1880.6069,
			"z": 92432.03
		},
		"victimPosition": {
			"x": 71636.96,
			"y": 1208.7288,
			"z": 96846.69
		},
		"killerVelocity": {
			"x": -71.88517,
			"y": -66.533806,
			"z": 40.233505
		},
		"victimVelocity": {
			"x": 106.07198,
			"y": -35.32392,
			"z": -303.73395
		}
	}, {
		"_id": {
			"$oid": "63daf0ed5f9de03c556720c0"
		},
		"id": "6234278d-64c0-4d39-8ef8-cbfe23c2c5cb",
		"time": {
			"$numberLong": "1675292909516"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199388169610",
		"killerId": "76561199086017875",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68998.32,
			"y": 669.7673,
			"z": 114141.95
		},
		"victimPosition": {
			"x": 70487.54,
			"y": 394.7873,
			"z": 113823.84
		},
		"killerVelocity": {
			"x": 363.09058,
			"y": -10.688076,
			"z": 25.579987
		},
		"victimVelocity": {
			"x": -281.3915,
			"y": -37.09392,
			"z": 33.040146
		}
	}, {
		"_id": {
			"$oid": "63daf2015f9de03c556720e3"
		},
		"id": "88e48eee-5d2e-4bf2-a59e-d34f608ff658",
		"time": {
			"$numberLong": "1675293185295"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199388169610",
		"killerId": "76561199086017875",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80265.56,
			"y": 2696.2493,
			"z": 107396.1
		},
		"victimPosition": {
			"x": 88394.6,
			"y": 1045.9391,
			"z": 101006.89
		},
		"killerVelocity": {
			"x": 265.5252,
			"y": -97.585266,
			"z": -203.89073
		},
		"victimVelocity": {
			"x": 45.685703,
			"y": -38.071415,
			"z": -221.7838
		}
	}, {
		"_id": {
			"$oid": "63daf4d65f9de03c55672123"
		},
		"id": "92787d88-96c7-4b2a-8685-53a71fb4b14b",
		"time": {
			"$numberLong": "1675293910432"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198106875416",
		"killerId": "76561199461217148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56214.69,
			"y": 726.9473,
			"z": 117485.54
		},
		"victimPosition": {
			"x": 55896.19,
			"y": 888.5403,
			"z": 117648.39
		},
		"killerVelocity": {
			"x": -303.16565,
			"y": 34.09988,
			"z": 138.76161
		},
		"victimVelocity": {
			"x": 198.11693,
			"y": 56.9338,
			"z": -133.69525
		}
	}, {
		"_id": {
			"$oid": "63daf6b55f9de03c55672141"
		},
		"id": "3140a328-07c9-4db3-b392-2168e965b77d",
		"time": {
			"$numberLong": "1675294389837"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199086017875",
		"killerId": "76561199461217148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57246.06,
			"y": 695.28406,
			"z": 116315.9
		},
		"victimPosition": {
			"x": 53750.684,
			"y": 341.62863,
			"z": 118345.25
		},
		"killerVelocity": {
			"x": -216.54012,
			"y": -11.161539,
			"z": 167.56947
		},
		"victimVelocity": {
			"x": 53.11256,
			"y": 7.3228106,
			"z": -128.63168
		}
	}, {
		"_id": {
			"$oid": "63db02d55f9de03c5567222a"
		},
		"id": "c6c8ad14-7833-4b39-a3a6-24415dae7482",
		"time": {
			"$numberLong": "1675297493920"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 8,
		"victimId": "76561199003313363",
		"killerId": "76561198985607198",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58707.41,
			"y": 605.311,
			"z": 115678.766
		},
		"victimPosition": {
			"x": 60138.56,
			"y": 371.56058,
			"z": 116505.266
		},
		"killerVelocity": {
			"x": 59.657326,
			"y": 3.7244685,
			"z": -224.47711
		},
		"victimVelocity": {
			"x": -11.257487,
			"y": -50.494648,
			"z": 87.375145
		}
	}, {
		"_id": {
			"$oid": "63db03cb5f9de03c55672253"
		},
		"id": "a95c6e2f-53eb-444d-870a-c779089ff1d9",
		"time": {
			"$numberLong": "1675297739685"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198063872038",
		"killerId": "76561199003313363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56750.37,
			"y": 1855.9521,
			"z": 113953.05
		},
		"victimPosition": {
			"x": 54672.08,
			"y": 1616.8787,
			"z": 115156.72
		},
		"killerVelocity": {
			"x": -281.89972,
			"y": -26.16478,
			"z": 144.62587
		},
		"victimVelocity": {
			"x": 176.84065,
			"y": 21.748617,
			"z": 15.230873
		}
	}, {
		"_id": {
			"$oid": "63db03dd5f9de03c55672255"
		},
		"id": "21525cb9-8188-4fa7-8326-96f5060d6ac7",
		"time": {
			"$numberLong": "1675297757141"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199003313363",
		"killerId": "76561198985607198",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57406.39,
			"y": 1917.6339,
			"z": 116385.1
		},
		"victimPosition": {
			"x": 57480.473,
			"y": 1881.0753,
			"z": 116367.81
		},
		"killerVelocity": {
			"x": -310.18826,
			"y": 154.38075,
			"z": 35.115402
		},
		"victimVelocity": {
			"x": 217.4234,
			"y": -144.10303,
			"z": -76.280136
		}
	}, {
		"_id": {
			"$oid": "63db0b2c5f9de03c556722fa"
		},
		"id": "aeb0ae3e-07c4-41bf-99a0-df456a6755bb",
		"time": {
			"$numberLong": "1675299628462"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198080643542",
		"killerId": "76561199042279108",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57474.113,
			"y": 1129.7561,
			"z": 116556.34
		},
		"victimPosition": {
			"x": 57043.73,
			"y": 433.53894,
			"z": 118102.734
		},
		"killerVelocity": {
			"x": -136.18665,
			"y": -95.488686,
			"z": 165.12984
		},
		"victimVelocity": {
			"x": 24.189209,
			"y": -81.5125,
			"z": 146.50914
		}
	}, {
		"_id": {
			"$oid": "63db0bdd5f9de03c5567231a"
		},
		"id": "b1517fb9-8bd0-44c1-a1fb-15163adcac1e",
		"time": {
			"$numberLong": "1675299805776"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199042279108",
		"killerId": "76561198080643542",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56819.098,
			"y": 5758.3384,
			"z": 124572.67
		},
		"victimPosition": {
			"x": 51894.312,
			"y": 278.96332,
			"z": 118587.51
		},
		"killerVelocity": {
			"x": -9.253131,
			"y": 69.15695,
			"z": 106.83199
		},
		"victimVelocity": {
			"x": 106.55883,
			"y": -0.2305886,
			"z": 25.989096
		}
	}, {
		"_id": {
			"$oid": "63db0d515f9de03c55672340"
		},
		"id": "f98bcfdc-ff7e-45f9-87b2-685ac173046f",
		"time": {
			"$numberLong": "1675300177227"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199211077519",
		"killerId": "76561199224488454",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112222.33,
			"y": 1749.1615,
			"z": 70280.2
		},
		"victimPosition": {
			"x": 117552.51,
			"y": 1793.0172,
			"z": 65565.945
		},
		"killerVelocity": {
			"x": 297.28082,
			"y": 10.959429,
			"z": -249.0472
		},
		"victimVelocity": {
			"x": 194.79594,
			"y": 135.65471,
			"z": 67.7368
		}
	}, {
		"_id": {
			"$oid": "63db0d905f9de03c5567234b"
		},
		"id": "a76e22da-afad-470d-8ec3-2524925cae38",
		"time": {
			"$numberLong": "1675300240290"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199072298929",
		"killerId": "76561198063872038",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74890.516,
			"y": 6826.9478,
			"z": 87530.94
		},
		"victimPosition": {
			"x": 84921.93,
			"y": 5812.0723,
			"z": 76790.71
		},
		"killerVelocity": {
			"x": 223.70009,
			"y": 36.047596,
			"z": -297.26672
		},
		"victimVelocity": {
			"x": 243.46545,
			"y": -95.472534,
			"z": 11.345018
		}
	}, {
		"_id": {
			"$oid": "63db10b55f9de03c55672390"
		},
		"id": "204e23bb-cc07-4c48-a1d2-4f4d8f45ec34",
		"time": {
			"$numberLong": "1675301045539"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198063872038",
		"killerId": "76561199098361850",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52497.055,
			"y": 2114.0278,
			"z": 118934.88
		},
		"victimPosition": {
			"x": 132051.05,
			"y": 2336.1409,
			"z": 62172.227
		},
		"killerVelocity": {
			"x": -8.666591,
			"y": 80.26209,
			"z": -0.7321818
		},
		"victimVelocity": {
			"x": -247.65477,
			"y": 31.484053,
			"z": 78.621315
		}
	}, {
		"_id": {
			"$oid": "63db11a55f9de03c5567239c"
		},
		"id": "6d664716-1247-4459-9b43-0b23e884b8b7",
		"time": {
			"$numberLong": "1675301285357"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199106518817",
		"killerId": "76561199098361850",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53625.008,
			"y": 1472.134,
			"z": 118427.77
		},
		"victimPosition": {
			"x": 55206.984,
			"y": 990.9525,
			"z": 119336.39
		},
		"killerVelocity": {
			"x": 324.8803,
			"y": -86.09964,
			"z": 212.06703
		},
		"victimVelocity": {
			"x": 169.69284,
			"y": 45.172443,
			"z": -14.298267
		}
	}, {
		"_id": {
			"$oid": "63db1fa15f9de03c55672489"
		},
		"id": "508a572f-8f35-4cfe-a11b-7fb15b470565",
		"time": {
			"$numberLong": "1675304865269"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198986170725",
		"killerId": "76561199168172069",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61543.164,
			"y": 2153.6865,
			"z": 107506.734
		},
		"victimPosition": {
			"x": 61457.668,
			"y": 1981.9407,
			"z": 106713.74
		},
		"killerVelocity": {
			"x": 52.205547,
			"y": -6.4095793,
			"z": -263.55447
		},
		"victimVelocity": {
			"x": -0.60292256,
			"y": -35.550724,
			"z": -116.306274
		}
	}, {
		"_id": {
			"$oid": "63db2c175f9de03c556725a1"
		},
		"id": "6cd04e9d-da8b-4cfc-a053-2c085c60075a",
		"time": {
			"$numberLong": "1675308055562"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198807083439",
		"killerId": "76561198986170725",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51161.65,
			"y": 279.48825,
			"z": 118748.61
		},
		"victimPosition": {
			"x": 62171.957,
			"y": 2382.6467,
			"z": 86798.586
		},
		"killerVelocity": {
			"x": 0.07413386,
			"y": -0.000024728477,
			"z": -0.30548802
		},
		"victimVelocity": {
			"x": 66.18933,
			"y": -32.456715,
			"z": 120.67346
		}
	}, {
		"_id": {
			"$oid": "63db48575f9de03c55672772"
		},
		"id": "5e01aa6e-2a48-4be6-b520-7579ac8067a2",
		"time": {
			"$numberLong": "1675315287299"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199015865405",
		"killerId": "76561198990577415",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101662.195,
			"y": 1564.725,
			"z": 109861.7
		},
		"victimPosition": {
			"x": 96656.21,
			"y": 2240.4497,
			"z": 105602.445
		},
		"killerVelocity": {
			"x": -4.8180003,
			"y": 19.31074,
			"z": -247.6424
		},
		"victimVelocity": {
			"x": -156.03389,
			"y": 122.05013,
			"z": 197.65997
		}
	}, {
		"_id": {
			"$oid": "63db50305f9de03c556727f4"
		},
		"id": "54f26bc1-8388-4059-893b-58bc82c14b9e",
		"time": {
			"$numberLong": "1675317296580"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198089036550",
		"killerId": "76561198990577415",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112912.336,
			"y": 2150.4507,
			"z": 52608.84
		},
		"victimPosition": {
			"x": 112820.02,
			"y": 2142.8125,
			"z": 52369.195
		},
		"killerVelocity": {
			"x": -84.73914,
			"y": 12.630788,
			"z": -116.95582
		},
		"victimVelocity": {
			"x": 134.26038,
			"y": -11.548913,
			"z": 96.61287
		}
	}, {
		"_id": {
			"$oid": "63db51025f9de03c5567280c"
		},
		"id": "3490f3fe-d08d-41b1-8cc1-2af9c54659d0",
		"time": {
			"$numberLong": "1675317506601"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199024788800",
		"killerId": "76561199236421137",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75205.95,
			"y": 2683.5925,
			"z": 104463.04
		},
		"victimPosition": {
			"x": 76485.57,
			"y": 2592.4307,
			"z": 104234.18
		},
		"killerVelocity": {
			"x": 211.19429,
			"y": -1.3680931,
			"z": -47.162937
		},
		"victimVelocity": {
			"x": 175.55264,
			"y": 42.932117,
			"z": 7.9521317
		}
	}, {
		"_id": {
			"$oid": "63db52b35f9de03c5567282b"
		},
		"id": "ba8ecb3d-bccf-4729-9292-40439f3d37a6",
		"time": {
			"$numberLong": "1675317939671"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199236421137",
		"killerId": "76561198001340112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71788.445,
			"y": 1904.8147,
			"z": 96736.17
		},
		"victimPosition": {
			"x": 72670.09,
			"y": 1691.8049,
			"z": 97382.83
		},
		"killerVelocity": {
			"x": -269.8643,
			"y": 9.239733,
			"z": 23.91511
		},
		"victimVelocity": {
			"x": 0.32825518,
			"y": -57.32618,
			"z": 79.59917
		}
	}, {
		"_id": {
			"$oid": "63db670e5f9de03c5567293c"
		},
		"id": "8180752e-3633-42d5-bd13-852e033b26af",
		"time": {
			"$numberLong": "1675323150308"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197965142204",
		"killerId": "76561198264285454",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93104.695,
			"y": 5165.1724,
			"z": 58695.086
		},
		"victimPosition": {
			"x": 97396.99,
			"y": 1693.7328,
			"z": 60440.336
		},
		"killerVelocity": {
			"x": 385.78802,
			"y": 7.7853913,
			"z": -61.820206
		},
		"victimVelocity": {
			"x": -194.75185,
			"y": -9.17692,
			"z": -110.943596
		}
	}, {
		"_id": {
			"$oid": "63db82605f9de03c55672a1a"
		},
		"id": "caddc223-04b6-4e07-813c-a0a0496b6961",
		"time": {
			"$numberLong": "1675330144102"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198071327280",
		"killerId": "76561199159081115",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56369.24,
			"y": 1641.9185,
			"z": 111897.414
		},
		"victimPosition": {
			"x": 56927.96,
			"y": 1140.2744,
			"z": 109032.02
		},
		"killerVelocity": {
			"x": 83.165215,
			"y": -46.47351,
			"z": -323.83795
		},
		"victimVelocity": {
			"x": -22.229786,
			"y": -104.55359,
			"z": 147.32878
		}
	}, {
		"_id": {
			"$oid": "63db87cb5f9de03c55672a50"
		},
		"id": "6c78c36c-68fa-4853-806d-63d38ec82bfe",
		"time": {
			"$numberLong": "1675331531187"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199164304367",
		"killerId": "76561199159081115",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72100.984,
			"y": 6709.9766,
			"z": 49194.406
		},
		"victimPosition": {
			"x": 49147.156,
			"y": 7566.549,
			"z": 36151.195
		},
		"killerVelocity": {
			"x": 43.647038,
			"y": -95.32659,
			"z": 136.24738
		},
		"victimVelocity": {
			"x": 51.80821,
			"y": -118.18113,
			"z": 154.2292
		}
	}, {
		"_id": {
			"$oid": "63db88615f9de03c55672a5e"
		},
		"id": "efee7b41-da0a-44fc-a763-68abba6b9bd2",
		"time": {
			"$numberLong": "1675331681680"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199164304367",
		"killerId": "76561199159081115",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114326.26,
			"y": 4233.547,
			"z": 33343.13
		},
		"victimPosition": {
			"x": 52207.785,
			"y": 279.48108,
			"z": 118749.16
		},
		"killerVelocity": {
			"x": 387.99084,
			"y": -25.960747,
			"z": -75.63707
		},
		"victimVelocity": {
			"x": -0.006186024,
			"y": 0.00035358965,
			"z": 0.003795193
		}
	}, {
		"_id": {
			"$oid": "63db8f0f5f9de03c55672a9d"
		},
		"id": "cf0c10fb-e6f9-4008-a221-fbb472eb6a99",
		"time": {
			"$numberLong": "1675333391102"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198005469535",
		"killerId": "76561199455091346",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 141568.89,
			"y": 3785.8313,
			"z": 80628.42
		},
		"victimPosition": {
			"x": 133411.5,
			"y": 3673.0547,
			"z": 84201.555
		},
		"killerVelocity": {
			"x": 335.48468,
			"y": -154.67223,
			"z": 18.967308
		},
		"victimVelocity": {
			"x": 15.619656,
			"y": -110.90988,
			"z": -7.5244336
		}
	}, {
		"_id": {
			"$oid": "63dbbb4e5f9de03c55672b3e"
		},
		"id": "e5a97312-6054-4c8a-a922-fbb59ca5db1c",
		"time": {
			"$numberLong": "1675344718781"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198321357998",
		"killerId": "76561199185397619",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58135.035,
			"y": 2479.5571,
			"z": 115520.7
		},
		"victimPosition": {
			"x": 59445.094,
			"y": 2893.259,
			"z": 113515.01
		},
		"killerVelocity": {
			"x": 143.23773,
			"y": 32.710243,
			"z": -157.2161
		},
		"victimVelocity": {
			"x": 60.531673,
			"y": -20.919472,
			"z": -122.00266
		}
	}, {
		"_id": {
			"$oid": "63dbbc355f9de03c55672b4f"
		},
		"id": "b1977fae-3637-46fa-938c-1977d3b20e41",
		"time": {
			"$numberLong": "1675344949681"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199185397619",
		"killerId": "76561198321357998",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 92449.85,
			"y": 4821.565,
			"z": 85592.41
		},
		"victimPosition": {
			"x": 103953.516,
			"y": 2797.9075,
			"z": 76952.32
		},
		"killerVelocity": {
			"x": 221.55164,
			"y": -120.91134,
			"z": -321.93494
		},
		"victimVelocity": {
			"x": -98.84736,
			"y": -10.424189,
			"z": 61.974762
		}
	}, {
		"_id": {
			"$oid": "63dbd1f65f9de03c55672c3d"
		},
		"id": "5394d924-2869-4fd7-bb48-9d21db8c8fea",
		"time": {
			"$numberLong": "1675350518315"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198144441716",
		"killerId": "76561198298934803",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70298.125,
			"y": 1629.9912,
			"z": 102067.32
		},
		"victimPosition": {
			"x": 71299.39,
			"y": 817.143,
			"z": 102115.266
		},
		"killerVelocity": {
			"x": 294.60455,
			"y": 36.6787,
			"z": -209.65111
		},
		"victimVelocity": {
			"x": -257.6612,
			"y": 26.522203,
			"z": 269.87207
		}
	}, {
		"_id": {
			"$oid": "63dbf3895f9de03c55672e58"
		},
		"id": "cc2ad356-ede2-4402-9a6f-289e79eaeefb",
		"time": {
			"$numberLong": "1675359113101"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199004454360",
		"killerId": "76561199383834974",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90765.58,
			"y": 3676.9294,
			"z": 81482.305
		},
		"victimPosition": {
			"x": 91115.11,
			"y": 3744.8652,
			"z": 81204.68
		},
		"killerVelocity": {
			"x": 229.73293,
			"y": 48.1932,
			"z": -196.61758
		},
		"victimVelocity": {
			"x": 164.43428,
			"y": 3.969834,
			"z": -128.55875
		}
	}, {
		"_id": {
			"$oid": "63dc0ef55f9de03c5567301b"
		},
		"id": "55ec6d6e-eb5f-4f88-b893-a6de0eb364a1",
		"time": {
			"$numberLong": "1675366133501"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199391443424",
		"killerId": "76561199127252790",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87233.71,
			"y": 302.3847,
			"z": 93844.14
		},
		"victimPosition": {
			"x": 90432.67,
			"y": 524.8449,
			"z": 93857.11
		},
		"killerVelocity": {
			"x": 62.91152,
			"y": -0.03588353,
			"z": -27.446465
		},
		"victimVelocity": {
			"x": 132.3347,
			"y": -85.644806,
			"z": -96.03374
		}
	}, {
		"_id": {
			"$oid": "63dc2b565f9de03c5567322f"
		},
		"id": "090cd632-9a88-4b4d-b910-472db2959409",
		"time": {
			"$numberLong": "1675373398842"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198080643542",
		"killerId": "76561199086017875",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56710.676,
			"y": 1162.0415,
			"z": 119170.32
		},
		"victimPosition": {
			"x": 56995.34,
			"y": 258.65836,
			"z": 119831.05
		},
		"killerVelocity": {
			"x": 239.21745,
			"y": 39.115658,
			"z": -5.253971
		},
		"victimVelocity": {
			"x": 74.979385,
			"y": -7.8160424,
			"z": -13.769564
		}
	}, {
		"_id": {
			"$oid": "63dc4847ae4e72499fcbc4c1"
		},
		"id": "85991d67-78e1-434b-b9c9-473b7ab6a2ea",
		"time": {
			"$numberLong": "1675380807161"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198061098078",
		"killerId": "76561198881517560",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54022.406,
			"y": 349.97702,
			"z": 118246.93
		},
		"victimPosition": {
			"x": 52622.574,
			"y": 279.39148,
			"z": 118870.02
		},
		"killerVelocity": {
			"x": 120.1526,
			"y": -33.185955,
			"z": -66.798035
		},
		"victimVelocity": {
			"x": -11.903991,
			"y": -0.15477934,
			"z": -13.467892
		}
	}, {
		"_id": {
			"$oid": "63dc516bae4e72499fcbc54b"
		},
		"id": "0d96db2b-e612-4602-8079-d722e6145d9a",
		"time": {
			"$numberLong": "1675383147686"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198380809860",
		"killerId": "76561199243357932",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84236.69,
			"y": 3197.445,
			"z": 86116.4
		},
		"victimPosition": {
			"x": 83413.15,
			"y": 3059.7,
			"z": 86979.94
		},
		"killerVelocity": {
			"x": -198.4105,
			"y": 15.656192,
			"z": 331.41617
		},
		"victimVelocity": {
			"x": 205.72954,
			"y": -59.782207,
			"z": -187.80614
		}
	}, {
		"_id": {
			"$oid": "63dc6f5aae4e72499fcbc735"
		},
		"id": "af3393c9-5cf5-4461-a523-0e2a4c1c3256",
		"time": {
			"$numberLong": "1675390810398"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199008989547",
		"killerId": "76561198086961565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112243.15,
			"y": 1703.3418,
			"z": 75357.87
		},
		"victimPosition": {
			"x": 121149.55,
			"y": 3001.4277,
			"z": 78000.81
		},
		"killerVelocity": {
			"x": 366.693,
			"y": 24.910486,
			"z": -139.8124
		},
		"victimVelocity": {
			"x": 115.33448,
			"y": -217.98174,
			"z": 223.03104
		}
	}, {
		"_id": {
			"$oid": "63dc72edae4e72499fcbc797"
		},
		"id": "1a6f8757-808e-41e8-9414-d50b20830593",
		"time": {
			"$numberLong": "1675391725427"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199060216189",
		"killerId": "76561198086961565",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97244.88,
			"y": 2535.2837,
			"z": 94683.47
		},
		"victimPosition": {
			"x": 95287.38,
			"y": 945.596,
			"z": 86479.555
		},
		"killerVelocity": {
			"x": 201.64424,
			"y": 16.124506,
			"z": -306.22537
		},
		"victimVelocity": {
			"x": -87.25036,
			"y": -71.644485,
			"z": 252.0368
		}
	}, {
		"_id": {
			"$oid": "63dc9485ae4e72499fcbca74"
		},
		"id": "046df6f2-9c8f-43f2-952e-5e425ef66d2e",
		"time": {
			"$numberLong": "1675400325268"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197991451738",
		"killerId": "76561198327746426",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62441.56,
			"y": 673.7211,
			"z": 109473.42
		},
		"victimPosition": {
			"x": 61655.535,
			"y": 1523.4546,
			"z": 107079.555
		},
		"killerVelocity": {
			"x": -97.139,
			"y": 5.5638947,
			"z": -228.63303
		},
		"victimVelocity": {
			"x": -98.35082,
			"y": 16.103851,
			"z": -54.725376
		}
	}, {
		"_id": {
			"$oid": "63dc9564ae4e72499fcbca8d"
		},
		"id": "66b66876-037b-46c6-b3bb-b559afa66d53",
		"time": {
			"$numberLong": "1675400548201"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197991451738",
		"killerId": "76561197967875488",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58221.21,
			"y": 986.47754,
			"z": 109064.78
		},
		"victimPosition": {
			"x": 57843.72,
			"y": 1090.1385,
			"z": 108168.65
		},
		"killerVelocity": {
			"x": -87.38152,
			"y": -32.975548,
			"z": -266.78403
		},
		"victimVelocity": {
			"x": -47.615925,
			"y": -77.38178,
			"z": 314.73523
		}
	}, {
		"_id": {
			"$oid": "63dc958cae4e72499fcbca96"
		},
		"id": "7f6bbc45-4210-4ed2-8611-19a41fb6111f",
		"time": {
			"$numberLong": "1675400588155"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198264285454",
		"killerId": "76561197967875488",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59650.785,
			"y": 1008.96356,
			"z": 107823.65
		},
		"victimPosition": {
			"x": 72075.45,
			"y": 4191.0107,
			"z": 113594.02
		},
		"killerVelocity": {
			"x": -157.1571,
			"y": -79.15781,
			"z": -123.78853
		},
		"victimVelocity": {
			"x": 101.492325,
			"y": -158.87395,
			"z": -24.097597
		}
	}, {
		"_id": {
			"$oid": "63dccd02ae4e72499fcbce1b"
		},
		"id": "0f58183e-78f7-46d6-b554-a9a141d625bc",
		"time": {
			"$numberLong": "1675414786586"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198194994226",
		"killerId": "76561198393377482",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68163.06,
			"y": 2878.7334,
			"z": 102833.52
		},
		"victimPosition": {
			"x": 64352.54,
			"y": 973.57495,
			"z": 103521.555
		},
		"killerVelocity": {
			"x": 286.5613,
			"y": -24.361437,
			"z": -151.18349
		},
		"victimVelocity": {
			"x": -23.559874,
			"y": 1.00435,
			"z": -62.32751
		}
	}, {
		"_id": {
			"$oid": "63dcce46ae4e72499fcbce2d"
		},
		"id": "6a253826-7d7f-4872-b592-ec4a36926ed1",
		"time": {
			"$numberLong": "1675415110263"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198194994226",
		"killerId": "76561198393377482",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98636.73,
			"y": 2303.16,
			"z": 78805.38
		},
		"victimPosition": {
			"x": 96002.22,
			"y": 1075.2444,
			"z": 79755.016
		},
		"killerVelocity": {
			"x": 203.86806,
			"y": -39.23089,
			"z": 110.45204
		},
		"victimVelocity": {
			"x": -50.8933,
			"y": 43.26672,
			"z": -21.431086
		}
	}, {
		"_id": {
			"$oid": "63dceb8fae4e72499fcbcf5d"
		},
		"id": "8e03a7c8-f33e-492a-b194-ad6572d6e86d",
		"time": {
			"$numberLong": "1675422607590"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199378304485",
		"killerId": "76561198325613819",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 114869.77,
			"y": 1667.5211,
			"z": 60941.965
		},
		"victimPosition": {
			"x": 116305.74,
			"y": 1729.9209,
			"z": 62690.96
		},
		"killerVelocity": {
			"x": 200.38423,
			"y": -6.4434934,
			"z": 230.91115
		},
		"victimVelocity": {
			"x": 122.20812,
			"y": 55.659042,
			"z": -168.96397
		}
	}, {
		"_id": {
			"$oid": "63dceca1ae4e72499fcbcf63"
		},
		"id": "b28bfd31-c41c-4e0a-b96c-aa4da650aed8",
		"time": {
			"$numberLong": "1675422881985"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198177819141",
		"killerId": "76561198388313335",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66293.12,
			"y": 1931.4117,
			"z": 114362.05
		},
		"victimPosition": {
			"x": 65678.97,
			"y": 482.91592,
			"z": 115973.21
		},
		"killerVelocity": {
			"x": 17.446041,
			"y": -106.036575,
			"z": 192.30981
		},
		"victimVelocity": {
			"x": -193.42395,
			"y": 12.549761,
			"z": 174.2078
		}
	}, {
		"_id": {
			"$oid": "63dd1b00ae4e72499fcbd1a0"
		},
		"id": "3237a81e-5a6c-46ec-9738-b8f57ef5424d",
		"time": {
			"$numberLong": "1675434752090"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198061098078",
		"killerId": "76561198388141093",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97105.53,
			"y": 3427.0132,
			"z": 104952.47
		},
		"victimPosition": {
			"x": 98758.97,
			"y": 1255.3638,
			"z": 100985.18
		},
		"killerVelocity": {
			"x": 257.42383,
			"y": -52.75507,
			"z": -216.06107
		},
		"victimVelocity": {
			"x": 115.53585,
			"y": -13.896179,
			"z": -16.913937
		}
	}, {
		"_id": {
			"$oid": "63dd424aae4e72499fcbd35d"
		},
		"id": "16d97c52-cf15-4b5f-a7b8-564323dfc75a",
		"time": {
			"$numberLong": "1675444810651"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198126285727",
		"killerId": "76561198137873043",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65370.14,
			"y": 2280.3687,
			"z": 101634.41
		},
		"victimPosition": {
			"x": 65309.156,
			"y": 2234.9429,
			"z": 101798.54
		},
		"killerVelocity": {
			"x": 236.92677,
			"y": -0.6148063,
			"z": -293.89417
		},
		"victimVelocity": {
			"x": -83.06943,
			"y": 0.2340858,
			"z": 157.42223
		}
	}, {
		"_id": {
			"$oid": "63dd4372ae4e72499fcbd362"
		},
		"id": "7908710f-10d9-4f79-a675-af019d7d384f",
		"time": {
			"$numberLong": "1675445106517"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 8,
		"victimId": "76561198325613819",
		"killerId": "76561198137873043",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 78424.49,
			"y": 4225.1504,
			"z": 95758.125
		},
		"victimPosition": {
			"x": 79119.87,
			"y": 4149.162,
			"z": 95175.414
		},
		"killerVelocity": {
			"x": 306.52798,
			"y": -31.712929,
			"z": -253.4461
		},
		"victimVelocity": {
			"x": 265.13034,
			"y": -39.109592,
			"z": -207.44843
		}
	}, {
		"_id": {
			"$oid": "63dd5f99ae4e72499fcbd55d"
		},
		"id": "d2526cda-dc99-43ea-8dce-ae6624b43e91",
		"time": {
			"$numberLong": "1675452313287"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198159355827",
		"killerId": "76561197971389553",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53058.566,
			"y": 945.1076,
			"z": 119758.48
		},
		"victimPosition": {
			"x": 57597.027,
			"y": 424.1471,
			"z": 119934.234
		},
		"killerVelocity": {
			"x": 237.28044,
			"y": 19.372284,
			"z": -0.3948661
		},
		"victimVelocity": {
			"x": 250.23598,
			"y": -27.363958,
			"z": -6.303007
		}
	}, {
		"_id": {
			"$oid": "63dd6bc0ae4e72499fcbd66c"
		},
		"id": "5915bddb-eac0-41dc-b9d1-e908288ee2d8",
		"time": {
			"$numberLong": "1675455424544"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198037025585",
		"killerId": "76561199058477153",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55387.203,
			"y": 1297.937,
			"z": 117950.61
		},
		"victimPosition": {
			"x": 57631.09,
			"y": 430.29443,
			"z": 118764.53
		},
		"killerVelocity": {
			"x": 207.20999,
			"y": 54.86899,
			"z": -69.427216
		},
		"victimVelocity": {
			"x": 70.92489,
			"y": -134.7317,
			"z": 62.064903
		}
	}, {
		"_id": {
			"$oid": "63dd6f07ae4e72499fcbd6c8"
		},
		"id": "4828b7be-e9f8-4853-a1af-66393b1e210d",
		"time": {
			"$numberLong": "1675456263482"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198371068011",
		"killerId": "76561199058477153",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112897.87,
			"y": 4878.7383,
			"z": 71833.6
		},
		"victimPosition": {
			"x": 118129.36,
			"y": 4856.5054,
			"z": 72920.51
		},
		"killerVelocity": {
			"x": 275.44733,
			"y": 96.93956,
			"z": -210.44897
		},
		"victimVelocity": {
			"x": -307.5087,
			"y": -69.679535,
			"z": 254.57243
		}
	}, {
		"_id": {
			"$oid": "63dd80c7ae4e72499fcbd84b"
		},
		"id": "8a1343e6-20ed-45ec-95b3-9176b311e2e1",
		"time": {
			"$numberLong": "1675460807145"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198993821854",
		"killerId": "76561199077519774",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91796.18,
			"y": 2194.4468,
			"z": 85952.45
		},
		"victimPosition": {
			"x": 91906.47,
			"y": 2257.1675,
			"z": 85677.12
		},
		"killerVelocity": {
			"x": 141.81029,
			"y": 61.845043,
			"z": -320.70248
		},
		"victimVelocity": {
			"x": 135.70842,
			"y": 59.353092,
			"z": -291.6959
		}
	}, {
		"_id": {
			"$oid": "63dd8231ae4e72499fcbd867"
		},
		"id": "9d1115e4-0b1f-4624-8a36-2a55fc9ed2fd",
		"time": {
			"$numberLong": "1675461169289"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199077519774",
		"killerId": "76561198993821854",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61742.58,
			"y": 2915.3533,
			"z": 113090.555
		},
		"victimPosition": {
			"x": 61440.03,
			"y": 2990.3755,
			"z": 113082.45
		},
		"killerVelocity": {
			"x": 337.07526,
			"y": 13.728865,
			"z": -52.30894
		},
		"victimVelocity": {
			"x": 178.63074,
			"y": 54.512028,
			"z": -66.217
		}
	}, {
		"_id": {
			"$oid": "63dd8b42ae4e72499fcbd93e"
		},
		"id": "33ea064b-c06e-469d-a9a4-bc03aecd2000",
		"time": {
			"$numberLong": "1675463490670"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199098132645",
		"killerId": "76561198272370133",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51971.785,
			"y": 290.94968,
			"z": 118588.086
		},
		"victimPosition": {
			"x": 51433.082,
			"y": 279.39313,
			"z": 118674.46
		},
		"killerVelocity": {
			"x": -141.08073,
			"y": -5.315807,
			"z": -33.15289
		},
		"victimVelocity": {
			"x": -0.0025320745,
			"y": -0.0002786219,
			"z": -0.0011653963
		}
	}, {
		"_id": {
			"$oid": "63dd98b9ae4e72499fcbda41"
		},
		"id": "b9fb3019-fe1e-4c74-b024-16db89b201b4",
		"time": {
			"$numberLong": "1675466937302"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198398399456",
		"killerId": "76561199021740589",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61100.45,
			"y": 1083.1538,
			"z": 96500.164
		},
		"victimPosition": {
			"x": 57266.49,
			"y": 2853.192,
			"z": 109582.586
		},
		"killerVelocity": {
			"x": -97.22977,
			"y": 14.092081,
			"z": 262.2979
		},
		"victimVelocity": {
			"x": -59.328438,
			"y": -249.73026,
			"z": -180.05923
		}
	}, {
		"_id": {
			"$oid": "63ddd737ae4e72499fcbde1b"
		},
		"id": "be802b2a-dca8-4cee-9500-b6a5df08de4e",
		"time": {
			"$numberLong": "1675482935288"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198881266955",
		"killerId": "76561199401617081",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52645.246,
			"y": 310.4265,
			"z": 119006.85
		},
		"victimPosition": {
			"x": 52699.242,
			"y": 323.06363,
			"z": 119056.39
		},
		"killerVelocity": {
			"x": 92.74141,
			"y": 19.182981,
			"z": 39.563755
		},
		"victimVelocity": {
			"x": -0.18776059,
			"y": 6.0629377,
			"z": -3.4743304
		}
	}, {
		"_id": {
			"$oid": "63dded1091c1eb4fd052c501"
		},
		"id": "9fd184e9-0e33-46d7-b8d3-38b37e960619",
		"time": {
			"$numberLong": "1675488528062"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 1,
		"victimId": "76561198224075748",
		"killerId": "76561197972401275",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 76790.26,
			"y": 1314.6913,
			"z": 86540.94
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 45.651466,
			"y": 56.950657,
			"z": -223.74173
		}
	}, {
		"_id": {
			"$oid": "63de688191c1eb4fd052c8ec"
		},
		"id": "29275b0e-5374-4d0f-9f96-34617f0dc8a9",
		"time": {
			"$numberLong": "1675520129619"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198122505723",
		"killerId": "76561199430399132",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59024.92,
			"y": 3071.598,
			"z": 109968.35
		},
		"victimPosition": {
			"x": 64045.08,
			"y": 1985.996,
			"z": 101571.55
		},
		"killerVelocity": {
			"x": 244.6192,
			"y": -46.653637,
			"z": -246.91508
		},
		"victimVelocity": {
			"x": -239.74051,
			"y": -44.053368,
			"z": -295.06366
		}
	}, {
		"_id": {
			"$oid": "63de79da91c1eb4fd052c97f"
		},
		"id": "a38671c5-c2f7-463c-b0e8-b10ffb19191a",
		"time": {
			"$numberLong": "1675524570958"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199004624248",
		"killerId": "76561199081317615",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55169.15,
			"y": 577.2329,
			"z": 116956.03
		},
		"victimPosition": {
			"x": 55982.27,
			"y": 275.20462,
			"z": 115291.48
		},
		"killerVelocity": {
			"x": 155.64597,
			"y": 15.998328,
			"z": -157.72197
		},
		"victimVelocity": {
			"x": 7.2220826,
			"y": 27.71302,
			"z": -121.7545
		}
	}, {
		"_id": {
			"$oid": "63de7b1891c1eb4fd052c99e"
		},
		"id": "60cbd4cf-6f41-45fd-b92c-bb136b841035",
		"time": {
			"$numberLong": "1675524888554"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199081317615",
		"killerId": "76561199004624248",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51635.445,
			"y": 281.9493,
			"z": 118740.734
		},
		"victimPosition": {
			"x": 52509.492,
			"y": 279.3042,
			"z": 118962.27
		},
		"killerVelocity": {
			"x": 84.22161,
			"y": 2.7609913,
			"z": 20.015753
		},
		"victimVelocity": {
			"x": 32.65346,
			"y": 3.896643,
			"z": -5.3247576
		}
	}, {
		"_id": {
			"$oid": "63de7b3e91c1eb4fd052c9a1"
		},
		"id": "6646eca7-7fa7-469d-b249-cb6767de7b60",
		"time": {
			"$numberLong": "1675524926995"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199081317615",
		"killerId": "76561199004624248",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53264.934,
			"y": 706.10095,
			"z": 118193.61
		},
		"victimPosition": {
			"x": 51574.36,
			"y": 279.42642,
			"z": 118663.195
		},
		"killerVelocity": {
			"x": -147.83977,
			"y": 36.122837,
			"z": 107.56526
		},
		"victimVelocity": {
			"x": 1.0038148,
			"y": -0.21732187,
			"z": -4.8772326
		}
	}, {
		"_id": {
			"$oid": "63de96df91c1eb4fd052cb71"
		},
		"id": "514262a3-9c97-4166-beab-c9168e60c980",
		"time": {
			"$numberLong": "1675531999669"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198159280625",
		"killerId": "76561198093124125",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99417.63,
			"y": 616.91656,
			"z": 102996.805
		},
		"victimPosition": {
			"x": 51855.297,
			"y": 279.38235,
			"z": 118856.42
		},
		"killerVelocity": {
			"x": 230.03558,
			"y": 7.152267,
			"z": 139.37662
		},
		"victimVelocity": {
			"x": 28.780014,
			"y": 0.11335962,
			"z": 31.505392
		}
	}, {
		"_id": {
			"$oid": "63dea82691c1eb4fd052cc9f"
		},
		"id": "ca07f2e0-dbbb-4324-adc5-d64bf238c8ec",
		"time": {
			"$numberLong": "1675536422400"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199211077519",
		"killerId": "76561198353391886",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105908.21,
			"y": 2970.605,
			"z": 60683.457
		},
		"victimPosition": {
			"x": 104787.516,
			"y": 3211.7563,
			"z": 60245.14
		},
		"killerVelocity": {
			"x": -152.07599,
			"y": 34.431904,
			"z": -121.053635
		},
		"victimVelocity": {
			"x": -144.21059,
			"y": -26.319393,
			"z": -87.19202
		}
	}, {
		"_id": {
			"$oid": "63deaaf391c1eb4fd052cce1"
		},
		"id": "3f45f09e-819c-4933-97ac-4d744cd904ab",
		"time": {
			"$numberLong": "1675537139629"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198353391886",
		"killerId": "76561198837549303",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84615.195,
			"y": 1887.5591,
			"z": 79861.33
		},
		"victimPosition": {
			"x": 82944.53,
			"y": 1298.3556,
			"z": 83997.04
		},
		"killerVelocity": {
			"x": -138.60284,
			"y": -56.32228,
			"z": 221.17468
		},
		"victimVelocity": {
			"x": 72.5352,
			"y": -7.398118,
			"z": -370.34265
		}
	}, {
		"_id": {
			"$oid": "63dedaf891c1eb4fd052d0e9"
		},
		"id": "003f347a-f46c-4be8-b6ed-01cba0950c5b",
		"time": {
			"$numberLong": "1675549432833"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198273219775",
		"killerId": "76561199091915706",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107843.88,
			"y": 1464.7113,
			"z": 89061.84
		},
		"victimPosition": {
			"x": 107480.336,
			"y": 1578.3358,
			"z": 89998.49
		},
		"killerVelocity": {
			"x": -131.77393,
			"y": 4.886399,
			"z": 213.4403
		},
		"victimVelocity": {
			"x": -188.76973,
			"y": 61.526554,
			"z": -110.06878
		}
	}, {
		"_id": {
			"$oid": "63def85791c1eb4fd052d2d4"
		},
		"id": "e085a748-5398-4cfd-a7c6-52b12142c116",
		"time": {
			"$numberLong": "1675556951675"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198151068299",
		"killerId": "76561199348602335",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67063.984,
			"y": 6020.238,
			"z": 101593.836
		},
		"victimPosition": {
			"x": 66091.74,
			"y": 1567.9962,
			"z": 108323.3
		},
		"killerVelocity": {
			"x": 199.1651,
			"y": 3.9738758,
			"z": -273.19232
		},
		"victimVelocity": {
			"x": -126.05842,
			"y": -85.25488,
			"z": 193.2493
		}
	}, {
		"_id": {
			"$oid": "63def86591c1eb4fd052d2d7"
		},
		"id": "a739e67f-3a6f-4c19-a90d-d5a1ad045c54",
		"time": {
			"$numberLong": "1675556965258"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199454362072",
		"killerId": "76561199348602335",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69265.45,
			"y": 4140.1846,
			"z": 98563.945
		},
		"victimPosition": {
			"x": 69097.95,
			"y": 2788.9429,
			"z": 106392.74
		},
		"killerVelocity": {
			"x": 130.6517,
			"y": -272.44485,
			"z": -188.18309
		},
		"victimVelocity": {
			"x": -117.17077,
			"y": 57.059483,
			"z": 102.65952
		}
	}, {
		"_id": {
			"$oid": "63def91891c1eb4fd052d2e3"
		},
		"id": "29595e27-cad6-472f-bc36-32a12ed23052",
		"time": {
			"$numberLong": "1675557144863"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198853861248",
		"killerId": "76561199454362072",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54026.96,
			"y": 862.3406,
			"z": 118761.984
		},
		"victimPosition": {
			"x": 53005.637,
			"y": 280.71713,
			"z": 119077.93
		},
		"killerVelocity": {
			"x": -129.88228,
			"y": -77.39455,
			"z": 47.160732
		},
		"victimVelocity": {
			"x": 85.10494,
			"y": -2.161945,
			"z": 21.617748
		}
	}, {
		"_id": {
			"$oid": "63def92491c1eb4fd052d2e5"
		},
		"id": "0a8b6be0-1bed-4f73-a0ab-f7a7dc77055b",
		"time": {
			"$numberLong": "1675557156821"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199401617081",
		"killerId": "76561199454362072",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51988.543,
			"y": 285.67725,
			"z": 118773.84
		},
		"victimPosition": {
			"x": 51885.566,
			"y": 279.46362,
			"z": 118797.45
		},
		"killerVelocity": {
			"x": -190.57336,
			"y": -21.99729,
			"z": -53.10781
		},
		"victimVelocity": {
			"x": -0.0006183328,
			"y": -0.00026264042,
			"z": 0.00005298052
		}
	}, {
		"_id": {
			"$oid": "63deff4e91c1eb4fd052d34b"
		},
		"id": "7f9d243d-645a-4875-880c-ff0bbe80f6a3",
		"time": {
			"$numberLong": "1675558734237"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199111012401",
		"killerId": "76561199401617081",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51581.277,
			"y": 279.40942,
			"z": 118736.42
		},
		"victimPosition": {
			"x": 51683.027,
			"y": 279.45538,
			"z": 118757.93
		},
		"killerVelocity": {
			"x": 1.4656978,
			"y": 0.018664487,
			"z": 0.33280197
		},
		"victimVelocity": {
			"x": -4.341832,
			"y": -0.07755047,
			"z": -1.4252104
		}
	}, {
		"_id": {
			"$oid": "63df0eb291c1eb4fd052d421"
		},
		"id": "087c4bde-bdd4-494f-bbe6-24bf860332f5",
		"time": {
			"$numberLong": "1675562674747"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198045340033",
		"killerId": "76561198137400008",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65773.695,
			"y": 1175.155,
			"z": 110399.555
		},
		"victimPosition": {
			"x": 70582.41,
			"y": 1106.7695,
			"z": 106151.414
		},
		"killerVelocity": {
			"x": 255.90213,
			"y": 98.831024,
			"z": -210.70695
		},
		"victimVelocity": {
			"x": 255.94173,
			"y": -142.53098,
			"z": 59.917873
		}
	}, {
		"_id": {
			"$oid": "63df1a0491c1eb4fd052d52c"
		},
		"id": "96aa03a2-cb36-4a2d-b4c4-7ece64061dbb",
		"time": {
			"$numberLong": "1675565572925"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198203026585",
		"killerId": "76561198398399456",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68509.93,
			"y": 1104.4152,
			"z": 106499.586
		},
		"victimPosition": {
			"x": 69013.555,
			"y": 921.5812,
			"z": 104183.12
		},
		"killerVelocity": {
			"x": 94.58703,
			"y": -39.384842,
			"z": -329.27786
		},
		"victimVelocity": {
			"x": -183.20792,
			"y": 9.662867,
			"z": -237.22055
		}
	}, {
		"_id": {
			"$oid": "63df1b6e91c1eb4fd052d55c"
		},
		"id": "447046b7-c136-4c9e-b860-43db95e604ea",
		"time": {
			"$numberLong": "1675565934604"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198957618722",
		"killerId": "76561198398399456",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55067.566,
			"y": 515.44824,
			"z": 118983.59
		},
		"victimPosition": {
			"x": 55482.438,
			"y": 551.82996,
			"z": 119075.88
		},
		"killerVelocity": {
			"x": 204.63017,
			"y": 42.59523,
			"z": 17.58395
		},
		"victimVelocity": {
			"x": 252.17314,
			"y": 15.666222,
			"z": -2.853772
		}
	}, {
		"_id": {
			"$oid": "63df2b4691c1eb4fd052d6e4"
		},
		"id": "bda22bfe-1de3-4f49-ba71-7f6236367a6d",
		"time": {
			"$numberLong": "1675569990882"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198842488484",
		"killerId": "76561199075177924",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108870.914,
			"y": 2729.3284,
			"z": 82907.43
		},
		"victimPosition": {
			"x": 114318.445,
			"y": 3047.8345,
			"z": 79108.555
		},
		"killerVelocity": {
			"x": 327.05466,
			"y": 11.77245,
			"z": -212.1759
		},
		"victimVelocity": {
			"x": 252.87056,
			"y": 47.60198,
			"z": -175.1415
		}
	}, {
		"_id": {
			"$oid": "63df337591c1eb4fd052d7bd"
		},
		"id": "9ce2e53d-9e89-4d04-8db9-2d4f3b5d7fe3",
		"time": {
			"$numberLong": "1675572085870"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199075177924",
		"killerId": "76561199204183300",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52168.965,
			"y": 581.2406,
			"z": 117206.32
		},
		"victimPosition": {
			"x": 52438.684,
			"y": 327.89264,
			"z": 116591.2
		},
		"killerVelocity": {
			"x": 71.127884,
			"y": -83.062996,
			"z": -160.46237
		},
		"victimVelocity": {
			"x": -16.882866,
			"y": 0.20618595,
			"z": -19.35693
		}
	}, {
		"_id": {
			"$oid": "63df381091c1eb4fd052d841"
		},
		"id": "54720164-2034-402e-a391-8799297d4595",
		"time": {
			"$numberLong": "1675573264741"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198151068299",
		"killerId": "76561199091915706",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55435.32,
			"y": 796.3744,
			"z": 112408.47
		},
		"victimPosition": {
			"x": 55702.99,
			"y": 609.2764,
			"z": 110900.914
		},
		"killerVelocity": {
			"x": 148.9903,
			"y": 29.526648,
			"z": -244.87662
		},
		"victimVelocity": {
			"x": 4.7733355,
			"y": 25.642313,
			"z": -69.02822
		}
	}, {
		"_id": {
			"$oid": "63df3f6291c1eb4fd052d909"
		},
		"id": "7c4ef75e-5609-44e7-8b0b-d5d063414351",
		"time": {
			"$numberLong": "1675575138939"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198333654057",
		"killerId": "76561198403072318",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59345.273,
			"y": 802.7709,
			"z": 110908.484
		},
		"victimPosition": {
			"x": 61677.562,
			"y": 405.10794,
			"z": 112309.45
		},
		"killerVelocity": {
			"x": 156.80066,
			"y": 0.4510964,
			"z": -208.86655
		},
		"victimVelocity": {
			"x": -180.01744,
			"y": -30.938856,
			"z": 186.35332
		}
	}, {
		"_id": {
			"$oid": "63df620e91c1eb4fd052db1d"
		},
		"id": "1069b0c4-7d09-4f75-8ef9-adb8898cd5ec",
		"time": {
			"$numberLong": "1675584014706"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198333654057",
		"killerId": "76561198128418112",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63955.13,
			"y": 1255.0073,
			"z": 111220.33
		},
		"victimPosition": {
			"x": 67161.58,
			"y": 765.8976,
			"z": 107481.55
		},
		"killerVelocity": {
			"x": 109.83706,
			"y": 4.706021,
			"z": -158.75809
		},
		"victimVelocity": {
			"x": -210.07387,
			"y": -52.42532,
			"z": -87.3177
		}
	}, {
		"_id": {
			"$oid": "63df62da91c1eb4fd052db2d"
		},
		"id": "b5b9a8b3-9a98-48e0-9ddf-5a84c36e6cd4",
		"time": {
			"$numberLong": "1675584218405"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198062141451",
		"killerId": "76561198333654057",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76526.78,
			"y": 798.6934,
			"z": 100532.86
		},
		"victimPosition": {
			"x": 81832.26,
			"y": 430.26263,
			"z": 100465.91
		},
		"killerVelocity": {
			"x": -59.185745,
			"y": -30.416538,
			"z": -335.43887
		},
		"victimVelocity": {
			"x": -128.2983,
			"y": -80.71434,
			"z": 245.38995
		}
	}, {
		"_id": {
			"$oid": "63df7e4891c1eb4fd052dcee"
		},
		"id": "d8d85794-f1d0-4ab6-94da-9aa50fa8940b",
		"time": {
			"$numberLong": "1675591240378"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198361882591",
		"killerId": "76561199068349687",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67784.86,
			"y": 1694.71,
			"z": 98101.88
		},
		"victimPosition": {
			"x": 68547.4,
			"y": 1244.5438,
			"z": 95901.914
		},
		"killerVelocity": {
			"x": 295.7189,
			"y": 7.220704,
			"z": -156.52188
		},
		"victimVelocity": {
			"x": 6.9029274,
			"y": 5.9423094,
			"z": 0.13813376
		}
	}, {
		"_id": {
			"$oid": "63df8b9391c1eb4fd052ddc9"
		},
		"id": "315653b4-ecd3-4b0f-9e7b-9107627c20aa",
		"time": {
			"$numberLong": "1675594643993"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198021447324",
		"killerId": "76561198357196685",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57712.152,
			"y": 908.32074,
			"z": 116535.7
		},
		"victimPosition": {
			"x": 61612.51,
			"y": 1588.6678,
			"z": 110532.664
		},
		"killerVelocity": {
			"x": 137.7732,
			"y": 24.778936,
			"z": -169.74228
		},
		"victimVelocity": {
			"x": -262.1425,
			"y": -37.498493,
			"z": 30.174347
		}
	}, {
		"_id": {
			"$oid": "63dfd17491c1eb4fd052e06b"
		},
		"id": "691c3d48-fd62-40b5-83f3-c321952892df",
		"time": {
			"$numberLong": "1675612532071"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199232381554",
		"killerId": "76561198259385113",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59602.184,
			"y": 1896.8701,
			"z": 86058.6
		},
		"victimPosition": {
			"x": 61166.117,
			"y": 1662.9469,
			"z": 86890.12
		},
		"killerVelocity": {
			"x": 29.448984,
			"y": 26.610683,
			"z": -311.9182
		},
		"victimVelocity": {
			"x": 176.1648,
			"y": -65.78575,
			"z": 47.199776
		}
	}, {
		"_id": {
			"$oid": "63dfdfc491c1eb4fd052e175"
		},
		"id": "3df78aec-5b62-4adc-9580-0249187defd6",
		"time": {
			"$numberLong": "1675616196109"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198122505723",
		"killerId": "76561198017205919",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100344.09,
			"y": 1934.1965,
			"z": 86545.63
		},
		"victimPosition": {
			"x": 101253.625,
			"y": 1526.489,
			"z": 86557.805
		},
		"killerVelocity": {
			"x": 268.37045,
			"y": -44.068325,
			"z": -111.11218
		},
		"victimVelocity": {
			"x": 173.79997,
			"y": -131.06589,
			"z": 38.911785
		}
	}, {
		"_id": {
			"$oid": "63dfdfcd91c1eb4fd052e179"
		},
		"id": "b9adfa1c-3e05-4b02-a162-23bd9d9ea608",
		"time": {
			"$numberLong": "1675616205384"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 2,
		"victimId": "76561198995258258",
		"killerId": "76561198122505723",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 104694.336,
			"y": 1124.5416,
			"z": 88150.36
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 75.30199,
			"y": -8.845398,
			"z": 144.99179
		}
	}, {
		"_id": {
			"$oid": "63dfe73591c1eb4fd052e21a"
		},
		"id": "3c85c2e6-9542-473d-9dca-8a14806103c1",
		"time": {
			"$numberLong": "1675618101779"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198942595372",
		"killerId": "76561198349188274",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93220.1,
			"y": 1663.6362,
			"z": 88874.94
		},
		"victimPosition": {
			"x": 94264.79,
			"y": 1902.5153,
			"z": 87758.32
		},
		"killerVelocity": {
			"x": 208.29341,
			"y": 18.524302,
			"z": -187.54652
		},
		"victimVelocity": {
			"x": 124.00057,
			"y": 85.03375,
			"z": -286.88525
		}
	}, {
		"_id": {
			"$oid": "63dff86d91c1eb4fd052e3dd"
		},
		"id": "0c383e62-295c-4a06-8d36-8ce2e85dbe7d",
		"time": {
			"$numberLong": "1675622509864"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198814668144",
		"killerId": "76561199110963905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68774.94,
			"y": 2295.5598,
			"z": 109953.68
		},
		"victimPosition": {
			"x": 72401.43,
			"y": 4143.5522,
			"z": 109407.984
		},
		"killerVelocity": {
			"x": 326.01202,
			"y": -2.3066294,
			"z": -121.28826
		},
		"victimVelocity": {
			"x": 162.56795,
			"y": 110.2126,
			"z": 181.53157
		}
	}, {
		"_id": {
			"$oid": "63dff89491c1eb4fd052e3e2"
		},
		"id": "b5872fd2-6379-46f3-8964-7438c752d00d",
		"time": {
			"$numberLong": "1675622548259"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198301537677",
		"killerId": "76561199110963905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79945.23,
			"y": 2866.9172,
			"z": 102126.65
		},
		"victimPosition": {
			"x": 82281.695,
			"y": 2722.4543,
			"z": 97698.734
		},
		"killerVelocity": {
			"x": 197.65839,
			"y": -16.182806,
			"z": -328.16638
		},
		"victimVelocity": {
			"x": -208.9816,
			"y": -100.68543,
			"z": -106.65382
		}
	}, {
		"_id": {
			"$oid": "63e0091891c1eb4fd052e56a"
		},
		"id": "436946a2-55aa-4853-a319-099547def989",
		"time": {
			"$numberLong": "1675626776889"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199401436824",
		"killerId": "76561197964453288",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67812.664,
			"y": 6774.4937,
			"z": 96937.86
		},
		"victimPosition": {
			"x": 80009.89,
			"y": 1305.6731,
			"z": 84785.31
		},
		"killerVelocity": {
			"x": 178.84589,
			"y": -87.59089,
			"z": 135.01909
		},
		"victimVelocity": {
			"x": -227.4386,
			"y": -36.42649,
			"z": -26.74572
		}
	}, {
		"_id": {
			"$oid": "63e01cff91c1eb4fd052e7a5"
		},
		"id": "54caec8c-e9e3-416b-a773-d7ccfe82ebfc",
		"time": {
			"$numberLong": "1675631871866"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198162533006",
		"killerId": "76561198846150567",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53565.8,
			"y": 414.2391,
			"z": 119202.75
		},
		"victimPosition": {
			"x": 53155.08,
			"y": 283.37225,
			"z": 119120.586
		},
		"killerVelocity": {
			"x": 120.83923,
			"y": 26.488607,
			"z": 26.758047
		},
		"victimVelocity": {
			"x": 54.041794,
			"y": 7.545117,
			"z": 20.458723
		}
	}, {
		"_id": {
			"$oid": "63e01f2c91c1eb4fd052e7e5"
		},
		"id": "2e40ca58-dea2-4a10-83dc-63f261bcde32",
		"time": {
			"$numberLong": "1675632428747"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197988819171",
		"killerId": "76561198318323077",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69485.98,
			"y": 2312.822,
			"z": 94666.13
		},
		"victimPosition": {
			"x": 75374.48,
			"y": 1657.5608,
			"z": 85041.164
		},
		"killerVelocity": {
			"x": 131.67975,
			"y": 18.251421,
			"z": -359.4743
		},
		"victimVelocity": {
			"x": 9.358567,
			"y": -23.889189,
			"z": -90.83115
		}
	}, {
		"_id": {
			"$oid": "63e042d191c1eb4fd052eb2f"
		},
		"id": "8a15f652-0d98-495e-8a60-ad83a58ff1f2",
		"time": {
			"$numberLong": "1675641553639"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199430399132",
		"killerId": "76561199066284206",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 86973.79,
			"y": 2667.9846,
			"z": 101622.664
		},
		"victimPosition": {
			"x": 97939.78,
			"y": 3030.263,
			"z": 101893.625
		},
		"killerVelocity": {
			"x": 292.9745,
			"y": 23.42171,
			"z": -0.11098671
		},
		"victimVelocity": {
			"x": -158.45114,
			"y": 131.25142,
			"z": 265.73297
		}
	}, {
		"_id": {
			"$oid": "63e0432a91c1eb4fd052eb40"
		},
		"id": "5bd376c4-2494-4be1-91d2-0d651cb4dc81",
		"time": {
			"$numberLong": "1675641642621"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198394145047",
		"killerId": "76561199262902608",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51861.81,
			"y": 1942.1442,
			"z": 99508.48
		},
		"victimPosition": {
			"x": 53459.938,
			"y": 2015.5385,
			"z": 97708.96
		},
		"killerVelocity": {
			"x": 219.57588,
			"y": 12.116211,
			"z": -246.65454
		},
		"victimVelocity": {
			"x": 299.5672,
			"y": -43.89575,
			"z": -48.72969
		}
	}, {
		"_id": {
			"$oid": "63e043e991c1eb4fd052eb57"
		},
		"id": "d010ae2a-31ff-4122-93da-70eafb777bff",
		"time": {
			"$numberLong": "1675641833544"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561198394145047",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71042.914,
			"y": 902.4436,
			"z": 100216.945
		},
		"victimPosition": {
			"x": 73525.27,
			"y": 1499.8018,
			"z": 93256.65
		},
		"killerVelocity": {
			"x": 256.41464,
			"y": -4.100876,
			"z": -257.70474
		},
		"victimVelocity": {
			"x": -22.94123,
			"y": -21.311722,
			"z": -137.17552
		}
	}, {
		"_id": {
			"$oid": "63e04b1891c1eb4fd052ec02"
		},
		"id": "02896884-4c3e-405d-bd3f-901e7f02894b",
		"time": {
			"$numberLong": "1675643672096"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198963195327",
		"killerId": "76561198371174881",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 94314.31,
			"y": 1290.2986,
			"z": 80160.59
		},
		"victimPosition": {
			"x": 93554.41,
			"y": 1158.551,
			"z": 79519.586
		},
		"killerVelocity": {
			"x": 160.23715,
			"y": 44.459446,
			"z": -222.84596
		},
		"victimVelocity": {
			"x": -102.17012,
			"y": -18.769257,
			"z": -35.420837
		}
	}, {
		"_id": {
			"$oid": "63e04b8691c1eb4fd052ec0a"
		},
		"id": "61fea8a9-604d-4d51-809c-2520888e6c1b",
		"time": {
			"$numberLong": "1675643782957"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198273373662",
		"killerId": "76561198401283545",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 117596.15,
			"y": 2546.3079,
			"z": 58817.75
		},
		"victimPosition": {
			"x": 118083.31,
			"y": 2705.2603,
			"z": 58236.22
		},
		"killerVelocity": {
			"x": 256.9353,
			"y": 22.01831,
			"z": -92.37689
		},
		"victimVelocity": {
			"x": 48.786125,
			"y": -9.790711,
			"z": -109.5118
		}
	}, {
		"_id": {
			"$oid": "63e057de91c1eb4fd052ecf7"
		},
		"id": "31dd8d92-07c9-4217-90b7-79a571a3bc81",
		"time": {
			"$numberLong": "1675646942302"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198963014184",
		"killerId": "76561198113773798",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50784.46,
			"y": 279.48346,
			"z": 118301.125
		},
		"victimPosition": {
			"x": 53724.242,
			"y": 280.88757,
			"z": 118996.836
		},
		"killerVelocity": {
			"x": -0.00010851424,
			"y": -0.0001944676,
			"z": 0.00089452224
		},
		"victimVelocity": {
			"x": 96.92565,
			"y": 48.11669,
			"z": 22.589165
		}
	}, {
		"_id": {
			"$oid": "63e05e8691c1eb4fd052ed68"
		},
		"id": "4533e7b0-9d70-4164-b8f1-192d5fbd8482",
		"time": {
			"$numberLong": "1675648646782"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561198809356158",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 116947.08,
			"y": 1676.127,
			"z": 88443.375
		},
		"victimPosition": {
			"x": 119923.02,
			"y": 1006.94403,
			"z": 89000.266
		},
		"killerVelocity": {
			"x": 216.07996,
			"y": 26.591612,
			"z": 238.16084
		},
		"victimVelocity": {
			"x": 106.75677,
			"y": -110.817955,
			"z": -113.00803
		}
	}, {
		"_id": {
			"$oid": "63e066ce91c1eb4fd052ee37"
		},
		"id": "46087f24-7c2e-4794-b89c-46f36c8422bd",
		"time": {
			"$numberLong": "1675650766576"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198042557380",
		"killerId": "76561199096889160",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 110763.4,
			"y": 1899.354,
			"z": 58265.703
		},
		"victimPosition": {
			"x": 110145.695,
			"y": 2670.1516,
			"z": 56332.414
		},
		"killerVelocity": {
			"x": -85.7095,
			"y": 81.260475,
			"z": -219.07983
		},
		"victimVelocity": {
			"x": 237.14871,
			"y": 196.8834,
			"z": 39.897022
		}
	}, {
		"_id": {
			"$oid": "63e06a3991c1eb4fd052ee78"
		},
		"id": "10f39999-835c-47e2-869f-ffa59ab9eaf0",
		"time": {
			"$numberLong": "1675651641386"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199122157571",
		"killerId": "76561199085165741",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 99466.25,
			"y": 2543.6562,
			"z": 76212.336
		},
		"victimPosition": {
			"x": 99608.664,
			"y": 2538.7544,
			"z": 76220.914
		},
		"killerVelocity": {
			"x": 282.83057,
			"y": -13.068896,
			"z": 17.388062
		},
		"victimVelocity": {
			"x": 194.9773,
			"y": 6.416356,
			"z": -0.42355314
		}
	}, {
		"_id": {
			"$oid": "63e0712991c1eb4fd052ef02"
		},
		"id": "00eb4d38-c8aa-4fbb-98ae-a71d89d2ff49",
		"time": {
			"$numberLong": "1675653417920"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198241443978",
		"killerId": "76561198021051271",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65937.125,
			"y": 988.11053,
			"z": 110314.26
		},
		"victimPosition": {
			"x": 66471.73,
			"y": 383.0157,
			"z": 112137.23
		},
		"killerVelocity": {
			"x": 113.56124,
			"y": -80.70949,
			"z": 239.42416
		},
		"victimVelocity": {
			"x": -322.6761,
			"y": -33.33095,
			"z": 128.31314
		}
	}, {
		"_id": {
			"$oid": "63e0758891c1eb4fd052ef61"
		},
		"id": "b83ae683-63ef-437a-9e62-e4bc57c576e9",
		"time": {
			"$numberLong": "1675654536673"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199383285190",
		"killerId": "76561199181761579",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51109.926,
			"y": 279.40277,
			"z": 118555.8
		},
		"victimPosition": {
			"x": 50728.64,
			"y": 279.45865,
			"z": 118329.54
		},
		"killerVelocity": {
			"x": -9.065669,
			"y": -0.20704137,
			"z": -4.6752505
		},
		"victimVelocity": {
			"x": 7.7565684,
			"y": -0.0022126585,
			"z": -5.4852977
		}
	}, {
		"_id": {
			"$oid": "63e07be991c1eb4fd052efee"
		},
		"id": "7e5922ec-ccda-4793-ba7f-1613f7573287",
		"time": {
			"$numberLong": "1675656169774"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198893914226",
		"killerId": "76561199072886643",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72993.55,
			"y": 997.6939,
			"z": 112642.46
		},
		"victimPosition": {
			"x": 80043.266,
			"y": 1115.2021,
			"z": 112811.2
		},
		"killerVelocity": {
			"x": 361.79153,
			"y": 7.673202,
			"z": -25.006342
		},
		"victimVelocity": {
			"x": -205.04099,
			"y": 130.8485,
			"z": -126.60632
		}
	}, {
		"_id": {
			"$oid": "63e0952591c1eb4fd052f271"
		},
		"id": "5b6c131d-a4e6-400e-9438-4445b79c1a3c",
		"time": {
			"$numberLong": "1675662629015"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 8,
		"victimId": "76561198061665751",
		"killerId": "76561198011136826",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91518.93,
			"y": 3929.956,
			"z": 83927.336
		},
		"victimPosition": {
			"x": 88918.59,
			"y": 5382.3174,
			"z": 84293.49
		},
		"killerVelocity": {
			"x": -308.28204,
			"y": 164.13252,
			"z": 57.299065
		},
		"victimVelocity": {
			"x": -159.71701,
			"y": 129.59543,
			"z": -175.5043
		}
	}, {
		"_id": {
			"$oid": "63e0a5a691c1eb4fd052f39f"
		},
		"id": "0bf11bd5-4fde-4cf2-8136-2c3205fe64f7",
		"time": {
			"$numberLong": "1675666854748"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199121980374",
		"killerId": "76561198141438087",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 119250.62,
			"y": 1020.77747,
			"z": 90510.57
		},
		"victimPosition": {
			"x": 119483.9,
			"y": 702.32544,
			"z": 89343.695
		},
		"killerVelocity": {
			"x": 98.43474,
			"y": -67.66449,
			"z": -292.5406
		},
		"victimVelocity": {
			"x": -44.446594,
			"y": -47.741024,
			"z": -219.99799
		}
	}, {
		"_id": {
			"$oid": "63e0a64491c1eb4fd052f3a9"
		},
		"id": "ba9f4b1b-2039-42c0-85bb-c542438a20e8",
		"time": {
			"$numberLong": "1675667012424"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561198111942925",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 106652.95,
			"y": 1235.6901,
			"z": 81965.195
		},
		"victimPosition": {
			"x": 108903.77,
			"y": 2597.8145,
			"z": 63661.957
		},
		"killerVelocity": {
			"x": 146.57207,
			"y": -28.74246,
			"z": -132.51299
		},
		"victimVelocity": {
			"x": -156.07997,
			"y": 2.3933825,
			"z": 67.15258
		}
	}, {
		"_id": {
			"$oid": "63e120e391c1eb4fd052f59d"
		},
		"id": "31abc8da-bf05-4a81-b624-8d845bd46732",
		"time": {
			"$numberLong": "1675698403689"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198153622281",
		"killerId": "76561199233407202",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52826.902,
			"y": 545.2359,
			"z": 118412.17
		},
		"victimPosition": {
			"x": 52214.074,
			"y": 286.00558,
			"z": 118651.55
		},
		"killerVelocity": {
			"x": -158.96188,
			"y": -21.110481,
			"z": 78.68909
		},
		"victimVelocity": {
			"x": 133.01859,
			"y": 12.246466,
			"z": 30.574297
		}
	}, {
		"_id": {
			"$oid": "63e13c4191c1eb4fd052f785"
		},
		"id": "5bcac63c-c941-4207-8af4-59a4797500ab",
		"time": {
			"$numberLong": "1675705409161"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198238939100",
		"killerId": "76561198157604231",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112843.7,
			"y": 7968.362,
			"z": 104740.516
		},
		"victimPosition": {
			"x": 121112.445,
			"y": 10478.674,
			"z": 97646.54
		},
		"killerVelocity": {
			"x": 98.44092,
			"y": -71.47826,
			"z": -335.25894
		},
		"victimVelocity": {
			"x": -127.85264,
			"y": -196.14023,
			"z": -221.71672
		}
	}, {
		"_id": {
			"$oid": "63e143c691c1eb4fd052f80f"
		},
		"id": "3e1568a3-8f71-45a6-a20e-d281a2559a42",
		"time": {
			"$numberLong": "1675707334380"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199082931375",
		"killerId": "76561198302619222",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 105079.73,
			"y": 1837.5238,
			"z": 77149.086
		},
		"victimPosition": {
			"x": 103317.08,
			"y": 1688.6022,
			"z": 79509.3
		},
		"killerVelocity": {
			"x": 46.564316,
			"y": -111.752106,
			"z": -335.1296
		},
		"victimVelocity": {
			"x": 4.460509,
			"y": -212.42664,
			"z": 218.08185
		}
	}, {
		"_id": {
			"$oid": "63e1502291c1eb4fd052f8eb"
		},
		"id": "363e20fe-d8f1-41fe-bf46-e7753193cd18",
		"time": {
			"$numberLong": "1675710498518"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199476494181",
		"killerId": "76561199014423708",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112410.29,
			"y": 3986.456,
			"z": 118435.695
		},
		"victimPosition": {
			"x": 111965.484,
			"y": 2820.976,
			"z": 129995.83
		},
		"killerVelocity": {
			"x": 352.2815,
			"y": 22.415344,
			"z": -214.41605
		},
		"victimVelocity": {
			"x": 65.96474,
			"y": -152.77039,
			"z": 33.74837
		}
	}, {
		"_id": {
			"$oid": "63e1510191c1eb4fd052f8f5"
		},
		"id": "85292eb0-e650-4b5d-96c2-10095e83427e",
		"time": {
			"$numberLong": "1675710721521"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199014423708",
		"killerId": "76561199407112637",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 157807.05,
			"y": 2189.9224,
			"z": 98147.55
		},
		"victimPosition": {
			"x": 157376.66,
			"y": 1638.7609,
			"z": 105049.945
		},
		"killerVelocity": {
			"x": -24.386497,
			"y": -29.125313,
			"z": 374.45108
		},
		"victimVelocity": {
			"x": -12.711957,
			"y": 25.266981,
			"z": -184.04323
		}
	}, {
		"_id": {
			"$oid": "63e1514391c1eb4fd052f8f8"
		},
		"id": "3a53894d-b624-4a74-8652-6d3d6654deac",
		"time": {
			"$numberLong": "1675710787470"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199476162702",
		"killerId": "76561199476494181",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55065.234,
			"y": 1213.3649,
			"z": 119091.61
		},
		"victimPosition": {
			"x": 52893.484,
			"y": 278.70712,
			"z": 119047.516
		},
		"killerVelocity": {
			"x": -286.39996,
			"y": -17.502117,
			"z": 53.868225
		},
		"victimVelocity": {
			"x": 79.90957,
			"y": -0.004130751,
			"z": 19.1243
		}
	}, {
		"_id": {
			"$oid": "63e1775c91c1eb4fd052fb11"
		},
		"id": "3f00dec0-1629-4166-8a93-d56e3f82474f",
		"time": {
			"$numberLong": "1675720540492"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198419618364",
		"killerId": "76561199060216189",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57261.246,
			"y": 3103.1638,
			"z": 117406.89
		},
		"victimPosition": {
			"x": 57561.66,
			"y": 3178.5742,
			"z": 117414.29
		},
		"killerVelocity": {
			"x": 184.32675,
			"y": 61.37451,
			"z": -15.10609
		},
		"victimVelocity": {
			"x": 118.38998,
			"y": -37.685127,
			"z": 5.8185554
		}
	}, {
		"_id": {
			"$oid": "63e177b291c1eb4fd052fb14"
		},
		"id": "b2d35dba-aafd-4922-9657-2fa28f27925b",
		"time": {
			"$numberLong": "1675720626652"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199060216189",
		"killerId": "76561199470187671",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58003.977,
			"y": 666.88,
			"z": 108627.086
		},
		"victimPosition": {
			"x": 58961.363,
			"y": 358.07657,
			"z": 110217.89
		},
		"killerVelocity": {
			"x": 84.07602,
			"y": -35.35876,
			"z": 120.95246
		},
		"victimVelocity": {
			"x": 149.64113,
			"y": -1.5420114,
			"z": 260.6356
		}
	}, {
		"_id": {
			"$oid": "63e191f491c1eb4fd052fd0b"
		},
		"id": "9bd043e9-f904-4c09-999f-612dfb9a0383",
		"time": {
			"$numberLong": "1675727348108"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198838708761",
		"killerId": "76561197965762255",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73281.03,
			"y": 628.3106,
			"z": 103363.32
		},
		"victimPosition": {
			"x": 71063.41,
			"y": 466.45886,
			"z": 102179.97
		},
		"killerVelocity": {
			"x": -128.07945,
			"y": -28.130898,
			"z": -106.7008
		},
		"victimVelocity": {
			"x": -131.63756,
			"y": 9.397,
			"z": 23.865597
		}
	}, {
		"_id": {
			"$oid": "63e196b691c1eb4fd052fd7e"
		},
		"id": "757dda19-c5f0-4cc0-be2f-58c8542c8a8c",
		"time": {
			"$numberLong": "1675728566631"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197965762255",
		"killerId": "76561199077948774",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 89242.875,
			"y": 1788.1821,
			"z": 80570.125
		},
		"victimPosition": {
			"x": 93995.06,
			"y": 3434.6758,
			"z": 80431.81
		},
		"killerVelocity": {
			"x": 98.72571,
			"y": -125.39523,
			"z": -316.5655
		},
		"victimVelocity": {
			"x": -134.16095,
			"y": -286.12732,
			"z": 105.46477
		}
	}, {
		"_id": {
			"$oid": "63e1979a91c1eb4fd052fd90"
		},
		"id": "608f681a-d318-4fda-b4e9-1796f356f309",
		"time": {
			"$numberLong": "1675728794939"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197965762255",
		"killerId": "76561199077948774",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77689.11,
			"y": 1200.0194,
			"z": 101199.09
		},
		"victimPosition": {
			"x": 86281.695,
			"y": 1117.184,
			"z": 105363.38
		},
		"killerVelocity": {
			"x": 346.46292,
			"y": -49.099583,
			"z": 160.82216
		},
		"victimVelocity": {
			"x": -168.85414,
			"y": 197.55156,
			"z": 54.952534
		}
	}, {
		"_id": {
			"$oid": "63e1a7e891c1eb4fd052ff1b"
		},
		"id": "e8af1da6-698e-44c8-a240-0a99dc180175",
		"time": {
			"$numberLong": "1675732968941"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199061241780",
		"killerId": "76561198973856898",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54690.535,
			"y": 450.76132,
			"z": 119023.57
		},
		"victimPosition": {
			"x": 54311.574,
			"y": 329.40152,
			"z": 119033.6
		},
		"killerVelocity": {
			"x": -52.494225,
			"y": -35.497246,
			"z": 313.11383
		},
		"victimVelocity": {
			"x": -151.78407,
			"y": -15.630519,
			"z": -15.509272
		}
	}, {
		"_id": {
			"$oid": "63e1c6ef91c1eb4fd05301a4"
		},
		"id": "1b5ae08e-37ca-4a19-9d24-94f4e82d6f56",
		"time": {
			"$numberLong": "1675740911786"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198121139531",
		"killerId": "76561198038207394",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63519.066,
			"y": 1495.6487,
			"z": 116467.016
		},
		"victimPosition": {
			"x": 57084.656,
			"y": 915.9475,
			"z": 111618.3
		},
		"killerVelocity": {
			"x": 221.75026,
			"y": -24.127174,
			"z": 146.28996
		},
		"victimVelocity": {
			"x": 52.388424,
			"y": -22.007044,
			"z": -78.57278
		}
	}, {
		"_id": {
			"$oid": "63e1cade91c1eb4fd05301d3"
		},
		"id": "662d7258-171c-410f-ae1b-23bd84028cd5",
		"time": {
			"$numberLong": "1675741918173"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198121139531",
		"killerId": "76561199035802542",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70071.15,
			"y": 1085.5093,
			"z": 105572.96
		},
		"victimPosition": {
			"x": 70062.36,
			"y": 834.65717,
			"z": 104709.63
		},
		"killerVelocity": {
			"x": 63.472782,
			"y": -24.905645,
			"z": -338.03085
		},
		"victimVelocity": {
			"x": -20.549078,
			"y": -92.820404,
			"z": -156.68231
		}
	}, {
		"_id": {
			"$oid": "63e1f05f91c1eb4fd0530446"
		},
		"id": "ca3ed123-a781-42ff-a037-71b37e341068",
		"time": {
			"$numberLong": "1675751519928"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198419618364",
		"killerId": "76561198333654057",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81097.4,
			"y": 579.68066,
			"z": 101646.66
		},
		"victimPosition": {
			"x": 82341.46,
			"y": 546.3463,
			"z": 100927.58
		},
		"killerVelocity": {
			"x": 146.11108,
			"y": 1.4430441,
			"z": -162.92773
		},
		"victimVelocity": {
			"x": 294.30515,
			"y": 31.82966,
			"z": -118.55645
		}
	}, {
		"_id": {
			"$oid": "63e1f7d391c1eb4fd05304a0"
		},
		"id": "e675a26a-cc0f-4e16-ad56-8cbcdcae77d6",
		"time": {
			"$numberLong": "1675753427073"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198089036550",
		"killerId": "76561199050110650",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 112731.66,
			"y": 1525.834,
			"z": 64930.754
		},
		"victimPosition": {
			"x": 114220.33,
			"y": 1414.9816,
			"z": 64019.83
		},
		"killerVelocity": {
			"x": -297.07513,
			"y": 4.6209493,
			"z": 168.33852
		},
		"victimVelocity": {
			"x": -25.854927,
			"y": -35.20788,
			"z": 88.673584
		}
	}, {
		"_id": {
			"$oid": "63e2072791c1eb4fd0530537"
		},
		"id": "58f2eedd-9ca9-4d43-9c7a-01dca432d551",
		"time": {
			"$numberLong": "1675757351445"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199442641427",
		"killerId": "76561198294831696",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98925.7,
			"y": 7540.5254,
			"z": 86274.31
		},
		"victimPosition": {
			"x": 88975.39,
			"y": 1306.017,
			"z": 89308.22
		},
		"killerVelocity": {
			"x": 175.92915,
			"y": -173.08667,
			"z": -141.55829
		},
		"victimVelocity": {
			"x": -5.3957424,
			"y": -108.736725,
			"z": -6.693703
		}
	}, {
		"_id": {
			"$oid": "63e2083191c1eb4fd0530546"
		},
		"id": "bc75be72-6fa8-4cf6-9527-8c7d6b1e1fc6",
		"time": {
			"$numberLong": "1675757617872"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199050110650",
		"killerId": "76561198294831696",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56940.527,
			"y": 714.9553,
			"z": 116219.05
		},
		"victimPosition": {
			"x": 55121.508,
			"y": 454.37708,
			"z": 118260.266
		},
		"killerVelocity": {
			"x": -204.90408,
			"y": 43.285038,
			"z": 273.5235
		},
		"victimVelocity": {
			"x": -158.46284,
			"y": -11.19623,
			"z": 182.03874
		}
	}, {
		"_id": {
			"$oid": "63e208a891c1eb4fd0530551"
		},
		"id": "006e690c-c582-4c36-bbbf-8623a1b527c5",
		"time": {
			"$numberLong": "1675757736576"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199442641427",
		"killerId": "76561198347930467",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74930.24,
			"y": 1618.3673,
			"z": 94440.28
		},
		"victimPosition": {
			"x": 74665.055,
			"y": 1455.9294,
			"z": 94533.45
		},
		"killerVelocity": {
			"x": 227.87004,
			"y": -92.23368,
			"z": -296.93466
		},
		"victimVelocity": {
			"x": 130.43867,
			"y": -37.44669,
			"z": -138.16342
		}
	}, {
		"_id": {
			"$oid": "63e258ae91c1eb4fd053085d"
		},
		"id": "9d6c16ef-6c95-4750-b667-77939ed9c41f",
		"time": {
			"$numberLong": "1675778222327"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199023812730",
		"killerId": "76561198040405786",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76950.74,
			"y": 1400.3395,
			"z": 94483.19
		},
		"victimPosition": {
			"x": 76473.445,
			"y": 1549.0038,
			"z": 93829.83
		},
		"killerVelocity": {
			"x": -98.91003,
			"y": 29.397217,
			"z": -301.12048
		},
		"victimVelocity": {
			"x": -145.71126,
			"y": 54.0509,
			"z": 242.52313
		}
	}, {
		"_id": {
			"$oid": "63e25eaf91c1eb4fd0530885"
		},
		"id": "c565b0fe-3d99-44bf-b16b-021d404ff1ea",
		"time": {
			"$numberLong": "1675779759967"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198302619222",
		"killerId": "76561198201533291",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63994.953,
			"y": 3281.9128,
			"z": 108030.12
		},
		"victimPosition": {
			"x": 62093.973,
			"y": 2854.8303,
			"z": 107770.86
		},
		"killerVelocity": {
			"x": -367.8584,
			"y": -92.15154,
			"z": 61.464798
		},
		"victimVelocity": {
			"x": 188.34091,
			"y": 24.90269,
			"z": -216.08133
		}
	}, {
		"_id": {
			"$oid": "63e25ed991c1eb4fd0530888"
		},
		"id": "c100155a-43aa-4a7d-8512-57cfbff6ef7f",
		"time": {
			"$numberLong": "1675779801505"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198076738707",
		"killerId": "76561198201533291",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54628.293,
			"y": 1781.984,
			"z": 116204.11
		},
		"victimPosition": {
			"x": 53586.11,
			"y": 675.808,
			"z": 119523.08
		},
		"killerVelocity": {
			"x": -159.6473,
			"y": -121.47589,
			"z": 309.7465
		},
		"victimVelocity": {
			"x": 108.14675,
			"y": 109.89238,
			"z": 66.10763
		}
	}, {
		"_id": {
			"$oid": "63e2803891c1eb4fd05309d7"
		},
		"id": "09b07879-b8d8-46c3-9698-035e46b08934",
		"time": {
			"$numberLong": "1675788344793"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197994876868",
		"killerId": "76561199203409614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62388.723,
			"y": 952.346,
			"z": 110040.3
		},
		"victimPosition": {
			"x": 63929.234,
			"y": 1288.6107,
			"z": 105413.664
		},
		"killerVelocity": {
			"x": 131.74551,
			"y": -10.315299,
			"z": -236.74745
		},
		"victimVelocity": {
			"x": -13.715198,
			"y": 59.741833,
			"z": -266.58072
		}
	}, {
		"_id": {
			"$oid": "63e281b491c1eb4fd05309e7"
		},
		"id": "f722bf22-bd1d-434c-8d2c-78f3c8b0e10a",
		"time": {
			"$numberLong": "1675788724887"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197994876868",
		"killerId": "76561199203409614",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77976.86,
			"y": 1784.6895,
			"z": 122749.375
		},
		"victimPosition": {
			"x": 81796.34,
			"y": 3618.895,
			"z": 114830.7
		},
		"killerVelocity": {
			"x": 349.42825,
			"y": 26.433764,
			"z": 53.229736
		},
		"victimVelocity": {
			"x": -90.07572,
			"y": -173.00673,
			"z": 131.28542
		}
	}, {
		"_id": {
			"$oid": "63e2a1e491c1eb4fd0530abb"
		},
		"id": "c4af5278-8918-423b-b57d-7c46e748b629",
		"time": {
			"$numberLong": "1675796964974"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198831456068",
		"killerId": "76561198000936407",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68434.28,
			"y": 6414.2827,
			"z": 92145.34
		},
		"victimPosition": {
			"x": 68932.53,
			"y": 5704.4746,
			"z": 90951.89
		},
		"killerVelocity": {
			"x": 83.53064,
			"y": -170.3577,
			"z": -265.83167
		},
		"victimVelocity": {
			"x": 298.01053,
			"y": -24.529081,
			"z": -113.22005
		}
	}, {
		"_id": {
			"$oid": "63e2aa5491c1eb4fd0530b85"
		},
		"id": "1913678e-712f-4bf6-b01f-734ab088dba5",
		"time": {
			"$numberLong": "1675799124128"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198202953400",
		"killerId": "76561198369544435",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107977.62,
			"y": 1886.4697,
			"z": 67227.64
		},
		"victimPosition": {
			"x": 110102.76,
			"y": 1785.5684,
			"z": 68937.23
		},
		"killerVelocity": {
			"x": 240.34077,
			"y": 20.24896,
			"z": 246.44086
		},
		"victimVelocity": {
			"x": 222.65274,
			"y": -67.012566,
			"z": -238.28607
		}
	}, {
		"_id": {
			"$oid": "63e2d01a91c1eb4fd0530da7"
		},
		"id": "4c63a779-d129-4b09-b7d8-fb497f192a5b",
		"time": {
			"$numberLong": "1675808794984"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198098402232",
		"killerId": "76561199134702363",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71385.09,
			"y": 2852.8074,
			"z": 122011.72
		},
		"victimPosition": {
			"x": 65440.133,
			"y": 1161.0338,
			"z": 118172.125
		},
		"killerVelocity": {
			"x": -136.70074,
			"y": 5.0787463,
			"z": -177.70686
		},
		"victimVelocity": {
			"x": 161.90709,
			"y": -201.1783,
			"z": 72.56219
		}
	}, {
		"_id": {
			"$oid": "63e3533391c1eb4fd0530ffe"
		},
		"id": "f91d7f71-c96d-49c2-9c31-76b4b04900af",
		"time": {
			"$numberLong": "1675842355303"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199309645899",
		"killerId": "76561198369687547",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69107.55,
			"y": 1819.9036,
			"z": 111768.195
		},
		"victimPosition": {
			"x": 68429.06,
			"y": 3396.6401,
			"z": 111177.38
		},
		"killerVelocity": {
			"x": -139.77556,
			"y": 114.81836,
			"z": 30.843885
		},
		"victimVelocity": {
			"x": 226.82767,
			"y": -206.6271,
			"z": -104.29361
		}
	}, {
		"_id": {
			"$oid": "63e3b28a91c1eb4fd05311b0"
		},
		"id": "6d3a54aa-cc77-4bed-a384-1a5c93f490e2",
		"time": {
			"$numberLong": "1675866762494"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198882245810",
		"killerId": "76561198882509351",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88350.87,
			"y": 2212.9548,
			"z": 67408.59
		},
		"victimPosition": {
			"x": 92941.21,
			"y": 1917.3938,
			"z": 61492.684
		},
		"killerVelocity": {
			"x": 227.939,
			"y": 35.391106,
			"z": -118.37688
		},
		"victimVelocity": {
			"x": -146.62515,
			"y": -59.181114,
			"z": 227.67886
		}
	}, {
		"_id": {
			"$oid": "63e409d391c1eb4fd0531583"
		},
		"id": "dc4b84e2-4dbf-4a4d-b662-347a3fa8517f",
		"time": {
			"$numberLong": "1675889107726"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197965568333",
		"killerId": "76561199193319388",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54736.984,
			"y": 3076.0764,
			"z": 92147.71
		},
		"victimPosition": {
			"x": 61626.23,
			"y": 3748.155,
			"z": 97348.79
		},
		"killerVelocity": {
			"x": 122.52995,
			"y": -36.63577,
			"z": 292.35754
		},
		"victimVelocity": {
			"x": -301.6627,
			"y": -19.100052,
			"z": -225.93492
		}
	}, {
		"_id": {
			"$oid": "63e409f291c1eb4fd053158b"
		},
		"id": "f8192e88-6991-4a6c-817e-444551383257",
		"time": {
			"$numberLong": "1675889138581"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199475615455",
		"killerId": "76561199193319388",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57569.566,
			"y": 1849.152,
			"z": 102826.086
		},
		"victimPosition": {
			"x": 68893.49,
			"y": 2346.0635,
			"z": 106556.96
		},
		"killerVelocity": {
			"x": 65.34647,
			"y": 47.63076,
			"z": 339.84308
		},
		"victimVelocity": {
			"x": 95.411545,
			"y": 115.375305,
			"z": -304.9304
		}
	}, {
		"_id": {
			"$oid": "63e40e5e91c1eb4fd053160c"
		},
		"id": "f7480f4c-6a41-4110-9e3a-c6ee093757af",
		"time": {
			"$numberLong": "1675890270347"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199083942202",
		"killerId": "76561199117249460",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72361.63,
			"y": 3576.97,
			"z": 111020.19
		},
		"victimPosition": {
			"x": 81187.13,
			"y": 6104.462,
			"z": 103750.53
		},
		"killerVelocity": {
			"x": 231.00917,
			"y": 70.52446,
			"z": -218.2753
		},
		"victimVelocity": {
			"x": 74.44904,
			"y": 40.15894,
			"z": -125.94378
		}
	}, {
		"_id": {
			"$oid": "63e40e8c91c1eb4fd0531611"
		},
		"id": "83dd739f-914e-4573-aecd-3d641231e6ac",
		"time": {
			"$numberLong": "1675890316901"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198852731040",
		"killerId": "76561198158523548",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72577.06,
			"y": 1671.385,
			"z": 95019.26
		},
		"victimPosition": {
			"x": 84109.3,
			"y": 1626.949,
			"z": 93976.24
		},
		"killerVelocity": {
			"x": 259.56915,
			"y": -9.533444,
			"z": -61.0852
		},
		"victimVelocity": {
			"x": 66.4725,
			"y": -89.28931,
			"z": 15.23359
		}
	}, {
		"_id": {
			"$oid": "63e4354d91c1eb4fd053181a"
		},
		"id": "048edeba-91ca-432c-a3a3-8e0a6ab292a2",
		"time": {
			"$numberLong": "1675900237430"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199102744824",
		"killerId": "76561199371929411",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52489.62,
			"y": 278.65146,
			"z": 119068.45
		},
		"victimPosition": {
			"x": 61409.2,
			"y": 3685.7927,
			"z": 124190.68
		},
		"killerVelocity": {
			"x": 0.0005477854,
			"y": -0.0004950017,
			"z": -0.0013736413
		},
		"victimVelocity": {
			"x": 65.73805,
			"y": 46.572193,
			"z": -93.43842
		}
	}, {
		"_id": {
			"$oid": "63e438ee91c1eb4fd053187f"
		},
		"id": "4603f09c-02e8-4539-9a9c-b65744a5ae93",
		"time": {
			"$numberLong": "1675901166615"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198147252926",
		"killerId": "76561199109109593",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52815.55,
			"y": 318.48788,
			"z": 118821.61
		},
		"victimPosition": {
			"x": 54289.168,
			"y": 518.1925,
			"z": 119049.44
		},
		"killerVelocity": {
			"x": 120.47673,
			"y": 16.225054,
			"z": 27.102537
		},
		"victimVelocity": {
			"x": 124.429634,
			"y": 19.68335,
			"z": -54.411755
		}
	}, {
		"_id": {
			"$oid": "63e43fa291c1eb4fd0531935"
		},
		"id": "e24539bb-d46f-4296-a6b1-c09739821e90",
		"time": {
			"$numberLong": "1675902882163"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199025883727",
		"killerId": "76561199230135361",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65611.875,
			"y": 2499.7075,
			"z": 109182.414
		},
		"victimPosition": {
			"x": 67110.92,
			"y": 3084.3389,
			"z": 108027.1
		},
		"killerVelocity": {
			"x": 221.88092,
			"y": 63.5394,
			"z": -221.77914
		},
		"victimVelocity": {
			"x": 173.89847,
			"y": 119.288,
			"z": 3.5383382
		}
	}, {
		"_id": {
			"$oid": "63e4478891c1eb4fd05319f2"
		},
		"id": "4da485f0-9ff4-4077-8d38-828e22f34a01",
		"time": {
			"$numberLong": "1675904904793"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198126285727",
		"killerId": "76561199465956955",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51569.098,
			"y": 279.46735,
			"z": 118594.43
		},
		"victimPosition": {
			"x": 51281.676,
			"y": 279.30292,
			"z": 118357.945
		},
		"killerVelocity": {
			"x": -5.642801,
			"y": 0.003389448,
			"z": -9.133303
		},
		"victimVelocity": {
			"x": -51.679745,
			"y": -0.015195407,
			"z": -20.908623
		}
	}, {
		"_id": {
			"$oid": "63e44d2e91c1eb4fd0531a7f"
		},
		"id": "31066a92-c5a5-4217-9ef8-d6974ecedbde",
		"time": {
			"$numberLong": "1675906350988"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199454599665",
		"killerId": "76561199193319388",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51066.754,
			"y": 279.46365,
			"z": 118606.12
		},
		"victimPosition": {
			"x": 50923.098,
			"y": 279.49097,
			"z": 118566.66
		},
		"killerVelocity": {
			"x": -7.601082,
			"y": -0.04170849,
			"z": -2.1419747
		},
		"victimVelocity": {
			"x": -5.297893,
			"y": 0.000118881464,
			"z": -1.4018562
		}
	}, {
		"_id": {
			"$oid": "63e44d5891c1eb4fd0531a82"
		},
		"id": "5d2ba7a8-498c-4928-8530-00afbda003d9",
		"time": {
			"$numberLong": "1675906392533"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199193319388",
		"killerId": "76561199454599665",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50935.254,
			"y": 279.45117,
			"z": 118556.26
		},
		"victimPosition": {
			"x": 50708.08,
			"y": 279.48157,
			"z": 118329.17
		},
		"killerVelocity": {
			"x": -3.0831974,
			"y": 0.07102891,
			"z": -3.0845485
		},
		"victimVelocity": {
			"x": 10.314419,
			"y": -0.00045000762,
			"z": -7.452651
		}
	}, {
		"_id": {
			"$oid": "63e44d8591c1eb4fd0531a86"
		},
		"id": "7f55e607-809b-433a-bf8a-113b9eb8d357",
		"time": {
			"$numberLong": "1675906437675"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199454599665",
		"killerId": "76561199193319388",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51144.46,
			"y": 279.4856,
			"z": 118624.15
		},
		"victimPosition": {
			"x": 50667.98,
			"y": 279.53696,
			"z": 118467.875
		},
		"killerVelocity": {
			"x": -0.27115586,
			"y": -0.0039353743,
			"z": -0.082966186
		},
		"victimVelocity": {
			"x": 1.1281679,
			"y": -0.0071742833,
			"z": -8.1388235
		}
	}, {
		"_id": {
			"$oid": "63e44db791c1eb4fd0531a8c"
		},
		"id": "e77cf815-bb5d-4926-acff-b405bba7a7a3",
		"time": {
			"$numberLong": "1675906487115"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198963946133",
		"killerId": "76561198304138758",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56485.465,
			"y": 392.2187,
			"z": 117507.734
		},
		"victimPosition": {
			"x": 56511.383,
			"y": 654.9189,
			"z": 119789.13
		},
		"killerVelocity": {
			"x": 49.794106,
			"y": 20.691628,
			"z": 123.84291
		},
		"victimVelocity": {
			"x": -74.692856,
			"y": 4.481932,
			"z": 131.50496
		}
	}, {
		"_id": {
			"$oid": "63e44e3291c1eb4fd0531a9b"
		},
		"id": "0c93315f-e408-4bdf-802f-4c9c281f780d",
		"time": {
			"$numberLong": "1675906610982"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198304138758",
		"killerId": "76561198963946133",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58917.633,
			"y": 553.8873,
			"z": 117006.164
		},
		"victimPosition": {
			"x": 61958.918,
			"y": 326.89575,
			"z": 115103.83
		},
		"killerVelocity": {
			"x": 222.92458,
			"y": 4.625238,
			"z": -138.67027
		},
		"victimVelocity": {
			"x": -126.031296,
			"y": -20.554768,
			"z": 43.069626
		}
	}, {
		"_id": {
			"$oid": "63e4617d91c1eb4fd0531c43"
		},
		"id": "f81d0efa-c055-41c1-ae72-3465b756bac2",
		"time": {
			"$numberLong": "1675911549388"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199050110650",
		"killerId": "76561198088219796",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 80585.37,
			"y": 6551.2603,
			"z": 104166.09
		},
		"victimPosition": {
			"x": 82185.29,
			"y": 7690.0396,
			"z": 100698.29
		},
		"killerVelocity": {
			"x": 150.53484,
			"y": 67.500565,
			"z": -196.00949
		},
		"victimVelocity": {
			"x": -372.9049,
			"y": -40.027847,
			"z": 140.79253
		}
	}, {
		"_id": {
			"$oid": "63e468a091c1eb4fd0531cfd"
		},
		"id": "5940e69e-d58e-4baa-937d-4c3a39ceec58",
		"time": {
			"$numberLong": "1675913376246"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198807594021",
		"killerId": "76561198852720915",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87186.39,
			"y": 5146.5747,
			"z": 87030.74
		},
		"victimPosition": {
			"x": 97043.695,
			"y": 1903.4133,
			"z": 75371.49
		},
		"killerVelocity": {
			"x": 254.42485,
			"y": -47.608253,
			"z": -325.99207
		},
		"victimVelocity": {
			"x": 161.89767,
			"y": 8.431177,
			"z": 263.0261
		}
	}, {
		"_id": {
			"$oid": "63e4806191c1eb4fd0531f08"
		},
		"id": "fc012b23-76b7-4240-8e0c-bb99a264ac61",
		"time": {
			"$numberLong": "1675919457254"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198982934453",
		"killerId": "76561199175060327",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51927.45,
			"y": 279.46594,
			"z": 118931.43
		},
		"victimPosition": {
			"x": 123636.2,
			"y": 1648.4905,
			"z": 40131.25
		},
		"killerVelocity": {
			"x": 0.16784704,
			"y": -0.0017695203,
			"z": -0.7783267
		},
		"victimVelocity": {
			"x": 148.57196,
			"y": -48.237583,
			"z": 107.940605
		}
	}, {
		"_id": {
			"$oid": "63e49abf91c1eb4fd053214f"
		},
		"id": "6496e2d8-23d4-4120-9042-8091908697f5",
		"time": {
			"$numberLong": "1675926207782"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198170927658",
		"killerId": "76561198141438087",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 74018.59,
			"y": 3359.3823,
			"z": 103475.01
		},
		"victimPosition": {
			"x": 72232.72,
			"y": 8195.301,
			"z": 98915.74
		},
		"killerVelocity": {
			"x": 134.96457,
			"y": -193.14397,
			"z": 65.74893
		},
		"victimVelocity": {
			"x": -73.62775,
			"y": -47.095886,
			"z": -92.77844
		}
	}, {
		"_id": {
			"$oid": "63e49aeb91c1eb4fd0532151"
		},
		"id": "633fe072-d8ff-480b-aa3f-eee1cfad4135",
		"time": {
			"$numberLong": "1675926251570"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198286844095",
		"killerId": "76561198141438087",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71964,
			"y": 828.25323,
			"z": 111901.22
		},
		"victimPosition": {
			"x": 72825.05,
			"y": 306.2292,
			"z": 112118.695
		},
		"killerVelocity": {
			"x": 240.9541,
			"y": -109.11867,
			"z": 115.96403
		},
		"victimVelocity": {
			"x": 189.54831,
			"y": -50.926964,
			"z": 177.67924
		}
	}, {
		"_id": {
			"$oid": "63e49c6991c1eb4fd0532169"
		},
		"id": "59e102c1-2e0c-41b6-8546-217f222f61af",
		"time": {
			"$numberLong": "1675926633629"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199072886643",
		"killerId": "76561197960271978",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 113713.766,
			"y": 2435.5935,
			"z": 68353.414
		},
		"victimPosition": {
			"x": 113861.766,
			"y": 2400.956,
			"z": 69790.71
		},
		"killerVelocity": {
			"x": -195.40985,
			"y": 42.853264,
			"z": 321.18576
		},
		"victimVelocity": {
			"x": -216.12059,
			"y": -35.61318,
			"z": 116.99557
		}
	}, {
		"_id": {
			"$oid": "63e52e1291c1eb4fd0532338"
		},
		"id": "835bc8a7-587b-4b89-9125-074ab45f439b",
		"time": {
			"$numberLong": "1675963922225"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199006996745",
		"killerId": "76561199245397100",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51460.02,
			"y": 279.46863,
			"z": 118472.46
		},
		"victimPosition": {
			"x": 51459.367,
			"y": 283.38672,
			"z": 118468.55
		},
		"killerVelocity": {
			"x": 18.245977,
			"y": -0.00088602304,
			"z": -2.0244613
		},
		"victimVelocity": {
			"x": -134.42215,
			"y": 13.9642105,
			"z": -32.206196
		}
	}, {
		"_id": {
			"$oid": "63e53a2391c1eb4fd05323e3"
		},
		"id": "a9dfd905-da0c-4a14-805d-614b47b1ddbc",
		"time": {
			"$numberLong": "1675967011777"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198076738707",
		"killerId": "76561198149184485",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75953.82,
			"y": 3555.5977,
			"z": 97132.734
		},
		"victimPosition": {
			"x": 75967.16,
			"y": 3512.5103,
			"z": 97291.695
		},
		"killerVelocity": {
			"x": 30.658514,
			"y": -80.57553,
			"z": 164.05809
		},
		"victimVelocity": {
			"x": -21.37863,
			"y": -36.414753,
			"z": 115.25512
		}
	}, {
		"_id": {
			"$oid": "63e53f7591c1eb4fd053245c"
		},
		"id": "59ba9b29-ea61-465c-8a4c-9d052f661f63",
		"time": {
			"$numberLong": "1675968373341"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198982934453",
		"killerId": "76561198086334947",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64761.61,
			"y": 3553.2117,
			"z": 104813.055
		},
		"victimPosition": {
			"x": 69431.45,
			"y": 4889.9175,
			"z": 96963.555
		},
		"killerVelocity": {
			"x": 222.87332,
			"y": 101.15512,
			"z": -260.80704
		},
		"victimVelocity": {
			"x": 133.82054,
			"y": -161.35094,
			"z": -52.881134
		}
	}, {
		"_id": {
			"$oid": "63e550d691c1eb4fd05325be"
		},
		"id": "3259c389-0d56-4d06-8ec5-1e80207dbb49",
		"time": {
			"$numberLong": "1675972822389"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198839569320",
		"killerId": "76561199063254512",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59252.32,
			"y": 1597.9536,
			"z": 116615.89
		},
		"victimPosition": {
			"x": 61596.31,
			"y": 2120.2974,
			"z": 115733.53
		},
		"killerVelocity": {
			"x": 184.88972,
			"y": 47.69511,
			"z": -96.94779
		},
		"victimVelocity": {
			"x": 167.48175,
			"y": -7.2286706,
			"z": -54.152573
		}
	}, {
		"_id": {
			"$oid": "63e5543891c1eb4fd05325e9"
		},
		"id": "37c6be69-661d-49a2-b61d-f661221f1089",
		"time": {
			"$numberLong": "1675973688380"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198839569320",
		"killerId": "76561199111677513",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58269.605,
			"y": 1373.3123,
			"z": 114763.43
		},
		"victimPosition": {
			"x": 61965.824,
			"y": 1417.5812,
			"z": 113243.54
		},
		"killerVelocity": {
			"x": -239.63434,
			"y": -8.17537,
			"z": -11.935529
		},
		"victimVelocity": {
			"x": 62.430576,
			"y": -70.036545,
			"z": -109.119804
		}
	}, {
		"_id": {
			"$oid": "63e57aab91c1eb4fd0532940"
		},
		"id": "782c0953-2a7d-4b5a-8e4f-75b5e260cd38",
		"time": {
			"$numberLong": "1675983531008"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197985157646",
		"killerId": "76561198030640064",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 97476.555,
			"y": 2099.8254,
			"z": 104990.914
		},
		"victimPosition": {
			"x": 100553.44,
			"y": 738.4787,
			"z": 103704.914
		},
		"killerVelocity": {
			"x": 301.54276,
			"y": -66.0255,
			"z": -165.09166
		},
		"victimVelocity": {
			"x": -98.068954,
			"y": -53.14417,
			"z": 327.96457
		}
	}, {
		"_id": {
			"$oid": "63e57b0491c1eb4fd0532947"
		},
		"id": "f568fa33-9577-47b0-939d-1ece4ae117ed",
		"time": {
			"$numberLong": "1675983620431"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198030640064",
		"killerId": "76561198137291424",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75732.29,
			"y": 3068.2883,
			"z": 104243.19
		},
		"victimPosition": {
			"x": 79161.84,
			"y": 674.0771,
			"z": 103435.39
		},
		"killerVelocity": {
			"x": 368.3347,
			"y": -174.76767,
			"z": -94.38081
		},
		"victimVelocity": {
			"x": -278.85403,
			"y": -105.76937,
			"z": 187.90073
		}
	}, {
		"_id": {
			"$oid": "63e57b0d91c1eb4fd0532949"
		},
		"id": "1c400488-a54f-45d1-afff-2f4c137fe1c0",
		"time": {
			"$numberLong": "1675983629554"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198234293520",
		"killerId": "76561198137291424",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 79040.11,
			"y": 1855.4341,
			"z": 103546.164
		},
		"victimPosition": {
			"x": 79886.266,
			"y": 1372.5712,
			"z": 103926.44
		},
		"killerVelocity": {
			"x": 343.77567,
			"y": -112.77779,
			"z": -100.83419
		},
		"victimVelocity": {
			"x": -256.0435,
			"y": -4.881048,
			"z": 252.3003
		}
	}, {
		"_id": {
			"$oid": "63e57d3691c1eb4fd053296a"
		},
		"id": "f39c2810-2445-4033-84b8-4b9df9a5f5d1",
		"time": {
			"$numberLong": "1675984182924"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199009506848",
		"killerId": "76561199388740148",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100331.57,
			"y": 6619.1934,
			"z": 92319.86
		},
		"victimPosition": {
			"x": 109676.78,
			"y": 10208.157,
			"z": 85748.96
		},
		"killerVelocity": {
			"x": 325.30573,
			"y": 32.920338,
			"z": -197.26689
		},
		"victimVelocity": {
			"x": -108.01866,
			"y": -104.177155,
			"z": 91.830376
		}
	}, {
		"_id": {
			"$oid": "63e57d3c91c1eb4fd053296c"
		},
		"id": "89092ab2-9401-4463-9a02-dbd9c81016d9",
		"time": {
			"$numberLong": "1675984188987"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199388740148",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 109086.84,
			"y": 9470.0205,
			"z": 86304.91
		},
		"victimPosition": {
			"x": 101676.266,
			"y": 6957.148,
			"z": 90594.01
		},
		"killerVelocity": {
			"x": -95.32849,
			"y": -141.899,
			"z": 70.72217
		},
		"victimVelocity": {
			"x": 187.49272,
			"y": 59.242344,
			"z": -308.6614
		}
	}, {
		"_id": {
			"$oid": "63e582bb91c1eb4fd05329f6"
		},
		"id": "1a3c2807-ba09-4818-9a60-f749a8241e42",
		"time": {
			"$numberLong": "1675985595888"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198193511595",
		"killerId": "76561198936606770",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63450.15,
			"y": 2646.3174,
			"z": 119772.375
		},
		"victimPosition": {
			"x": 62179.324,
			"y": 814.5492,
			"z": 106202.85
		},
		"killerVelocity": {
			"x": -48.97652,
			"y": -103.465034,
			"z": -347.55167
		},
		"victimVelocity": {
			"x": 39.559147,
			"y": -65.28297,
			"z": 117.81814
		}
	}, {
		"_id": {
			"$oid": "63e5870c91c1eb4fd0532a5e"
		},
		"id": "c4116b7f-a5a1-4646-914d-8413622d871c",
		"time": {
			"$numberLong": "1675986700315"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199230135361",
		"killerId": "76561199009506848",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 67989.195,
			"y": 6663.9634,
			"z": 110488.164
		},
		"victimPosition": {
			"x": 54987.543,
			"y": 1249.1359,
			"z": 120201.086
		},
		"killerVelocity": {
			"x": 202.2968,
			"y": -47.030457,
			"z": -40.869892
		},
		"victimVelocity": {
			"x": 95.840065,
			"y": 43.85207,
			"z": 26.64962
		}
	}, {
		"_id": {
			"$oid": "63e5903c91c1eb4fd0532b3c"
		},
		"id": "c875a7ab-6019-4750-9e43-3f058b34a359",
		"time": {
			"$numberLong": "1675989052578"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199369545869",
		"killerId": "76561199062098178",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51588.914,
			"y": 279.38657,
			"z": 118776.555
		},
		"victimPosition": {
			"x": 51885.93,
			"y": 279.46695,
			"z": 118561.96
		},
		"killerVelocity": {
			"x": 14.039196,
			"y": -0.036516845,
			"z": -11.698842
		},
		"victimVelocity": {
			"x": 52.900425,
			"y": -0.00055897236,
			"z": 13.77791
		}
	}, {
		"_id": {
			"$oid": "63e5947191c1eb4fd0532b9d"
		},
		"id": "1bf37c75-014b-46d7-808c-5bc906e71f72",
		"time": {
			"$numberLong": "1675990129284"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086600808",
		"killerId": "76561198980858150",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56904.47,
			"y": 1721.7465,
			"z": 115501.28
		},
		"victimPosition": {
			"x": 62702.46,
			"y": 1730.6509,
			"z": 114441.91
		},
		"killerVelocity": {
			"x": 284.09613,
			"y": 13.096862,
			"z": -32.244213
		},
		"victimVelocity": {
			"x": -98.90029,
			"y": -125.72818,
			"z": -56.656876
		}
	}, {
		"_id": {
			"$oid": "63e5b97a91c1eb4fd0532efb"
		},
		"id": "8dc7f82d-842f-4805-afb4-2492179abf62",
		"time": {
			"$numberLong": "1675999610424"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198153819286",
		"killerId": "76561198852720915",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70690.625,
			"y": 3138.1865,
			"z": 116768.96
		},
		"victimPosition": {
			"x": 74378.03,
			"y": 1575.1462,
			"z": 112704.95
		},
		"killerVelocity": {
			"x": 379.2054,
			"y": -0.97374314,
			"z": -31.809872
		},
		"victimVelocity": {
			"x": -48.15169,
			"y": 43.396564,
			"z": -254.51924
		}
	}, {
		"_id": {
			"$oid": "63e5c68591c1eb4fd0533039"
		},
		"id": "bafa873c-1329-4820-b156-ce4e6ba895b8",
		"time": {
			"$numberLong": "1676002949943"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 8,
		"victimId": "76561198107192354",
		"killerId": "76561199081551086",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72399.29,
			"y": 2356.6372,
			"z": 75885.26
		},
		"victimPosition": {
			"x": 72579.46,
			"y": 2127.0056,
			"z": 75178.914
		},
		"killerVelocity": {
			"x": 106.06444,
			"y": -97.37645,
			"z": -369.74335
		},
		"victimVelocity": {
			"x": 110.93414,
			"y": -73.78236,
			"z": -337.1092
		}
	}, {
		"_id": {
			"$oid": "63e5d0fa91c1eb4fd05330fb"
		},
		"id": "70040127-365d-4ea1-9a59-0e8a15658817",
		"time": {
			"$numberLong": "1676005626449"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561199232867856",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 63245.74,
			"y": 3402.6409,
			"z": 113538.82
		},
		"victimPosition": {
			"x": 74176.13,
			"y": 9022.619,
			"z": 99588.66
		},
		"killerVelocity": {
			"x": 206.31377,
			"y": 67.38084,
			"z": -137.58638
		},
		"victimVelocity": {
			"x": -113.65114,
			"y": 38.843777,
			"z": -210.60452
		}
	}, {
		"_id": {
			"$oid": "63e5d16d91c1eb4fd0533100"
		},
		"id": "7e1c0248-903d-4e67-886f-5adcec23b4f6",
		"time": {
			"$numberLong": "1676005741059"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561199232867856",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75761.4,
			"y": 4120.3003,
			"z": 112697.76
		},
		"victimPosition": {
			"x": 63419.87,
			"y": 3864.4465,
			"z": 114104.805
		},
		"killerVelocity": {
			"x": -302.5689,
			"y": -33.83121,
			"z": 165.14592
		},
		"victimVelocity": {
			"x": 283.5945,
			"y": 45.967308,
			"z": -118.66696
		}
	}, {
		"_id": {
			"$oid": "63e6017c91c1eb4fd0533467"
		},
		"id": "b711cf56-f254-44a1-a4ec-79a67fe1a50c",
		"time": {
			"$numberLong": "1676018044318"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199055281148",
		"killerId": "76561198019487664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 123388.914,
			"y": 8048.8623,
			"z": 56839.734
		},
		"victimPosition": {
			"x": 124147.02,
			"y": 7056.9556,
			"z": 53742.53
		},
		"killerVelocity": {
			"x": 198.59776,
			"y": 154.95229,
			"z": 22.319174
		},
		"victimVelocity": {
			"x": 240.85318,
			"y": -67.003044,
			"z": 78.795296
		}
	}, {
		"_id": {
			"$oid": "63e6204191c1eb4fd053366b"
		},
		"id": "30c49163-bded-4791-82bf-31fb5b14b4a4",
		"time": {
			"$numberLong": "1676025921637"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198452775966",
		"killerId": "76561198337847119",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51574.227,
			"y": 279.48795,
			"z": 118723.02
		},
		"victimPosition": {
			"x": 51564.953,
			"y": 279.49484,
			"z": 118717.83
		},
		"killerVelocity": {
			"x": -10.729742,
			"y": -0.0011743307,
			"z": -3.945551
		},
		"victimVelocity": {
			"x": 43.068638,
			"y": 0.013574779,
			"z": 10.508413
		}
	}, {
		"_id": {
			"$oid": "63e6204191c1eb4fd053366d"
		},
		"id": "f1efb902-1ff4-42c2-b0dc-ff73a599f1b3",
		"time": {
			"$numberLong": "1676025921848"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198337847119",
		"killerId": "76561198452775966",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51573.05,
			"y": 279.4925,
			"z": 118719.92
		},
		"victimPosition": {
			"x": 51571.543,
			"y": 279.4889,
			"z": 118721.84
		},
		"killerVelocity": {
			"x": 42.80046,
			"y": 0.018815093,
			"z": 11.072798
		},
		"victimVelocity": {
			"x": -10.616795,
			"y": -0.0008551106,
			"z": -4.3408875
		}
	}, {
		"_id": {
			"$oid": "63e629e491c1eb4fd05336a4"
		},
		"id": "e05179c2-b242-454e-a899-2494b797ddda",
		"time": {
			"$numberLong": "1676028388086"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199305305637",
		"killerId": "76561199195662243",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 66193.81,
			"y": 3463.6936,
			"z": 121493.086
		},
		"victimPosition": {
			"x": 69442.95,
			"y": 3726.4082,
			"z": 123666.4
		},
		"killerVelocity": {
			"x": 237.75163,
			"y": 126.59778,
			"z": -17.597334
		},
		"victimVelocity": {
			"x": 121.04897,
			"y": 59.043976,
			"z": 198.13486
		}
	}, {
		"_id": {
			"$oid": "63e629f091c1eb4fd05336a6"
		},
		"id": "2d1b13e4-de55-48ae-9559-6ab08d2f1ca2",
		"time": {
			"$numberLong": "1676028400058"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199263121614",
		"killerId": "76561199195662243",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68240.945,
			"y": 2557.5063,
			"z": 121694.62
		},
		"victimPosition": {
			"x": 67824.766,
			"y": 3221.2368,
			"z": 120750.96
		},
		"killerVelocity": {
			"x": 60.765606,
			"y": -222.22711,
			"z": 120.833496
		},
		"victimVelocity": {
			"x": 64.032616,
			"y": -99.56834,
			"z": -50.98251
		}
	}, {
		"_id": {
			"$oid": "63e6555291c1eb4fd0533802"
		},
		"id": "98d8005a-ea25-4b4f-b234-4dd430f104bb",
		"time": {
			"$numberLong": "1676039506212"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198126285727",
		"killerId": "76561199110097431",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 115395.13,
			"y": 3047.7256,
			"z": 70470.92
		},
		"victimPosition": {
			"x": 123473.6,
			"y": 2134.8242,
			"z": 67124.9
		},
		"killerVelocity": {
			"x": -13.860211,
			"y": -17.614923,
			"z": -249.63254
		},
		"victimVelocity": {
			"x": -78.034485,
			"y": 10.153729,
			"z": 160.38043
		}
	}, {
		"_id": {
			"$oid": "63e660ce91c1eb4fd05338ab"
		},
		"id": "eb584ee2-ec96-4dab-b525-9db151383b90",
		"time": {
			"$numberLong": "1676042446641"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199153548254",
		"killerId": "76561197976066897",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 107261.22,
			"y": 7436.497,
			"z": 73369.875
		},
		"victimPosition": {
			"x": 130686.445,
			"y": 1563.2568,
			"z": 77129.52
		},
		"killerVelocity": {
			"x": 219.6077,
			"y": 151.35947,
			"z": -172.95459
		},
		"victimVelocity": {
			"x": 24.085981,
			"y": 128.73232,
			"z": 219.14653
		}
	}, {
		"_id": {
			"$oid": "63e670ee91c1eb4fd0533950"
		},
		"id": "1e8d7426-7a20-46a7-8b48-a2069c67033d",
		"time": {
			"$numberLong": "1676046574496"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198348867565",
		"killerId": "76561199409074220",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52241.434,
			"y": 421.8509,
			"z": 118585.49
		},
		"victimPosition": {
			"x": 53936.92,
			"y": 544.02875,
			"z": 117620.08
		},
		"killerVelocity": {
			"x": 231.90445,
			"y": -2.2135808,
			"z": -77.12448
		},
		"victimVelocity": {
			"x": 44.670403,
			"y": 48.175713,
			"z": -112.95896
		}
	}, {
		"_id": {
			"$oid": "63e6712391c1eb4fd0533954"
		},
		"id": "58ca99cc-5cd3-4396-90cb-87c248f92e9f",
		"time": {
			"$numberLong": "1676046627437"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199076047675",
		"killerId": "76561198341375020",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50238.92,
			"y": 1854.8713,
			"z": 95403.84
		},
		"victimPosition": {
			"x": 50789.29,
			"y": 1215.6255,
			"z": 95934.1
		},
		"killerVelocity": {
			"x": 295.52332,
			"y": -26.976068,
			"z": -69.10961
		},
		"victimVelocity": {
			"x": 120.378944,
			"y": 20.852985,
			"z": 105.352394
		}
	}, {
		"_id": {
			"$oid": "63e6712791c1eb4fd0533956"
		},
		"id": "128623b8-7f26-4d7c-a0d6-2ab0ec4d63ed",
		"time": {
			"$numberLong": "1676046631078"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198348867565",
		"killerId": "76561199409074220",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53075.75,
			"y": 1346.6019,
			"z": 117135.78
		},
		"victimPosition": {
			"x": 53551.824,
			"y": 864.4508,
			"z": 117425.266
		},
		"killerVelocity": {
			"x": -21.26364,
			"y": 120.110634,
			"z": -177.32553
		},
		"victimVelocity": {
			"x": 58.165817,
			"y": -8.792395,
			"z": -87.84686
		}
	}, {
		"_id": {
			"$oid": "63e672b791c1eb4fd053397f"
		},
		"id": "ae3deef8-21a4-4e05-8546-5748930127b8",
		"time": {
			"$numberLong": "1676047031268"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199153548254",
		"killerId": "76561198020233172",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84865.83,
			"y": 921.8862,
			"z": 83889.45
		},
		"victimPosition": {
			"x": 85826.33,
			"y": 1025.4447,
			"z": 84490.97
		},
		"killerVelocity": {
			"x": 280.0482,
			"y": 6.379679,
			"z": -32.498394
		},
		"victimVelocity": {
			"x": 110.19058,
			"y": -14.194935,
			"z": 63.234715
		}
	}, {
		"_id": {
			"$oid": "63e6a91691c1eb4fd0533d4c"
		},
		"id": "4a90a5b2-ee3d-4c01-8d2c-2a52e546ddfc",
		"time": {
			"$numberLong": "1676060950319"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198046373073",
		"killerId": "76561198162733131",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87288.52,
			"y": 3164.817,
			"z": 66077.12
		},
		"victimPosition": {
			"x": 87643.375,
			"y": 2889.451,
			"z": 61761.984
		},
		"killerVelocity": {
			"x": -144.10991,
			"y": -104.49787,
			"z": -214.57959
		},
		"victimVelocity": {
			"x": 282.70694,
			"y": -119.62135,
			"z": 77.936386
		}
	}, {
		"_id": {
			"$oid": "63e6afd591c1eb4fd0533e08"
		},
		"id": "241db45e-bd01-4974-bedf-e13b2de86d9f",
		"time": {
			"$numberLong": "1676062677282"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198011065892",
		"killerId": "76561198951161969",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54488.887,
			"y": 750.2166,
			"z": 114722.06
		},
		"victimPosition": {
			"x": 51583.594,
			"y": 635.26337,
			"z": 110274.52
		},
		"killerVelocity": {
			"x": -98.05508,
			"y": -9.127389,
			"z": -235.03697
		},
		"victimVelocity": {
			"x": -205.79599,
			"y": 36.29582,
			"z": -246.4764
		}
	}, {
		"_id": {
			"$oid": "63e6b51f91c1eb4fd0533e88"
		},
		"id": "cb8ed991-0c80-4a8d-ba91-ef72f47e49e1",
		"time": {
			"$numberLong": "1676064031871"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198144680843",
		"killerId": "76561198328612955",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82503.125,
			"y": 2355.7246,
			"z": 88515.516
		},
		"victimPosition": {
			"x": 79904.98,
			"y": 931.2846,
			"z": 91270.04
		},
		"killerVelocity": {
			"x": 306.86038,
			"y": 7.061809,
			"z": -180.63974
		},
		"victimVelocity": {
			"x": 12.323491,
			"y": -0.09151138,
			"z": 7.4208117
		}
	}, {
		"_id": {
			"$oid": "63e6b89791c1eb4fd0533ef1"
		},
		"id": "96f7559e-c0b3-48b7-a163-c011c372482a",
		"time": {
			"$numberLong": "1676064919681"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198144680843",
		"killerId": "76561198253523617",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51112.77,
			"y": 279.4511,
			"z": 118610.04
		},
		"victimPosition": {
			"x": 51039.37,
			"y": 279.481,
			"z": 118594.3
		},
		"killerVelocity": {
			"x": -57.490013,
			"y": 0.019457005,
			"z": -13.201381
		},
		"victimVelocity": {
			"x": -13.32874,
			"y": -0.001250118,
			"z": -3.3026688
		}
	}, {
		"_id": {
			"$oid": "63e6bf0191c1eb4fd0533f73"
		},
		"id": "a5a68e71-71f9-4c01-b738-c454d98850a6",
		"time": {
			"$numberLong": "1676066561163"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198084347772",
		"killerId": "76561199277920630",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61278.84,
			"y": 1610.6027,
			"z": 109935.34
		},
		"victimPosition": {
			"x": 62459.15,
			"y": 957.6152,
			"z": 98203.18
		},
		"killerVelocity": {
			"x": 179.32765,
			"y": 20.463173,
			"z": -225.56375
		},
		"victimVelocity": {
			"x": 73.495125,
			"y": -41.347977,
			"z": -69.67053
		}
	}, {
		"_id": {
			"$oid": "63e6c08191c1eb4fd0533f83"
		},
		"id": "4e8f174c-b0ca-42a0-8a7f-0e055970acb2",
		"time": {
			"$numberLong": "1676066945332"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199019371381",
		"killerId": "76561199409074220",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58622.14,
			"y": 708.756,
			"z": 117162.8
		},
		"victimPosition": {
			"x": 57775.168,
			"y": 325.95642,
			"z": 115605.875
		},
		"killerVelocity": {
			"x": -191.70853,
			"y": -42.57171,
			"z": -190.795
		},
		"victimVelocity": {
			"x": -25.138462,
			"y": 5.5300035,
			"z": -188.49069
		}
	}, {
		"_id": {
			"$oid": "63e6c46f91c1eb4fd0533fda"
		},
		"id": "e69ebeea-06f0-4e3c-b485-e7b496cc808c",
		"time": {
			"$numberLong": "1676067951481"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198970720807",
		"killerId": "76561199409074220",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57129.24,
			"y": 764.7221,
			"z": 119177
		},
		"victimPosition": {
			"x": 58083.51,
			"y": 264.38208,
			"z": 119269.78
		},
		"killerVelocity": {
			"x": 226.29095,
			"y": 22.418402,
			"z": -16.319916
		},
		"victimVelocity": {
			"x": 94.21962,
			"y": -13.452559,
			"z": 4.7329736
		}
	}, {
		"_id": {
			"$oid": "63e6c92091c1eb4fd0534036"
		},
		"id": "ecb58f52-060b-4ae5-9f16-f2c7dcf44fae",
		"time": {
			"$numberLong": "1676069152924"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199435828128",
		"killerId": "76561199348602335",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53486.57,
			"y": 428.47513,
			"z": 118361.46
		},
		"victimPosition": {
			"x": 53871.34,
			"y": 735.0591,
			"z": 117027.766
		},
		"killerVelocity": {
			"x": 127.01054,
			"y": -13.537491,
			"z": -79.49037
		},
		"victimVelocity": {
			"x": -140.29153,
			"y": -52.278164,
			"z": 192.64378
		}
	}, {
		"_id": {
			"$oid": "63e6c92491c1eb4fd0534038"
		},
		"id": "f4e95d3f-6f3d-4cfd-812d-51751d4aaebf",
		"time": {
			"$numberLong": "1676069156013"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199348602335",
		"killerId": "76561199435828128",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53433.293,
			"y": 613.0632,
			"z": 117537.72
		},
		"victimPosition": {
			"x": 53872.586,
			"y": 346.23227,
			"z": 118108.24
		},
		"killerVelocity": {
			"x": -131.8318,
			"y": -40.003284,
			"z": 141.09253
		},
		"victimVelocity": {
			"x": 120.44785,
			"y": -41.374237,
			"z": -80.693825
		}
	}, {
		"_id": {
			"$oid": "63e6ca7791c1eb4fd0534061"
		},
		"id": "98fe3e90-dc3e-4e96-b869-3ff6de2df894",
		"time": {
			"$numberLong": "1676069495918"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198018452178",
		"killerId": "76561198164742640",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51059.715,
			"y": 279.42484,
			"z": 118598.25
		},
		"victimPosition": {
			"x": 51187.38,
			"y": 279.48083,
			"z": 118646.44
		},
		"killerVelocity": {
			"x": 25.494705,
			"y": -0.044903412,
			"z": 8.578301
		},
		"victimVelocity": {
			"x": 1.899725,
			"y": 0.0033104643,
			"z": -4.4668884
		}
	}, {
		"_id": {
			"$oid": "63e6ca9091c1eb4fd0534065"
		},
		"id": "025152c8-f3ab-46ce-92a3-80d8e9ebc732",
		"time": {
			"$numberLong": "1676069520585"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197960780798",
		"killerId": "76561198164742640",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53539.586,
			"y": 458.62006,
			"z": 117964.29
		},
		"victimPosition": {
			"x": 56804.926,
			"y": 597.1274,
			"z": 113803.08
		},
		"killerVelocity": {
			"x": 132.89728,
			"y": 1.9844081,
			"z": -131.6207
		},
		"victimVelocity": {
			"x": -183.91391,
			"y": -23.088358,
			"z": 171.60825
		}
	}, {
		"_id": {
			"$oid": "63e6cd0991c1eb4fd05340ab"
		},
		"id": "d7f84a5e-f284-4e4e-9c9a-33d40a2f3d63",
		"time": {
			"$numberLong": "1676070153076"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198298699368",
		"killerId": "76561199076309172",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 90822.82,
			"y": 2197.317,
			"z": 75737.195
		},
		"victimPosition": {
			"x": 89834.625,
			"y": 664.7957,
			"z": 76615.86
		},
		"killerVelocity": {
			"x": 250.37534,
			"y": 13.897466,
			"z": -334.28467
		},
		"victimVelocity": {
			"x": -92.17183,
			"y": -122.554405,
			"z": 97.44878
		}
	}, {
		"_id": {
			"$oid": "63e6d51191c1eb4fd053415c"
		},
		"id": "73dbc5ac-6bd7-46b0-9258-39a7a4940bd0",
		"time": {
			"$numberLong": "1676072209607"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198862770833",
		"killerId": "76561199023812730",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 132254.55,
			"y": 3024.2834,
			"z": 50776.652
		},
		"victimPosition": {
			"x": 135934.58,
			"y": 2665.3406,
			"z": 52976.098
		},
		"killerVelocity": {
			"x": 310.30505,
			"y": -41.4277,
			"z": -208.13895
		},
		"victimVelocity": {
			"x": 13.448159,
			"y": -53.04305,
			"z": 305.66577
		}
	}, {
		"_id": {
			"$oid": "63e700ca91c1eb4fd0534519"
		},
		"id": "73a0b49a-d4d4-4f54-acaf-25a5a27eeb6c",
		"time": {
			"$numberLong": "1676083402467"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198086961565",
		"killerId": "76561199365601840",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 64085.695,
			"y": 610.69293,
			"z": 113467.35
		},
		"victimPosition": {
			"x": 66414.44,
			"y": 779.7208,
			"z": 112362.8
		},
		"killerVelocity": {
			"x": 258.77716,
			"y": -10.911003,
			"z": -203.88934
		},
		"victimVelocity": {
			"x": 316.00217,
			"y": 26.650227,
			"z": -184.5023
		}
	}, {
		"_id": {
			"$oid": "63e71a9e91c1eb4fd053479f"
		},
		"id": "52c1862a-6f3e-4a8b-989f-527bf5110863",
		"time": {
			"$numberLong": "1676090014928"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198265640092",
		"killerId": "76561198419905690",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 125860.65,
			"y": 3570.9895,
			"z": 46211.824
		},
		"victimPosition": {
			"x": 128814.89,
			"y": 1687.3208,
			"z": 43653.543
		},
		"killerVelocity": {
			"x": 269.66687,
			"y": -44.294586,
			"z": -203.5771
		},
		"victimVelocity": {
			"x": -102.991264,
			"y": 60.82563,
			"z": 169.77173
		}
	}, {
		"_id": {
			"$oid": "63e7293691c1eb4fd0534908"
		},
		"id": "e0b0a6ed-f861-47a6-a928-626f0e0c0f67",
		"time": {
			"$numberLong": "1676093750161"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198265640092",
		"killerId": "76561198971498905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 104180.74,
			"y": 1870.3422,
			"z": 47737.07
		},
		"victimPosition": {
			"x": 105583.875,
			"y": 2415.099,
			"z": 52873.91
		},
		"killerVelocity": {
			"x": 293.8355,
			"y": -155.6978,
			"z": -139.20383
		},
		"victimVelocity": {
			"x": 24.268206,
			"y": -16.984034,
			"z": -29.191925
		}
	}, {
		"_id": {
			"$oid": "63e7293791c1eb4fd053490c"
		},
		"id": "b3a8d6b0-010a-43f5-833b-f33f81be9c1b",
		"time": {
			"$numberLong": "1676093751954"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198074663527",
		"killerId": "76561198971498905",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 104649.83,
			"y": 1568.9646,
			"z": 47455.246
		},
		"victimPosition": {
			"x": 105233.125,
			"y": 1314.3444,
			"z": 47080.688
		},
		"killerVelocity": {
			"x": 228.27705,
			"y": -169.13359,
			"z": -185.16295
		},
		"victimVelocity": {
			"x": -150.9481,
			"y": 79.168106,
			"z": 126.977516
		}
	}, {
		"_id": {
			"$oid": "63e72d7f91c1eb4fd0534975"
		},
		"id": "4b7aef9c-7846-40ea-8969-a0fed0a37517",
		"time": {
			"$numberLong": "1676094847427"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198265640092",
		"killerId": "76561199185741035",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60294.13,
			"y": 2470.52,
			"z": 112452.4
		},
		"victimPosition": {
			"x": 58338.355,
			"y": 2646.0342,
			"z": 112426.11
		},
		"killerVelocity": {
			"x": -327.604,
			"y": -34.540928,
			"z": 193.71417
		},
		"victimVelocity": {
			"x": 232.20224,
			"y": -0.013787754,
			"z": -182.01207
		}
	}, {
		"_id": {
			"$oid": "63e72d9f91c1eb4fd053497d"
		},
		"id": "ab9ee0a0-56ca-4c72-a053-1bceeb5cf009",
		"time": {
			"$numberLong": "1676094879969"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199185741035",
		"killerId": "76561198439985004",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54981.68,
			"y": 2371.3982,
			"z": 114324.77
		},
		"victimPosition": {
			"x": 52479.027,
			"y": 3739.4946,
			"z": 113540.54
		},
		"killerVelocity": {
			"x": -202.92114,
			"y": 93.97395,
			"z": -67.19819
		},
		"victimVelocity": {
			"x": 130.48703,
			"y": 184.46712,
			"z": 31.636944
		}
	}, {
		"_id": {
			"$oid": "63e7344d91c1eb4fd0534a19"
		},
		"id": "d3ab1943-9668-4949-8640-7349f486c204",
		"time": {
			"$numberLong": "1676096589284"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198315308171",
		"killerId": "76561199070113559",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69876.16,
			"y": 804.04114,
			"z": 115559.03
		},
		"victimPosition": {
			"x": 54653.227,
			"y": 299.93228,
			"z": 119101.01
		},
		"killerVelocity": {
			"x": 341.7808,
			"y": 12.109478,
			"z": -129.60454
		},
		"victimVelocity": {
			"x": -172.79793,
			"y": -39.854923,
			"z": 14.146752
		}
	}, {
		"_id": {
			"$oid": "63e73b7591c1eb4fd0534ace"
		},
		"id": "886e33f6-3ce6-4397-a4da-1533a0f82333",
		"time": {
			"$numberLong": "1676098421400"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198998534580",
		"killerId": "76561198107192354",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 123681.32,
			"y": 3367.0398,
			"z": 64538.496
		},
		"victimPosition": {
			"x": 125435.35,
			"y": 2069.9565,
			"z": 63745.566
		},
		"killerVelocity": {
			"x": 369.69864,
			"y": -21.919477,
			"z": 44.04763
		},
		"victimVelocity": {
			"x": -302.38013,
			"y": 121.15786,
			"z": 141.16472
		}
	}, {
		"_id": {
			"$oid": "63e752e591c1eb4fd0534c41"
		},
		"id": "8514f29a-2241-4096-ae8b-362e19f54f91",
		"time": {
			"$numberLong": "1676104421826"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198043636220",
		"killerId": "76561198168936924",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 78126.555,
			"y": 10800.975,
			"z": 92103.84
		},
		"victimPosition": {
			"x": 90747.8,
			"y": 574.1639,
			"z": 89247.27
		},
		"killerVelocity": {
			"x": 189.34755,
			"y": 19.172056,
			"z": -221.7512
		},
		"victimVelocity": {
			"x": 125.77383,
			"y": 22.232653,
			"z": 263.26495
		}
	}, {
		"_id": {
			"$oid": "63e7628e91c1eb4fd0534d2d"
		},
		"id": "a19e3154-c9cd-47cb-ac20-ad461a2628ae",
		"time": {
			"$numberLong": "1676108430483"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198929764155",
		"killerId": "76561198019487664",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56190.008,
			"y": 2307.8906,
			"z": 117094.77
		},
		"victimPosition": {
			"x": 57384.723,
			"y": 1082.5468,
			"z": 113323.266
		},
		"killerVelocity": {
			"x": 67.52031,
			"y": -108.513,
			"z": -241.3123
		},
		"victimVelocity": {
			"x": -184.25365,
			"y": -71.2257,
			"z": -192.94017
		}
	}, {
		"_id": {
			"$oid": "63e76e0b91c1eb4fd0534d9a"
		},
		"id": "c2d7dad8-a7c3-4c00-812d-97081ccbbcf2",
		"time": {
			"$numberLong": "1676111371287"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199122545263",
		"killerId": "76561198119509653",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 158278.16,
			"y": 6251.3354,
			"z": 39067.918
		},
		"victimPosition": {
			"x": 151058.97,
			"y": 2414.3862,
			"z": 49514.8
		},
		"killerVelocity": {
			"x": -82.506454,
			"y": -40.460487,
			"z": -145.24599
		},
		"victimVelocity": {
			"x": 128.88321,
			"y": -21.983345,
			"z": -197.5809
		}
	}, {
		"_id": {
			"$oid": "63e7741091c1eb4fd0534de0"
		},
		"id": "ecc4c993-b550-4e8f-8adc-943170e3cbd3",
		"time": {
			"$numberLong": "1676112912084"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198165408741",
		"killerId": "76561199272386547",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82420.72,
			"y": 414.40442,
			"z": 113523.195
		},
		"victimPosition": {
			"x": 83012.94,
			"y": 404.3917,
			"z": 113718.055
		},
		"killerVelocity": {
			"x": 351.4937,
			"y": -4.163749,
			"z": 106.09534
		},
		"victimVelocity": {
			"x": 321.03128,
			"y": -7.3464494,
			"z": 97.12184
		}
	}, {
		"_id": {
			"$oid": "63e7855391c1eb4fd0534e7a"
		},
		"id": "4a05ed26-f8d4-47ef-ac61-d9d69904baa8",
		"time": {
			"$numberLong": "1676117331325"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199437582781",
		"killerId": "76561198037479382",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55704.785,
			"y": 1016.1688,
			"z": 118082.22
		},
		"victimPosition": {
			"x": 56235.336,
			"y": 1008.3911,
			"z": 118288.086
		},
		"killerVelocity": {
			"x": 124.5607,
			"y": -1.5497972,
			"z": 66.97779
		},
		"victimVelocity": {
			"x": 109.288895,
			"y": -19.812323,
			"z": 11.112043
		}
	}, {
		"_id": {
			"$oid": "63e7856591c1eb4fd0534e7d"
		},
		"id": "c440a2fa-b0e3-445f-b330-be8efebd5a85",
		"time": {
			"$numberLong": "1676117349666"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198037479382",
		"killerId": "76561199170072345",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 59036.766,
			"y": 599.59033,
			"z": 116385.875
		},
		"victimPosition": {
			"x": 58709.77,
			"y": 257.94543,
			"z": 117730.66
		},
		"killerVelocity": {
			"x": -73.99834,
			"y": -36.903255,
			"z": 223.46712
		},
		"victimVelocity": {
			"x": 155.92526,
			"y": -12.103551,
			"z": 59.775352
		}
	}, {
		"_id": {
			"$oid": "63e798a491c1eb4fd0534f64"
		},
		"id": "188c1672-2dba-43e4-8f99-ce410beaa504",
		"time": {
			"$numberLong": "1676122276650"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199227421311",
		"killerId": "76561198251274634",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 125164.016,
			"y": 2183.843,
			"z": 66144.08
		},
		"victimPosition": {
			"x": 125964.99,
			"y": 2051.4456,
			"z": 64387.22
		},
		"killerVelocity": {
			"x": 157.87875,
			"y": -18.319843,
			"z": -356.0691
		},
		"victimVelocity": {
			"x": 176.52454,
			"y": -12.5269785,
			"z": -199.82108
		}
	}, {
		"_id": {
			"$oid": "63e7a46191c1eb4fd053502d"
		},
		"id": "3dfa093e-de87-45bb-b39f-22cfd306fba2",
		"time": {
			"$numberLong": "1676125281451"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199365809008",
		"killerId": "76561199249213792",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51718.914,
			"y": 789.2787,
			"z": 120481.67
		},
		"victimPosition": {
			"x": 49445.332,
			"y": 874.42365,
			"z": 120007.766
		},
		"killerVelocity": {
			"x": -170.9194,
			"y": 10.144855,
			"z": -28.61137
		},
		"victimVelocity": {
			"x": -19.655014,
			"y": -44.219807,
			"z": -112.75396
		}
	}, {
		"_id": {
			"$oid": "63e7ac3291c1eb4fd053511c"
		},
		"id": "2427f092-76e4-46d6-b9cb-122d0681c839",
		"time": {
			"$numberLong": "1676127282242"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199122400653",
		"killerId": "76561199249213792",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50534.85,
			"y": 279.444,
			"z": 118510.73
		},
		"victimPosition": {
			"x": 51555.293,
			"y": 277.3533,
			"z": 118393.32
		},
		"killerVelocity": {
			"x": -0.6763722,
			"y": -0.094027504,
			"z": -2.551578
		},
		"victimVelocity": {
			"x": 95.99827,
			"y": 0.28511137,
			"z": -12.652659
		}
	}, {
		"_id": {
			"$oid": "63e7b3b591c1eb4fd05351c9"
		},
		"id": "ce4977bf-58f5-43f1-93ac-465be108e000",
		"time": {
			"$numberLong": "1676129205705"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198801376013",
		"killerId": "76561199465956955",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58173.617,
			"y": 2246.5823,
			"z": 105781.11
		},
		"victimPosition": {
			"x": 58580.86,
			"y": 2083.387,
			"z": 104372.695
		},
		"killerVelocity": {
			"x": -4.639365,
			"y": -31.266766,
			"z": -368.05966
		},
		"victimVelocity": {
			"x": 118.550316,
			"y": -81.31092,
			"z": -135.83348
		}
	}, {
		"_id": {
			"$oid": "63e7d4d691c1eb4fd053546d"
		},
		"id": "c39f74c9-3863-4faa-96d4-4e6d49e3c262",
		"time": {
			"$numberLong": "1676137686897"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197976066897",
		"killerId": "76561198835023851",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84540.914,
			"y": 5250.495,
			"z": 106757.06
		},
		"victimPosition": {
			"x": 86866.55,
			"y": 7619.333,
			"z": 104691.68
		},
		"killerVelocity": {
			"x": 177.88815,
			"y": 210.29489,
			"z": -108.21745
		},
		"victimVelocity": {
			"x": -478.15366,
			"y": -145.23555,
			"z": 169.89214
		}
	}, {
		"_id": {
			"$oid": "63e7d50491c1eb4fd0535476"
		},
		"id": "819bc589-09e6-49be-bfe5-09105b5bd406",
		"time": {
			"$numberLong": "1676137732809"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198990738601",
		"killerId": "76561198835023851",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 87483.6,
			"y": 1610.8245,
			"z": 105428.93
		},
		"victimPosition": {
			"x": 82537.7,
			"y": 520.74066,
			"z": 100401.65
		},
		"killerVelocity": {
			"x": 285.7761,
			"y": -38.642574,
			"z": -66.94739
		},
		"victimVelocity": {
			"x": 20.238922,
			"y": -56.43523,
			"z": -102.686874
		}
	}, {
		"_id": {
			"$oid": "63e7fe3691c1eb4fd05357d8"
		},
		"id": "2f1f9d29-aab7-444b-bac4-550483953fa6",
		"time": {
			"$numberLong": "1676148278964"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199427902415",
		"killerId": "76561198882007329",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51551.867,
			"y": 279.4677,
			"z": 118763.39
		},
		"victimPosition": {
			"x": 51563.21,
			"y": 279.46054,
			"z": 118744.695
		},
		"killerVelocity": {
			"x": -0.00009268827,
			"y": 0.00018653274,
			"z": 0.00014525985
		},
		"victimVelocity": {
			"x": 43.57914,
			"y": -0.21277422,
			"z": 17.929789
		}
	}, {
		"_id": {
			"$oid": "63e7ffb891c1eb4fd053580e"
		},
		"id": "04e2cb5b-9d79-4bf1-beef-6461ea9e1fdc",
		"time": {
			"$numberLong": "1676148664004"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199427902415",
		"killerId": "76561198882007329",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52440.812,
			"y": 330.3054,
			"z": 118740.66
		},
		"victimPosition": {
			"x": 52731.297,
			"y": 300.28238,
			"z": 118450.32
		},
		"killerVelocity": {
			"x": 77.53153,
			"y": 3.4766967,
			"z": -48.30421
		},
		"victimVelocity": {
			"x": -37.178726,
			"y": -20.157665,
			"z": -82.32558
		}
	}, {
		"_id": {
			"$oid": "63e8075f91c1eb4fd05358cd"
		},
		"id": "c4236694-455f-475c-af96-5a3327fc91c7",
		"time": {
			"$numberLong": "1676150623954"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197960780798",
		"killerId": "76561199123816117",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 83877.695,
			"y": 2823.3594,
			"z": 69422.95
		},
		"victimPosition": {
			"x": 83798.52,
			"y": 2658.7395,
			"z": 69397.84
		},
		"killerVelocity": {
			"x": 320.08203,
			"y": -62.554836,
			"z": 223.19853
		},
		"victimVelocity": {
			"x": 107.357315,
			"y": -57.70876,
			"z": 75.315834
		}
	}, {
		"_id": {
			"$oid": "63e81c6791c1eb4fd0535afc"
		},
		"id": "47eabc6f-52d2-491b-b378-00a78c4cb5e0",
		"time": {
			"$numberLong": "1676156007697"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197960780798",
		"killerId": "76561198088270455",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 77390.69,
			"y": 1600.3347,
			"z": 102698.98
		},
		"victimPosition": {
			"x": 77594.164,
			"y": 1533.6449,
			"z": 106930.02
		},
		"killerVelocity": {
			"x": 200.2681,
			"y": -40.387897,
			"z": 102.652504
		},
		"victimVelocity": {
			"x": -315.111,
			"y": -35.268772,
			"z": -131.57166
		}
	}, {
		"_id": {
			"$oid": "63e823f791c1eb4fd0535bb4"
		},
		"id": "659b66ab-f58e-4f5c-adc0-18b4754fed97",
		"time": {
			"$numberLong": "1676157943149"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199378304485",
		"killerId": "76561199451447128",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52503.547,
			"y": 310.9287,
			"z": 118959.23
		},
		"victimPosition": {
			"x": 52983.984,
			"y": 365.5873,
			"z": 120060.914
		},
		"killerVelocity": {
			"x": 74.762146,
			"y": 16.010025,
			"z": 26.79501
		},
		"victimVelocity": {
			"x": -34.425205,
			"y": -58.747604,
			"z": 44.216854
		}
	}, {
		"_id": {
			"$oid": "63e824c991c1eb4fd0535bc7"
		},
		"id": "58253b24-75bc-418d-82d0-7d86ec9146c7",
		"time": {
			"$numberLong": "1676158153028"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199451447128",
		"killerId": "76561199378304485",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 72484.734,
			"y": 1781.7197,
			"z": 106357.82
		},
		"victimPosition": {
			"x": 75536.66,
			"y": 1186.4559,
			"z": 103039.48
		},
		"killerVelocity": {
			"x": 260.25784,
			"y": 74.582535,
			"z": -218.7108
		},
		"victimVelocity": {
			"x": 19.584375,
			"y": -15.893211,
			"z": 288.56836
		}
	}, {
		"_id": {
			"$oid": "63e8265991c1eb4fd0535bef"
		},
		"id": "6aca0d66-51ce-45da-8796-8723d98d1553",
		"time": {
			"$numberLong": "1676158553527"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199451447128",
		"killerId": "76561198085821666",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58557.64,
			"y": 1683.8218,
			"z": 117342.266
		},
		"victimPosition": {
			"x": 61427.863,
			"y": 902.85675,
			"z": 116123.03
		},
		"killerVelocity": {
			"x": 157.99834,
			"y": 57.10065,
			"z": -46.954697
		},
		"victimVelocity": {
			"x": -303.28064,
			"y": -0.16724852,
			"z": 201.8375
		}
	}, {
		"_id": {
			"$oid": "63e8309591c1eb4fd0535cdc"
		},
		"id": "c5f35f92-c40b-4f23-b764-4d7460fdc007",
		"time": {
			"$numberLong": "1676161173415"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199233932193",
		"killerId": "76561198088219796",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52686.06,
			"y": 278.70245,
			"z": 119115.76
		},
		"victimPosition": {
			"x": 79046.63,
			"y": 5215.1587,
			"z": 96439.24
		},
		"killerVelocity": {
			"x": -0.0019038467,
			"y": -0.005566135,
			"z": 0.007529932
		},
		"victimVelocity": {
			"x": 132.07018,
			"y": -247.61217,
			"z": -222.84555
		}
	}, {
		"_id": {
			"$oid": "63e8352891c1eb4fd0535d3e"
		},
		"id": "b0dd1537-1e5d-43f6-897e-2a5553fb18e8",
		"time": {
			"$numberLong": "1676162344878"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198160633791",
		"killerId": "76561198088219796",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88396.45,
			"y": 1532.9745,
			"z": 75983.42
		},
		"victimPosition": {
			"x": 87831.45,
			"y": 1179.1359,
			"z": 73678.51
		},
		"killerVelocity": {
			"x": -60.158386,
			"y": -17.74353,
			"z": -342.35788
		},
		"victimVelocity": {
			"x": -243.79448,
			"y": 20.60377,
			"z": 27.396221
		}
	}, {
		"_id": {
			"$oid": "63e8464991c1eb4fd0535eb2"
		},
		"id": "d018ef8e-2bb3-476d-a9ab-5f8e79dc0667",
		"time": {
			"$numberLong": "1676166729567"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198139796178",
		"killerId": "76561199087736020",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 100268.19,
			"y": 3077.386,
			"z": 73567.234
		},
		"victimPosition": {
			"x": 101897.01,
			"y": 1879.7463,
			"z": 75819.805
		},
		"killerVelocity": {
			"x": 342.0337,
			"y": -97.83241,
			"z": 152.50089
		},
		"victimVelocity": {
			"x": 73.68139,
			"y": -15.971798,
			"z": 137.03421
		}
	}, {
		"_id": {
			"$oid": "63e84e6d91c1eb4fd0535f77"
		},
		"id": "d75488ec-cb08-4084-b79d-504f5c1de432",
		"time": {
			"$numberLong": "1676168813011"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198823362981",
		"killerId": "76561199122049055",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62871.82,
			"y": 1943.1191,
			"z": 129816.336
		},
		"victimPosition": {
			"x": 63138.79,
			"y": 2347.783,
			"z": 131082.34
		},
		"killerVelocity": {
			"x": 52.75842,
			"y": 22.648346,
			"z": 163.72371
		},
		"victimVelocity": {
			"x": -14.248676,
			"y": -7.122943,
			"z": 135.9363
		}
	}, {
		"_id": {
			"$oid": "63e8548c91c1eb4fd053603a"
		},
		"id": "9c3cb892-d854-4cd2-854d-f5ecfb457a47",
		"time": {
			"$numberLong": "1676170380439"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198173150838",
		"killerId": "76561199433486296",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50366.68,
			"y": 314.80875,
			"z": 118102.25
		},
		"victimPosition": {
			"x": 50460.35,
			"y": 277.6427,
			"z": 118053.65
		},
		"killerVelocity": {
			"x": 207.8433,
			"y": -84.66353,
			"z": -118.45995
		},
		"victimVelocity": {
			"x": -7.124446,
			"y": -0.15887946,
			"z": 1.8612858
		}
	}, {
		"_id": {
			"$oid": "63e8551791c1eb4fd0536050"
		},
		"id": "8269b3a1-5050-4e4c-aee6-7a6c5e068594",
		"time": {
			"$numberLong": "1676170519111"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198890263624",
		"killerId": "76561199433486296",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62610.094,
			"y": 1324.5986,
			"z": 119045.49
		},
		"victimPosition": {
			"x": 65046.56,
			"y": 1192.2292,
			"z": 117205.69
		},
		"killerVelocity": {
			"x": 219.49748,
			"y": -24.294193,
			"z": -56.670837
		},
		"victimVelocity": {
			"x": -45.561687,
			"y": -98.385994,
			"z": -257.03217
		}
	}, {
		"_id": {
			"$oid": "63e85e9591c1eb4fd053612d"
		},
		"id": "21dac0d4-2b60-42b3-9394-b385dfee4eec",
		"time": {
			"$numberLong": "1676172949424"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197967875488",
		"killerId": "76561198001913298",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 71691.37,
			"y": 4682.56,
			"z": 122717.05
		},
		"victimPosition": {
			"x": 66422.68,
			"y": 550.7641,
			"z": 106220.35
		},
		"killerVelocity": {
			"x": 174.20192,
			"y": 4.2683845,
			"z": -201.34402
		},
		"victimVelocity": {
			"x": 132.05087,
			"y": -10.334718,
			"z": 150.72711
		}
	}, {
		"_id": {
			"$oid": "63e8647891c1eb4fd05361b8"
		},
		"id": "ec4e1f89-f6bc-4ec5-a3fa-9aeed2ab3678",
		"time": {
			"$numberLong": "1676174456710"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199065366881",
		"killerId": "76561198001913298",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 108900.2,
			"y": 2197.9006,
			"z": 83184.41
		},
		"victimPosition": {
			"x": 108493.58,
			"y": 1055.074,
			"z": 79926.625
		},
		"killerVelocity": {
			"x": -402.7142,
			"y": -171.92032,
			"z": 28.874592
		},
		"victimVelocity": {
			"x": -106.29278,
			"y": -112.16292,
			"z": -29.136425
		}
	}, {
		"_id": {
			"$oid": "63e86c5d91c1eb4fd0536293"
		},
		"id": "630850bd-7d7f-49c5-b9f9-7e3834546f1d",
		"time": {
			"$numberLong": "1676176477112"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199428241225",
		"killerId": "76561199040317866",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 81707.88,
			"y": 1658.6981,
			"z": 90882.42
		},
		"victimPosition": {
			"x": 82956.7,
			"y": 1394.5443,
			"z": 92665.95
		},
		"killerVelocity": {
			"x": 352.74298,
			"y": -22.824938,
			"z": -42.57267
		},
		"victimVelocity": {
			"x": -26.25203,
			"y": -69.41638,
			"z": 132.05864
		}
	}, {
		"_id": {
			"$oid": "63e8729191c1eb4fd0536324"
		},
		"id": "c00c4d68-2ced-4b99-9eee-da58db9d2e57",
		"time": {
			"$numberLong": "1676178065785"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198150023106",
		"killerId": "76561198027946784",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 95079.95,
			"y": 2485.734,
			"z": 71750.45
		},
		"victimPosition": {
			"x": 93527.47,
			"y": 1465.003,
			"z": 68764.71
		},
		"killerVelocity": {
			"x": 173.60085,
			"y": -69.93122,
			"z": -375.13815
		},
		"victimVelocity": {
			"x": -78.508125,
			"y": 2.1108696,
			"z": 213.09006
		}
	}, {
		"_id": {
			"$oid": "63e8798a91c1eb4fd05363c5"
		},
		"id": "70514092-3cfa-4bb0-aae2-879f103fc788",
		"time": {
			"$numberLong": "1676179850665"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199215167715",
		"killerId": "76561199037590588",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 120149.48,
			"y": 1739.8319,
			"z": 82003.21
		},
		"victimPosition": {
			"x": 119263.96,
			"y": 2366.282,
			"z": 79302.46
		},
		"killerVelocity": {
			"x": -94.31829,
			"y": 59.602905,
			"z": -281.99823
		},
		"victimVelocity": {
			"x": -75.86609,
			"y": 9.355701,
			"z": -218.94957
		}
	}, {
		"_id": {
			"$oid": "63e8a64691c1eb4fd053670f"
		},
		"id": "14350f07-c1b7-4e1f-8f01-823f6e3e2720",
		"time": {
			"$numberLong": "1676191302564"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198090212607",
		"killerId": "76561198966031413",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73148.39,
			"y": 4272.798,
			"z": 102886.83
		},
		"victimPosition": {
			"x": 74352.07,
			"y": 4186.4736,
			"z": 99627.12
		},
		"killerVelocity": {
			"x": 117.484535,
			"y": 14.447444,
			"z": -351.7206
		},
		"victimVelocity": {
			"x": -16.72068,
			"y": -105.32802,
			"z": 158.22806
		}
	}, {
		"_id": {
			"$oid": "63e8b6c991c1eb4fd05367bb"
		},
		"id": "5f5e4f41-5fea-4a7f-a790-acd6df37a37a",
		"time": {
			"$numberLong": "1676195529680"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199040317866",
		"killerId": "76561198053177998",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 103597.42,
			"y": 1857.4073,
			"z": 70598.33
		},
		"victimPosition": {
			"x": 107333.74,
			"y": 1074.9777,
			"z": 69106.266
		},
		"killerVelocity": {
			"x": 369.9462,
			"y": -96.98392,
			"z": -112.01596
		},
		"victimVelocity": {
			"x": 280.19196,
			"y": 68.87736,
			"z": 170.11569
		}
	}, {
		"_id": {
			"$oid": "63e8f4e091c1eb4fd0536910"
		},
		"id": "25bb890a-0d13-4896-b8db-7cd21cbf138d",
		"time": {
			"$numberLong": "1676211424256"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198063156427",
		"killerId": "76561198040405786",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 56022.703,
			"y": 1726.1455,
			"z": 100700.11
		},
		"victimPosition": {
			"x": 57791.67,
			"y": 1449.172,
			"z": 100186.51
		},
		"killerVelocity": {
			"x": 246.92984,
			"y": -17.382572,
			"z": -122.48292
		},
		"victimVelocity": {
			"x": 175.7478,
			"y": -67.52302,
			"z": 111.17301
		}
	}, {
		"_id": {
			"$oid": "63e8f5c491c1eb4fd0536916"
		},
		"id": "943ff182-fcaa-4d78-99ce-3c268169c656",
		"time": {
			"$numberLong": "1676211652836"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199149330873",
		"killerId": "76561198826690733",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58650.742,
			"y": 723.90076,
			"z": 118531.516
		},
		"victimPosition": {
			"x": 62500.188,
			"y": 1536.5352,
			"z": 118948.48
		},
		"killerVelocity": {
			"x": 350.52997,
			"y": 16.659521,
			"z": 37.298122
		},
		"victimVelocity": {
			"x": 234.86423,
			"y": 177.97847,
			"z": 87.050316
		}
	}, {
		"_id": {
			"$oid": "63e8f6ff91c1eb4fd0536922"
		},
		"id": "56a4550b-f9ac-4db5-a099-a4d0a824b68c",
		"time": {
			"$numberLong": "1676211967988"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199153548254",
		"killerId": "76561199149330873",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60525.64,
			"y": 1035.2169,
			"z": 112124.19
		},
		"victimPosition": {
			"x": 60696.652,
			"y": 613.74585,
			"z": 112662.61
		},
		"killerVelocity": {
			"x": 91.70945,
			"y": -150.46414,
			"z": 117.40737
		},
		"victimVelocity": {
			"x": -215.29713,
			"y": -3.966527,
			"z": 201.95515
		}
	}, {
		"_id": {
			"$oid": "63e8fc1091c1eb4fd0536968"
		},
		"id": "44bcf1a6-b3cb-42ca-b0ba-1a3758c01299",
		"time": {
			"$numberLong": "1676213264895"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198967315692",
		"killerId": "76561198826690733",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 73830.96,
			"y": 1345.3953,
			"z": 106731.914
		},
		"victimPosition": {
			"x": 83466.016,
			"y": 1576.616,
			"z": 102335.516
		},
		"killerVelocity": {
			"x": 352.62628,
			"y": 5.3595843,
			"z": -119.29026
		},
		"victimVelocity": {
			"x": 249.5482,
			"y": 54.123974,
			"z": 35.957752
		}
	}, {
		"_id": {
			"$oid": "63e9057691c1eb4fd0536a12"
		},
		"id": "efbf7a31-d826-4944-8aa6-a7694f8f31e8",
		"time": {
			"$numberLong": "1676215670835"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197985498412",
		"killerId": "76561199114264581",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 84275.586,
			"y": 1185.0415,
			"z": 88939.484
		},
		"victimPosition": {
			"x": 85662.59,
			"y": 945.08124,
			"z": 87650.234
		},
		"killerVelocity": {
			"x": 246.52692,
			"y": -19.810417,
			"z": -271.92206
		},
		"victimVelocity": {
			"x": 321.8808,
			"y": 15.366638,
			"z": -167.15141
		}
	}, {
		"_id": {
			"$oid": "63e9068a91c1eb4fd0536a24"
		},
		"id": "97097062-e883-405e-9fcb-5e346ed744cc",
		"time": {
			"$numberLong": "1676215946034"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199114264581",
		"killerId": "76561198282227778",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 109396.52,
			"y": 5067.221,
			"z": 55197.977
		},
		"victimPosition": {
			"x": 109030.63,
			"y": 4317.3364,
			"z": 39318.78
		},
		"killerVelocity": {
			"x": -8.516179,
			"y": -36.84116,
			"z": -354.56955
		},
		"victimVelocity": {
			"x": -149.04134,
			"y": 105.31294,
			"z": -179.82246
		}
	}, {
		"_id": {
			"$oid": "63e907ed91c1eb4fd0536a3e"
		},
		"id": "a3c409f6-71e0-40f4-915e-1ef887dd3ba1",
		"time": {
			"$numberLong": "1676216301792"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198101845392",
		"killerId": "76561198807641300",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51954.598,
			"y": 288.04446,
			"z": 118598.76
		},
		"victimPosition": {
			"x": 52576.895,
			"y": 399.8614,
			"z": 118733.375
		},
		"killerVelocity": {
			"x": 119.51227,
			"y": 7.164624,
			"z": 26.804037
		},
		"victimVelocity": {
			"x": 2.3115149,
			"y": 9.835867,
			"z": -9.924717
		}
	}, {
		"_id": {
			"$oid": "63e9139891c1eb4fd0536afe"
		},
		"id": "f6cb458d-f038-4552-981b-6bd591c11c04",
		"time": {
			"$numberLong": "1676219288778"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199147673870",
		"killerId": "76561199326023991",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 60589.16,
			"y": 604.57904,
			"z": 115194.195
		},
		"victimPosition": {
			"x": 58014.746,
			"y": 299.77475,
			"z": 115969.63
		},
		"killerVelocity": {
			"x": -346.1597,
			"y": -3.062659,
			"z": 96.79191
		},
		"victimVelocity": {
			"x": 257.7985,
			"y": 4.7568345,
			"z": -49.535683
		}
	}, {
		"_id": {
			"$oid": "63e913d191c1eb4fd0536b04"
		},
		"id": "b1a65175-0da8-417e-a4ae-1361b141ed1c",
		"time": {
			"$numberLong": "1676219345155"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199050767292",
		"killerId": "76561199326023991",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54798.375,
			"y": 1458.9147,
			"z": 114778.51
		},
		"victimPosition": {
			"x": 55831.953,
			"y": 1598.3386,
			"z": 114525.266
		},
		"killerVelocity": {
			"x": 227.29027,
			"y": 8.876185,
			"z": -92.80039
		},
		"victimVelocity": {
			"x": -174.09444,
			"y": -63.420807,
			"z": 120.43078
		}
	}, {
		"_id": {
			"$oid": "63e914ee91c1eb4fd0536b22"
		},
		"id": "5255db60-6fc3-483e-a0ce-07ebf02bded9",
		"time": {
			"$numberLong": "1676219630312"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199050767292",
		"killerId": "76561199326023991",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 82570.945,
			"y": 1704.025,
			"z": 94711.14
		},
		"victimPosition": {
			"x": 85210.73,
			"y": 2315.8157,
			"z": 92959.16
		},
		"killerVelocity": {
			"x": 288.9438,
			"y": 16.356783,
			"z": -136.21921
		},
		"victimVelocity": {
			"x": 307.1811,
			"y": 24.844816,
			"z": -215.6848
		}
	}, {
		"_id": {
			"$oid": "63e9253c91c1eb4fd0536bbc"
		},
		"id": "26270347-b65a-43ab-961b-c15649810786",
		"time": {
			"$numberLong": "1676223804311"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199156258764",
		"killerId": "76561199015566132",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 91037.75,
			"y": 3380.0344,
			"z": 91932.414
		},
		"victimPosition": {
			"x": 102547.984,
			"y": 5784.909,
			"z": 83388.11
		},
		"killerVelocity": {
			"x": 225.43553,
			"y": 28.430698,
			"z": -151.77394
		},
		"victimVelocity": {
			"x": -80.162186,
			"y": -32.160957,
			"z": 168.1729
		}
	}, {
		"_id": {
			"$oid": "63e92ac991c1eb4fd0536c2e"
		},
		"id": "97a1b5da-4902-4bb9-ac69-632a1d7ac412",
		"time": {
			"$numberLong": "1676225225555"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198305478917",
		"killerId": "76561199201614965",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58487.37,
			"y": 627.25366,
			"z": 114358.07
		},
		"victimPosition": {
			"x": 60034.645,
			"y": 602.7222,
			"z": 112877.305
		},
		"killerVelocity": {
			"x": 122.61428,
			"y": 8.544246,
			"z": -256.1163
		},
		"victimVelocity": {
			"x": 254.33826,
			"y": -63.985718,
			"z": 122.487495
		}
	}, {
		"_id": {
			"$oid": "63e92afc91c1eb4fd0536c35"
		},
		"id": "9bdf9af3-4357-44e8-a4e7-2eaf3be90d27",
		"time": {
			"$numberLong": "1676225276951"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199201614965",
		"killerId": "76561198038207394",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 54099.09,
			"y": 3612.3843,
			"z": 107000.66
		},
		"victimPosition": {
			"x": 67287.06,
			"y": 967.9098,
			"z": 105851.445
		},
		"killerVelocity": {
			"x": -238.08455,
			"y": -17.4513,
			"z": -237.89342
		},
		"victimVelocity": {
			"x": 173.19978,
			"y": -177.6172,
			"z": 38.41238
		}
	}, {
		"_id": {
			"$oid": "63e92b4b91c1eb4fd0536c3b"
		},
		"id": "71cb8723-a2f9-4780-a2a3-e6136f83419d",
		"time": {
			"$numberLong": "1676225355141"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199401194157",
		"killerId": "76561199201614965",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51685.582,
			"y": 287.973,
			"z": 118743.06
		},
		"victimPosition": {
			"x": 54053.594,
			"y": 497.5734,
			"z": 119150.16
		},
		"killerVelocity": {
			"x": 24.63683,
			"y": 1.6697252,
			"z": 2.4367394
		},
		"victimVelocity": {
			"x": 91.20061,
			"y": 16.597303,
			"z": 18.780842
		}
	}, {
		"_id": {
			"$oid": "63e9420191c1eb4fd0536e6e"
		},
		"id": "fa064fb7-c167-4cca-9822-0f3bda481381",
		"time": {
			"$numberLong": "1676231169648"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198819174958",
		"killerId": "76561198087980522",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101679.8,
			"y": 1993.2375,
			"z": 129585.41
		},
		"victimPosition": {
			"x": 102696.766,
			"y": 1735.1519,
			"z": 129685.19
		},
		"killerVelocity": {
			"x": 302.97238,
			"y": 96.254684,
			"z": 100.21958
		},
		"victimVelocity": {
			"x": 133.6448,
			"y": -0.25722626,
			"z": -50.408154
		}
	}, {
		"_id": {
			"$oid": "63e94e6091c1eb4fd0536fad"
		},
		"id": "fce470d6-3b0b-4d8f-b957-b26cf35a698f",
		"time": {
			"$numberLong": "1676234336773"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198297286665",
		"killerId": "76561198862770833",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 75419.92,
			"y": 1920.8871,
			"z": 60205.996
		},
		"victimPosition": {
			"x": 77063.95,
			"y": 1289.1475,
			"z": 60845.945
		},
		"killerVelocity": {
			"x": 311.93127,
			"y": -14.864806,
			"z": -14.630757
		},
		"victimVelocity": {
			"x": -0.1553657,
			"y": 19.305134,
			"z": -39.710083
		}
	}, {
		"_id": {
			"$oid": "63e95d2791c1eb4fd0537122"
		},
		"id": "de11aa5c-c9fb-46ae-8611-04ec1c87b043",
		"time": {
			"$numberLong": "1676238119237"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198402164294",
		"killerId": "76561198046555739",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 76039.89,
			"y": 8537.052,
			"z": 108479.71
		},
		"victimPosition": {
			"x": 74357.26,
			"y": 3729.6636,
			"z": 90583.016
		},
		"killerVelocity": {
			"x": -77.31869,
			"y": -83.04113,
			"z": -377.73273
		},
		"victimVelocity": {
			"x": -106.279816,
			"y": -34.389004,
			"z": -373.68503
		}
	}, {
		"_id": {
			"$oid": "63e976ac91c1eb4fd05373d7"
		},
		"id": "a4c20927-6abc-4418-8fcd-e23a1ef93f95",
		"time": {
			"$numberLong": "1676244652829"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198210181936",
		"killerId": "76561199031695548",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 85160.15,
			"y": 1421.9186,
			"z": 90444.94
		},
		"victimPosition": {
			"x": 86378.5,
			"y": 1484.4264,
			"z": 91517.83
		},
		"killerVelocity": {
			"x": 340.2411,
			"y": 7.0594788,
			"z": 176.9123
		},
		"victimVelocity": {
			"x": 63.067795,
			"y": -0.0013142601,
			"z": 195.60815
		}
	}, {
		"_id": {
			"$oid": "63e97af291c1eb4fd0537454"
		},
		"id": "2a0d3eca-5666-4d54-86e8-cb914897c4d6",
		"time": {
			"$numberLong": "1676245746330"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198066173106",
		"killerId": "76561198063083053",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 78283.664,
			"y": 784.75146,
			"z": 98742.625
		},
		"victimPosition": {
			"x": 87662.57,
			"y": 1022.68774,
			"z": 91963.26
		},
		"killerVelocity": {
			"x": 246.84575,
			"y": 11.016064,
			"z": 23.572016
		},
		"victimVelocity": {
			"x": -179.03566,
			"y": 31.113983,
			"z": -46.88734
		}
	}, {
		"_id": {
			"$oid": "63e9c1f691c1eb4fd05379c6"
		},
		"id": "8887bec7-79ac-4368-838f-df0d41029b7a",
		"time": {
			"$numberLong": "1676263926996"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199108867901",
		"killerId": "76561199448627249",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51182.37,
			"y": 279.43472,
			"z": 118667.19
		},
		"victimPosition": {
			"x": 51187.375,
			"y": 279.4578,
			"z": 118638.016
		},
		"killerVelocity": {
			"x": 0.3101051,
			"y": 0.00028453767,
			"z": -1.4260441
		},
		"victimVelocity": {
			"x": 16.431494,
			"y": -0.021035492,
			"z": 5.820482
		}
	}, {
		"_id": {
			"$oid": "63e9caa291c1eb4fd0537a61"
		},
		"id": "fbd7605c-aec0-4e28-80eb-78d6b3d76aeb",
		"time": {
			"$numberLong": "1676266146593"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199218450118",
		"killerId": "76561198150023106",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 46920.773,
			"y": 782.02,
			"z": 117120.82
		},
		"victimPosition": {
			"x": 46836.715,
			"y": 449.21454,
			"z": 116612.66
		},
		"killerVelocity": {
			"x": 46.840027,
			"y": -41.2848,
			"z": -222.38393
		},
		"victimVelocity": {
			"x": 75.67439,
			"y": -96.54167,
			"z": -182.91443
		}
	}, {
		"_id": {
			"$oid": "63e9cafa91c1eb4fd0537a6d"
		},
		"id": "abf7ef78-8ede-4c5b-8c60-fe13e059d49e",
		"time": {
			"$numberLong": "1676266234812"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199218450118",
		"killerId": "76561198150023106",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51888.293,
			"y": 632.81995,
			"z": 120135.6
		},
		"victimPosition": {
			"x": 52499.707,
			"y": 278.68747,
			"z": 119016.78
		},
		"killerVelocity": {
			"x": 43.57322,
			"y": -64.215744,
			"z": -94.63541
		},
		"victimVelocity": {
			"x": 1.972044,
			"y": 0.00026202947,
			"z": -10.976857
		}
	}, {
		"_id": {
			"$oid": "63e9dc2291c1eb4fd0537b3e"
		},
		"id": "7674b485-e55b-4edc-ba14-bf57815b7477",
		"time": {
			"$numberLong": "1676270626470"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199216326680",
		"killerId": "76561199109258293",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 62286.812,
			"y": 706.3516,
			"z": 118237.56
		},
		"victimPosition": {
			"x": 64116.23,
			"y": 682.8499,
			"z": 117703.39
		},
		"killerVelocity": {
			"x": 156.35248,
			"y": -4.0649624,
			"z": -54.96419
		},
		"victimVelocity": {
			"x": 172.40411,
			"y": -55.711197,
			"z": -60.470448
		}
	}, {
		"_id": {
			"$oid": "63e9dc9491c1eb4fd0537b47"
		},
		"id": "60713707-e9d6-4229-a2a2-a95372988df2",
		"time": {
			"$numberLong": "1676270740062"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199216326680",
		"killerId": "76561199109258293",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50795.52,
			"y": 279.40256,
			"z": 118411.06
		},
		"victimPosition": {
			"x": 50807.074,
			"y": 279.48495,
			"z": 118328.73
		},
		"killerVelocity": {
			"x": 1.2900419,
			"y": -0.09285669,
			"z": -10.974015
		},
		"victimVelocity": {
			"x": -0.3084412,
			"y": -0.007659711,
			"z": -2.4371583
		}
	}, {
		"_id": {
			"$oid": "63e9f5d391c1eb4fd0537c4d"
		},
		"id": "57687768-02cd-4e9c-91ab-ca2c79359f75",
		"time": {
			"$numberLong": "1676277203799"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198181715289",
		"killerId": "76561199016973925",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 101016.75,
			"y": 7718.172,
			"z": 123497.195
		},
		"victimPosition": {
			"x": 101279.4,
			"y": 7553.6743,
			"z": 127739.984
		},
		"killerVelocity": {
			"x": 43.917515,
			"y": -20.358429,
			"z": 406.7783
		},
		"victimVelocity": {
			"x": -266.15643,
			"y": -69.900055,
			"z": 122.27521
		}
	}, {
		"_id": {
			"$oid": "63ea249b91c1eb4fd0537dc4"
		},
		"id": "207596b2-91ae-4ad3-9481-df22ef59e94c",
		"time": {
			"$numberLong": "1676289179518"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198008743477",
		"killerId": "76561199416468959",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 37325.832,
			"y": 1997.1816,
			"z": 152842.6
		},
		"victimPosition": {
			"x": 37811.766,
			"y": 1632.3627,
			"z": 153523.6
		},
		"killerVelocity": {
			"x": -92.87721,
			"y": -18.642717,
			"z": -75.38301
		},
		"victimVelocity": {
			"x": 54.5241,
			"y": -19.957375,
			"z": -68.2751
		}
	}, {
		"_id": {
			"$oid": "63ea788d91c1eb4fd0537f63"
		},
		"id": "7aab1efc-ea1f-44ab-8fca-04dab7dd8e57",
		"time": {
			"$numberLong": "1676310669387"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198870991210",
		"killerId": "76561199401560913",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55337.094,
			"y": 1152.3856,
			"z": 118410.83
		},
		"victimPosition": {
			"x": 54838.066,
			"y": 777.03723,
			"z": 118622.85
		},
		"killerVelocity": {
			"x": -237.38042,
			"y": -112.23402,
			"z": 63.876328
		},
		"victimVelocity": {
			"x": -127.77076,
			"y": -48.99279,
			"z": 21.786364
		}
	}, {
		"_id": {
			"$oid": "63ea795891c1eb4fd0537f6e"
		},
		"id": "d0106f06-7b8a-4724-b8ed-0253f9c6cb16",
		"time": {
			"$numberLong": "1676310872693"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199168501434",
		"killerId": "76561199401560913",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 65575.92,
			"y": 3910.391,
			"z": 95923.44
		},
		"victimPosition": {
			"x": 50517.31,
			"y": 5210.851,
			"z": 95813.77
		},
		"killerVelocity": {
			"x": -377.42642,
			"y": -24.11278,
			"z": 34.137905
		},
		"victimVelocity": {
			"x": 271.1688,
			"y": -71.607765,
			"z": -61.031956
		}
	}, {
		"_id": {
			"$oid": "63ea7a1f91c1eb4fd0537f7d"
		},
		"id": "6146d47f-6ba9-49c3-b565-f68ac767752c",
		"time": {
			"$numberLong": "1676311071352"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198017924070",
		"killerId": "76561199401560913",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 57198.23,
			"y": 2867.932,
			"z": 116619.61
		},
		"victimPosition": {
			"x": 57252.145,
			"y": 3014.6907,
			"z": 115905.016
		},
		"killerVelocity": {
			"x": 3.7542007,
			"y": 4.2739515,
			"z": -154.57706
		},
		"victimVelocity": {
			"x": 62.462807,
			"y": -10.2988825,
			"z": -114.508575
		}
	}, {
		"_id": {
			"$oid": "63ea7b3c91c1eb4fd0537fa0"
		},
		"id": "47228618-a53d-4f87-8087-460f37d41d49",
		"time": {
			"$numberLong": "1676311356723"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199020626108",
		"killerId": "76561199401560913",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 61579.73,
			"y": 2939.2632,
			"z": 113586.164
		},
		"victimPosition": {
			"x": 63962.516,
			"y": 4043.5784,
			"z": 110208.61
		},
		"killerVelocity": {
			"x": 140.56259,
			"y": 51.63209,
			"z": -225.52191
		},
		"victimVelocity": {
			"x": 51.094547,
			"y": -6.7640433,
			"z": -149.26614
		}
	}, {
		"_id": {
			"$oid": "63ea901291c1eb4fd0538176"
		},
		"id": "721af444-9f25-49b5-84a3-7f60f40e0703",
		"time": {
			"$numberLong": "1676316690559"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199247713501",
		"killerId": "76561199203252859",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 50941.57,
			"y": 279.44333,
			"z": 118562.13
		},
		"victimPosition": {
			"x": 50992.152,
			"y": 279.46567,
			"z": 118580.54
		},
		"killerVelocity": {
			"x": 19.297588,
			"y": 0.11197006,
			"z": 6.793794
		},
		"victimVelocity": {
			"x": 0.01579466,
			"y": -0.0020326301,
			"z": -0.043854494
		}
	}, {
		"_id": {
			"$oid": "63ea908091c1eb4fd053817f"
		},
		"id": "43bf1c03-aae0-40f1-927b-655bdf8b5763",
		"time": {
			"$numberLong": "1676316800263"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199247713501",
		"killerId": "76561199203252859",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 51304.402,
			"y": 279.4823,
			"z": 118418.88
		},
		"victimPosition": {
			"x": 51332.406,
			"y": 279.46786,
			"z": 118410.19
		},
		"killerVelocity": {
			"x": 44.968925,
			"y": -0.0012653098,
			"z": -20.535685
		},
		"victimVelocity": {
			"x": 6.161397,
			"y": 0.0018714294,
			"z": 8.194717
		}
	}, {
		"_id": {
			"$oid": "63ea922f91c1eb4fd05381ac"
		},
		"id": "f7943143-e0b0-436e-81d5-a488ee963338",
		"time": {
			"$numberLong": "1676317231371"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199203252859",
		"killerId": "76561198081573226",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52951.863,
			"y": 606.3674,
			"z": 118806.914
		},
		"victimPosition": {
			"x": 51623.008,
			"y": 278.71127,
			"z": 118393.92
		},
		"killerVelocity": {
			"x": 154.8238,
			"y": 34.40025,
			"z": 25.41721
		},
		"victimVelocity": {
			"x": 6.619487,
			"y": 0.2839711,
			"z": -37.49432
		}
	}, {
		"_id": {
			"$oid": "63ea92d791c1eb4fd05381b9"
		},
		"id": "40ee43c6-ff5a-48ab-837f-d21ff9a096f9",
		"time": {
			"$numberLong": "1676317399322"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199247713501",
		"killerId": "76561199203252859",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 53477.848,
			"y": 355.56943,
			"z": 118690.34
		},
		"victimPosition": {
			"x": 56062.25,
			"y": 377.56622,
			"z": 117519.38
		},
		"killerVelocity": {
			"x": 48.42817,
			"y": 2.6444995,
			"z": -7.7042713
		},
		"victimVelocity": {
			"x": 181.86096,
			"y": -23.03437,
			"z": -112.17992
		}
	}, {
		"_id": {
			"$oid": "63ea92fd91c1eb4fd05381bd"
		},
		"id": "e9daa3ea-f46c-4ce9-943a-6cfe7945c667",
		"time": {
			"$numberLong": "1676317437966"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198081573226",
		"killerId": "76561198115505153",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 68593.17,
			"y": 2789.674,
			"z": 104061.55
		},
		"victimPosition": {
			"x": 79475.86,
			"y": 2477.318,
			"z": 103895.14
		},
		"killerVelocity": {
			"x": 212.84619,
			"y": -6.9860415,
			"z": -264.52332
		},
		"victimVelocity": {
			"x": -95.334236,
			"y": 68.781136,
			"z": 118.725876
		}
	}, {
		"_id": {
			"$oid": "63ea956291c1eb4fd05381eb"
		},
		"id": "31e775ec-f9c2-4433-b3f1-27b9cb3ddaa2",
		"time": {
			"$numberLong": "1676318050089"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199198391698",
		"killerId": "76561198323465571",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52334.008,
			"y": 1557.6696,
			"z": 113981.92
		},
		"victimPosition": {
			"x": 54721.91,
			"y": 306.9626,
			"z": 118068.2
		},
		"killerVelocity": {
			"x": 46.758778,
			"y": -83.10492,
			"z": 402.5492
		},
		"victimVelocity": {
			"x": 174.94402,
			"y": 37.63791,
			"z": -136.9272
		}
	}, {
		"_id": {
			"$oid": "63ea956c91c1eb4fd05381ef"
		},
		"id": "6d89786b-b23f-46b3-88fa-1db8be63dc0a",
		"time": {
			"$numberLong": "1676318060675"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198115505153",
		"killerId": "76561198323465571",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 52415.89,
			"y": 598.4925,
			"z": 117962.484
		},
		"victimPosition": {
			"x": 52409.777,
			"y": 336.96555,
			"z": 118566.24
		},
		"killerVelocity": {
			"x": -35.710747,
			"y": -81.51392,
			"z": 322.36774
		},
		"victimVelocity": {
			"x": 23.784803,
			"y": 0.15828559,
			"z": -13.645665
		}
	}, {
		"_id": {
			"$oid": "63ea999b91c1eb4fd0538224"
		},
		"id": "882f19ac-cda0-4d62-bb0d-a261528737e8",
		"time": {
			"$numberLong": "1676319131061"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198870991210",
		"killerId": "76561198115505153",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 55693.5,
			"y": 5220.101,
			"z": 94011.26
		},
		"victimPosition": {
			"x": 56181.156,
			"y": 9411.008,
			"z": 104640.08
		},
		"killerVelocity": {
			"x": -27.972738,
			"y": 50.92109,
			"z": 267.96786
		},
		"victimVelocity": {
			"x": 26.318632,
			"y": -69.964966,
			"z": -194.34796
		}
	}, {
		"_id": {
			"$oid": "63eaad9e91c1eb4fd05383c5"
		},
		"id": "3f77cf46-fb34-4d7e-b548-b6b1a79253fb",
		"time": {
			"$numberLong": "1676324254358"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198143043303",
		"killerId": "76561198406718218",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 125439.8,
			"y": 11215.994,
			"z": 66451.33
		},
		"victimPosition": {
			"x": 126066.47,
			"y": 11131.025,
			"z": 66613.375
		},
		"killerVelocity": {
			"x": 434.2342,
			"y": -0.23827937,
			"z": 79.84947
		},
		"victimVelocity": {
			"x": 276.26205,
			"y": -91.49593,
			"z": 56.266304
		}
	}, {
		"_id": {
			"$oid": "63eaae4b91c1eb4fd05383ce"
		},
		"id": "5705c7c3-db24-4437-bd87-c58b53749935",
		"time": {
			"$numberLong": "1676324427538"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198862770833",
		"killerId": "76561199155113790",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 88989.01,
			"y": 8270.093,
			"z": 104375.28
		},
		"victimPosition": {
			"x": 112550.086,
			"y": 2322.2253,
			"z": 97467.234
		},
		"killerVelocity": {
			"x": 370.51773,
			"y": -43.619465,
			"z": -97.803154
		},
		"victimVelocity": {
			"x": -243.42424,
			"y": 0.0022706985,
			"z": 83.28254
		}
	}, {
		"_id": {
			"$oid": "63eaaeb891c1eb4fd05383d3"
		},
		"id": "5739366d-e49b-41cc-92b1-1416e9ce5c2d",
		"time": {
			"$numberLong": "1676324536222"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198406718218",
		"killerId": "76561199155113790",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 93414.82,
			"y": 917.9743,
			"z": 94013.68
		},
		"victimPosition": {
			"x": 92476.35,
			"y": 1198.997,
			"z": 93625.125
		},
		"killerVelocity": {
			"x": -114.40532,
			"y": 5.403709,
			"z": -172.8708
		},
		"victimVelocity": {
			"x": -156.77078,
			"y": 87.033165,
			"z": 172.27019
		}
	}, {
		"_id": {
			"$oid": "63eab9ce91c1eb4fd05384ac"
		},
		"id": "670a72e3-a24d-4c92-8116-0a8ec1905125",
		"time": {
			"$numberLong": "1676327374312"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198012332936",
		"killerId": "76561198863954364",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 69835.836,
			"y": 5865.1353,
			"z": 106604.2
		},
		"victimPosition": {
			"x": 69639.58,
			"y": 11450.582,
			"z": 95463.28
		},
		"killerVelocity": {
			"x": -83.66303,
			"y": -254.73108,
			"z": 46.23485
		},
		"victimVelocity": {
			"x": -92.57411,
			"y": -79.945145,
			"z": -188.10817
		}
	}, {
		"_id": {
			"$oid": "63eacc9391c1eb4fd0538630"
		},
		"id": "29da7390-d662-451a-b6c7-0261585e0b9e",
		"time": {
			"$numberLong": "1676332179607"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198415138474",
		"killerId": "76561199016973925",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 70824.02,
			"y": 5887.0063,
			"z": 107763.69
		},
		"victimPosition": {
			"x": 71917.63,
			"y": 5591.6143,
			"z": 106293.14
		},
		"killerVelocity": {
			"x": 193.93254,
			"y": -47.0658,
			"z": -320.50317
		},
		"victimVelocity": {
			"x": 244.16402,
			"y": -69.297035,
			"z": -46.207027
		}
	}, {
		"_id": {
			"$oid": "63eaef7291c1eb4fd053897c"
		},
		"id": "85a56723-e63b-49e0-93f0-8ddba7c3edc5",
		"time": {
			"$numberLong": "1676341106084"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198986589834",
		"killerId": "76561198148687551",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 58596.18,
			"y": 743.24927,
			"z": 112927.68
		},
		"victimPosition": {
			"x": 58187.44,
			"y": 384.75156,
			"z": 112050.89
		},
		"killerVelocity": {
			"x": 126.78856,
			"y": 36.128124,
			"z": -255.74358
		},
		"victimVelocity": {
			"x": 92.83486,
			"y": -12.134551,
			"z": 170.29115
		}
	}, {
		"_id": {
			"$oid": "63eaff7791c1eb4fd0538b3c"
		},
		"id": "45c9bc42-0f4f-46a2-8237-a15693a8718e",
		"time": {
			"$numberLong": "1676345207027"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198819174958",
		"killerId": "76561199051891745",
		"victimTeam": 0,
		"killerTeam": 0,
		"killerPosition": {
			"x": 98063.63,
			"y": 1303.9468,
			"z": 94071.54
		},
		"victimPosition": {
			"x": 98009.1,
			"y": 1116.9198,
			"z": 91369.58
		},
		"killerVelocity": {
			"x": -88.65394,
			"y": 12.592507,
			"z": -373.27844
		},
		"victimVelocity": {
			"x": 283.17035,
			"y": -45.448368,
			"z": 68.176476
		}
	}, {
		"_id": {
			"$oid": "63a7527765c0582d3d177e38"
		},
		"id": "a369aaaa-bc7d-47d0-9c18-cd99af22c233",
		"time": {
			"$numberLong": "1671910007932"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198080851997",
		"killerId": "76561199055281148",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 99584.97,
			"y": 1994.0962,
			"z": 94364.87
		},
		"victimPosition": {
			"x": 87124.11,
			"y": 2512.4824,
			"z": 85336.055
		},
		"killerVelocity": {
			"x": -0.54183215,
			"y": -12.0985155,
			"z": 238.40022
		},
		"victimVelocity": {
			"x": 187.11517,
			"y": 123.09244,
			"z": 5.530075
		}
	}, {
		"_id": {
			"$oid": "63a7611365c0582d3d177f91"
		},
		"id": "7384cb6e-4fae-44b9-bb57-f54d928c7eb8",
		"time": {
			"$numberLong": "1671913747220"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199044214492",
		"killerId": "76561199148886866",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 112850.41,
			"y": 3119.7908,
			"z": 58354.516
		},
		"victimPosition": {
			"x": 107064.49,
			"y": 4179.668,
			"z": 62345.84
		},
		"killerVelocity": {
			"x": -315.2459,
			"y": 58.961403,
			"z": 209.10231
		},
		"victimVelocity": {
			"x": 18.4242,
			"y": 100.247955,
			"z": 188.97327
		}
	}, {
		"_id": {
			"$oid": "63a7710665c0582d3d1780be"
		},
		"id": "52f4f03d-d344-423d-9a4e-56fe74691ad8",
		"time": {
			"$numberLong": "1671917830751"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198037696652",
		"killerId": "76561198357395486",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158368.45,
			"y": 2317.7302,
			"z": 38344.996
		},
		"victimPosition": {
			"x": 159618.2,
			"y": 2388.239,
			"z": 41217.934
		},
		"killerVelocity": {
			"x": 91.18423,
			"y": -7.624261,
			"z": 289.60275
		},
		"victimVelocity": {
			"x": -229.30464,
			"y": -35.930637,
			"z": 257.73468
		}
	}, {
		"_id": {
			"$oid": "63a7807065c0582d3d178279"
		},
		"id": "97c6f8d8-a1ff-45d2-82e5-bc06f7e41b6b",
		"time": {
			"$numberLong": "1671921776664"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198129410473",
		"killerId": "76561198015077803",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158016.98,
			"y": 1160.5621,
			"z": 29367.648
		},
		"victimPosition": {
			"x": 156742.44,
			"y": 1151.9016,
			"z": 30564.984
		},
		"killerVelocity": {
			"x": -114.57923,
			"y": -3.8122056,
			"z": 101.948265
		},
		"victimVelocity": {
			"x": -47.731056,
			"y": -15.166697,
			"z": 69.571045
		}
	}, {
		"_id": {
			"$oid": "63a7854065c0582d3d1782ed"
		},
		"id": "c627cd89-e9d3-4cf2-8af8-1e8411dbe07f",
		"time": {
			"$numberLong": "1671923008459"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199098620020",
		"killerId": "76561198129410473",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159878.88,
			"y": 854.3492,
			"z": 28676.092
		},
		"victimPosition": {
			"x": 159918.77,
			"y": 854.41455,
			"z": 28690.191
		},
		"killerVelocity": {
			"x": 25.810915,
			"y": -0.00012684613,
			"z": 7.915602
		},
		"victimVelocity": {
			"x": -56.420837,
			"y": 0.0026669651,
			"z": -17.882944
		}
	}, {
		"_id": {
			"$oid": "63a7861865c0582d3d1782fa"
		},
		"id": "1ce56c36-75ae-43f8-97f2-6f7326b126a6",
		"time": {
			"$numberLong": "1671923224755"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199098620020",
		"killerId": "76561198129410473",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 124274.84,
			"y": 12408.823,
			"z": 49765.52
		},
		"victimPosition": {
			"x": 160642.9,
			"y": 856.70557,
			"z": 29232.553
		},
		"killerVelocity": {
			"x": -233.92953,
			"y": -9.974083,
			"z": 200.51837
		},
		"victimVelocity": {
			"x": -74.96119,
			"y": 2.3424518,
			"z": -22.060835
		}
	}, {
		"_id": {
			"$oid": "63a7a5b765c0582d3d178520"
		},
		"id": "1b1abd1c-4bb8-47b1-bc08-2e4a2ab0e18f",
		"time": {
			"$numberLong": "1671931319859"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199447290301",
		"killerId": "76561198136487423",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157952.75,
			"y": 950.51215,
			"z": 27522.242
		},
		"victimPosition": {
			"x": 157583.89,
			"y": 1044.1763,
			"z": 28094.902
		},
		"killerVelocity": {
			"x": -119.33903,
			"y": 6.2734156,
			"z": 182.27782
		},
		"victimVelocity": {
			"x": -2.1043842,
			"y": 22.389183,
			"z": 188.24571
		}
	}, {
		"_id": {
			"$oid": "63a7a5c465c0582d3d178522"
		},
		"id": "e9498bc5-8695-42c1-a971-07a074c8e8a0",
		"time": {
			"$numberLong": "1671931332469"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 0,
		"victimId": "76561198136487423",
		"killerId": "76561199447290301",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 158292.11,
			"y": 1436.1902,
			"z": 28704.775
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": 28.521044,
			"y": 20.0945,
			"z": 4.5940146
		}
	}, {
		"_id": {
			"$oid": "63a7d10665c0582d3d1785d5"
		},
		"id": "93168183-c873-45ad-9c8d-8fd7dfb5cb9a",
		"time": {
			"$numberLong": "1671942406568"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198080851997",
		"killerId": "76561199071154836",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 123579.445,
			"y": 2173.3252,
			"z": 69879.336
		},
		"victimPosition": {
			"x": 122037.125,
			"y": 1981.348,
			"z": 75869.664
		},
		"killerVelocity": {
			"x": -158.60902,
			"y": 28.773203,
			"z": 290.235
		},
		"victimVelocity": {
			"x": -231.15938,
			"y": 18.962448,
			"z": 262.87057
		}
	}, {
		"_id": {
			"$oid": "63a7e0c565c0582d3d1786e0"
		},
		"id": "3e16f817-29c9-4f6a-9f89-9665b72b524f",
		"time": {
			"$numberLong": "1671946437919"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199087087029",
		"killerId": "76561198343850164",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 138417.34,
			"y": 2296.1775,
			"z": 25018.434
		},
		"victimPosition": {
			"x": 136684.3,
			"y": 2440.6553,
			"z": 24259.578
		},
		"killerVelocity": {
			"x": -226.22649,
			"y": 2.3674734,
			"z": -30.654114
		},
		"victimVelocity": {
			"x": 11.486268,
			"y": -125.21585,
			"z": -82.24464
		}
	}, {
		"_id": {
			"$oid": "63a7e1d165c0582d3d1786f5"
		},
		"id": "98c32f4d-1e61-49df-8628-d5a989f0b97e",
		"time": {
			"$numberLong": "1671946705842"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198343850164",
		"killerId": "76561199356962288",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161868.78,
			"y": 854.40594,
			"z": 29056.338
		},
		"victimPosition": {
			"x": 161938.2,
			"y": 854.41296,
			"z": 29073.76
		},
		"killerVelocity": {
			"x": 37.616825,
			"y": 0.0002674535,
			"z": 9.103516
		},
		"victimVelocity": {
			"x": 6.1967597,
			"y": 0.0020043924,
			"z": 3.2532244
		}
	}, {
		"_id": {
			"$oid": "63a7e5af65c0582d3d178725"
		},
		"id": "d91dfc83-4279-419b-94b1-17c31d2b5eb3",
		"time": {
			"$numberLong": "1671947695509"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198094512337",
		"killerId": "76561199141330689",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161473.3,
			"y": 904.0928,
			"z": 29085.025
		},
		"victimPosition": {
			"x": 162687.05,
			"y": 1086.0446,
			"z": 29498.36
		},
		"killerVelocity": {
			"x": 146.67982,
			"y": 12.766093,
			"z": 62.535107
		},
		"victimVelocity": {
			"x": 218.1873,
			"y": 66.85604,
			"z": 89.24448
		}
	}, {
		"_id": {
			"$oid": "63a8072265c0582d3d178993"
		},
		"id": "ff6e4749-bf19-413c-bf75-d3f2c20546d2",
		"time": {
			"$numberLong": "1671956258651"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199055281148",
		"killerId": "76561199197257839",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 139936.66,
			"y": 2360.0063,
			"z": 93116.8
		},
		"victimPosition": {
			"x": 143695.69,
			"y": 1699.4764,
			"z": 94735.914
		},
		"killerVelocity": {
			"x": 289.16772,
			"y": -57.919804,
			"z": 119.21718
		},
		"victimVelocity": {
			"x": -330.01382,
			"y": -63.37706,
			"z": -3.1074357
		}
	}, {
		"_id": {
			"$oid": "63a8085365c0582d3d1789a7"
		},
		"id": "9073dfa0-a641-463a-b598-368ff51a4aa7",
		"time": {
			"$numberLong": "1671956563987"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199197257839",
		"killerId": "76561199119791255",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156549.44,
			"y": 1981.767,
			"z": 31771.605
		},
		"victimPosition": {
			"x": 155697.8,
			"y": 1990.9268,
			"z": 33006.15
		},
		"killerVelocity": {
			"x": -207.16681,
			"y": 31.726791,
			"z": 270.19293
		},
		"victimVelocity": {
			"x": -127.409424,
			"y": -74.56274,
			"z": 166.42989
		}
	}, {
		"_id": {
			"$oid": "63a8115765c0582d3d178a0f"
		},
		"id": "75bccc65-3c8a-4d51-8413-509b2c3fa6b5",
		"time": {
			"$numberLong": "1671958871403"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198832967417",
		"killerId": "76561198052252915",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147720.4,
			"y": 1840.4404,
			"z": 34054.555
		},
		"victimPosition": {
			"x": 147510.98,
			"y": 1784.5232,
			"z": 33779.637
		},
		"killerVelocity": {
			"x": 63.588837,
			"y": 2.3706288,
			"z": 181.59239
		},
		"victimVelocity": {
			"x": -62.68049,
			"y": -36.172447,
			"z": -161.32712
		}
	}, {
		"_id": {
			"$oid": "63a8180365c0582d3d178a27"
		},
		"id": "8089ff18-9e19-4c33-81e6-904e57f27ada",
		"time": {
			"$numberLong": "1671960579325"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198393377482",
		"killerId": "76561198995334422",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147133.64,
			"y": 2727.766,
			"z": 30731.025
		},
		"victimPosition": {
			"x": 149011.28,
			"y": 2883.6824,
			"z": 31505.02
		},
		"killerVelocity": {
			"x": 184.74158,
			"y": 9.91681,
			"z": 77.063
		},
		"victimVelocity": {
			"x": 209.46951,
			"y": 4.0246572,
			"z": 85.819016
		}
	}, {
		"_id": {
			"$oid": "63a819e265c0582d3d178a37"
		},
		"id": "eb7bf1ea-906c-458c-8daa-e3e484560c33",
		"time": {
			"$numberLong": "1671961058450"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198995334422",
		"killerId": "76561198393377482",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162014.14,
			"y": 1685.1445,
			"z": 24345.244
		},
		"victimPosition": {
			"x": 162115.61,
			"y": 1743.8691,
			"z": 24070.033
		},
		"killerVelocity": {
			"x": 41.28318,
			"y": 41.89708,
			"z": -206.56824
		},
		"victimVelocity": {
			"x": 83.216446,
			"y": 37.326214,
			"z": -42.384716
		}
	}, {
		"_id": {
			"$oid": "63a81a3865c0582d3d178a3b"
		},
		"id": "a8530fb2-8337-49ca-a893-41adae77773a",
		"time": {
			"$numberLong": "1671961144749"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198995334422",
		"killerId": "76561198393377482",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 167211.03,
			"y": 2058.0735,
			"z": 31976.092
		},
		"victimPosition": {
			"x": 161905.6,
			"y": 856.0196,
			"z": 29091.38
		},
		"killerVelocity": {
			"x": 207.86728,
			"y": 22.021872,
			"z": 33.34769
		},
		"victimVelocity": {
			"x": 83.59043,
			"y": 2.3472488,
			"z": 25.84496
		}
	}, {
		"_id": {
			"$oid": "63a81b7965c0582d3d178a4a"
		},
		"id": "aea33692-1a57-43aa-9e7e-0667ffe43799",
		"time": {
			"$numberLong": "1671961465299"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198995334422",
		"killerId": "76561198393377482",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159468.19,
			"y": 854.3569,
			"z": 28326.55
		},
		"victimPosition": {
			"x": 162326.69,
			"y": 869.5349,
			"z": 30773.57
		},
		"killerVelocity": {
			"x": 114.00935,
			"y": -0.0049510747,
			"z": 36.699383
		},
		"victimVelocity": {
			"x": -28.911129,
			"y": -29.514996,
			"z": 50.823723
		}
	}, {
		"_id": {
			"$oid": "63a81c6765c0582d3d178a54"
		},
		"id": "0a7c37ed-c768-4a9b-9ec5-e1b251a0abfa",
		"time": {
			"$numberLong": "1671961703275"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198995334422",
		"killerId": "76561198393377482",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 163947.86,
			"y": 1181.6768,
			"z": 28743.438
		},
		"victimPosition": {
			"x": 165234.5,
			"y": 1680.6483,
			"z": 29988.621
		},
		"killerVelocity": {
			"x": 109.35238,
			"y": 5.5298367,
			"z": 106.64103
		},
		"victimVelocity": {
			"x": 78.84497,
			"y": 36.902008,
			"z": 160.57178
		}
	}, {
		"_id": {
			"$oid": "63a81cfe65c0582d3d178a5a"
		},
		"id": "20faf725-2b5a-447c-9953-899cdbab8e60",
		"time": {
			"$numberLong": "1671961854958"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198995334422",
		"killerId": "76561198393377482",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158206,
			"y": 1461.5979,
			"z": 28629.145
		},
		"victimPosition": {
			"x": 158804.53,
			"y": 1013.1084,
			"z": 28868.049
		},
		"killerVelocity": {
			"x": -102.39668,
			"y": -30.31776,
			"z": 13.740573
		},
		"victimVelocity": {
			"x": -19.376066,
			"y": -115.18758,
			"z": -6.2901225
		}
	}, {
		"_id": {
			"$oid": "63a8341e65c0582d3d178b37"
		},
		"id": "6157100b-5dfa-4751-a723-f28b93158dc8",
		"time": {
			"$numberLong": "1671967774219"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198272986230",
		"killerId": "76561198832967417",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 139076.5,
			"y": 2491.3948,
			"z": 38164.594
		},
		"victimPosition": {
			"x": 136846.28,
			"y": 2295.6345,
			"z": 38911.375
		},
		"killerVelocity": {
			"x": -242.261,
			"y": 22.896406,
			"z": 117.048065
		},
		"victimVelocity": {
			"x": 166.75998,
			"y": -249.84067,
			"z": -117.51527
		}
	}, {
		"_id": {
			"$oid": "63a8445c65c0582d3d178c4e"
		},
		"id": "74e48d88-f789-4b31-bdf2-b8a604f98132",
		"time": {
			"$numberLong": "1671971932983"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199153548254",
		"killerId": "76561199090563519",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 97468.48,
			"y": 3748.0874,
			"z": 54042.953
		},
		"victimPosition": {
			"x": 98847.664,
			"y": 2790.6523,
			"z": 52977.75
		},
		"killerVelocity": {
			"x": 328.1982,
			"y": -190.97945,
			"z": -290.97382
		},
		"victimVelocity": {
			"x": 256.84207,
			"y": -109.18118,
			"z": -144.04668
		}
	}, {
		"_id": {
			"$oid": "63a84aff65c0582d3d178cdc"
		},
		"id": "6031575f-d41a-42a7-ba0f-f41a1a3dff45",
		"time": {
			"$numberLong": "1671973631045"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199385088495",
		"killerId": "76561199128328106",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 174219.53,
			"y": 5333.553,
			"z": 48409.004
		},
		"victimPosition": {
			"x": 174442.66,
			"y": 5972.47,
			"z": 49569.562
		},
		"killerVelocity": {
			"x": 98.00495,
			"y": 144.82399,
			"z": 205.59392
		},
		"victimVelocity": {
			"x": 9.594408,
			"y": 99.3367,
			"z": 239.19443
		}
	}, {
		"_id": {
			"$oid": "63a861c365c0582d3d178d3c"
		},
		"id": "02f5c281-bbfc-4292-ac1b-08ef05096575",
		"time": {
			"$numberLong": "1671979459054"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199128328106",
		"killerId": "76561198373343710",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 168238.34,
			"y": 1570.6334,
			"z": 28091.463
		},
		"victimPosition": {
			"x": 168389.19,
			"y": 1402.0914,
			"z": 27771.604
		},
		"killerVelocity": {
			"x": 79.24505,
			"y": -76.00761,
			"z": -189.91138
		},
		"victimVelocity": {
			"x": 58.534054,
			"y": -123.05216,
			"z": -139.92982
		}
	}, {
		"_id": {
			"$oid": "63a8666d65c0582d3d178d9d"
		},
		"id": "f1ae57ad-ecc2-40f6-ba80-a0adda5952e7",
		"time": {
			"$numberLong": "1671980653448"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198872438462",
		"killerId": "76561199185397619",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149276.08,
			"y": 2249.3398,
			"z": 41473.543
		},
		"victimPosition": {
			"x": 143585.44,
			"y": 2239.9905,
			"z": 43602.543
		},
		"killerVelocity": {
			"x": -213.13583,
			"y": 45.680965,
			"z": -87.03544
		},
		"victimVelocity": {
			"x": 105.05996,
			"y": 10.271821,
			"z": 34.28558
		}
	}, {
		"_id": {
			"$oid": "63a8674c65c0582d3d178db5"
		},
		"id": "9dea0a34-fdd8-421b-9cb7-bb8d76c02451",
		"time": {
			"$numberLong": "1671980876728"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199447216552",
		"killerId": "76561199185397619",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 140183.77,
			"y": 2280.4143,
			"z": 23182.303
		},
		"victimPosition": {
			"x": 138931.97,
			"y": 1727.238,
			"z": 23738.355
		},
		"killerVelocity": {
			"x": 255.30211,
			"y": -44.608067,
			"z": 23.96693
		},
		"victimVelocity": {
			"x": 21.458275,
			"y": -160.02232,
			"z": -106.08684
		}
	}, {
		"_id": {
			"$oid": "63a87ca665c0582d3d178f48"
		},
		"id": "97ebe6e2-f7e2-4f06-81ce-3b3513bac38a",
		"time": {
			"$numberLong": "1671986342303"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198072539115",
		"killerId": "76561198299533614",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 98208.8,
			"y": 5296.4385,
			"z": 61555.43
		},
		"victimPosition": {
			"x": 82226.4,
			"y": 3360.3733,
			"z": 64081.406
		},
		"killerVelocity": {
			"x": -395.94754,
			"y": -33.79416,
			"z": 112.05898
		},
		"victimVelocity": {
			"x": 110.86297,
			"y": -127.83095,
			"z": -61.136177
		}
	}, {
		"_id": {
			"$oid": "63a87f8865c0582d3d178f7d"
		},
		"id": "58d8c016-bc3d-458d-a646-d09bc09e0050",
		"time": {
			"$numberLong": "1671987080249"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198299533614",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 111540.61,
			"y": 3130.7874,
			"z": 72467.24
		},
		"victimPosition": {
			"x": 109682.4,
			"y": 3778.5479,
			"z": 73613.68
		},
		"killerVelocity": {
			"x": -319.6289,
			"y": 0.6881372,
			"z": 239.06985
		},
		"victimVelocity": {
			"x": -135.0345,
			"y": 232.6163,
			"z": 38.79211
		}
	}, {
		"_id": {
			"$oid": "63a88bfb65c0582d3d179078"
		},
		"id": "4bc371b0-a623-4a66-a8f2-3e2ccc73dede",
		"time": {
			"$numberLong": "1671990267834"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198041157215",
		"killerId": "76561199102008227",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 165717.11,
			"y": 2604.7693,
			"z": 31423.7
		},
		"victimPosition": {
			"x": 164735.2,
			"y": 2581.3657,
			"z": 32438.703
		},
		"killerVelocity": {
			"x": -99.00425,
			"y": -19.585682,
			"z": 146.69945
		},
		"victimVelocity": {
			"x": -104.2558,
			"y": 16.685472,
			"z": 97.95552
		}
	}, {
		"_id": {
			"$oid": "63a8a39b65c0582d3d179184"
		},
		"id": "9a312422-e5c9-4396-82a4-de2c6883a82a",
		"time": {
			"$numberLong": "1671996315078"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198353116012",
		"killerId": "76561199192441146",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150870.86,
			"y": 1909.5178,
			"z": 31589.865
		},
		"victimPosition": {
			"x": 159899.53,
			"y": 858.2243,
			"z": 29076.064
		},
		"killerVelocity": {
			"x": -287.26126,
			"y": 80.20858,
			"z": 94.12609
		},
		"victimVelocity": {
			"x": 94.619606,
			"y": -8.196674,
			"z": -65.275925
		}
	}, {
		"_id": {
			"$oid": "63a8a3c465c0582d3d179188"
		},
		"id": "732f3b64-e96d-407e-a43f-27844ab790d4",
		"time": {
			"$numberLong": "1671996356622"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198353116012",
		"killerId": "76561198879701130",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159358.97,
			"y": 955.8435,
			"z": 28606.525
		},
		"victimPosition": {
			"x": 160154.88,
			"y": 883.3333,
			"z": 28473.564
		},
		"killerVelocity": {
			"x": 254.81317,
			"y": -30.22645,
			"z": -43.994534
		},
		"victimVelocity": {
			"x": -99.575226,
			"y": 13.631128,
			"z": -2.689985
		}
	}, {
		"_id": {
			"$oid": "63a8a42e65c0582d3d179193"
		},
		"id": "6f8f3c64-2c4c-40e5-83d1-4714895d10ab",
		"time": {
			"$numberLong": "1671996462763"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198353116012",
		"killerId": "76561198879701130",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161009.77,
			"y": 918.97784,
			"z": 29389.086
		},
		"victimPosition": {
			"x": 161170.58,
			"y": 891.9171,
			"z": 29439.006
		},
		"killerVelocity": {
			"x": 121.91116,
			"y": -6.7626557,
			"z": 51.890865
		},
		"victimVelocity": {
			"x": 120.061165,
			"y": -32.726803,
			"z": 41.90345
		}
	}, {
		"_id": {
			"$oid": "63a8a47165c0582d3d17919d"
		},
		"id": "52cfb7af-8430-4587-8e2e-9d765d1dfbad",
		"time": {
			"$numberLong": "1671996529371"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198295839184",
		"killerId": "76561198353116012",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162227.72,
			"y": 1458.1761,
			"z": 32161.438
		},
		"victimPosition": {
			"x": 161289.56,
			"y": 1811.263,
			"z": 34523.016
		},
		"killerVelocity": {
			"x": -50.663685,
			"y": 53.2074,
			"z": 197.20299
		},
		"victimVelocity": {
			"x": -83.22071,
			"y": 20.759794,
			"z": 72.26241
		}
	}, {
		"_id": {
			"$oid": "63a8b06365c0582d3d1792a6"
		},
		"id": "d1608c91-63f1-4bcd-a81d-d389787529ad",
		"time": {
			"$numberLong": "1671999587054"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199104949891",
		"killerId": "76561198139484254",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 126607.414,
			"y": 3672.927,
			"z": 81219.48
		},
		"victimPosition": {
			"x": 124075.234,
			"y": 2813.2822,
			"z": 82275.38
		},
		"killerVelocity": {
			"x": -279.00052,
			"y": -128.62924,
			"z": 127.95423
		},
		"victimVelocity": {
			"x": 287.8949,
			"y": 5.024042,
			"z": 106.23978
		}
	}, {
		"_id": {
			"$oid": "63a8d1bffaabb276553f8b5b"
		},
		"id": "1b050e6b-b8a7-45b7-93e8-8b4a0de69ac0",
		"time": {
			"$numberLong": "1672008127173"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197976066897",
		"killerId": "76561198281214673",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 86751.65,
			"y": 1260.6624,
			"z": 86224.266
		},
		"victimPosition": {
			"x": 86740.266,
			"y": 1374.5371,
			"z": 86459.11
		},
		"killerVelocity": {
			"x": 11.636706,
			"y": 92.14408,
			"z": 223.12186
		},
		"victimVelocity": {
			"x": -61.442463,
			"y": 65.05803,
			"z": 64.453964
		}
	}, {
		"_id": {
			"$oid": "63a8e0acfaabb276553f8ccc"
		},
		"id": "a61a9f22-2f9b-4fc1-9d34-ad0a27ba54a8",
		"time": {
			"$numberLong": "1672011948922"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199388169610",
		"killerId": "76561198380933937",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150098.2,
			"y": 2009.6246,
			"z": 52992.836
		},
		"victimPosition": {
			"x": 151847.14,
			"y": 1950.8372,
			"z": 52044.242
		},
		"killerVelocity": {
			"x": 170.21585,
			"y": 30.690962,
			"z": -177.40575
		},
		"victimVelocity": {
			"x": 135.97377,
			"y": -76.943054,
			"z": 102.14228
		}
	}, {
		"_id": {
			"$oid": "63a8e110faabb276553f8cd3"
		},
		"id": "599e681b-ec60-4d69-a73e-9caee59dc2c5",
		"time": {
			"$numberLong": "1672012048196"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198380933937",
		"killerId": "76561198427397532",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 142315,
			"y": 2365.1313,
			"z": 65948.414
		},
		"victimPosition": {
			"x": 145717.48,
			"y": 2024.4347,
			"z": 67650.81
		},
		"killerVelocity": {
			"x": 194.97557,
			"y": -78.788414,
			"z": -202.40285
		},
		"victimVelocity": {
			"x": -142.83636,
			"y": -28.902895,
			"z": -52.16745
		}
	}, {
		"_id": {
			"$oid": "63a92272faabb276553f929f"
		},
		"id": "96bfeade-3e47-4918-9066-05ead785c707",
		"time": {
			"$numberLong": "1672028786123"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198295090549",
		"killerId": "76561198309175692",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 121213.46,
			"y": 10118.475,
			"z": 35800.895
		},
		"victimPosition": {
			"x": 131049.05,
			"y": 4220.4634,
			"z": 34374.773
		},
		"killerVelocity": {
			"x": -358.26294,
			"y": 5.861767,
			"z": 257.63245
		},
		"victimVelocity": {
			"x": -26.400356,
			"y": -181.98424,
			"z": 26.054462
		}
	}, {
		"_id": {
			"$oid": "63a9228dfaabb276553f92a3"
		},
		"id": "8088f186-533a-4134-b446-17307eb04106",
		"time": {
			"$numberLong": "1672028813809"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199154734223",
		"killerId": "76561197983736363",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 109309.37,
			"y": 1108.961,
			"z": 66606.375
		},
		"victimPosition": {
			"x": 109393.67,
			"y": 907.0277,
			"z": 66328.18
		},
		"killerVelocity": {
			"x": -120.166725,
			"y": -7.874765,
			"z": -240.73405
		},
		"victimVelocity": {
			"x": -13.1053295,
			"y": -1.1975479,
			"z": -68.58331
		}
	}, {
		"_id": {
			"$oid": "63a9229ffaabb276553f92a5"
		},
		"id": "f98ac8dd-40fe-4e5c-a5a5-7a76fd5309b3",
		"time": {
			"$numberLong": "1672028831426"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198826245858",
		"killerId": "76561199120087597",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152571.88,
			"y": 1434.286,
			"z": 27213.367
		},
		"victimPosition": {
			"x": 153724.8,
			"y": 1270.8506,
			"z": 27233.453
		},
		"killerVelocity": {
			"x": 34.5298,
			"y": 7.466596,
			"z": 164.80167
		},
		"victimVelocity": {
			"x": -255.49577,
			"y": 23.308496,
			"z": -76.86692
		}
	}, {
		"_id": {
			"$oid": "63a923ddfaabb276553f92c6"
		},
		"id": "69f70998-feb9-4eff-8bdb-3ea02b74857e",
		"time": {
			"$numberLong": "1672029149820"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198295090549",
		"killerId": "76561197983736363",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 109907.39,
			"y": 4841.074,
			"z": 54373.953
		},
		"victimPosition": {
			"x": 101688.09,
			"y": 8943.605,
			"z": 47536.527
		},
		"killerVelocity": {
			"x": -218.46806,
			"y": 86.509514,
			"z": -166.30127
		},
		"victimVelocity": {
			"x": 199.13467,
			"y": -88.83356,
			"z": 162.67996
		}
	}, {
		"_id": {
			"$oid": "63a927c1faabb276553f9316"
		},
		"id": "564fcce9-f668-4056-9b5e-11075c5b1261",
		"time": {
			"$numberLong": "1672030145665"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199130954960",
		"killerId": "76561198826245858",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147729.16,
			"y": 1912.711,
			"z": 38591.953
		},
		"victimPosition": {
			"x": 149269.42,
			"y": 2542.137,
			"z": 38323.5
		},
		"killerVelocity": {
			"x": 113.721436,
			"y": 40.20993,
			"z": -38.86036
		},
		"victimVelocity": {
			"x": 99.09879,
			"y": -68.5508,
			"z": 172.70198
		}
	}, {
		"_id": {
			"$oid": "63a927e7faabb276553f931c"
		},
		"id": "c35e4ca7-45dd-4b81-96f9-8559d8f147ba",
		"time": {
			"$numberLong": "1672030183456"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198826245858",
		"killerId": "76561197983736363",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155523.19,
			"y": 1337.5679,
			"z": 33457.004
		},
		"victimPosition": {
			"x": 152915,
			"y": 1814.2036,
			"z": 38055.184
		},
		"killerVelocity": {
			"x": 222.61465,
			"y": 16.978313,
			"z": 156.49722
		},
		"victimVelocity": {
			"x": 42.053516,
			"y": 7.056647,
			"z": -104.237015
		}
	}, {
		"_id": {
			"$oid": "63a927f3faabb276553f931e"
		},
		"id": "2f3addbc-16d7-4bf6-b756-aee244a9b1c5",
		"time": {
			"$numberLong": "1672030195409"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199154734223",
		"killerId": "76561199130954960",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150349.83,
			"y": 1286.1581,
			"z": 40350.445
		},
		"victimPosition": {
			"x": 139186.02,
			"y": 2306.1787,
			"z": 53060.17
		},
		"killerVelocity": {
			"x": 0.0012230941,
			"y": 0.001774393,
			"z": -0.0020059487
		},
		"victimVelocity": {
			"x": -112.73143,
			"y": 5.0063877,
			"z": 169.10277
		}
	}, {
		"_id": {
			"$oid": "63a92b96faabb276553f935a"
		},
		"id": "6e22a23e-3197-4255-bec0-eac691243f50",
		"time": {
			"$numberLong": "1672031126237"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198004272914",
		"killerId": "76561198995334422",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 165481.64,
			"y": 1981.6932,
			"z": 29450.434
		},
		"victimPosition": {
			"x": 166639.7,
			"y": 2473.0923,
			"z": 29352.97
		},
		"killerVelocity": {
			"x": 281.70926,
			"y": 80.523056,
			"z": -30.619839
		},
		"victimVelocity": {
			"x": 145.72354,
			"y": 86.106094,
			"z": -62.3004
		}
	}, {
		"_id": {
			"$oid": "63a92c0cfaabb276553f9361"
		},
		"id": "00fbe6e2-e5fc-4914-9593-361c798033c5",
		"time": {
			"$numberLong": "1672031244139"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199309729413",
		"killerId": "76561198995334422",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 165979.89,
			"y": 2062.6128,
			"z": 31982.967
		},
		"victimPosition": {
			"x": 168039.31,
			"y": 1621.9202,
			"z": 30401.756
		},
		"killerVelocity": {
			"x": 283.84402,
			"y": -84.00485,
			"z": -166.92007
		},
		"victimVelocity": {
			"x": 144.79228,
			"y": -100.29656,
			"z": -211.04408
		}
	}, {
		"_id": {
			"$oid": "63a93055faabb276553f93b1"
		},
		"id": "8a15a950-5326-4bb7-9a10-2decd383a2ef",
		"time": {
			"$numberLong": "1672032341480"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199180679229",
		"killerId": "76561198995334422",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 134150.02,
			"y": 2541.6692,
			"z": 47271.625
		},
		"victimPosition": {
			"x": 130449.67,
			"y": 3328.7554,
			"z": 50561.13
		},
		"killerVelocity": {
			"x": -203.73296,
			"y": 67.309105,
			"z": 273.1576
		},
		"victimVelocity": {
			"x": -215.70857,
			"y": -48.419685,
			"z": -2.3634722
		}
	}, {
		"_id": {
			"$oid": "63a945aefaabb276553f9593"
		},
		"id": "d27b3689-b8ce-46fb-92c8-a36dd8bded36",
		"time": {
			"$numberLong": "1672037806756"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199131401489",
		"killerId": "76561199166636622",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149243.39,
			"y": 2367.1692,
			"z": 30516.912
		},
		"victimPosition": {
			"x": 146261.31,
			"y": 2544.4565,
			"z": 30230.912
		},
		"killerVelocity": {
			"x": -249.9985,
			"y": 15.764626,
			"z": -91.69255
		},
		"victimVelocity": {
			"x": -338.02002,
			"y": -52.918148,
			"z": -82.41003
		}
	}, {
		"_id": {
			"$oid": "63a95224faabb276553f9660"
		},
		"id": "beb20c6b-1102-4051-b7bb-1dded0b1c8d6",
		"time": {
			"$numberLong": "1672040996702"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199141533311",
		"killerId": "76561199055281148",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 112208.23,
			"y": 1527.0594,
			"z": 64901.73
		},
		"victimPosition": {
			"x": 124198.875,
			"y": 2729.067,
			"z": 56768.31
		},
		"killerVelocity": {
			"x": -141.03528,
			"y": -27.28576,
			"z": -234.71143
		},
		"victimVelocity": {
			"x": -169.00206,
			"y": -9.757298,
			"z": 188.42595
		}
	}, {
		"_id": {
			"$oid": "63a9599ffaabb276553f96fb"
		},
		"id": "a106b0a4-0b2f-43a2-86f6-2ec1b97232e9",
		"time": {
			"$numberLong": "1672042911759"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198844156995",
		"killerId": "76561198799187424",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161055.2,
			"y": 854.38025,
			"z": 28829.621
		},
		"victimPosition": {
			"x": 161543.2,
			"y": 852.51044,
			"z": 28564.8
		},
		"killerVelocity": {
			"x": 18.44986,
			"y": -0.0007469505,
			"z": 2.1853094
		},
		"victimVelocity": {
			"x": 1.0529186,
			"y": -0.019915424,
			"z": 0.03484059
		}
	}, {
		"_id": {
			"$oid": "63a95b2bfaabb276553f9717"
		},
		"id": "8b4b408d-101c-4764-bb9b-e4cc990b6271",
		"time": {
			"$numberLong": "1672043307900"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198247579552",
		"killerId": "76561199046255558",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 177580.9,
			"y": 2864.453,
			"z": 31142.318
		},
		"victimPosition": {
			"x": 181564.25,
			"y": 2360.0232,
			"z": 30659.275
		},
		"killerVelocity": {
			"x": 376.2717,
			"y": -39.347683,
			"z": 34.68772
		},
		"victimVelocity": {
			"x": 53.68771,
			"y": -36.1977,
			"z": -276.21158
		}
	}, {
		"_id": {
			"$oid": "63a95bbbfaabb276553f972b"
		},
		"id": "b3c2f85a-d93d-4c0a-8a18-6e3348679f3b",
		"time": {
			"$numberLong": "1672043451286"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198799187424",
		"killerId": "76561199055281148",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 130821.56,
			"y": 4589.162,
			"z": 78344.45
		},
		"victimPosition": {
			"x": 128390.49,
			"y": 1825.1384,
			"z": 81073.695
		},
		"killerVelocity": {
			"x": 170.81456,
			"y": -28.619162,
			"z": 192.8577
		},
		"victimVelocity": {
			"x": -184.93002,
			"y": -66.83256,
			"z": -87.950676
		}
	}, {
		"_id": {
			"$oid": "63a96d7cfaabb276553f989d"
		},
		"id": "83083cac-55ad-4b69-b353-48c1ca41c393",
		"time": {
			"$numberLong": "1672047996124"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198016022937",
		"killerId": "76561199132644524",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160344.28,
			"y": 1895.8153,
			"z": 27651.016
		},
		"victimPosition": {
			"x": 161877.45,
			"y": 1436.4285,
			"z": 27983.096
		},
		"killerVelocity": {
			"x": -176.6015,
			"y": 2.2389503,
			"z": -100.13299
		},
		"victimVelocity": {
			"x": 28.140116,
			"y": -74.44316,
			"z": -34.665886
		}
	}, {
		"_id": {
			"$oid": "63a96efdfaabb276553f98ab"
		},
		"id": "2ff76835-5ecc-43f0-bbd7-346f2361b5bd",
		"time": {
			"$numberLong": "1672048381070"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198059132551",
		"killerId": "76561199132644524",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147994.4,
			"y": 2571.8896,
			"z": 37958.453
		},
		"victimPosition": {
			"x": 145663.38,
			"y": 2421.3145,
			"z": 39591.797
		},
		"killerVelocity": {
			"x": -287.0973,
			"y": 30.2571,
			"z": 234.27979
		},
		"victimVelocity": {
			"x": -288.8963,
			"y": -194.7732,
			"z": 33.694218
		}
	}, {
		"_id": {
			"$oid": "63a9804bfaabb276553f99c2"
		},
		"id": "4b47b192-dd10-4bf7-8abf-627cb68ef0b0",
		"time": {
			"$numberLong": "1672052811159"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198302583468",
		"killerId": "76561199211041411",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162864.03,
			"y": 1346.1195,
			"z": 30083.756
		},
		"victimPosition": {
			"x": 164225.22,
			"y": 1909.0095,
			"z": 30770.926
		},
		"killerVelocity": {
			"x": 139.41385,
			"y": 34.320072,
			"z": 37.53255
		},
		"victimVelocity": {
			"x": -129.37117,
			"y": -101.95142,
			"z": 115.95139
		}
	}, {
		"_id": {
			"$oid": "63a9810efaabb276553f99d4"
		},
		"id": "1375d91c-9745-44fd-adf9-cd234c55e3f0",
		"time": {
			"$numberLong": "1672053006414"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198302583468",
		"killerId": "76561199211041411",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160563.9,
			"y": 857.0135,
			"z": 28759.125
		},
		"victimPosition": {
			"x": 161343.27,
			"y": 1915.103,
			"z": 25528.928
		},
		"killerVelocity": {
			"x": 29.562288,
			"y": -2.452299,
			"z": 21.442686
		},
		"victimVelocity": {
			"x": -165.47507,
			"y": -96.658775,
			"z": 169.46028
		}
	}, {
		"_id": {
			"$oid": "63a9814dfaabb276553f99dc"
		},
		"id": "d577b226-ecaa-4e51-a96a-b3fc9d45d68d",
		"time": {
			"$numberLong": "1672053069736"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199113272286",
		"killerId": "76561199211041411",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159937.14,
			"y": 854.28235,
			"z": 28494.273
		},
		"victimPosition": {
			"x": 159941.56,
			"y": 854.3945,
			"z": 28474.543
		},
		"killerVelocity": {
			"x": 0.334729,
			"y": -0.0063814595,
			"z": -0.8054755
		},
		"victimVelocity": {
			"x": 0.27619946,
			"y": 0.000033780932,
			"z": 0.06753442
		}
	}, {
		"_id": {
			"$oid": "63a9822bfaabb276553f99f0"
		},
		"id": "6749ed1c-a8e2-44be-a912-dea9ede55a27",
		"time": {
			"$numberLong": "1672053291911"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199113272286",
		"killerId": "76561199211041411",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 130507.13,
			"y": 2462.386,
			"z": 42067.043
		},
		"victimPosition": {
			"x": 163756.3,
			"y": 1050.5846,
			"z": 33373.082
		},
		"killerVelocity": {
			"x": -299.60248,
			"y": 41.163296,
			"z": 196.25285
		},
		"victimVelocity": {
			"x": 50.036457,
			"y": -8.938751,
			"z": -104.18863
		}
	}, {
		"_id": {
			"$oid": "63a98d4cfaabb276553f9aeb"
		},
		"id": "7bcee41d-a0a8-4f0d-9564-a85cd305a4ea",
		"time": {
			"$numberLong": "1672056140189"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198393340144",
		"killerId": "76561197970364229",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 177989.67,
			"y": 4469.493,
			"z": 33658.438
		},
		"victimPosition": {
			"x": 178775.53,
			"y": 4516.0405,
			"z": 33892.453
		},
		"killerVelocity": {
			"x": 295.2077,
			"y": 25.833431,
			"z": 85.85239
		},
		"victimVelocity": {
			"x": 316.36444,
			"y": -21.818686,
			"z": 102.2511
		}
	}, {
		"_id": {
			"$oid": "63a9bd0cfaabb276553f9d01"
		},
		"id": "ba5e2bf7-f8af-4de6-9fc1-b4324c51bfe7",
		"time": {
			"$numberLong": "1672068364304"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198227766316",
		"killerId": "76561198025470576",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158224.27,
			"y": 1548.0978,
			"z": 29555.613
		},
		"victimPosition": {
			"x": 161096.02,
			"y": 852.8798,
			"z": 28314.266
		},
		"killerVelocity": {
			"x": -177.44824,
			"y": 25.485956,
			"z": 38.024548
		},
		"victimVelocity": {
			"x": 214.49084,
			"y": -77.731804,
			"z": -96.903694
		}
	}, {
		"_id": {
			"$oid": "63a9e945faabb276553fa0b6"
		},
		"id": "e26af1a4-ecaf-4ca0-ad90-db3f670689e7",
		"time": {
			"$numberLong": "1672079685077"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197996771534",
		"killerId": "76561199194017137",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 113652.18,
			"y": 1156.0996,
			"z": 59699.027
		},
		"victimPosition": {
			"x": 119393.95,
			"y": 1752.283,
			"z": 59960.38
		},
		"killerVelocity": {
			"x": -356.9081,
			"y": -6.4636526,
			"z": 83.23744
		},
		"victimVelocity": {
			"x": 113.82413,
			"y": -56.26078,
			"z": 49.373028
		}
	}, {
		"_id": {
			"$oid": "63a9eb5dfaabb276553fa0ea"
		},
		"id": "29e27831-eda3-4ddf-aa7c-85f04a162ea7",
		"time": {
			"$numberLong": "1672080221648"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198055678378",
		"killerId": "76561199026804181",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160012.2,
			"y": 854.32007,
			"z": 28657.816
		},
		"victimPosition": {
			"x": 160008.27,
			"y": 854.33765,
			"z": 28650.457
		},
		"killerVelocity": {
			"x": -5.8286195,
			"y": 0.12344872,
			"z": -15.023291
		},
		"victimVelocity": {
			"x": -5.6091537,
			"y": 0.23162663,
			"z": -9.057342
		}
	}, {
		"_id": {
			"$oid": "63a9ed26faabb276553fa10d"
		},
		"id": "52defad6-97c0-4e35-982a-8dd5f6594714",
		"time": {
			"$numberLong": "1672080678420"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197972678754",
		"killerId": "76561198055678378",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145316.14,
			"y": 3017.0706,
			"z": 69695.195
		},
		"victimPosition": {
			"x": 144101.44,
			"y": 2917.2725,
			"z": 69988.84
		},
		"killerVelocity": {
			"x": -279.23264,
			"y": 30.256657,
			"z": 111.2921
		},
		"victimVelocity": {
			"x": -230.84833,
			"y": -27.812561,
			"z": -78.56384
		}
	}, {
		"_id": {
			"$oid": "63a9f31efaabb276553fa175"
		},
		"id": "36cdc3b6-27ea-495f-8286-0b33e979d8ae",
		"time": {
			"$numberLong": "1672082206299"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198121642454",
		"killerId": "76561199009303988",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153909.55,
			"y": 1933.1797,
			"z": 36844.56
		},
		"victimPosition": {
			"x": 153569.6,
			"y": 1866.2852,
			"z": 36616.42
		},
		"killerVelocity": {
			"x": -52.237404,
			"y": -95.92765,
			"z": -345.13068
		},
		"victimVelocity": {
			"x": -61.759083,
			"y": -8.841487,
			"z": 256.99957
		}
	}, {
		"_id": {
			"$oid": "63a9f320faabb276553fa177"
		},
		"id": "9b7b3c0f-1f81-4a74-83a8-4803837f0d9b",
		"time": {
			"$numberLong": "1672082208744"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199246195719",
		"killerId": "76561197988807107",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153490.62,
			"y": 1914.265,
			"z": 36368.39
		},
		"victimPosition": {
			"x": 152272.56,
			"y": 1692.3512,
			"z": 40074.383
		},
		"killerVelocity": {
			"x": -65.28737,
			"y": 53.637043,
			"z": 157.1401
		},
		"victimVelocity": {
			"x": -42.098114,
			"y": -129.97604,
			"z": 329.37686
		}
	}, {
		"_id": {
			"$oid": "63a9f3cafaabb276553fa183"
		},
		"id": "312e9fe5-b573-4caf-bda5-4d3fec1e1f42",
		"time": {
			"$numberLong": "1672082378333"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199246195719",
		"killerId": "76561199039234838",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153180.33,
			"y": 2485.648,
			"z": 41270.44
		},
		"victimPosition": {
			"x": 150317.89,
			"y": 2244.6565,
			"z": 44456.062
		},
		"killerVelocity": {
			"x": -136.47874,
			"y": -15.24854,
			"z": 264.9376
		},
		"victimVelocity": {
			"x": -259.29263,
			"y": -31.96808,
			"z": 242.50726
		}
	}, {
		"_id": {
			"$oid": "63a9fc94faabb276553fa273"
		},
		"id": "1e5f3558-3f31-470e-9961-5ab56282cc33",
		"time": {
			"$numberLong": "1672084628974"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198029879272",
		"killerId": "76561198318263731",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 96828.24,
			"y": 2449.482,
			"z": 70340.375
		},
		"victimPosition": {
			"x": 90857.51,
			"y": 2371.2473,
			"z": 73008.2
		},
		"killerVelocity": {
			"x": -319.1701,
			"y": 17.432491,
			"z": 123.373405
		},
		"victimVelocity": {
			"x": 127.80853,
			"y": 8.424804,
			"z": -154.95514
		}
	}, {
		"_id": {
			"$oid": "63aa0475faabb276553fa328"
		},
		"id": "be9254d9-d841-4017-9b4c-e1c7c578fd54",
		"time": {
			"$numberLong": "1672086645944"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198155948990",
		"killerId": "76561199180679229",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 92937.625,
			"y": 2550.7346,
			"z": 92291.945
		},
		"victimPosition": {
			"x": 92702.31,
			"y": 1173.3398,
			"z": 86458.055
		},
		"killerVelocity": {
			"x": -268.72803,
			"y": -76.710335,
			"z": 315.53403
		},
		"victimVelocity": {
			"x": 148.10667,
			"y": -69.55224,
			"z": -127.64318
		}
	}, {
		"_id": {
			"$oid": "63aa09f9faabb276553fa3a0"
		},
		"id": "7c3534b0-8900-4692-be4d-9bb7fee4d99d",
		"time": {
			"$numberLong": "1672088057735"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198150458640",
		"killerId": "76561199229652947",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 146475.7,
			"y": 1275.0267,
			"z": 28308.006
		},
		"victimPosition": {
			"x": 146814.06,
			"y": 854.2639,
			"z": 28053.908
		},
		"killerVelocity": {
			"x": -101.65589,
			"y": 48.021015,
			"z": -274.7797
		},
		"victimVelocity": {
			"x": 17.176744,
			"y": 15.535192,
			"z": -131.11873
		}
	}, {
		"_id": {
			"$oid": "63aa0b06faabb276553fa3b9"
		},
		"id": "9171247a-f897-4144-bee3-0ba53cb03474",
		"time": {
			"$numberLong": "1672088326878"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198891860448",
		"killerId": "76561198869430695",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 154867.56,
			"y": 1364.5457,
			"z": 28490.125
		},
		"victimPosition": {
			"x": 152934.92,
			"y": 1530.7202,
			"z": 29256.844
		},
		"killerVelocity": {
			"x": -224.53561,
			"y": 47.61975,
			"z": 55.37784
		},
		"victimVelocity": {
			"x": 198.9927,
			"y": -18.31894,
			"z": -90.5877
		}
	}, {
		"_id": {
			"$oid": "63aa0bd9faabb276553fa3cb"
		},
		"id": "fc1d5a64-75d2-4bfe-82ba-6b22e6a6a0f9",
		"time": {
			"$numberLong": "1672088537611"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199125089560",
		"killerId": "76561199229652947",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159538.36,
			"y": 907.93494,
			"z": 28469.832
		},
		"victimPosition": {
			"x": 159148.06,
			"y": 853.6012,
			"z": 28208.795
		},
		"killerVelocity": {
			"x": -190.91045,
			"y": -34.53962,
			"z": -126.23476
		},
		"victimVelocity": {
			"x": -0.0017879973,
			"y": -0.0015445054,
			"z": -0.001121654
		}
	}, {
		"_id": {
			"$oid": "63aa1d25faabb276553fa582"
		},
		"id": "3670ccb0-5e1d-4292-85eb-25a424382d5f",
		"time": {
			"$numberLong": "1672092965837"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199302551204",
		"killerId": "76561199196563059",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 85138.6,
			"y": 6061.712,
			"z": 84265.445
		},
		"victimPosition": {
			"x": 84840.25,
			"y": 6997.3125,
			"z": 75219.87
		},
		"killerVelocity": {
			"x": 224.82242,
			"y": -74.001564,
			"z": -243.34384
		},
		"victimVelocity": {
			"x": 68.98736,
			"y": 86.98803,
			"z": 95.21973
		}
	}, {
		"_id": {
			"$oid": "63aa209ffaabb276553fa5e8"
		},
		"id": "dcf13ec4-05b2-4a70-8cc5-444319c3f76d",
		"time": {
			"$numberLong": "1672093855434"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199302551204",
		"killerId": "76561199390020864",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156508.97,
			"y": 1800.2369,
			"z": 27095.22
		},
		"victimPosition": {
			"x": 156073.97,
			"y": 2474.1235,
			"z": 26734.373
		},
		"killerVelocity": {
			"x": -88.483635,
			"y": 61.29756,
			"z": -79.629875
		},
		"victimVelocity": {
			"x": 47.34025,
			"y": 88.2227,
			"z": -105.36718
		}
	}, {
		"_id": {
			"$oid": "63aa29b6faabb276553fa6ba"
		},
		"id": "92846374-9cd7-4fea-bc55-1179e35a0793",
		"time": {
			"$numberLong": "1672096182274"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198318090168",
		"killerId": "76561199453846057",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160227.16,
			"y": 854.4119,
			"z": 28563.385
		},
		"victimPosition": {
			"x": 160236.08,
			"y": 853.6183,
			"z": 28565.838
		},
		"killerVelocity": {
			"x": 60.931328,
			"y": 0.0017649978,
			"z": 17.265081
		},
		"victimVelocity": {
			"x": 49.174225,
			"y": 0.0023670942,
			"z": 15.823584
		}
	}, {
		"_id": {
			"$oid": "63aa2ac3faabb276553fa6dd"
		},
		"id": "97843fdd-586b-4287-8cdc-46db396ee940",
		"time": {
			"$numberLong": "1672096451316"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198318090168",
		"killerId": "76561198835380366",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162459.48,
			"y": 1593.202,
			"z": 30768.566
		},
		"victimPosition": {
			"x": 160509.05,
			"y": 1518.5569,
			"z": 30138.943
		},
		"killerVelocity": {
			"x": -98.97895,
			"y": 23.023716,
			"z": 17.256557
		},
		"victimVelocity": {
			"x": -51.217255,
			"y": -42.39751,
			"z": 159.75456
		}
	}, {
		"_id": {
			"$oid": "63aa2ce3faabb276553fa718"
		},
		"id": "428713a6-92c8-4c3d-a549-f6b63f626c7c",
		"time": {
			"$numberLong": "1672096995714"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198215844463",
		"killerId": "76561199453846057",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159960.05,
			"y": 854.36163,
			"z": 28586.02
		},
		"victimPosition": {
			"x": 159868.97,
			"y": 854.40283,
			"z": 28455.37
		},
		"killerVelocity": {
			"x": -4.953764,
			"y": -0.03577675,
			"z": -7.6656227
		},
		"victimVelocity": {
			"x": -16.794188,
			"y": -0.00035999715,
			"z": -10.953149
		}
	}, {
		"_id": {
			"$oid": "63aa2df0faabb276553fa742"
		},
		"id": "3cc8cd9f-4063-4675-a851-8dcd43ce60d5",
		"time": {
			"$numberLong": "1672097264069"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199230376425",
		"killerId": "76561199453846057",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157957.25,
			"y": 2339.6663,
			"z": 33139.85
		},
		"victimPosition": {
			"x": 161681.36,
			"y": 854.40106,
			"z": 29007.498
		},
		"killerVelocity": {
			"x": 123.56992,
			"y": 38.37838,
			"z": 244.92714
		},
		"victimVelocity": {
			"x": 0.0005592666,
			"y": 0.00019393116,
			"z": 0.00030673086
		}
	}, {
		"_id": {
			"$oid": "63aa2f6afaabb276553fa75e"
		},
		"id": "e61cbbe1-7d80-4ee8-9533-f6248c68dedb",
		"time": {
			"$numberLong": "1672097642887"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199230376425",
		"killerId": "76561198318090168",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149822.27,
			"y": 1211.1163,
			"z": 30121.832
		},
		"victimPosition": {
			"x": 140726.16,
			"y": 1577.128,
			"z": 22205.635
		},
		"killerVelocity": {
			"x": -187.19452,
			"y": -12.642268,
			"z": -169.35605
		},
		"victimVelocity": {
			"x": 290.17072,
			"y": -54.72443,
			"z": -51.42917
		}
	}, {
		"_id": {
			"$oid": "63aa3f5cfaabb276553fa8ca"
		},
		"id": "71326165-9583-48f3-aae6-06d96fd6fe79",
		"time": {
			"$numberLong": "1672101724393"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199180679229",
		"killerId": "76561199167466902",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 85412.74,
			"y": 1231.4285,
			"z": 88276.25
		},
		"victimPosition": {
			"x": 84680.875,
			"y": 1190.4437,
			"z": 88583.555
		},
		"killerVelocity": {
			"x": -74.45802,
			"y": -64.60785,
			"z": 46.734505
		},
		"victimVelocity": {
			"x": 246.73778,
			"y": 17.428936,
			"z": -95.86548
		}
	}, {
		"_id": {
			"$oid": "63aa42bbfaabb276553fa920"
		},
		"id": "7ca45bf5-8e68-4e17-b489-2ba8e53faf88",
		"time": {
			"$numberLong": "1672102587037"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198967001480",
		"killerId": "76561198016103278",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116222.02,
			"y": 3147.4685,
			"z": 64225.734
		},
		"victimPosition": {
			"x": 110735.984,
			"y": 1543.8063,
			"z": 69651.82
		},
		"killerVelocity": {
			"x": -67.0853,
			"y": -95.41221,
			"z": 314.522
		},
		"victimVelocity": {
			"x": 57.81917,
			"y": -46.15011,
			"z": 179.92625
		}
	}, {
		"_id": {
			"$oid": "63aa4846faabb276553fa9b8"
		},
		"id": "8b2da1bf-c0c2-47e2-a9a6-dd5634254381",
		"time": {
			"$numberLong": "1672104006226"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198435978586",
		"killerId": "76561198274809054",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 108599.336,
			"y": 3038.8909,
			"z": 88036.1
		},
		"victimPosition": {
			"x": 104920.31,
			"y": 4069.3142,
			"z": 87969.5
		},
		"killerVelocity": {
			"x": -114.87581,
			"y": 19.137428,
			"z": 28.495382
		},
		"victimVelocity": {
			"x": -273.4996,
			"y": -90.207985,
			"z": -175.6554
		}
	}, {
		"_id": {
			"$oid": "63aa4986faabb276553fa9d7"
		},
		"id": "03678268-2ee3-40b5-918a-5f30aba1387e",
		"time": {
			"$numberLong": "1672104326480"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198435978586",
		"killerId": "76561198274809054",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160105.4,
			"y": 854.41156,
			"z": 28876.74
		},
		"victimPosition": {
			"x": 114094.414,
			"y": 1760.3715,
			"z": 82405.586
		},
		"killerVelocity": {
			"x": -0.00058184797,
			"y": -0.00054173917,
			"z": 0.0018230287
		},
		"victimVelocity": {
			"x": -232.18816,
			"y": -49.860214,
			"z": -154.4306
		}
	}, {
		"_id": {
			"$oid": "63aa4f68faabb276553faa79"
		},
		"id": "5fd6a57b-69e9-4a12-a843-7142a6b01094",
		"time": {
			"$numberLong": "1672105832167"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198070007976",
		"killerId": "76561198799187424",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 126194.445,
			"y": 3078.3772,
			"z": 69581.02
		},
		"victimPosition": {
			"x": 118561.07,
			"y": 2135.0684,
			"z": 81974.65
		},
		"killerVelocity": {
			"x": -275.38943,
			"y": -5.2883,
			"z": 237.27557
		},
		"victimVelocity": {
			"x": -54.522545,
			"y": -215.26126,
			"z": 196.19733
		}
	}, {
		"_id": {
			"$oid": "63aa56aefaabb276553fab31"
		},
		"id": "58c4c107-22c8-4292-8db8-52fff9bbebbb",
		"time": {
			"$numberLong": "1672107694901"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198153819286",
		"killerId": "76561199196563059",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 112999.84,
			"y": 1795.5295,
			"z": 69393.18
		},
		"victimPosition": {
			"x": 108794.15,
			"y": 1819.6085,
			"z": 73117.25
		},
		"killerVelocity": {
			"x": -202.317,
			"y": -14.316141,
			"z": 337.3759
		},
		"victimVelocity": {
			"x": -134.24318,
			"y": 115.285805,
			"z": -95.57711
		}
	}, {
		"_id": {
			"$oid": "63aa5c1ffaabb276553fabbd"
		},
		"id": "b9c9fd73-0596-491e-b996-b8c2ab549751",
		"time": {
			"$numberLong": "1672109087093"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198886833137",
		"killerId": "76561198274809054",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 105277.586,
			"y": 1058.5968,
			"z": 81173.9
		},
		"victimPosition": {
			"x": 104501.05,
			"y": 1661.8254,
			"z": 86280.07
		},
		"killerVelocity": {
			"x": -145.91444,
			"y": -11.263653,
			"z": 259.0179
		},
		"victimVelocity": {
			"x": -70.72666,
			"y": -6.889438,
			"z": 15.874503
		}
	}, {
		"_id": {
			"$oid": "63aa69edfaabb276553fad51"
		},
		"id": "62dcf306-03a0-4fc0-a15c-e3de3301e35f",
		"time": {
			"$numberLong": "1672112621243"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199112545519",
		"killerId": "76561199208286816",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145182.16,
			"y": 3465.703,
			"z": 50525.824
		},
		"victimPosition": {
			"x": 145289.5,
			"y": 1729.9885,
			"z": 52694.04
		},
		"killerVelocity": {
			"x": -218.56812,
			"y": -87.12548,
			"z": -158.88153
		},
		"victimVelocity": {
			"x": 134.50386,
			"y": -194.37436,
			"z": 72.33366
		}
	}, {
		"_id": {
			"$oid": "63aa70dafaabb276553fae21"
		},
		"id": "ce656624-80d0-41de-9abb-fe4265907fbb",
		"time": {
			"$numberLong": "1672114394323"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199154734223",
		"killerId": "76561198084265585",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158765.55,
			"y": 1809.1418,
			"z": 37168.086
		},
		"victimPosition": {
			"x": 158732.16,
			"y": 1339.4344,
			"z": 39064.105
		},
		"killerVelocity": {
			"x": -61.90609,
			"y": -37.59038,
			"z": 378.0182
		},
		"victimVelocity": {
			"x": -45.622448,
			"y": -32.85236,
			"z": -7.7825117
		}
	}, {
		"_id": {
			"$oid": "63aa7127faabb276553fae2c"
		},
		"id": "bd115dc4-694c-49f7-9b21-47601dd1df1e",
		"time": {
			"$numberLong": "1672114471261"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198392426247",
		"killerId": "76561198084265585",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 166495.47,
			"y": 3116.5518,
			"z": 27979.086
		},
		"victimPosition": {
			"x": 167068.36,
			"y": 2809.5918,
			"z": 26465.666
		},
		"killerVelocity": {
			"x": 73.09163,
			"y": -42.604733,
			"z": -197.36859
		},
		"victimVelocity": {
			"x": 110.84004,
			"y": -74.45756,
			"z": -278.54285
		}
	}, {
		"_id": {
			"$oid": "63aa7605faabb276553faeb3"
		},
		"id": "1c089c3f-3b2c-4b13-bfa9-8580473648e7",
		"time": {
			"$numberLong": "1672115717982"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199043843167",
		"killerId": "76561198093114353",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 129219.445,
			"y": 2632.4514,
			"z": 50232.18
		},
		"victimPosition": {
			"x": 127285.56,
			"y": 2395.1208,
			"z": 53627.5
		},
		"killerVelocity": {
			"x": -321.99075,
			"y": 14.152528,
			"z": -70.14258
		},
		"victimVelocity": {
			"x": 35.17593,
			"y": 21.344093,
			"z": 326.05023
		}
	}, {
		"_id": {
			"$oid": "63aa76a7faabb276553faec3"
		},
		"id": "7e79c418-8a31-45c3-a841-ae189b364705",
		"time": {
			"$numberLong": "1672115879047"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198291977717",
		"killerId": "76561198084265585",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 137359.83,
			"y": 2045.7717,
			"z": 33326.22
		},
		"victimPosition": {
			"x": 135005,
			"y": 1912.3369,
			"z": 34241.484
		},
		"killerVelocity": {
			"x": -376.34406,
			"y": -9.665618,
			"z": 34.73888
		},
		"victimVelocity": {
			"x": -285.3562,
			"y": 2.106846,
			"z": -6.085147
		}
	}, {
		"_id": {
			"$oid": "63aa76c6faabb276553faec5"
		},
		"id": "7bee1b3a-2248-43b0-8820-e71e4fc14ae4",
		"time": {
			"$numberLong": "1672115910424"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198084265585",
		"killerId": "76561198093114353",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131550.73,
			"y": 2231.6318,
			"z": 33348.453
		},
		"victimPosition": {
			"x": 126210.61,
			"y": 2662.3318,
			"z": 35038.582
		},
		"killerVelocity": {
			"x": -371.99414,
			"y": 24.428669,
			"z": 96.73131
		},
		"victimVelocity": {
			"x": -320.90945,
			"y": -18.414818,
			"z": 33.21259
		}
	}, {
		"_id": {
			"$oid": "63aa77befaabb276553faede"
		},
		"id": "a2543bb3-9e10-4ce5-a2c5-4c69e9e6fbc3",
		"time": {
			"$numberLong": "1672116158507"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199121798765",
		"killerId": "76561198093114353",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 138946.1,
			"y": 2041.7577,
			"z": 36118.1
		},
		"victimPosition": {
			"x": 133567.3,
			"y": 4017.4343,
			"z": 38803.754
		},
		"killerVelocity": {
			"x": -124.48756,
			"y": -4.1581173,
			"z": 197.13005
		},
		"victimVelocity": {
			"x": 142.70392,
			"y": 32.603188,
			"z": -11.283853
		}
	}, {
		"_id": {
			"$oid": "63aa7812faabb276553faee5"
		},
		"id": "e297ac86-472f-41cd-bcd4-321d6d36c452",
		"time": {
			"$numberLong": "1672116242461"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199154734223",
		"killerId": "76561198093114353",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 136043.12,
			"y": 1867.9193,
			"z": 38597.094
		},
		"victimPosition": {
			"x": 143395.8,
			"y": 969.1558,
			"z": 29880.861
		},
		"killerVelocity": {
			"x": -176.11783,
			"y": -0.7700526,
			"z": 134.42325
		},
		"victimVelocity": {
			"x": 60.77422,
			"y": -10.024394,
			"z": -94.72895
		}
	}, {
		"_id": {
			"$oid": "63aa7b4cfaabb276553faf2b"
		},
		"id": "11f2278f-094c-4aa2-b4f0-48c930bb6ede",
		"time": {
			"$numberLong": "1672117068985"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198084265585",
		"killerId": "76561199043843167",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 80472.695,
			"y": 2239.114,
			"z": 79754.22
		},
		"victimPosition": {
			"x": 82730.59,
			"y": 2050.9856,
			"z": 81812.72
		},
		"killerVelocity": {
			"x": -139.27203,
			"y": -140.99348,
			"z": 287.36478
		},
		"victimVelocity": {
			"x": 101.816795,
			"y": -28.937887,
			"z": -257.8733
		}
	}, {
		"_id": {
			"$oid": "63aa8c87faabb276553fb0a3"
		},
		"id": "96f05185-c381-4033-999a-3fd77adff89f",
		"time": {
			"$numberLong": "1672121479406"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198393340144",
		"killerId": "76561198179056431",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 62787.934,
			"y": 2900.7568,
			"z": 113913.94
		},
		"victimPosition": {
			"x": 63607.332,
			"y": 3637.087,
			"z": 99555.66
		},
		"killerVelocity": {
			"x": -90.46838,
			"y": -112.50475,
			"z": -210.69774
		},
		"victimVelocity": {
			"x": -271.45538,
			"y": -77.74091,
			"z": 107.68701
		}
	}, {
		"_id": {
			"$oid": "63aa955cfaabb276553fb16c"
		},
		"id": "0edfbe3f-3f9e-4e60-9b55-c2faa8628f85",
		"time": {
			"$numberLong": "1672123740110"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198092607913",
		"killerId": "76561198348917563",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116124.93,
			"y": 5062.524,
			"z": 64725.047
		},
		"victimPosition": {
			"x": 105249.03,
			"y": 1148.7026,
			"z": 69082.63
		},
		"killerVelocity": {
			"x": -331.61987,
			"y": 0.046669386,
			"z": 253.71654
		},
		"victimVelocity": {
			"x": 329.48288,
			"y": 29.687216,
			"z": 54.753555
		}
	}, {
		"_id": {
			"$oid": "63aa9d38faabb276553fb22c"
		},
		"id": "9f0189c4-243c-40cb-a8a4-ef83079f912c",
		"time": {
			"$numberLong": "1672125752959"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199093514777",
		"killerId": "76561199084192474",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 94556.6,
			"y": 2423.4722,
			"z": 57874.7
		},
		"victimPosition": {
			"x": 98200.984,
			"y": 2449.7463,
			"z": 59741.438
		},
		"killerVelocity": {
			"x": 82.378265,
			"y": 6.178994,
			"z": 181.10333
		},
		"victimVelocity": {
			"x": -350.89688,
			"y": -54.839695,
			"z": -107.11199
		}
	}, {
		"_id": {
			"$oid": "63aae8ccfaabb276553fb62a"
		},
		"id": "825403f0-18e9-4682-ba18-35035f65ab5e",
		"time": {
			"$numberLong": "1672145100565"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199153548254",
		"killerId": "76561198190329957",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 126453.555,
			"y": 2365.1523,
			"z": 66493.33
		},
		"victimPosition": {
			"x": 126084.59,
			"y": 2304.1335,
			"z": 66494.18
		},
		"killerVelocity": {
			"x": -217.77629,
			"y": 8.050375,
			"z": 186.03172
		},
		"victimVelocity": {
			"x": -36.18648,
			"y": -17.319805,
			"z": -263.38983
		}
	}, {
		"_id": {
			"$oid": "63aaf82ffaabb276553fb64c"
		},
		"id": "cbc4aef0-ba26-44f4-81c9-0c8acfe10488",
		"time": {
			"$numberLong": "1672149039529"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199001079885",
		"killerId": "76561199129513383",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 105930.17,
			"y": 3010.946,
			"z": 63323.367
		},
		"victimPosition": {
			"x": 101892.36,
			"y": 1508.8705,
			"z": 71078.33
		},
		"killerVelocity": {
			"x": -220.99088,
			"y": -104.48187,
			"z": 216.46678
		},
		"victimVelocity": {
			"x": 192.94043,
			"y": -74.54334,
			"z": -19.26122
		}
	}, {
		"_id": {
			"$oid": "63ab243dfaabb276553fba1f"
		},
		"id": "b091b708-8d0b-4936-b2ac-286a06816011",
		"time": {
			"$numberLong": "1672160317890"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198144441716",
		"killerId": "76561198274809054",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141321.62,
			"y": 1808.5651,
			"z": 38434.25
		},
		"victimPosition": {
			"x": 142697.08,
			"y": 1817.6807,
			"z": 37524.734
		},
		"killerVelocity": {
			"x": 262.39084,
			"y": 8.062739,
			"z": -149.88455
		},
		"victimVelocity": {
			"x": 150.25938,
			"y": -12.664772,
			"z": -77.86182
		}
	}, {
		"_id": {
			"$oid": "63ab2998faabb276553fbaac"
		},
		"id": "1b1419ea-c73e-479c-97fb-05cd82afe163",
		"time": {
			"$numberLong": "1672161688148"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199150979859",
		"killerId": "76561198821633458",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 88343.79,
			"y": 2338.9348,
			"z": 92887.805
		},
		"victimPosition": {
			"x": 78909.87,
			"y": 1164.54,
			"z": 95913.33
		},
		"killerVelocity": {
			"x": 59.20963,
			"y": -225.43289,
			"z": 86.114174
		},
		"victimVelocity": {
			"x": 62.702847,
			"y": -82.688194,
			"z": -163.03871
		}
	}, {
		"_id": {
			"$oid": "63ab2af4faabb276553fbacd"
		},
		"id": "3d911d98-e066-441c-9605-1417eee710dd",
		"time": {
			"$numberLong": "1672162036689"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198821633458",
		"killerId": "76561199123685419",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155221.38,
			"y": 2347.8962,
			"z": 36982.34
		},
		"victimPosition": {
			"x": 146047.78,
			"y": 1534.0111,
			"z": 36740.445
		},
		"killerVelocity": {
			"x": -353.66202,
			"y": 2.5512335,
			"z": 80.97003
		},
		"victimVelocity": {
			"x": -14.46367,
			"y": -9.788871,
			"z": 162.37239
		}
	}, {
		"_id": {
			"$oid": "63ab35d0faabb276553fbbd3"
		},
		"id": "957c92e1-18b7-43f6-9a88-156023385aa2",
		"time": {
			"$numberLong": "1672164816721"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199004194851",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 100475.12,
			"y": 1801.2549,
			"z": 70813.56
		},
		"victimPosition": {
			"x": 100611.805,
			"y": 642.83374,
			"z": 70138.06
		},
		"killerVelocity": {
			"x": -78.673996,
			"y": 12.062401,
			"z": -61.21308
		},
		"victimVelocity": {
			"x": 15.690515,
			"y": 4.6444736,
			"z": 4.057849
		}
	}, {
		"_id": {
			"$oid": "63ab38aefaabb276553fbc18"
		},
		"id": "857a8b84-7217-47da-8a23-6fff4b8ced20",
		"time": {
			"$numberLong": "1672165550441"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199039234838",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 138986.5,
			"y": 3035.2832,
			"z": 38586.066
		},
		"victimPosition": {
			"x": 138006.05,
			"y": 2737.8774,
			"z": 37004.742
		},
		"killerVelocity": {
			"x": -233.71895,
			"y": -1.434675,
			"z": 241.18462
		},
		"victimVelocity": {
			"x": -97.60548,
			"y": -132.2271,
			"z": 28.574
		}
	}, {
		"_id": {
			"$oid": "63ab3aedfaabb276553fbc56"
		},
		"id": "fd368c3b-87de-4664-8069-c195fd23ab8c",
		"time": {
			"$numberLong": "1672166125447"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198393340144",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 88261.27,
			"y": 1820.0746,
			"z": 85454.805
		},
		"victimPosition": {
			"x": 86191.06,
			"y": 1800.6315,
			"z": 85843.39
		},
		"killerVelocity": {
			"x": -359.661,
			"y": 4.9592485,
			"z": 134.0191
		},
		"victimVelocity": {
			"x": 218.21939,
			"y": -249.07431,
			"z": -79.62157
		}
	}, {
		"_id": {
			"$oid": "63ab3d1dfaabb276553fbc86"
		},
		"id": "58ad4cb6-f8d8-454d-a5e7-2826993bc786",
		"time": {
			"$numberLong": "1672166685919"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198152354466",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 92336.67,
			"y": 1558.2194,
			"z": 90651.9
		},
		"victimPosition": {
			"x": 92413.46,
			"y": 327.9026,
			"z": 89882.71
		},
		"killerVelocity": {
			"x": -44.54374,
			"y": 109.72992,
			"z": 310.32858
		},
		"victimVelocity": {
			"x": -27.16359,
			"y": -19.391443,
			"z": 22.62219
		}
	}, {
		"_id": {
			"$oid": "63ab3dc4faabb276553fbc91"
		},
		"id": "e5e3f13b-bd4a-4822-beeb-a7410d403097",
		"time": {
			"$numberLong": "1672166852149"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198059132551",
		"killerId": "76561199004194851",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 87550.59,
			"y": 1636.9808,
			"z": 91339.805
		},
		"victimPosition": {
			"x": 84846.586,
			"y": 989.31805,
			"z": 92843.53
		},
		"killerVelocity": {
			"x": -176.97554,
			"y": -9.539211,
			"z": 92.092804
		},
		"victimVelocity": {
			"x": -327.8341,
			"y": -16.990839,
			"z": 184.81354
		}
	}, {
		"_id": {
			"$oid": "63ab3fc9faabb276553fbcc9"
		},
		"id": "2a4121a2-02cc-443e-97f6-082155dddf33",
		"time": {
			"$numberLong": "1672167369673"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198059132551",
		"killerId": "76561197970364229",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158996.84,
			"y": 1149.409,
			"z": 27213.857
		},
		"victimPosition": {
			"x": 158137.86,
			"y": 1270.682,
			"z": 28509.363
		},
		"killerVelocity": {
			"x": -74.008644,
			"y": -11.481225,
			"z": 101.2671
		},
		"victimVelocity": {
			"x": -86.57069,
			"y": 18.980284,
			"z": 107.50401
		}
	}, {
		"_id": {
			"$oid": "63ab4acafaabb276553fbdf8"
		},
		"id": "b9f5635c-bcd9-4d3b-9ece-5f3c8235508d",
		"time": {
			"$numberLong": "1672170186104"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198393340144",
		"killerId": "76561199025467198",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151965.8,
			"y": 5538.7397,
			"z": 45174.496
		},
		"victimPosition": {
			"x": 148626.5,
			"y": 8881.913,
			"z": 51151.043
		},
		"killerVelocity": {
			"x": -135.98343,
			"y": 113.25419,
			"z": 304.74835
		},
		"victimVelocity": {
			"x": -77.510185,
			"y": -4.8144636,
			"z": -120.30204
		}
	}, {
		"_id": {
			"$oid": "63ab5105faabb276553fbe9a"
		},
		"id": "b2f42427-1e7b-47fd-ad9e-cf4823e953fd",
		"time": {
			"$numberLong": "1672171781731"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 6,
		"victimId": "76561199403125321",
		"killerId": "76561199419494422",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155365.72,
			"y": 1751.9727,
			"z": 31643.836
		},
		"victimPosition": {
			"x": 159240.45,
			"y": 853.5843,
			"z": 27854.812
		},
		"killerVelocity": {
			"x": -99.83669,
			"y": -49.78375,
			"z": -367.89786
		},
		"victimVelocity": {
			"x": 0.00016344392,
			"y": -0.00011470169,
			"z": -0.000044719534
		}
	}, {
		"_id": {
			"$oid": "63ab5278faabb276553fbec1"
		},
		"id": "81ff3dd4-e51c-4dc1-9421-f639464eeb47",
		"time": {
			"$numberLong": "1672172152828"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199419494422",
		"killerId": "76561199373422279",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155454.36,
			"y": 1648.7584,
			"z": 28081.902
		},
		"victimPosition": {
			"x": 160478.12,
			"y": 854.5222,
			"z": 28721.266
		},
		"killerVelocity": {
			"x": -27.93603,
			"y": -17.781235,
			"z": -244.177
		},
		"victimVelocity": {
			"x": 15.0664625,
			"y": -0.057620578,
			"z": 3.135575
		}
	}, {
		"_id": {
			"$oid": "63ab6300faabb276553fc01f"
		},
		"id": "5243d666-ce9b-4acc-ae2e-4afd45439bbf",
		"time": {
			"$numberLong": "1672176384100"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198215844463",
		"killerId": "76561197992647892",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116549.57,
			"y": 2585.7673,
			"z": 56436.727
		},
		"victimPosition": {
			"x": 113864.42,
			"y": 2755.7593,
			"z": 58553.574
		},
		"killerVelocity": {
			"x": -248.49873,
			"y": -9.421433,
			"z": 280.4901
		},
		"victimVelocity": {
			"x": -229.18437,
			"y": 1.6517069,
			"z": 300.8489
		}
	}, {
		"_id": {
			"$oid": "63ab64d3faabb276553fc04e"
		},
		"id": "d172b225-4127-4ed6-ae7b-c94999b05424",
		"time": {
			"$numberLong": "1672176851934"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198215844463",
		"killerId": "76561197992647892",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 103699.08,
			"y": 1458.7084,
			"z": 70411.62
		},
		"victimPosition": {
			"x": 104327.8,
			"y": 1528.5319,
			"z": 70719.2
		},
		"killerVelocity": {
			"x": 216.3172,
			"y": 50.26475,
			"z": 189.83286
		},
		"victimVelocity": {
			"x": 128.51678,
			"y": -56.33052,
			"z": 162.72574
		}
	}, {
		"_id": {
			"$oid": "63ab67fdfaabb276553fc0a4"
		},
		"id": "ce3cd64a-aeb2-4e43-9a15-83404c4d4673",
		"time": {
			"$numberLong": "1672177661089"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199013602783",
		"killerId": "76561197992647892",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152932.75,
			"y": 1804.2877,
			"z": 35983.496
		},
		"victimPosition": {
			"x": 150174.58,
			"y": 2226.2183,
			"z": 43715.89
		},
		"killerVelocity": {
			"x": -67.18926,
			"y": 19.608234,
			"z": 278.28577
		},
		"victimVelocity": {
			"x": 278.87784,
			"y": -141.03633,
			"z": 91.977005
		}
	}, {
		"_id": {
			"$oid": "63ab6829faabb276553fc0a7"
		},
		"id": "08055d61-0ec3-4585-a692-ff29b6efb0a4",
		"time": {
			"$numberLong": "1672177705734"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199127942775",
		"killerId": "76561199062181737",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147443.86,
			"y": 3197.8667,
			"z": 41333.906
		},
		"victimPosition": {
			"x": 147160.86,
			"y": 2317.9966,
			"z": 42820.516
		},
		"killerVelocity": {
			"x": 289.56696,
			"y": -31.257326,
			"z": -12.66035
		},
		"victimVelocity": {
			"x": -78.59349,
			"y": -89.78704,
			"z": 111.462746
		}
	}, {
		"_id": {
			"$oid": "63ab683cfaabb276553fc0b0"
		},
		"id": "a9f0bdc4-4964-42ee-820b-427e7fc3af16",
		"time": {
			"$numberLong": "1672177724921"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199062181737",
		"killerId": "76561197992647892",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149296.66,
			"y": 2671.3137,
			"z": 41793.992
		},
		"victimPosition": {
			"x": 149313.7,
			"y": 3957.4055,
			"z": 44715.55
		},
		"killerVelocity": {
			"x": -14.414737,
			"y": 79.559814,
			"z": 237.02975
		},
		"victimVelocity": {
			"x": 57.46974,
			"y": 51.163345,
			"z": 242.34105
		}
	}, {
		"_id": {
			"$oid": "63ab729bfaabb276553fc181"
		},
		"id": "21a0a451-5138-4976-adfe-5bcc71d41f4a",
		"time": {
			"$numberLong": "1672180379694"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199382539594",
		"killerId": "76561199083504087",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149096.42,
			"y": 1747.4752,
			"z": 53617.777
		},
		"victimPosition": {
			"x": 141847.1,
			"y": 2006.4141,
			"z": 55398.94
		},
		"killerVelocity": {
			"x": -258.29095,
			"y": -21.661251,
			"z": 284.09747
		},
		"victimVelocity": {
			"x": 14.046443,
			"y": 75.44813,
			"z": -345.58298
		}
	}, {
		"_id": {
			"$oid": "63ab7506faabb276553fc1b1"
		},
		"id": "3eea9109-62b1-4dc8-8042-b0a93115ad1f",
		"time": {
			"$numberLong": "1672180998539"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199465672727",
		"killerId": "76561199212317236",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 176258.1,
			"y": 2864.1587,
			"z": 19408.281
		},
		"victimPosition": {
			"x": 182845.62,
			"y": 1414.3469,
			"z": 19194.635
		},
		"killerVelocity": {
			"x": 254.27646,
			"y": -72.77841,
			"z": -26.168541
		},
		"victimVelocity": {
			"x": 52.318253,
			"y": -10.435965,
			"z": 28.275972
		}
	}, {
		"_id": {
			"$oid": "63ab89c6faabb276553fc3ed"
		},
		"id": "0df27edb-15aa-4797-995e-b67263428dad",
		"time": {
			"$numberLong": "1672186310614"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199295660211",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 98435.734,
			"y": 1770.4838,
			"z": 94616.21
		},
		"victimPosition": {
			"x": 82820.59,
			"y": 2785.649,
			"z": 99103.164
		},
		"killerVelocity": {
			"x": -44.681965,
			"y": -118.66409,
			"z": 274.09686
		},
		"victimVelocity": {
			"x": 21.676245,
			"y": -78.88727,
			"z": 137.07707
		}
	}, {
		"_id": {
			"$oid": "63ab8c6dfaabb276553fc42f"
		},
		"id": "827a738a-9f86-46de-a055-2cb5b1aa7ec2",
		"time": {
			"$numberLong": "1672186989223"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199197257839",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145500.56,
			"y": 2125.9163,
			"z": 41800.863
		},
		"victimPosition": {
			"x": 144756.19,
			"y": 1734.3124,
			"z": 45671.992
		},
		"killerVelocity": {
			"x": 63.28568,
			"y": -263.10126,
			"z": 207.1897
		},
		"victimVelocity": {
			"x": 298.48633,
			"y": -175.34843,
			"z": 26.191685
		}
	}, {
		"_id": {
			"$oid": "63ab8ccefaabb276553fc439"
		},
		"id": "0c10bb37-6b6f-4cc2-b049-9c222dea7c7b",
		"time": {
			"$numberLong": "1672187086973"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199197257839",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160921.3,
			"y": 854.4155,
			"z": 29001.053
		},
		"victimPosition": {
			"x": 159889.72,
			"y": 854.4022,
			"z": 28685.188
		},
		"killerVelocity": {
			"x": -40.43586,
			"y": 0.0021127462,
			"z": -12.15685
		},
		"victimVelocity": {
			"x": -8.202055,
			"y": 0.00092934817,
			"z": -1.3439242
		}
	}, {
		"_id": {
			"$oid": "63ab9242faabb276553fc4ca"
		},
		"id": "7a70be99-2415-455e-8fe2-53483f08709e",
		"time": {
			"$numberLong": "1672188482836"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199197257839",
		"killerId": "76561199061599665",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 72080.2,
			"y": 2164.277,
			"z": 83628.28
		},
		"victimPosition": {
			"x": 70568.26,
			"y": 1214.3945,
			"z": 84081.29
		},
		"killerVelocity": {
			"x": -343.1032,
			"y": -105.837135,
			"z": 193.38414
		},
		"victimVelocity": {
			"x": -214.46837,
			"y": -231.3496,
			"z": 131.56094
		}
	}, {
		"_id": {
			"$oid": "63ab99dafaabb276553fc565"
		},
		"id": "fe1b2c26-ebdf-4b40-9a73-f489d4509a10",
		"time": {
			"$numberLong": "1672190426936"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198031485474",
		"killerId": "76561198067568359",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 237280.34,
			"y": 5164.609,
			"z": 46865.562
		},
		"victimPosition": {
			"x": 237171.64,
			"y": 4040.7678,
			"z": 47390.523
		},
		"killerVelocity": {
			"x": -67.0975,
			"y": -151.88303,
			"z": 132.77353
		},
		"victimVelocity": {
			"x": -21.23432,
			"y": -215.32399,
			"z": 59.77089
		}
	}, {
		"_id": {
			"$oid": "63abbecbfaabb276553fc924"
		},
		"id": "c8275c20-c043-4d8b-b728-d19df9b9615c",
		"time": {
			"$numberLong": "1672199883566"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198039266576",
		"killerId": "76561198402945025",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 126378.484,
			"y": 1784.8776,
			"z": 42513.61
		},
		"victimPosition": {
			"x": 125864.87,
			"y": 1633.0198,
			"z": 41750.03
		},
		"killerVelocity": {
			"x": -105.76891,
			"y": -36.623672,
			"z": -179.19565
		},
		"victimVelocity": {
			"x": -115.618774,
			"y": -44.982338,
			"z": -134.86028
		}
	}, {
		"_id": {
			"$oid": "63abbefefaabb276553fc92a"
		},
		"id": "6866e019-4f79-49b0-9ac1-7a297463ecfb",
		"time": {
			"$numberLong": "1672199934262"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198402945025",
		"killerId": "76561199128369112",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 129116.6,
			"y": 3560.6826,
			"z": 34950.562
		},
		"victimPosition": {
			"x": 122625.44,
			"y": 2054.414,
			"z": 42033.875
		},
		"killerVelocity": {
			"x": -369.16956,
			"y": 14.1679535,
			"z": 146.02762
		},
		"victimVelocity": {
			"x": 208.77434,
			"y": 13.092247,
			"z": -156.6721
		}
	}, {
		"_id": {
			"$oid": "63abc2d2faabb276553fc96f"
		},
		"id": "3865fd66-e519-4db7-be17-95e7f2fe7f73",
		"time": {
			"$numberLong": "1672200914356"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199230298802",
		"killerId": "76561199128369112",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151276.7,
			"y": 2998.3408,
			"z": 39325
		},
		"victimPosition": {
			"x": 147269.23,
			"y": 2499.531,
			"z": 49647.785
		},
		"killerVelocity": {
			"x": -176.75262,
			"y": -38.130768,
			"z": 331.45444
		},
		"victimVelocity": {
			"x": -197.0286,
			"y": -91.5826,
			"z": 48.774048
		}
	}, {
		"_id": {
			"$oid": "63abc355faabb276553fc97b"
		},
		"id": "eb4b611f-c184-4c12-b199-2fde5113cccc",
		"time": {
			"$numberLong": "1672201045495"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199031320528",
		"killerId": "76561198392426247",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131938.06,
			"y": 5456.7812,
			"z": 54916.63
		},
		"victimPosition": {
			"x": 142742.97,
			"y": 1724.6711,
			"z": 56618.957
		},
		"killerVelocity": {
			"x": -250.25313,
			"y": 0.090330176,
			"z": 285.38184
		},
		"victimVelocity": {
			"x": -17.065092,
			"y": -102.93917,
			"z": 27.603584
		}
	}, {
		"_id": {
			"$oid": "63abc3d4faabb276553fc981"
		},
		"id": "25137013-84e0-447a-94f3-8b58e271b501",
		"time": {
			"$numberLong": "1672201172981"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198844156995",
		"killerId": "76561199230298802",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145632.98,
			"y": 2008.3846,
			"z": 45683.953
		},
		"victimPosition": {
			"x": 143292.11,
			"y": 2353.7747,
			"z": 45062.855
		},
		"killerVelocity": {
			"x": 219.59174,
			"y": 7.0142746,
			"z": 221.67923
		},
		"victimVelocity": {
			"x": -64.97699,
			"y": -89.56034,
			"z": 68.16034
		}
	}, {
		"_id": {
			"$oid": "63abc8d5faabb276553fc9fb"
		},
		"id": "9e940594-d280-45cd-a6bd-6474fc24cf0f",
		"time": {
			"$numberLong": "1672202453552"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199024289581",
		"killerId": "76561199230298802",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141357.47,
			"y": 3283.2988,
			"z": 34927.402
		},
		"victimPosition": {
			"x": 138786.27,
			"y": 3672.485,
			"z": 33450.656
		},
		"killerVelocity": {
			"x": -313.2529,
			"y": 72.78461,
			"z": -41.957283
		},
		"victimVelocity": {
			"x": 116.1838,
			"y": -118.02337,
			"z": -232.6621
		}
	}, {
		"_id": {
			"$oid": "63abd2ebfaabb276553fcacc"
		},
		"id": "19e50731-6016-4eff-9724-17a4922f2d5a",
		"time": {
			"$numberLong": "1672205035379"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561197985247422",
		"killerId": "76561198957046021",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 110832.23,
			"y": 1590.5563,
			"z": 81952.83
		},
		"victimPosition": {
			"x": 111989.3,
			"y": 1563.5961,
			"z": 83558.2
		},
		"killerVelocity": {
			"x": -216.63437,
			"y": 49.299034,
			"z": -72.12859
		},
		"victimVelocity": {
			"x": 117.501755,
			"y": -6.571579,
			"z": 199.28627
		}
	}, {
		"_id": {
			"$oid": "63abe183faabb276553fcbfa"
		},
		"id": "3d532f9f-baa0-4130-a31b-4381bfa2d36f",
		"time": {
			"$numberLong": "1672208771690"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199132899687",
		"killerId": "76561198020174288",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160704.84,
			"y": 854.2756,
			"z": 28558.506
		},
		"victimPosition": {
			"x": 159674.83,
			"y": 854.3968,
			"z": 28809.908
		},
		"killerVelocity": {
			"x": -21.56936,
			"y": 0.24106067,
			"z": 4.4160404
		},
		"victimVelocity": {
			"x": -1.8666735,
			"y": -0.23270255,
			"z": 0.62671036
		}
	}, {
		"_id": {
			"$oid": "63abf89ffaabb276553fcd8b"
		},
		"id": "5ceeb183-e249-4e99-8a00-5d6361a912ed",
		"time": {
			"$numberLong": "1672214687912"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198967384307",
		"killerId": "76561198854349233",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160887.55,
			"y": 1278.8094,
			"z": 29748.285
		},
		"victimPosition": {
			"x": 161551.38,
			"y": 1293.5558,
			"z": 30655.076
		},
		"killerVelocity": {
			"x": 52.715004,
			"y": 3.9101589,
			"z": 127.81645
		},
		"victimVelocity": {
			"x": -136.22661,
			"y": -53.68708,
			"z": 1.6639237
		}
	}, {
		"_id": {
			"$oid": "63abf8bcfaabb276553fcd8f"
		},
		"id": "179d786f-dbd6-4339-a054-86d8f69bcbda",
		"time": {
			"$numberLong": "1672214716213"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198967384307",
		"killerId": "76561198854349233",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159805.12,
			"y": 1385.029,
			"z": 28366.736
		},
		"victimPosition": {
			"x": 160134.3,
			"y": 854.4185,
			"z": 28747.617
		},
		"killerVelocity": {
			"x": -173.82202,
			"y": 21.220572,
			"z": -116.70704
		},
		"victimVelocity": {
			"x": 5.287477,
			"y": 3.8398094,
			"z": -3.4197693
		}
	}, {
		"_id": {
			"$oid": "63abf90cfaabb276553fcd94"
		},
		"id": "7cbeefef-fdce-4c93-a323-d2f9faf4d8f6",
		"time": {
			"$numberLong": "1672214796879"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198854349233",
		"killerId": "76561199122524086",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155490.44,
			"y": 1727.9816,
			"z": 32531.27
		},
		"victimPosition": {
			"x": 154921.7,
			"y": 947.70264,
			"z": 31726.75
		},
		"killerVelocity": {
			"x": 168.30562,
			"y": -4.694762,
			"z": -95.65992
		},
		"victimVelocity": {
			"x": -6.2202053,
			"y": -19.675028,
			"z": 16.667355
		}
	}, {
		"_id": {
			"$oid": "63abffcafaabb276553fce3d"
		},
		"id": "ccf9ee1b-1f70-494a-be6b-3c17bf9f4f8b",
		"time": {
			"$numberLong": "1672216522274"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198332336634",
		"killerId": "76561198975399518",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161843.73,
			"y": 1218.0121,
			"z": 29503.27
		},
		"victimPosition": {
			"x": 162114.34,
			"y": 1452.3839,
			"z": 30629.283
		},
		"killerVelocity": {
			"x": 39.687557,
			"y": 23.58408,
			"z": 120.68133
		},
		"victimVelocity": {
			"x": -99.17117,
			"y": -27.191021,
			"z": 138.98145
		}
	}, {
		"_id": {
			"$oid": "63ac03f1faabb276553fce74"
		},
		"id": "8604b9a8-27a5-4931-a825-525a84579a0d",
		"time": {
			"$numberLong": "1672217585950"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198346204383",
		"killerId": "76561198059132551",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 95283.125,
			"y": 1720.2181,
			"z": 84665.234
		},
		"victimPosition": {
			"x": 92614.91,
			"y": 939.09424,
			"z": 86801.125
		},
		"killerVelocity": {
			"x": -269.01218,
			"y": -8.224991,
			"z": 200.78882
		},
		"victimVelocity": {
			"x": -316.14816,
			"y": -146.81651,
			"z": 211.58534
		}
	}, {
		"_id": {
			"$oid": "63ac053afaabb276553fce8d"
		},
		"id": "0b729d46-6879-4597-9c4c-bedcdafd47b5",
		"time": {
			"$numberLong": "1672217914335"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198065838386",
		"killerId": "76561198384239943",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 132101.72,
			"y": 4320.4673,
			"z": 46089.688
		},
		"victimPosition": {
			"x": 129444.4,
			"y": 6761.437,
			"z": 48284.8
		},
		"killerVelocity": {
			"x": -90.23095,
			"y": -13.479807,
			"z": 70.55061
		},
		"victimVelocity": {
			"x": -63.695465,
			"y": 29.70149,
			"z": 197.53508
		}
	}, {
		"_id": {
			"$oid": "63ac071ffaabb276553fcea4"
		},
		"id": "d53ee51d-0697-44ca-a3cc-4b88b02b6681",
		"time": {
			"$numberLong": "1672218399758"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199232542398",
		"killerId": "76561198025369479",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153120.34,
			"y": 2050.799,
			"z": 38268.75
		},
		"victimPosition": {
			"x": 151765.81,
			"y": 1965.8451,
			"z": 39109.223
		},
		"killerVelocity": {
			"x": -308.83548,
			"y": 7.4576907,
			"z": 141.49506
		},
		"victimVelocity": {
			"x": -145.59021,
			"y": 18.321642,
			"z": 197.46593
		}
	}, {
		"_id": {
			"$oid": "63ac07c5faabb276553fceb3"
		},
		"id": "8fd1949f-2d1d-41f2-8012-159beab5e4d8",
		"time": {
			"$numberLong": "1672218565226"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199232542398",
		"killerId": "76561198025369479",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159705.19,
			"y": 853.6462,
			"z": 27994.4
		},
		"victimPosition": {
			"x": 159587.97,
			"y": 853.79083,
			"z": 28299.113
		},
		"killerVelocity": {
			"x": -0.000052501135,
			"y": 0.000049196184,
			"z": -0.00019587803
		},
		"victimVelocity": {
			"x": 61.01008,
			"y": 1.5420555,
			"z": 8.624035
		}
	}, {
		"_id": {
			"$oid": "63ac27f4faabb276553fd011"
		},
		"id": "ea45e6e8-e4d5-4cd1-a484-886fa73b0f2f",
		"time": {
			"$numberLong": "1672226804309"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199114146101",
		"killerId": "76561199433486296",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152533.45,
			"y": 1299.598,
			"z": 29643.242
		},
		"victimPosition": {
			"x": 148352.75,
			"y": 1497.5338,
			"z": 28362.604
		},
		"killerVelocity": {
			"x": -282.1338,
			"y": 20.528437,
			"z": -111.125496
		},
		"victimVelocity": {
			"x": -34.93487,
			"y": 16.179981,
			"z": -292.55542
		}
	}, {
		"_id": {
			"$oid": "63ac5519faabb276553fd322"
		},
		"id": "a0127e31-94c8-4dcd-a198-4a3337cb8131",
		"time": {
			"$numberLong": "1672238361363"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199123559632",
		"killerId": "76561199252376032",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150123.48,
			"y": 2745.2212,
			"z": 32028.56
		},
		"victimPosition": {
			"x": 138670.62,
			"y": 1517.6453,
			"z": 39653.24
		},
		"killerVelocity": {
			"x": -222.26259,
			"y": -40.99652,
			"z": 123.319984
		},
		"victimVelocity": {
			"x": 201.1183,
			"y": 34.86841,
			"z": -81.849846
		}
	}, {
		"_id": {
			"$oid": "63ac5f05faabb276553fd3f0"
		},
		"id": "6e93bb57-cb25-455b-88af-63c958f39814",
		"time": {
			"$numberLong": "1672240901186"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198160695811",
		"killerId": "76561198440661888",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158881.06,
			"y": 879.9468,
			"z": 28373.033
		},
		"victimPosition": {
			"x": 158657.5,
			"y": 857.15955,
			"z": 28547.78
		},
		"killerVelocity": {
			"x": -140.79323,
			"y": 20.150103,
			"z": -46.081074
		},
		"victimVelocity": {
			"x": -89.302635,
			"y": -0.009362459,
			"z": 4.916431
		}
	}, {
		"_id": {
			"$oid": "63ac8522faabb276553fd672"
		},
		"id": "f33437b7-964d-42b6-bc74-5648df06b050",
		"time": {
			"$numberLong": "1672250658946"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199114146101",
		"killerId": "76561199007273889",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 127089.375,
			"y": 6281.4814,
			"z": 41017.57
		},
		"victimPosition": {
			"x": 119894.54,
			"y": 12914.22,
			"z": 45491.887
		},
		"killerVelocity": {
			"x": -234.4175,
			"y": 179.13084,
			"z": 139.81032
		},
		"victimVelocity": {
			"x": -270.57797,
			"y": -17.881685,
			"z": 116.06492
		}
	}, {
		"_id": {
			"$oid": "63ac9a5ffaabb276553fd842"
		},
		"id": "a4ae3fb6-cd91-49ec-87b3-0ae4624dfe33",
		"time": {
			"$numberLong": "1672256095779"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198423355184",
		"killerId": "76561198281573644",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 143928.72,
			"y": 2238.252,
			"z": 35854.32
		},
		"victimPosition": {
			"x": 144422.16,
			"y": 996.5704,
			"z": 36311.06
		},
		"killerVelocity": {
			"x": -274.125,
			"y": 17.105946,
			"z": 108.84067
		},
		"victimVelocity": {
			"x": 3.3667314,
			"y": -14.196477,
			"z": 42.179604
		}
	}, {
		"_id": {
			"$oid": "63ac9f42faabb276553fd8d5"
		},
		"id": "89477064-9586-4e20-8b0c-a8bfe605871d",
		"time": {
			"$numberLong": "1672257346202"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 125337.63,
			"y": 2376.1755,
			"z": 50625.145
		},
		"victimPosition": {
			"x": 125079.164,
			"y": 1896.9037,
			"z": 49700.953
		},
		"killerVelocity": {
			"x": -30.874746,
			"y": -91.48036,
			"z": -136.23378
		},
		"victimVelocity": {
			"x": -160.07079,
			"y": 41.09799,
			"z": -113.13571
		}
	}, {
		"_id": {
			"$oid": "63aca43dfaabb276553fd936"
		},
		"id": "7689d222-fa2d-4e51-9eea-50038dab0e51",
		"time": {
			"$numberLong": "1672258621449"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198971520391",
		"killerId": "76561198298969352",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131170.95,
			"y": 3037.6638,
			"z": 66521.04
		},
		"victimPosition": {
			"x": 129593.82,
			"y": 3084.8008,
			"z": 68872.23
		},
		"killerVelocity": {
			"x": -173.0587,
			"y": 0.8513296,
			"z": 305.4178
		},
		"victimVelocity": {
			"x": -172.18721,
			"y": 28.921541,
			"z": 131.15361
		}
	}, {
		"_id": {
			"$oid": "63aca5bafaabb276553fd95d"
		},
		"id": "a675fe1e-f9d2-4bc7-a5ed-32d1969b0e44",
		"time": {
			"$numberLong": "1672259002193"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159100.3,
			"y": 2695.9822,
			"z": 28789.066
		},
		"victimPosition": {
			"x": 158221.06,
			"y": 1379.6233,
			"z": 29791.3
		},
		"killerVelocity": {
			"x": -144.6487,
			"y": -205.51266,
			"z": 123.87672
		},
		"victimVelocity": {
			"x": -121.98734,
			"y": -9.138502,
			"z": 39.56652
		}
	}, {
		"_id": {
			"$oid": "63aca600faabb276553fd965"
		},
		"id": "6b91866d-ee4d-405e-9243-bfae70d77a55",
		"time": {
			"$numberLong": "1672259072740"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198982932902",
		"killerId": "76561198298969352",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159168.11,
			"y": 853.62726,
			"z": 28123.137
		},
		"victimPosition": {
			"x": 159152.28,
			"y": 854.3989,
			"z": 28226.154
		},
		"killerVelocity": {
			"x": -13.20277,
			"y": -0.00813254,
			"z": 69.51356
		},
		"victimVelocity": {
			"x": 4.8075013,
			"y": 0.0002123192,
			"z": 1.483843
		}
	}, {
		"_id": {
			"$oid": "63aca602faabb276553fd969"
		},
		"id": "b9a7619b-d61f-4a05-9cb5-e7f7936e0261",
		"time": {
			"$numberLong": "1672259074331"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159850.48,
			"y": 1576.8076,
			"z": 27115.615
		},
		"victimPosition": {
			"x": 159151.47,
			"y": 853.9763,
			"z": 28240.691
		},
		"killerVelocity": {
			"x": 8.901264,
			"y": -35.33856,
			"z": 117.62232
		},
		"victimVelocity": {
			"x": -7.8343935,
			"y": 1.1442327,
			"z": 77.351036
		}
	}, {
		"_id": {
			"$oid": "63aca61cfaabb276553fd96f"
		},
		"id": "1fbd57e8-1f88-4238-9e2a-65b82f77bcfa",
		"time": {
			"$numberLong": "1672259100087"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159031.55,
			"y": 990.9337,
			"z": 28045.996
		},
		"victimPosition": {
			"x": 159239.86,
			"y": 853.59937,
			"z": 27856.988
		},
		"killerVelocity": {
			"x": 100.72515,
			"y": -69.23589,
			"z": -86.02035
		},
		"victimVelocity": {
			"x": -0.08161544,
			"y": 0.0012363419,
			"z": 0.29528475
		}
	}, {
		"_id": {
			"$oid": "63aca642faabb276553fd972"
		},
		"id": "c17a43da-72ba-4555-aacc-6ca1b5736953",
		"time": {
			"$numberLong": "1672259138860"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158300.89,
			"y": 1383.653,
			"z": 30028.785
		},
		"victimPosition": {
			"x": 158280.38,
			"y": 1412.0133,
			"z": 30080.934
		},
		"killerVelocity": {
			"x": -14.761886,
			"y": 73.444725,
			"z": 168.96643
		},
		"victimVelocity": {
			"x": -34.516228,
			"y": 55.471214,
			"z": 142.92099
		}
	}, {
		"_id": {
			"$oid": "63aca65efaabb276553fd975"
		},
		"id": "3794f01c-34f8-4917-9ed8-3bd757b560bc",
		"time": {
			"$numberLong": "1672259166186"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159156.61,
			"y": 1621.4445,
			"z": 28292.81
		},
		"victimPosition": {
			"x": 159240.45,
			"y": 853.6462,
			"z": 27854.832
		},
		"killerVelocity": {
			"x": 35.701927,
			"y": -201.6521,
			"z": -121.22518
		},
		"victimVelocity": {
			"x": 0.0007605832,
			"y": -0.06185025,
			"z": -0.0027807665
		}
	}, {
		"_id": {
			"$oid": "63aca6b7faabb276553fd97a"
		},
		"id": "75eb659d-b5dd-4390-b35a-439f270c999a",
		"time": {
			"$numberLong": "1672259255952"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199207308070",
		"killerId": "76561198184176099",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141967.12,
			"y": 2306.879,
			"z": 34153.336
		},
		"victimPosition": {
			"x": 139403.4,
			"y": 1651.8966,
			"z": 35201.23
		},
		"killerVelocity": {
			"x": -340.70953,
			"y": 20.690245,
			"z": 186.80423
		},
		"victimVelocity": {
			"x": -21.800783,
			"y": -122.539406,
			"z": -117.283066
		}
	}, {
		"_id": {
			"$oid": "63aca85afaabb276553fd9a5"
		},
		"id": "8b06089c-6223-4b45-aa1c-bc4ae1012950",
		"time": {
			"$numberLong": "1672259674389"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198298969352",
		"killerId": "76561198971520391",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131359.39,
			"y": 4384.9375,
			"z": 54692.78
		},
		"victimPosition": {
			"x": 126495.13,
			"y": 3550.9854,
			"z": 53251.934
		},
		"killerVelocity": {
			"x": -233.70625,
			"y": 9.269144,
			"z": 298.02838
		},
		"victimVelocity": {
			"x": -36.761814,
			"y": 204.62843,
			"z": -35.54671
		}
	}, {
		"_id": {
			"$oid": "63acc1b2aba13c63590cfcef"
		},
		"id": "b14feea0-337b-423c-b251-89ec8af14341",
		"time": {
			"$numberLong": "1672266162038"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198008007066",
		"killerId": "76561199111265375",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150323.67,
			"y": 2409.5706,
			"z": 46264.867
		},
		"victimPosition": {
			"x": 149808.48,
			"y": 1953.3566,
			"z": 46728.824
		},
		"killerVelocity": {
			"x": 126.29717,
			"y": 51.42537,
			"z": -278.90762
		},
		"victimVelocity": {
			"x": -44.877586,
			"y": -105.57439,
			"z": 40.077793
		}
	}, {
		"_id": {
			"$oid": "63acc5bfaba13c63590cfd82"
		},
		"id": "afcc53ce-0034-423e-8e9c-b4872a44008d",
		"time": {
			"$numberLong": "1672267199650"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198979308570",
		"killerId": "76561198157237603",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 127344.8,
			"y": 2386.6267,
			"z": 47831.87
		},
		"victimPosition": {
			"x": 126112.125,
			"y": 3963.6594,
			"z": 60268.24
		},
		"killerVelocity": {
			"x": -35.326084,
			"y": 45.828762,
			"z": 317.914
		},
		"victimVelocity": {
			"x": 14.664434,
			"y": -59.000175,
			"z": -124.29966
		}
	}, {
		"_id": {
			"$oid": "63accbaeaba13c63590cfe27"
		},
		"id": "a59217dc-4296-49fd-824b-0e42e07882ff",
		"time": {
			"$numberLong": "1672268718547"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198037531947",
		"killerId": "76561199007273889",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 140432.92,
			"y": 2869.4731,
			"z": 28000.078
		},
		"victimPosition": {
			"x": 140294.45,
			"y": 2528.994,
			"z": 27899.8
		},
		"killerVelocity": {
			"x": -80.37657,
			"y": -146.66116,
			"z": -57.843807
		},
		"victimVelocity": {
			"x": -78.55291,
			"y": -122.115005,
			"z": -82.69203
		}
	}, {
		"_id": {
			"$oid": "63acce41aba13c63590cfe71"
		},
		"id": "8f33d271-90cc-4d72-bd0c-e3041762db5a",
		"time": {
			"$numberLong": "1672269377361"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199132899687",
		"killerId": "76561199440600499",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159973.19,
			"y": 854.33185,
			"z": 28532.158
		},
		"victimPosition": {
			"x": 159671.67,
			"y": 853.605,
			"z": 28357.494
		},
		"killerVelocity": {
			"x": -4.934897,
			"y": -0.13294607,
			"z": -2.865915
		},
		"victimVelocity": {
			"x": 22.145527,
			"y": -0.0020323098,
			"z": 9.444001
		}
	}, {
		"_id": {
			"$oid": "63acdd23aba13c63590cffca"
		},
		"id": "f7af03f3-2b64-42a8-bacf-672af2e3340f",
		"time": {
			"$numberLong": "1672273187877"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198060714161",
		"killerId": "76561199451684154",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156290.47,
			"y": 3121.5835,
			"z": 53143.145
		},
		"victimPosition": {
			"x": 153431.56,
			"y": 2341.3542,
			"z": 50801.99
		},
		"killerVelocity": {
			"x": -402.01413,
			"y": -48.33391,
			"z": -31.743082
		},
		"victimVelocity": {
			"x": 200.34435,
			"y": -72.03335,
			"z": -278.21292
		}
	}, {
		"_id": {
			"$oid": "63acdd2eaba13c63590cffcc"
		},
		"id": "04563a71-3cc5-40b5-97d2-2bfc1e2302c1",
		"time": {
			"$numberLong": "1672273198016"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199013746580",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152735.56,
			"y": 1695.9893,
			"z": 32723.72
		},
		"victimPosition": {
			"x": 149181.86,
			"y": 1760.1421,
			"z": 35281.094
		},
		"killerVelocity": {
			"x": -248.22153,
			"y": 12.517237,
			"z": 200.49146
		},
		"victimVelocity": {
			"x": -289.99628,
			"y": 4.6926007,
			"z": 53.847836
		}
	}, {
		"_id": {
			"$oid": "63acdd7daba13c63590cffd3"
		},
		"id": "3428ec7a-625b-42f5-a8df-49533590917a",
		"time": {
			"$numberLong": "1672273277019"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198060714161",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156809.06,
			"y": 1743.5784,
			"z": 31774.756
		},
		"victimPosition": {
			"x": 157435.7,
			"y": 1298.0414,
			"z": 30938.459
		},
		"killerVelocity": {
			"x": 141.26263,
			"y": -83.76277,
			"z": -202.8328
		},
		"victimVelocity": {
			"x": -182.9992,
			"y": -43.842686,
			"z": 109.72548
		}
	}, {
		"_id": {
			"$oid": "63acddd2aba13c63590cffe0"
		},
		"id": "52c00113-307b-42f4-a83e-79a8dfdda2f3",
		"time": {
			"$numberLong": "1672273362798"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199192967997",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159380.5,
			"y": 1075.0298,
			"z": 27533.799
		},
		"victimPosition": {
			"x": 159123.77,
			"y": 1153.3612,
			"z": 25947.926
		},
		"killerVelocity": {
			"x": 1.7978036,
			"y": 8.386616,
			"z": -144.15656
		},
		"victimVelocity": {
			"x": -102.928696,
			"y": -17.280268,
			"z": 33.503395
		}
	}, {
		"_id": {
			"$oid": "63acde32aba13c63590cffef"
		},
		"id": "63b25b7f-768f-4ce9-8835-b6531d4487d3",
		"time": {
			"$numberLong": "1672273458539"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198866601853",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158909.9,
			"y": 1046.2024,
			"z": 28504.855
		},
		"victimPosition": {
			"x": 154292.84,
			"y": 1937.9391,
			"z": 26820.898
		},
		"killerVelocity": {
			"x": -145.93945,
			"y": 28.39501,
			"z": -27.99765
		},
		"victimVelocity": {
			"x": 22.596632,
			"y": 2.8956318,
			"z": -136.1555
		}
	}, {
		"_id": {
			"$oid": "63acde3eaba13c63590cfff1"
		},
		"id": "c39d65c6-af15-45c1-9aea-cbf16dbc5ee0",
		"time": {
			"$numberLong": "1672273470289"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198315523124",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156022.66,
			"y": 2225.4504,
			"z": 30501.674
		},
		"victimPosition": {
			"x": 156908.78,
			"y": 1607.4775,
			"z": 28011.168
		},
		"killerVelocity": {
			"x": 211.03575,
			"y": -34.653767,
			"z": -198.753
		},
		"victimVelocity": {
			"x": -164.78938,
			"y": 100.46319,
			"z": -32.14487
		}
	}, {
		"_id": {
			"$oid": "63acde6daba13c63590cfffc"
		},
		"id": "4bc81a91-184a-4da2-83b6-1c46066e4b3f",
		"time": {
			"$numberLong": "1672273517401"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199192967997",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160514.25,
			"y": 990.7383,
			"z": 28996.467
		},
		"victimPosition": {
			"x": 159932.9,
			"y": 854.3413,
			"z": 28716.146
		},
		"killerVelocity": {
			"x": -249.14896,
			"y": -57.91393,
			"z": -145.0308
		},
		"victimVelocity": {
			"x": 6.401691,
			"y": 0.24474749,
			"z": 5.124946
		}
	}, {
		"_id": {
			"$oid": "63acdec1aba13c63590d0005"
		},
		"id": "c7ece867-697f-402d-81fe-093da8c45e0c",
		"time": {
			"$numberLong": "1672273601522"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198116162767",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158680.62,
			"y": 1358.8307,
			"z": 29321.938
		},
		"victimPosition": {
			"x": 159760.33,
			"y": 856.6679,
			"z": 28637.244
		},
		"killerVelocity": {
			"x": -69.2217,
			"y": 13.11922,
			"z": 124.522766
		},
		"victimVelocity": {
			"x": -70.16814,
			"y": 3.540413,
			"z": -25.28685
		}
	}, {
		"_id": {
			"$oid": "63acdf34aba13c63590d000e"
		},
		"id": "72798dcb-54b9-43e1-a00f-4b1d88dadde1",
		"time": {
			"$numberLong": "1672273716095"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199192967997",
		"killerId": "76561198060714161",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 133206.25,
			"y": 2329.735,
			"z": 65073.113
		},
		"victimPosition": {
			"x": 160666.42,
			"y": 855.2938,
			"z": 28406.463
		},
		"killerVelocity": {
			"x": -241.56294,
			"y": 9.107683,
			"z": 240.90231
		},
		"victimVelocity": {
			"x": 19.891392,
			"y": 0.48148963,
			"z": -21.79517
		}
	}, {
		"_id": {
			"$oid": "63ace08aaba13c63590d003d"
		},
		"id": "2b485728-2ccd-42f8-8cb8-fc677d5ff9d6",
		"time": {
			"$numberLong": "1672274058868"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199197257839",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158173.81,
			"y": 2029.9036,
			"z": 31273.932
		},
		"victimPosition": {
			"x": 156791.47,
			"y": 1784.9624,
			"z": 37217.68
		},
		"killerVelocity": {
			"x": -74.70947,
			"y": -12.544854,
			"z": 248.74364
		},
		"victimVelocity": {
			"x": 90.132286,
			"y": -55.750465,
			"z": 314.66956
		}
	}, {
		"_id": {
			"$oid": "63ace0caaba13c63590d0044"
		},
		"id": "55aa936e-277d-488e-b964-14f9f95ce960",
		"time": {
			"$numberLong": "1672274122732"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199197257839",
		"killerId": "76561199081580274",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159466.52,
			"y": 988.871,
			"z": 28511.76
		},
		"victimPosition": {
			"x": 157559.08,
			"y": 1420.2269,
			"z": 29065.615
		},
		"killerVelocity": {
			"x": -133.38872,
			"y": 17.235722,
			"z": 0.547341
		},
		"victimVelocity": {
			"x": -151.17293,
			"y": -25.562475,
			"z": 90.99376
		}
	}, {
		"_id": {
			"$oid": "63ace1ababa13c63590d005e"
		},
		"id": "cbef06ce-875d-410e-9fb6-fec9722c9332",
		"time": {
			"$numberLong": "1672274347298"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198305991251",
		"killerId": "76561199197257839",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145273.06,
			"y": 2580.0674,
			"z": 40242.945
		},
		"victimPosition": {
			"x": 157368.62,
			"y": 1191.6659,
			"z": 30849.506
		},
		"killerVelocity": {
			"x": -221.29858,
			"y": 26.431011,
			"z": 245.1054
		},
		"victimVelocity": {
			"x": 103.00415,
			"y": -15.032127,
			"z": -96.131256
		}
	}, {
		"_id": {
			"$oid": "63ace1f6aba13c63590d006f"
		},
		"id": "91fecbe9-6992-4f91-8aba-c93d71f950fb",
		"time": {
			"$numberLong": "1672274422243"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199102280940",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158456.3,
			"y": 1200.6707,
			"z": 29682.951
		},
		"victimPosition": {
			"x": 160123.62,
			"y": 854.3966,
			"z": 28552.293
		},
		"killerVelocity": {
			"x": -107.33379,
			"y": -13.1130705,
			"z": 127.666664
		},
		"victimVelocity": {
			"x": -0.000009814669,
			"y": -0.0001430139,
			"z": -0.000003353945
		}
	}, {
		"_id": {
			"$oid": "63ace1f7aba13c63590d0071"
		},
		"id": "67788ce8-0c24-4dd2-88d5-b0eca350f161",
		"time": {
			"$numberLong": "1672274423964"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198305991251",
		"killerId": "76561198315523124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158263.53,
			"y": 1178.7081,
			"z": 29912.701
		},
		"victimPosition": {
			"x": 157931.11,
			"y": 1217.8307,
			"z": 30912.203
		},
		"killerVelocity": {
			"x": -116.469955,
			"y": -10.548345,
			"z": 138.75842
		},
		"victimVelocity": {
			"x": -143.14653,
			"y": 21.697617,
			"z": 95.227875
		}
	}, {
		"_id": {
			"$oid": "63ace89eaba13c63590d0122"
		},
		"id": "662ac63a-f4e6-47e4-9818-d1b5c0ddef2e",
		"time": {
			"$numberLong": "1672276126325"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198046782056",
		"killerId": "76561199101862131",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 81544.24,
			"y": 1316.6906,
			"z": 87308.766
		},
		"victimPosition": {
			"x": 81756.09,
			"y": 1280.2126,
			"z": 86600.87
		},
		"killerVelocity": {
			"x": -217.22179,
			"y": 57.093407,
			"z": -118.36375
		},
		"victimVelocity": {
			"x": 271.797,
			"y": -51.56428,
			"z": -156.84738
		}
	}, {
		"_id": {
			"$oid": "63acf2adaba13c63590d01da"
		},
		"id": "265a27df-5849-40c5-a4d8-e8f252f1c348",
		"time": {
			"$numberLong": "1672278701766"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198159323768",
		"killerId": "76561199401436824",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116160.54,
			"y": 4299.7407,
			"z": 61436.484
		},
		"victimPosition": {
			"x": 112347.56,
			"y": 1100.268,
			"z": 39730.258
		},
		"killerVelocity": {
			"x": -260.7392,
			"y": -5.299831,
			"z": 281.23892
		},
		"victimVelocity": {
			"x": -58.01211,
			"y": -0.42700136,
			"z": -32.26598
		}
	}, {
		"_id": {
			"$oid": "63acfb49aba13c63590d0266"
		},
		"id": "b0f19cce-8a6a-4d9a-9564-08b7d6015633",
		"time": {
			"$numberLong": "1672280905084"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198059675346",
		"killerId": "76561199112545519",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 125161.92,
			"y": 2219.548,
			"z": 114065.26
		},
		"victimPosition": {
			"x": 124055.75,
			"y": 2017.3954,
			"z": 114797.25
		},
		"killerVelocity": {
			"x": -290.7867,
			"y": -9.479873,
			"z": 184.3722
		},
		"victimVelocity": {
			"x": 69.24858,
			"y": -87.18885,
			"z": -311.18085
		}
	}, {
		"_id": {
			"$oid": "63ad0510aba13c63590d0345"
		},
		"id": "abf491d2-6854-4cd8-981a-f946c4fc9759",
		"time": {
			"$numberLong": "1672283408129"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198076128098",
		"killerId": "76561198062039225",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 97300.37,
			"y": 2159.2546,
			"z": 82055.305
		},
		"victimPosition": {
			"x": 99660.33,
			"y": 2149.3765,
			"z": 80715.84
		},
		"killerVelocity": {
			"x": 297.9809,
			"y": 1.416201,
			"z": -188.40549
		},
		"victimVelocity": {
			"x": 271.76764,
			"y": 4.9676185,
			"z": 10.761248
		}
	}, {
		"_id": {
			"$oid": "63ad0c39aba13c63590d03f6"
		},
		"id": "33419fd5-5acb-41e5-b7b9-cc50207873db",
		"time": {
			"$numberLong": "1672285241293"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198002569466",
		"killerId": "76561198967384307",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160105.4,
			"y": 854.3859,
			"z": 28876.746
		},
		"victimPosition": {
			"x": 158878.66,
			"y": 854.3114,
			"z": 28341.84
		},
		"killerVelocity": {
			"x": -0.00001972852,
			"y": 0.00008929521,
			"z": 0.00025524563
		},
		"victimVelocity": {
			"x": -38.064674,
			"y": -0.41016552,
			"z": -21.726305
		}
	}, {
		"_id": {
			"$oid": "63ad1391aba13c63590d04b2"
		},
		"id": "fccf28f1-a1ca-49ea-ba9b-c1816237d763",
		"time": {
			"$numberLong": "1672287121597"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198206486003",
		"killerId": "76561198076128098",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 110956.53,
			"y": 1659.6835,
			"z": 66449.37
		},
		"victimPosition": {
			"x": 106482.77,
			"y": 5308.0864,
			"z": 86217.16
		},
		"killerVelocity": {
			"x": -322.32822,
			"y": -39.027702,
			"z": 79.82115
		},
		"victimVelocity": {
			"x": -58.05922,
			"y": -101.6021,
			"z": -350.6567
		}
	}, {
		"_id": {
			"$oid": "63ad1ce2aba13c63590d05bc"
		},
		"id": "7612332e-6f42-4577-8f6f-cb057e451ce2",
		"time": {
			"$numberLong": "1672289506998"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198352291612",
		"killerId": "76561198061519357",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 58508.035,
			"y": 1268.0717,
			"z": 104447.85
		},
		"victimPosition": {
			"x": 67846.234,
			"y": 412.03607,
			"z": 115172.09
		},
		"killerVelocity": {
			"x": -137.8183,
			"y": -34.098053,
			"z": 123.33891
		},
		"victimVelocity": {
			"x": -39.042004,
			"y": -21.517002,
			"z": -31.680897
		}
	}, {
		"_id": {
			"$oid": "63ad208eaba13c63590d061a"
		},
		"id": "4113a14f-a09a-4716-b0a3-90da3a752c98",
		"time": {
			"$numberLong": "1672290446544"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198423355184",
		"killerId": "76561198143115834",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 99554.32,
			"y": 4231.206,
			"z": 73634.68
		},
		"victimPosition": {
			"x": 92379.79,
			"y": 1165.1362,
			"z": 79664.164
		},
		"killerVelocity": {
			"x": -180.66766,
			"y": -52.71541,
			"z": 193.52148
		},
		"victimVelocity": {
			"x": -131.9528,
			"y": -76.10606,
			"z": -305.82886
		}
	}, {
		"_id": {
			"$oid": "63ad3592109c9d48f459b112"
		},
		"id": "386b2317-9f07-45e9-bc37-622ccedffbb4",
		"time": {
			"$numberLong": "1672295826737"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199012863966",
		"killerId": "76561199059432916",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 101168.78,
			"y": 1705.1559,
			"z": 88487.586
		},
		"victimPosition": {
			"x": 99546.125,
			"y": 2358.855,
			"z": 97677.484
		},
		"killerVelocity": {
			"x": -301.01382,
			"y": -35.96496,
			"z": 269.4558
		},
		"victimVelocity": {
			"x": 162.74342,
			"y": -32.363754,
			"z": 294.55063
		}
	}, {
		"_id": {
			"$oid": "63ad36f8109c9d48f459b139"
		},
		"id": "1549dc19-87c3-4065-a470-498389b11002",
		"time": {
			"$numberLong": "1672296184791"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199097802079",
		"killerId": "76561198820508231",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 133784.23,
			"y": 4135.8213,
			"z": 47153.71
		},
		"victimPosition": {
			"x": 125420.336,
			"y": 2399.5564,
			"z": 50366.32
		},
		"killerVelocity": {
			"x": -153.83492,
			"y": 32.36456,
			"z": 274.77618
		},
		"victimVelocity": {
			"x": 21.493181,
			"y": -174.41087,
			"z": -77.02919
		}
	}, {
		"_id": {
			"$oid": "63ad49f2109c9d48f459b32f"
		},
		"id": "f3d581c4-282f-41d1-ba40-aabe1e2dff89",
		"time": {
			"$numberLong": "1672301042047"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561199012863966",
		"killerId": "76561198975087320",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160712.28,
			"y": 853.6294,
			"z": 28899.826
		},
		"victimPosition": {
			"x": 160722.31,
			"y": 856.3005,
			"z": 28937.682
		},
		"killerVelocity": {
			"x": 0.000041836603,
			"y": -0.0001706034,
			"z": 0.000110192006
		},
		"victimVelocity": {
			"x": 90.6855,
			"y": 3.324536,
			"z": 25.554617
		}
	}, {
		"_id": {
			"$oid": "63ad4b50109c9d48f459b35f"
		},
		"id": "56d9f124-4436-49b3-85ae-a1a1b57b1c18",
		"time": {
			"$numberLong": "1672301392267"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198096000762",
		"killerId": "76561199260468673",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157756.9,
			"y": 1112.5038,
			"z": 30095.996
		},
		"victimPosition": {
			"x": 157008.28,
			"y": 1190.8693,
			"z": 31004.756
		},
		"killerVelocity": {
			"x": -183.74046,
			"y": 33.647648,
			"z": 111.60295
		},
		"victimVelocity": {
			"x": -54.162952,
			"y": 20.763483,
			"z": 63.026134
		}
	}, {
		"_id": {
			"$oid": "63ad5828109c9d48f459b480"
		},
		"id": "4d7e0165-3066-4009-bd48-0dc0710615dd",
		"time": {
			"$numberLong": "1672304680070"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199142894452",
		"killerId": "76561199105226406",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 165558.08,
			"y": 2979.2087,
			"z": 36675.95
		},
		"victimPosition": {
			"x": 165581.58,
			"y": 2689.6594,
			"z": 37313.15
		},
		"killerVelocity": {
			"x": -23.806814,
			"y": -65.652725,
			"z": 251.19171
		},
		"victimVelocity": {
			"x": 50.79271,
			"y": -121.79952,
			"z": -48.821674
		}
	}, {
		"_id": {
			"$oid": "63ad5868109c9d48f459b488"
		},
		"id": "89e5b531-5d4f-4d36-98d2-e2bf48ea92e4",
		"time": {
			"$numberLong": "1672304744621"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199465632156",
		"killerId": "76561199105226406",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162460.98,
			"y": 1676.7723,
			"z": 32796.914
		},
		"victimPosition": {
			"x": 161007.52,
			"y": 1274.8052,
			"z": 27710.781
		},
		"killerVelocity": {
			"x": -68.59334,
			"y": -30.254385,
			"z": -262.04617
		},
		"victimVelocity": {
			"x": 48.81977,
			"y": -21.428846,
			"z": 85.21666
		}
	}, {
		"_id": {
			"$oid": "63ad6743109c9d48f459b4c8"
		},
		"id": "7241ac5b-4cc9-46b1-b4f1-6454081dee65",
		"time": {
			"$numberLong": "1672308547635"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198079836809",
		"killerId": "76561198271735015",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156709.31,
			"y": 2991.8313,
			"z": 27008.71
		},
		"victimPosition": {
			"x": 155334.12,
			"y": 3097.684,
			"z": 26108.807
		},
		"killerVelocity": {
			"x": -162.68062,
			"y": 4.536391,
			"z": -89.74586
		},
		"victimVelocity": {
			"x": -46.07251,
			"y": -12.475048,
			"z": -131.08707
		}
	}, {
		"_id": {
			"$oid": "63ad7e6b109c9d48f459b5a4"
		},
		"id": "14f00dee-6faa-4b12-b472-aa595758e9c4",
		"time": {
			"$numberLong": "1672314475343"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199260468673",
		"killerId": "76561198298969352",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 142715.33,
			"y": 2543.6594,
			"z": 36278.715
		},
		"victimPosition": {
			"x": 145009.36,
			"y": 1421.8281,
			"z": 36105.96
		},
		"killerVelocity": {
			"x": 273.69806,
			"y": -101.19455,
			"z": -58.57525
		},
		"victimVelocity": {
			"x": -270.10873,
			"y": -13.674874,
			"z": 212.86813
		}
	}, {
		"_id": {
			"$oid": "63ad7ea9109c9d48f459b5a9"
		},
		"id": "19aaef2a-86a8-4cea-bdbb-fe99bcfff658",
		"time": {
			"$numberLong": "1672314537361"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199063720309",
		"killerId": "76561199114146101",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 136025.56,
			"y": 2751.4578,
			"z": 34164.91
		},
		"victimPosition": {
			"x": 129682.74,
			"y": 2208.4495,
			"z": 46857.48
		},
		"killerVelocity": {
			"x": -379.605,
			"y": -48.27949,
			"z": 139.93361
		},
		"victimVelocity": {
			"x": 184.78853,
			"y": 65.45002,
			"z": 30.595764
		}
	}, {
		"_id": {
			"$oid": "63ad83f6109c9d48f459b622"
		},
		"id": "fe3f7b7b-a1bc-4368-b980-85379afdcf20",
		"time": {
			"$numberLong": "1672315894914"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199260468673",
		"killerId": "76561198046915473",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 73224.67,
			"y": 3236.4612,
			"z": 99776.3
		},
		"victimPosition": {
			"x": 66146.05,
			"y": 1488.8129,
			"z": 102850.29
		},
		"killerVelocity": {
			"x": 5.050236,
			"y": -180.34679,
			"z": 184.69939
		},
		"victimVelocity": {
			"x": 37.055073,
			"y": -1.9638702,
			"z": 5.6224895
		}
	}, {
		"_id": {
			"$oid": "63ada4c4109c9d48f459b8a0"
		},
		"id": "d34851dc-63ec-4ba4-bd03-4e56277527e0",
		"time": {
			"$numberLong": "1672324292515"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199207308070",
		"killerId": "76561199063720309",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159938.44,
			"y": 867.6811,
			"z": 28705.963
		},
		"victimPosition": {
			"x": 155448.88,
			"y": 867.30457,
			"z": 27359.9
		},
		"killerVelocity": {
			"x": -117.125595,
			"y": 8.968026,
			"z": -34.55854
		},
		"victimVelocity": {
			"x": -11.266226,
			"y": 0.05619812,
			"z": -21.033018
		}
	}, {
		"_id": {
			"$oid": "63ada4f5109c9d48f459b8ad"
		},
		"id": "4883896b-2d46-4940-94d3-4ab8acb11503",
		"time": {
			"$numberLong": "1672324341671"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198207822743",
		"killerId": "76561199063720309",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159634.6,
			"y": 1366.5295,
			"z": 27376.99
		},
		"victimPosition": {
			"x": 161020.4,
			"y": 854.3958,
			"z": 28833.639
		},
		"killerVelocity": {
			"x": 202.80846,
			"y": -77.6975,
			"z": 213.52153
		},
		"victimVelocity": {
			"x": -12.261864,
			"y": -0.0013166219,
			"z": -4.7610474
		}
	}, {
		"_id": {
			"$oid": "63ada56b109c9d48f459b8b5"
		},
		"id": "9c9c2dff-018f-4de5-8a7f-fcfaa9bcb43a",
		"time": {
			"$numberLong": "1672324459845"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199001934351",
		"killerId": "76561198207822743",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147976.47,
			"y": 1697.5573,
			"z": 34529.242
		},
		"victimPosition": {
			"x": 141120.42,
			"y": 1133.6262,
			"z": 34079.16
		},
		"killerVelocity": {
			"x": -318.60037,
			"y": -18.029234,
			"z": 154.95653
		},
		"victimVelocity": {
			"x": -59.103676,
			"y": -15.055947,
			"z": 60.72349
		}
	}, {
		"_id": {
			"$oid": "63adb473109c9d48f459ba02"
		},
		"id": "3f40e6dd-77ed-4d5d-a242-19d94418cfc1",
		"time": {
			"$numberLong": "1672328307103"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198121255144",
		"killerId": "76561198380641479",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 154108.86,
			"y": 1507.1276,
			"z": 28014.295
		},
		"victimPosition": {
			"x": 155996.53,
			"y": 1152.3582,
			"z": 28988.459
		},
		"killerVelocity": {
			"x": 338.4499,
			"y": -35.315727,
			"z": 60.21264
		},
		"victimVelocity": {
			"x": -221.55379,
			"y": 37.75151,
			"z": 100.240105
		}
	}, {
		"_id": {
			"$oid": "63adc43e109c9d48f459bb8e"
		},
		"id": "87962556-32ba-4b32-acce-d7e1144b34e3",
		"time": {
			"$numberLong": "1672332350879"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198162340088",
		"killerId": "76561199085941522",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 91292.33,
			"y": 1480.572,
			"z": 76325.734
		},
		"victimPosition": {
			"x": 92308.15,
			"y": 1008.9832,
			"z": 73357.1
		},
		"killerVelocity": {
			"x": -283.4146,
			"y": -14.338451,
			"z": 205.56139
		},
		"victimVelocity": {
			"x": 196.21793,
			"y": 7.528024,
			"z": -179.96501
		}
	}, {
		"_id": {
			"$oid": "63add99f109c9d48f459bd7a"
		},
		"id": "d7272440-5983-414f-a9ac-4f03d88b228b",
		"time": {
			"$numberLong": "1672337823907"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199092656018",
		"killerId": "76561199046235436",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152072,
			"y": 2283.3354,
			"z": 36893.656
		},
		"victimPosition": {
			"x": 150366.12,
			"y": 1660.7915,
			"z": 35097.32
		},
		"killerVelocity": {
			"x": -203.13745,
			"y": 18.089819,
			"z": 43.842323
		},
		"victimVelocity": {
			"x": -2.78706,
			"y": 34.475353,
			"z": -199.15836
		}
	}, {
		"_id": {
			"$oid": "63add9a6109c9d48f459bd7c"
		},
		"id": "e8c53c55-0c10-44cb-ad28-cd4483f8eeee",
		"time": {
			"$numberLong": "1672337830616"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199270033524",
		"killerId": "76561199046235436",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150626.81,
			"y": 2500.9714,
			"z": 36943.434
		},
		"victimPosition": {
			"x": 148857.28,
			"y": 2288.775,
			"z": 35865.97
		},
		"killerVelocity": {
			"x": -233.45226,
			"y": 5.1032596,
			"z": -1.7418524
		},
		"victimVelocity": {
			"x": -48.275394,
			"y": 89.64054,
			"z": 160.17355
		}
	}, {
		"_id": {
			"$oid": "63add9e1109c9d48f459bd82"
		},
		"id": "6758aff0-1abb-474f-b6bc-0a4100946937",
		"time": {
			"$numberLong": "1672337889950"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199092656018",
		"killerId": "76561199270033524",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160298.45,
			"y": 1133.5155,
			"z": 29434.45
		},
		"victimPosition": {
			"x": 158902.89,
			"y": 934.63,
			"z": 28430.088
		},
		"killerVelocity": {
			"x": -130.73439,
			"y": -26.714483,
			"z": -104.39545
		},
		"victimVelocity": {
			"x": -125.55146,
			"y": 4.9283323,
			"z": 4.766617
		}
	}, {
		"_id": {
			"$oid": "63add9f8109c9d48f459bd86"
		},
		"id": "5751553c-4c00-41f2-aebc-13a6e4739331",
		"time": {
			"$numberLong": "1672337912268"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198949128850",
		"killerId": "76561199270033524",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159643.31,
			"y": 1361.3384,
			"z": 30271.057
		},
		"victimPosition": {
			"x": 161944.55,
			"y": 1115.6187,
			"z": 30146.525
		},
		"killerVelocity": {
			"x": 184.35506,
			"y": -28.433357,
			"z": 9.283618
		},
		"victimVelocity": {
			"x": 374.47675,
			"y": -46.588562,
			"z": -85.95464
		}
	}, {
		"_id": {
			"$oid": "63addee6109c9d48f459be14"
		},
		"id": "adcf860f-411f-425e-b922-3c7acbb9e375",
		"time": {
			"$numberLong": "1672339174362"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198329125964",
		"killerId": "76561198053278730",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141539.64,
			"y": 3613.2463,
			"z": 45614.28
		},
		"victimPosition": {
			"x": 131226.2,
			"y": 3096.1907,
			"z": 54767.02
		},
		"killerVelocity": {
			"x": -286.45135,
			"y": 9.5833025,
			"z": 95.76562
		},
		"victimVelocity": {
			"x": 110.09542,
			"y": -120.02689,
			"z": 208.6556
		}
	}, {
		"_id": {
			"$oid": "63addf7d109c9d48f459be1c"
		},
		"id": "3a5fda7b-e8f4-43b3-8a43-212edfb30dc9",
		"time": {
			"$numberLong": "1672339325323"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198053278730",
		"killerId": "76561198949128850",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 120348.65,
			"y": 3650.705,
			"z": 51931.11
		},
		"victimPosition": {
			"x": 119084.04,
			"y": 4242.271,
			"z": 55482.64
		},
		"killerVelocity": {
			"x": -184.93806,
			"y": -67.387085,
			"z": 368.84824
		},
		"victimVelocity": {
			"x": 170.99088,
			"y": 13.188325,
			"z": -247.48488
		}
	}, {
		"_id": {
			"$oid": "63adee8d109c9d48f459bf82"
		},
		"id": "9b730d53-ae3a-476b-89df-16e3b281ed82",
		"time": {
			"$numberLong": "1672343181445"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199011856625",
		"killerId": "76561198450359260",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 107622.73,
			"y": 2898.43,
			"z": 74491.33
		},
		"victimPosition": {
			"x": 107229.11,
			"y": 2205.3354,
			"z": 76745.414
		},
		"killerVelocity": {
			"x": 152.73265,
			"y": -60.745586,
			"z": 204.32706
		},
		"victimVelocity": {
			"x": -47.154236,
			"y": 49.266594,
			"z": -161.3781
		}
	}, {
		"_id": {
			"$oid": "63adf08e109c9d48f459bfae"
		},
		"id": "78cdace0-f43d-4b87-b95a-b2e820ae5fb3",
		"time": {
			"$numberLong": "1672343694448"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198450359260",
		"killerId": "76561199142848705",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 88436.516,
			"y": 1869.056,
			"z": 54688.074
		},
		"victimPosition": {
			"x": 74256.27,
			"y": 848.09454,
			"z": 55968.477
		},
		"killerVelocity": {
			"x": -310.6013,
			"y": -16.238445,
			"z": 66.754715
		},
		"victimVelocity": {
			"x": 127.047844,
			"y": 15.472295,
			"z": -344.3261
		}
	}, {
		"_id": {
			"$oid": "63adf996109c9d48f459c0b0"
		},
		"id": "fad1dd52-ea43-4dcc-9e62-93c115565a8f",
		"time": {
			"$numberLong": "1672346006127"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198053278730",
		"killerId": "76561199465068861",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161631.39,
			"y": 1051.7002,
			"z": 29715.332
		},
		"victimPosition": {
			"x": 159305.33,
			"y": 1259.0496,
			"z": 28491.227
		},
		"killerVelocity": {
			"x": -236.0626,
			"y": 23.373299,
			"z": -123.35619
		},
		"victimVelocity": {
			"x": -71.26539,
			"y": 35.937305,
			"z": -23.88865
		}
	}, {
		"_id": {
			"$oid": "63ae104c109c9d48f459c2da"
		},
		"id": "4d015715-c866-448c-90f2-5bdbd4cce7f0",
		"time": {
			"$numberLong": "1672351820635"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197976066897",
		"killerId": "76561198001241314",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 148094.42,
			"y": 2715.584,
			"z": 73529.945
		},
		"victimPosition": {
			"x": 139825.38,
			"y": 1644.8424,
			"z": 73175.5
		},
		"killerVelocity": {
			"x": -376.44925,
			"y": -28.976223,
			"z": -52.079597
		},
		"victimVelocity": {
			"x": 25.38105,
			"y": 16.090668,
			"z": -152.81439
		}
	}, {
		"_id": {
			"$oid": "63ae12d8109c9d48f459c30f"
		},
		"id": "be8eea5e-fca9-4165-a681-f97d618eb7b0",
		"time": {
			"$numberLong": "1672352472337"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198194839267",
		"killerId": "76561197994126615",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162500.88,
			"y": 2214.0342,
			"z": 34365.695
		},
		"victimPosition": {
			"x": 160673.64,
			"y": 1927.6832,
			"z": 35160.6
		},
		"killerVelocity": {
			"x": -150.2315,
			"y": -67.833,
			"z": 47.12385
		},
		"victimVelocity": {
			"x": -106.45425,
			"y": 14.401668,
			"z": 199.51465
		}
	}, {
		"_id": {
			"$oid": "63ae2014109c9d48f459c44b"
		},
		"id": "675b4937-365e-49b1-a745-17d787bb8f24",
		"time": {
			"$numberLong": "1672355860558"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198063872038",
		"killerId": "76561198216062900",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160168.4,
			"y": 856.8184,
			"z": 28643.346
		},
		"victimPosition": {
			"x": 160607.7,
			"y": 854.4064,
			"z": 28677.148
		},
		"killerVelocity": {
			"x": 21.676683,
			"y": 0.81880987,
			"z": -4.9543195
		},
		"victimVelocity": {
			"x": -12.357574,
			"y": -0.0005199611,
			"z": -6.109862
		}
	}, {
		"_id": {
			"$oid": "63ae2a34109c9d48f459c519"
		},
		"id": "ece7743e-874a-4d01-a43f-93916c87d58e",
		"time": {
			"$numberLong": "1672358452173"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198950743699",
		"killerId": "76561198042287624",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 127225.96,
			"y": 2770.8926,
			"z": 57069.605
		},
		"victimPosition": {
			"x": 127033.34,
			"y": 2748.9993,
			"z": 57347
		},
		"killerVelocity": {
			"x": -250.70212,
			"y": -13.09828,
			"z": 293.12564
		},
		"victimVelocity": {
			"x": -114.44338,
			"y": -5.6585817,
			"z": 160.77621
		}
	}, {
		"_id": {
			"$oid": "63ae37d4109c9d48f459c696"
		},
		"id": "3be06e44-1669-4d39-98fd-3adb2523954f",
		"time": {
			"$numberLong": "1672361940630"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561197972458405",
		"killerId": "76561199229538227",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 124366.45,
			"y": 2566.4211,
			"z": 52089.465
		},
		"victimPosition": {
			"x": 132257.53,
			"y": 1590.5638,
			"z": 28737.287
		},
		"killerVelocity": {
			"x": -209.0779,
			"y": 55.805664,
			"z": 266.5959
		},
		"victimVelocity": {
			"x": -42.025772,
			"y": -63.461723,
			"z": -64.80273
		}
	}, {
		"_id": {
			"$oid": "63ae3a69109c9d48f459c6c7"
		},
		"id": "9a455362-ab19-489a-ad90-c214e648f059",
		"time": {
			"$numberLong": "1672362601066"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199077066871",
		"killerId": "76561198015077803",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149088.9,
			"y": 1668.9702,
			"z": 38798.383
		},
		"victimPosition": {
			"x": 143682.75,
			"y": 2228.037,
			"z": 45276.79
		},
		"killerVelocity": {
			"x": -221.05058,
			"y": -18.895214,
			"z": 156.09409
		},
		"victimVelocity": {
			"x": 100.691,
			"y": -139.51881,
			"z": -32.802692
		}
	}, {
		"_id": {
			"$oid": "63ae43e6109c9d48f459c73b"
		},
		"id": "470a9372-0a00-4cde-8182-f637ea6dae90",
		"time": {
			"$numberLong": "1672365030674"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198028534691",
		"killerId": "76561198030435135",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 71052.28,
			"y": 1266.1416,
			"z": 99251.47
		},
		"victimPosition": {
			"x": 66623.94,
			"y": 1504.8265,
			"z": 102715.83
		},
		"killerVelocity": {
			"x": -275.75693,
			"y": 14.462872,
			"z": 210.43971
		},
		"victimVelocity": {
			"x": -147.32086,
			"y": -20.19509,
			"z": -114.900475
		}
	}, {
		"_id": {
			"$oid": "63ae5ad9109c9d48f459c923"
		},
		"id": "a6dcdd34-422c-4e43-ba5e-68aa0cc35d8f",
		"time": {
			"$numberLong": "1672370905807"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198030435135",
		"killerId": "76561198860929063",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152019.6,
			"y": 2710.4656,
			"z": 39911.37
		},
		"victimPosition": {
			"x": 147182.66,
			"y": 2135.64,
			"z": 43903.04
		},
		"killerVelocity": {
			"x": -279.51257,
			"y": -10.281469,
			"z": 215.8306
		},
		"victimVelocity": {
			"x": -156.92934,
			"y": -111.11666,
			"z": -272.2539
		}
	}, {
		"_id": {
			"$oid": "63ae5b03109c9d48f459c928"
		},
		"id": "88741d45-07ab-499d-878d-76f40c99b478",
		"time": {
			"$numberLong": "1672370947909"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198140685704",
		"killerId": "76561198860929063",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153385.61,
			"y": 1687.2412,
			"z": 34685.164
		},
		"victimPosition": {
			"x": 160413.33,
			"y": 855.436,
			"z": 28673.488
		},
		"killerVelocity": {
			"x": 241.6776,
			"y": -25.118744,
			"z": -219.00209
		},
		"victimVelocity": {
			"x": 0.597337,
			"y": 0.032151278,
			"z": -1.3268276
		}
	}, {
		"_id": {
			"$oid": "63ae66b1109c9d48f459ca5d"
		},
		"id": "b577dd39-7302-487c-bed7-e93ca847ad31",
		"time": {
			"$numberLong": "1672373937292"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198031537794",
		"killerId": "76561199099993578",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156116.78,
			"y": 11234.147,
			"z": 40324.336
		},
		"victimPosition": {
			"x": 149518.19,
			"y": 10190.124,
			"z": 43404.58
		},
		"killerVelocity": {
			"x": -311.7531,
			"y": -28.023663,
			"z": 214.16048
		},
		"victimVelocity": {
			"x": -102.47755,
			"y": -174.378,
			"z": -209.41003
		}
	}, {
		"_id": {
			"$oid": "63ae670e109c9d48f459ca6a"
		},
		"id": "41a50f4c-35aa-4e84-b15b-e6d2d22fb82e",
		"time": {
			"$numberLong": "1672374030367"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199099993578",
		"killerId": "76561198072709526",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 126898.164,
			"y": 10606.345,
			"z": 56378.19
		},
		"victimPosition": {
			"x": 129961.086,
			"y": 10356.058,
			"z": 56311.68
		},
		"killerVelocity": {
			"x": 123.79573,
			"y": -65.585556,
			"z": -68.60169
		},
		"victimVelocity": {
			"x": -382.5069,
			"y": 56.46521,
			"z": 78.77287
		}
	}, {
		"_id": {
			"$oid": "63ae6711109c9d48f459ca6c"
		},
		"id": "e00ed31b-f026-41c6-aff0-24bd6ebbe9fd",
		"time": {
			"$numberLong": "1672374033285"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198072709526",
		"killerId": "76561199099993578",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 128876.88,
			"y": 10484.286,
			"z": 56537.99
		},
		"victimPosition": {
			"x": 127256.82,
			"y": 10421.22,
			"z": 56133.324
		},
		"killerVelocity": {
			"x": -363.8796,
			"y": 30.694147,
			"z": 77.77905
		},
		"victimVelocity": {
			"x": 113.513,
			"y": -54.714912,
			"z": -96.21915
		}
	}, {
		"_id": {
			"$oid": "63ae6711109c9d48f459ca6e"
		},
		"id": "30d6bfee-8bc6-4ab6-a049-ff62155123ff",
		"time": {
			"$numberLong": "1672374033451"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198797819887",
		"killerId": "76561199013453548",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 94947.125,
			"y": 3688.147,
			"z": 79772.7
		},
		"victimPosition": {
			"x": 90128.64,
			"y": 1633.6318,
			"z": 84746.91
		},
		"killerVelocity": {
			"x": -282.82788,
			"y": -21.998857,
			"z": 172.6981
		},
		"victimVelocity": {
			"x": -152.5265,
			"y": 50.46482,
			"z": 332.53925
		}
	}, {
		"_id": {
			"$oid": "63ae6fe7109c9d48f459cb35"
		},
		"id": "ef46420a-b90a-458e-8768-239120f017e6",
		"time": {
			"$numberLong": "1672376295669"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561198214519808",
		"killerId": "76561198145105130",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 129465.586,
			"y": 2281.1787,
			"z": 52531.56
		},
		"victimPosition": {
			"x": 127223.234,
			"y": 1955.7157,
			"z": 55614.293
		},
		"killerVelocity": {
			"x": -181.09644,
			"y": -21.043036,
			"z": 143.20258
		},
		"victimVelocity": {
			"x": 182.15009,
			"y": -2.737421,
			"z": -298.84006
		}
	}, {
		"_id": {
			"$oid": "63ae7902109c9d48f459cc11"
		},
		"id": "f3c6ea26-0439-464a-b2a9-1b38d1b683e6",
		"time": {
			"$numberLong": "1672378626168"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198078362227",
		"killerId": "76561198283751141",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162514.52,
			"y": 1565.4092,
			"z": 30605.535
		},
		"victimPosition": {
			"x": 159557.77,
			"y": 854.4546,
			"z": 28728.27
		},
		"killerVelocity": {
			"x": -34.495094,
			"y": 57.0841,
			"z": 152.47925
		},
		"victimVelocity": {
			"x": 0.32166386,
			"y": 0.560045,
			"z": 7.945544
		}
	}, {
		"_id": {
			"$oid": "63ae9b76109c9d48f459ce41"
		},
		"id": "7102241f-bbed-4042-b740-73f7eb490d9b",
		"time": {
			"$numberLong": "1672387446619"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199085165741",
		"killerId": "76561198050284681",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 108723.11,
			"y": 1735.6183,
			"z": 63175.25
		},
		"victimPosition": {
			"x": 101754.836,
			"y": 5716.754,
			"z": 74055.47
		},
		"killerVelocity": {
			"x": 214.28697,
			"y": -14.212053,
			"z": 273.1047
		},
		"victimVelocity": {
			"x": -147.24988,
			"y": -116.987114,
			"z": -91.529434
		}
	}, {
		"_id": {
			"$oid": "63aea459109c9d48f459cecb"
		},
		"id": "a6958be5-5cdb-4754-bcba-4ce92fd19fe8",
		"time": {
			"$numberLong": "1672389721530"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198272986230",
		"killerId": "76561198251024680",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 83096.03,
			"y": 1325.8982,
			"z": 121884.48
		},
		"victimPosition": {
			"x": 83834.97,
			"y": 1417.165,
			"z": 123350.03
		},
		"killerVelocity": {
			"x": 12.645991,
			"y": 74.02457,
			"z": 334.6298
		},
		"victimVelocity": {
			"x": 153.7642,
			"y": -140.50304,
			"z": 126.78114
		}
	}, {
		"_id": {
			"$oid": "63aea479109c9d48f459cece"
		},
		"id": "86e1db71-3ca2-4238-830f-c278a1904f24",
		"time": {
			"$numberLong": "1672389753752"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198251024680",
		"killerId": "76561198045136552",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 85272.34,
			"y": 2294.0469,
			"z": 124660.52
		},
		"victimPosition": {
			"x": 86901.516,
			"y": 2453.4182,
			"z": 123921.65
		},
		"killerVelocity": {
			"x": 181.08801,
			"y": 35.92528,
			"z": -95.84019
		},
		"victimVelocity": {
			"x": -159.41481,
			"y": -30.213398,
			"z": -73.02059
		}
	}, {
		"_id": {
			"$oid": "63aeada1109c9d48f459cf93"
		},
		"id": "ec848a3d-75fd-428a-b232-f1d54f69b7e7",
		"time": {
			"$numberLong": "1672392097437"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199130777388",
		"killerId": "76561198349936980",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 118130.914,
			"y": 2468.4048,
			"z": 69587.13
		},
		"victimPosition": {
			"x": 116060.88,
			"y": 1755.657,
			"z": 75093.37
		},
		"killerVelocity": {
			"x": -146.22942,
			"y": -48.710728,
			"z": 351.88193
		},
		"victimVelocity": {
			"x": 8.80366,
			"y": 3.3107069,
			"z": -266.5669
		}
	}, {
		"_id": {
			"$oid": "63aecb5b109c9d48f459d1ba"
		},
		"id": "1a479f8d-6fa4-480b-9b03-f0c7cb804219",
		"time": {
			"$numberLong": "1672399707966"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198384239943",
		"killerId": "76561198016022937",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 135603.61,
			"y": 1697.9863,
			"z": 43155.414
		},
		"victimPosition": {
			"x": 134819.39,
			"y": 1942.2717,
			"z": 44795.99
		},
		"killerVelocity": {
			"x": -234.59851,
			"y": -65.73014,
			"z": 277.2311
		},
		"victimVelocity": {
			"x": -279.83524,
			"y": -75.63133,
			"z": 200.30328
		}
	}, {
		"_id": {
			"$oid": "63aede92109c9d48f459d34a"
		},
		"id": "3e38f5b3-e715-4408-adfc-c74834bb9064",
		"time": {
			"$numberLong": "1672404626512"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198883768416",
		"killerId": "76561199222949216",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 108535.375,
			"y": 2433.7576,
			"z": 66481.984
		},
		"victimPosition": {
			"x": 106585.87,
			"y": 1927.073,
			"z": 67796.64
		},
		"killerVelocity": {
			"x": -285.66052,
			"y": -78.22881,
			"z": 281.73087
		},
		"victimVelocity": {
			"x": -85.526985,
			"y": -185.35608,
			"z": -74.9775
		}
	}, {
		"_id": {
			"$oid": "63aef4b3109c9d48f459d4e3"
		},
		"id": "8b21ff5d-a193-4dba-8cd8-7f3badc60ed5",
		"time": {
			"$numberLong": "1672410291741"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198044700907",
		"killerId": "76561198884738345",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162282.97,
			"y": 1427.2915,
			"z": 31655.037
		},
		"victimPosition": {
			"x": 161179.88,
			"y": 1860.7734,
			"z": 33608.17
		},
		"killerVelocity": {
			"x": -58.4856,
			"y": 43.475113,
			"z": 202.74677
		},
		"victimVelocity": {
			"x": -245.64516,
			"y": -19.015465,
			"z": 45.830307
		}
	}, {
		"_id": {
			"$oid": "63af09ed109c9d48f459d66b"
		},
		"id": "2e0fd0fe-e207-4ba0-bd0e-1b34b0364d88",
		"time": {
			"$numberLong": "1672415725648"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199235980820",
		"killerId": "76561199160382643",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 163098.92,
			"y": 2924.94,
			"z": 32206.621
		},
		"victimPosition": {
			"x": 164420.62,
			"y": 3876.9702,
			"z": 34997.164
		},
		"killerVelocity": {
			"x": 95.20168,
			"y": 46.95287,
			"z": 158.16907
		},
		"victimVelocity": {
			"x": -301.8409,
			"y": 22.855923,
			"z": 68.89263
		}
	}, {
		"_id": {
			"$oid": "63af12c7109c9d48f459d721"
		},
		"id": "24a95632-d8ab-4381-88bf-8b7e6f5648df",
		"time": {
			"$numberLong": "1672417991913"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198375809928",
		"killerId": "76561199189939266",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 117339.76,
			"y": 1989.6287,
			"z": 76269.34
		},
		"victimPosition": {
			"x": 117504.836,
			"y": 1704.1842,
			"z": 75931.984
		},
		"killerVelocity": {
			"x": -365.98917,
			"y": -71.65906,
			"z": 110.6377
		},
		"victimVelocity": {
			"x": 132.8537,
			"y": -17.533434,
			"z": -197.03065
		}
	}, {
		"_id": {
			"$oid": "63af1e8a109c9d48f459d7fc"
		},
		"id": "8073ff1a-45ca-4805-a547-08d09f122764",
		"time": {
			"$numberLong": "1672421002100"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198140685704",
		"killerId": "76561198853345622",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 84829.38,
			"y": 1493.2875,
			"z": 99233.77
		},
		"victimPosition": {
			"x": 84884.02,
			"y": 1868.7804,
			"z": 100011.05
		},
		"killerVelocity": {
			"x": -270.90964,
			"y": 46.334,
			"z": 197.51564
		},
		"victimVelocity": {
			"x": 245.21188,
			"y": 20.832075,
			"z": -212.78995
		}
	}, {
		"_id": {
			"$oid": "63af220a109c9d48f459d835"
		},
		"id": "83d79be8-e344-46b0-8968-665102a9fdbf",
		"time": {
			"$numberLong": "1672421898231"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198050284681",
		"killerId": "76561198103415968",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 76210.44,
			"y": 3291.56,
			"z": 87321.23
		},
		"victimPosition": {
			"x": 65142.71,
			"y": 918.72565,
			"z": 94943.51
		},
		"killerVelocity": {
			"x": -354.7789,
			"y": -48.660797,
			"z": 203.09065
		},
		"victimVelocity": {
			"x": 158.90184,
			"y": -34.01554,
			"z": 160.96217
		}
	}, {
		"_id": {
			"$oid": "63af2665109c9d48f459d885"
		},
		"id": "e3f940be-13c7-471a-b9bb-14889950f648",
		"time": {
			"$numberLong": "1672423013268"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198853345622",
		"killerId": "76561199046613272",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160302.48,
			"y": 854.412,
			"z": 28569.959
		},
		"victimPosition": {
			"x": 160300.53,
			"y": 853.6156,
			"z": 28566.91
		},
		"killerVelocity": {
			"x": 62.524647,
			"y": -0.0002303645,
			"z": 17.059048
		},
		"victimVelocity": {
			"x": 75.72931,
			"y": -0.001781486,
			"z": 23.03805
		}
	}, {
		"_id": {
			"$oid": "63af486b109c9d48f459db54"
		},
		"id": "80059d3d-b59b-4148-ac55-e047328f6975",
		"time": {
			"$numberLong": "1672431723494"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198220186544",
		"killerId": "76561198173423190",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 139670.52,
			"y": 5324.2275,
			"z": 47266.676
		},
		"victimPosition": {
			"x": 141866.34,
			"y": 4467.0703,
			"z": 52883.664
		},
		"killerVelocity": {
			"x": 123.28947,
			"y": -58.912853,
			"z": -49.966938
		},
		"victimVelocity": {
			"x": -332.41074,
			"y": -3.09419,
			"z": -12.519809
		}
	}, {
		"_id": {
			"$oid": "63af4a7c109c9d48f459db95"
		},
		"id": "2cf00dad-c9d3-4b8c-9ba4-8e3782337beb",
		"time": {
			"$numberLong": "1672432252146"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199077329959",
		"killerId": "76561198442932729",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161058.56,
			"y": 854.41473,
			"z": 29122.244
		},
		"victimPosition": {
			"x": 160034.95,
			"y": 854.3366,
			"z": 28632.113
		},
		"killerVelocity": {
			"x": 2.421878,
			"y": -0.000030077994,
			"z": -8.652715
		},
		"victimVelocity": {
			"x": 7.6265435,
			"y": -0.12735456,
			"z": -0.6988739
		}
	}, {
		"_id": {
			"$oid": "63af4f69109c9d48f459dc23"
		},
		"id": "9393da3b-857d-4c08-b832-3c48bae2267f",
		"time": {
			"$numberLong": "1672433513907"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198861753380",
		"killerId": "76561198153445366",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 149183.5,
			"y": 3446.914,
			"z": 42561.34
		},
		"victimPosition": {
			"x": 159412.61,
			"y": 1352.9186,
			"z": 36873.387
		},
		"killerVelocity": {
			"x": -270.34412,
			"y": 16.638151,
			"z": 252.14745
		},
		"victimVelocity": {
			"x": 22.699438,
			"y": -34.225574,
			"z": -1.7409363
		}
	}, {
		"_id": {
			"$oid": "63af69b1109c9d48f459de73"
		},
		"id": "8f868fe7-a32c-48a5-9daf-34120fe30464",
		"time": {
			"$numberLong": "1672440241619"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198378884078",
		"killerId": "76561198879701130",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160423.28,
			"y": 854.3427,
			"z": 28871.184
		},
		"victimPosition": {
			"x": 160159.72,
			"y": 856.2422,
			"z": 28769.602
		},
		"killerVelocity": {
			"x": -7.35533,
			"y": -0.23637378,
			"z": -2.916537
		},
		"victimVelocity": {
			"x": -110.56888,
			"y": 2.3441122,
			"z": -29.284693
		}
	}, {
		"_id": {
			"$oid": "63af69c5109c9d48f459de76"
		},
		"id": "d532da43-64d1-4ced-bcea-4ce94d74dcd4",
		"time": {
			"$numberLong": "1672440261696"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199389140414",
		"killerId": "76561198879701130",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159074.28,
			"y": 854.6236,
			"z": 28434.424
		},
		"victimPosition": {
			"x": 159084.08,
			"y": 854.4045,
			"z": 28439.732
		},
		"killerVelocity": {
			"x": -147.64984,
			"y": 1.154181,
			"z": -44.5658
		},
		"victimVelocity": {
			"x": -13.06095,
			"y": 0.0021372065,
			"z": -4.308545
		}
	}, {
		"_id": {
			"$oid": "63af69e2109c9d48f459de79"
		},
		"id": "21815943-f564-4eee-aad1-3970d5b354bb",
		"time": {
			"$numberLong": "1672440290071"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198027061822",
		"killerId": "76561198378884078",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159444.73,
			"y": 896.39166,
			"z": 28522.38
		},
		"victimPosition": {
			"x": 159177.19,
			"y": 854.345,
			"z": 28418.688
		},
		"killerVelocity": {
			"x": -144.22716,
			"y": 16.022888,
			"z": -51.631268
		},
		"victimVelocity": {
			"x": -8.201658,
			"y": 0.32287124,
			"z": -10.436561
		}
	}, {
		"_id": {
			"$oid": "63af6dc6109c9d48f459decf"
		},
		"id": "a08283dd-9627-4afb-91d2-ef78d0cbcbb7",
		"time": {
			"$numberLong": "1672441286823"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198056282825",
		"killerId": "76561198363194577",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151231.5,
			"y": 2208.053,
			"z": 24989.05
		},
		"victimPosition": {
			"x": 151472.3,
			"y": 2449.4612,
			"z": 24755.814
		},
		"killerVelocity": {
			"x": 79.13464,
			"y": 102.48397,
			"z": -89.88329
		},
		"victimVelocity": {
			"x": 91.800865,
			"y": 36.63383,
			"z": -109.63409
		}
	}, {
		"_id": {
			"$oid": "63af6e2b109c9d48f459ded8"
		},
		"id": "f90d73af-5c52-4800-8538-d620f1689bf9",
		"time": {
			"$numberLong": "1672441387893"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198884937941",
		"killerId": "76561198363194577",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153540.5,
			"y": 2123.8196,
			"z": 30166.424
		},
		"victimPosition": {
			"x": 155308.45,
			"y": 1815.4279,
			"z": 29120.592
		},
		"killerVelocity": {
			"x": 96.147545,
			"y": -58.915466,
			"z": 85.62079
		},
		"victimVelocity": {
			"x": 138.45677,
			"y": -112.79919,
			"z": -38.83126
		}
	}, {
		"_id": {
			"$oid": "63af7804109c9d48f459dfca"
		},
		"id": "3bd06c71-8eaf-4854-ba54-70f77acaec95",
		"time": {
			"$numberLong": "1672443908422"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199161067281",
		"killerId": "76561198862770833",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 122466.31,
			"y": 2431.6895,
			"z": 78641.83
		},
		"victimPosition": {
			"x": 120630.07,
			"y": 2274.8525,
			"z": 78785.875
		},
		"killerVelocity": {
			"x": -369.21997,
			"y": -8.718977,
			"z": -12.157436
		},
		"victimVelocity": {
			"x": -193.47353,
			"y": 36.86431,
			"z": 86.88778
		}
	}, {
		"_id": {
			"$oid": "63af8b39109c9d48f459e1a3"
		},
		"id": "17ded148-4299-492b-90ec-da6469f0418c",
		"time": {
			"$numberLong": "1672448825320"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198859725668",
		"killerId": "76561198213819335",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 121965.28,
			"y": 2547.3289,
			"z": 60001.137
		},
		"victimPosition": {
			"x": 117471.516,
			"y": 2007.0293,
			"z": 60354.84
		},
		"killerVelocity": {
			"x": -203.12497,
			"y": -23.760708,
			"z": 9.556726
		},
		"victimVelocity": {
			"x": 70.218475,
			"y": 115.43131,
			"z": 179.23286
		}
	}, {
		"_id": {
			"$oid": "63afad57109c9d48f459e49f"
		},
		"id": "e9db17c7-0050-4397-8ff0-cc3c52a5899a",
		"time": {
			"$numberLong": "1672457559484"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199229941401",
		"killerId": "76561198357860851",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145397,
			"y": 4335.1987,
			"z": 47869.99
		},
		"victimPosition": {
			"x": 145129.19,
			"y": 3516.688,
			"z": 47402.945
		},
		"killerVelocity": {
			"x": 59.702095,
			"y": 5.61184,
			"z": 312.96664
		},
		"victimVelocity": {
			"x": -59.979877,
			"y": -86.02673,
			"z": -136.82324
		}
	}, {
		"_id": {
			"$oid": "63afb93f109c9d48f459e598"
		},
		"id": "aa1f55dc-8ee0-48af-a3d8-08a8223e9314",
		"time": {
			"$numberLong": "1672460607126"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198076128098",
		"killerId": "76561198161467486",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 89509.48,
			"y": 1288.2885,
			"z": 112176.625
		},
		"victimPosition": {
			"x": 90804.22,
			"y": 1428.8159,
			"z": 113879.52
		},
		"killerVelocity": {
			"x": -33.534992,
			"y": -15.070265,
			"z": 237.38994
		},
		"victimVelocity": {
			"x": 135.96509,
			"y": 2.3352435,
			"z": -9.269658
		}
	}, {
		"_id": {
			"$oid": "63afbe5c109c9d48f459e61c"
		},
		"id": "efa42009-ffbd-4d76-896c-61ebb6619d2f",
		"time": {
			"$numberLong": "1672461916430"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198265640092",
		"killerId": "76561198845109979",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 96530.66,
			"y": 3328.6003,
			"z": 75017.89
		},
		"victimPosition": {
			"x": 99339.82,
			"y": 639.227,
			"z": 69731.664
		},
		"killerVelocity": {
			"x": 33.28084,
			"y": -166.45761,
			"z": 300.7537
		},
		"victimVelocity": {
			"x": 70.09956,
			"y": 3.7677696,
			"z": -60.817
		}
	}, {
		"_id": {
			"$oid": "63afc736109c9d48f459e6ec"
		},
		"id": "f627cc55-059a-474e-95d4-22d29552d804",
		"time": {
			"$numberLong": "1672464182945"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199465324188",
		"killerId": "76561198036537378",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 130375.18,
			"y": 2574.3508,
			"z": 47895.652
		},
		"victimPosition": {
			"x": 129984.39,
			"y": 2280.3247,
			"z": 49251.383
		},
		"killerVelocity": {
			"x": -273.67957,
			"y": -25.896229,
			"z": 37.963543
		},
		"victimVelocity": {
			"x": -113.39182,
			"y": -89.969604,
			"z": 156.07101
		}
	}, {
		"_id": {
			"$oid": "63afd8f8109c9d48f459e874"
		},
		"id": "6f1f1792-b656-43af-9986-a1ef3f3db7e1",
		"time": {
			"$numberLong": "1672468728043"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199154734223",
		"killerId": "76561198945312530",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 79595.49,
			"y": 2466.6492,
			"z": 74986.32
		},
		"victimPosition": {
			"x": 78399.26,
			"y": 2438.0908,
			"z": 75541.69
		},
		"killerVelocity": {
			"x": -75.3866,
			"y": 7.167429,
			"z": 320.13373
		},
		"victimVelocity": {
			"x": -273.1627,
			"y": 43.66365,
			"z": -25.849018
		}
	}, {
		"_id": {
			"$oid": "63afe4b1109c9d48f459e998"
		},
		"id": "82413119-034c-4c88-8762-7effb556779c",
		"time": {
			"$numberLong": "1672471729269"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198203971536",
		"killerId": "76561198144769087",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 134343.23,
			"y": 2878.4626,
			"z": 44310.246
		},
		"victimPosition": {
			"x": 158975.47,
			"y": 850.9935,
			"z": 28829.365
		},
		"killerVelocity": {
			"x": -197.14705,
			"y": 27.718813,
			"z": 199.46683
		},
		"victimVelocity": {
			"x": -13.688221,
			"y": -1.2706572,
			"z": 2.0131648
		}
	}, {
		"_id": {
			"$oid": "63afe64c109c9d48f459e9c3"
		},
		"id": "b5ba4108-b328-4000-9615-f4a4d9a81a74",
		"time": {
			"$numberLong": "1672472140044"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199096628107",
		"killerId": "76561198817950982",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 88949.445,
			"y": 2240.283,
			"z": 85508.89
		},
		"victimPosition": {
			"x": 81368.414,
			"y": 695.2948,
			"z": 92023.83
		},
		"killerVelocity": {
			"x": -365.41223,
			"y": -42.729004,
			"z": -85.05032
		},
		"victimVelocity": {
			"x": 32.95138,
			"y": 30.962868,
			"z": -162.30046
		}
	}, {
		"_id": {
			"$oid": "63aff4ddd0f1444f756ae261"
		},
		"id": "ba3258f4-48c3-4ad9-82e7-075728ff26f3",
		"time": {
			"$numberLong": "1672475869472"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198285294572",
		"killerId": "76561197971168124",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 77268.22,
			"y": 2406.2336,
			"z": 83928.09
		},
		"victimPosition": {
			"x": 70414.17,
			"y": 1349.5282,
			"z": 91977.81
		},
		"killerVelocity": {
			"x": -291.22934,
			"y": 133.66003,
			"z": 187.41457
		},
		"victimVelocity": {
			"x": 205.01158,
			"y": -18.158493,
			"z": 56.959663
		}
	}, {
		"_id": {
			"$oid": "63b01186d0f1444f756ae3e6"
		},
		"id": "0ac902bd-6853-4f55-8612-e10d664bb115",
		"time": {
			"$numberLong": "1672483206594"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197973156652",
		"killerId": "76561198987265620",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141032.9,
			"y": 3774.1785,
			"z": 46014.57
		},
		"victimPosition": {
			"x": 136400.1,
			"y": 2599.2156,
			"z": 52896.01
		},
		"killerVelocity": {
			"x": -296.5329,
			"y": -34.68159,
			"z": 277.8645
		},
		"victimVelocity": {
			"x": 57.347507,
			"y": -74.455666,
			"z": 263.399
		}
	}, {
		"_id": {
			"$oid": "63b02187d0f1444f756ae508"
		},
		"id": "f2a107c9-81aa-44f2-995c-5f064e23528a",
		"time": {
			"$numberLong": "1672487303489"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199306184758",
		"killerId": "76561199079370388",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 109837.484,
			"y": 1336.9736,
			"z": 66047.016
		},
		"victimPosition": {
			"x": 109872.42,
			"y": 1297.472,
			"z": 66256.53
		},
		"killerVelocity": {
			"x": -31.594433,
			"y": -26.716635,
			"z": 123.78133
		},
		"victimVelocity": {
			"x": 47.287563,
			"y": -22.675266,
			"z": 127.03434
		}
	}, {
		"_id": {
			"$oid": "63b022ead0f1444f756ae525"
		},
		"id": "73ad4aa0-d557-4844-a1f6-5e8a7d808406",
		"time": {
			"$numberLong": "1672487658016"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199306184758",
		"killerId": "76561199079370388",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 128766.9,
			"y": 2433.2197,
			"z": 50226.062
		},
		"victimPosition": {
			"x": 128387.25,
			"y": 2353.6165,
			"z": 51555.27
		},
		"killerVelocity": {
			"x": -363.5451,
			"y": -23.387043,
			"z": 27.079193
		},
		"victimVelocity": {
			"x": -268.06207,
			"y": 26.174925,
			"z": 163.8398
		}
	}, {
		"_id": {
			"$oid": "63b0258ad0f1444f756ae554"
		},
		"id": "4547a16a-0f78-4052-8bcb-1a37e3c512e1",
		"time": {
			"$numberLong": "1672488330343"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199306184758",
		"killerId": "76561199222868807",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 92478.81,
			"y": 2216.5193,
			"z": 73658.945
		},
		"victimPosition": {
			"x": 92507.81,
			"y": 1626.1423,
			"z": 73083.734
		},
		"killerVelocity": {
			"x": -250.57405,
			"y": 26.207047,
			"z": 219.98143
		},
		"victimVelocity": {
			"x": -5.5628777,
			"y": -72.394745,
			"z": -139.29936
		}
	}, {
		"_id": {
			"$oid": "63b02a03d0f1444f756ae59b"
		},
		"id": "c7936ffb-c700-44b0-9006-95b3749fe4d2",
		"time": {
			"$numberLong": "1672489475252"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198044700907",
		"killerId": "76561198211655924",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156098.11,
			"y": 4458.769,
			"z": 46717.38
		},
		"victimPosition": {
			"x": 146442.97,
			"y": 4508.565,
			"z": 45607.145
		},
		"killerVelocity": {
			"x": -305.49985,
			"y": 4.4547896,
			"z": -39.880367
		},
		"victimVelocity": {
			"x": 180.1821,
			"y": -45.22863,
			"z": -1.9569831
		}
	}, {
		"_id": {
			"$oid": "63b02cd5d0f1444f756ae5ce"
		},
		"id": "320517d3-c9ec-452e-b6e6-acd59ba528bf",
		"time": {
			"$numberLong": "1672490197888"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198963452943",
		"killerId": "76561198211655924",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116863.68,
			"y": 2755.42,
			"z": 70248.07
		},
		"victimPosition": {
			"x": 117019.63,
			"y": 3707.353,
			"z": 73357.234
		},
		"killerVelocity": {
			"x": 38.41605,
			"y": 3.85957,
			"z": 281.52142
		},
		"victimVelocity": {
			"x": 27.77754,
			"y": 231.41052,
			"z": -19.764147
		}
	}, {
		"_id": {
			"$oid": "63b02d1ed0f1444f756ae5d1"
		},
		"id": "775ab669-9c51-4b23-a1e9-adbf9b97f0cf",
		"time": {
			"$numberLong": "1672490270862"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199181048280",
		"killerId": "76561199059026829",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 112498.85,
			"y": 3120.8638,
			"z": 74382.18
		},
		"victimPosition": {
			"x": 111281.93,
			"y": 4217.465,
			"z": 76292.375
		},
		"killerVelocity": {
			"x": -81.33302,
			"y": 60.9649,
			"z": 151.57425
		},
		"victimVelocity": {
			"x": -24.979452,
			"y": 92.24298,
			"z": -261.9736
		}
	}, {
		"_id": {
			"$oid": "63b02d4bd0f1444f756ae5d4"
		},
		"id": "65fdf000-2e30-4551-b8fb-0108600190f7",
		"time": {
			"$numberLong": "1672490315283"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198963452943",
		"killerId": "76561199059026829",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 115153.09,
			"y": 1732.1829,
			"z": 74134.664
		},
		"victimPosition": {
			"x": 158562.06,
			"y": 855.2877,
			"z": 28343.5
		},
		"killerVelocity": {
			"x": 231.1656,
			"y": 3.1511652,
			"z": -138.95999
		},
		"victimVelocity": {
			"x": -8.318587,
			"y": 0.11979846,
			"z": 4.673234
		}
	}, {
		"_id": {
			"$oid": "63b03297d0f1444f756ae638"
		},
		"id": "4c882c8f-f586-40ba-890b-4537e3ee9067",
		"time": {
			"$numberLong": "1672491671205"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198044700907",
		"killerId": "76561198220324505",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160557.67,
			"y": 854.3458,
			"z": 28897.469
		},
		"victimPosition": {
			"x": 160741.72,
			"y": 853.6386,
			"z": 28761.229
		},
		"killerVelocity": {
			"x": 2.909648,
			"y": -0.008208722,
			"z": -2.09778
		},
		"victimVelocity": {
			"x": 0.27760306,
			"y": 0.0003437549,
			"z": 8.96734
		}
	}, {
		"_id": {
			"$oid": "63b032efd0f1444f756ae641"
		},
		"id": "a2e852d4-cd2b-4cf0-9b42-1bd7ed181923",
		"time": {
			"$numberLong": "1672491759652"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198220324505",
		"killerId": "76561199114490319",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 169192.03,
			"y": 2772.3955,
			"z": 27464.168
		},
		"victimPosition": {
			"x": 159559.48,
			"y": 2830.8682,
			"z": 28153.037
		},
		"killerVelocity": {
			"x": -377.06802,
			"y": -1.7873371,
			"z": -14.870584
		},
		"victimVelocity": {
			"x": 179.65143,
			"y": -22.382782,
			"z": -21.543947
		}
	}, {
		"_id": {
			"$oid": "63b04152d0f1444f756ae72e"
		},
		"id": "438310fa-8732-4dc0-83a8-320bdd0eb7f7",
		"time": {
			"$numberLong": "1672495442325"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198346457012",
		"killerId": "76561199086630740",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159937.31,
			"y": 854.4071,
			"z": 28737.857
		},
		"victimPosition": {
			"x": 159940.98,
			"y": 854.3386,
			"z": 28702.646
		},
		"killerVelocity": {
			"x": -0.0001793412,
			"y": 0.000116311014,
			"z": 0.000120563505
		},
		"victimVelocity": {
			"x": -23.022959,
			"y": -0.0008727759,
			"z": -8.26091
		}
	}, {
		"_id": {
			"$oid": "63b04158d0f1444f756ae730"
		},
		"id": "0d3f803f-4264-44c3-8db9-961216f0f746",
		"time": {
			"$numberLong": "1672495448006"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199086630740",
		"killerId": "76561198444855144",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160086.7,
			"y": 854.34784,
			"z": 28750.824
		},
		"victimPosition": {
			"x": 159937.55,
			"y": 854.40784,
			"z": 28736.947
		},
		"killerVelocity": {
			"x": -8.173287,
			"y": 0.013529569,
			"z": -0.880394
		},
		"victimVelocity": {
			"x": 0.07106456,
			"y": 0.00019614398,
			"z": -0.25667706
		}
	}, {
		"_id": {
			"$oid": "63b04257d0f1444f756ae741"
		},
		"id": "6f8f4f6a-b726-448f-ba73-c8bff1628056",
		"time": {
			"$numberLong": "1672495703358"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199086630740",
		"killerId": "76561198444855144",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 136212.25,
			"y": 3199.4194,
			"z": 60106.89
		},
		"victimPosition": {
			"x": 135253.8,
			"y": 2910.009,
			"z": 64585.1
		},
		"killerVelocity": {
			"x": -80.65555,
			"y": 0.016740628,
			"z": 324.02734
		},
		"victimVelocity": {
			"x": 312.7688,
			"y": -57.41827,
			"z": -35.84014
		}
	}, {
		"_id": {
			"$oid": "63b04d1ed0f1444f756ae808"
		},
		"id": "f86fe089-1a78-4f94-a9a6-d5ce92bc76b7",
		"time": {
			"$numberLong": "1672498462281"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198153445366",
		"killerId": "76561198044135607",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 134140.1,
			"y": 3139.3643,
			"z": 30080.22
		},
		"victimPosition": {
			"x": 133998.66,
			"y": 2622.6802,
			"z": 31631.266
		},
		"killerVelocity": {
			"x": 4.990893,
			"y": -105.62349,
			"z": 270.8147
		},
		"victimVelocity": {
			"x": 1.6566668,
			"y": 31.571323,
			"z": -329.1551
		}
	}, {
		"_id": {
			"$oid": "63b05d18d0f1444f756ae8ef"
		},
		"id": "434f53f5-ba98-4fd8-9545-04830ed62ec5",
		"time": {
			"$numberLong": "1672502552777"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198086069372",
		"killerId": "76561197990547381",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 39581.15,
			"y": 534.69794,
			"z": 74057.03
		},
		"victimPosition": {
			"x": 68261.1,
			"y": 1047.2528,
			"z": 106273.86
		},
		"killerVelocity": {
			"x": -151.85786,
			"y": -0.5485678,
			"z": -126.302345
		},
		"victimVelocity": {
			"x": -126.62717,
			"y": -31.164919,
			"z": 101.36854
		}
	}, {
		"_id": {
			"$oid": "63b087e8d0f1444f756aec41"
		},
		"id": "142d9aa9-4eba-4aaf-87ff-c0d4aadd0a56",
		"time": {
			"$numberLong": "1672513512929"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198336186833",
		"killerId": "76561199076478492",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161282.14,
			"y": 3233.8813,
			"z": 32147.582
		},
		"victimPosition": {
			"x": 165635.47,
			"y": 2460.4167,
			"z": 35469.406
		},
		"killerVelocity": {
			"x": -77.895996,
			"y": -52.153057,
			"z": 193.74261
		},
		"victimVelocity": {
			"x": -110.8332,
			"y": -12.006786,
			"z": -89.19554
		}
	}, {
		"_id": {
			"$oid": "63b088ded0f1444f756aec4a"
		},
		"id": "60e5a28a-66d5-4e22-8c7c-5d7ff2726fea",
		"time": {
			"$numberLong": "1672513758642"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198336186833",
		"killerId": "76561199076478492",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 168403.31,
			"y": 2146.8955,
			"z": 32785.258
		},
		"victimPosition": {
			"x": 163204.98,
			"y": 2055.701,
			"z": 33694.008
		},
		"killerVelocity": {
			"x": -109.81967,
			"y": -62.846672,
			"z": -132.36047
		},
		"victimVelocity": {
			"x": 48.3434,
			"y": -62.844017,
			"z": -115.22057
		}
	}, {
		"_id": {
			"$oid": "63b0922bd0f1444f756aed0e"
		},
		"id": "c13fd57e-e818-4e3c-b64c-7e5ac2ea862f",
		"time": {
			"$numberLong": "1672516139269"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198136011937",
		"killerId": "76561199230551083",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153960.8,
			"y": 1311.2261,
			"z": 30505.512
		},
		"victimPosition": {
			"x": 148212.38,
			"y": 1869.3993,
			"z": 31513.43
		},
		"killerVelocity": {
			"x": -309.50696,
			"y": 36.134666,
			"z": 53.097034
		},
		"victimVelocity": {
			"x": -203.02252,
			"y": 72.52936,
			"z": 86.21738
		}
	}, {
		"_id": {
			"$oid": "63b09348d0f1444f756aed23"
		},
		"id": "10159b61-34dd-4031-be13-e94d153dbe71",
		"time": {
			"$numberLong": "1672516424670"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199306184758",
		"killerId": "76561198136011937",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 99132.34,
			"y": 1850.4083,
			"z": 46675.477
		},
		"victimPosition": {
			"x": 99859.62,
			"y": 1923.5508,
			"z": 44720.33
		},
		"killerVelocity": {
			"x": 97.892265,
			"y": 19.267956,
			"z": -309.4149
		},
		"victimVelocity": {
			"x": 352.60706,
			"y": -173.4318,
			"z": 44.045055
		}
	}, {
		"_id": {
			"$oid": "63b09677d0f1444f756aed73"
		},
		"id": "0ad21115-3567-406e-ab0c-9a4de7ab8be1",
		"time": {
			"$numberLong": "1672517239105"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199182992305",
		"killerId": "76561198135848957",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160007.95,
			"y": 854.34,
			"z": 28721.184
		},
		"victimPosition": {
			"x": 159957.12,
			"y": 854.383,
			"z": 28707.744
		},
		"killerVelocity": {
			"x": -56.493694,
			"y": 0.020560525,
			"z": -16.87903
		},
		"victimVelocity": {
			"x": 5.0935755,
			"y": 0.08065083,
			"z": -4.001662
		}
	}, {
		"_id": {
			"$oid": "63b096f5d0f1444f756aed7f"
		},
		"id": "9bff5d41-37cd-4bf6-9dbf-c1d928b0aad4",
		"time": {
			"$numberLong": "1672517365600"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199182992305",
		"killerId": "76561198135848957",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150443.34,
			"y": 2898.2483,
			"z": 35380.94
		},
		"victimPosition": {
			"x": 161520.52,
			"y": 860.9605,
			"z": 29189.377
		},
		"killerVelocity": {
			"x": -249.72304,
			"y": 43.135586,
			"z": 220.84192
		},
		"victimVelocity": {
			"x": 0.12627348,
			"y": -5.5698533,
			"z": -0.09062639
		}
	}, {
		"_id": {
			"$oid": "63b0a2ddd0f1444f756aeec1"
		},
		"id": "49c1ac52-b643-43c5-a2e0-7bb0647bfcda",
		"time": {
			"$numberLong": "1672520413691"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199291872420",
		"killerId": "76561199157478873",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 187309.28,
			"y": 3884.062,
			"z": 38637.027
		},
		"victimPosition": {
			"x": 187548.78,
			"y": 4014.712,
			"z": 39672.582
		},
		"killerVelocity": {
			"x": 121.80224,
			"y": 31.512466,
			"z": 337.5327
		},
		"victimVelocity": {
			"x": -195.47687,
			"y": 19.58126,
			"z": 125.88157
		}
	}, {
		"_id": {
			"$oid": "63b0c07ad0f1444f756af0a1"
		},
		"id": "c09a3524-112b-4e54-aa56-1166880e82c5",
		"time": {
			"$numberLong": "1672527994413"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198873835184",
		"killerId": "76561198886592100",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 148146.11,
			"y": 2177.9045,
			"z": 33910.234
		},
		"victimPosition": {
			"x": 144488.64,
			"y": 2238.2185,
			"z": 38365.33
		},
		"killerVelocity": {
			"x": -207.59497,
			"y": 18.248985,
			"z": 253.81679
		},
		"victimVelocity": {
			"x": 138.01155,
			"y": -187.4083,
			"z": 106.74572
		}
	}, {
		"_id": {
			"$oid": "63b0c98fd0f1444f756af135"
		},
		"id": "a7cd038f-a1e6-48b1-bf5d-be2e28ab1821",
		"time": {
			"$numberLong": "1672530319324"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199115500498",
		"killerId": "76561198049788660",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 105736.74,
			"y": 2668.8174,
			"z": 56565.273
		},
		"victimPosition": {
			"x": 101706.55,
			"y": 1488.4386,
			"z": 62419.316
		},
		"killerVelocity": {
			"x": -227.35057,
			"y": -68.08939,
			"z": 345.6425
		},
		"victimVelocity": {
			"x": -211.56056,
			"y": -26.690872,
			"z": 166.13155
		}
	}, {
		"_id": {
			"$oid": "63b0f313d0f1444f756af42d"
		},
		"id": "984b7420-f470-4a03-976e-19cef9153ece",
		"time": {
			"$numberLong": "1672540947784"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198188342907",
		"killerId": "76561199209664767",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160830.94,
			"y": 1410.793,
			"z": 28513.674
		},
		"victimPosition": {
			"x": 152834.27,
			"y": 1569.9989,
			"z": 25948.078
		},
		"killerVelocity": {
			"x": -378.42078,
			"y": -29.393553,
			"z": -64.278854
		},
		"victimVelocity": {
			"x": 73.50399,
			"y": -39.297573,
			"z": 74.95865
		}
	}, {
		"_id": {
			"$oid": "63b10359d0f1444f756af57d"
		},
		"id": "86e6fa9b-58bf-44fa-944f-99a121e70846",
		"time": {
			"$numberLong": "1672545113833"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198904076145",
		"killerId": "76561199453452357",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155229.7,
			"y": 1516.0117,
			"z": 30672.338
		},
		"victimPosition": {
			"x": 153372.7,
			"y": 1683.9701,
			"z": 32376.43
		},
		"killerVelocity": {
			"x": -304.7862,
			"y": 25.938295,
			"z": 165.21599
		},
		"victimVelocity": {
			"x": -134.77051,
			"y": -30.39083,
			"z": 85.99651
		}
	}, {
		"_id": {
			"$oid": "63b10c0ed0f1444f756af62f"
		},
		"id": "64d680cb-1a95-41d9-9be3-43416085e74b",
		"time": {
			"$numberLong": "1672547342470"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199084389693",
		"killerId": "76561199195103956",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 119450.8,
			"y": 4227.5664,
			"z": 68267.16
		},
		"victimPosition": {
			"x": 121701.555,
			"y": 1647.9564,
			"z": 66256.34
		},
		"killerVelocity": {
			"x": -301.87616,
			"y": -19.434294,
			"z": 247.7681
		},
		"victimVelocity": {
			"x": -2.009443,
			"y": -53.45413,
			"z": -62.451263
		}
	}, {
		"_id": {
			"$oid": "63b11b31d0f1444f756af746"
		},
		"id": "9817de9e-8861-4cb6-a639-44bb9dde08e8",
		"time": {
			"$numberLong": "1672551217391"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199119586237",
		"killerId": "76561199367064723",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 119127.98,
			"y": 1859.2695,
			"z": 62976.566
		},
		"victimPosition": {
			"x": 120866.77,
			"y": 1901.7023,
			"z": 61444.97
		},
		"killerVelocity": {
			"x": 247.8804,
			"y": -5.999367,
			"z": -185.84326
		},
		"victimVelocity": {
			"x": 256.76193,
			"y": 0.0034737661,
			"z": -241.609
		}
	}, {
		"_id": {
			"$oid": "63b146f2d0f1444f756afa4d"
		},
		"id": "5dc86f91-dc48-476f-8ca8-c2593881ebf8",
		"time": {
			"$numberLong": "1672562418674"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199282100690",
		"killerId": "76561199450620114",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157059.08,
			"y": 2287.8755,
			"z": 43544.7
		},
		"victimPosition": {
			"x": 155541.06,
			"y": 1659.6273,
			"z": 44020.297
		},
		"killerVelocity": {
			"x": -302.89194,
			"y": -138.92032,
			"z": 206.32428
		},
		"victimVelocity": {
			"x": -248.11765,
			"y": -112.460625,
			"z": -149.9372
		}
	}, {
		"_id": {
			"$oid": "63b1558fd0f1444f756afb3f"
		},
		"id": "4d7f2717-a738-44ea-861a-e55272147f23",
		"time": {
			"$numberLong": "1672566159159"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197973156652",
		"killerId": "76561198101415037",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 135666.47,
			"y": 2048.6199,
			"z": 40259.48
		},
		"victimPosition": {
			"x": 134160.44,
			"y": 1682.4834,
			"z": 40620.66
		},
		"killerVelocity": {
			"x": -366.2028,
			"y": 1.3338115,
			"z": 134.90991
		},
		"victimVelocity": {
			"x": 218.7323,
			"y": -35.863277,
			"z": -239.6948
		}
	}, {
		"_id": {
			"$oid": "63b16149d0f1444f756afbee"
		},
		"id": "3c752e2d-5dcf-426d-bed5-d8c16c0b0202",
		"time": {
			"$numberLong": "1672569161696"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199002529503",
		"killerId": "76561199193053454",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145341.47,
			"y": 3894.3936,
			"z": 62288.19
		},
		"victimPosition": {
			"x": 138379.28,
			"y": 2523.3523,
			"z": 72352.73
		},
		"killerVelocity": {
			"x": -255.62714,
			"y": 7.339168,
			"z": 316.5708
		},
		"victimVelocity": {
			"x": 92.26993,
			"y": -24.533161,
			"z": -174.99834
		}
	}, {
		"_id": {
			"$oid": "63b1632fd0f1444f756afbff"
		},
		"id": "6bfc5d2a-afe6-4518-a5c2-9e008f1a9b98",
		"time": {
			"$numberLong": "1672569647859"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198170210774",
		"killerId": "76561199193053454",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 80461.22,
			"y": 1575.4718,
			"z": 85877.73
		},
		"victimPosition": {
			"x": 88263.5,
			"y": 2024.1033,
			"z": 81371.164
		},
		"killerVelocity": {
			"x": -297.32236,
			"y": 15.286263,
			"z": 58.094795
		},
		"victimVelocity": {
			"x": 204.46759,
			"y": -66.42176,
			"z": -62.063362
		}
	}, {
		"_id": {
			"$oid": "63b1b278d0f1444f756b00f6"
		},
		"id": "fde5910b-8cf7-4451-a2cb-cdb455800ce1",
		"time": {
			"$numberLong": "1672589944352"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199119586237",
		"killerId": "76561198139660807",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157539.5,
			"y": 6066.5283,
			"z": 32102.045
		},
		"victimPosition": {
			"x": 152212.73,
			"y": 11745.437,
			"z": 43556.63
		},
		"killerVelocity": {
			"x": -82.28127,
			"y": 40.298004,
			"z": 98.86168
		},
		"victimVelocity": {
			"x": -97.35008,
			"y": -121.238976,
			"z": 98.30593
		}
	}, {
		"_id": {
			"$oid": "63b1bc7ad0f1444f756b01ec"
		},
		"id": "f8cc59ea-b389-42b1-99e2-e7d636b113ac",
		"time": {
			"$numberLong": "1672592506570"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198126285727",
		"killerId": "76561198874652685",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 127183.484,
			"y": 9036.531,
			"z": 65038.01
		},
		"victimPosition": {
			"x": 123823.1,
			"y": 8884.005,
			"z": 71236.46
		},
		"killerVelocity": {
			"x": -199.18073,
			"y": -8.447631,
			"z": 335.23608
		},
		"victimVelocity": {
			"x": -136.41951,
			"y": -126.48779,
			"z": 308.00427
		}
	}, {
		"_id": {
			"$oid": "63b1bd98d0f1444f756b020a"
		},
		"id": "4d0bc777-fca4-4f51-b053-52051bc75de6",
		"time": {
			"$numberLong": "1672592792866"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198099952573",
		"killerId": "76561198126285727",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 101686.46,
			"y": 5155.5723,
			"z": 95669.54
		},
		"victimPosition": {
			"x": 88144.88,
			"y": 1080.1072,
			"z": 103979.19
		},
		"killerVelocity": {
			"x": -276.03583,
			"y": -189.74664,
			"z": 303.35928
		},
		"victimVelocity": {
			"x": 145.87666,
			"y": 3.2796395,
			"z": 123.29551
		}
	}, {
		"_id": {
			"$oid": "63b1d5e5d0f1444f756b03fb"
		},
		"id": "219e1df2-624b-481d-a587-ef0581f72a4c",
		"time": {
			"$numberLong": "1672599013956"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198126285727",
		"killerId": "76561198236691900",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 119706.63,
			"y": 1896.876,
			"z": 74704.336
		},
		"victimPosition": {
			"x": 113863.79,
			"y": 2046.111,
			"z": 78949.17
		},
		"killerVelocity": {
			"x": -317.4853,
			"y": -4.9486694,
			"z": 230.50748
		},
		"victimVelocity": {
			"x": 68.573814,
			"y": -11.274531,
			"z": 75.58448
		}
	}, {
		"_id": {
			"$oid": "63b1e3c4d0f1444f756b0529"
		},
		"id": "e91a281b-093d-4ad4-8a8d-f4db6d373c3b",
		"time": {
			"$numberLong": "1672602564868"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199174992284",
		"killerId": "76561198155208882",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 95525.69,
			"y": 5295.6465,
			"z": 79621.51
		},
		"victimPosition": {
			"x": 83823.75,
			"y": 1766.9142,
			"z": 85151.16
		},
		"killerVelocity": {
			"x": -374.0804,
			"y": -97.15048,
			"z": 219.76404
		},
		"victimVelocity": {
			"x": -25.850266,
			"y": -50.228493,
			"z": 211.4554
		}
	}, {
		"_id": {
			"$oid": "63b1e80bd0f1444f756b0582"
		},
		"id": "92458fa6-9afc-44ce-a735-2ca00b98d4b7",
		"time": {
			"$numberLong": "1672603659637"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197992380343",
		"killerId": "76561198016862462",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 101058.31,
			"y": 1400.4598,
			"z": 45715.87
		},
		"victimPosition": {
			"x": 98288.445,
			"y": 929.2529,
			"z": 44481.9
		},
		"killerVelocity": {
			"x": -179.6659,
			"y": -57.915924,
			"z": -206.60135
		},
		"victimVelocity": {
			"x": -184.13777,
			"y": 61.309708,
			"z": 15.400503
		}
	}, {
		"_id": {
			"$oid": "63b207e0d0f1444f756b07e5"
		},
		"id": "b8705f53-cfb5-4d33-b27d-c877a836c48c",
		"time": {
			"$numberLong": "1672611808033"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199442641427",
		"killerId": "76561199452086913",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 81691.945,
			"y": 2748.699,
			"z": 72348.86
		},
		"victimPosition": {
			"x": 80199.48,
			"y": 3029.933,
			"z": 71961.08
		},
		"killerVelocity": {
			"x": -355.51343,
			"y": 92.409904,
			"z": -38.037807
		},
		"victimVelocity": {
			"x": 190.72229,
			"y": -44.98047,
			"z": -145.9473
		}
	}, {
		"_id": {
			"$oid": "63b21051d0f1444f756b08a8"
		},
		"id": "2d7924a7-336a-4c49-bee6-6b30c87b8ca8",
		"time": {
			"$numberLong": "1672613969248"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199442641427",
		"killerId": "76561198838708761",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 64243.25,
			"y": 1539.627,
			"z": 87195.695
		},
		"victimPosition": {
			"x": 63880.86,
			"y": 1296.0454,
			"z": 87400.72
		},
		"killerVelocity": {
			"x": -28.11324,
			"y": -110.581635,
			"z": 243.2191
		},
		"victimVelocity": {
			"x": 31.962507,
			"y": 55.174526,
			"z": -324.94174
		}
	}, {
		"_id": {
			"$oid": "63b21fc3d0f1444f756b09d6"
		},
		"id": "f02f608c-3d4f-464c-8e53-3c5f2345a3eb",
		"time": {
			"$numberLong": "1672617923818"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198873733478",
		"killerId": "76561198982932902",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 136020.66,
			"y": 1780.1938,
			"z": 60166.617
		},
		"victimPosition": {
			"x": 135874.31,
			"y": 2501.3755,
			"z": 61023.336
		},
		"killerVelocity": {
			"x": 359.60248,
			"y": 4.874196,
			"z": -30.852598
		},
		"victimVelocity": {
			"x": 189.15141,
			"y": -61.2774,
			"z": -9.111161
		}
	}, {
		"_id": {
			"$oid": "63b22a99d0f1444f756b0ab0"
		},
		"id": "a3ec264c-0f3b-4e05-81ed-9bc62afb4e47",
		"time": {
			"$numberLong": "1672620697977"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198812890887",
		"killerId": "76561199218481196",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 90309.12,
			"y": 2772.4045,
			"z": 90794.95
		},
		"victimPosition": {
			"x": 92608.266,
			"y": 695.4275,
			"z": 94190.555
		},
		"killerVelocity": {
			"x": -265.74554,
			"y": 17.42673,
			"z": 276.42783
		},
		"victimVelocity": {
			"x": 165.81657,
			"y": -48.97115,
			"z": 64.24017
		}
	}, {
		"_id": {
			"$oid": "63b22f60d0f1444f756b0b2e"
		},
		"id": "5e4de7a1-fa4b-4f92-8a3f-389d2e3e58f2",
		"time": {
			"$numberLong": "1672621920275"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198432860464",
		"killerId": "76561199453475771",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131139.58,
			"y": 5106.901,
			"z": 57155.28
		},
		"victimPosition": {
			"x": 127304.18,
			"y": 5487.736,
			"z": 63216.363
		},
		"killerVelocity": {
			"x": -226.00012,
			"y": 26.178665,
			"z": 345.1652
		},
		"victimVelocity": {
			"x": 179.51773,
			"y": 26.711147,
			"z": 100.31081
		}
	}, {
		"_id": {
			"$oid": "63b238f0d0f1444f756b0c09"
		},
		"id": "8f480406-e3e2-4fe6-bd0e-72bdc2eb93ca",
		"time": {
			"$numberLong": "1672624368622"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199010935024",
		"killerId": "76561198151068299",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 86469.875,
			"y": 1443.7056,
			"z": 89815.92
		},
		"victimPosition": {
			"x": 86604.32,
			"y": 1480.294,
			"z": 89298.586
		},
		"killerVelocity": {
			"x": 147.52115,
			"y": -28.945292,
			"z": -306.81332
		},
		"victimVelocity": {
			"x": -31.786755,
			"y": -57.85164,
			"z": -223.52254
		}
	}, {
		"_id": {
			"$oid": "63b23fdfd0f1444f756b0ca6"
		},
		"id": "00b1bca2-9543-4f2a-b911-5bd95f970ff6",
		"time": {
			"$numberLong": "1672626143699"
		},
		"victimAircraft": 1,
		"killerAircraft": 4,
		"weapon": 5,
		"victimId": "76561198151068299",
		"killerId": "76561198373926536",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 147442.22,
			"y": 2187.9536,
			"z": 47313.625
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -4.87875,
			"y": -105.262634,
			"z": 243.58723
		}
	}, {
		"_id": {
			"$oid": "63b24de5d0f1444f756b0dd8"
		},
		"id": "7910830a-038d-4d20-955d-beddd404eac0",
		"time": {
			"$numberLong": "1672629733077"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198963195327",
		"killerId": "76561199106924287",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151761.86,
			"y": 3073.5378,
			"z": 34761.28
		},
		"victimPosition": {
			"x": 150431.77,
			"y": 3385.591,
			"z": 36256.76
		},
		"killerVelocity": {
			"x": -234.58481,
			"y": 79.06858,
			"z": 216.44205
		},
		"victimVelocity": {
			"x": -107.39811,
			"y": 40.460472,
			"z": 281.0167
		}
	}, {
		"_id": {
			"$oid": "63b258e0d0f1444f756b0ed1"
		},
		"id": "25594020-571a-492d-86e7-2984cb90899f",
		"time": {
			"$numberLong": "1672632544804"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198151068299",
		"killerId": "76561199151088278",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 73361.945,
			"y": 799.89185,
			"z": 106171.62
		},
		"victimPosition": {
			"x": 73257.445,
			"y": 538.9066,
			"z": 105867.69
		},
		"killerVelocity": {
			"x": 111.509346,
			"y": -7.6593843,
			"z": -30.777184
		},
		"victimVelocity": {
			"x": -184.44441,
			"y": -46.361565,
			"z": 66.71631
		}
	}, {
		"_id": {
			"$oid": "63b2643bd0f1444f756b0fc2"
		},
		"id": "15f6373c-3aa4-42cd-b20f-98c8c5dab92e",
		"time": {
			"$numberLong": "1672635451467"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198106165294",
		"killerId": "76561199139292291",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 147542.86,
			"y": 1483.1533,
			"z": 34237.81
		},
		"victimPosition": {
			"x": 146504.5,
			"y": 1149.8916,
			"z": 34562.652
		},
		"killerVelocity": {
			"x": -328.64944,
			"y": -91.24799,
			"z": 129.02193
		},
		"victimVelocity": {
			"x": -320.0843,
			"y": -58.754223,
			"z": 55.284363
		}
	}, {
		"_id": {
			"$oid": "63b26d03d0f1444f756b10a2"
		},
		"id": "6c4b8089-69a7-469e-a701-dab29d354e42",
		"time": {
			"$numberLong": "1672637699011"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197985157646",
		"killerId": "76561199154734223",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 77270.266,
			"y": 1189.7074,
			"z": 89828.055
		},
		"victimPosition": {
			"x": 75722.24,
			"y": 548.98175,
			"z": 94227.2
		},
		"killerVelocity": {
			"x": 161.09155,
			"y": 82.85703,
			"z": -284.67404
		},
		"victimVelocity": {
			"x": 10.203447,
			"y": 0.9217703,
			"z": -24.687164
		}
	}, {
		"_id": {
			"$oid": "63b2abe0d0f1444f756b13a7"
		},
		"id": "af3dbd02-eaf2-42a2-8cde-a5a25754f97d",
		"time": {
			"$numberLong": "1672653792026"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199154734223",
		"killerId": "76561199010731050",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 73162.6,
			"y": 1713.4104,
			"z": 97538.81
		},
		"victimPosition": {
			"x": 75047.29,
			"y": 1162.4137,
			"z": 93572.94
		},
		"killerVelocity": {
			"x": -230.75859,
			"y": 2.132621,
			"z": 306.77017
		},
		"victimVelocity": {
			"x": -41.031635,
			"y": -67.42595,
			"z": -16.687605
		}
	}, {
		"_id": {
			"$oid": "63b2bfc6d0f1444f756b1489"
		},
		"id": "0c21d567-2ba2-486d-a701-da87637e80c2",
		"time": {
			"$numberLong": "1672658886991"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199269035703",
		"killerId": "76561197966981367",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 132078.86,
			"y": 2430.2754,
			"z": 54686.766
		},
		"victimPosition": {
			"x": 131671.19,
			"y": 2349.2734,
			"z": 55226.625
		},
		"killerVelocity": {
			"x": -196.184,
			"y": -22.967838,
			"z": 212.92297
		},
		"victimVelocity": {
			"x": -241.97853,
			"y": -39.640835,
			"z": 220.72404
		}
	}, {
		"_id": {
			"$oid": "63b3336858ca2f531d08ab6c"
		},
		"id": "4bf283d3-0e36-47e9-ad09-627b6125184d",
		"time": {
			"$numberLong": "1672688488562"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199306184758",
		"killerId": "76561199389899023",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145161.52,
			"y": 2918.2275,
			"z": 28325.426
		},
		"victimPosition": {
			"x": 143971.77,
			"y": 988.34717,
			"z": 30374.506
		},
		"killerVelocity": {
			"x": -214.26228,
			"y": -156.59404,
			"z": 310.78876
		},
		"victimVelocity": {
			"x": 311.54822,
			"y": 15.550896,
			"z": -167.8266
		}
	}, {
		"_id": {
			"$oid": "63b3670058ca2f531d08ad06"
		},
		"id": "9cf47712-8925-4e8b-8c29-775d2a35edb6",
		"time": {
			"$numberLong": "1672701696066"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198086702732",
		"killerId": "76561198037156154",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160169.66,
			"y": 854.3352,
			"z": 28777.086
		},
		"victimPosition": {
			"x": 159951.23,
			"y": 854.3799,
			"z": 28716.422
		},
		"killerVelocity": {
			"x": -49.35058,
			"y": -0.01712215,
			"z": -12.769231
		},
		"victimVelocity": {
			"x": 6.251381,
			"y": -0.15547031,
			"z": -5.0556226
		}
	}, {
		"_id": {
			"$oid": "63b373a658ca2f531d08ae3a"
		},
		"id": "027f4ce9-6310-4510-afed-fbe36469f97a",
		"time": {
			"$numberLong": "1672704934214"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199106825805",
		"killerId": "76561198179869018",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 167992.92,
			"y": 2685.9502,
			"z": 27072.025
		},
		"victimPosition": {
			"x": 167858.84,
			"y": 2513.053,
			"z": 28041.914
		},
		"killerVelocity": {
			"x": 1.6644161,
			"y": 10.683791,
			"z": 225.21791
		},
		"victimVelocity": {
			"x": -71.46131,
			"y": -77.05375,
			"z": 56.002815
		}
	}, {
		"_id": {
			"$oid": "63b374b058ca2f531d08ae56"
		},
		"id": "dd62d6f7-164a-40d3-97ec-b0382fbfd8b9",
		"time": {
			"$numberLong": "1672705200100"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198979194174",
		"killerId": "76561198179869018",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 164011.97,
			"y": 1081.2244,
			"z": 29374.482
		},
		"victimPosition": {
			"x": 157620.19,
			"y": 1640.8522,
			"z": 29431.764
		},
		"killerVelocity": {
			"x": -134.26187,
			"y": -10.282442,
			"z": -17.62358
		},
		"victimVelocity": {
			"x": 118.75358,
			"y": 15.056058,
			"z": -6.5259733
		}
	}, {
		"_id": {
			"$oid": "63b3af4258ca2f531d08b38c"
		},
		"id": "cb02b361-f8a9-43d5-adca-25b64de697fe",
		"time": {
			"$numberLong": "1672720194474"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198005339534",
		"killerId": "76561199239980022",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 146843.25,
			"y": 3678.4355,
			"z": 37407.906
		},
		"victimPosition": {
			"x": 146029.81,
			"y": 3768.1775,
			"z": 38484.8
		},
		"killerVelocity": {
			"x": -200.19472,
			"y": 26.177248,
			"z": 307.98297
		},
		"victimVelocity": {
			"x": -166.71243,
			"y": 12.406501,
			"z": 65.31485
		}
	}, {
		"_id": {
			"$oid": "63b3be5758ca2f531d08b525"
		},
		"id": "cd54d588-4498-41c6-a28b-2a6ca72040b2",
		"time": {
			"$numberLong": "1672724055875"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198852669261",
		"killerId": "76561199454067837",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160254.52,
			"y": 854.2729,
			"z": 28783.367
		},
		"victimPosition": {
			"x": 160013.56,
			"y": 854.4088,
			"z": 28682.346
		},
		"killerVelocity": {
			"x": -17.377613,
			"y": 0.057913177,
			"z": -6.7652555
		},
		"victimVelocity": {
			"x": -1.6705374,
			"y": -0.00011854619,
			"z": -5.9304376
		}
	}, {
		"_id": {
			"$oid": "63b3be6c58ca2f531d08b52c"
		},
		"id": "a60f6a57-24e6-4802-a470-3abe26a8188e",
		"time": {
			"$numberLong": "1672724076820"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198041769443",
		"killerId": "76561199454067837",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160085.81,
			"y": 854.33105,
			"z": 28707.592
		},
		"victimPosition": {
			"x": 159736.95,
			"y": 854.18115,
			"z": 28368.121
		},
		"killerVelocity": {
			"x": -6.8254356,
			"y": 0.08420437,
			"z": -5.706497
		},
		"victimVelocity": {
			"x": -68.711136,
			"y": 1.5177159,
			"z": -25.017769
		}
	}, {
		"_id": {
			"$oid": "63b3c40b58ca2f531d08b5ad"
		},
		"id": "7119b356-f589-46ef-9b19-9a50f8dc9765",
		"time": {
			"$numberLong": "1672725515981"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198075509083",
		"killerId": "76561198298699368",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 130632,
			"y": 2651.2507,
			"z": 43384.926
		},
		"victimPosition": {
			"x": 129950.04,
			"y": 2253.2554,
			"z": 45476.574
		},
		"killerVelocity": {
			"x": -253.71042,
			"y": -17.815252,
			"z": 296.01172
		},
		"victimVelocity": {
			"x": -68.96891,
			"y": -85.39949,
			"z": 249.84918
		}
	}, {
		"_id": {
			"$oid": "63b3c46758ca2f531d08b5b3"
		},
		"id": "0c752722-33d8-400f-8b41-ae4de065fb54",
		"time": {
			"$numberLong": "1672725607918"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197965142204",
		"killerId": "76561198298699368",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 96884.086,
			"y": 1399.7054,
			"z": 47546.25
		},
		"victimPosition": {
			"x": 94339.72,
			"y": 959.82947,
			"z": 46627.133
		},
		"killerVelocity": {
			"x": -376.416,
			"y": -28.642643,
			"z": -82.17321
		},
		"victimVelocity": {
			"x": 219.86336,
			"y": 36.842144,
			"z": -165.87502
		}
	}, {
		"_id": {
			"$oid": "63b3c77d58ca2f531d08b5fe"
		},
		"id": "bcc38f9e-3b32-4b7d-a710-6fba70c7d34d",
		"time": {
			"$numberLong": "1672726397624"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198075509083",
		"killerId": "76561198085230956",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 131926.22,
			"y": 2737.1074,
			"z": 49937.05
		},
		"victimPosition": {
			"x": 129678.03,
			"y": 2669.201,
			"z": 50656.348
		},
		"killerVelocity": {
			"x": -269.64197,
			"y": -3.727503,
			"z": 109.12733
		},
		"victimVelocity": {
			"x": -223.36731,
			"y": -57.932472,
			"z": -137.75386
		}
	}, {
		"_id": {
			"$oid": "63b3dfd258ca2f531d08b7bb"
		},
		"id": "c5e49eb5-ed17-4d4a-b7c6-fcc2c535fb70",
		"time": {
			"$numberLong": "1672732626796"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198130040385",
		"killerId": "76561197985512589",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153684.33,
			"y": 1396.1448,
			"z": 28277.938
		},
		"victimPosition": {
			"x": 150267.73,
			"y": 1193.5353,
			"z": 28812.633
		},
		"killerVelocity": {
			"x": -295.6153,
			"y": -38.120464,
			"z": 45.898716
		},
		"victimVelocity": {
			"x": 96.42185,
			"y": -34.48106,
			"z": -221.7611
		}
	}, {
		"_id": {
			"$oid": "63b3dff458ca2f531d08b7bf"
		},
		"id": "947c872a-dbd4-4ddb-9a10-c509ede553ad",
		"time": {
			"$numberLong": "1672732660116"
		},
		"victimAircraft": 2,
		"killerAircraft": 4,
		"weapon": 4,
		"victimId": "76561198147213935",
		"killerId": "76561197998846985",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimPosition": {
			"x": 160249.31,
			"y": 853.74036,
			"z": 28589.412
		},
		"killerVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"victimVelocity": {
			"x": -0.7057702,
			"y": 1.9422922,
			"z": 4.5895476
		}
	}, {
		"_id": {
			"$oid": "63b4099258ca2f531d08b993"
		},
		"id": "10fd8516-9d26-4be2-9df3-54170bb3919a",
		"time": {
			"$numberLong": "1672743314237"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199013478693",
		"killerId": "76561198373021421",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 163425.5,
			"y": 1361.5048,
			"z": 29170.82
		},
		"victimPosition": {
			"x": 163585.27,
			"y": 1358.7516,
			"z": 29201.04
		},
		"killerVelocity": {
			"x": 182.62349,
			"y": -23.249323,
			"z": 36.079544
		},
		"victimVelocity": {
			"x": 176.13821,
			"y": -31.376308,
			"z": 48.630016
		}
	}, {
		"_id": {
			"$oid": "63b409ed58ca2f531d08b99e"
		},
		"id": "01317bce-6730-4c27-aa29-308f79dfede0",
		"time": {
			"$numberLong": "1672743405415"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198373021421",
		"killerId": "76561199389899023",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162586.62,
			"y": 1615.2194,
			"z": 27695.605
		},
		"victimPosition": {
			"x": 161147.34,
			"y": 1684.5374,
			"z": 28287.81
		},
		"killerVelocity": {
			"x": -261.42767,
			"y": -8.063257,
			"z": 77.62265
		},
		"victimVelocity": {
			"x": 150.1258,
			"y": -119.95432,
			"z": 2.6134903
		}
	}, {
		"_id": {
			"$oid": "63b40a2258ca2f531d08b9a3"
		},
		"id": "d967a402-e4c5-4bec-93b1-a124023722a3",
		"time": {
			"$numberLong": "1672743458427"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561199013478693",
		"killerId": "76561197994101160",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158002.6,
			"y": 1062.7991,
			"z": 28637.617
		},
		"victimPosition": {
			"x": 158602.56,
			"y": 854.55457,
			"z": 28177.928
		},
		"killerVelocity": {
			"x": 123.11931,
			"y": -20.851227,
			"z": -70.156845
		},
		"victimVelocity": {
			"x": 120.24102,
			"y": -60.87264,
			"z": -58.011967
		}
	}, {
		"_id": {
			"$oid": "63b40a2b58ca2f531d08b9a5"
		},
		"id": "c677995e-f924-4c07-8a17-cbb6bdb50810",
		"time": {
			"$numberLong": "1672743467326"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197994101160",
		"killerId": "76561199389899023",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156836.78,
			"y": 2095.4485,
			"z": 32426.607
		},
		"victimPosition": {
			"x": 159081.77,
			"y": 976.14325,
			"z": 29192.324
		},
		"killerVelocity": {
			"x": 118.28696,
			"y": -78.07325,
			"z": -259.30154
		},
		"victimVelocity": {
			"x": 113.81079,
			"y": 12.726443,
			"z": 124.39088
		}
	}, {
		"_id": {
			"$oid": "63b40ae358ca2f531d08b9ac"
		},
		"id": "35c8bc43-9328-4243-8c44-d6b21affcc7c",
		"time": {
			"$numberLong": "1672743651810"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198373021421",
		"killerId": "76561199013478693",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 172196.08,
			"y": 2150.8992,
			"z": 34805.43
		},
		"victimPosition": {
			"x": 172186.08,
			"y": 2150.2966,
			"z": 34809.47
		},
		"killerVelocity": {
			"x": -221.9791,
			"y": 69.051125,
			"z": 35.154537
		},
		"victimVelocity": {
			"x": -224.1598,
			"y": 28.082611,
			"z": 46.81356
		}
	}, {
		"_id": {
			"$oid": "63b4648c9677db3b15714649"
		},
		"id": "15b25fbf-9b67-4854-a59c-b83746080c5c",
		"time": {
			"$numberLong": "1672766604490"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199088684378",
		"killerId": "76561199013156543",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155546.25,
			"y": 1921.2913,
			"z": 40252.68
		},
		"victimPosition": {
			"x": 154679.08,
			"y": 1465.3281,
			"z": 41346.867
		},
		"killerVelocity": {
			"x": -253.5767,
			"y": 24.671524,
			"z": 252.22487
		},
		"victimVelocity": {
			"x": -45.90427,
			"y": -9.3082695,
			"z": 220.92111
		}
	}, {
		"_id": {
			"$oid": "63b47e569677db3b15714754"
		},
		"id": "9a1f58e0-1fdc-47c7-a8cc-4b044692b0d7",
		"time": {
			"$numberLong": "1672773206195"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199058947963",
		"killerId": "76561199132031374",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 146437.02,
			"y": 4959.936,
			"z": 33552.562
		},
		"victimPosition": {
			"x": 143299.95,
			"y": 4699.7217,
			"z": 35529.45
		},
		"killerVelocity": {
			"x": -301.1416,
			"y": -26.454424,
			"z": 162.48967
		},
		"victimVelocity": {
			"x": -147.52429,
			"y": -104.765915,
			"z": 113.91355
		}
	}, {
		"_id": {
			"$oid": "63b47e9f9677db3b1571475e"
		},
		"id": "74d4989a-4625-437b-bd9c-4c12f427c5d9",
		"time": {
			"$numberLong": "1672773279789"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197988208234",
		"killerId": "76561199132031374",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 140839.36,
			"y": 3721.0537,
			"z": 39020.7
		},
		"victimPosition": {
			"x": 137652.16,
			"y": 2908.4019,
			"z": 42048.54
		},
		"killerVelocity": {
			"x": -164.83032,
			"y": -33.619865,
			"z": 156.32037
		},
		"victimVelocity": {
			"x": 51.46064,
			"y": -163.35648,
			"z": -222.58992
		}
	}, {
		"_id": {
			"$oid": "63b480869677db3b1571479d"
		},
		"id": "40e2f317-3234-4bf4-a245-8f611ad450ec",
		"time": {
			"$numberLong": "1672773766039"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199119586237",
		"killerId": "76561197988208234",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 133352.97,
			"y": 6753.77,
			"z": 50182.72
		},
		"victimPosition": {
			"x": 129717.805,
			"y": 8154.29,
			"z": 53566.246
		},
		"killerVelocity": {
			"x": -274.70404,
			"y": 116.348694,
			"z": 232.40494
		},
		"victimVelocity": {
			"x": -232.57848,
			"y": 57.50502,
			"z": 214.08511
		}
	}, {
		"_id": {
			"$oid": "63b499629677db3b157149df"
		},
		"id": "23fa5ca1-70f4-40c6-b94c-71fbaf78db49",
		"time": {
			"$numberLong": "1672780130751"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198971996586",
		"killerId": "76561198039844771",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 82504.81,
			"y": 1192.6714,
			"z": 102265.1
		},
		"victimPosition": {
			"x": 81501.43,
			"y": 907.7331,
			"z": 103821.22
		},
		"killerVelocity": {
			"x": -195.19556,
			"y": -24.68963,
			"z": 322.01425
		},
		"victimVelocity": {
			"x": -133.06232,
			"y": -122.627884,
			"z": 162.51372
		}
	}, {
		"_id": {
			"$oid": "63b4adf49677db3b15714b34"
		},
		"id": "29135a20-9847-401a-8b79-33f2a317dd6d",
		"time": {
			"$numberLong": "1672785396150"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198062734793",
		"killerId": "76561199074844367",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160530.34,
			"y": 854.4083,
			"z": 28970.01
		},
		"victimPosition": {
			"x": 157571.47,
			"y": 1275.673,
			"z": 27210.834
		},
		"killerVelocity": {
			"x": 0.08629989,
			"y": -0.000038340688,
			"z": -0.31605008
		},
		"victimVelocity": {
			"x": -65.16753,
			"y": 6.141803,
			"z": -76.44326
		}
	}, {
		"_id": {
			"$oid": "63b4be2b9677db3b15714c87"
		},
		"id": "ac25fdee-0ae3-43c4-b485-cb1b610e8be7",
		"time": {
			"$numberLong": "1672789547674"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199230135361",
		"killerId": "76561198860835931",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151099.2,
			"y": 3225.5596,
			"z": 48946.457
		},
		"victimPosition": {
			"x": 151193.61,
			"y": 3245.4375,
			"z": 52337.652
		},
		"killerVelocity": {
			"x": -23.73564,
			"y": 17.283459,
			"z": 387.33374
		},
		"victimVelocity": {
			"x": 65.420334,
			"y": 16.380354,
			"z": -337.45398
		}
	}, {
		"_id": {
			"$oid": "63b4d3b49677db3b15714df0"
		},
		"id": "25dc8fc4-7a28-4b36-bee0-c69b3e691803",
		"time": {
			"$numberLong": "1672795060325"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198849854979",
		"killerId": "76561198298699368",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152672.39,
			"y": 2341.4717,
			"z": 67109.21
		},
		"victimPosition": {
			"x": 155200.84,
			"y": 2860.3572,
			"z": 68933.33
		},
		"killerVelocity": {
			"x": -307.9137,
			"y": 16.723873,
			"z": 238.87213
		},
		"victimVelocity": {
			"x": -15.290277,
			"y": 113.394356,
			"z": 226.75111
		}
	}, {
		"_id": {
			"$oid": "63b4d46a9677db3b15714dff"
		},
		"id": "d1c8005c-1803-41f1-9f58-9b9b1ad66123",
		"time": {
			"$numberLong": "1672795242260"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199229535246",
		"killerId": "76561198298699368",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150677.17,
			"y": 3216.3462,
			"z": 56865.816
		},
		"victimPosition": {
			"x": 151616.06,
			"y": 3627.447,
			"z": 56944.32
		},
		"killerVelocity": {
			"x": 232.9886,
			"y": 52.77378,
			"z": 287.77365
		},
		"victimVelocity": {
			"x": -93.705315,
			"y": -38.894787,
			"z": -369.3571
		}
	}, {
		"_id": {
			"$oid": "63b4defe9677db3b15714f00"
		},
		"id": "66825db7-13d3-4da7-9132-a742a08315b2",
		"time": {
			"$numberLong": "1672797950417"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199120782461",
		"killerId": "76561198945637389",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 118783.45,
			"y": 1717.9556,
			"z": 49159.902
		},
		"victimPosition": {
			"x": 117941.23,
			"y": 1903.9475,
			"z": 50982.86
		},
		"killerVelocity": {
			"x": -127.613396,
			"y": 67.8694,
			"z": 339.49786
		},
		"victimVelocity": {
			"x": -119.59261,
			"y": -21.543707,
			"z": 21.411736
		}
	}, {
		"_id": {
			"$oid": "63b4f78c9677db3b157150e7"
		},
		"id": "bc8dc67b-a914-4b31-b435-3e2219fbdb16",
		"time": {
			"$numberLong": "1672804236137"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199381230224",
		"killerId": "76561199052920622",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 118036.37,
			"y": 3555.3643,
			"z": 45873.617
		},
		"victimPosition": {
			"x": 120320.94,
			"y": 2492.018,
			"z": 43686.23
		},
		"killerVelocity": {
			"x": 152.40952,
			"y": 8.065973,
			"z": 298.3758
		},
		"victimVelocity": {
			"x": -193.34138,
			"y": 10.824875,
			"z": -58.879044
		}
	}, {
		"_id": {
			"$oid": "63b4faba9677db3b15715134"
		},
		"id": "d0147742-316b-4699-b3f3-715204323a3a",
		"time": {
			"$numberLong": "1672805050709"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561198799165873",
		"killerId": "76561198977139614",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 69208.63,
			"y": 1985.5847,
			"z": 99828.35
		},
		"victimPosition": {
			"x": 70317.29,
			"y": 1522.4968,
			"z": 101184.23
		},
		"killerVelocity": {
			"x": 166.56844,
			"y": -3.81759,
			"z": 179.85857
		},
		"victimVelocity": {
			"x": 38.522785,
			"y": -241.29884,
			"z": 95.23166
		}
	}, {
		"_id": {
			"$oid": "63b5021d9677db3b157151fc"
		},
		"id": "6ca39c72-1f46-4b87-a807-37ef14d71bc2",
		"time": {
			"$numberLong": "1672806941980"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198799165873",
		"killerId": "76561198035805698",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 87014.164,
			"y": 1586.1161,
			"z": 111142.24
		},
		"victimPosition": {
			"x": 89717.49,
			"y": 2815.84,
			"z": 111994.53
		},
		"killerVelocity": {
			"x": -109.414665,
			"y": 100.88303,
			"z": -215.52188
		},
		"victimVelocity": {
			"x": -47.54743,
			"y": 206.24475,
			"z": 8.241878
		}
	}, {
		"_id": {
			"$oid": "63b50ef59677db3b157152dd"
		},
		"id": "139c786d-4206-4f32-a3a0-19438b4a9a80",
		"time": {
			"$numberLong": "1672810229859"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198838708761",
		"killerId": "76561199153359453",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158169.31,
			"y": 1039.53,
			"z": 27655.352
		},
		"victimPosition": {
			"x": 159690.84,
			"y": 854.3972,
			"z": 28407.08
		},
		"killerVelocity": {
			"x": 170.54483,
			"y": -21.416412,
			"z": 89.79111
		},
		"victimVelocity": {
			"x": 102.420235,
			"y": -0.003486231,
			"z": 31.787075
		}
	}, {
		"_id": {
			"$oid": "63b50f639677db3b157152ec"
		},
		"id": "dcf9a0d7-8a5d-4725-a059-8d4ab58c02a9",
		"time": {
			"$numberLong": "1672810339950"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198093124125",
		"killerId": "76561199153359453",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161751.1,
			"y": 1643.7203,
			"z": 31549.441
		},
		"victimPosition": {
			"x": 157932.06,
			"y": 1762.242,
			"z": 32417.496
		},
		"killerVelocity": {
			"x": -144.48564,
			"y": -18.376356,
			"z": 51.910076
		},
		"victimVelocity": {
			"x": 125.51835,
			"y": -5.8029666,
			"z": 150.29851
		}
	}, {
		"_id": {
			"$oid": "63b50f669677db3b157152ee"
		},
		"id": "3614aa6b-039f-4213-9604-a244e5e10f47",
		"time": {
			"$numberLong": "1672810342378"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198363659433",
		"killerId": "76561198838708761",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159128.84,
			"y": 854.394,
			"z": 28449.662
		},
		"victimPosition": {
			"x": 158252.33,
			"y": 1322.782,
			"z": 27942.604
		},
		"killerVelocity": {
			"x": -16.330954,
			"y": 0.0048841387,
			"z": -4.9470553
		},
		"victimVelocity": {
			"x": 217.27017,
			"y": -40.89944,
			"z": 106.894394
		}
	}, {
		"_id": {
			"$oid": "63b585b70c20d42cf2c322ba"
		},
		"id": "d7d7a9ed-aa8d-4f37-8533-ecd342dd512f",
		"time": {
			"$numberLong": "1672840631757"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198331049527",
		"killerId": "76561199005759934",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 163862.64,
			"y": 2170.5051,
			"z": 35301.06
		},
		"victimPosition": {
			"x": 163403.69,
			"y": 2711.675,
			"z": 36730.418
		},
		"killerVelocity": {
			"x": -43.674732,
			"y": 108.596,
			"z": 311.35654
		},
		"victimVelocity": {
			"x": -148.78934,
			"y": -15.757583,
			"z": 115.482254
		}
	}, {
		"_id": {
			"$oid": "63b591930c20d42cf2c3235c"
		},
		"id": "061d4f9a-a06d-43c9-94a0-50da1768c694",
		"time": {
			"$numberLong": "1672843667664"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199365840078",
		"killerId": "76561198861753380",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 81418.39,
			"y": 2460.3372,
			"z": 76738.016
		},
		"victimPosition": {
			"x": 80908.49,
			"y": 1824.2719,
			"z": 78465.49
		},
		"killerVelocity": {
			"x": -195.29176,
			"y": -13.748627,
			"z": 277.89572
		},
		"victimVelocity": {
			"x": 339.69778,
			"y": -125.57237,
			"z": 5.558739
		}
	}, {
		"_id": {
			"$oid": "63b5f6450c20d42cf2c328ec"
		},
		"id": "25cb45ac-8841-4787-866d-4295b4fe0ea6",
		"time": {
			"$numberLong": "1672869445950"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198155948990",
		"killerId": "76561199100412518",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 138308.14,
			"y": 1230.7697,
			"z": 40350.93
		},
		"victimPosition": {
			"x": 137673.39,
			"y": 1334.9767,
			"z": 40464.74
		},
		"killerVelocity": {
			"x": -258.49127,
			"y": -36.910408,
			"z": 17.438124
		},
		"victimVelocity": {
			"x": -237.06242,
			"y": 84.87202,
			"z": -30.690332
		}
	}, {
		"_id": {
			"$oid": "63b611220c20d42cf2c32b27"
		},
		"id": "7ad75a86-9f2d-47ed-9eed-a26278685133",
		"time": {
			"$numberLong": "1672876322987"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198093124125",
		"killerId": "76561198820968318",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 94468.83,
			"y": 2079.2769,
			"z": 64656.023
		},
		"victimPosition": {
			"x": 96040.95,
			"y": 2467.3455,
			"z": 67334.97
		},
		"killerVelocity": {
			"x": 147.8761,
			"y": 0.40343174,
			"z": 258.9385
		},
		"victimVelocity": {
			"x": 142.07556,
			"y": -12.118741,
			"z": -314.50684
		}
	}, {
		"_id": {
			"$oid": "63b613810c20d42cf2c32b62"
		},
		"id": "91e2975d-b732-4a04-9e03-9b9f7669507b",
		"time": {
			"$numberLong": "1672876929389"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198093124125",
		"killerId": "76561198820968318",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 99203.83,
			"y": 3774.323,
			"z": 73884.5
		},
		"victimPosition": {
			"x": 98119.05,
			"y": 2440.8616,
			"z": 75409.5
		},
		"killerVelocity": {
			"x": -73.92966,
			"y": -302.42755,
			"z": 156.76234
		},
		"victimVelocity": {
			"x": 28.340912,
			"y": -107.90637,
			"z": -314.96063
		}
	}, {
		"_id": {
			"$oid": "63b620320c20d42cf2c32c95"
		},
		"id": "1ace08b0-d832-43bd-b27c-e1a182f2b228",
		"time": {
			"$numberLong": "1672880178173"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199442641427",
		"killerId": "76561199059726980",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 72018.69,
			"y": 3893.8772,
			"z": 81830.73
		},
		"victimPosition": {
			"x": 69235.55,
			"y": 2127.225,
			"z": 81409.92
		},
		"killerVelocity": {
			"x": 225.18037,
			"y": -42.532196,
			"z": -151.31871
		},
		"victimVelocity": {
			"x": 14.497723,
			"y": -3.4269638,
			"z": 2.6334171
		}
	}, {
		"_id": {
			"$oid": "63b62d470c20d42cf2c32daf"
		},
		"id": "098f6e91-9019-4b73-9bf3-6f3dd0ac2808",
		"time": {
			"$numberLong": "1672883527462"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198091625680",
		"killerId": "76561199381230224",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152131.97,
			"y": 1749.0538,
			"z": 28007.81
		},
		"victimPosition": {
			"x": 152552.48,
			"y": 858.45233,
			"z": 29086.12
		},
		"killerVelocity": {
			"x": -303.21576,
			"y": 22.853424,
			"z": -9.791278
		},
		"victimVelocity": {
			"x": -87.75805,
			"y": 21.818567,
			"z": 22.637531
		}
	}, {
		"_id": {
			"$oid": "63b6349f0c20d42cf2c32e54"
		},
		"id": "d4228fc5-619e-49f2-901b-2684e6ef71dd",
		"time": {
			"$numberLong": "1672885407638"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198202169393",
		"killerId": "76561198945637389",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 116176.695,
			"y": 1739.9006,
			"z": 43121.766
		},
		"victimPosition": {
			"x": 121777.91,
			"y": 1389.771,
			"z": 41796.816
		},
		"killerVelocity": {
			"x": -372.13065,
			"y": -9.748373,
			"z": -140.41132
		},
		"victimVelocity": {
			"x": 230.3401,
			"y": -65.79627,
			"z": -104.14066
		}
	}, {
		"_id": {
			"$oid": "63b65c130c20d42cf2c3315a"
		},
		"id": "e03067b8-fdb2-4bfe-8b6c-fb5dea104dc2",
		"time": {
			"$numberLong": "1672895507189"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198050772384",
		"killerId": "76561198254217939",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 111945.39,
			"y": 6735.006,
			"z": 64240.434
		},
		"victimPosition": {
			"x": 99483.74,
			"y": 1367.8982,
			"z": 68807.46
		},
		"killerVelocity": {
			"x": -370.18918,
			"y": -51.099396,
			"z": 262.81308
		},
		"victimVelocity": {
			"x": 185.07964,
			"y": -6.8113556,
			"z": 75.609856
		}
	}, {
		"_id": {
			"$oid": "63b660310c20d42cf2c331af"
		},
		"id": "401ade20-692f-4697-9edd-816455086a1b",
		"time": {
			"$numberLong": "1672896561392"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199187473024",
		"killerId": "76561199092959600",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 153723.42,
			"y": 2314.0176,
			"z": 36275.652
		},
		"victimPosition": {
			"x": 154047.38,
			"y": 1571.4977,
			"z": 37502.81
		},
		"killerVelocity": {
			"x": -6.597831,
			"y": -6.1470966,
			"z": 163.2494
		},
		"victimVelocity": {
			"x": 40.456894,
			"y": -45.5227,
			"z": 35.410915
		}
	}, {
		"_id": {
			"$oid": "63b6617a0c20d42cf2c331d6"
		},
		"id": "8b9200f8-55a9-446c-acbb-1ebfd30409d4",
		"time": {
			"$numberLong": "1672896890633"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199187473024",
		"killerId": "76561198086961565",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 152053.3,
			"y": 1646.8788,
			"z": 36842.594
		},
		"victimPosition": {
			"x": 151561.77,
			"y": 1370.4001,
			"z": 37864.59
		},
		"killerVelocity": {
			"x": -251.4108,
			"y": -28.54667,
			"z": 1.2887747
		},
		"victimVelocity": {
			"x": -73.929565,
			"y": -67.4942,
			"z": 82.97221
		}
	}, {
		"_id": {
			"$oid": "63b677b20c20d42cf2c33391"
		},
		"id": "20466ef6-da27-4665-86bf-2658480d745a",
		"time": {
			"$numberLong": "1672902578474"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198042566927",
		"killerId": "76561198961561660",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 136036.73,
			"y": 2164.602,
			"z": 71771.016
		},
		"victimPosition": {
			"x": 134463.97,
			"y": 1809.2849,
			"z": 78815.484
		},
		"killerVelocity": {
			"x": -68.753334,
			"y": 5.363232,
			"z": 119.11887
		},
		"victimVelocity": {
			"x": 162.30328,
			"y": -60.245354,
			"z": -161.97736
		}
	}, {
		"_id": {
			"$oid": "63b67cc60c20d42cf2c33407"
		},
		"id": "f456a10b-f2db-4cf3-ac81-4e50d945fe3a",
		"time": {
			"$numberLong": "1672903878761"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198977808415",
		"killerId": "76561198042566927",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151687.03,
			"y": 2661.1104,
			"z": 58554.97
		},
		"victimPosition": {
			"x": 154368.38,
			"y": 2045.2885,
			"z": 60216.133
		},
		"killerVelocity": {
			"x": -128.11504,
			"y": 8.09158,
			"z": 332.35062
		},
		"victimVelocity": {
			"x": -8.805125,
			"y": -26.701666,
			"z": 152.63004
		}
	}, {
		"_id": {
			"$oid": "63b6eb1e0c20d42cf2c337ed"
		},
		"id": "f76e509e-deb1-4804-9f5a-1372fbc9e7b3",
		"time": {
			"$numberLong": "1672932126202"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198273861052",
		"killerId": "76561198377324567",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158509.64,
			"y": 2280.7566,
			"z": 29788.684
		},
		"victimPosition": {
			"x": 153532.36,
			"y": 1107.7502,
			"z": 33281.38
		},
		"killerVelocity": {
			"x": -231.03622,
			"y": 13.870442,
			"z": 163.72517
		},
		"victimVelocity": {
			"x": -253.77097,
			"y": 4.5876245,
			"z": 34.125576
		}
	}, {
		"_id": {
			"$oid": "63b6f5480c20d42cf2c33864"
		},
		"id": "b3b06e9b-7197-4efb-971d-1b3234164c55",
		"time": {
			"$numberLong": "1672934728970"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198072539115",
		"killerId": "76561198167533513",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 139830.55,
			"y": 2741.9468,
			"z": 45624.77
		},
		"victimPosition": {
			"x": 141251.14,
			"y": 1564.1686,
			"z": 43793.742
		},
		"killerVelocity": {
			"x": 96.48531,
			"y": -61.71223,
			"z": -138.57712
		},
		"victimVelocity": {
			"x": 117.08577,
			"y": -127.84842,
			"z": -141.70651
		}
	}, {
		"_id": {
			"$oid": "63b6f5ed0c20d42cf2c3386f"
		},
		"id": "c48c87d4-3c06-4346-a1f6-daa37021d750",
		"time": {
			"$numberLong": "1672934893327"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198053863215",
		"killerId": "76561198167533513",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 155205.1,
			"y": 1269.071,
			"z": 25989.285
		},
		"victimPosition": {
			"x": 153926.25,
			"y": 1073.4633,
			"z": 25575.168
		},
		"killerVelocity": {
			"x": -214.2328,
			"y": -1.9744275,
			"z": -88.11151
		},
		"victimVelocity": {
			"x": -127.90056,
			"y": -123.65126,
			"z": 153.82895
		}
	}, {
		"_id": {
			"$oid": "63b6f72a0c20d42cf2c3388a"
		},
		"id": "2e16df59-6e94-4dd3-8e1f-fe399acc7337",
		"time": {
			"$numberLong": "1672935210648"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198072539115",
		"killerId": "76561198359451946",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 150844.86,
			"y": 1717.0636,
			"z": 36398.16
		},
		"victimPosition": {
			"x": 148281.48,
			"y": 1272.0277,
			"z": 36827.004
		},
		"killerVelocity": {
			"x": -292.36108,
			"y": -18.146845,
			"z": 115.884964
		},
		"victimVelocity": {
			"x": -90.76865,
			"y": 35.815308,
			"z": -247.56694
		}
	}, {
		"_id": {
			"$oid": "63b6f7460c20d42cf2c3388e"
		},
		"id": "c3259fe2-df83-4100-86cc-d4bd892b4a5f",
		"time": {
			"$numberLong": "1672935238047"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 4,
		"victimId": "76561198359451946",
		"killerId": "76561198196617047",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 151361.75,
			"y": 1992.1082,
			"z": 32723.3
		},
		"victimPosition": {
			"x": 149349.84,
			"y": 1715.2228,
			"z": 40072.457
		},
		"killerVelocity": {
			"x": 149.94035,
			"y": -34.65317,
			"z": -310.89883
		},
		"victimVelocity": {
			"x": 25.572666,
			"y": -90.161804,
			"z": 126.974236
		}
	}, {
		"_id": {
			"$oid": "63b6f7910c20d42cf2c33894"
		},
		"id": "fe765c9a-1dca-411d-b69e-ba62629ae4dc",
		"time": {
			"$numberLong": "1672935313954"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198196617047",
		"killerId": "76561198359451946",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159994.52,
			"y": 854.31134,
			"z": 28671.18
		},
		"victimPosition": {
			"x": 160367.36,
			"y": 853.6347,
			"z": 28599.746
		},
		"killerVelocity": {
			"x": 8.828335,
			"y": 0.05627381,
			"z": -1.197811
		},
		"victimVelocity": {
			"x": 41.35319,
			"y": 0.0033091456,
			"z": 12.628587
		}
	}, {
		"_id": {
			"$oid": "63b6f8920c20d42cf2c3389f"
		},
		"id": "23041112-1416-4e1e-aab9-99c91d065535",
		"time": {
			"$numberLong": "1672935570375"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198196617047",
		"killerId": "76561199391443424",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157332.14,
			"y": 3927.4822,
			"z": 33883.043
		},
		"victimPosition": {
			"x": 145398.72,
			"y": 4269.962,
			"z": 32353.244
		},
		"killerVelocity": {
			"x": -373.58975,
			"y": -26.027658,
			"z": -59.17577
		},
		"victimVelocity": {
			"x": -47.423138,
			"y": 212.19179,
			"z": -131.5742
		}
	}, {
		"_id": {
			"$oid": "63b6f9ad0c20d42cf2c338af"
		},
		"id": "bec6360a-c3a7-4cc7-a05d-ea0770dea515",
		"time": {
			"$numberLong": "1672935853591"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199391443424",
		"killerId": "76561198196617047",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 123851.88,
			"y": 11541.527,
			"z": 65134.34
		},
		"victimPosition": {
			"x": 109941.29,
			"y": 4605.3804,
			"z": 67275.76
		},
		"killerVelocity": {
			"x": -292.4221,
			"y": 28.916054,
			"z": 234.7499
		},
		"victimVelocity": {
			"x": -93.61909,
			"y": -142.94383,
			"z": -80.19674
		}
	}, {
		"_id": {
			"$oid": "63b70f0b0c20d42cf2c33981"
		},
		"id": "87022b69-2c96-4a2d-88f9-4d5b6ce50db6",
		"time": {
			"$numberLong": "1672941323874"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198204367679",
		"killerId": "76561198889816306",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 158719.9,
			"y": 1093.256,
			"z": 28068.234
		},
		"victimPosition": {
			"x": 158287.66,
			"y": 1313.1537,
			"z": 27546.426
		},
		"killerVelocity": {
			"x": -184.44656,
			"y": 47.533157,
			"z": -63.84666
		},
		"victimVelocity": {
			"x": -76.094345,
			"y": 4.866649,
			"z": -59.785908
		}
	}, {
		"_id": {
			"$oid": "63b7256f0c20d42cf2c33b28"
		},
		"id": "36501e31-bfd0-4ff5-8539-82e1df8517fd",
		"time": {
			"$numberLong": "1672947055758"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198955381132",
		"killerId": "76561199272842683",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 118984.56,
			"y": 4260.729,
			"z": 60846.17
		},
		"victimPosition": {
			"x": 118076.88,
			"y": 2163.254,
			"z": 73585.38
		},
		"killerVelocity": {
			"x": -114.907745,
			"y": 52.18831,
			"z": -257.06726
		},
		"victimVelocity": {
			"x": 243.30496,
			"y": -136.47177,
			"z": 212.76028
		}
	}, {
		"_id": {
			"$oid": "63b72ead0c20d42cf2c33ba7"
		},
		"id": "b6adaf79-24a0-4756-8b82-e0e74b1c0466",
		"time": {
			"$numberLong": "1672949421387"
		},
		"victimAircraft": 1,
		"killerAircraft": 2,
		"weapon": 1,
		"victimId": "76561199014623001",
		"killerId": "76561198028861072",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 156481.44,
			"y": 2730.3025,
			"z": 34629.473
		},
		"victimPosition": {
			"x": 160989.66,
			"y": 854.3452,
			"z": 29022.553
		},
		"killerVelocity": {
			"x": -147.3697,
			"y": 43.961914,
			"z": 210.82175
		},
		"victimVelocity": {
			"x": -3.4787114,
			"y": -0.00028375536,
			"z": -1.0593876
		}
	}, {
		"_id": {
			"$oid": "63b7356e0c20d42cf2c33c25"
		},
		"id": "ab614342-9f79-45fa-b721-e51f642f2fd2",
		"time": {
			"$numberLong": "1672951150145"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199055763417",
		"killerId": "76561199196933545",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160288.56,
			"y": 854.3786,
			"z": 28891.041
		},
		"victimPosition": {
			"x": 160178.39,
			"y": 854.41895,
			"z": 28772.717
		},
		"killerVelocity": {
			"x": 0.04014877,
			"y": -0.005091414,
			"z": 0.03087322
		},
		"victimVelocity": {
			"x": 2.272107,
			"y": -0.000520058,
			"z": 0.7391212
		}
	}, {
		"_id": {
			"$oid": "63b74b9b0c20d42cf2c33e39"
		},
		"id": "5e3c1cdb-144d-49d1-96b4-989ade8920dd",
		"time": {
			"$numberLong": "1672956827072"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198038207394",
		"killerId": "76561199427399537",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 88190.78,
			"y": 2450.9575,
			"z": 98166.76
		},
		"victimPosition": {
			"x": 84875.46,
			"y": 504.56863,
			"z": 96244.66
		},
		"killerVelocity": {
			"x": -360.44327,
			"y": -134.72482,
			"z": 111.73702
		},
		"victimVelocity": {
			"x": 284.5265,
			"y": -10.465352,
			"z": -19.51302
		}
	}, {
		"_id": {
			"$oid": "63b74fed0c20d42cf2c33ea1"
		},
		"id": "55e2352d-f820-493c-a43c-a732ccafc254",
		"time": {
			"$numberLong": "1672957933446"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199028256814",
		"killerId": "76561199095113449",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141226.23,
			"y": 3667.3438,
			"z": 42575.125
		},
		"victimPosition": {
			"x": 142918.69,
			"y": 3559.5183,
			"z": 45342.215
		},
		"killerVelocity": {
			"x": -138.48225,
			"y": -17.741213,
			"z": 308.49097
		},
		"victimVelocity": {
			"x": 161.21277,
			"y": -183.63054,
			"z": 24.420464
		}
	}, {
		"_id": {
			"$oid": "63b758c00c20d42cf2c33f54"
		},
		"id": "040db492-0fbd-4d11-8cc7-6e753a993c23",
		"time": {
			"$numberLong": "1672960192736"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561197982548387",
		"killerId": "76561199035408376",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157989.14,
			"y": 1922.822,
			"z": 32813.484
		},
		"victimPosition": {
			"x": 157664.77,
			"y": 2060.2683,
			"z": 33572.45
		},
		"killerVelocity": {
			"x": -84.37185,
			"y": 33.719494,
			"z": 228.0488
		},
		"victimVelocity": {
			"x": -91.95685,
			"y": 43.81,
			"z": 240.85437
		}
	}, {
		"_id": {
			"$oid": "63b7a6320c20d42cf2c341c1"
		},
		"id": "937893ee-7cda-4624-932a-aca5c63ebda0",
		"time": {
			"$numberLong": "1672980018809"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199038552291",
		"killerId": "76561198151068299",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 146388.98,
			"y": 2585.508,
			"z": 69123.91
		},
		"victimPosition": {
			"x": 159240.45,
			"y": 853.6079,
			"z": 27854.818
		},
		"killerVelocity": {
			"x": -150.04407,
			"y": -34.690266,
			"z": 166.5718
		},
		"victimVelocity": {
			"x": 0.0020213826,
			"y": 8.121133e-7,
			"z": -0.0065034973
		}
	}, {
		"_id": {
			"$oid": "63b7b75e0c20d42cf2c34338"
		},
		"id": "1b0e6b3c-0b79-4956-8d56-591c27dcee00",
		"time": {
			"$numberLong": "1672984414734"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198086961565",
		"killerId": "76561199019539574",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 137189.05,
			"y": 2676.903,
			"z": 71174.445
		},
		"victimPosition": {
			"x": 135489.44,
			"y": 2198.7212,
			"z": 70742.41
		},
		"killerVelocity": {
			"x": -308.82382,
			"y": 32.24801,
			"z": 62.43031
		},
		"victimVelocity": {
			"x": -243.80307,
			"y": -58.72515,
			"z": -21.415121
		}
	}, {
		"_id": {
			"$oid": "63b7c6eb0c20d42cf2c3442c"
		},
		"id": "34fb2704-ad00-4823-92b8-3e17952f1af8",
		"time": {
			"$numberLong": "1672988395450"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198142450548",
		"killerId": "76561199131094624",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 162553.52,
			"y": 5070.152,
			"z": 36009.598
		},
		"victimPosition": {
			"x": 161124.02,
			"y": 5950.7324,
			"z": 37032.027
		},
		"killerVelocity": {
			"x": -121.799194,
			"y": 146.07225,
			"z": 146.05148
		},
		"victimVelocity": {
			"x": -127.18669,
			"y": 131.83116,
			"z": 173.6686
		}
	}, {
		"_id": {
			"$oid": "63b7dad50c20d42cf2c34592"
		},
		"id": "2f2f8e7c-c4bd-4615-8367-3048220b39aa",
		"time": {
			"$numberLong": "1672993493244"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199209507463",
		"killerId": "76561199153848530",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 154884.78,
			"y": 7444.956,
			"z": 42073.625
		},
		"victimPosition": {
			"x": 151506,
			"y": 8533.585,
			"z": 43630.535
		},
		"killerVelocity": {
			"x": -310.32388,
			"y": 70.590355,
			"z": 162.47874
		},
		"victimVelocity": {
			"x": -279.57043,
			"y": 54.440773,
			"z": 138.38174
		}
	}, {
		"_id": {
			"$oid": "63b7ee720c20d42cf2c34683"
		},
		"id": "b7cea7b1-3f71-412b-87bb-4e01f9356ed7",
		"time": {
			"$numberLong": "1672998514616"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561199111716816",
		"killerId": "76561198068241155",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 140315.58,
			"y": 2974.5383,
			"z": 46275.37
		},
		"victimPosition": {
			"x": 139110.73,
			"y": 3126.817,
			"z": 47922.07
		},
		"killerVelocity": {
			"x": -203.83615,
			"y": -6.8716154,
			"z": 232.35732
		},
		"victimVelocity": {
			"x": -245.20036,
			"y": 27.787298,
			"z": 138.10622
		}
	}, {
		"_id": {
			"$oid": "63b8462e0a1a8b20cd2cdcbe"
		},
		"id": "f15ed26c-3a44-4276-a0af-c574adcf9ca2",
		"time": {
			"$numberLong": "1673020974855"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199132644524",
		"killerId": "76561198418750000",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160399.92,
			"y": 2694.7976,
			"z": 37737.098
		},
		"victimPosition": {
			"x": 159569.88,
			"y": 3144.4292,
			"z": 36853.67
		},
		"killerVelocity": {
			"x": -217.26134,
			"y": -17.573822,
			"z": 208.61134
		},
		"victimVelocity": {
			"x": -107.92692,
			"y": -33.433228,
			"z": -85.69311
		}
	}, {
		"_id": {
			"$oid": "63b848d70a1a8b20cd2cdd02"
		},
		"id": "80add083-c6d4-4e41-a6d5-562daed1d5da",
		"time": {
			"$numberLong": "1673021655128"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198346457012",
		"killerId": "76561198930247480",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 154273.22,
			"y": 2347.6016,
			"z": 39400.54
		},
		"victimPosition": {
			"x": 153713.73,
			"y": 2657.363,
			"z": 43040.258
		},
		"killerVelocity": {
			"x": -130.35878,
			"y": 28.652811,
			"z": 341.81412
		},
		"victimVelocity": {
			"x": 214.83679,
			"y": 37.489006,
			"z": 187.74321
		}
	}, {
		"_id": {
			"$oid": "63b849b40a1a8b20cd2cdd17"
		},
		"id": "d552435e-8fec-4ce6-86ce-d977495d79f6",
		"time": {
			"$numberLong": "1673021876744"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197976066897",
		"killerId": "76561198016022937",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 128059.516,
			"y": 1838.378,
			"z": 72018.03
		},
		"victimPosition": {
			"x": 118308.43,
			"y": 4490.884,
			"z": 75857.08
		},
		"killerVelocity": {
			"x": -279.82297,
			"y": -6.029882,
			"z": 89.0663
		},
		"victimVelocity": {
			"x": 8.291442,
			"y": -142.2484,
			"z": -207.88351
		}
	}, {
		"_id": {
			"$oid": "63b853c60a1a8b20cd2cde06"
		},
		"id": "1413dff6-1aad-4f72-886f-01b16329bf72",
		"time": {
			"$numberLong": "1673024454707"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561197976066897",
		"killerId": "76561198016022937",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 132374.86,
			"y": 1450.8881,
			"z": 61712.26
		},
		"victimPosition": {
			"x": 120155.125,
			"y": 1468.7291,
			"z": 59642.363
		},
		"killerVelocity": {
			"x": -0.012149297,
			"y": -0.017050311,
			"z": 0.0076699927
		},
		"victimVelocity": {
			"x": -184.01064,
			"y": 75.16533,
			"z": -262.5787
		}
	}, {
		"_id": {
			"$oid": "63b8566b0a1a8b20cd2cde50"
		},
		"id": "cf86ad53-4503-492d-bc38-4b153d289bbf",
		"time": {
			"$numberLong": "1673025131426"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198873733478",
		"killerId": "76561198053202233",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 101310.695,
			"y": 8602.536,
			"z": 86906.46
		},
		"victimPosition": {
			"x": 83412.914,
			"y": 1552.3141,
			"z": 87962.55
		},
		"killerVelocity": {
			"x": -355.57996,
			"y": -8.857086,
			"z": 114.2905
		},
		"victimVelocity": {
			"x": -13.851701,
			"y": -41.173744,
			"z": -133.96413
		}
	}, {
		"_id": {
			"$oid": "63b864480a1a8b20cd2cdfda"
		},
		"id": "0f631519-ca5d-46ca-9e07-fcd9466ee3ba",
		"time": {
			"$numberLong": "1673028680951"
		},
		"victimAircraft": 2,
		"killerAircraft": 2,
		"weapon": 0,
		"victimId": "76561198053202233",
		"killerId": "76561197988058575",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 76500.695,
			"y": 883.6656,
			"z": 108184.04
		},
		"victimPosition": {
			"x": 75524.04,
			"y": 280.71945,
			"z": 107909.23
		},
		"killerVelocity": {
			"x": -328.38614,
			"y": -208.09975,
			"z": -86.31268
		},
		"victimVelocity": {
			"x": -0.014891026,
			"y": -0.0019406229,
			"z": -0.00033637232
		}
	}, {
		"_id": {
			"$oid": "63b86fa90a1a8b20cd2ce09e"
		},
		"id": "d5dd219c-3a4b-4d69-95ff-6f64c19dc68e",
		"time": {
			"$numberLong": "1673031593238"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198979194174",
		"killerId": "76561198830523894",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 210438.88,
			"y": 3038.9802,
			"z": 15021.941
		},
		"victimPosition": {
			"x": 210784.36,
			"y": 2851.5105,
			"z": 14539.004
		},
		"killerVelocity": {
			"x": 162.03775,
			"y": -23.037218,
			"z": -196.0274
		},
		"victimVelocity": {
			"x": 8.753465,
			"y": -115.870705,
			"z": -52.52512
		}
	}, {
		"_id": {
			"$oid": "63b8733d0a1a8b20cd2ce0f3"
		},
		"id": "0b7bffe0-c49c-4b54-8ca0-a289d3cc8bcb",
		"time": {
			"$numberLong": "1673032509610"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561197976066897",
		"killerId": "76561198006715753",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 157293.58,
			"y": 1176.1506,
			"z": 28798.742
		},
		"victimPosition": {
			"x": 157185.12,
			"y": 1191.2618,
			"z": 28837.826
		},
		"killerVelocity": {
			"x": -146.3982,
			"y": 14.103582,
			"z": 55.35449
		},
		"victimVelocity": {
			"x": -153.63321,
			"y": 24.720785,
			"z": 41.08675
		}
	}, {
		"_id": {
			"$oid": "63b87eb80a1a8b20cd2ce1c9"
		},
		"id": "4cea57fe-53d6-4811-9404-127a52e3dc26",
		"time": {
			"$numberLong": "1673035448480"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198035805698",
		"killerId": "76561199013156543",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160919.28,
			"y": 854.3487,
			"z": 28998.059
		},
		"victimPosition": {
			"x": 161089.67,
			"y": 854.31537,
			"z": 29085.3
		},
		"killerVelocity": {
			"x": 7.0542393,
			"y": 0.013438925,
			"z": 3.1621764
		},
		"victimVelocity": {
			"x": 9.958237,
			"y": 0.10552358,
			"z": -7.749851
		}
	}, {
		"_id": {
			"$oid": "63b87ed70a1a8b20cd2ce1cd"
		},
		"id": "e824a5a0-2fbb-4246-b3f9-33bba3e1f7f8",
		"time": {
			"$numberLong": "1673035479168"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561199013156543",
		"killerId": "76561198035805698",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 161050.45,
			"y": 854.404,
			"z": 29128.562
		},
		"victimPosition": {
			"x": 161054.34,
			"y": 854.40314,
			"z": 29109.832
		},
		"killerVelocity": {
			"x": 0.032363713,
			"y": -0.00010868162,
			"z": -0.53359425
		},
		"victimVelocity": {
			"x": -2.5000057,
			"y": 0.004365489,
			"z": 3.7219925
		}
	}, {
		"_id": {
			"$oid": "63b87ee00a1a8b20cd2ce1d0"
		},
		"id": "bd832760-5c7e-47b5-a5f5-e072884cf5e2",
		"time": {
			"$numberLong": "1673035488465"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198035805698",
		"killerId": "76561199013156543",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160855,
			"y": 854.4009,
			"z": 29101.12
		},
		"victimPosition": {
			"x": 161050.52,
			"y": 854.40607,
			"z": 29127.621
		},
		"killerVelocity": {
			"x": 0.007201399,
			"y": 0.0015447438,
			"z": -0.025293393
		},
		"victimVelocity": {
			"x": 0.00013109736,
			"y": -0.00014374405,
			"z": -0.0022927274
		}
	}, {
		"_id": {
			"$oid": "63b880360a1a8b20cd2ce1f1"
		},
		"id": "1468b6a8-049a-4def-8f0e-36d727107a97",
		"time": {
			"$numberLong": "1673035830515"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561199036907115",
		"killerId": "76561199442641427",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 93166.36,
			"y": 1607.557,
			"z": 82944.31
		},
		"victimPosition": {
			"x": 92874.65,
			"y": 2112.8252,
			"z": 82156.38
		},
		"killerVelocity": {
			"x": -22.632982,
			"y": 34.16454,
			"z": -99.5964
		},
		"victimVelocity": {
			"x": -79.330215,
			"y": -51.231377,
			"z": 53.44905
		}
	}, {
		"_id": {
			"$oid": "63b884520a1a8b20cd2ce25f"
		},
		"id": "66c654e6-28d6-4ecc-ac56-5b06885061f2",
		"time": {
			"$numberLong": "1673036882812"
		},
		"victimAircraft": 4,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198048198647",
		"killerId": "76561199098468397",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 160340.48,
			"y": 854.3686,
			"z": 28832.002
		},
		"victimPosition": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"killerVelocity": {
			"x": 7.9259253,
			"y": 0.12318032,
			"z": -3.2023194
		},
		"victimVelocity": {
			"x": 0,
			"y": 0,
			"z": 0
		}
	}, {
		"_id": {
			"$oid": "63b885200a1a8b20cd2ce27b"
		},
		"id": "9cd01b0c-62db-4d1b-bd69-ca14eb58b9fe",
		"time": {
			"$numberLong": "1673037088028"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 3,
		"victimId": "76561199442641427",
		"killerId": "76561199098468397",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 138781.97,
			"y": 4637.7017,
			"z": 46932.523
		},
		"victimPosition": {
			"x": 140115.25,
			"y": 4387.4146,
			"z": 44417.62
		},
		"killerVelocity": {
			"x": 164.70047,
			"y": -24.595339,
			"z": -276.51517
		},
		"victimVelocity": {
			"x": 231.10338,
			"y": -54.840378,
			"z": -349.4119
		}
	}, {
		"_id": {
			"$oid": "63b888fb0a1a8b20cd2ce2bb"
		},
		"id": "57d7c668-877b-4209-b7cf-e4f377a7bea5",
		"time": {
			"$numberLong": "1673038075952"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198018722761",
		"killerId": "76561197980165239",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 145463.77,
			"y": 2071.754,
			"z": 49728.973
		},
		"victimPosition": {
			"x": 145841.73,
			"y": 1871.3688,
			"z": 51116.793
		},
		"killerVelocity": {
			"x": 22.136618,
			"y": 41.08999,
			"z": 349.43903
		},
		"victimVelocity": {
			"x": 178.71335,
			"y": 10.449532,
			"z": 10.264109
		}
	}, {
		"_id": {
			"$oid": "63b88c200a1a8b20cd2ce30c"
		},
		"id": "517674ec-eaf9-4af0-89a5-d5fc86a1ae2a",
		"time": {
			"$numberLong": "1673038880750"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198958567805",
		"killerId": "76561198136087919",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 146159.52,
			"y": 1224.2023,
			"z": 33006.38
		},
		"victimPosition": {
			"x": 140269.17,
			"y": 1220.8201,
			"z": 41873.445
		},
		"killerVelocity": {
			"x": -353.89264,
			"y": -5.5451627,
			"z": 114.09754
		},
		"victimVelocity": {
			"x": 142.52184,
			"y": -57.008144,
			"z": -208.11769
		}
	}, {
		"_id": {
			"$oid": "63b88c320a1a8b20cd2ce30e"
		},
		"id": "9f7522b2-de8d-413d-a128-c07530076fcb",
		"time": {
			"$numberLong": "1673038898288"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 5,
		"victimId": "76561198018722761",
		"killerId": "76561198136087919",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 141442.67,
			"y": 1438.5417,
			"z": 37336.867
		},
		"victimPosition": {
			"x": 140950.55,
			"y": 1261.3951,
			"z": 40456.375
		},
		"killerVelocity": {
			"x": -242.97557,
			"y": -1.7053391,
			"z": 291.41772
		},
		"victimVelocity": {
			"x": 175.67694,
			"y": -31.992376,
			"z": -186.2105
		}
	}, {
		"_id": {
			"$oid": "63b89caa0a1a8b20cd2ce48e"
		},
		"id": "88106523-9103-4669-a6cb-27a750172748",
		"time": {
			"$numberLong": "1673043114528"
		},
		"victimAircraft": 2,
		"killerAircraft": 1,
		"weapon": 1,
		"victimId": "76561198162377319",
		"killerId": "76561198074775503",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 90228.23,
			"y": 1523.8073,
			"z": 70943.41
		},
		"victimPosition": {
			"x": 85400.17,
			"y": 1876.333,
			"z": 70883.31
		},
		"killerVelocity": {
			"x": -122.7914,
			"y": -119.87751,
			"z": 260.326
		},
		"victimVelocity": {
			"x": 81.729744,
			"y": -11.743669,
			"z": 25.544884
		}
	}, {
		"_id": {
			"$oid": "63b8c5050a1a8b20cd2ce85c"
		},
		"id": "862a7071-339d-43fd-8642-0f0535e45e26",
		"time": {
			"$numberLong": "1673053445884"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561199019539574",
		"killerId": "76561199106825805",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 97024.2,
			"y": 1701.8999,
			"z": 72840.38
		},
		"victimPosition": {
			"x": 94137.42,
			"y": 931.8536,
			"z": 73271.305
		},
		"killerVelocity": {
			"x": -277.96283,
			"y": -12.770872,
			"z": 8.086457
		},
		"victimVelocity": {
			"x": -179.94551,
			"y": -32.995716,
			"z": 22.073961
		}
	}, {
		"_id": {
			"$oid": "63b8d9340a1a8b20cd2cea20"
		},
		"id": "64db7530-3e5a-41e3-88e2-81e89a5542ab",
		"time": {
			"$numberLong": "1673058612598"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 2,
		"victimId": "76561198144769806",
		"killerId": "76561198210629243",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 77050.45,
			"y": 3583.6511,
			"z": 94533.03
		},
		"victimPosition": {
			"x": 77118.81,
			"y": 3400.0725,
			"z": 95682.87
		},
		"killerVelocity": {
			"x": 33.931633,
			"y": -50.628384,
			"z": 390.7726
		},
		"victimVelocity": {
			"x": 59.866093,
			"y": -78.78561,
			"z": -127.78958
		}
	}, {
		"_id": {
			"$oid": "63b8fe480a1a8b20cd2cece4"
		},
		"id": "c98a0ad9-88f2-4b2c-b487-dc92dd0048fe",
		"time": {
			"$numberLong": "1673068104943"
		},
		"victimAircraft": 1,
		"killerAircraft": 1,
		"weapon": 0,
		"victimId": "76561198050772384",
		"killerId": "76561198036488728",
		"victimTeam": 1,
		"killerTeam": 1,
		"killerPosition": {
			"x": 159912.19,
			"y": 854.376,
			"z": 28818.336
		},
		"victimPosition": {
			"x": 159921.5,
			"y": 858.15466,
			"z": 28690.193
		},
		"killerVelocity": {
			"x": -0.000027355163,
			"y": -0.00013703853,
			"z": 0.00020537831
		},
		"victimVelocity": {
			"x": -133.205,
			"y": 5.8942957,
		}
	}