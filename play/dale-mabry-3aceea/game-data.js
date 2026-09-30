// Safar game data — edit text responses here if you like.
window.SAFAR_GAME = {
  "meta": {
    "id": "project_e0865858cais_zgbn14",
    "name": "Dale Mabry & Eggrish",
    "aspectRatio": "16:9",
    "accent": "#fbbf24",
    "background": "#0f172a",
    "font": "mono",
    "atmosphere": "full",
    "uiSound": false
  },
  "startRoomId": "room_mrea1lyf_dhregf",
  "rooms": [
    {
      "id": "room_mrea1lyf_dhregf",
      "name": "GHS Commons",
      "image": "assets/room-ghs_commons.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Gaither High, fifth-period lunch. Gran Turismo 3 hits shelves today, and Blockbuster on Dale Mabry only got a handful of copies. You need to get out of here early — the front doors won't let you through without a pass.",
      "hotspots": [
        {
          "id": "hs_muixeczf_2zombo",
          "name": "Victor",
          "kind": "npc",
          "rect": {
            "x": 15.81196581196581,
            "y": 50.355618776671406,
            "w": 7.478632478632479,
            "h": 13.655761024182084
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiy0k56_wwxj26",
          "name": "Andy",
          "kind": "npc",
          "rect": {
            "x": 1.9230769230769231,
            "y": 54.623044096728314,
            "w": 8.547008547008547,
            "h": 11.379800853485058
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiy90w8_e0h1dj",
          "name": "Jesse",
          "kind": "npc",
          "rect": {
            "x": 47.22222222222222,
            "y": 50.07112375533428,
            "w": 8.119658119658126,
            "h": 13.940256045519213
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiybem9_y7e2vu",
          "name": "Maurice",
          "kind": "npc",
          "rect": {
            "x": 56.837606837606835,
            "y": 52.34708392603129,
            "w": 8.11965811965812,
            "h": 15.362731152204844
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiyclpp_fnfi25",
          "name": "Sammit",
          "kind": "npc",
          "rect": {
            "x": 68.16239316239316,
            "y": 51.778093883357045,
            "w": 13.24786324786325,
            "h": 16.500711237553332
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiyegn9_2silfz",
          "name": "Ben",
          "kind": "npc",
          "rect": {
            "x": 83.97435897435898,
            "y": 47.22617354196302,
            "w": 11.75213675213675,
            "h": 17.63869132290185
          },
          "requiredItemId": "item_muikx84l_9005hm",
          "lockedText": "Ben leans in: \"Front-office passes aren't free, man. What have you got that's worth sixth period?\"",
          "grantsItemId": "item_e0865859e0zz_zzwhvq",
          "consumesRequiredItem": true
        },
        {
          "id": "hs_muiyp3w3_hckuk7",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 0.6637168141592921,
            "y": 35.961680176860725,
            "w": 13.053097345132743,
            "h": 9.137803979366247
          },
          "targetRoomId": "room_muizbmtc_hoou10",
          "requiredItemId": "item_e0865859e0zz_zzwhvq",
          "lockedText": "A hall monitor with a clipboard blocks the doors. \"Pass?\" You do not have a pass.",
          "consumesRequiredItem": true,
          "hiddenByFlag": "van-gone"
        },
        {
          "id": "hs_mujbr2ii_f9mk2t",
          "name": "Kus",
          "kind": "npc",
          "rect": {
            "x": 35.294117647058826,
            "y": 50.14243014462749,
            "w": 9.297912713472485,
            "h": 15.413771320277952
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_mujbruob_05yzlx",
          "name": "Gus",
          "kind": "npc",
          "rect": {
            "x": 24.28842504743833,
            "y": 50.53695707628415,
            "w": 9.487666034155595,
            "h": 16.424510423247
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11fexvmgl_z3",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 0.6637168141592921,
            "y": 35.961680176860725,
            "w": 13.053097345132743,
            "h": 9.137803979366247
          },
          "targetRoomId": "room_e2ff11fepr1ab_z3",
          "consumesRequiredItem": false,
          "requiresFlag": "accord-at-school"
        },
        {
          "id": "hs_e2ff11feetznc_z3",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 0.6637168141592921,
            "y": 35.961680176860725,
            "w": 13.053097345132743,
            "h": 9.137803979366247
          },
          "targetRoomId": "room_e2ff11fedsllm_z3",
          "consumesRequiredItem": false,
          "requiresFlag": "civic-at-school"
        }
      ]
    },
    {
      "id": "room_muikx84l_io2kqq",
      "name": "Gus's Room",
      "image": "assets/room-gus_s_room.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Your room. Small, clean-ish, and humid. Whatever money you have is in here somewhere.",
      "hotspots": [
        {
          "id": "hs_muikx84l_tpq0ru",
          "name": "Back to Living Room",
          "kind": "exit",
          "rect": {
            "x": 36.05128205128205,
            "y": 93.02987197724039,
            "w": 31.897435897435898,
            "h": 6.97012802275961
          },
          "targetRoomId": "room_muikx84l_36nb97",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e08658598032_z2zzir",
          "name": "Desk",
          "kind": "item",
          "rect": {
            "x": 0,
            "y": 55,
            "w": 19,
            "h": 11
          },
          "grantsItemId": "item_e0865859f5el_zjmp56",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859dw9g_z3d838",
          "name": "Jacket in Closet",
          "kind": "item",
          "rect": {
            "x": 31,
            "y": 27,
            "w": 6,
            "h": 18
          },
          "grantsItemId": "item_e08658598j02_zgnr1g",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859ouud_zotggh",
          "name": "Toy Cars",
          "kind": "scenery",
          "rect": {
            "x": 58,
            "y": 51,
            "w": 24,
            "h": 4
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e08658593edl_zplddw",
          "name": "Bed",
          "kind": "scenery",
          "rect": {
            "x": 74,
            "y": 56,
            "w": 26,
            "h": 34
          },
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muikx84l_36nb97",
      "name": "Living Room",
      "image": "assets/room-living_room.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "The apartment. Baz and Maz are out cold on the couch after lunch, Arabic news murmuring to nobody. The car keys sit on the kitchen counter. Your room is down the hall on the other side of the living room.",
      "hotspots": [
        {
          "id": "hs_muikx84l_9t0asp",
          "name": "Counter with Keys",
          "kind": "exit",
          "rect": {
            "x": 56.350427350427346,
            "y": 35.56187766714083,
            "w": 20.78632478632479,
            "h": 12.802275960170697
          },
          "targetRoomId": "room_muixg6v9_s2mkhf",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muikx84l_jt1ldn",
          "name": "Front Door",
          "kind": "exit",
          "rect": {
            "x": 8.974358974358974,
            "y": 11.095305832147943,
            "w": 11.538461538461537,
            "h": 31.294452347083926
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muj2e0lo_4pidrd",
          "name": "Turn Around",
          "kind": "exit",
          "rect": {
            "x": 37.571157495256166,
            "y": 95.76753193414896,
            "w": 58.25426944971537,
            "h": 4.232468065851037
          },
          "targetRoomId": "room_muj24gyp_sou079",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muj2eyiq_b1uxyz",
          "name": "Other Side of the Room",
          "kind": "exit",
          "rect": {
            "x": 53,
            "y": 58,
            "w": 15,
            "h": 18
          },
          "targetRoomId": "room_muj24gyp_sou079",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11fe57n62_z3",
          "name": "Baz",
          "kind": "npc",
          "rect": {
            "x": 0,
            "y": 48,
            "w": 26,
            "h": 40
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11fejqe3x_z3",
          "name": "Maz",
          "kind": "npc",
          "rect": {
            "x": 29,
            "y": 50,
            "w": 20,
            "h": 32
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_mujw5brr_6e5lab",
          "name": "Kitchen Drawer",
          "kind": "exit",
          "rect": {
            "x": 80.45540796963947,
            "y": 40.540407220547664,
            "w": 5.502846299810258,
            "h": 5.559065066329758
          },
          "targetRoomId": "room_mujwa19j_7ag5ox",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muikx84l_4xxwr8",
      "name": "The Driveway",
      "image": "assets/room-the_driveway.png",
      "imageChangingHotspotIds": [
        "hs_muj1yibp_xm7iez"
      ],
      "pickupImages": [
        {
          "takenHotspotIds": [
            "hs_muj1yibp_xm7iez"
          ],
          "image": "assets/room-the_driveway-taken-hs_muj1yibp_xm7iez.png"
        }
      ],
      "flagImages": [
        {
          "requiresFlag": "civic-running",
          "hiddenByFlag": "wrench-taken",
          "image": "assets/room-the_driveway-flag-civic_running.jpg"
        },
        {
          "requiresFlag": "civic-running",
          "image": "assets/room-the_driveway-flag-civic_running-2.jpg"
        }
      ],
      "entryMode": "custom",
      "entryText": "Home. Sabal Palm, building 3. Maz's white Accord, your red Civic, and Baz's van bake in the parking lot. Keys are inside on the kitchen counter.",
      "hotspots": [
        {
          "id": "hs_muikx84l_jwj8wd",
          "name": "Maz's Accord",
          "kind": "exit",
          "rect": {
            "x": 63.46153846153846,
            "y": 60.39166140240051,
            "w": 33.88191504889797,
            "h": 20.505746961178026
          },
          "targetRoomId": "room_muj17ok5_t7m7do",
          "requiredItemId": "item_muiztzyy_9v990s",
          "lockedText": "Locked. Maz's Accord keys hang out on the kitchen counter inside.",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e086585911ab_zfcnkf",
          "hiddenByFlag": "civic-running",
          "clearsFlags": [
            "in-civic"
          ]
        },
        {
          "id": "hs_e48adf74a8323_z4",
          "name": "Maz's Accord",
          "kind": "exit",
          "rect": {
            "x": 59,
            "y": 50,
            "w": 40,
            "h": 33
          },
          "targetRoomId": "room_muj17ok5_t7m7do",
          "requiredItemId": "item_muiztzyy_9v990s",
          "lockedText": "Locked. Maz's Accord keys hang out on the kitchen counter inside.",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74b7u9o_z4",
          "requiresFlag": "civic-running",
          "clearsFlags": [
            "in-civic"
          ]
        },
        {
          "id": "hs_muikx84l_z72ldx",
          "name": "Apartment Door",
          "kind": "exit",
          "rect": {
            "x": 74.31401278460102,
            "y": 25.413119444079207,
            "w": 6,
            "h": 19
          },
          "targetRoomId": "room_muikx84l_36nb97",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiuan4o_bavyl9",
          "name": "Gus's Civic",
          "kind": "exit",
          "rect": {
            "x": 28.846153846153843,
            "y": 56.6145092460882,
            "w": 29.70085470085471,
            "h": 25.320056899004264
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "requiredItemId": "item_muizrmyw_d85rt1",
          "lockedText": "Your beloved '94 Civic EX. Locked. The keys are on the kitchen counter.",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf745e325_z4",
          "hiddenByFlag": "civic-tried",
          "setsFlags": [
            "civic-tried"
          ]
        },
        {
          "id": "hs_muiuc4tx_lq14bs",
          "name": "l'Van",
          "kind": "scenery",
          "rect": {
            "x": 4.05982905982906,
            "y": 44.66571834992888,
            "w": 25.000000000000004,
            "h": 31.863442389758177
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muj1yibp_xm7iez",
          "name": "Wrench",
          "kind": "item",
          "rect": {
            "x": 59.39278937381404,
            "y": 81.61718256475048,
            "w": 9.487666034155609,
            "h": 5.811749842072018
          },
          "grantsItemId": "item_muj1yjwu_iwbphs",
          "consumesRequiredItem": false,
          "setsFlags": [
            "wrench-taken"
          ]
        },
        {
          "id": "hs_e2ff11fedvaf1_z3",
          "name": "Gus's Civic",
          "kind": "scenery",
          "rect": {
            "x": 28.846153846153843,
            "y": 56.6145092460882,
            "w": 29.70085470085471,
            "h": 25.320056899004264
          },
          "requiredItemId": "item_e2ff11fditnvw_z3",
          "lockedText": "Click. Click. Nothing. The battery is dead. You need a jump: Baz's jumper cables are in the kitchen drawer, and Maz's Accord can do the rest.",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_e48adf74dew5s_z4",
          "requiresFlag": "civic-tried",
          "hiddenByFlag": "civic-running",
          "setsFlags": [
            "civic-running"
          ]
        },
        {
          "id": "hs_e2ff11fea4e4y_z3",
          "name": "Gus's Civic",
          "kind": "exit",
          "rect": {
            "x": 21,
            "y": 53,
            "w": 37,
            "h": 30
          },
          "targetRoomId": "room_e2ff11fe48u2b_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fdvfb5l_z3",
          "requiresFlag": "civic-running",
          "setsFlags": [
            "in-civic"
          ]
        }
      ]
    },
    {
      "id": "room_muikx84l_19o1o7",
      "name": "Sam Ash Music",
      "image": "assets/room-sam_ash_music.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Sam Ash. Cold air, the smell of new amps, and a wall of guitars you can only look at.",
      "hotspots": [
        {
          "id": "hs_muikx84l_1rj2az",
          "name": "Les Paul Custom",
          "kind": "scenery",
          "rect": {
            "x": 56,
            "y": 17,
            "w": 11,
            "h": 24
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muikx84l_ej7aa5",
          "name": "Store Clerk",
          "kind": "npc",
          "rect": {
            "x": 89,
            "y": 46,
            "w": 11,
            "h": 15
          },
          "requiredItemId": "item_e0865859f5el_zjmp56",
          "lockedText": "\"Strings are behind the counter, man. Twenty bucks, no IOUs. Kirk Hammett doesn't do IOUs.\"",
          "grantsItemId": "item_e0865859ytof_z02cnb",
          "consumesRequiredItem": true
        },
        {
          "id": "hs_muikx84l_g1ocjq",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 26,
            "w": 20,
            "h": 45
          },
          "targetRoomId": "room_muj17ok5_t7m7do",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74sovpf_z4",
          "hiddenByFlag": "in-civic"
        },
        {
          "id": "hs_e2ff1200l1f9r_z3",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 26,
            "w": 20,
            "h": 45
          },
          "targetRoomId": "room_e2ff11fe48u2b_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74hohwj_z4",
          "requiresFlag": "in-civic"
        }
      ]
    },
    {
      "id": "room_muixg6v9_s2mkhf",
      "name": "Kitchen Counter",
      "image": "assets/room-kitchen_counter.png",
      "imageChangingHotspotIds": [
        "hs_muizrlci_g0qmvh",
        "hs_muiztxzu_snmw96"
      ],
      "pickupImages": [
        {
          "takenHotspotIds": [
            "hs_muizrlci_g0qmvh"
          ],
          "image": "assets/room-kitchen_counter-taken-hs_muizrlci_g0qmvh.png"
        },
        {
          "takenHotspotIds": [
            "hs_muiztxzu_snmw96"
          ],
          "image": "assets/room-kitchen_counter-taken-hs_muiztxzu_snmw96.png"
        },
        {
          "takenHotspotIds": [
            "hs_muizrlci_g0qmvh",
            "hs_muiztxzu_snmw96"
          ],
          "image": "assets/room-kitchen_counter-taken-hs_muizrlci_g0qmvh-hs_muiztxzu_snmw96.png"
        }
      ],
      "entryMode": "auto",
      "entryText": "",
      "hotspots": [
        {
          "id": "hs_muizrlci_g0qmvh",
          "name": "Civic Keys",
          "kind": "item",
          "rect": {
            "x": 5.692599620493358,
            "y": 41.69298799747315,
            "w": 42.8842504743833,
            "h": 26.279216677195194
          },
          "grantsItemId": "item_muizrmyw_d85rt1",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muiztxzu_snmw96",
          "name": "Accord Keys",
          "kind": "item",
          "rect": {
            "x": 56.73624288425047,
            "y": 41.18762037382048,
            "w": 39.46869070208729,
            "h": 29.564118761844597
          },
          "grantsItemId": "item_muiztzyy_9v990s",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muj3enq0_hck3c3",
          "name": "Back",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 89.19772583701831,
            "w": 99.05123339658444,
            "h": 10.80227416298169
          },
          "targetRoomId": "room_muikx84l_36nb97",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muizbmtc_hoou10",
      "name": "V-School Parking",
      "image": "assets/room-v_school_parking.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Free. Baz's white Ford work van idles at the curb, the fridge compressor on the roof rack rattling in the heat. Kus is already climbing in. Your car keys are at home on the kitchen counter, where Baz can see them.",
      "hotspots": [
        {
          "id": "hs_e08658591p9y_zmr94s",
          "name": "Baz's Work Van",
          "kind": "exit",
          "rect": {
            "x": 16,
            "y": 63,
            "w": 24,
            "h": 27
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e0865859vaqj_ztsr7n",
          "setsFlags": [
            "van-gone"
          ]
        },
        {
          "id": "hs_e08658598z5l_zylnsn",
          "name": "School Doors",
          "kind": "exit",
          "rect": {
            "x": 88,
            "y": 33,
            "w": 6,
            "h": 22
          },
          "targetRoomId": "room_mrea1lyf_dhregf",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859b2ah_zhsrrn",
          "name": "Assistant Principal",
          "kind": "npc",
          "rect": {
            "x": 89,
            "y": 46,
            "w": 4,
            "h": 12
          },
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muj17ok5_t7m7do",
      "name": "Dale Mabry Highway",
      "image": "assets/room-dale_mabry_highway.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "flagImages": [
        {
          "requiresFlag": "mario-called",
          "image": "assets/room-dale_mabry_highway-flag-mario_called.png"
        }
      ],
      "entryMode": "custom",
      "entryText": "Dale Mabry Highway runs north-south through everything. Blockbuster's at North Pointe Plaza; Sam Ash is down by Fletcher. Where to?",
      "hotspots": [
        {
          "id": "hs_muj2gzed_slfeta",
          "name": "Gaither Highschool",
          "kind": "exit",
          "rect": {
            "x": 53,
            "y": 27,
            "w": 19,
            "h": 13
          },
          "targetRoomId": "room_e2ff11fepr1ab_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fdf486u_z3",
          "setsFlags": [
            "accord-at-school"
          ],
          "clearsFlags": [
            "civic-at-school"
          ]
        },
        {
          "id": "hs_muj2hibs_vjno0c",
          "name": "Sam Ash Music",
          "kind": "exit",
          "rect": {
            "x": 64,
            "y": 57,
            "w": 13,
            "h": 11
          },
          "targetRoomId": "room_muikx84l_19o1o7",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e0865859f7sw_zvttqc"
        },
        {
          "id": "hs_e0865859h50l_zibbmm",
          "name": "Sabal Palm (Home)",
          "kind": "exit",
          "rect": {
            "x": 49,
            "y": 10,
            "w": 14,
            "h": 11
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e08658595xy9_zdva6v"
        },
        {
          "id": "hs_e08658591bek_zm298q",
          "name": "Blockbuster Video",
          "kind": "exit",
          "rect": {
            "x": 53,
            "y": 42,
            "w": 11,
            "h": 9
          },
          "targetRoomId": "room_muj2rvon_2v6zou",
          "requiredItemId": "item_e08658598j02_zgnr1g",
          "lockedText": "No Blockbuster card, no rental. It's in your jacket at home — Baz won't let you open a second account.",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e0865859f48w_zskqmj"
        },
        {
          "id": "hs_e48adf74y0w3k_z4",
          "name": "Westchase (Mario's)",
          "kind": "scenery",
          "rect": {
            "x": 2.6717267552182165,
            "y": 30.90334737180592,
            "w": 16,
            "h": 16
          },
          "consumesRequiredItem": false,
          "requiresFlag": "mario-called"
        }
      ]
    },
    {
      "id": "room_muj24gyp_sou079",
      "name": "Living Room, TV Side",
      "image": "assets/room-living_room_tv_side.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "auto",
      "entryText": "",
      "hotspots": [
        {
          "id": "hs_muj2fk6t_0sgb8y",
          "name": "Turn Around",
          "kind": "exit",
          "rect": {
            "x": 11.775700934579438,
            "y": 93.83946142300572,
            "w": 70.84112149532712,
            "h": 6.160538576994284
          },
          "targetRoomId": "room_muikx84l_36nb97",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859g5w2_z1tqz4",
          "name": "Gus's Room",
          "kind": "exit",
          "rect": {
            "x": 91.88034188034187,
            "y": 4.137980085348502,
            "w": 8.119658119658126,
            "h": 47.35561877667141
          },
          "targetRoomId": "room_muikx84l_io2kqq",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859zvzq_z7z887",
          "name": "TV",
          "kind": "scenery",
          "rect": {
            "x": 15,
            "y": 36,
            "w": 19,
            "h": 20
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk5kjau_8puluq",
          "name": "Maz and Baz",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 5.120910384068274,
            "w": 7.6923076923076925,
            "h": 68.84779516358464
          },
          "targetRoomId": "room_muk5y1kj_3sfnoi",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muj2rvon_2v6zou",
      "name": "Blockbuster Video",
      "image": "assets/room-blockbuster_video.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Blockbuster Video. The launch display is stacked with Gran Turismo 3 boxes — all empty cases. The kid in the red hoodie is clutching what looks like the last real copy.",
      "hotspots": [
        {
          "id": "hs_e0865859eqq2_zwjfc1",
          "name": "Launch Display",
          "kind": "scenery",
          "rect": {
            "x": 29,
            "y": 44,
            "w": 30,
            "h": 54
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e08658592cdy_zmgf83",
          "name": "Kid in Red Hoodie",
          "kind": "npc",
          "rect": {
            "x": 82,
            "y": 37,
            "w": 11,
            "h": 38
          },
          "requiredItemId": "item_e0865859ytof_z02cnb",
          "lockedText": "\"Last copy, dude. Unless you've got something better than a PlayStation game... like strings. I snapped my high E.\"",
          "grantsItemId": "item_e086585939q5_zj4p5b",
          "consumesRequiredItem": true,
          "setsFlags": [
            "has-gt3"
          ]
        },
        {
          "id": "hs_e0865859nh7v_ztx6fh",
          "name": "Race Driver Standee",
          "kind": "scenery",
          "rect": {
            "x": 74,
            "y": 33,
            "w": 8,
            "h": 34
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e0865859mqkp_zyjthy",
          "name": "Checkout Clerk",
          "kind": "npc",
          "rect": {
            "x": 52,
            "y": 33,
            "w": 18,
            "h": 22
          },
          "requiredItemId": "item_e086585939q5_zj4p5b",
          "lockedText": "\"Be kind, rewind. Also, bring something to the counter if you want to rent it.\"",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_e0865859o23x_zdfhh7",
          "hiddenByFlag": "in-civic"
        },
        {
          "id": "hs_e08658593zjd_zx6o0s",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 66,
            "y": 84,
            "w": 32,
            "h": 15
          },
          "targetRoomId": "room_muj17ok5_t7m7do",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74ilgqb_z4",
          "hiddenByFlag": "in-civic"
        },
        {
          "id": "hs_e2ff1200vq43u_z3",
          "name": "Exit to Parking Lot",
          "kind": "exit",
          "rect": {
            "x": 66,
            "y": 84,
            "w": 32,
            "h": 15
          },
          "targetRoomId": "room_e2ff11fe48u2b_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf747w3kg_z4",
          "requiresFlag": "in-civic"
        },
        {
          "id": "hs_e2ff1200rz4o0_z3",
          "name": "Checkout Clerk",
          "kind": "npc",
          "rect": {
            "x": 52,
            "y": 33,
            "w": 18,
            "h": 22
          },
          "requiredItemId": "item_e086585939q5_zj4p5b",
          "lockedText": "\"Be kind, rewind. Also, bring something to the counter if you want to rent it.\"",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_e2ff11fevk3b6_z3",
          "requiresFlag": "in-civic"
        }
      ]
    },
    {
      "id": "room_e2ff11fepr1ab_z3",
      "name": "A-School Parking",
      "image": "assets/room-a_school_parking.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "The Accord is right where you left it, looking deeply out of place among the student cars.",
      "hotspots": [
        {
          "id": "hs_e2ff11fegnv2n_z3",
          "name": "Maz's Accord",
          "kind": "exit",
          "rect": {
            "x": 16,
            "y": 63,
            "w": 24,
            "h": 27
          },
          "targetRoomId": "room_muj17ok5_t7m7do",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74tjgdh_z4"
        },
        {
          "id": "hs_e2ff11fe2wpnr_z3",
          "name": "School Doors",
          "kind": "exit",
          "rect": {
            "x": 88,
            "y": 33,
            "w": 6,
            "h": 22
          },
          "targetRoomId": "room_mrea1lyf_dhregf",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_e2ff11fedsllm_z3",
      "name": "R-School Parking",
      "image": "assets/room-r_school_parking.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Your red Civic waits in the lot, running on borrowed electrons and pure attitude.",
      "hotspots": [
        {
          "id": "hs_e2ff11fezpyqi_z3",
          "name": "Gus's Civic",
          "kind": "exit",
          "rect": {
            "x": 16,
            "y": 63,
            "w": 24,
            "h": 27
          },
          "targetRoomId": "room_e2ff11fe48u2b_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74dvysg_z4"
        },
        {
          "id": "hs_e2ff11fetzcpp_z3",
          "name": "School Doors",
          "kind": "exit",
          "rect": {
            "x": 88,
            "y": 33,
            "w": 6,
            "h": 22
          },
          "targetRoomId": "room_mrea1lyf_dhregf",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_e2ff11fe48u2b_z3",
      "name": "C-Dale Mabry Highway",
      "image": "assets/room-dale_mabry_highway.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "flagImages": [
        {
          "requiresFlag": "mario-called",
          "image": "assets/room-dale_mabry_highway-flag-mario_called.png"
        }
      ],
      "entryMode": "custom",
      "entryText": "Dale Mabry in your own car. Blockbuster's at North Pointe Plaza, Sam Ash is down by Fletcher, and Westchase is out west past Linebaugh. Where to?",
      "hotspots": [
        {
          "id": "hs_e2ff11fe1szd0_z3",
          "name": "Gaither Highschool",
          "kind": "exit",
          "rect": {
            "x": 53,
            "y": 27,
            "w": 19,
            "h": 13
          },
          "targetRoomId": "room_e2ff11fedsllm_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fd0acy8_z3",
          "setsFlags": [
            "civic-at-school"
          ],
          "clearsFlags": [
            "accord-at-school"
          ]
        },
        {
          "id": "hs_e2ff11fe7clu3_z3",
          "name": "Sam Ash Music",
          "kind": "exit",
          "rect": {
            "x": 64,
            "y": 57,
            "w": 13,
            "h": 11
          },
          "targetRoomId": "room_muikx84l_19o1o7",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fdi2igp_z3"
        },
        {
          "id": "hs_e2ff11feigiw1_z3",
          "name": "Sabal Palm (Home)",
          "kind": "exit",
          "rect": {
            "x": 49,
            "y": 10,
            "w": 14,
            "h": 11
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fd9stao_z3"
        },
        {
          "id": "hs_e2ff11feonomp_z3",
          "name": "Blockbuster Video",
          "kind": "exit",
          "rect": {
            "x": 53,
            "y": 42,
            "w": 11,
            "h": 9
          },
          "targetRoomId": "room_muj2rvon_2v6zou",
          "requiredItemId": "item_e08658598j02_zgnr1g",
          "lockedText": "No Blockbuster card, no rental. It's in your jacket at home — Baz won't let you open a second account.",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fe5qiet_z3"
        },
        {
          "id": "hs_e2ff11ferx6fd_z3",
          "name": "Westchase (Mario's)",
          "kind": "exit",
          "rect": {
            "x": 2.6717267552182165,
            "y": 30.90334737180592,
            "w": 16,
            "h": 16
          },
          "targetRoomId": "room_e2ff11fefy1ys_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fepo7fa_z3",
          "cutsceneVariants": [
            {
              "cutsceneId": "cutscene_e3e0cb09gt3w_zv",
              "requiresItemId": "item_e086585939q5_zj4p5b"
            }
          ],
          "requiresFlag": "mario-called"
        }
      ]
    },
    {
      "id": "room_e2ff11fefy1ys_z3",
      "name": "Mario's House",
      "image": "assets/room-mario_s_house.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Mario's place in Westchase. The guys are waving you down. Nobody here has Gran Turismo 3 yet; that part is on you.",
      "hotspots": [
        {
          "id": "hs_e2ff11fe06spz_z3",
          "name": "Mario",
          "kind": "npc",
          "rect": {
            "x": 11,
            "y": 48,
            "w": 10,
            "h": 22
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11fegjhvl_z3",
          "name": "Jesse",
          "kind": "npc",
          "rect": {
            "x": 23,
            "y": 48,
            "w": 10,
            "h": 22
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11feiy8kz_z3",
          "name": "Sam",
          "kind": "npc",
          "rect": {
            "x": 36,
            "y": 48,
            "w": 11,
            "h": 22
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_e2ff11feo4vjh_z3",
          "name": "Mario's Garage",
          "kind": "scenery",
          "rect": {
            "x": 16,
            "y": 30,
            "w": 26,
            "h": 18
          },
          "consumesRequiredItem": false,
          "hiddenByFlag": "has-gt3"
        },
        {
          "id": "hs_e48adf74lilw9_z4",
          "name": "Mario's Garage",
          "kind": "scenery",
          "rect": {
            "x": 16,
            "y": 30,
            "w": 26,
            "h": 18
          },
          "requiredItemId": "item_muk6i3wl_8h3nmc",
          "lockedText": "Mario flips on the garage TV and eyes your Gran Turismo 3. \"We could play it right here. Or pile into the Civic for game night at your place.\" Sam, from a beanbag: \"A real garage session needs supplies, man. Somebody's dad always has supplies.\"",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_e48adf742wpf1_z4",
          "requiresFlag": "has-gt3"
        },
        {
          "id": "hs_e2ff11fearngm_z3",
          "name": "Pile In for Game Night",
          "kind": "exit",
          "rect": {
            "x": 55,
            "y": 54,
            "w": 42,
            "h": 25
          },
          "targetRoomId": "room_muikx84l_4xxwr8",
          "requiredItemId": "item_e086585939q5_zj4p5b",
          "lockedText": "Mario shakes his head. \"Nobody's got GT3 yet, man. The Westchase Blockbuster sold out by noon. The one on Dale Mabry is the only shot. Go grab it and come back for us.\"",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e2ff11fe733aw_z3"
        },
        {
          "id": "hs_e371dfc6road_zg",
          "name": "Back on the Road",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 12
          },
          "targetRoomId": "room_e2ff11fe48u2b_z3",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_e48adf74kd9ph_z4"
        }
      ]
    },
    {
      "id": "room_mujwa19j_7ag5ox",
      "name": "Kitchen Drawer",
      "image": "assets/room-kitchen_drawer.png",
      "imageChangingHotspotIds": [
        "hs_mujwaoeo_eou8dk"
      ],
      "pickupImages": [
        {
          "takenHotspotIds": [
            "hs_mujwaoeo_eou8dk"
          ],
          "image": "assets/room-kitchen_drawer-taken-hs_mujwaoeo_eou8dk.png"
        }
      ],
      "entryMode": "auto",
      "entryText": "",
      "hotspots": [
        {
          "id": "hs_mujwaoeo_eou8dk",
          "name": "Jumper Cables",
          "kind": "item",
          "rect": {
            "x": 28.41121495327103,
            "y": 39.82576721425119,
            "w": 45.79439252336449,
            "h": 31.362790185728443
          },
          "grantsItemId": "item_e2ff11fditnvw_z3",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_mujxywed_ppxwil",
          "name": "Back",
          "kind": "exit",
          "rect": {
            "x": 0.1897533206831099,
            "y": 86.16550852811118,
            "w": 99.81024667931689,
            "h": 13.834491471888825
          },
          "targetRoomId": "room_muikx84l_36nb97",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muk5y1kj_3sfnoi",
      "name": "MazBaz Room",
      "image": "assets/room-mazbaz_room.png",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "auto",
      "entryText": "",
      "hotspots": [
        {
          "id": "hs_muk5zfqi_rzp3n4",
          "name": "Back to the Living Room",
          "kind": "exit",
          "rect": {
            "x": 0.42016806722689076,
            "y": 4.195804195804196,
            "w": 5.88235294117647,
            "h": 70.76923076923076
          },
          "targetRoomId": "room_muj24gyp_sou079",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk610sf_cegxjz",
          "name": "Closet",
          "kind": "exit",
          "rect": {
            "x": 87.60504201680672,
            "y": 10.909090909090908,
            "w": 8.193277310924373,
            "h": 62.65734265734265
          },
          "targetRoomId": "room_muk6fyxs_wtgsjd",
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_muk6fyxs_wtgsjd",
      "name": "Closet Baz Side",
      "image": "assets/room-closet_baz_side.png",
      "imageChangingHotspotIds": [
        "hs_muk6hy4a_c5hote"
      ],
      "pickupImages": [
        {
          "takenHotspotIds": [
            "hs_muk6hy4a_c5hote"
          ],
          "image": "assets/room-closet_baz_side-taken-hs_muk6hy4a_c5hote.png"
        }
      ],
      "entryMode": "auto",
      "entryText": "",
      "hotspots": [
        {
          "id": "hs_muk6hy4a_c5hote",
          "name": "Habrooj Jar",
          "kind": "item",
          "rect": {
            "x": 50,
            "y": 13.276435776082415,
            "w": 6.837606837606835,
            "h": 5.405405405405407
          },
          "grantsItemId": "item_muk6i3wl_8h3nmc",
          "consumesRequiredItem": false,
          "setsFlags": [
            "has-stash"
          ]
        },
        {
          "id": "hs_muk6m149_dasf6m",
          "name": "Baz clothes",
          "kind": "scenery",
          "rect": {
            "x": 20.94017094017094,
            "y": 37.55334281650071,
            "w": 63.46153846153845,
            "h": 23.61308677098151
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk6n1v8_tfycf1",
          "name": "Back to the Bedroom",
          "kind": "exit",
          "rect": {
            "x": 32.26495726495727,
            "y": 94.1678520625889,
            "w": 39.31623931623931,
            "h": 5.832147937411094
          },
          "targetRoomId": "room_muk5y1kj_3sfnoi",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk6nq3c_qu0h7c",
          "name": "Shoes on box",
          "kind": "scenery",
          "rect": {
            "x": 10.256410256410255,
            "y": 73.96870554765292,
            "w": 19.87179487179487,
            "h": 21.337126600284492
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk6ofb9_qwmtwu",
          "name": "Another box",
          "kind": "scenery",
          "rect": {
            "x": 70.08547008547008,
            "y": 72.83072546230441,
            "w": 17.948717948717956,
            "h": 22.759601706970116
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk6oyoy_b4x4c0",
          "name": "Baz's Duffel Bag",
          "kind": "scenery",
          "rect": {
            "x": 49.358974358974365,
            "y": 77.38264580369844,
            "w": 19.01709401709401,
            "h": 15.931721194879088
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_muk71oed_7emxcc",
          "name": "Box on the Wire Shelf",
          "kind": "scenery",
          "rect": {
            "x": 48.717948717948715,
            "y": 17.069701280227594,
            "w": 16.452991452991455,
            "h": 6.543385490753916
          },
          "consumesRequiredItem": false,
          "hiddenByFlag": "has-stash"
        },
        {
          "id": "hs_e48adf747ov6z_z4",
          "name": "Box on the Wire Shelf",
          "kind": "scenery",
          "rect": {
            "x": 48.717948717948715,
            "y": 17.069701280227594,
            "w": 16.452991452991455,
            "h": 6.543385490753916
          },
          "consumesRequiredItem": false,
          "requiresFlag": "has-stash"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "item_muikx84l_9005hm",
      "name": "Walkman",
      "icon": "📼",
      "description": "Gus's Sony Walkman with a dubbed Metallica '...And Justice for All' tape inside. The foam on the headphones died in 1999."
    },
    {
      "id": "item_muizrmyw_d85rt1",
      "name": "Civic Keys",
      "icon": "🗝️",
      "description": "Keys to Gus's own '94 Civic EX. The car is a legend. The battery is not."
    },
    {
      "id": "item_muiztzyy_9v990s",
      "name": "Accord Keys",
      "icon": "🔑",
      "description": "Maz's Accord keys on a worn Honda fob. The family car, and she trusts you with it. Handle with respect."
    },
    {
      "id": "item_muj1yjwu_iwbphs",
      "name": "Wrench",
      "icon": "🔧",
      "description": "Baz's 10 mm wrench. Every Lebanese dad owns exactly one and knows where it is at all times."
    },
    {
      "id": "item_e0865859e0zz_zzwhvq",
      "name": "Early Dismissal Pass",
      "icon": "🎫",
      "description": "A pink front-office early dismissal slip, already signed by an administrator whose signature looks a lot like Ben's handwriting."
    },
    {
      "id": "item_e0865859f5el_zjmp56",
      "name": "Twenty Bucks",
      "icon": "💵",
      "description": "A crisp twenty from Teta's last birthday card. It smells faintly of rose water."
    },
    {
      "id": "item_e08658598j02_zgnr1g",
      "name": "Blockbuster Card",
      "icon": "💳",
      "description": "Blue and yellow. Family account. No rentals without it, and the late fees on it are a family secret."
    },
    {
      "id": "item_e0865859ytof_z02cnb",
      "name": "Ernie Ball Strings",
      "icon": "🎸",
      "description": "A pack of Ernie Ball Slinky guitar strings, 10–46. Currency among metalheads."
    },
    {
      "id": "item_e086585939q5_zj4p5b",
      "name": "Gran Turismo 3",
      "icon": "🏁",
      "description": "Gran Turismo 3: A-Spec for PlayStation 2. The last copy in North Tampa. Real cars. Real driving. Finally."
    },
    {
      "id": "item_e2ff11fditnvw_z3",
      "name": "Jumper Cables",
      "icon": "🔌",
      "description": "Baz's red-and-black jumper cables, coiled like they have seen things. Every Tampa kitchen drawer has a pair."
    },
    {
      "id": "item_e2ff11fd9q4rx_z3",
      "name": "Flip Phone",
      "icon": "📱",
      "description": "Gus's Nokia-looking flip phone. 200 anytime minutes, unlimited nights and weekends, one bar of signal.",
      "phone": {
        "contacts": [
          {
            "id": "contact_e2ff11fdca4ji_z3",
            "number": "813 230 6693",
            "speaker": "Mario",
            "text": "Yo, Gus! The Civic's alive? Everybody's at my house: Jesse, Sam, me. The Westchase Blockbuster sold out of Gran Turismo 3 by noon, so if anybody's getting a copy it's you, on Dale Mabry. Grab it, swing by in the Civic, and we'll do game night at your place. Or we just stay in my garage. Westchase, off Linebaugh.",
            "requiresFlag": "civic-running",
            "notReadyText": "Gus! The guys are all at my place in Westchase. Nobody here has a car. Later, when you can actually drive over and pick us up, maybe we do a game night. Call me back when that Civic of yours starts.",
            "setsFlags": [
              "mario-called"
            ]
          }
        ],
        "wrongNumberText": "A woman answers: \"Tampa Bay Pest Control, is this about the palmetto bugs?\" You hang up. The palmetto bugs remain unaddressed."
      }
    },
    {
      "id": "item_mujwapzy_tvei61",
      "name": "Jumper Cables",
      "icon": "📦",
      "description": ""
    },
    {
      "id": "item_muk6i3wl_8h3nmc",
      "name": "Habrooj Jar",
      "icon": "🫙",
      "description": "A mason jar from the wire shelf in Baz's closet. Masking tape on the lid, HABROOJ in Baz's handwriting. It smells like a skunk broke into a fruit basket. Baz has no idea you know about this. Probably."
    }
  ],
  "initialInventory": [
    "item_muikx84l_9005hm",
    "item_e2ff11fd9q4rx_z3"
  ],
  "cutscenes": [
    {
      "id": "cutscene_e0865859vaqj_ztsr7n",
      "name": "Baz picks you both up",
      "frames": [
        {
          "image": "assets/cutscene-baz_picks_you_both_up-1.jpg",
          "text": "Baz's white van waits at the curb, the compressor on the roof rattling in the heat. Kus climbs in first; you're right behind him.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-baz_picks_you_both_up-2.jpg",
          "text": "Baz drives the work van the way he fixes a walk-in freezer: steady, unhurried, one hand on the wheel. Kus leans between the seats. The compressor hums on the roof all the way down Dale Mabry.",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-baz_picks_you_both_up-3.jpg",
          "text": "Dusk on Dale Mabry. Baz asks about school; the brothers say \"fine\" in perfect unison. Nobody mentions Blockbuster. Not yet.",
          "durationMs": 5500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e086585911ab_zfcnkf",
      "name": "Accord: out of Sabal Palm",
      "frames": [
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm-1.jpg",
          "text": "Into Maz's Accord. Kus buckles up, you turn the key, and the old Honda starts on the first try, like it always does.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm-2.png",
          "text": "The Sabal Palm gate crawls open, slow as a government office. Maz's Accord hums like it knows it's borrowed.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm-3.png",
          "text": "The exit onto Dale Mabry. Stop sign, a gap in traffic, a prayer to the Honda gods.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e08658595xy9_zdva6v",
      "name": "Accord: back home",
      "frames": [
        {
          "image": "assets/cutscene-accord_back_home-1.jpg",
          "text": "South on Dale Mabry. Taco Bus, car wash, a Publix, another Publix.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-accord_back_home-2.png",
          "text": "Back through the Sabal Palm entrance, nice and slow, like you were never gone.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e0865859f7sw_zvttqc",
      "name": "Accord: north to Fletcher",
      "frames": [
        {
          "image": "assets/cutscene-accord_north_to_fletcher-1.jpg",
          "text": "North on Dale Mabry to Fletcher. Every light turns red exactly when you reach it, like the city can smell your hurry.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-accord_north_to_fletcher-2.jpg",
          "text": "Sam Ash Music. Home of the Les Paul you'll never afford and the metalheads who work here to be near it.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e0865859f48w_zskqmj",
      "name": "Accord: the race to Blockbuster",
      "frames": [
        {
          "image": "assets/cutscene-accord_the_race_to_blockbuster-1.jpg",
          "text": "The sun goes down over Dale Mabry in a big orange Florida sulk. Somewhere, somebody is renting your copy.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-accord_the_race_to_blockbuster-2.jpg",
          "text": "North Pointe Plaza, dead ahead. 7:52. Blockbuster closes the new-release wall at eight.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-accord_the_race_to_blockbuster-3.jpg",
          "text": "North Pointe Plaza. The banner's still up: GRAN TURISMO 3 LAUNCH DAY. Whether there's a game left is another question.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e0865859o23x_zdfhh7",
      "name": "Home with Gran Turismo 3",
      "frames": [
        {
          "image": "assets/cutscene-home_with_gran_turismo_3-1.jpg",
          "text": "The drive home is the slowest you've ever driven. Precious cargo rides shotgun.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-accord_back_home-2.png",
          "text": "The Sabal Palm entrance never looked so good. Precious cargo, riding shotgun.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-home_with_gran_turismo_3-3.jpg",
          "text": "Sabal Palm, after dark. Still humid. Still not Beirut. But tonight, for the first time in a year, you don't mind.",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-home_with_gran_turismo_3-4.jpg",
          "text": "The PlayStation 2 hums. The intro music swells. Baz snores through the whole thing, which is its own kind of blessing.",
          "durationMs": 6000
        }
      ],
      "endsGame": true,
      "endingHeading": "Game Over. Game On.",
      "endingText": "Gus got Gran Turismo 3 on launch day. Kus, Ben, Jesse, Victor, Andy, Mario and Sam were on the couch by nine.\n\nThe Accord was back in its spot before Maz and Baz woke up. Mostly."
    },
    {
      "id": "cutscene_e2ff11fdf486u_z3",
      "name": "Accord: to Gaither",
      "frames": [
        {
          "image": "assets/cutscene-accord_back_home-1.jpg",
          "text": "Dale Mabry, heading back toward school. Voluntarily. Nobody will believe this.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-accord_to_gaither-2.png",
          "text": "Gaither High on the right. The crossing guard gives the Accord a look.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fdvfb5l_z3",
      "name": "Civic: out of Sabal Palm",
      "frames": [
        {
          "image": "assets/cutscene-civic_out_of_sabal_palm-1.jpg",
          "text": "Kus coils Baz's cables and drops the Accord's hood. You turn the key and the Civic starts on its own. No jump needed, ever again.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-civic_out_of_sabal_palm-2.png",
          "text": "The Sabal Palm gate crawls open, slow as a government office. Your Civic idles like it's proud of itself. It should be.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-civic_out_of_sabal_palm-3.png",
          "text": "The exit onto Dale Mabry. Stop sign, a gap in traffic, a prayer to the Honda gods. Your own car. Your own rules. Mostly Baz's rules.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fd9stao_z3",
      "name": "Civic: back home",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-1.jpg",
          "text": "Dale Mabry in the Civic. The tape deck eats one more inch of Metallica.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-civic_back_home-2.png",
          "text": "Back into Sabal Palm. The Civic purrs. The battery, for once, has no complaints.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fd0acy8_z3",
      "name": "Civic: to Gaither",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-1.jpg",
          "text": "Back toward school, in your own car. Power move.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-civic_to_gaither-2.png",
          "text": "Gaither High. The crossing guard waves. You pretend you don't see.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fdi2igp_z3",
      "name": "Civic: north to Fletcher",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-1.jpg",
          "text": "North on Dale Mabry toward Fletcher, one hand on the wheel like Baz.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-civic_north_to_fletcher-2.jpg",
          "text": "Sam Ash. The Civic noses into the lot like it belongs next to the tour vans.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fe5qiet_z3",
      "name": "Civic: the race to Blockbuster",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-1.jpg",
          "text": "Dusk on Dale Mabry. Somewhere, somebody is renting your copy.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-civic_the_race_to_blockbuster-2.png",
          "text": "North Pointe Plaza, dead ahead. The blue-and-yellow ticket sign is a lighthouse.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fepo7fa_z3",
      "name": "Civic: out to Westchase",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-1.jpg",
          "text": "Dale Mabry to Linebaugh, windows down. Kus called shotgun before you even had your keys out.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-civic_out_to_westchase-2.jpg",
          "text": "West on Linebaugh into Westchase: new stucco, perfect lawns, and a subdivision sign for every mood.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e2ff11fevk3b6_z3",
      "name": "Civic: home with Gran Turismo 3",
      "frames": [
        {
          "image": "assets/cutscene-civic_back_home-2.png",
          "text": "The Sabal Palm entrance, after dark. Gran Turismo 3 rides shotgun in your own car.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-civic_home_with_gran_turismo_3-2.png",
          "text": "Sabal Palm, after dark. Still humid. Still not Beirut. But tonight, for the first time in a year, you don't mind.",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-home_with_gran_turismo_3-4.jpg",
          "text": "The PlayStation 2 hums. The intro music swells. Baz snores through the whole thing, which is its own kind of blessing.",
          "durationMs": 6000
        }
      ],
      "endsGame": true,
      "endingHeading": "Game Over. Game On.",
      "endingText": "Gus got Gran Turismo 3 on launch day, in his own car, on a battery that had been dead at lunch. Kus, Ben, Jesse, Victor, Andy, Mario and Sam were on the couch by nine.\n\nThe Civic started the next morning on the first try. Nobody was more surprised than the Civic."
    },
    {
      "id": "cutscene_e2ff11fe733aw_z3",
      "name": "Civic: game night",
      "frames": [
        {
          "image": "assets/cutscene-civic_game_night-1.jpg",
          "text": "Five guys, one Civic, zero legroom. Sam narrates the drive like a nature documentary.",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-civic_back_home-2.png",
          "text": "Sabal Palm. The Civic's suspension files a formal complaint.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-civic_game_night-3.png",
          "text": "Game night. Gus's hard-won copy goes in the PlayStation, the lights go off, and nobody talks about school until Monday.",
          "durationMs": 6500
        }
      ],
      "endsGame": true,
      "endingHeading": "Game Night.",
      "endingText": "Gus, Kus, Jesse, Sam and Mario raced until two in the morning. Mario picked the STI every time. Nobody beat Kus's lap on Trial Mountain.\n\nThe Civic's battery never died again. Mostly."
    },
    {
      "id": "cutscene_e3e0cb09gt3w_zv",
      "name": "Civic: GT3 in hand, out to Westchase",
      "frames": [
        {
          "image": "assets/cutscene-civic_gt3_in_hand_out_to_westchase-1.png",
          "text": "Out of North Pointe Plaza with the last copy in town. Kus holds it up to every car on Dale Mabry like a championship belt.",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-civic_gt3_in_hand_out_to_westchase-2.png",
          "text": "West on Linebaugh at dusk. Kus reads the back of the case out loud by the dome light, including the legal fine print.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-civic_gt3_in_hand_out_to_westchase-3.png",
          "text": "Westchase. Kus drums the case on the dashboard: \"Honk when we get there. No — honk NOW.\"",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74tjgdh_z4",
      "name": "Accord: start at Gaither",
      "frames": [
        {
          "image": "assets/cutscene-accord_start_at_gaither-1.jpg",
          "text": "Back in Maz's Accord in the Gaither lot. Kus buckles up, the old Honda starts on the first try, and you roll out before the assistant principal looks over.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74dvysg_z4",
      "name": "Civic: start at Gaither",
      "frames": [
        {
          "image": "assets/cutscene-civic_start_at_gaither-1.jpg",
          "text": "Back in the Civic in the Gaither lot. One turn of the key and it starts, like it never died at all.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74sovpf_z4",
      "name": "Accord: start at Sam Ash",
      "frames": [
        {
          "image": "assets/cutscene-accord_start_at_sam_ash-1.jpg",
          "text": "Back in the Accord outside Sam Ash, strings or no strings. It starts first try, like always. Back to Dale Mabry.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74hohwj_z4",
      "name": "Civic: start at Sam Ash",
      "frames": [
        {
          "image": "assets/cutscene-civic_start_at_sam_ash-1.jpg",
          "text": "Back in the Civic outside Sam Ash. The engine catches on the first turn. You could get used to this.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74ilgqb_z4",
      "name": "Accord: start at Blockbuster",
      "frames": [
        {
          "image": "assets/cutscene-accord_start_at_blockbuster-1.jpg",
          "text": "Back in the Accord in the North Pointe Plaza lot. The Blockbuster sign buzzes; the Accord starts first try.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf747w3kg_z4",
      "name": "Civic: start at Blockbuster",
      "frames": [
        {
          "image": "assets/cutscene-civic_start_at_blockbuster-1.jpg",
          "text": "Back in the Civic under the Blockbuster sign. It starts on its own now. Onto Dale Mabry.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74kd9ph_z4",
      "name": "Civic: start at Mario's",
      "frames": [
        {
          "image": "assets/cutscene-civic_start_at_mario_s-1.jpg",
          "text": "Mario, Jesse and Sam wave from the driveway. The Civic fires right up. Back toward Dale Mabry.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74b7u9o_z4",
      "name": "Accord: out of Sabal Palm (after the jump)",
      "frames": [
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm_after_the_jump-1.jpg",
          "text": "Into Maz's Accord, still nose to nose with your Civic. First try, like always. You back it out of the jump spot.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm-2.png",
          "text": "The Sabal Palm gate crawls open, slow as a government office. Maz's Accord hums like it knows it's borrowed.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-accord_out_of_sabal_palm-3.png",
          "text": "The exit onto Dale Mabry. Stop sign, a gap in traffic, a prayer to the Honda gods.",
          "durationMs": 4500
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf745e325_z4",
      "name": "Civic: dead battery",
      "frames": [
        {
          "image": "assets/cutscene-civic_dead_battery-1.jpg",
          "text": "You slide into the Civic and turn the key. Click. Click. The battery light glows red, and that is all it does.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-civic_dead_battery-2.jpg",
          "text": "Kus pats your shoulder. \"Dead again, bro.\" You need a jump: Baz's jumper cables live in the kitchen drawer, and Maz's Accord can do the rest.",
          "durationMs": 6000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf74dew5s_z4",
      "name": "Civic: the jump",
      "frames": [
        {
          "image": "assets/cutscene-civic_the_jump-1.jpg",
          "text": "You pull Maz's Accord around nose to nose with the Civic and pop both hoods. Red to red, black to black, just like Baz showed you.",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-civic_the_jump-2.jpg",
          "text": "The Accord idles. The clamps bite. One tiny spark, one tiny prayer.",
          "durationMs": 4500
        },
        {
          "image": "assets/cutscene-civic_the_jump-3.jpg",
          "text": "You turn the key. The Civic coughs, catches, and ROARS. Kus goes full Jordan-at-the-buzzer. From now on, it starts on its own.",
          "durationMs": 6000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_e48adf742wpf1_z4",
      "name": "Baz's stash: the garage session",
      "frames": [
        {
          "image": "assets/cutscene-baz_s_stash_the_garage_session-1.jpg",
          "text": "Mario's garage, Westchase. You pull Baz's jar out of your backpack. Mario's eyes go huge. Jesse covers his mouth. Sam just says, \"Dude.\"",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-baz_s_stash_the_garage_session-2.jpg",
          "text": "Gran Turismo 3 goes into the PlayStation 2. The garage door comes down. The mini fridge becomes the pit stop.",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-baz_s_stash_the_garage_session-3.jpg",
          "text": "Sam works the lighter like it's a Scorpion fatality. Jesse declares the garage \"basically an HDTV now.\"",
          "durationMs": 5500
        },
        {
          "image": "assets/cutscene-baz_s_stash_the_garage_session-4.jpg",
          "text": "2 AM. Nobody can finish a lap. Kus pauses the game on Trial Mountain for eleven minutes because he can't stop laughing.",
          "durationMs": 6500
        }
      ],
      "endsGame": true,
      "endingHeading": "Habrooj Night.",
      "endingText": "Gus, Kus, Mario, Jesse and Sam played Gran Turismo 3 in Mario's garage until the birds started. Nobody remembers who won. Everybody remembers the laughing.\n\nThe jar was back on Baz's shelf before he woke up. Baz never said a word. The next Saturday he bought everybody Taco Bus and smiled the whole time."
    }
  ],
  "title": {
    "image": "assets/title.png",
    "heading": "Dale Mabry & Eggrish",
    "subheading": ""
  },
  "intro": {
    "enabled": true,
    "image": "assets/intro.png",
    "text": ""
  },
  "music": "assets/music.m4a",
  "synthScore": {
    "preset": "off",
    "volume": 0.36
  },
  "responses": {
    "entry": {
      "room_muixg6v9_s2mkhf": "You step into the kitchen, where the Florida heat has followed you like a debt collector. The counter catches the light in a quiet, domestic glare; somewhere beyond it, the promise of Gran Turismo 3 waits in a Blockbuster aisle, already attracting the desperate.",
      "room_muj24gyp_sou079": "You step into the living room’s TV side, where the afternoon light lies thin and yellow across the carpet. The house is quiet, but the humidity has followed you in like a bill collector.",
      "room_mujwa19j_7ag5ox": "You lean over the kitchen drawer, greeted by the faint smell of old takeout and the low hum of Tampa humidity. Somewhere in this house, freedom has keys; here, it’s mostly forks and bad prospects.",
      "room_muk5y1kj_3sfnoi": "You step into Maz and Baz’s room, where the lamplight turns everything cozy and the air carries a sweet, fruity pungency. You breathe in once, then reconsider; Tampa has enough mysteries without adding this one to the case file.",
      "room_muk6fyxs_wtgsjd": "You step into Baz’s side of the closet, where the air hangs sweet and pungent, like fruit that’s made a few poor decisions. His clothes and boxes loom in the dimness, and the scent seems to have a private appointment with you."
    },
    "verbs": {
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/look": "Victor leans back beneath the commons’ fluorescent glare, wearing the calm, practiced look of a man about to mention Navy SEAL training. His eyes flick toward Ben; he’s heard the kid can get anybody out of school early, though Victor’s Supra, naturally, remains the more important detail.",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/use": "You lean toward Victor, but he’s already steering the conversation toward Navy SEAL training—apparently the only thing more grueling than that is listening to him explain why he always picks the Supra. He says he heard Ben can get anybody out of school early, then adds that it’s the car he actually drives.",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/talk": "You ask Victor about Gran Turismo 3. “Always the Supra,” he says. “Same one I actually drive. Navy SEAL training was more insane, though.”",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/kick": "Your kick sends Victor’s chair skidding across the commons, leaving him upright and somehow still discussing Navy SEAL training. He says the landing was nothing compared to the obstacle course—and, naturally, his Supra handles worse.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/look": "Andy leans in with the restless energy of a man awaiting either a title match or the lunch bell, his eyes drifting to your Walkman. He’s ready to join any scheme involving guitars, WWF, or the Lightning; Gran Turismo barely registers, though he’s happy to tag along—and keeps mentioning how badly Ben wants to hear that Metallica tape.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/use": "Andy lights up at the thought of an adventure, though Gran Turismo earns only a polite nod. His eyes drift to your Walkman again; Ben, he reminds you, has been dying to hear that Metallica tape.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/talk": "“Dude, that Undertaker match was insane,” Andy says, leaning over the lunch table. His eyes drift to your Walkman. “Also, Ben’s been dying to hear that Metallica tape—after lunch, we should hit Blockbuster for that new Gran Turismo thing.”",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/kick": "You kick Andy in the shin. His WWF enthusiasm survives the impact, though his invitation to tag along briefly enters a commercial break.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/look": "Jesse’s riding the glow of a brand-new HDTV, and he talks about it like he personally invented clear pictures. Inferior TV “burns ass,” he says; Blockbuster on Dale Mabry got five copies of Gran Turismo 3, and one’s already gone.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/use": "You lean over Jesse, who’s still basking in the glow of his new HDTV. “Five copies at Blockbuster,” he says. “One’s already gone—and now that I’ve seen HD, regular TV just burns ass.”",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/talk": "“Blockbuster on Dale Mabry got five copies of Gran Turismo 3. One’s already gone. And now that I’ve got HDTV, regular TV just burns ass.”",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/kick": "Your foot clips Jesse’s chair, and he lurches forward with the dignity of a man whose new HDTV has taught him to expect better resolution from life. “Careful,” he says, settling back. “Blockbuster’s got five copies of Gran Turismo 3. One’s already gone—and I won’t watch this in ass-burning standard definition.”",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/look": "You study Maurice: soft-spoken, mild-mannered, and gazing somewhere past the lunch trays, where the elves presumably have better food. A faint, meditative tune seems to follow him around; mention Gran Turismo 3 and his eyes sharpen at the thought of driving the STI.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/use": "You lean toward Maurice, but he’s busy contemplating Middle-earth and the Subaru STI he’ll soon drive in Gran Turismo 3. He offers a soft, distracted smile; the elf fantasies remain classified.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/talk": "“I’m looking forward to Gran Turismo 3. The Impreza STI handles beautifully… rather like an elf on a woodland path, I imagine.”",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/kick": "You kick Maurice under the table. He flinches, then goes quiet again—though the meditative music in his head seems to take a darker turn. “The STI,” he murmurs, as if summoning a mount from Rivendell.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/look": "You look closely at Sam. He’s still buzzing about his naked sprint down Route 41, a tale Tampa’s humidity has apparently failed to smother; now he’s ready to trade Mortal Kombat’s fire and ice for Gran Turismo, sight unseen.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/use": "You try to pick Sam up, but he’s not luggage; he’s the guy who ran naked down Route 41 last night and is now campaigning for Scorpion versus Sub-Zero. He’s still keen on Blockbuster and Gran Turismo 3, though—fire and ice can wait until after the rental.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/talk": "“Last night I went streaking down Route 41!” Sam says, grinning like the arrest record is already framed. “I’m a Mortal Kombat guy—Scorpion versus Sub-Zero, fire and ice! But sure, let’s hit Blockbuster for this Gran Turismo thing.”",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/kick": "Sam is still describing his naked sprint down Route 41 when you kick him. He folds with a startled “Fire and ice!” and, once upright, announces he’s still coming to Blockbuster—apparently curiosity survives even a direct hit.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/look": "Ben leans back like the commons came furnished around him, his binder open just enough to expose a pad of signed early-dismissal passes. He’s talking Gran Turismo 3 menu music—something obscure about the composer, naturally—and the passes look suspiciously obtainable for the price of your Walkman and Metallica tape.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/use": "You catch Ben’s eye and try to usher him along, but he stays planted, cool as a man with nowhere to be and the obscure facts to prove it. His binder remains closed; the early-dismissal passes aren’t going anywhere without a trade.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/talk": "“Gran Turismo 3’s menu music is way better than it has any right to be. I’ve got an early pass if you’re willing to part with that Walkman for a while.”",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/kick": "Your kick sends Ben’s chair skidding across the commons, stopping just short of a tragic encounter with his lunch. He looks up, cool as ever. “Nice. You know the Gran Turismo 3 menu music was recorded by a band called Feeder?”",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/look": "The commons doors offer a view of the parking lot, where freedom sits baking under the Florida sun. Beyond them, Gran Turismo 3 awaits—or, more likely, a line of people who got there first.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/look": "Kus is still wearing his basketball swagger, though the moves have left him sweating through his shirt. He keeps glancing toward the exit, eager to get home, get picked up by Baz, and start worrying about whether Blockbuster has any copies of GT3 left.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/use": "Kus is too busy replaying his Jordan moves to be picked up, and besides, Baz is bringing the van. He’s equally useless as a steering wheel, though his enthusiasm for GT3 is at least roadworthy.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/talk": "I’m telling you, that last move was Jordan all the way. Soon as Baz gets us home, we’re going for GT3—before every copy in Tampa disappears.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/kick": "The foot meets Kus’s shin instead of the basketball—Jordan moves, apparently, don’t cover defense. Kus glares at you while the commons carries on, already counting the minutes until Baz’s van and Gran Turismo 3.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/look": "You catch your reflection in the commons window: black blowout hair pinned by a headband, a goatee, and a Metallica shirt doing its best to survive Tampa’s humidity. At seventeen, you’ve already mastered the look of a man waiting for the bell—and possibly the end of Florida.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/use": "You give yourself a quick once-over: Metallica shirt, headband, goatee—an outfit built for surviving both high school and Florida humidity. Unfortunately, you’re still sitting in the commons, and picking yourself up would require standing.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/talk": "You’re Gus: Metallica shirt, fresh blowout, and the look of a man who’s already lost an argument with Florida’s humidity. Kus is somewhere in the commons, probably discussing last night’s WWF match like it changed the course of history.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/kick": "You kick yourself in the shin. The blowout survives; your dignity takes a brief, unscheduled lunch break.",
      "room_mrea1lyf_dhregf/hs_e2ff11fexvmgl_z3/look": "The commons doors stand between you and the parking lot, their wired glass clouded by fingerprints and Florida glare. Beyond them, the cars wait in the heat—one of them possibly yours, if the afternoon doesn’t develop other plans.",
      "room_mrea1lyf_dhregf/hs_e2ff11feetznc_z3/look": "You give the doors a closer look. Beyond the glass, the parking lot shimmers in the Florida heat, where your car is presumably waiting to be driven somewhere more important than school.",
      "room_muikx84l_io2kqq/hs_muikx84l_tpq0ru/look": "The door opens onto the living room, where Arabic news blares from the television with the urgency of a man reporting the weather during an invasion. Beyond it, the front door holds the keys; apparently, even in Florida, freedom hangs on a hook.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/look": "You lift the keyboard. A crisp twenty waits underneath, Teta’s birthday money hiding from the bills and the humidity. It smells faintly of paper and possibility.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/kick": "Your foot connects with the desk, which answers with a hollow thud and the sort of dignity usually reserved for furniture in a police lineup. The keyboard shifts; beneath it, a crisp twenty peeks out from Teta’s birthday card, apparently less fragile than your toes.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/look": "Your jacket hangs in the closet, still carrying a faint trace of outside air—or perhaps that’s just the Tampa humidity refusing to leave. The inside pocket sags with the family Blockbuster card, a small plastic ticket to automotive glory.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/kick": "Your boot finds the jacket in the closet, which is an odd way to get dressed but a reliable way to start a search. Something plastic thumps from its inside pocket: the family Blockbuster card, still carrying the faint scent of old popcorn and overdue fees.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/look": "The Supra, Skyline, and NSX sit in a neat row on the windowsill, their paint dulled by Tampa’s sun and a thin film of dust. You’ve been studying them for Gran Turismo; so far, none has offered to drive you to Blockbuster.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/use": "You eye the Supra, Skyline, and NSX lined up on the sill, a tiny garage for cars you can’t afford yet. They remain exactly where they are, practicing patience better than you do.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/talk": "The Supra, Skyline, and NSX sit in formation on the windowsill, awaiting a race track and a less humiliating scale. They offer no advice; they’re die-cast.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/kick": "You kick the die-cast Skyline. It rattles across the sill and clips the NSX, a small-scale pileup with no insurance forms.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/look": "The bed sits beneath a Metallica poster, rumpled but not especially inviting. You could lie down, sure—but Gran Turismo 3 is out today, and the bed has never once stocked a copy.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/use": "You eye the bed. It offers the soft, forgiving oblivion of sleep; Gran Turismo 3 offers tire smoke and glory. You stay standing.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/talk": "The bed offers no advice, only a rumpled blanket and the quiet confidence of an object that’s never had to find a copy of Gran Turismo 3 before Blockbuster closes. Nap time can wait. Probably.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/kick": "You kick the bed. It gives a soft, unimpressed creak; Gran Turismo 3 remains unreleased, and the bed remains a bed.",
      "room_muikx84l_36nb97/hs_muikx84l_9t0asp/look": "The counter holds both sets of keys, glinting beneath the kitchen light: Maz’s Honda keys and your Civic’s. With Maz and Baz asleep, the only thing watching them is the clock—and it has never been much of a cop.",
      "room_muikx84l_36nb97/hs_muikx84l_jt1ldn/look": "The front door is a beige slab with a brass knob, separating you from Tampa’s humid, mosquito-filled promise of freedom. Beyond it: the Honda keys, Blockbuster, and the slim chance they still have Gran Turismo 3.",
      "room_muikx84l_36nb97/hs_muj2e0lo_4pidrd/look": "The living room waits behind you, all beige upholstery and Florida gloom. Somewhere on the wall by the front door, the keys hang within easy reach—assuming you’re prepared to explain why you need them.",
      "room_muikx84l_36nb97/hs_muj2eyiq_b1uxyz/look": "The floral couch faces the TV and the hallway to your room, its upholstery blooming with flowers that have seen better days. It’s comfortable enough to swallow an afternoon, which is how most afternoons disappear around here.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/look": "Baz is folded into the sectional, snoring in two languages while the day’s refrigeration calls melt into his dreams. The keys hang by the front door, just beyond his reach—and waking him would invite questions with no easy exits.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/use": "You reach for Baz, but his snoring rolls on in two languages, neither of them granting permission to borrow a car. Waking him would bring questions; the keys remain tantalizingly close and legally complicated.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/talk": "“Mm—refrigerant’s low… yalla, call the supplier…” Baz snores on, leaving the keys and your hopes undisturbed.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/kick": "Your foot thumps the sectional. Baz’s snoring pauses, switches languages, and resumes with renewed conviction. The car keys remain safely out of reach—along with the unpleasant possibility of questions.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/look": "Maz dozes upright on the couch, paused mid-sentence like a radio that’s lost the station. One ear remains on duty; the keys hang by the front door, just beyond her reach—and, unfortunately, yours.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/use": "You try to sneak past Maz. Her eyes stay shut, but her sentence continues without missing a beat; the keys hang nearby, suddenly much louder than they look.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/talk": "“Gus, if you’re thinking about taking the car, the keys are on the counter. And if you wake me up to ask, they’re staying there.”",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/kick": "Your foot thumps the couch. Maz’s eyes open before the cushions stop bouncing; the rest of her sentence arrives a beat later, aimed squarely at you. The keys remain on the wall, under the watchful eye of maternal justice.",
      "room_muikx84l_36nb97/hs_mujw5brr_6e5lab/look": "You peer into the kitchen drawer. It’s a shallow wooden box of tangled forks, expired coupons, and other household mysteries; no car keys, unless Honda has begun issuing spoons.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/look": "Maz’s white ’91 Accord sits in the driveway, sensible as a tax form and twice as exciting. The Florida sun bleaches its paint while the humidity works on your mood; somewhere inside, the keys are the only interesting part.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/look": "Maz’s white ’91 Accord sits nose-to-nose with your Civic, its hood raised like it’s confessing to nothing. The engine runs fine; the only thing keeping it here is a set of keys and your family’s faith in parking geometry.",
      "room_muikx84l_4xxwr8/hs_muikx84l_z72ldx/look": "The apartment door stands between you and the blessedly less humid driveway, its paint chipped around the lock. You could go back inside, where the keys hang by the front door—assuming the door hasn’t decided to make a point of it.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/look": "Your red Civic sits in the driveway, all teenage horsepower and one very adult problem. The battery gives you a single click when you turn the key—its last word, apparently.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/look": "The white Ford van sits in the driveway, its roof compressor humming like it knows what Florida does to hummus. You can still picture Baz driving it across the state, chasing the American Dream one tub at a time; the van looks less sentimental about the mileage.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/use": "You try the van’s door; it stays locked, loyal to Baz and the thousand-mile hummus trade. For a moment, the compressor hums in memory—then there’s only the driveway, and Florida heat doing its best to kill the mood.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/talk": "You give the van a hopeful look. It answers with the silence of a machine that’s seen too many Florida miles and has no plans to discuss them.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/kick": "You kick Baz’s white van. It answers with the dull, airless thud of a machine that’s hauled hummus across Florida and has no patience left for teenage diplomacy.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/look": "You crouch beside the driveway, where a wrench lies in the damp Florida grit. Its jaws are nicked, its handle slick with oil; even the tools here seem to sweat.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/kick": "Your toe connects with the wrench. It skitters across the driveway and stops beneath the Accord, where even Maz’s Honda has better parking sense than you do.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/look": "Your red Civic EX sits beside Maz’s Accord, hood shut and battery dead enough to manage one contemptuous click. Baz’s jumper cables could bring it back, provided the cars meet nose to nose—a romance more practical than most.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/use": "You turn the key. The Civic answers with a lonely click, like it’s seen the price of gas and lost the will to live. Baz’s jumper cables and Maz’s Accord might change its mind.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/talk": "Your red Civic sits beside Maz’s Accord, its battery as dead as a private eye’s optimism. The key gets you one click; the car declines to elaborate.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/kick": "Your boot meets the Civic’s door with a hollow thunk. The battery remains dead, and your toe now has a grievance.",
      "room_muikx84l_4xxwr8/hs_e2ff11fea4e4y_z3/look": "The red ’94 Civic EX sits in the driveway, its paint dulled by Tampa’s damp heat and its hood reflecting a crooked strip of sky. It once needed a jump; now it starts on its own, which passes for loyalty around here.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/look": "The honeyburst Les Paul Custom hangs on the back wall, polished to a glow under the store lights. Its price tag sits below it like a small, well-aimed insult.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/use": "You reach for the honeyburst Les Paul, but the glass case keeps your fingers—and your finances—at a respectful distance. The dream guitar glows on the wall, while your wallet performs a quiet, tragic solo.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/talk": "The Les Paul Custom hangs in its honeyburst glory, beyond your budget and apparently beyond the reach of small talk. It offers no reply—just a polished silence that costs more than your car.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/kick": "Your boot thuds against the honeyburst Les Paul’s display case. The guitar remains a holy relic; your toe, meanwhile, has discovered the less forgiving side of retail security.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/look": "The clerk’s long hair hangs like a curtain over a face already bored by your existence. Behind him, Ernie Ball Slinkys wait on the rack; twenty bucks buys a pack and, apparently, an unsolicited seminar on Kirk Hammett’s tone.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/use": "The clerk watches your hand drift toward the strings with the calm of a man who’s seen this scene end badly before. “Twenty bucks,” he says, already winding up a lecture about Kirk Hammett’s tone.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/talk": "He eyes your Metallica shirt, then the strings behind him. “Twenty bucks. Ernie Ball Slinkys. Kirk Hammett’s tone is mostly in the fingers, but nobody wants to hear that.”",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/kick": "Your kick thuds into the counter, startling the clerk just enough to pause his lecture on Kirk Hammett’s tone. He eyes your foot, then the Les Paul; neither looks impressed.",
      "room_muikx84l_19o1o7/hs_muikx84l_g1ocjq/look": "The glass doors give you a warped reflection: black blowout, Metallica shirt, and the general look of a guy who’d rather be in Khaldeh. Beyond them, the Sam Ash parking lot shimmers in the Florida heat, doing a convincing impression of a place you shouldn’t have to walk through twice.",
      "room_muikx84l_19o1o7/hs_e2ff1200l1f9r_z3/look": "You lean close to the glass doors. Outside, the parking lot shimmers in the Tampa heat, and your red Civic waits beyond the glare—looking almost cool enough to forgive the weather. Almost.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/look": "The Civic keys lie on the kitchen counter, small and silver, beside the usual clutter of a household pretending it has everything under control. You can almost hear your red Civic cooling in the driveway, eager to escape the Florida humidity. Almost.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/kick": "Your foot meets the counter with a hollow thunk. The Civic keys don’t budge; apparently even they know better than to take orders from a teenager’s shoe.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/look": "The Accord keys sit on the kitchen counter, small and metallic, with a scuffed Honda fob that’s seen more Florida summers than anyone deserves. They’re close enough to take; so is the trouble that comes with them.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/kick": "You kick the kitchen counter. It doesn’t give up the Accord keys, but your toe learns something about laminate.",
      "room_muixg6v9_s2mkhf/hs_muj3enq0_hck3c3/look": "The kitchen counter is a beige laminate continent, cluttered with mail and a bowl that once held fruit. The living room—and the car keys—lie beyond it, just out of reach of the household’s usual excuses.",
      "room_muizbmtc_hoou10/hs_e08658591p9y_zmr94s/look": "Baz’s white Ford van idles at the curb, ladders rattling beneath the compressor strapped to its roof. It smells faintly of cold air and old coffee; Baz waits inside, ready to haul you and Kus home before Tampa’s humidity claims another victim.",
      "room_muizbmtc_hoou10/hs_e08658598z5l_zylnsn/look": "The school doors loom behind you, glass reflecting a Florida sky with all the warmth and subtlety of a heat lamp. Through them waits Gaither High: fluorescent lights, stale air, and whatever passed for civilization before lunch.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/look": "The assistant principal’s short-sleeved shirt clings to him like the humidity has filed a claim. He scans the parking lot with the patient suspicion of a man who knows every escape route—and that your pass is valid, technically.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/use": "You flash your pass. It’s valid, technically, and the assistant principal inspects it with the grim suspicion of a man who’s seen teenagers lie in every font. He waves you through; the humidity doesn’t.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/talk": "The assistant principal scans the parking lot with the grim focus of a man who’s seen every excuse and disliked most of them. Your pass is valid, technically—a word that has ruined better afternoons than this one.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/kick": "Your sneaker catches the assistant principal squarely in the shin. He looks up from his escapee census, and your valid pass suddenly feels less like paperwork and more like a witness for the prosecution.",
      "room_muj17ok5_t7m7do/hs_muj2gzed_slfeta/look": "You study Gaither High from the glare-smeared edge of Dale Mabry Highway: low, sun-bleached buildings, a parking lot shimmering like it’s hiding evidence, and students drifting toward the entrance. The Florida humidity leans on you harder than any school ever could.",
      "room_muj17ok5_t7m7do/hs_muj2hibs_vjno0c/look": "Sam Ash squats beside Dale Mabry, all dark glass and neon, its windows reflecting a Tampa sky the color of old dishwater. The sign promises music; the humidity promises to tune your shirt to your back.",
      "room_muj17ok5_t7m7do/hs_e0865859h50l_zibbmm/look": "You give Sabal Palm Apartments a closer look. The place squats beside Dale Mabry, sun-faded and sweating in the Florida heat; home, technically, though the humidity makes a persuasive case against it.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/look": "Blockbuster squats at North Pointe Plaza, its blue-and-yellow sign glowing like a lighthouse for the impatient. Through the glass, fresh copies of Gran Turismo 3 wait on the shelves—unless Tampa’s entire population has already beaten you to them.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/look": "Westchase lies beyond Linebaugh, where Mario and the guys are waiting—far enough to make Maz’s rule relevant. Your red Civic is running back home in Sabal Palm; the Accord, meanwhile, stays on Dale Mabry, where Maz can keep an eye on it and your plans.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/use": "Westchase waits beyond Linebaugh, where Mario and the guys are gathering. You could take Maz’s Accord, but her rule keeps it on Dale Mabry; the Civic is running back home at Sabal Palm, which makes this a detour with keys.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/talk": "Westchase sits out past Linebaugh, unmoved by your conversation and your transportation problem. Mario’s waiting; your Civic’s back home, and Maz’s Accord has a strict Dale Mabry policy.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/kick": "You kick at the thought of Westchase, but it doesn’t bring the Civic back from Sabal Palm. Maz’s Accord stays on Dale Mabry; family law is less flexible than the suspension.",
      "room_muj24gyp_sou079/hs_muj2fk6t_0sgb8y/look": "The living room stretches behind you, all dim corners and the low electric glow of the television. Somewhere beyond it, the front door waits with the keys; the humidity, presumably, is already waiting too.",
      "room_muj24gyp_sou079/hs_e0865859g5w2_z1tqz4/look": "The door to your room stands shut, guarding the usual teenage mysteries: laundry, old records, and the faint suspicion that you’ll have to clean something eventually. The hallway beyond offers no sympathy, only heat.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/look": "The Zenith squats in the corner, its gray screen reflecting a thin slice of afternoon light. Beneath it, the PlayStation 2 waits with the patient menace of a car idling outside a funeral.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/use": "You eye the 27-inch Zenith and its PlayStation 2, both poised for Gran Turismo 3. The TV has waited all week; it can wait until you find the car keys.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/talk": "The Zenith offers nothing but a blank stare. Beneath it, the PlayStation 2 waits with the patience of a machine that knows Gran Turismo 3 is still in its shrink-wrap.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/kick": "Your toe meets the Zenith’s cabinet with a hollow thud. The TV keeps its secrets; the PlayStation 2 waits beneath it, patient as a witness who knows you have no alibi.",
      "room_muj24gyp_sou079/hs_muk5kjau_8puluq/look": "You lean toward the bedroom door. It’s shut, and behind it, apparently, nothing stirs; Maz and Baz are asleep on the couch across the room, leaving the door to guard a bedroom nobody’s using. A quiet, thankless job.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/look": "You lean in to inspect the Gran Turismo 3 launch display. Every case is an empty shell, lined up with the smug confidence of a store that has already rented out the fun.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/use": "You reach for a Gran Turismo 3 case. It’s an empty display box—every real disc has already found a rental car, and left you behind.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/talk": "The Gran Turismo 3 display stares back in glossy silence. Every case is empty; the real discs have found faster rides.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/kick": "Your foot connects with the Gran Turismo 3 display. It shudders, then settles back into place—every case still empty, every disc still rented, and one Blockbuster employee suddenly reconsidering customer service.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/look": "Up close, the red hoodie is faded, the kid’s scowl is fresh, and the last copy of Gran Turismo 3 is clutched to his chest like it owes him money. A snapped high E string dangles from his guitar case; tonight’s backyard show appears to be in trouble.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/use": "You reach for the last copy of Gran Turismo 3, but the kid in the red hoodie tucks it against his chest. His high E string snapped, and he’s got a backyard show tonight—apparently even a sold-out game has to answer to rock ’n’ roll.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/talk": "“Hey, you got a pack of guitar strings? High E snapped, and my band plays tonight. I’ll trade you Gran Turismo 3—assuming my bassist doesn’t pawn it first.”",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/kick": "Your kick catches the kid in the red hoodie squarely in the shins. He drops Gran Turismo 3, but keeps hold of his guitar strings—apparently pain has not improved his shopping instincts.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/look": "The cardboard driver’s grin has the fixed confidence of a man who’s never parallel-parked. Beneath his helmet, the slogan reads RACE, RENT, REPEAT; his eyes suggest he’s been standing here since the last console generation.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/use": "You reach for the standee, but the cardboard driver remains on patrol, helmet fixed on the slogan: RACE, RENT, REPEAT. He has seen things—and apparently, none of them involve being picked up by a sweaty teenager.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/talk": "The cardboard driver stares past you through painted eyes, helmet gleaming under the fluorescent lights. “Race. Rent. Repeat.” He’s seen things, but apparently not conversation.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/kick": "You kick the Race Driver standee. It wobbles, then settles back into its heroic pose; the cardboard has seen worse, probably at the hands of children waiting for Gran Turismo 3.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/look": "The clerk’s blue polo is losing a quiet war with the checkout counter, and his smile has the exhausted polish of a man who’s explained late fees all evening. He watches you approach with the guarded hope of someone who’d like to finish his shift before Gran Turismo 3 sells out.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/use": "You approach the checkout counter, where the clerk in a blue polo looks one rental away from sleep. “Gran Turismo 3?” he says. “You and everybody else in Tampa.”",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/talk": "“Gran Turismo 3? You’re in luck. One copy left, and I’ve only got enough energy to scan it once.”",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/kick": "Your kick lands against the counter with a hollow thump. The clerk looks up from the blue polo’s last surviving button; Gran Turismo 3 waits behind him, apparently unimpressed.",
      "room_muj2rvon_2v6zou/hs_e08658593zjd_zx6o0s/look": "The automatic doors sigh behind you, leaving the parking lot shimmering in the Florida heat. Your car waits beyond the glass, red paint catching the light like it’s trying to look less stolen than it is.",
      "room_muj2rvon_2v6zou/hs_e2ff1200vq43u_z3/look": "You push through Blockbuster’s glass doors into the parking lot, where the Florida dusk hangs thick as wet laundry. Somewhere out there, your car waits; somewhere inside, Gran Turismo 3 is being hunted by people with worse timing.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/look": "The clerk’s blue polo is stretched over the weary shoulders of a man who’s seen too many late fees and not enough daylight. He smiles with the brittle cheer of someone guarding the last copy of Gran Turismo 3 from a mob of desperate teenagers.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/use": "You approach the clerk in the blue polo, whose smile has the weary polish of a man who’s seen every late fee in Tampa. He taps the counter; Gran Turismo 3 is still in stock, but the night is getting short.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/talk": "Evening. Gran Turismo 3’s been flying off the shelf. You’ll want to move fast—closing time’s breathing down my neck.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/kick": "Your kick lands against the counter with a hollow thump. The clerk glances up from the register, friendly enough to hide the fact that he’s one rental away from going home.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fegnv2n_z3/look": "Maz’s white Accord sits a little crooked in the student lot, its paint baking under the Florida sun. You check the doors; they’re locked, and the car has the air of something that will tell Maz everything.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fe2wpnr_z3/look": "You lean toward the school doors. The glass reflects a lanky silhouette, a Metallica shirt, and Florida humidity clinging to everything; beyond it, Gaither High waits with all the charm of a locked filing cabinet.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fezpyqi_z3/look": "Your red ’94 Civic idles in the school lot, freshly jumped and sounding only mildly resentful. The paint catches the Tampa sun; the driver’s seat waits, warm enough to qualify as a small weather system.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fetzcpp_z3/look": "The school doors loom behind you, glass panes reflecting the Florida sun with all the warmth of a police interrogation lamp. Beyond them, Gaither High waits with its fluorescent lights, stale air, and the lingering suspicion that lunch is not over.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe1szd0_z3/look": "You look down Dale Mabry Highway, where the afternoon sun bakes the asphalt into something resembling a crime scene with better traffic. Gaither High sits ahead, all brick and institutional optimism; your ride out of the school day, assuming the bell ever gets around to it.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe7clu3_z3/look": "You take a closer look at Sam Ash Music, its sign glowing over a wall of guitars and amplifiers. Behind the glass, a clerk guards the merchandise with the stillness of a man who’s seen teenagers discover power chords.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feigiw1_z3/look": "You study the Sabal Palm Apartments: beige stucco, tired palms, and a front door guarding the family’s keys with the zeal of a nightclub bouncer. Beyond it, Dale Mabry hums in the heat, already making a case for staying indoors.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/look": "The blue-and-yellow Blockbuster squats in North Pointe Plaza, promising Gran Turismo 3 and the faint smell of carpet cleaner. Through the glass, the return slot waits like a small, judgmental mouth.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11ferx6fd_z3/look": "You take in Westchase, sprawled west off Linebaugh in the wet glare of afternoon. Somewhere in this maze of tidy roofs and suspiciously green lawns, Mario’s house waits—assuming the neighborhood hasn’t all been built from the same box.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/look": "Mario waits by the phone, mild as a church usher and twice as dangerous. His eyes keep flicking to the door; the Westchase Blockbuster sold out of Gran Turismo 3, and he’s already calling the STI to secure a backup plan.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/use": "You try to pick Mario up; he rises an inch, then settles back into the couch with the quiet dignity of a man who has already called the STI. He’s waiting for Gran Turismo 3, not a ride.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/talk": "“Please tell me you found a copy. The Westchase Blockbuster is a crime scene, and I’ve already called the STI.”",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/kick": "Your kick lands squarely, and Mario folds around it with the quiet efficiency of a man whose plans have already gone badly. From the floor, he keeps calling the STI; apparently even disaster needs a ride.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/look": "Jesse leans back beneath the blue glow of his new HDTV, looking pleased with himself and faintly disappointed that it has nothing decent to show. The screen is enormous; the game selection, apparently, is not.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/use": "You try to recruit Jesse for game night, but he’s already committed to admiring his new HDTV. It’s a beautiful set—shame there’s no Gran Turismo 3 to put on it yet.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/talk": "Jesse gestures toward the new HDTV, its glossy screen reflecting a man with no game to play. “I’ve got the TV. Somebody get Gran Turismo 3 before Blockbuster turns into a crime scene.”",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/kick": "Jesse puts Gran Turismo 3 on the HDTV, and the living room becomes a showroom for cars nobody here can afford. You kick it while the loading screen crawls by; at least the pixels don’t charge rent.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/look": "Sam leans forward like Route 41 is still unspooling behind him, his eyes bright with the particular madness of a man who considers traffic a spectator sport. Mortal Kombat is his game, but the promise of Gran Turismo 3 has him ready to ride shotgun.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/use": "You try to pick Sam up. He keeps talking about Route 41, apparently unaware that he’s not luggage. “Once there’s a GT3 to play, I’m riding along,” he says, as if this settles the matter.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/talk": "Sam’s still describing his Route 41 run with the intensity of a police statement. “Find me a copy of GT3 and I’m in,” he says. “Until then, Mortal Kombat.”",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/kick": "You plant your kick squarely on Sam’s shin. He yelps, then claims Route 41 prepared him for worse; the story is familiar, but now it comes with a limp.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/look": "Mario’s garage is less a garage than a shrine to avoiding the weather: TV, PlayStation 2, beanbags, mini fridge. An empty patch beside the console waits for Gran Turismo 3, while the Florida night presses its damp face to the open door.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/use": "You eye the empty spot beside Mario’s PlayStation 2. Gran Turismo 3 is still at Blockbuster, where the shelves are already bracing for impact.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/talk": "The garage says nothing. The PlayStation 2 waits beside an empty patch of carpet, where Gran Turismo 3 ought to be; even the beanbags look disappointed.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/kick": "Your foot thuds against the garage doorframe. The TV keeps glowing over the PlayStation 2, beanbags, and mini fridge; the empty spot where Gran Turismo 3 should be remains unimpressed.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/look": "Mario’s garage has all the essentials: a TV, a PlayStation 2, beanbags, and a mini fridge humming like it’s keeping a secret. You’ve got the last copy of Gran Turismo 3 in hand; all that’s missing is the kind of company that makes sitting indoors feel like a garage session.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/use": "You try to pick up Mario’s garage. The beanbags shift, the mini-fridge hums, and the building remains stubbornly attached to the ground.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/talk": "The garage offers no comment, being a garage and not especially conversational. Its TV, PlayStation 2, beanbags, and mini fridge are ready; the missing ingredient remains stubbornly off-camera.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/kick": "The kick lands squarely on the beanbag, which gives a small, defeated sigh. The TV, PlayStation 2, and mini fridge remain unimpressed; without anything to drink, this is less a garage session than a waiting room with horsepower.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/look": "You give the red Civic a close inspection. Its doors promise a cramped ride for the whole crew, but without Gran Turismo 3, game night is just a long trip to lose at something else.",
      "room_e2ff11fefy1ys_z3/hs_e371dfc6road_zg/look": "The road beyond Mario’s house waits under a damp Tampa haze, Dale Mabry’s traffic muttering in the distance. Your red Civic is parked nearby, looking eager to leave—or at least less interested in Mario’s house.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/look": "You peer into the kitchen drawer. A set of jumper cables lies coiled among the household clutter, red and black clamps waiting to give your sulking Civic the electric jolt it needs.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/kick": "You kick the kitchen drawer. It rattles open an inch, revealing the jumper cables—apparently even the drawer knows your Civic needs a jump.",
      "room_mujwa19j_7ag5ox/hs_mujxywed_ppxwil/look": "The kitchen drawer sits half-open, a narrow black gap in the laminate’s tired little alibi. Beyond it, the back exit waits in the humid Tampa gloom; neither one appears to contain car keys, though the drawer is making a better case for it.",
      "room_muk5y1kj_3sfnoi/hs_muk5zfqi_rzp3n4/look": "The door’s thin veneer is scuffed around the knob, but it’s still closed—mercifully, without a creak. Beyond it, Maz and Baz sleep on the couch, guarding the keys by sheer proximity.",
      "room_muk5y1kj_3sfnoi/hs_muk610sf_cegxjz/look": "The closet is packed with Maz’s clothes and Baz’s boxes, arranged with the precision of a crime scene nobody plans to solve. A sweet, fruity smell hangs among the mothballs—just pungent enough to make you wonder what Baz has been keeping under wraps.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/look": "The jar sits tucked among Baz’s side of the closet, labeled “Habrooj” in handwriting that suggests either confidence or poor spelling. You give it a closer look; the lid is on tight, and the contents remain a family secret with unusually strong appeal to the guys’ video-game plans.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/kick": "The Habrooj jar skitters across the floor and bumps the wall, sounding less like a good night with the guys and more like evidence. You retrieve it intact; Baz’s closet remains quiet, but the house has developed an opinion.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/look": "You lean into Baz’s side of the closet. His shirts hang like tired witnesses, carrying tobacco, Cool Water, and the unmistakable evidence of Baz.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/use": "You tug at Baz’s clothes, but they remain on their hangers, loyal to the man who left them there. The scent of tobacco and Cool Water follows you back a step.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/talk": "The clothes hang in the closet, smelling of tobacco, Cool Water, and a man who’s been in no hurry to explain himself. They don’t answer. Clothes rarely do, unless the moths have started a union.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/kick": "You kick Baz’s clothes. A sleeve swings out and slaps your shin, carrying the unmistakable scent of tobacco, Cool Water, and a man who’s been through a long shift. The clothes remain unimpressed.",
      "room_muk6fyxs_wtgsjd/hs_muk6n1v8_tfycf1/look": "The closet is Baz’s side: shirts packed tight beside work clothes faintly seasoned with refrigeration van and Florida humidity. The bedroom waits beyond the doorway, where the laundry goes to hide.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/look": "Baz’s shoes squat on the box like two weary bouncers, smelling faintly of work and Florida rain. The box beneath them is oddly interesting—though Baz has parked his footwear there with the confidence of a man guarding state secrets.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/use": "You tug at the box, but Baz’s shoes sit on it like a customs officer with no sense of humor. The mystery stays packed; the shoes, at least, remain suspiciously well organized.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/talk": "The shoes sit on the box with the smugness of a man who knows you can’t move him without a good reason. The box offers no comment.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/kick": "The box skids across the closet floor and Baz’s shoes tumble off, landing with the solemnity of two dead pigeons. Inside: old extension cords, a receipt from a long-defunct video store, and no obvious explanation for why the box looked interesting.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/look": "You lean over the box. The cardboard is soft at the corners, its lid sealed with tape—Baz’s idea of interior design, apparently. Another box waits where no box has any business waiting.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/use": "You prod the box. It gives nothing away—not even a shipping label, which is more than Baz usually manages.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/talk": "The box offers no testimony. It sits in the closet, packed with whatever Baz considered worth keeping and nobody else considered worth finding.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/kick": "You kick the box. It thumps against the closet wall, giving up nothing but dust and a faint suggestion that Baz has a box for everything—including, possibly, other boxes.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/look": "The duffel sags in the closet like it’s carrying a secret, or several years of laundry. You can’t remember Baz ever going to a gym; whatever’s inside, fitness probably isn’t the point.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/use": "You tug at Baz’s duffel bag. It’s heavy, mysterious, and gives no clue that its owner has ever met a gym.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/talk": "Baz’s duffel bag offers no comment. It hangs there with the quiet menace of a man who may own gym clothes he’s never used.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/kick": "You kick Baz’s duffel bag. It thumps against the wall with the hollow finality of something that’s never contained gym clothes.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/look": "You lean toward the jar beside the box. Inside, Baz’s “habrooj” sits in the dim light, looking less like a secret stash and more like evidence in a case nobody wants to solve.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/use": "You give the box a hopeful tug; it stays put, wedged on the wire shelf with the stubbornness of a man avoiding questions. Baz’s jar sits beside it, quietly minding its own business.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/talk": "The box sits on the wire shelf, keeping its secrets in cardboard. Beside it, Baz’s jar of habrooj waits with the quiet confidence of something nobody’s supposed to notice.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/kick": "The box gives a hollow thunk against the wire shelf, which is more than it deserves. Beside it, Baz’s jar of habrooj wobbles ominously; you decide family scandal can wait until after Gran Turismo 3.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/look": "The box sits on the wire shelf, sealed and dusted with the sort of neglect that suggests Baz has forgotten it—or is waiting for you to. It’s too bulky to be interesting and too plainly labeled to be innocent.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/use": "You tug at the box on the wire shelf. It doesn’t budge; apparently it has settled in for the long haul, unlike the jar beside it.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/talk": "The box sits on the wire shelf, keeping its secrets beneath a film of dust. You give it a look; it declines to elaborate.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/kick": "You kick the box. It wobbles on the wire shelf, while somewhere in the house Baz’s future disappointment clears its throat."
    },
    "combos": {
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/item_muikx84l_9005hm": "You offer Victor the Walkman. He eyes the dead headphone foam, then steers the conversation toward Navy SEAL training, where apparently even the silence was insane.",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/item_muizrmyw_d85rt1": "Victor eyes your Civic keys, then launches into Navy SEAL training and the Supra he actually drives. The keys remain keys; Victor remains Victor.",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/item_muiztzyy_9v990s": "Victor eyes the Accord keys, then steers the conversation back to Navy SEAL training and his Supra. Apparently neither can get you out of school early.",
      "room_mrea1lyf_dhregf/hs_muixeczf_2zombo/item_muj1yjwu_iwbphs": "You present Victor with the 10 mm wrench. He eyes it like a Navy SEAL assessing hostile hardware, then starts explaining how insane training was. The wrench remains a wrench; Victor remains a story with no exit.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/item_muikx84l_9005hm": "You offer Andy the Walkman. He eyes the cracked headphones like they’ve survived a ladder match, then reminds you Ben’s been waiting to hear the tape; Gran Turismo 3 remains tragically unmentioned.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/item_muizrmyw_d85rt1": "Andy eyes the Civic keys, then your Walkman, like he’s already planning the passenger-seat soundtrack. Gran Turismo isn’t his religion, but a ride is a ride—and Ben’s been waiting to hear that Metallica tape.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/item_muiztzyy_9v990s": "You dangle Maz’s Accord keys in front of Andy. He eyes the Honda fob, then your Walkman; apparently neither comes with a Metallica tape.",
      "room_mrea1lyf_dhregf/hs_muiy0k56_wwxj26/item_muj1yjwu_iwbphs": "Andy eyes your Walkman again, already halfway into a speech about Lightning hockey and whatever comes next. The wrench contributes nothing but a faint metallic clink; Andy’s not a loose bolt, despite appearances.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/item_muikx84l_9005hm": "You offer Jesse the Walkman. Its threadbare headphones are apparently no match for an HDTV; he’s too busy explaining how standard-definition television burns ass to hear the pitch.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/item_muizrmyw_d85rt1": "You jingle the Civic keys at Jesse. He glances from them to you, unimpressed; even his new HDTV can’t make this plan look less dead on arrival.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/item_muiztzyy_9v990s": "You flash the Accord keys at Jesse. He eyes the worn Honda fob, then his new HDTV’s imaginary glow; apparently Maz’s trust buys no extra copies of Gran Turismo 3.",
      "room_mrea1lyf_dhregf/hs_muiy90w8_e0h1dj/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Jesse. He eyes it over the top of his new HDTV grin; apparently, neither ass-burning images nor routine intimidation can improve your odds at Blockbuster.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/item_muikx84l_9005hm": "You offer Maurice the Walkman. He studies the cracked headphones with the serene patience of an elf contemplating a long walk, then declines; Metallica remains trapped in the foamless wilderness.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/item_muizrmyw_d85rt1": "You flash the Civic keys at Maurice. He regards them with the calm of an elf contemplating a long road; the Honda remains several miles, and one dead battery, away.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/item_muiztzyy_9v990s": "You offer Mario the Accord keys. He regards them with the calm of an elf contemplating a forged ring, then quietly asks whether the STI comes with the game. The keys remain yours; the mystery deepens by exactly one mild-mannered degree.",
      "room_mrea1lyf_dhregf/hs_muiybem9_y7e2vu/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Maurice. He regards it with the calm of an elf contemplating a very small, very stupid dragon. The wrench remains a wrench; Maurice remains Maurice.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/item_muikx84l_9005hm": "You offer Sam the Walkman. He’s still reenacting his naked sprint down Route 41, and Metallica can’t compete with “Fire and ice!” Nothing useful happens; the foam on your headphones remains the most battered thing in the commons.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/item_muizrmyw_d85rt1": "You flash the Civic keys at Sam. He gives them a passing glance, then returns to explaining the finer points of naked sprinting on Route 41; Gran Turismo will have to compete with Scorpion and Sub-Zero for his attention.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/item_muiztzyy_9v990s": "You jingle the Accord keys at Sam. He glances up from his Mortal Kombat sermon, then goes back to explaining how Route 41 got more of him than it bargained for. The keys remain keys; Sam remains no closer to driving.",
      "room_mrea1lyf_dhregf/hs_muiyclpp_fnfi25/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Sammit. He pauses his Route 41 confession long enough to ask if Scorpion needs one; the wrench, like the story, fixes nothing.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/item_muikx84l_9005hm": "You hand Ben the battered Walkman. He slips on the foamless headphones, listens to a few seconds of Metallica, and nods like a man confirming a long-held theory about the universe. Then he trades you a signed early-dismissal pass from his binder. Somewhere in the commons, Gran Turismo’s menu music waits patiently to be explained.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/item_muizrmyw_d85rt1": "You flash Ben the Civic keys. He looks impressed for half a second, then remembers the battery is dead—and that he doesn’t need a car to enjoy Gran Turismo’s menu music. The keys remain yours; the problem remains Ben.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/item_muiztzyy_9v990s": "Ben gives the Accord keys a once-over, then looks back at you. “I’m holding out for the menu music,” he says; the keys remain yours, and the dismissal passes remain safely out of reach.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/item_muj1yjwu_iwbphs": "Ben eyes the wrench, then you, with the calm of a man who knows the Gran Turismo menu music was recorded on actual instruments. He has no use for a ten-millimeter wrench, and you have no signed pass. The exchange market remains cruel.",
      "room_mrea1lyf_dhregf/hs_muiyegn9_2silfz/item_e0865859e0zz_zzwhvq": "Ben gives the pink slip a glance, then looks up with the patient sympathy of a man watching a bad trade go sour. No Walkman, no Metallica; Gran Turismo’s menu music remains out of reach.",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/item_e0865859e0zz_zzwhvq": "You flash the pink slip at the exit. The signature looks suspiciously like Ben’s, but the doors open anyway—and freedom smells faintly of hot asphalt and somebody’s overworked Ford van.",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/item_muikx84l_9005hm": "You press play and head for the parking lot. Metallica snarls through foamless headphones; the doors remain unimpressed, and Gran Turismo stays inconveniently out of reach.",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/item_muizrmyw_d85rt1": "You try the Civic keys on the commons doors. They fit nothing, which is more than the Civic’s battery can claim.",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/item_muiztzyy_9v990s": "You try the Accord keys on the commons doors. They fit nothing, except the general mood of a school day refusing to end.",
      "room_mrea1lyf_dhregf/hs_muiyp3w3_hckuk7/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the doors. They remain stubbornly doors; Gran Turismo 3 is not impressed.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/item_muikx84l_9005hm": "You offer Kus the Walkman. He’s still busy replaying those Jordan moves in his head, and your Metallica tape can’t quite compete with the promise of GT3.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/item_muizrmyw_d85rt1": "You jingle your Civic keys at Kus. He’s fresh off the court, but not fresh enough to mistake them for a ride; Baz’s van is already on pickup duty.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/item_muiztzyy_9v990s": "Kus glances at the Accord keys, then back at you. “Nice plan. Baz is picking us up.” The keys jingle uselessly; even Jordan can’t dribble a van home.",
      "room_mrea1lyf_dhregf/hs_mujbr2ii_f9mk2t/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Kus. He’s fresh off the court, not the engine bay; he eyes the tool, then asks if you’ve finally lost it.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/item_muikx84l_9005hm": "You press play. Metallica snarls through the Walkman’s foamless headphones, and Gus remains exactly as distracted by lunch as before.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/item_muizrmyw_d85rt1": "You pat yourself down for the Civic keys, then remember the Civic’s battery died sometime during the Clinton administration. The keys jingle anyway, offering no transportation and little comfort.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at yourself. Gus remains unmoved; the commons has seen stranger negotiations, but rarely ones this pointless.",
      "room_mrea1lyf_dhregf/hs_mujbruob_05yzlx/item_muj1yjwu_iwbphs": "You press the 10 mm wrench to your chest, as if tightening something vital. Nothing gives; your pride remains factory-sealed, more or less.",
      "room_mrea1lyf_dhregf/hs_e2ff11fexvmgl_z3/item_muikx84l_9005hm": "You put on the Walkman and head for the parking lot doors. Metallica drowns out the bell, but the doors remain stubbornly unimpressed.",
      "room_mrea1lyf_dhregf/hs_e2ff11fexvmgl_z3/item_muizrmyw_d85rt1": "You try the Civic keys on the commons doors. They don’t fit; the legendary ’94 Civic remains legendary elsewhere, and Gran Turismo 3 keeps slipping toward somebody else’s rental.",
      "room_mrea1lyf_dhregf/hs_e2ff11fexvmgl_z3/item_muiztzyy_9v990s": "You try the Accord keys on the commons doors. They jangle with all the authority of a lunch tray; the parking lot remains firmly on the other side.",
      "room_mrea1lyf_dhregf/hs_e2ff11fexvmgl_z3/item_muj1yjwu_iwbphs": "You apply Baz’s 10 mm wrench to the exit doors. The doors remain unmoved; the wrench, at least, has found something worthy of its reputation.",
      "room_mrea1lyf_dhregf/hs_e2ff11feetznc_z3/item_muikx84l_9005hm": "You press play and head for the parking lot, but Metallica can’t make the school doors open any faster. The Walkman hisses beneath its foamless headphones; your escape remains stubbornly architectural.",
      "room_mrea1lyf_dhregf/hs_e2ff11feetznc_z3/item_muizrmyw_d85rt1": "You jingle the Civic keys at the exit, as if the doors might respect seniority. Outside, the legendary '94 waits with its battery as dead as Tampa’s sense of mercy.",
      "room_mrea1lyf_dhregf/hs_e2ff11feetznc_z3/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at the commons doors. They remain doors, unimpressed by your family’s trust and your urgent need for Gran Turismo 3.",
      "room_mrea1lyf_dhregf/hs_e2ff11feetznc_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the exit doors. They remain unconvinced; the parking lot is still one step away, and Gran Turismo 3 is aging by the second.",
      "room_muikx84l_io2kqq/hs_muikx84l_tpq0ru/item_muikx84l_9005hm": "You press play and head for the living room. Metallica fights the Arabic news through the Walkman’s threadbare headphones, and neither side makes much progress.",
      "room_muikx84l_io2kqq/hs_muikx84l_tpq0ru/item_muizrmyw_d85rt1": "You try the Civic keys on the door. The lock remains unimpressed; beyond it, Arabic news blares from the living room, reporting events more important than your battery.",
      "room_muikx84l_io2kqq/hs_muikx84l_tpq0ru/item_muiztzyy_9v990s": "You try the Accord keys on the door. They fit nothing, which is usually how a family works. The Arabic news keeps shouting from the living room.",
      "room_muikx84l_io2kqq/hs_muikx84l_tpq0ru/item_muj1yjwu_iwbphs": "You put Baz’s 10 mm wrench to the door. It remains a door, unmoved by Lebanese engineering or your desperation; beyond it, Arabic news blares from the living room.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/item_muikx84l_9005hm": "You set the Walkman on the desk and crank up Metallica. The dead headphone foam sheds one last crumb; the crisp twenty remains under the keyboard, unimpressed.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/item_muizrmyw_d85rt1": "You slide the Civic keys under the keyboard. They find the twenty, but the desk remains unconvinced this is a sensible place to park a car.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/item_muiztzyy_9v990s": "You slide the Accord keys under the keyboard. The twenty remains crisp, the keyboard remains unmoved, and Maz’s trust stays mercifully untested.",
      "room_muikx84l_io2kqq/hs_e08658598032_z2zzir/item_muj1yjwu_iwbphs": "You slide the wrench under the keyboard. It snags a crisp twenty, but no amount of tightening seems likely to make money grow back.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/item_muikx84l_9005hm": "You pat down the jacket while the Walkman hisses through “One.” No Blockbuster card—just lint, and headphones shedding foam like a bad omen.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/item_muizrmyw_d85rt1": "You jam the Civic keys at your jacket, but the closet declines to start. The Blockbuster card stays in the pocket, where it’s safe from both ignition and ambition.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/item_muiztzyy_9v990s": "You check the jacket for the keys. It offers lint, old receipts, and no automotive miracles.",
      "room_muikx84l_io2kqq/hs_e0865859dw9g_z3d838/item_muj1yjwu_iwbphs": "You tug the jacket from the closet and prod its pocket with Baz’s wrench. No Blockbuster card—just lint, and the faint sense your father knows exactly where his wrench is.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/item_muikx84l_9005hm": "You press play and roll the toy cars along the windowsill. Metallica snarls through the Walkman’s bald headphones; the cars remain unimpressed, and no one gets any closer to Blockbuster.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/item_muizrmyw_d85rt1": "You try the Civic keys on the toy cars. None of the die-cast legends can start, though the Supra seems to have better odds than your actual battery.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/item_muiztzyy_9v990s": "You wave Maz’s Accord keys at the toy cars. None of them start, though the Skyline looks ready to leave this humidity behind.",
      "room_muikx84l_io2kqq/hs_e0865859ouud_zotggh/item_muj1yjwu_iwbphs": "You tap the wrench against the toy cars. The Supra, Skyline, and NSX remain stubbornly miniature; your tuning career is off to a rough start.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/item_muikx84l_9005hm": "You press play and settle onto the bed. Metallica crackles through the Walkman’s foamless headphones; sleep declines the invitation, and Gran Turismo remains irritatingly un-rented.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/item_muizrmyw_d85rt1": "You toss the Civic keys onto the bed. The battery may be legendary, but the mattress has no jumper cables.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/item_muiztzyy_9v990s": "You press the Accord keys to the bed. The Honda remains stubbornly elsewhere; the mattress, as usual, refuses to start.",
      "room_muikx84l_io2kqq/hs_e08658593edl_zplddw/item_muj1yjwu_iwbphs": "You swing Baz’s 10 mm wrench at the bed. The mattress declines to yield a copy of Gran Turismo 3. Some things, even in Florida, remain stubbornly unscrewed.",
      "room_muikx84l_36nb97/hs_muikx84l_9t0asp/item_muikx84l_9005hm": "You set the Walkman beside the keys and let Metallica make its case. The counter remains unmoved; Maz’s supervision may be offline, but the keys still aren’t impressed.",
      "room_muikx84l_36nb97/hs_muikx84l_9t0asp/item_muizrmyw_d85rt1": "You try the Civic keys on the counter, but keys are poor at multiplying when nobody’s looking. Maz’s Accord keys remain exactly where they were, smugly out of reach.",
      "room_muikx84l_36nb97/hs_muikx84l_9t0asp/item_muiztzyy_9v990s": "You slide the Accord keys across the counter toward the other set. They clink softly, accomplishing nothing but alerting the dust.",
      "room_muikx84l_36nb97/hs_muikx84l_9t0asp/item_muj1yjwu_iwbphs": "You try to wrench the keys off the counter. They remain keys; the wrench remains a wrench. Maz’s watchful eye may be offline, but apparently her housekeeping has excellent security.",
      "room_muikx84l_36nb97/hs_muikx84l_jt1ldn/item_muikx84l_9005hm": "You press the Walkman to the front door, as if Metallica might pick the lock. The tape hisses; Tampa’s humidity remains unconvinced.",
      "room_muikx84l_36nb97/hs_muikx84l_jt1ldn/item_muizrmyw_d85rt1": "The Civic keys fit nothing on the front door but your hand. Freedom remains outside, humid and buzzing with mosquitoes.",
      "room_muikx84l_36nb97/hs_muikx84l_jt1ldn/item_muiztzyy_9v990s": "The keys rattle in the lock, but the front door remains unimpressed. Freedom, it seems, requires a different key.",
      "room_muikx84l_36nb97/hs_muikx84l_jt1ldn/item_muj1yjwu_iwbphs": "You work the 10 mm wrench against the front door. The lock remains unmoved; apparently freedom requires a key, not routine automotive maintenance.",
      "room_muikx84l_36nb97/hs_muj2e0lo_4pidrd/item_muikx84l_9005hm": "You turn the Walkman around. Metallica remains stubbornly on the inside, where the foam has been dead since ’99; the music, like Tampa’s humidity, offers no escape.",
      "room_muikx84l_36nb97/hs_muj2e0lo_4pidrd/item_muizrmyw_d85rt1": "You turn around, Civic keys in hand. The red Civic remains where you left it, battery dead and unimpressed.",
      "room_muikx84l_36nb97/hs_muj2e0lo_4pidrd/item_muiztzyy_9v990s": "You turn the key. The worn Honda fob gives a little jingle, but the room remains stubbornly unignited. Apparently, the Accord is not in the habit of starting from here.",
      "room_muikx84l_36nb97/hs_muj2e0lo_4pidrd/item_muj1yjwu_iwbphs": "You turn around, then give the wrench a thoughtful little tap against the wall. Nothing changes except the room’s opinion of your judgment.",
      "room_muikx84l_36nb97/hs_muj2eyiq_b1uxyz/item_muikx84l_9005hm": "You press Play and face the floral couch. Metallica snarls into your ears; the couch remains unmoved, having heard worse from daytime television.",
      "room_muikx84l_36nb97/hs_muj2eyiq_b1uxyz/item_muizrmyw_d85rt1": "You jingle the Civic keys at the far side of the room. The floral couch remains unmoved, unimpressed, and several volts short of helpful.",
      "room_muikx84l_36nb97/hs_muj2eyiq_b1uxyz/item_muiztzyy_9v990s": "You toss the Accord keys toward the floral couch. They land short, achieving nothing but a soft jingle and the couch’s usual air of suspicion.",
      "room_muikx84l_36nb97/hs_muj2eyiq_b1uxyz/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the other side of the room. The floral couch remains unmoved, unimpressed, and apparently outside the wrench’s jurisdiction.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/item_muikx84l_9005hm": "You hold the Walkman near Baz’s ear and let Metallica do its worst. He snores on, unmoved; the keys remain out of reach, and the questions stay asleep with him.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/item_muizrmyw_d85rt1": "You jingle the Civic keys over Baz’s head. He snores on, fluent in both languages and unavailable for comment.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/item_muiztzyy_9v990s": "You jingle the Accord keys beside Baz’s ear. His snoring shifts languages, but he stays asleep—questions, mercifully, remain in the future.",
      "room_muikx84l_36nb97/hs_e2ff11fe57n62_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench over the sectional. He snores on, fluent in two languages and apparently immune to both tools and bad ideas.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/item_muikx84l_9005hm": "You press the Walkman to Maz’s ear. Metallica leaks through the foamless headphones; she keeps dozing, somehow hearing enough to look disappointed.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/item_muizrmyw_d85rt1": "You jingle the Civic keys beside Maz. One eye opens; the other has apparently filed for a transfer. “Not the Honda,” she murmurs, then resumes sleeping with the vigilance of airport security.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/item_muiztzyy_9v990s": "You jingle the Accord keys beside Maz. Her eyes stay shut, but the sentence she fell asleep in gains a threatening new ending. The Honda remains hers; apparently, so does the living room.",
      "room_muikx84l_36nb97/hs_e2ff11fejqe3x_z3/item_muj1yjwu_iwbphs": "You ease the 10 mm wrench toward Maz. Her eyes open mid-sentence; somehow, she’s already heard the metal thinking about it. The wrench retreats. So do you.",
      "room_muikx84l_36nb97/hs_mujw5brr_6e5lab/item_muikx84l_9005hm": "You run the Walkman over the kitchen drawer. Metallica keeps thrashing; the drawer remains stubbornly unmusical, and the foam flakes off like cheap evidence.",
      "room_muikx84l_36nb97/hs_mujw5brr_6e5lab/item_muizrmyw_d85rt1": "You try the Civic keys on the kitchen drawer. The lock remains unimpressed; the Civic’s battery, like your prospects, is elsewhere.",
      "room_muikx84l_36nb97/hs_mujw5brr_6e5lab/item_muiztzyy_9v990s": "The drawer stays shut. Maz trusts you with the Accord; apparently the cutlery doesn’t.",
      "room_muikx84l_36nb97/hs_mujw5brr_6e5lab/item_muj1yjwu_iwbphs": "You rummage through the kitchen drawer with Baz’s 10 mm wrench. A fork, three dead batteries, and a receipt for something nobody remembers buying—no keys, and no useful leverage.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/item_muiztzyy_9v990s": "The Accord keys turn, and Maz’s white Honda coughs awake with all the enthusiasm of a tax form. You ease out of the driveway toward Dale Mabry, praying Blockbuster still has a copy of Gran Turismo 3—and that the humidity doesn’t claim you first.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/item_muikx84l_9005hm": "You press the Walkman to Maz’s Accord. Metallica rattles through the dying headphones; the Honda, unmoved by thrash, remains a Honda.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/item_muizrmyw_d85rt1": "You try the Civic keys in Maz’s Accord. They fit about as well as optimism in Tampa humidity.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/item_muj1yjwu_iwbphs": "You apply Baz’s 10 mm wrench to Maz’s Accord. The Honda declines to be repaired into having its keys; even reliability has limits.",
      "room_muikx84l_4xxwr8/hs_muikx84l_jwj8wd/item_e0865859e0zz_zzwhvq": "The pink slip meets the Accord’s windshield and achieves what paperwork does best: nothing. Maz’s reliable white sedan remains parked, unimpressed by your administrative authority.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/item_muiztzyy_9v990s": "The worn Honda fob turns, and Maz’s Accord starts on the first try—show-off. You ease it past the Civic, nose to nose no longer, and head down Dale Mabry with Gran Turismo 3 on your mind and the humid Florida night at your back.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/item_muikx84l_9005hm": "You press the Walkman against the Accord’s open hood and wait for the engine to recognize Metallica. It doesn’t; the tape keeps playing, and the Honda remains stubbornly nose-to-nose with your Civic.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/item_muizrmyw_d85rt1": "You try the Civic keys on Maz’s Accord. They fit the ignition about as well as a heavy-metal solo fits a school assembly.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/item_muj1yjwu_iwbphs": "You give the Accord’s bolt a turn with Baz’s wrench. Nothing changes; Maz’s car remains stubbornly nose-to-nose with yours, running fine and waiting for its keys.",
      "room_muikx84l_4xxwr8/hs_e48adf74a8323_z4/item_e0865859e0zz_zzwhvq": "You flash the early dismissal pass at Maz’s Accord. The car, being neither an administrator nor especially susceptible to forged handwriting, stays put with its hood up.",
      "room_muikx84l_4xxwr8/hs_muikx84l_z72ldx/item_muikx84l_9005hm": "You press the Walkman to the apartment door. Metallica grinds through the dead headphone foam; the lock remains unmoved, unimpressed by your soundtrack.",
      "room_muikx84l_4xxwr8/hs_muikx84l_z72ldx/item_muizrmyw_d85rt1": "You try the Civic keys on the apartment door. The lock remains unimpressed; the Civic, for once, isn’t the problem.",
      "room_muikx84l_4xxwr8/hs_muikx84l_z72ldx/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at the apartment door. The Honda remains unmoved, and the door—less impressed still—stays shut.",
      "room_muikx84l_4xxwr8/hs_muikx84l_z72ldx/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the apartment door. The door remains unmoved, and the wrench has learned nothing.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/item_muizrmyw_d85rt1": "You turn the Civic’s key. One click answers from under the hood, small and final, like a critic reviewing the battery. The red coupe stays put; even legends need a jump.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/item_muikx84l_9005hm": "You press the Walkman to the Civic’s hood. Metallica plays on, but the battery remains unmoved; apparently it prefers something with jumper cables.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/item_muiztzyy_9v990s": "You try Maz’s Accord keys in the Civic. The lock remains unmoved; the battery, at least, is in no condition to be impressed.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/item_muj1yjwu_iwbphs": "You wedge the wrench against the Civic’s battery terminal. The car answers with its usual one click, a sound like a tiny judge dismissing your case.",
      "room_muikx84l_4xxwr8/hs_muiuan4o_bavyl9/item_e0865859e0zz_zzwhvq": "You slap the early-dismissal pass against the Civic’s window. The battery answers with its usual single click, unimpressed by your paperwork.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/item_muikx84l_9005hm": "You queue up Metallica, but the van’s compressor keeps better time than Lars. For a moment, the driveway smells like hummus and old road trips; then the tape chews on, unimpressed.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/item_muizrmyw_d85rt1": "You try the Civic keys on l’Van. The lock remains unimpressed; Baz’s old workhorse has outlasted worse than your burglary technique.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/item_muiztzyy_9v990s": "You try the Accord keys on the van. They go in far enough to remind you that trust is not the same thing as ignition; Baz’s workhorse remains parked, full of hummus miles and quiet reproach.",
      "room_muikx84l_4xxwr8/hs_muiuc4tx_lq14bs/item_muj1yjwu_iwbphs": "You give l’Van the wrench treatment. The compressor stays put; Baz’s van has survived worse than your optimism.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/item_muikx84l_9005hm": "You press the Walkman against the wrench and wait for inspiration. Metallica thunders into your ears; the wrench remains unmoved, having heard worse.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/item_muizrmyw_d85rt1": "You try the Civic keys on the wrench. The wrench declines to start the car; it has standards, and possibly a dead battery.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/item_muiztzyy_9v990s": "You try the Accord keys on the wrench. The wrench remains unmoved, as though it has heard worse plans from better men.",
      "room_muikx84l_4xxwr8/hs_muj1yibp_xm7iez/item_muj1yjwu_iwbphs": "You apply Baz’s ten-millimeter wrench to Baz’s ten-millimeter wrench. It remains a wrench, unimpressed by the reunion.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/item_e2ff11fditnvw_z3": "You clip Baz’s jumper cables to the Accord and your Civic, red to red, black to the sort of black that suggests poor decisions. The Civic coughs, catches, and settles into a healthy idle; Tampa’s humidity has lost one small argument.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/item_muikx84l_9005hm": "You feed Metallica to the Civic. The Walkman delivers justice; the dead battery remains unmoved.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/item_muizrmyw_d85rt1": "You turn the key. The Civic answers with a single click, the automotive equivalent of “not tonight.”",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/item_muiztzyy_9v990s": "You turn Maz’s Accord key in your red Civic. The starter gives one dry click; the dead battery remains unmoved, like a man who’s heard this story before.",
      "room_muikx84l_4xxwr8/hs_e2ff11fedvaf1_z3/item_muj1yjwu_iwbphs": "You attack the Civic’s battery with Baz’s 10 mm wrench. The engine remains dead; the wrench, at least, is still where Baz expects it to be.",
      "room_muikx84l_4xxwr8/hs_e2ff11fea4e4y_z3/item_muikx84l_9005hm": "You press Play beside the Civic. Metallica hisses through the Walkman’s foamless headphones; the car, having already learned to start on its own, declines to be impressed.",
      "room_muikx84l_4xxwr8/hs_e2ff11fea4e4y_z3/item_muizrmyw_d85rt1": "You try the keys in the Civic’s door. The old red legend starts on the first turn; apparently it’s been taking the jump-start personally.",
      "room_muikx84l_4xxwr8/hs_e2ff11fea4e4y_z3/item_muiztzyy_9v990s": "The Accord keys don’t fit Gus’s Civic. You could force the issue, but the car has already forgiven you once.",
      "room_muikx84l_4xxwr8/hs_e2ff11fea4e4y_z3/item_muj1yjwu_iwbphs": "You give the Civic’s battery a suspicious little tap with Baz’s wrench. The engine starts just fine, leaving you with one less excuse and a perfectly good 10 mm wrench.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/item_muikx84l_9005hm": "You press Play and hold the Walkman to the Les Paul Custom. Metallica leaks through the foamless headphones; the guitar remains magnificently unpersuaded.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/item_muizrmyw_d85rt1": "The Civic keys scrape against the glass beneath the Les Paul Custom. The guitar remains gloriously out of reach; the battery, presumably, remains dead.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/item_muiztzyy_9v990s": "You try the Accord keys on the Les Paul Custom. The Honda fob clicks against the glass; the guitar remains expensive, sacred, and stubbornly unignited.",
      "room_muikx84l_19o1o7/hs_muikx84l_1rj2az/item_muj1yjwu_iwbphs": "You raise Baz’s 10 mm wrench toward the Les Paul Custom. The guitar remains a holy relic; the wrench remains a wrench, and neither of you is taking the first step.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/item_e0865859f5el_zjmp56": "You hand over the crisp twenty. The clerk slides you a pack of Ernie Ball Slinkys and a lecture about Kirk Hammett’s tone; the strings are new, the money is gone, and the humidity remains undefeated.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/item_muikx84l_9005hm": "The clerk watches you brandish the Walkman like it’s evidence in a very dull trial. Your tinny Metallica tape fails to impress; the foam flakes onto the counter, leaving only the smell of old headphones and bad timing.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/item_muizrmyw_d85rt1": "You jingle the Civic keys at the clerk. He glances up from the strings, unimpressed; the car’s battery may be dead, but your sales pitch is worse.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/item_muiztzyy_9v990s": "You flash Maz’s Accord keys at the clerk. He glances from the worn Honda fob to your face, as if waiting for the car to drive itself into Sam Ash.",
      "room_muikx84l_19o1o7/hs_muikx84l_ej7aa5/item_muj1yjwu_iwbphs": "You brandish Baz’s wrench at the clerk. He glances from it to your Metallica shirt, as if weighing the odds of a lecture; the strings remain firmly for sale.",
      "room_muikx84l_19o1o7/hs_muikx84l_g1ocjq/item_muikx84l_9005hm": "You press play and aim your Walkman at the glass doors. Metallica rattles through the foamless headphones; the doors remain unmoved, unimpressed, and closed.",
      "room_muikx84l_19o1o7/hs_muikx84l_g1ocjq/item_muizrmyw_d85rt1": "You try your Civic keys on the glass doors. They remain unmoved; the Civic, as usual, is not the one with the problem.",
      "room_muikx84l_19o1o7/hs_muikx84l_g1ocjq/item_muiztzyy_9v990s": "The Accord keys slip into your hand, but the glass doors remain unimpressed. You haven’t reached the parking lot, and the keys have yet to develop architectural skills.",
      "room_muikx84l_19o1o7/hs_muikx84l_g1ocjq/item_muj1yjwu_iwbphs": "You bring Baz’s 10 mm wrench to bear on the glass doors. They remain unmoved; the wrench, for once, has not been asked to fix the family.",
      "room_muikx84l_19o1o7/hs_e2ff1200l1f9r_z3/item_muikx84l_9005hm": "You press play and push through the glass doors, Metallica tinny beneath the Walkman’s foamless headphones. The parking lot offers no encore.",
      "room_muikx84l_19o1o7/hs_e2ff1200l1f9r_z3/item_muizrmyw_d85rt1": "You try the Civic keys on the glass doors. The lock remains unimpressed; your battery-powered legend is still out in the parking lot.",
      "room_muikx84l_19o1o7/hs_e2ff1200l1f9r_z3/item_muiztzyy_9v990s": "You try the Accord keys on the glass doors. They remain doors, unimpressed by Honda engineering.",
      "room_muikx84l_19o1o7/hs_e2ff1200l1f9r_z3/item_muj1yjwu_iwbphs": "You wedge Baz’s 10 mm wrench against the glass doors. The wrench remains a wrench; the parking lot remains inconveniently outside.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/item_muikx84l_9005hm": "You press the Walkman to the Civic keys. Metallica grinds through the dead headphone foam; the keys remain unmoved, unimpressed by the solo.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/item_muizrmyw_d85rt1": "You jiggle the Civic keys at the Civic keys. The legendary ’94 remains unmoved, its battery preserving the family tradition of disappointment.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/item_muiztzyy_9v990s": "You try to make the Accord keys fit the Civic keys. The two keyrings clink like an argument nobody intends to win.",
      "room_muixg6v9_s2mkhf/hs_muizrlci_g0qmvh/item_muj1yjwu_iwbphs": "You test Baz’s wrench against the Civic keys. The 10 mm fits nothing, unless the ignition has developed a taste for blunt force.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/item_muikx84l_9005hm": "You press the Walkman to the Accord keys. Metallica rattles through the headphones; the Honda remains stubbornly keyless, unimpressed by the soundtrack.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/item_muizrmyw_d85rt1": "You try the Civic keys on the Accord keys. Metal meets metal; neither car is impressed.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/item_muiztzyy_9v990s": "You try the Accord keys on the Accord keys. They fit beautifully; the Honda remains unmoved, waiting for you to discover a more ambitious use for a key.",
      "room_muixg6v9_s2mkhf/hs_muiztxzu_snmw96/item_muj1yjwu_iwbphs": "You prod the Accord keys with Baz’s 10 mm wrench. The Honda does not start by sympathy, and the wrench offers no comment.",
      "room_muixg6v9_s2mkhf/hs_muj3enq0_hck3c3/item_muikx84l_9005hm": "You rewind the Walkman, then discover the kitchen counter has poor acoustics and no interest in Metallica. The tape keeps playing; your plan does not.",
      "room_muixg6v9_s2mkhf/hs_muj3enq0_hck3c3/item_muizrmyw_d85rt1": "You try the Civic keys on your back. The car remains unstarted, and your spine offers no ignition.",
      "room_muixg6v9_s2mkhf/hs_muj3enq0_hck3c3/item_muiztzyy_9v990s": "You try the Accord keys on your back. The Honda remains across town, unimpressed; your spine, meanwhile, offers no ignition.",
      "room_muixg6v9_s2mkhf/hs_muj3enq0_hck3c3/item_muj1yjwu_iwbphs": "You bring Baz’s 10 mm wrench down on the counter’s back. The counter remains unmoved, unimpressed, and apparently not in need of automotive maintenance.",
      "room_muizbmtc_hoou10/hs_e08658591p9y_zmr94s/item_muikx84l_9005hm": "You press play beside Baz’s van. Metallica snarls through the Walkman’s foamless headphones; the compressor keeps its own rhythm, unimpressed.",
      "room_muizbmtc_hoou10/hs_e08658591p9y_zmr94s/item_muizrmyw_d85rt1": "You try your Civic keys on Baz’s work van. The lock declines to recognize your legend; the battery, wherever it is, remains unimpressed.",
      "room_muizbmtc_hoou10/hs_e08658591p9y_zmr94s/item_muiztzyy_9v990s": "You give the Accord keys a hopeful jingle at Baz’s work van. The Ford remains unmoved; family trust doesn’t extend to hot-wiring a refrigeration unit.",
      "room_muizbmtc_hoou10/hs_e08658591p9y_zmr94s/item_muj1yjwu_iwbphs": "You take Baz’s 10 mm wrench to the van’s compressor. The machine keeps humming; Baz’s expression suggests you’ve just volunteered to explain the repair bill.",
      "room_muizbmtc_hoou10/hs_e08658598z5l_zylnsn/item_muikx84l_9005hm": "You press the Walkman to the school doors. Metallica rattles in your ears; the doors remain unimpressed, and Gaither High keeps all its secrets inside.",
      "room_muizbmtc_hoou10/hs_e08658598z5l_zylnsn/item_muizrmyw_d85rt1": "You try the Civic keys on the school doors. The lock declines to recognize either your car or your priorities.",
      "room_muizbmtc_hoou10/hs_e08658598z5l_zylnsn/item_muiztzyy_9v990s": "You try the Accord keys on the school doors. They fit nothing here, least of all the day’s plans.",
      "room_muizbmtc_hoou10/hs_e08658598z5l_zylnsn/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the school doors. They remain unmoved; apparently Gaither High doesn’t run on automotive logic.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/item_muikx84l_9005hm": "You press play and hold one foamless earcup toward the assistant principal. The opening riff of “Blackened” earns you a look; your valid pass earns you nothing.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/item_muizrmyw_d85rt1": "You jingle the Civic keys at the assistant principal. He gives them the same look he gives forged hall passes; technically, yours is valid, which is almost worse.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at the assistant principal. He gives the worn Honda fob a look, then gives you the look reserved for boys with plans and valid passes. The Accord stays parked.",
      "room_muizbmtc_hoou10/hs_e0865859b2ah_zhsrrn/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the assistant principal. He looks from the tool to your valid pass, unimpressed; the parking lot remains stubbornly supervised.",
      "room_muj17ok5_t7m7do/hs_muj2gzed_slfeta/item_muikx84l_9005hm": "You press play and hold your breath. Metallica crackles through the foamless headphones; Dale Mabry remains stubbornly Dale Mabry, and Gaither High School offers no useful response.",
      "room_muj17ok5_t7m7do/hs_muj2gzed_slfeta/item_muizrmyw_d85rt1": "You jingle the Civic keys at Gaither High. The school is unmoved; your car, meanwhile, is elsewhere and still has a battery.",
      "room_muj17ok5_t7m7do/hs_muj2gzed_slfeta/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at Gaither High, but the school declines to become a Honda. For once, the problem isn’t the keys.",
      "room_muj17ok5_t7m7do/hs_muj2gzed_slfeta/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Gaither High, but the school remains stubbornly un-repaired. Somewhere, your father senses the tool is missing.",
      "room_muj17ok5_t7m7do/hs_muj2hibs_vjno0c/item_muikx84l_9005hm": "You put on the Walkman and aim it at Sam Ash Music. Metallica thunders through the foamless headphones; the store remains tragically unmoved.",
      "room_muj17ok5_t7m7do/hs_muj2hibs_vjno0c/item_muizrmyw_d85rt1": "You wave the Civic keys at Sam Ash. The store remains stubbornly unignited; sadly, your car’s battery isn’t the only thing that can’t make a connection.",
      "room_muj17ok5_t7m7do/hs_muj2hibs_vjno0c/item_muiztzyy_9v990s": "You try the Accord keys on Sam Ash Music. They fit nothing but the mood: your mother’s Honda remains elsewhere, and the guitar store declines to start.",
      "room_muj17ok5_t7m7do/hs_muj2hibs_vjno0c/item_muj1yjwu_iwbphs": "You apply Baz’s 10 mm wrench to Sam Ash Music. The storefront remains stubbornly musical, and the wrench remains stubbornly a wrench.",
      "room_muj17ok5_t7m7do/hs_e0865859h50l_zibbmm/item_muikx84l_9005hm": "You put on your Walkman and cue up Metallica. The dead headphone foam sheds onto your shoulders; Dale Mabry remains deaf to your musical protest.",
      "room_muj17ok5_t7m7do/hs_e0865859h50l_zibbmm/item_muizrmyw_d85rt1": "You try the Civic keys on Sabal Palm, but the apartment complex declines to become a car. Somewhere out there, your battery remains a legend—mostly for what it won’t do.",
      "room_muj17ok5_t7m7do/hs_e0865859h50l_zibbmm/item_muiztzyy_9v990s": "The Accord keys turn obediently in the lock, but Sabal Palm stays right where it is. Even the Honda knows you can’t drive an apartment home.",
      "room_muj17ok5_t7m7do/hs_e0865859h50l_zibbmm/item_muj1yjwu_iwbphs": "You bring Baz’s 10 mm wrench to the Sabal Palm entrance. The lock remains unmoved; somewhere, a Lebanese dad senses his wrench is being wasted.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/item_e08658598j02_zgnr1g": "You flash the blue-and-yellow family card at Blockbuster on Dale Mabry, and the clerk slides Gran Turismo 3 across the counter before the last copy can vanish into the Tampa night. The late fees remain a family secret; for now, the road is yours.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/item_muikx84l_9005hm": "You jam the Walkman against Blockbuster Video. Metallica crackles through the foamless headphones; the rental counter remains tragically unmoved.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/item_muizrmyw_d85rt1": "You try the Civic keys on Blockbuster. The legend remains parked; the battery, as usual, contributes nothing.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at Blockbuster, but the glass doors remain unmoved. The worn Honda fob has no authority over retail architecture.",
      "room_muj17ok5_t7m7do/hs_e08658591bek_zm298q/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Blockbuster. The store remains stubbornly un-repaired; Gran Turismo 3 is still inside, where tools are apparently frowned upon.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/item_muikx84l_9005hm": "The Walkman coughs out Metallica through its disintegrating foam, while Westchase remains inconveniently west of everything. Mario can wait; Maz’s rule keeps the Accord on Dale Mabry, and your Civic is back home.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/item_muizrmyw_d85rt1": "You jingle the Civic keys at the map. The Civic runs fine now, but it's parked back home at Sabal Palm, and Maz's rule keeps her Accord on Dale Mabry. Home first, then Westchase.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/item_muiztzyy_9v990s": "You consider taking Maz’s Accord to Westchase. Her rule hangs over the keys like a traffic cop: the Accord stays on Dale Mabry, and Mario’s waiting for the Civic back at home.",
      "room_muj17ok5_t7m7do/hs_e48adf74y0w3k_z4/item_muj1yjwu_iwbphs": "You give Westchase a turn with Baz’s 10 mm wrench. Mario’s still out west, and the Civic’s still at home; the wrench, as usual, declines to solve geography.",
      "room_muj24gyp_sou079/hs_muj2fk6t_0sgb8y/item_muikx84l_9005hm": "You press play and turn around. Metallica burrows into your skull through the headphone foam’s remains, while the living room stays stubbornly where it is.",
      "room_muj24gyp_sou079/hs_muj2fk6t_0sgb8y/item_muizrmyw_d85rt1": "You turn around with the Civic keys ready. The Honda remains stubbornly where it is; your car, as ever, is elsewhere and its battery is a separate tragedy.",
      "room_muj24gyp_sou079/hs_muj2fk6t_0sgb8y/item_muiztzyy_9v990s": "You turn around, Accord keys jingling like a tiny promise of freedom. The living room remains stubbornly where it is; Maz’s Honda is not impressed.",
      "room_muj24gyp_sou079/hs_muj2fk6t_0sgb8y/item_muj1yjwu_iwbphs": "You set Baz’s 10 mm wrench against the TV stand and turn. Nothing budges—not even the picture. The wrench, at least, knows when it’s outmatched.",
      "room_muj24gyp_sou079/hs_e0865859g5w2_z1tqz4/item_muikx84l_9005hm": "You press the Walkman to your bedroom door. Metallica leaks through the dead headphone foam; the door remains unmoved, and the tape offers no legal advice.",
      "room_muj24gyp_sou079/hs_e0865859g5w2_z1tqz4/item_muizrmyw_d85rt1": "Your Civic keys scrape uselessly against the bedroom door. The legend of the ’94 EX does not, as it turns out, include being a key.",
      "room_muj24gyp_sou079/hs_e0865859g5w2_z1tqz4/item_muiztzyy_9v990s": "You try the Accord keys on your bedroom door. The lock remains unmoved; apparently it prefers a proper key, not a family heirloom with delusions of grandeur.",
      "room_muj24gyp_sou079/hs_e0865859g5w2_z1tqz4/item_muj1yjwu_iwbphs": "You test Baz’s 10 mm wrench against the bedroom door. The lock remains unimpressed; somewhere, your father senses a tool out of place.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/item_muikx84l_9005hm": "You press Play and hold the Walkman to the TV. Metallica hisses through the bald headphones; the Zenith remains unmoved, as it has been all week.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/item_muizrmyw_d85rt1": "You jangle the Civic keys at the TV. The Zenith remains unmoved; even the PlayStation 2 has better sense than to start without a disc.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/item_muiztzyy_9v990s": "You wave the Accord keys at the Zenith. The TV remains unmoved, having learned long ago that cars don’t start by remote.",
      "room_muj24gyp_sou079/hs_e0865859zvzq_z7z887/item_muj1yjwu_iwbphs": "You apply Baz’s 10 mm wrench to the Zenith. The television remains stubbornly television-shaped, and Gran Turismo 3 remains tantalizingly unwatched.",
      "room_muj24gyp_sou079/hs_muk5kjau_8puluq/item_muikx84l_9005hm": "You press the Walkman to the bedroom door. Metallica leaks through the tired headphones; Maz and Baz keep sleeping on the couch, oblivious and mercifully off-key.",
      "room_muj24gyp_sou079/hs_muk5kjau_8puluq/item_muizrmyw_d85rt1": "You try the Civic keys on your parents’ bedroom door. The lock remains unimpressed; Maz and Baz are asleep on the couch in plain view, beyond your powers of subtlety.",
      "room_muj24gyp_sou079/hs_muk5kjau_8puluq/item_muiztzyy_9v990s": "You jiggle the Accord keys at the bedroom door. Maz and Baz remain asleep on the couch, safely beyond the reach of your terrible plan.",
      "room_muj24gyp_sou079/hs_muk5kjau_8puluq/item_muj1yjwu_iwbphs": "You test the 10 mm wrench against Maz and Baz’s bedroom door. It remains stubbornly a door; your parents continue sleeping on the couch, blissfully beyond its jurisdiction.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/item_muikx84l_9005hm": "You press play and hold the Walkman to the launch display. Metallica rattles through the dead foam while every empty case remains stubbornly empty.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/item_muizrmyw_d85rt1": "You turn the Civic keys on the Gran Turismo 3 display. The empty cases remain impressively unmoved; apparently the real discs have already left the building.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/item_muiztzyy_9v990s": "You try the Accord keys on the launch display. The boxes remain empty, and the Honda fob seems unlikely to improve the situation.",
      "room_muj2rvon_2v6zou/hs_e0865859eqq2_zwjfc1/item_muj1yjwu_iwbphs": "You turn Baz’s 10 mm wrench on the Gran Turismo display. The empty cases remain defiantly empty; the wrench, at least, hasn’t been rented out.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/item_e0865859ytof_z02cnb": "You offer the Kid in the Red Hoodie your Ernie Ball Slinkys. His fingers close around the strings; the last copy of Gran Turismo 3 lands in your hands. Tonight, somewhere, a backyard band stays in tune. Your plans are considerably louder.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/item_muikx84l_9005hm": "The Walkman earns you a suspicious look from the kid in the red hoodie. The dead headphone foam and Metallica tape don’t look much like a pack of guitar strings.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/item_muizrmyw_d85rt1": "You flash the Civic keys at the kid in the red hoodie. He looks from them to the last copy of Gran Turismo 3, unimpressed; unless your Honda has learned to play a high E, this deal is going nowhere.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/item_muiztzyy_9v990s": "You flash Maz’s Accord keys at the kid. He glances at the worn Honda fob, then back at his broken high E string; apparently neither one has learned to play guitar.",
      "room_muj2rvon_2v6zou/hs_e08658592cdy_zmgf83/item_muj1yjwu_iwbphs": "You offer the kid in the red hoodie Baz’s wrench. He eyes the ten millimeters of automotive diplomacy, then points to his broken guitar string. The wrench remains useful only to someone with a bolt problem.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/item_muikx84l_9005hm": "You press the Walkman to the race driver’s cardboard chest. Metallica leaks through the dead headphone foam; the standee, having seen things, declines to comment.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/item_muizrmyw_d85rt1": "You try the Civic keys on the race driver standee. The cardboard champion remains undefeated; your car, meanwhile, is still outside and very much not a rental.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/item_muiztzyy_9v990s": "You press the Accord keys to the standee’s cardboard palm. The driver offers no test drive, only the fixed grin of a man who rents out Gran Turismo to strangers.",
      "room_muj2rvon_2v6zou/hs_e0865859nh7v_ztx6fh/item_muj1yjwu_iwbphs": "You bring Baz’s 10 mm wrench down on the race-driver standee. The cardboard veteran wobbles, still urging you to race, rent, repeat; the wrench remains the most useful thing in the room.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/item_e086585939q5_zj4p5b": "The clerk’s eyes widen at the Gran Turismo 3 case, then he scans it like a man saving one last seat on the lifeboat. “Last copy,” he says, sliding it across the counter; tonight, Gus gets real cars, real driving, and no humidity until the walk back to the parking lot.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/item_muikx84l_9005hm": "You offer the clerk your Walkman, Metallica tape and all. He glances at it, then at the rental queue; even “One” can’t get you past the checkout counter.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/item_muizrmyw_d85rt1": "You flash your Civic keys at the checkout clerk. He gives them the look reserved for expired coupons and people who think a car counts as payment.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/item_muiztzyy_9v990s": "You set the Accord keys on the counter. The clerk glances at them, then at you; Blockbuster has yet to accept Honda as payment.",
      "room_muj2rvon_2v6zou/hs_e0865859mqkp_zyjthy/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the clerk. He eyes it, then you, with the practiced calm of a man who’s seen worse repair plans—and points you toward the checkout.",
      "room_muj2rvon_2v6zou/hs_e08658593zjd_zx6o0s/item_muikx84l_9005hm": "You click the Walkman, then the exit. Metallica snarls into your foamless headphones; Blockbuster remains stubbornly indoors.",
      "room_muj2rvon_2v6zou/hs_e08658593zjd_zx6o0s/item_muizrmyw_d85rt1": "You try the Civic keys on the parking-lot exit. The lock remains unmoved; somewhere outside, your battery continues its private little funeral.",
      "room_muj2rvon_2v6zou/hs_e08658593zjd_zx6o0s/item_muiztzyy_9v990s": "You try the Accord keys on the exit. The door remains unimpressed; Maz’s Honda is still in the parking lot, where it belongs.",
      "room_muj2rvon_2v6zou/hs_e08658593zjd_zx6o0s/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the exit. The door remains unimpressed; Blockbuster’s security system is less easily persuaded than a Lebanese father’s toolbox.",
      "room_muj2rvon_2v6zou/hs_e2ff1200vq43u_z3/item_muikx84l_9005hm": "You press Play and back toward the parking lot, thrashing through “One” on the wheezing Walkman. The headphones shed a little more foam; Blockbuster remains stubbornly indoors.",
      "room_muj2rvon_2v6zou/hs_e2ff1200vq43u_z3/item_muizrmyw_d85rt1": "You turn the Civic keys in the exit, but the parking lot remains stubbornly outside. The Civic’s battery has never been accused of enthusiasm, and neither has this lock.",
      "room_muj2rvon_2v6zou/hs_e2ff1200vq43u_z3/item_muiztzyy_9v990s": "The Accord keys fit the keyhole, but the door isn’t a car. Maz trusts you with the Honda, not with driving through Blockbuster’s front wall.",
      "room_muj2rvon_2v6zou/hs_e2ff1200vq43u_z3/item_muj1yjwu_iwbphs": "You take Baz’s 10 mm wrench to the exit. The door remains unmoved; apparently Blockbuster has already invested in security.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/item_e086585939q5_zj4p5b": "You slide Gran Turismo 3 across the counter. The clerk’s eyebrows rise; the last copy disappears beneath the scanner with a satisfying beep, and suddenly the road ahead looks a lot more real than Dale Mabry ever will.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/item_muikx84l_9005hm": "You press the Walkman to the clerk’s blue polo. Metallica rattles through the dying foam; the clerk looks at you, then at the counter. Gran Turismo 3 remains stubbornly un-rented.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/item_muizrmyw_d85rt1": "You jingle the Civic keys at the clerk. He eyes them, then the clock; neither accepts them as payment.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/item_muiztzyy_9v990s": "The clerk gives the Accord keys a weary glance, as if Maz has sent them in to rent the car itself. “We don’t take trade-ins,” he says, and the Gran Turismo 3 copies remain stubbornly behind the counter.",
      "room_muj2rvon_2v6zou/hs_e2ff1200rz4o0_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the clerk. He gives it the look of a man who’s seen stranger things in retail, then points you toward the return bin.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fegnv2n_z3/item_muikx84l_9005hm": "You press play and offer Maz’s Accord a private concert. The Honda remains unmoved; even the headphones’ dead foam had better soundproofing.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fegnv2n_z3/item_muizrmyw_d85rt1": "The Civic keys don’t fit Maz’s Accord. You jiggle them anyway, because hope is cheaper than a new battery—and nearly as useless.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fegnv2n_z3/item_muiztzyy_9v990s": "The keys turn in the lock, but Maz’s Accord stays stubbornly silent. Apparently trust doesn’t include teleportation.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fegnv2n_z3/item_muj1yjwu_iwbphs": "You produce Baz’s 10 mm wrench and give Maz’s Accord a thoughtful inspection. The car remains unmoved; apparently it requires keys, not a Lebanese dad’s confidence.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fe2wpnr_z3/item_muikx84l_9005hm": "You press the Walkman to the school doors. Metallica growls into one ear; the locked doors remain unimpressed.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fe2wpnr_z3/item_muizrmyw_d85rt1": "You rattle the Civic keys at the school doors. The lock remains unmoved, unimpressed, and several hundred yards from your car.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fe2wpnr_z3/item_muiztzyy_9v990s": "You try the Accord keys on the school doors. The lock declines to become a car, a shortcut, or anything else you can drive to Blockbuster.",
      "room_e2ff11fepr1ab_z3/hs_e2ff11fe2wpnr_z3/item_muj1yjwu_iwbphs": "You work the 10 mm wrench against the school doors. They remain unmoved; Gaither’s security system is mostly teenage indifference, but this is not the right tool for it.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fezpyqi_z3/item_muikx84l_9005hm": "The Civic idles beneath a sky the color of old dishwater. You put on the Walkman; Metallica snarls through foamless headphones, but the car remains unimpressed.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fezpyqi_z3/item_muizrmyw_d85rt1": "You try the Civic keys. The red Civic is already running, its battery having recently negotiated a temporary ceasefire; the keys contribute nothing but a small jingle.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fezpyqi_z3/item_muiztzyy_9v990s": "You try Maz’s Accord key in your Civic. It doesn’t fit; apparently even Hondas have standards.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fezpyqi_z3/item_muj1yjwu_iwbphs": "You hold the wrench up to the Civic’s running engine. It’s a 10 mm, not a miracle; the car keeps idling, unimpressed.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fetzcpp_z3/item_muikx84l_9005hm": "You press play and hold the Walkman up to the school doors. Metallica crackles into your foamless headphones; the doors remain unmoved, unimpressed, and probably not fans of thrash.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fetzcpp_z3/item_muizrmyw_d85rt1": "The keys fit nothing but the Civic, and the Civic is nowhere near these doors. Back into school you go, defeated by architecture and your own plan.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fetzcpp_z3/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at the school doors. They remain unmoved; the Honda is outside, and this is not how doors work.",
      "room_e2ff11fedsllm_z3/hs_e2ff11fetzcpp_z3/item_muj1yjwu_iwbphs": "You wedge Baz’s 10 mm wrench against the school doors. The lock remains unimpressed, and Gaither High declines to be repaired.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe1szd0_z3/item_muikx84l_9005hm": "You press play and offer Dale Mabry Highway a tinny blast of Metallica. The traffic remains unmoved; even the Walkman’s dead headphone foam has better sense than to get involved.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe1szd0_z3/item_muizrmyw_d85rt1": "You try the Civic keys on Gaither High’s front doors. The legend of your ’94 Civic EX remains intact; the battery, tragically, is not involved.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe1szd0_z3/item_muiztzyy_9v990s": "You jingle Maz’s Accord keys at Gaither High. The school remains stubbornly unroadworthy.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe1szd0_z3/item_muj1yjwu_iwbphs": "You give Gaither High a turn with Baz’s wrench. The school remains stubbornly un-repaired; somewhere, a 10 mm socket senses a wasted afternoon.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe7clu3_z3/item_muikx84l_9005hm": "You press play and hold the battered headphones to the Sam Ash sign. Metallica crackles into your ears; the store remains stubbornly note-free.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe7clu3_z3/item_muizrmyw_d85rt1": "You jiggle the Civic keys at Sam Ash Music. The store remains unmoved, and the Civic’s legendary battery stays safely beyond reach.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe7clu3_z3/item_muiztzyy_9v990s": "You flash the Accord keys at Sam Ash Music, as if a worn Honda fob might unlock a guitar shop. The door remains unimpressed; no notes.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11fe7clu3_z3/item_muj1yjwu_iwbphs": "You give Sam Ash Music the wrench treatment. The storefront remains stubbornly musical, and your 10 mm does nothing but threaten the local economy.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feigiw1_z3/item_muikx84l_9005hm": "You queue up Metallica on the Walkman and stare down Dale Mabry. The dead headphone foam sheds quietly onto your shoulders; the highway remains unimpressed.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feigiw1_z3/item_muizrmyw_d85rt1": "You try the Civic keys on Sabal Palm, but the apartment complex declines to become a car. The Civic remains elsewhere, its legendary battery enjoying a quiet afternoon.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feigiw1_z3/item_muiztzyy_9v990s": "The Accord keys jangle uselessly against the idea of Sabal Palm. Home remains stubbornly where you left it, which is generally how addresses work.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feigiw1_z3/item_muj1yjwu_iwbphs": "You take the 10 mm wrench to the Sabal palm. It remains a tree; Baz’s reputation for preparedness survives the encounter.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/item_e08658598j02_zgnr1g": "You slap the blue-and-yellow family Blockbuster Card onto the counter at North Pointe Plaza. The clerk scans it, slides Gran Turismo 3 across the counter, and says, “You’re all set”—the family’s late fees remain safely buried in the shadows.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/item_muikx84l_9005hm": "You press play and hold the Walkman toward Blockbuster, as if Metallica might persuade the store to open its doors. The tape hisses through the ruined foam; the rental stock remains unmoved.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/item_muizrmyw_d85rt1": "You jiggle the Civic keys at Blockbuster Video, as if the glass doors might recognize automotive royalty. They don’t; the Civic remains elsewhere, and the last copy of Gran Turismo 3 grows more vulnerable by the minute.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/item_muiztzyy_9v990s": "You jangle Maz’s Accord keys at Blockbuster Video. The store remains unmoved; sadly, Honda fobs aren’t accepted as payment.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11feonomp_z3/item_muj1yjwu_iwbphs": "You bring the wrench down on Blockbuster Video. The sign remains unmoved, and Gran Turismo 3 remains distressingly unavailable.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11ferx6fd_z3/item_muikx84l_9005hm": "You press play and get a thin, tinny blast of Metallica through the Walkman’s foamless headphones. Westchase remains stubbornly west of Dale Mabry; the tape can’t drive, and neither can nostalgia.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11ferx6fd_z3/item_muizrmyw_d85rt1": "You jangle the Civic keys at the thought of Westchase. Your red EX remains a legend in the driveway, where its battery continues to enjoy retirement.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11ferx6fd_z3/item_muiztzyy_9v990s": "The Accord keys give a tired jingle. Mario’s house remains in Westchase, unimpressed by your transportation plans.",
      "room_e2ff11fe48u2b_z3/hs_e2ff11ferx6fd_z3/item_muj1yjwu_iwbphs": "You bring Baz’s 10 mm wrench down on Westchase. Mario’s neighborhood remains stubbornly unassembled.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/item_muikx84l_9005hm": "You offer Mario the Walkman. He eyes the flaking foam, then declines; even a sold-out Blockbuster can’t be drowned out by “...And Justice for All.”",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/item_muizrmyw_d85rt1": "You offer Mario the Civic keys. He eyes them politely, then goes back to calling the STI; apparently your car’s legend travels farther than its battery.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/item_muiztzyy_9v990s": "You offer Mario the Accord keys. He eyes the worn Honda fob, then the empty shelf in his mind where Gran Turismo 3 should be; apparently neither item is a game.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fe06spz_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Mario. He studies it with the calm of a man who’s already called dibs on the STI; the wrench, tragically, is not a copy of Gran Turismo 3.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/item_muikx84l_9005hm": "You offer Jesse the Walkman, its dead foam pads and Metallica tape making a modest case for themselves. He glances at the headphones, then back at his new HDTV; neither is impressed.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/item_muizrmyw_d85rt1": "You jingle the Civic keys at Jesse. He admires the metalwork, but unless the HDTV runs on gasoline, neither of you is getting anywhere.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/item_muiztzyy_9v990s": "Jesse eyes the Accord keys, then your face. “I said game night, not getaway driver.” The keys stay in your hand; Gran Turismo 3 remains somebody else’s problem.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fegjhvl_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Jesse. He protects the new HDTV with the solemnity of a man who knows exactly what repair costs.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/item_muikx84l_9005hm": "You offer Sam the Walkman, Justice for All crackling through its foamless headphones. He declines; Route 41 has apparently provided all the music he needs.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/item_muizrmyw_d85rt1": "Sam checks the Civic keys, then checks you, as if one of them might contain a racetrack. He’s happy to ride shotgun for Gran Turismo 3, but he isn’t getting into your legend on a dead battery.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/item_muiztzyy_9v990s": "You jangle the Accord keys at Sam. He eyes the Honda fob, then you, as if trying to remember which one of you hit him on Route 41. No car starts; only the conversation gets worse.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feiy8kz_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at Sam. He pauses his Route 41 saga just long enough to explain that Mortal Kombat rewards a different sort of violence.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/item_muikx84l_9005hm": "You press play and hold the Walkman toward the empty space. Metallica snarls through the dying foam; the PlayStation remains unimpressed, and Gran Turismo 3 stays missing.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/item_muizrmyw_d85rt1": "You brandish the Civic keys at Mario’s garage. The car remains a legend; the battery, apparently, isn’t the only thing that fails to start.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/item_muiztzyy_9v990s": "You wave Maz’s Accord keys toward Mario’s garage, as if the Honda might recognize its natural habitat. The garage remains unimpressed; Gran Turismo 3 is still missing from its spot.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11feo4vjh_z3/item_muj1yjwu_iwbphs": "You give the garage a stern tap with Baz’s 10 mm wrench. The PlayStation remains unmoved; apparently it prefers software to plumbing.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/item_muk6i3wl_8h3nmc": "You crack open the Habrooj Jar. Its perfume could stop traffic in Tampa, but Mario’s garage welcomes it like an old friend—beanbags, mini-fridge, and Gran Turismo 3 all ready. The evening shifts into gear.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/item_muikx84l_9005hm": "You thumb PLAY. Metallica hisses through the Walkman’s foamless headphones while Mario’s garage remains stubbornly untransformed; apparently, a soundtrack isn’t the same as atmosphere.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/item_muizrmyw_d85rt1": "You jingle the Civic keys at Mario’s garage. The car’s legendary battery remains elsewhere, and the TV still hasn’t mistaken itself for a tailgate.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/item_muiztzyy_9v990s": "You jiggle Maz’s Accord keys at Mario’s garage door. The lock remains unmoved; apparently, family trust does not extend to breaking and entering.",
      "room_e2ff11fefy1ys_z3/hs_e48adf74lilw9_z4/item_muj1yjwu_iwbphs": "You give Mario’s garage a turn with Baz’s 10 mm wrench. The wrench remains the most useful thing in the room; the beanbags remain unimpressed.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/item_e086585939q5_zj4p5b": "You produce Gran Turismo 3, the last copy in North Tampa, and suddenly Mario’s living room has a schedule. Everyone piles into your red Civic for Sabal Palm; the humidity rides shotgun, but tonight it can wait.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/item_muikx84l_9005hm": "You press play, but the Walkman only coughs up Metallica through the foamless headphones. Nobody piles into the Civic; game night can wait until you’ve secured the sacred plastic rectangle.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/item_muizrmyw_d85rt1": "You produce the Civic keys. Everyone eyes the red EX, a legend in its own driveway. Without Gran Turismo 3, though, this is just a pile-in to nowhere.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/item_muiztzyy_9v990s": "You try to pile everyone into the red Civic, but the Accord keys don’t make it any roomier. Nobody moves; even the Honda fob looks unimpressed.",
      "room_e2ff11fefy1ys_z3/hs_e2ff11fearngm_z3/item_muj1yjwu_iwbphs": "You brandish Baz’s 10 mm wrench at the game-night caravan. Nobody piles into the Civic; apparently, automotive enthusiasm still requires a car and Gran Turismo 3.",
      "room_e2ff11fefy1ys_z3/hs_e371dfc6road_zg/item_muikx84l_9005hm": "You press Play, but Metallica can’t drive the Civic for you. The dead headphone foam sheds onto your shoulders; Dale Mabry remains stubbornly elsewhere.",
      "room_e2ff11fefy1ys_z3/hs_e371dfc6road_zg/item_muizrmyw_d85rt1": "You try the Civic keys. The ’94 EX stays parked, its battery still honoring a long-standing commitment to nothing.",
      "room_e2ff11fefy1ys_z3/hs_e371dfc6road_zg/item_muiztzyy_9v990s": "You try Maz’s Accord keys on the Civic. The Honda fob gives a small, unhelpful jingle; your Civic remains unmoved, loyal to its own ignition and no one else.",
      "room_e2ff11fefy1ys_z3/hs_e371dfc6road_zg/item_muj1yjwu_iwbphs": "You give the Civic’s “Back on the Road” a thoughtful prod with Baz’s wrench. The car remains exactly where it is; apparently, automotive progress requires more than Lebanese tradition and a 10 mm socket.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/item_muikx84l_9005hm": "You tangle the jumper cables around the Walkman and press play. Metallica thrashes bravely; the Honda remains unimpressed.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/item_muizrmyw_d85rt1": "You hook the Civic keys to the jumper cables. The car remains unmoved, though the arrangement has potential as a very small, very bad sculpture.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/item_muiztzyy_9v990s": "You try to jump-start the Accord with its own keys. The cables remain unimpressed; the car, sensibly, refuses to take advice from metal.",
      "room_mujwa19j_7ag5ox/hs_mujwaoeo_eou8dk/item_muj1yjwu_iwbphs": "You wedge Baz’s 10 mm wrench against the jumper cables. Nothing happens, except the drawer now has a stronger opinion about you.",
      "room_mujwa19j_7ag5ox/hs_mujxywed_ppxwil/item_muikx84l_9005hm": "You press the Walkman against the drawer’s back. Metallica keeps thrashing in your ears; the silverware remains unmoved by the argument.",
      "room_mujwa19j_7ag5ox/hs_mujxywed_ppxwil/item_muizrmyw_d85rt1": "You try the Civic keys on the kitchen drawer. The lock remains unmoved; somewhere, your car’s legendary battery declines to comment.",
      "room_mujwa19j_7ag5ox/hs_mujxywed_ppxwil/item_muiztzyy_9v990s": "You try the Accord keys on your back. The worn fob jingles; your back remains stubbornly keyless. Maz’s trust, at least, is still intact.",
      "room_mujwa19j_7ag5ox/hs_mujxywed_ppxwil/item_muj1yjwu_iwbphs": "You jab the 10 mm wrench behind the kitchen drawer. It doesn’t budge; somewhere, Baz senses a disturbance in the household tool inventory.",
      "room_muk5y1kj_3sfnoi/hs_muk5zfqi_rzp3n4/item_muikx84l_9005hm": "You cue up Metallica and drift toward the living room door. Maz and Baz remain asleep on the couch; the Walkman’s tinny assault fails to move anyone but you.",
      "room_muk5y1kj_3sfnoi/hs_muk5zfqi_rzp3n4/item_muizrmyw_d85rt1": "You try the Civic keys on the bedroom door. The lock remains unimpressed; Maz and Baz are still asleep in the living room, guarding the way out with the quiet menace of unpaid bills.",
      "room_muk5y1kj_3sfnoi/hs_muk5zfqi_rzp3n4/item_muiztzyy_9v990s": "The Honda keys jingle hopefully. The bedroom door remains unimpressed; Maz and Baz are still asleep on the couch, guarding the Accord by accident.",
      "room_muk5y1kj_3sfnoi/hs_muk5zfqi_rzp3n4/item_muj1yjwu_iwbphs": "You test the 10 mm wrench on the bedroom door. It remains stubbornly attached to the house, and your parents keep sleeping on the couch—apparently the wrench has limits.",
      "room_muk5y1kj_3sfnoi/hs_muk610sf_cegxjz/item_muikx84l_9005hm": "You press the Walkman to the closet door. Metallica grinds through the dead foam; inside, the fruity pungency remains unmoved, and the closet declines to reveal its secrets.",
      "room_muk5y1kj_3sfnoi/hs_muk610sf_cegxjz/item_muizrmyw_d85rt1": "You jiggle the Civic keys at the closet, as if Maz and Baz have started storing cars between the coats. The lock remains unimpressed; the fruity, pungent smell keeps its secrets.",
      "room_muk5y1kj_3sfnoi/hs_muk610sf_cegxjz/item_muiztzyy_9v990s": "You try the Accord keys on Maz and Baz’s closet. They don’t fit, and the sweet, pungent smell declines to explain itself.",
      "room_muk5y1kj_3sfnoi/hs_muk610sf_cegxjz/item_muj1yjwu_iwbphs": "You prod the closet with Baz’s 10 mm wrench. The fruity smell grows bolder; the closet, unlike the wrench, keeps its secrets.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/item_muikx84l_9005hm": "You slip the Walkman beside Baz’s Habrooj jar, as if Metallica might convince it to open. The tape keeps playing; the jar remains stubbornly unimpressed.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/item_muizrmyw_d85rt1": "You work the Civic keys against the habrooj jar. The jar remains unimpressed; Baz’s stash isn’t going anywhere, and neither is the battery in your car.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/item_muiztzyy_9v990s": "You reach for the jar, then reconsider. Maz’s Accord keys may be entrusted to you; Baz’s habrooj is another matter, and the night’s already humid enough.",
      "room_muk6fyxs_wtgsjd/hs_muk6hy4a_c5hote/item_muj1yjwu_iwbphs": "You try Baz’s 10 mm wrench on the habrooj jar. The lid remains undefeated; Baz’s wrench, as ever, knows its place.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/item_muikx84l_9005hm": "You press Play and hold the headphones to Baz’s clothes. The tape thrashes gamely, but all you get is tobacco, Cool Water, and the faint suspicion that your father’s laundry has better taste in music.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/item_muizrmyw_d85rt1": "You pat Baz’s clothes for the Civic keys. They yield only tobacco, Cool Water, and the quiet suspicion that your father has been dressing in the dark.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/item_muiztzyy_9v990s": "You try the Accord keys on Baz’s clothes. They jingle against the fabric; the clothes remain stubbornly unstartable.",
      "room_muk6fyxs_wtgsjd/hs_muk6m149_dasf6m/item_muj1yjwu_iwbphs": "You prod Baz’s clothes with the 10 mm wrench. The shirts remain unmoved, unimpressed, and faintly scented with paternal authority.",
      "room_muk6fyxs_wtgsjd/hs_muk6n1v8_tfycf1/item_muikx84l_9005hm": "You put on the Walkman and head back to your parents’ bedroom. Metallica hisses through the foamless headphones; Baz’s side of the closet remains unmoved, and so does your life.",
      "room_muk6fyxs_wtgsjd/hs_muk6n1v8_tfycf1/item_muizrmyw_d85rt1": "You jingle the Civic keys at the bedroom door. The legendary EX remains elsewhere; the battery, as usual, has no comment.",
      "room_muk6fyxs_wtgsjd/hs_muk6n1v8_tfycf1/item_muiztzyy_9v990s": "The Accord keys rattle against the bedroom door, but the door remains unmoved. Maz trusts you with the car, not with whatever this is.",
      "room_muk6fyxs_wtgsjd/hs_muk6n1v8_tfycf1/item_muj1yjwu_iwbphs": "The wrench meets the bedroom door with a dull clunk. It remains a wrench; the door remains unimpressed.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/item_muikx84l_9005hm": "You press play and aim the Walkman at Baz’s shoes. Metallica snarls into the dead headphone foam, but the box remains unmoved; apparently, even heavy metal has its limits.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/item_muizrmyw_d85rt1": "You try the Civic keys on Baz’s shoes. They don’t fit, and the shoes remain stubbornly attached to the box—an alliance forged long before you were born.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/item_muiztzyy_9v990s": "You try the Accord keys on Baz’s shoes. The shoes remain unmoved, and the box keeps its counsel.",
      "room_muk6fyxs_wtgsjd/hs_muk6nq3c_qu0h7c/item_muj1yjwu_iwbphs": "You prod Baz’s shoes with the wrench. They shift just enough to reveal more shoe, while the interesting box remains a closely guarded secret of the footwear department.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/item_muikx84l_9005hm": "You press Play. Another box offers no response, though the Walkman’s dead headphone foam sheds a little more of its legacy.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/item_muizrmyw_d85rt1": "You try the Civic keys on Baz’s box. The lock remains unimpressed; the box, like most of Baz’s boxes, guards nothing you need.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/item_muiztzyy_9v990s": "You try the Accord keys on another box. The lock remains unimpressed, and the box retains its air of having important contents and absolutely none of them being yours.",
      "room_muk6fyxs_wtgsjd/hs_muk6ofb9_qwmtwu/item_muj1yjwu_iwbphs": "You prod the box with Baz’s 10 mm wrench. It remains a box, unimpressed by both your leverage and your optimism.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/item_muikx84l_9005hm": "You press play and hold the Walkman to Baz’s duffel. Metallica rattles its zipper; whatever the bag’s hiding, it keeps better time than you.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/item_muizrmyw_d85rt1": "You work the Civic keys at Baz’s duffel. The lock declines to reveal its secrets; the bag remains about as gym-related as a desk job.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/item_muiztzyy_9v990s": "You try the Accord keys on Baz’s duffel. The lock doesn’t turn; whatever’s inside, it apparently prefers to remain a family mystery.",
      "room_muk6fyxs_wtgsjd/hs_muk6oyoy_b4x4c0/item_muj1yjwu_iwbphs": "You put Baz’s 10 mm wrench to the duffel bag. The wrench comes away unchanged; the bag declines to explain itself.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/item_muikx84l_9005hm": "You press the Walkman to the box. The tape mutters through its bald foam headphones; the box, unimpressed, stays a box.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/item_muizrmyw_d85rt1": "You jangle the Civic keys at the box. The wire shelf remains unmoved, and Baz’s habrooj continues its career as a jar.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/item_muiztzyy_9v990s": "You try the Accord keys on the box. The lock remains unimpressed; somewhere beside it, Baz’s jar keeps its counsel.",
      "room_muk6fyxs_wtgsjd/hs_muk71oed_7emxcc/item_muj1yjwu_iwbphs": "You work the 10 mm wrench against the box. The shelf gives a little rattle; the box remains shut, and Baz’s jar of habrooj watches in silence. Some tools know when they’re outmatched.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/item_muikx84l_9005hm": "You press Play. Metallica rattles through the dying headphones while the box remains a box; Baz’s jar, at least, is already missing from its post.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/item_muizrmyw_d85rt1": "You work the Civic keys into the box. The lock declines to recognize automotive authority, and the wire shelf gives a small, judgmental rattle.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/item_muiztzyy_9v990s": "You try the Accord keys on the box. The lock remains unmoved; apparently Honda engineering has limits.",
      "room_muk6fyxs_wtgsjd/hs_e48adf747ov6z_z4/item_muj1yjwu_iwbphs": "You give the box a turn with Baz’s wrench. It doesn’t open, improve, or confess; somewhere, the jar’s absence goes unnoticed. For now."
    }
  },
  "liveBridge": false,
  "previewBridge": false
};
