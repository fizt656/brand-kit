// Safar game data — edit text responses here if you like.
window.SAFAR_GAME = {
  "meta": {
    "id": "project_bliss6abc6512_bd",
    "name": "Bliss Days",
    "aspectRatio": "16:9",
    "accent": "#f59e0b",
    "background": "#1c1017",
    "font": "modern",
    "atmosphere": "subtle",
    "uiSound": false
  },
  "startRoomId": "room_efead1c6pj8ei_bd",
  "rooms": [
    {
      "id": "room_efead1c6pj8ei_bd",
      "name": "Outside Teta's",
      "image": "assets/room-outside_teta_s.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Saturday, 1998. Teta's building behind you, a man'oushe in your stomach, five thousand lira in your pocket. You called Guy from her hallway phone and he said one word: \"Come.\" Bliss is too far to walk in this heat. That's what servees are for.",
      "hotspots": [
        {
          "id": "hs_efead1c6y6jfi_bd",
          "name": "Teta's Building",
          "kind": "scenery",
          "rect": {
            "x": 31,
            "y": 0,
            "w": 40,
            "h": 80
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "You just left. Ring Teta's bell now and you'll be eating kibbeh until three, and Guy will have started without you. Keep moving.",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6202ol_bd",
          "name": "Dekkaneh",
          "kind": "scenery",
          "rect": {
            "x": 2,
            "y": 45,
            "w": 28,
            "h": 37
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6bwkvj_bd",
          "name": "Peugeot 504",
          "kind": "scenery",
          "rect": {
            "x": 69,
            "y": 72,
            "w": 29,
            "h": 16
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6dk4to_bd",
          "name": "Ficus Tree",
          "kind": "scenery",
          "rect": {
            "x": 72,
            "y": 12,
            "w": 28,
            "h": 58
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6v04rc_bd",
          "name": "Get Servees",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 12
          },
          "targetRoomId": "room_efead1c642zkm_bd",
          "consumesRequiredItem": false,
          "clearsFlags": [
            "from-bliss"
          ]
        }
      ]
    },
    {
      "id": "room_efead1c642zkm_bd",
      "name": "Ras Beirut",
      "image": "assets/room-ras_beirut.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "Where to? Pick it, then yell it at the next servees and hope it's going your way.",
      "hotspots": [
        {
          "id": "hs_efead1c6n7td4_bd",
          "name": "Guy's (Bliss)",
          "kind": "exit",
          "rect": {
            "x": 50,
            "y": 19,
            "w": 11,
            "h": 15
          },
          "targetRoomId": "room_efead1c6oayhb_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c6jsqyh_bd",
          "cutsceneVariants": [
            {
              "cutsceneId": "cutscene_efead1c6jkjqh_bd",
              "requiresFlag": "from-bliss"
            }
          ]
        },
        {
          "id": "hs_efead1c6h3afo_bd",
          "name": "Maghfar Hbeish",
          "kind": "exit",
          "rect": {
            "x": 35,
            "y": 21,
            "w": 12,
            "h": 15
          },
          "targetRoomId": "room_efead1c642zkm_bd",
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Maghfar Hbeish, the police station. Nobody goes to Hbeish on purpose. Not today.",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6n55ka_bd",
          "name": "Nadim's (Clemenceau)",
          "kind": "exit",
          "rect": {
            "x": 86,
            "y": 23,
            "w": 13,
            "h": 16
          },
          "targetRoomId": "room_efead1c642zkm_bd",
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Nadim's place in Clemenceau. Not today. Besides, Nadim is never home. He's always on his way somewhere, usually to Guy's.",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6axufd_bd",
          "name": "The Corniche",
          "kind": "scenery",
          "rect": {
            "x": 0,
            "y": 30,
            "w": 16,
            "h": 60
          },
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_efead1c6oayhb_bd",
      "name": "Bliss Street",
      "image": "assets/room-bliss_street.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "flagImages": [
        {
          "requiresFlag": "nadim-left",
          "hiddenByFlag": "wael-back",
          "image": "assets/room-bliss_street-flag-nadim_left.jpg"
        }
      ],
      "entryMode": "custom",
      "entryText": "Bliss Street. AUB students, shawarma smoke, horns honked with love. Guy's white door sits between Kababji and a shutter that never opens.",
      "hotspots": [
        {
          "id": "hs_efead1c6s7ym4_bd",
          "name": "Kababji",
          "kind": "npc",
          "rect": {
            "x": 2,
            "y": 29,
            "w": 23,
            "h": 42
          },
          "requiredItemId": "item_efead1c6uhipf_bd",
          "lockedText": "The Kababji guy, without looking up from the spit: \"Taouk? Shawarma? Ahla w sahla. Money first, habibi, then love.\"",
          "grantsItemId": "item_efead1c6fyagj_bd",
          "consumesRequiredItem": true,
          "hiddenByFlag": "got-coin",
          "setsFlags": [
            "got-coin"
          ]
        },
        {
          "id": "hs_efead1c6ov5vj_bd",
          "name": "Kababji",
          "kind": "npc",
          "rect": {
            "x": 2,
            "y": 29,
            "w": 23,
            "h": 42
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The Kababji guy, pointing his knife next door: \"Intercom? Dead since the winter, habibi. You kids throw things at his shutters. Something small. Not my sandwiches.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "got-coin",
          "hiddenByFlag": "nadim-left"
        },
        {
          "id": "hs_efead1c6ztth1_bd",
          "name": "Kababji",
          "kind": "npc",
          "rect": {
            "x": 2,
            "y": 29,
            "w": 23,
            "h": 42
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The Kababji guy, nodding at the kid at his counter: \"Your friend? Third sandwich. He says he lost his headphones and can't go on. Ya haram.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "nadim-left"
        },
        {
          "id": "hs_efead1c678ysn_bd",
          "name": "White Door",
          "kind": "exit",
          "rect": {
            "x": 36.5,
            "y": 46,
            "w": 6,
            "h": 24
          },
          "targetRoomId": "room_efead1c6oayhb_bd",
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The white metal door is locked. It only opens when Guy buzzes it from inside.",
          "consumesRequiredItem": false,
          "hiddenByFlag": "door-open"
        },
        {
          "id": "hs_efead1c6gb5j0_bd",
          "name": "White Door",
          "kind": "exit",
          "rect": {
            "x": 36.5,
            "y": 46,
            "w": 6,
            "h": 24
          },
          "targetRoomId": "room_efead1c6ljecr_bd",
          "consumesRequiredItem": false,
          "requiresFlag": "door-open"
        },
        {
          "id": "hs_efead1c6cfolp_bd",
          "name": "Intercom",
          "kind": "scenery",
          "rect": {
            "x": 42.5,
            "y": 51,
            "w": 3,
            "h": 7
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "BZZZZZT. Nothing. Either the intercom died again or Guy has the music too loud. Probably both. Last time Wael just threw a coin at Guy's shutters.",
          "consumesRequiredItem": false,
          "hiddenByFlag": "door-open"
        },
        {
          "id": "hs_efead1c6io8kw_bd",
          "name": "Intercom",
          "kind": "scenery",
          "rect": {
            "x": 42.5,
            "y": 51,
            "w": 3,
            "h": 7
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "BZZT. Nothing. Doesn't matter, the door's open.",
          "consumesRequiredItem": false,
          "requiresFlag": "door-open"
        },
        {
          "id": "hs_efead1c6t76qh_bd",
          "name": "Guy's Window",
          "kind": "scenery",
          "rect": {
            "x": 81,
            "y": 48,
            "w": 6,
            "h": 14
          },
          "requiredItemId": "item_efead1c6fyagj_bd",
          "lockedText": "The green shutters are closed, but the wall is humming. That's Guy's room. You need something small to throw at them. Not a rock. Something that goes plink.",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_efead1c690pff_bd",
          "hiddenByFlag": "door-open",
          "setsFlags": [
            "door-open"
          ]
        },
        {
          "id": "hs_efead1c6v6x8f_bd",
          "name": "Guy's Window",
          "kind": "scenery",
          "rect": {
            "x": 81,
            "y": 48,
            "w": 6,
            "h": 14
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "You wave at the window. Nobody waves back. The door's open, go in.",
          "consumesRequiredItem": false,
          "requiresFlag": "door-open"
        },
        {
          "id": "hs_efead1c6mix90_bd",
          "name": "Rolling Shutter",
          "kind": "scenery",
          "rect": {
            "x": 53,
            "y": 45,
            "w": 16.5,
            "h": 25
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c60vpiw_bd",
          "name": "Wael",
          "kind": "npc",
          "rect": {
            "x": 26,
            "y": 46,
            "w": 7,
            "h": 28
          },
          "requiredItemId": "item_efead1c6sobh1_bd",
          "lockedText": "Wael, mouth full: \"I'm coming, I'm coming. It's just... I can't listen to anything properly without my headphones. I lost them somewhere. Massive loss. Massive.\"",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_efead1c6fdoxe_bd",
          "requiresFlag": "nadim-left",
          "hiddenByFlag": "wael-back",
          "setsFlags": [
            "wael-back"
          ]
        },
        {
          "id": "hs_efead1c6cy4tw_bd",
          "name": "Get Servees",
          "kind": "exit",
          "rect": {
            "x": 0,
            "y": 82,
            "w": 100,
            "h": 18
          },
          "targetRoomId": "room_efead1c642zkm_bd",
          "consumesRequiredItem": false,
          "setsFlags": [
            "from-bliss"
          ]
        }
      ]
    },
    {
      "id": "room_efead1c6ljecr_bd",
      "name": "The Garden",
      "image": "assets/room-the_garden.jpg",
      "imageChangingHotspotIds": [
        "hs_efead1c64b0rh_bd"
      ],
      "pickupImages": [
        {
          "takenHotspotIds": [
            "hs_efead1c64b0rh_bd"
          ],
          "image": "assets/room-the_garden-taken-hs_efead1c64b0rh_bd.jpg"
        }
      ],
      "entryMode": "custom",
      "entryText": "The garden: lemon tree, laundry, bougainvillea, and the hoop bolted straight onto the wall. The back of the building waits up a few steps.",
      "hotspots": [
        {
          "id": "hs_efead1c6l4tpv_bd",
          "name": "Corridor to Bliss Street",
          "kind": "exit",
          "rect": {
            "x": 16.5,
            "y": 38,
            "w": 7,
            "h": 17
          },
          "targetRoomId": "room_efead1c6oayhb_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6jymb4_bd",
          "name": "Back Doorway",
          "kind": "exit",
          "rect": {
            "x": 38,
            "y": 30,
            "w": 7.5,
            "h": 33
          },
          "targetRoomId": "room_efead1c6xfh7c_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6dxwgh_bd",
          "name": "Hoop",
          "kind": "scenery",
          "rect": {
            "x": 70,
            "y": 20,
            "w": 11,
            "h": 18
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6oufc5_bd",
          "name": "Basketball",
          "kind": "scenery",
          "rect": {
            "x": 70,
            "y": 62,
            "w": 5,
            "h": 7
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c64b0rh_bd",
          "name": "Wael's Headphones",
          "kind": "item",
          "rect": {
            "x": 80.5,
            "y": 50,
            "w": 8,
            "h": 16
          },
          "grantsItemId": "item_efead1c6sobh1_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6vcskj_bd",
          "name": "Lemon Tree",
          "kind": "scenery",
          "rect": {
            "x": 88,
            "y": 17,
            "w": 12,
            "h": 45
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6f8zxw_bd",
          "name": "Laundry",
          "kind": "scenery",
          "rect": {
            "x": 65,
            "y": 38,
            "w": 7.5,
            "h": 9
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6sj3ds_bd",
          "name": "Bougainvillea",
          "kind": "scenery",
          "rect": {
            "x": 52,
            "y": 23,
            "w": 12,
            "h": 25
          },
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_efead1c6xfh7c_bd",
      "name": "Entrance Hall",
      "image": "assets/room-entrance_hall.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "entryMode": "custom",
      "entryText": "The back entrance: bare bulb, tired mailboxes, stairs up to the flats. On the right, Guy's old door with the snake sticker. Smoke curls out from under it.",
      "hotspots": [
        {
          "id": "hs_efead1c6m8arw_bd",
          "name": "Guy's Door",
          "kind": "exit",
          "rect": {
            "x": 78,
            "y": 10,
            "w": 16,
            "h": 68
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6yskzh_bd",
          "name": "Snake Sticker",
          "kind": "scenery",
          "rect": {
            "x": 85.5,
            "y": 29.5,
            "w": 3,
            "h": 6
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6bnokr_bd",
          "name": "Back Door",
          "kind": "exit",
          "rect": {
            "x": 22.5,
            "y": 32,
            "w": 4.5,
            "h": 32
          },
          "targetRoomId": "room_efead1c6ljecr_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c65b16m_bd",
          "name": "Mailboxes",
          "kind": "scenery",
          "rect": {
            "x": 0,
            "y": 24,
            "w": 19,
            "h": 30
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6tdo09_bd",
          "name": "Stairs Up",
          "kind": "scenery",
          "rect": {
            "x": 35,
            "y": 26,
            "w": 22,
            "h": 42
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The stairs go up to the other flats. Nothing for you up there. You do not go up; Guy's door is right here.",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c6635jq_bd",
          "name": "Bare Bulb",
          "kind": "scenery",
          "rect": {
            "x": 53,
            "y": 6,
            "w": 3.5,
            "h": 7
          },
          "consumesRequiredItem": false
        }
      ]
    },
    {
      "id": "room_efead1c6hf0t0_bd",
      "name": "Guy's Room",
      "image": "assets/room-guy_s_room.jpg",
      "imageChangingHotspotIds": [],
      "pickupImages": [],
      "flagImages": [
        {
          "requiresFlag": "speakers-up",
          "image": "assets/room-guy_s_room-flag-speakers_up.jpg"
        },
        {
          "requiresFlag": "wael-back",
          "image": "assets/room-guy_s_room-flag-wael_back.jpg"
        },
        {
          "requiresFlag": "wael-came",
          "hiddenByFlag": "nadim-left",
          "image": "assets/room-guy_s_room-flag-wael_came.jpg"
        }
      ],
      "entryMode": "custom",
      "entryText": "Guy's room: floor cushions along every wall, flyers on every inch, the TAXI light, the CAUTION sign, the warrior poster. Smoke hangs at head height. This is where the crew lives, basically.",
      "hotspots": [
        {
          "id": "hs_efead1c661vwg_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy, not looking up from his notepad: \"Nobody's here yet. Sit. Pass me the papers from the table, I'll show you something.\"",
          "consumesRequiredItem": false,
          "hiddenByFlag": "rolled"
        },
        {
          "id": "hs_efead1c6gsa46_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"That knock? Wael. He knocks like the Deuxième Bureau. Get the door, yalla.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "rolled",
          "hiddenByFlag": "wael-came"
        },
        {
          "id": "hs_efead1c6a3prn_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c65yb6q_bd",
          "lockedText": "Guy, low: \"He's not leaving with my good cable. Find my sketchbook, it's wedged in the records by the hi-fi. I'll draw him a logo. He'll forget the cable exists. He forgets everything.\"",
          "grantsItemId": "item_efead1c6hr9x3_bd",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_efead1c6x2tqf_bd",
          "requiresFlag": "wael-came",
          "hiddenByFlag": "has-logo",
          "setsFlags": [
            "has-logo"
          ]
        },
        {
          "id": "hs_efead1c656fv6_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"Give him the logo, yalla, before he unplugs the fridge too.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "has-logo",
          "hiddenByFlag": "nadim-sketch"
        },
        {
          "id": "hs_efead1c6x6miq_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"He still wants a cable. Give him the junk wire behind the hi-fi. He won't notice. He doesn't listen to cables, he performs at them.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "nadim-sketch",
          "hiddenByFlag": "nadim-left"
        },
        {
          "id": "hs_efead1c6pptex_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"Now we need Wael. His lighter's still here, so he's coming back. Eventually. He's probably at Kababji. And he's been crying about his headphones all week; last time I saw them they were on the plastic chair in the garden.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "nadim-left",
          "hiddenByFlag": "wael-back"
        },
        {
          "id": "hs_efead1c65hkud_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"Do what the man says. Speakers first. Up, off the floor, pointing at us. He says 'ear height' like it's church.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "wael-back",
          "hiddenByFlag": "speakers-up"
        },
        {
          "id": "hs_efead1c6eho76_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"The good cable. The one we saved from Nadim. Back of the amp. Red to red, ya zalameh.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "speakers-up",
          "hiddenByFlag": "cable-in"
        },
        {
          "id": "hs_efead1c6t1ewu_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"Bass knob. Turn it while Wael does his mouth thing. Stop when he says massive.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "cable-in",
          "hiddenByFlag": "bass-set"
        },
        {
          "id": "hs_efead1c6mreyl_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"Needle's dusty. Not with the lighter, Wael will cry. My bandana's on the green blanket.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "bass-set",
          "hiddenByFlag": "needle-clean"
        },
        {
          "id": "hs_efead1c66wd8c_bd",
          "name": "Guy",
          "kind": "npc",
          "rect": {
            "x": 67,
            "y": 52,
            "w": 14,
            "h": 25
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy: \"What are you waiting for? Drop the needle.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "needle-clean"
        },
        {
          "id": "hs_efead1c6biuua_bd",
          "name": "Nadim",
          "kind": "npc",
          "rect": {
            "x": 33,
            "y": 28,
            "w": 17,
            "h": 50
          },
          "requiredItemId": "item_efead1c6hr9x3_bd",
          "lockedText": "Nadim, not stopping: \"...and the cover has to be dark but also, like, hopeful? A warrior? Guy could do it. Guy could do it in five minutes. Anyway, the cable. I need a cable. Tonight. Guys.\"",
          "consumesRequiredItem": true,
          "requiresFlag": "wael-came",
          "hiddenByFlag": "nadim-sketch",
          "setsFlags": [
            "nadim-sketch"
          ]
        },
        {
          "id": "hs_efead1c6td8vx_bd",
          "name": "Nadim",
          "kind": "npc",
          "rect": {
            "x": 33,
            "y": 28,
            "w": 17,
            "h": 50
          },
          "requiredItemId": "item_efead1c6k12sp_bd",
          "lockedText": "Nadim: \"This logo. THIS logo. T-shirts. Stickers. A banner. Okay, I just need a cable and I'm gone. Any cable. This one's fine. Unless you have another one? Do you have another one?\"",
          "grantsItemId": "item_efead1c6gha69_bd",
          "consumesRequiredItem": true,
          "cutsceneId": "cutscene_efead1c6h1kbh_bd",
          "requiresFlag": "nadim-sketch",
          "hiddenByFlag": "nadim-left",
          "setsFlags": [
            "nadim-left"
          ]
        },
        {
          "id": "hs_efead1c6wpc8i_bd",
          "name": "Wael",
          "kind": "npc",
          "rect": {
            "x": 32,
            "y": 32,
            "w": 11,
            "h": 48
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Wael, very seriously: \"Speakers. Cable. Bass. Needle. In that order. This is not a guitar amp, habibi. Weight. The drums need weight.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "wael-back"
        },
        {
          "id": "hs_efead1c624y3a_bd",
          "name": "Speakers",
          "kind": "scenery",
          "rect": {
            "x": 27,
            "y": 50,
            "w": 5,
            "h": 19
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "You nudge a speaker. Without Wael here to say where, you'd just be moving furniture.",
          "consumesRequiredItem": false,
          "hiddenByFlag": "wael-back"
        },
        {
          "id": "hs_efead1c6kb052_bd",
          "name": "Speakers",
          "kind": "exit",
          "rect": {
            "x": 27,
            "y": 50,
            "w": 5,
            "h": 19
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c62lxd4_bd",
          "requiresFlag": "wael-back",
          "hiddenByFlag": "speakers-up",
          "setsFlags": [
            "speakers-up"
          ]
        },
        {
          "id": "hs_efead1c6cxrl8_bd",
          "name": "Speakers",
          "kind": "scenery",
          "rect": {
            "x": 27,
            "y": 50,
            "w": 5,
            "h": 19
          },
          "consumesRequiredItem": false,
          "requiresFlag": "speakers-up"
        },
        {
          "id": "hs_efead1c6jrkyz_bd",
          "name": "Amp",
          "kind": "scenery",
          "rect": {
            "x": 21,
            "y": 55,
            "w": 6,
            "h": 13
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "You reach for the volume. Guy, without looking: \"Touch my amp and die.\"",
          "consumesRequiredItem": false,
          "hiddenByFlag": "wael-came"
        },
        {
          "id": "hs_efead1c61l3qj_bd",
          "name": "Amp",
          "kind": "scenery",
          "rect": {
            "x": 21,
            "y": 55,
            "w": 6,
            "h": 13
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The amp's speaker terminals sit bare where Nadim yanked the good cable. And Wael's rule stands: nothing gets plugged in until the speakers are up.",
          "consumesRequiredItem": false,
          "requiresFlag": "wael-came",
          "hiddenByFlag": "speakers-up"
        },
        {
          "id": "hs_efead1c67db44_bd",
          "name": "Amp",
          "kind": "scenery",
          "rect": {
            "x": 21,
            "y": 55,
            "w": 6,
            "h": 13
          },
          "requiredItemId": "item_efead1c6gha69_bd",
          "lockedText": "Bare terminals on the back of the amp, waiting for the good cable.",
          "consumesRequiredItem": true,
          "requiresFlag": "speakers-up",
          "hiddenByFlag": "cable-in",
          "setsFlags": [
            "cable-in"
          ]
        },
        {
          "id": "hs_efead1c6i7acm_bd",
          "name": "Bass Knob",
          "kind": "exit",
          "rect": {
            "x": 21,
            "y": 55,
            "w": 6,
            "h": 13
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c6mwwvr_bd",
          "requiresFlag": "cable-in",
          "hiddenByFlag": "bass-set",
          "setsFlags": [
            "bass-set"
          ]
        },
        {
          "id": "hs_efead1c65i28k_bd",
          "name": "Amp",
          "kind": "scenery",
          "rect": {
            "x": 21,
            "y": 55,
            "w": 6,
            "h": 13
          },
          "consumesRequiredItem": false,
          "requiresFlag": "bass-set"
        },
        {
          "id": "hs_efead1c6j8lwm_bd",
          "name": "Turntable",
          "kind": "scenery",
          "rect": {
            "x": 14,
            "y": 59,
            "w": 7,
            "h": 9
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "The turntable spins, empty. Nothing to play yet.",
          "consumesRequiredItem": false,
          "hiddenByFlag": "wael-came"
        },
        {
          "id": "hs_efead1c66xor0_bd",
          "name": "Turntable",
          "kind": "scenery",
          "rect": {
            "x": 14,
            "y": 59,
            "w": 7,
            "h": 9
          },
          "requiredItemId": "item_efead1c6f4lp3_bd",
          "lockedText": "Guy slaps your hand away from the tonearm: \"Not on this setup. Wael will kill us both, and then Mazin will kill Wael.\"",
          "consumesRequiredItem": false,
          "requiresFlag": "wael-came",
          "hiddenByFlag": "bass-set"
        },
        {
          "id": "hs_efead1c6m7vwr_bd",
          "name": "Turntable",
          "kind": "scenery",
          "rect": {
            "x": 14,
            "y": 59,
            "w": 7,
            "h": 9
          },
          "requiredItemId": "item_efead1c69x7o4_bd",
          "lockedText": "Wael grabs your wrist: \"The needle's dusty. And no, NOT with the lighter. Are you crazy? Something soft. Cloth.\"",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c62qzqz_bd",
          "requiresFlag": "bass-set",
          "hiddenByFlag": "needle-clean",
          "setsFlags": [
            "needle-clean"
          ]
        },
        {
          "id": "hs_efead1c6m7koe_bd",
          "name": "Drop the Needle",
          "kind": "exit",
          "rect": {
            "x": 14,
            "y": 59,
            "w": 7,
            "h": 9
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c60ac28_bd",
          "requiresFlag": "needle-clean"
        },
        {
          "id": "hs_efead1c6fzmb8_bd",
          "name": "Guy's Sketchbook",
          "kind": "item",
          "rect": {
            "x": 15,
            "y": 69,
            "w": 13,
            "h": 9
          },
          "grantsItemId": "item_efead1c65yb6q_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7u8zxu_bd",
          "name": "Tangled Speaker Wire",
          "kind": "item",
          "rect": {
            "x": 31.5,
            "y": 63,
            "w": 4.5,
            "h": 13
          },
          "grantsItemId": "item_efead1c6k12sp_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c785fk7_bd",
          "name": "Guy's Bandana",
          "kind": "item",
          "rect": {
            "x": 77.5,
            "y": 77,
            "w": 7,
            "h": 8
          },
          "grantsItemId": "item_efead1c69x7o4_bd",
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7i7gc3_bd",
          "name": "Rolling Papers",
          "kind": "exit",
          "rect": {
            "x": 43,
            "y": 79,
            "w": 10,
            "h": 7
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c63tx9a_bd",
          "hiddenByFlag": "rolled",
          "setsFlags": [
            "rolled"
          ]
        },
        {
          "id": "hs_efead1c7o7k4j_bd",
          "name": "Ashtray",
          "kind": "scenery",
          "rect": {
            "x": 43,
            "y": 79,
            "w": 10,
            "h": 7
          },
          "consumesRequiredItem": false,
          "requiresFlag": "rolled",
          "hiddenByFlag": "wael-came"
        },
        {
          "id": "hs_efead1c7ugsvh_bd",
          "name": "Wael's Lighter",
          "kind": "scenery",
          "rect": {
            "x": 43,
            "y": 79,
            "w": 10,
            "h": 7
          },
          "consumesRequiredItem": false,
          "requiresFlag": "wael-came",
          "hiddenByFlag": "wael-back"
        },
        {
          "id": "hs_efead1c7roppa_bd",
          "name": "Ashtray",
          "kind": "scenery",
          "rect": {
            "x": 43,
            "y": 79,
            "w": 10,
            "h": 7
          },
          "consumesRequiredItem": false,
          "requiresFlag": "wael-back"
        },
        {
          "id": "hs_efead1c7ntrd7_bd",
          "name": "The Record",
          "kind": "scenery",
          "rect": {
            "x": 55,
            "y": 78,
            "w": 16,
            "h": 12
          },
          "consumesRequiredItem": false,
          "requiresFlag": "wael-came"
        },
        {
          "id": "hs_efead1c7kyxgn_bd",
          "name": "Coffee Table",
          "kind": "scenery",
          "rect": {
            "x": 55,
            "y": 78,
            "w": 16,
            "h": 12
          },
          "consumesRequiredItem": false,
          "hiddenByFlag": "wael-came"
        },
        {
          "id": "hs_efead1c7lt4v6_bd",
          "name": "Warrior Poster",
          "kind": "scenery",
          "rect": {
            "x": 80,
            "y": 1,
            "w": 8.5,
            "h": 32
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7gxk7m_bd",
          "name": "CAUTION Sign",
          "kind": "scenery",
          "rect": {
            "x": 59.5,
            "y": 4,
            "w": 10.5,
            "h": 17
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c708uao_bd",
          "name": "TAXI Light",
          "kind": "scenery",
          "rect": {
            "x": 72.5,
            "y": 39,
            "w": 7,
            "h": 6
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7vcybv_bd",
          "name": "LIBAN Poster",
          "kind": "scenery",
          "rect": {
            "x": 62.5,
            "y": 21,
            "w": 10,
            "h": 17
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c74t7iw_bd",
          "name": "KILL THE DJ Sticker",
          "kind": "scenery",
          "rect": {
            "x": 89,
            "y": 47,
            "w": 6,
            "h": 11
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7u6glj_bd",
          "name": "Floor Cushions",
          "kind": "scenery",
          "rect": {
            "x": 40,
            "y": 64,
            "w": 26,
            "h": 10
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7i5inm_bd",
          "name": "Window",
          "kind": "scenery",
          "rect": {
            "x": 0,
            "y": 2,
            "w": 13,
            "h": 62
          },
          "consumesRequiredItem": false
        },
        {
          "id": "hs_efead1c7npfo9_bd",
          "name": "Door to the Hall",
          "kind": "exit",
          "rect": {
            "x": 20,
            "y": 94,
            "w": 60,
            "h": 6
          },
          "targetRoomId": "room_efead1c6xfh7c_bd",
          "consumesRequiredItem": false,
          "hiddenByFlag": "rolled"
        },
        {
          "id": "hs_efead1c7igaq2_bd",
          "name": "Door to the Hall",
          "kind": "exit",
          "rect": {
            "x": 20,
            "y": 94,
            "w": 60,
            "h": 6
          },
          "targetRoomId": "room_efead1c6xfh7c_bd",
          "consumesRequiredItem": false,
          "requiresFlag": "wael-came"
        },
        {
          "id": "hs_efead1c7uz5jw_bd",
          "name": "Someone's Knocking",
          "kind": "exit",
          "rect": {
            "x": 20,
            "y": 94,
            "w": 60,
            "h": 6
          },
          "targetRoomId": "room_efead1c6hf0t0_bd",
          "consumesRequiredItem": false,
          "cutsceneId": "cutscene_efead1c6tpn2j_bd",
          "requiresFlag": "rolled",
          "hiddenByFlag": "wael-came",
          "setsFlags": [
            "wael-came"
          ]
        }
      ]
    }
  ],
  "items": [
    {
      "id": "item_efead1c6uhipf_bd",
      "name": "Lira Notes",
      "icon": "💵",
      "description": "Five thousand Lebanese lira, folded small. Teta pressed them into your hand at the door: 'Eat something, habibi. You're all bones.'"
    },
    {
      "id": "item_efead1c65yb6q_bd",
      "name": "Guy's Sketchbook",
      "icon": "📓",
      "description": "Guy's big black sketchbook, the one with the good paper. Half the pages are snakes. The other half are better snakes."
    },
    {
      "id": "item_efead1c6k12sp_bd",
      "name": "Tangled Speaker Wire",
      "icon": "🪢",
      "description": "A hopeless nest of thin, cheap speaker wire from behind Guy's hi-fi. It looks like a cable. To someone who doesn't listen to cables, it IS a cable."
    },
    {
      "id": "item_efead1c69x7o4_bd",
      "name": "Guy's Bandana",
      "icon": "🧣",
      "description": "A soft red bandana. Clean, as far as anyone knows. Softer than a lighter, which matters more than you'd think."
    },
    {
      "id": "item_efead1c6fyagj_bd",
      "name": "250-Lira Coin",
      "icon": "🪙",
      "description": "Your change from Kababji: one fat 250-lira coin. Too heavy to lose, too small to buy anything. Perfect for throwing at shutters."
    },
    {
      "id": "item_efead1c6sobh1_bd",
      "name": "Wael's Headphones",
      "icon": "🎧",
      "description": "Chunky silver-and-black DJ headphones with a coiled cord. Wael's. He's been mourning them all week like a dead pet."
    },
    {
      "id": "item_efead1c6hr9x3_bd",
      "name": "Overbliss Logo",
      "icon": "🖍️",
      "description": "Guy's drawing, torn out of the sketchbook: OVERBLISS in thorny metal letters, a long-haired warrior with a blade underneath. Honestly? It rules."
    },
    {
      "id": "item_efead1c6gha69_bd",
      "name": "Good Speaker Cable",
      "icon": "🔌",
      "description": "Guy's good speaker cable: thick, black, gold tips. Rescued from Nadim's shoulder. The drums will need this."
    },
    {
      "id": "item_efead1c6f4lp3_bd",
      "name": "Later",
      "icon": "⏳",
      "description": "Not today."
    }
  ],
  "initialInventory": [
    "item_efead1c6uhipf_bd"
  ],
  "cutscenes": [
    {
      "id": "cutscene_efead1c6jsqyh_bd",
      "name": "Servees to Bliss",
      "frames": [
        {
          "image": "assets/cutscene-servees_to_bliss-1.jpg",
          "text": "A servees. Old cream Mercedes, red plates, already packed like a jar of makdous. You stick your arm out and yell the only word that matters: \"BLISS?\"",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-servees_to_bliss-2.jpg",
          "text": "The driver jerks his chin: yalla. You squeeze into the back between a sleeping man in a suit and a lady with a bag of oranges. Fairuz on the tape deck. Everybody's elbow is in your ribs. Nobody says a word.",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-servees_to_bliss-3.jpg",
          "text": "\"Bliss.\" You pass a thousand lira forward. He gives you nothing back but a nod, and the Mercedes coughs off down the street. You're standing right at Guy's white door.",
          "durationMs": 6000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6jkjqh_bd",
      "name": "Servees on Bliss",
      "frames": [
        {
          "image": "assets/cutscene-servees_to_bliss-3.jpg",
          "text": "A servees slows down. The driver looks at you. You look at him. You're already on Bliss, ya zalameh. He drives off, shaking his head.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c690pff_bd",
      "name": "Guy at the window",
      "frames": [
        {
          "image": "assets/cutscene-guy_at_the_window-1.jpg",
          "text": "Plink. The coin bounces off the green shutter. It creaks open and Guy leans out, marker cap in his teeth: \"Intercom's dead, man. Since the winter. Come in, come in.\" He keeps the coin. Of course he keeps the coin.",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-servees_to_bliss-3.jpg",
          "text": "BZZZT. The white door clicks open.",
          "durationMs": 3000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c63tx9a_bd",
      "name": "Two papers",
      "frames": [
        {
          "image": "assets/cutscene-two_papers-1.jpg",
          "text": "Guy takes two papers and lays one on top of the other. Not licked. Not stuck. Just... stacked.",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-two_papers-1.jpg",
          "text": "Guy: \"You just have to put them on top of each other and roll it before they realize they're not stuck.\"",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-two_papers-3.jpg",
          "text": "One flick of the thumbs and it's done. Perfect cone. Yours slides apart and dumps itself on the rug. Guy: \"Tayyeb. Practice.\"",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-two_papers-3.jpg",
          "text": "Then: a knock on the door. Three short, one long. Guy doesn't look up. \"That's Wael. Get it.\"",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6tpn2j_bd",
      "name": "Wael and the record",
      "frames": [
        {
          "image": "assets/cutscene-wael_and_the_record-1.jpg",
          "text": "Wael, in the doorway, holding a record up like he pulled it out of a pyramid: \"Ed Rush and Optical. Virus Recordings. Massive. MASSIVE.\"",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-wael_and_the_record-2.jpg",
          "text": "\"It's Mazin's. He brought it from the UK, and it goes back to him tomorrow, so it's today or never.\" He looks at Guy's speakers, sitting on the floor like two sad fridges. \"But not on this. The drums need weight. This system has no weight.\"",
          "durationMs": 8000
        },
        {
          "image": "assets/cutscene-wael_and_the_record-3.jpg",
          "text": "A voice in the hall, already mid-sentence: Nadim. Wael is suddenly very interested in leaving. \"Back in a bit.\" He slips out past Nadim with a two-finger wave. Wael is never back in a bit.",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-wael_and_the_record-4.jpg",
          "text": "Nadim: \"Guys. GUYS. Overbliss is recording tonight, the CD, a thousand copies, I'm doing the cover, we'll sell them at school, at the Mayflower, everywhere. I need a speaker cable. This one's good, right? Borrowing it.\" It's already over his shoulder.",
          "durationMs": 8000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6x2tqf_bd",
      "name": "Guy draws the logo",
      "frames": [
        {
          "image": "assets/cutscene-guy_draws_the_logo-1.jpg",
          "text": "Guy flips to a clean page, glances up at the warrior poster, and four minutes later Overbliss has a logo with thorns on it and a guy with a sword. Nadim makes a sound only dogs can hear.",
          "durationMs": 7000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6h1kbh_bd",
      "name": "Nadim leaves",
      "frames": [
        {
          "image": "assets/cutscene-nadim_leaves-1.jpg",
          "text": "Nadim swaps Guy's good cable for the junk wire without looking at either. \"This is going on the cover. A thousand CDs. Guy, you're getting a percentage. A small percentage.\" He's gone, still talking, all the way down the hall.",
          "durationMs": 8000
        },
        {
          "image": "assets/room-guy_s_room.jpg",
          "text": "The good cable is yours. The record is here. Wael is not. Guy: \"His lighter's still on the table. He always comes back for his lighter. Eventually.\"",
          "durationMs": 6000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6fdoxe_bd",
      "name": "Wael comes back",
      "frames": [
        {
          "image": "assets/cutscene-wael_comes_back-1.jpg",
          "text": "Wael puts the headphones on and closes his eyes. \"My headphones. Habibi. Where were they? Massive.\" He finishes the sandwich in one bite. \"Yalla. Let's make the drums hit.\"",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-servees_to_bliss-3.jpg",
          "text": "You walk back through the white door together. Wael is already explaining bass frequencies to you like you asked.",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c62lxd4_bd",
      "name": "Speakers up",
      "frames": [
        {
          "image": "assets/cutscene-speakers_up-1.jpg",
          "text": "Off the floor, onto two stacks of record crates, angled at the cushions. Wael measures with his thumb like a painter. \"Ear height. Sitting ear height. This is how you listen. Not like your metal people, standing in a garage.\"",
          "durationMs": 8000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c6mwwvr_bd",
      "name": "The bass knob",
      "frames": [
        {
          "image": "assets/cutscene-the_bass_knob-1.jpg",
          "text": "Wael closes his eyes and mouths the bassline: \"dmmm... dm-dm... dmmmm.\" You turn the bass up. \"More.\"",
          "durationMs": 5000
        },
        {
          "image": "assets/cutscene-the_bass_knob-1.jpg",
          "text": "Too much. The window buzzes in its frame. Somewhere in the building, a neighbour bangs on a pipe. Guy winces. Wael, eyes still shut: \"Less.\"",
          "durationMs": 6000
        },
        {
          "image": "assets/cutscene-the_bass_knob-1.jpg",
          "text": "A hair back. The kick lands somewhere under your ribs. Wael opens his eyes. \"There. Massive.\"",
          "durationMs": 5000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c62qzqz_bd",
      "name": "Clean needle",
      "frames": [
        {
          "image": "assets/cutscene-clean_needle-1.jpg",
          "text": "Bandana, not lighter. One careful swipe. Wael exhales like a surgeon after a long night. \"Now we're talking.\"",
          "durationMs": 6000
        }
      ],
      "endsGame": false,
      "endingHeading": "",
      "endingText": ""
    },
    {
      "id": "cutscene_efead1c60ac28_bd",
      "name": "The listen",
      "frames": [
        {
          "image": "assets/cutscene-the_listen-1.jpg",
          "text": "Late afternoon. Nadim's back (the drummer got grounded, the session's tomorrow). Guy rolls one for the occasion. Everybody on the cushions. Wael nods at you: \"You do it.\"",
          "durationMs": 7000
        },
        {
          "image": "assets/cutscene-the_listen-2.jpg",
          "text": "You drop the needle.",
          "durationMs": 4000
        },
        {
          "image": "assets/cutscene-the_listen-1.jpg",
          "text": "The bass comes in first and Wael mouths it, eyes shut, one beat ahead of the record. Then the drums. Not a drum machine. Real drums, chopped up and heavy, falling down the stairs in perfect time.",
          "durationMs": 8000
        },
        {
          "image": "assets/cutscene-the_listen-4.jpg",
          "text": "Where are the guitars? You don't ask. The kick hits you right in the chest and something in there quietly goes: ...oh.",
          "durationMs": 8000
        },
        {
          "image": "assets/cutscene-the_listen-5.jpg",
          "text": "The record played through twice. Nobody talked. Nobody needed to.",
          "durationMs": 6000
        }
      ],
      "endsGame": true,
      "endingHeading": "...oh.",
      "endingText": "Round 1: One Night With the Record.\n\nThe metal kid walked home down Bliss with the bassline stuck in his mouth.\n\nWael gave the record back to Mazin the next day. Probably."
    }
  ],
  "title": {
    "image": "assets/room-bliss_street.jpg",
    "heading": "Bliss Days",
    "subheading": "Round 1: One Night With the Record"
  },
  "intro": {
    "enabled": true,
    "text": "Beirut, 1998.\n\nMorning. You leave Teta's with a full stomach and five thousand lira. You call Guy from the phone in her hallway.\n\nHe picks up on the first ring. Music in the background.\n\n\"Come.\""
  },
  "synthScore": {
    "preset": "off",
    "volume": 0.32
  },
  "responses": {
    "entry": {},
    "verbs": {
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/look": "Teta’s building is cream stone, long balconies stacked like shelves; her geraniums make the third floor impossible to miss. She’s still watching you from above, habibi—apparently your exit has become tonight’s entertainment.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/use": "You give Teta’s building a try, but it’s a building, habibi—not exactly portable. Third-floor geraniums bob above you as Teta keeps watch from the balcony. Yalla, best not make her wait for the rest of the show.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/talk": "Teta’s building offers no comment; buildings are famously bad at small talk. Three floors up, her geraniums sit under the steady supervision of Teta, who watched you leave and clearly hasn’t decided you’re out of sight yet.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/kick": "Your kick lands on the cream stone with a sad little thud; the building, having survived decades of teenagers, declines to be impressed. Third-floor geraniums tremble as Teta watches you from the balcony. Yalla, you’re still very much in sight.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/look": "The dekkaneh’s shutter is raised just enough for business, with Pepsi bottles sweating in their crates and morning papers stacked on a stool beneath a faded Kodak sign. From somewhere inside, the owner calls, “Gus, I knew you when you were in diapers, ya zalameh”—a fact he brings up often, and with no supporting evidence.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/use": "You lift one of the Pepsi crates and get exactly as far as making the bottles clink. From inside, the dekkaneh owner calls, “Gus, I knew you when you were in diapers—put it back, habibi.” The Kodak sign offers no support.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/talk": "The dekkaneh offers you glass Pepsi bottles, yesterday’s news, and a faded Kodak sign. From somewhere inside, the owner calls, “Gus, I knew you when you were in diapers, ya zalameh!” Some things are harder to outgrow than others.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/kick": "Your kick nudges a Pepsi crate; the bottles clink like a tiny, very local drum fill. From inside, the owner calls, “Easy, Gus! I knew you when you were in diapers, ya zalameh.” He knows this because he mentions it every time.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/look": "The white Peugeot 504 sits half on the sidewalk, parked with the calm confidence of something that has outlived several owners and one unfortunate attempt at parallel parking. Its paint has gone the colour of old teeth, but the doors still shut with a proper clunk—indestructible, and probably older than you, ya zalameh.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/use": "You give the Peugeot 504 a hopeful tug. It sits half on the sidewalk, white, unbothered, and probably older than your entire metal collection; yalla, it’s scenery, not transport.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/talk": "The Peugeot 504 remains parked half on the sidewalk, sturdy as a family secret. You wait for it to say something; it offers only the quiet dignity of a car older than you, ya zalameh.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/kick": "Your boot thunks against the Peugeot’s door. The 504 doesn’t move; it’s been absorbing bad decisions since before you were born, ya zalameh.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/look": "You lean in to inspect the old ficus, its roots lifting the sidewalk like the tree’s been quietly winning an argument with the pavement for years. Between a dozen carved initials, your METALLICA sits crooked and deep—less logo, more emergency dental work, but it’s yours.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/use": "You run a thumb over METALLICA, carved crookedly into the old ficus among a hundred other declarations. The roots have won their argument with the sidewalk; the tree, unlike your lettering, looks pretty good.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/talk": "The ficus offers no opinion on Metallica, badly carved or otherwise. Its roots keep lifting the sidewalk, which is a more convincing statement than most album reviews.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/kick": "You kick the ficus. It barely notices; your METALLICA carving, however, seems to wobble with disappointment. A couple of leaves drift down like tiny, green hecklers.",
      "room_efead1c6pj8ei_bd/hs_efead1c6v04rc_bd/look": "You’re on Bliss Street, where Kababji smoke, student chatter, and the occasional impatient horn all seem to share the same patch of air. A servees could appear any second: an old Mercedes with red plates, already full, whose driver will hear your destination and decide whether you’re worth the squeeze.",
      "room_efead1c642zkm_bd/hs_efead1c6n7td4_bd/look": "Bliss Street runs past the AUB campus in a jumble of students, servees, and shawarma smells that make your stomach vote before you do. Guy’s white door waits just off the noise; behind it, the crew, the speakers, and—if Wael hasn’t vanished—one very important record.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/look": "You look down Sadat toward Maghfar Hbeish, its plain frontage sitting there with the quiet confidence of a place nobody visits for the view. You’re lucky enough to see it from the outside, habibi; best keep walking and let the evening stay about records.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/look": "You look closely at Nadim’s house in Clemenceau: a modest doorway, a bell that’s been pressed by half the OwwleStars, and the promise of excellent fatteh. Somewhere inside, his mother is probably ready to ask how your grades are, ya zalameh.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/look": "From here, the Corniche curls around Ras Beirut, Manara lighthouse at one end and the Pigeon Rocks at the other, like the neighborhood’s taking the long way home. Joggers pass fishermen, pass guys selling corn; everybody has somewhere to be, apparently, except the corn.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/use": "You lean on the Corniche rail and watch joggers loop past, fishermen wait out the afternoon, and a corn seller do excellent business with people who should know better. The Manara lighthouse and Pigeon Rocks frame the view like the city’s showing off a little. You can’t pick up the Corniche, ya zalameh.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/talk": "The Corniche has no dialogue option, habibi. It just loops from the Manara lighthouse to the Pigeon Rocks while joggers puff past, fishermen wait patiently, and a corn seller conducts business with the sea.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/kick": "You give the Corniche a kick. It keeps wrapping around Ras Beirut, utterly unmoved; a jogger goes by, a fisherman checks his line, and the corn seller guards his cart like you’ve challenged him to a duel. Yalla, maybe try something with a hinge.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/look": "The Kababji guy shaves taouk from the spit with the calm precision of a sculptor, sleeves rolled to the elbow. “Habibi,” he says, without looking up—he knows your order, but the money still goes on the counter first.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/use": "You reach for the taouk, but the Kababji guy slides his palm across the counter: money first, habibi. He shaves the spit in one neat curl, already knowing your order; apparently your sandwich reputation precedes your guitar solos.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/talk": "“Taouk, habibi? Money first, then love.” He shaves another perfect curl of chicken from the spit, already reaching for the bread.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/kick": "Your kick stops short of the Kababji counter, mostly because the taouk smells too good to risk a limp. The man shaves the spit with sculptor’s focus and calls you habibi; money first, then love, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/look": "The Kababji guy gives you the look of a man who has already fed you and is not opening a second tab. From behind the counter he says, “If you’re asking about next door, intercom’s been dead since the winter storm. Guy’s friends throw something at the shutters. Yalla, habibi, let me work.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/use": "You reach for the Kababji counter, but the man points at your already-wrapped sandwich. “You ate, ya zalameh.” Next door, Guy’s intercom has been dead since the winter storm; his friends just throw something at the shutters.",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/talk": "The Kababji guy wipes his hands on a towel and nods at you. “The intercom next door? Dead since the winter storm, ya zalameh. Guy’s friends throw something at the shutters. Usually works better than technology.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/kick": "Your foot taps the Kababji counter with a sad little thunk. The guy gives you the look of someone who has already fed you and says, “Intercom next door’s been dead since the winter storm. Guy’s friends throw something at his shutters, ya zalameh.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/look": "The Kababji guy works the counter with the calm focus of someone who’s seen Wael order a third sandwich and still pretend he’s just browsing. “More garlic?” he asks, while Wael studies the menu like it might explain where he’s supposed to be.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/use": "You reach for the sandwich; the Kababji guy slides it just out of range. “This is Wael’s third,” he says, nodding toward the counter, where Wael has been standing for an hour with his headphones on. Wael doesn’t look up. The Kababji guy grins. “He’s avoiding something, habibi.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/talk": "“Another one, ya zalameh?” the Kababji guy asks, eyeing Wael’s third sandwich. Wael studies it like the answer might be hiding in the pickles.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/kick": "Your kick lands against the Kababji counter with a hollow thunk. The guy pauses mid-wrap; Wael, still on sandwich number three, watches you like you’ve just improved his evening. “Massive,” he says. Yalla, your foot’s fine. The counter’s seen worse.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/look": "Guy’s white metal door sits between Kababji and the shuttered shop, dented like it’s heard every argument about drum machines and survived. It’s locked, naturally; Guy buzzes people in from his room, while the Kababji man’s voice drifts out with the smell of toasted bread.",
      "room_efead1c6oayhb_bd/hs_efead1c6gb5j0_bd/look": "The white door is already buzzed open, resting just wide enough to show a strip of corridor beyond. Past that: the garden, and the back of the building—an exit with no dramatic music, which is probably for the best.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/look": "You lean toward the intercom beside Guy’s door. Its button is yellowed, its little speaker grille packed with dust, and the whole thing has the quiet confidence of a machine that stopped working months ago and has no plans to explain itself. The winter storm, apparently, won.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/use": "You press the intercom. It gives you the silence of a band between soundcheck and the drummer finding his sticks—dead since the winter storm. Wael once got Guy’s attention with a coin at the shutters; subtlety, apparently, is not the crew’s main instrument.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/talk": "You press the intercom. It answers with the deep, expressive silence of something that died in the winter storm and has made peace with it. Wael got through last time with a coin and Guy’s shutters; technology, khalas.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/kick": "Your boot gives the intercom a firm kick. It answers with the same silence it’s been giving since the winter storm—solid work, really; even the button has stopped pretending.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/look": "You lean toward the intercom: yellowed plastic, one stubborn button, and a grille that looks like it’s heard every delivery order on Bliss Street. Still dead, naturally—but Guy already buzzed you in from his room, so this little monument to not helping can relax.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/use": "You press the intercom button. Nothing happens; Guy already buzzed you in from his room, and the little box is now just standing there, committed to the bit.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/talk": "You lean toward the intercom and give it a hopeful press. Nothing—not even the courtesy of a crackle; Guy already buzzed you in from his room, khalas.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/kick": "Your boot meets the intercom with a hollow clack. Still dead, habibi; Guy already buzzed you in, so now you’ve just kicked a box that has done absolutely nothing wrong.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/look": "You lean toward the green shutters, closed tight; the bass gives the wall a quiet little thump against your knuckles. Guy’s room is right there, but you need something small to get his attention—nothing heavy, ya zalameh. Those shutters have seen more Saturdays than you have.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/use": "You give the closed green shutters a hopeful tug. They don’t open, habibi; the bass thumps through the wall, and Guy’s room carries on without you. You’d need something small to get his attention—not a rock, ya zalameh, those shutters have seniority.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/talk": "The green shutters stay closed. Bass presses softly through the wall, but the window offers no comment—apparently it’s waiting for you to find something smaller than a rock, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/kick": "Your boot thumps the wall; the bass answers from inside, unimpressed. The green shutters stay shut—yalla, you need something smaller than a whole leg.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/look": "The shutters stand open over Bliss Street, and the snare keeps escaping into the afternoon like it’s got somewhere to be. You catch a glimpse of Guy’s room beyond the glass: speakers at sitting-ear height, because apparently even music has to mind its manners.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/use": "You lean toward Guy’s open window, but it’s scenery, not a handle—no operating it, habibi. The snare snaps out over Bliss Street, making the passing servees sound briefly under-rehearsed.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/talk": "The window offers no opinion; it’s a window, not Wael. Its shutters stand open, and something with a lot of snare escapes onto Bliss Street.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/kick": "You kick Guy’s open window; the shutters rattle, and the snare-heavy music leaking onto Bliss skips like it’s just been insulted. Inside, someone turns it down a notch. Fair, habibi: the window was only scenery.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/look": "The grey shutter is pulled tight, its slats lined up like a wall of closed eyelids. Nobody on Bliss remembers what the shop sells; after a while, the shutter itself becomes the main attraction.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/use": "You tug the grey shutter. It doesn’t move—not even enough to suggest the shop might sell something—and nobody on Bliss remembers what’s behind it. Some mysteries, ya zalameh, have excellent customer service.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/talk": "You give the grey shutter a hopeful look. It stays down, guarding the mystery of a shop nobody remembers ever seeing open. Yalla, some secrets can wait.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/kick": "Your shoe thumps the grey shutter. It answers with a hollow clang, like the shop is still deciding what it sells. The shutter stays down, khalas.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/look": "Wael leans on the Kababji counter, giving his sandwich the grave attention usually reserved for a clean needle. His black “Music is my life” shirt is doing all the talking today; the headphones are missing, and he wears their absence like a small, private funeral. “Massive,” he says to the sandwich. Then he’s gone before Nadim can pitch him a thousand T-shirts.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/use": "Wael leans on the Kababji counter, guarding his sandwich like it’s a rare pressing. You ask about the headphones; his face briefly becomes a memorial plaque, then he says, “Massive,” and somehow vanishes before Nadim can pitch him anything.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/talk": "“Massive sandwich,” Wael says, leaning on the Kababji counter in his black Music is my life shirt. His headphones are still missing, and he looks like he’s considering disappearing again before Nadim finds him.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/kick": "Your kick cuts through the Bliss Street lunchtime noise; Wael looks up from his sandwich, gives you a solemn nod, and says, “Massive.” Then he slips away so neatly you’re left kicking at the air—his headphones are missing, not his talent for disappearing.",
      "room_efead1c6oayhb_bd/hs_efead1c6cy4tw_bd/look": "Bliss Street keeps moving: students drift past with Kababji sandwiches, horns argue over nothing, and a red-plated Mercedes servees noses through every thirty seconds or so. You lift a hand and yell your destination; if the driver likes the sound of it, yalla, you’re in.",
      "room_efead1c6ljecr_bd/hs_efead1c6l4tpv_bd/look": "The corridor narrows toward the white door, with the muffled room behind you and Bliss Street waiting on the other side. Somewhere out there, a servees is probably leaning on its horn with the confidence of a full orchestra.",
      "room_efead1c6ljecr_bd/hs_efead1c6jymb4_bd/look": "You take a few steps up to the back doorway. Beyond it, Guy’s room waits on the right, speakers set at sitting-ear height and the good cable presumably guarded by ancient ritual. For now, the doorway is just an exit—yalla, no rush.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/look": "The backboard is bolted straight into the concrete wall, with no pole—apparently the garden’s budget went entirely on screws. You’ve played H-O-R-S-E here between records; nobody can shoot, and Nadim still argues every call like there’s a trophy at stake.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/use": "You give the hoop a hopeful tug. It stays bolted to the wall, pole-free and deeply unimpressed; somewhere, Nadim is already arguing that your shot would’ve counted.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/talk": "The hoop stays bolted to the wall, looking like it’s already heard Nadim’s arguments about the rules. You give it a little tap; it offers no ruling, no rebound, not even the courtesy of a squeak.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/kick": "Your kick clips the hoop’s dangling net, which answers with a sad little swish against the wall. Nadim calls it a goal, then argues with himself about the rules.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/look": "The basketball is half-flat, its orange skin gone soft from too many afternoons in the sun. You could take a shot, sure—but the hoop is less forgiving than the bougainvillea, which keeps every miss like a quiet little tax.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/use": "You take a shot. The half-flat ball thumps off the rim and disappears into the bougainvillea, which keeps its usual policy of returning nothing.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/talk": "The half-flat basketball offers no wisdom, only a tired squeak as you bounce it. Your shot sails into the bougainvillea, which accepts the ball with its usual generosity: none.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/kick": "Your kick sends the half-flat basketball wobbling toward the hoop with the confidence of a Pantera solo played through a Kababji napkin. It clanks off the rim and disappears into the bougainvillea, which keeps its usual policy of returning nothing.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/look": "The chunky silver-and-black headphones sit on the white plastic chair, looking a bit too serious for garden furniture. Wael’s, obviously: he’s been mourning them since last week’s H-O-R-S-E game, which is a lot of grief for something that still works.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/kick": "Your kick sends Wael’s chunky headphones skidding off the white plastic chair and thumping onto the floor. Somewhere in the neighborhood, Wael feels a disturbance in the bass.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/look": "The lemon tree leans over the garden wall, heavy with yellow fruit and smelling faintly of clean, sharp citrus. Nobody picks the lemons—that’s the rule. Nobody remembers who made it, which gives it the authority of ancient law, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/use": "You give the lemon tree a hopeful tug. It stays put, heavy with lemons and the quiet authority of a rule nobody remembers making.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/talk": "The lemon tree says nothing, which is fair; it’s a tree, not Nadim pitching the Overbliss CD. Its branches sag with lemons, all safely unpicked by a rule nobody remembers making.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/kick": "You kick the lemon tree; it shivers, and three lemons thump into the dirt like they’ve been waiting for an excuse. Nobody remembers who made the rule, but the whole crew remembers you broke it. Yalla, you’re on lemon duty.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/look": "Two T-shirts hang in the afternoon sun, white and blue, stirring whenever the breeze remembers to show up. The garden smells like lemons and Tide—suspiciously cleaner than anything in Guy’s room, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/use": "You reach for the shirts, but they’re just laundry, not a secret outfit change. The white one flaps in the lemon-and-Tide breeze; the blue one declines to get involved.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/talk": "The two T-shirts sway in the afternoon sun, white and blue, smelling of lemons and Tide. You wait for them to say something profound; they remain laundry. Fair enough, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/kick": "You kick the laundry. The white and blue T-shirts swing on the line, smelling sharply of lemons and Tide; the garden offers no encore, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/look": "The magenta bougainvillea climbs the back wall like it has a personal grudge against the plaster. Three basketballs are lodged in its branches, possibly more; the plant is keeping its own score, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/use": "You give the bougainvillea a tug. It holds firm, magenta and smug, with the quiet authority of something that has already eaten three basketballs.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/talk": "The bougainvillea keeps climbing the back wall, magenta and completely unbothered. Three basketballs have vanished into its branches; your commentary earns no reply, habibi.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/kick": "You kick the bougainvillea. It gives a dignified rustle, drops one dry leaf, and keeps the basketballs it has eaten. Yalla, maybe try something that isn’t a wall.",
      "room_efead1c6xfh7c_bd/hs_efead1c6m8arw_bd/look": "The green paint peels off Guy’s old door in little curls, and a snake sticker keeps watch at eye level. Smoke slips out underneath with the bass line; clearly, the room has started without you. Yalla, knock.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/look": "You lean in toward the little snake sticker. Guy drew it in black pen, then cut it out with borrowed scissors; one edge wanders like the snake changed its mind halfway through. Underneath, in tiny letters: “Snake Probably.” Seems fair.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/use": "You try to peel up the snake sticker, but Guy’s cut the paper so close it’d take a surgeon—or a much smaller snake—to get underneath. It stays on the wall, looking calm and faintly disappointed in you.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/talk": "The snake sticker regards you with the calm authority of something drawn by Guy and cut out with borrowed scissors. It says nothing; probably.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/kick": "Your toe nudges the little snake sticker, which remains stuck to the wall with the calm confidence of something drawn by Guy. It looks like it’s reconsidering its friendship with you, but only probably.",
      "room_efead1c6xfh7c_bd/hs_efead1c6bnokr_bd/look": "The back door opens onto the steps to the garden, where the evening air waits with suspicious patience. You could go down, sure—but Guy’s room is right here, and the record isn’t going to listen to itself, habibi.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/look": "You lean in toward the dented mailboxes. AUB flyers poke out between electricity bills, all of them addressed to people who have mastered the art of not being home. Somewhere, one envelope is probably important; nobody’s brave enough to check.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/use": "You tug one mailbox open; it complains like a snare hit by someone with no rhythm. Inside: AUB flyers, an electricity bill, and absolutely nothing addressed to a fifteen-year-old guitar hero. You leave it for someone with more paperwork and fewer riffs.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/talk": "The mailboxes give you the kind of silence usually reserved for guitar solos nobody asked for. One is stuffed with AUB flyers; another bulges with electricity bills, khalas, a mystery for another day.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/kick": "You kick the mailboxes. They answer with a hollow clang, and three AUB flyers slide deeper into the pile—apparently even the post is trying to avoid you, ya zalameh.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/look": "The stairs climb past a neighbour’s laundry and a bicycle parked like it pays rent. Guy’s room is downstairs, where the important business—records, cables, and everybody forgetting why they came—takes place.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/use": "You give the stairs a hopeful look, but they lead to the other flats: laundry, a bicycle, and neighbours who have not been invited to hear drum and bass. Guy’s room is down here, where the important business—and the record—awaits.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/talk": "The stairs lead up to the other flats, past a neighbour’s laundry and somebody’s bicycle. They have no opinion on the record, habibi; Guy’s room is downstairs.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/kick": "Your boot meets the stairs with a hollow thump; a bicycle bell gives one delicate, accusing *ting* from the landing. Guy’s room is downstairs, habibi. The stairs, like most neighbours, have no interest in your music.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/look": "You look up at the bare bulb, hanging from its wire like it’s been waiting four years for someone to ask if there’s a lampshade. It gives off a patient yellow light; the dust around it has clearly settled in for the long term, ya zalameh.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/use": "You reach for the bare bulb. It swings on its wire, still glowing after four years of dedicated service and absolutely no interest in improving the room.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/talk": "The bare bulb hums faintly, having spent four years perfecting the art of not getting involved. It offers no comment.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/kick": "Your shoe taps the bare bulb; it swings on its wire, still glowing with the stubborn confidence of something that’s been on since 1994. The hallway gets a little disco for free, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/look": "Guy’s bent over his notepad, calmly sketching something that looks either like a snake or a very patient telephone cable. His pale blue “Snake Probably” shirt is doing its best to explain the drawing; the rolling papers sit on the coffee table, close enough for you to stop inspecting and pass them over, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/use": "Guy glances up from his notepad, pencil still moving. “I’m not equipment, habibi. Pass me the papers, though—then we can both pretend you came here with a plan.”",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/talk": "“Pass me the papers, ya zalameh?” Guy keeps drawing on the notepad. “Unless you want to watch me roll one out of pure imagination.”",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/kick": "Your kick lands beside Guy’s cushion, more thunderous than accurate. He looks up from his drawing, perfectly calm. “Nice. Now pass me the papers, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/look": "Guy sits easy among the cables and record sleeves, a fresh spliff tucked behind his ear like a pencil he’s definitely not lending you. At the three short knocks and one long, he glances toward the door. “That’s Wael. Yalla, get it, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/use": "Guy’s fresh spliff rests behind his ear as he nods toward the door. “That’s Wael. Three short, one long—subtle like a drum fill. Yalla, get it?”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/talk": "“Door, ya zalameh. Three short, one long—that’s Wael. I’d get it, but I’m busy not being in a hurry.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/kick": "You kick the door open with more confidence than the hinges deserve. Guy glances up, fresh spliff still tucked behind his ear. “Yalla, Gus. Wael’s knock is three short, one long—not one boot.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/look": "Guy watches Nadim loop the good speaker cable around his neck like a scarf, wearing the patience of a man who has seen this exact disaster coming. His sketchbook is wedged between the records by the hi-fi; one Overbliss logo ought to keep Nadim’s hands busy somewhere else, yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/use": "Guy watches Nadim wear the good speaker cable like a scarf, then nods toward the hi-fi. “Ask me after I get my sketchbook, habibi. It’s wedged in the records, and I have a logo to draw before he starts selling imaginary T-shirts again.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/talk": "Guy watches Nadim loop the good speaker cable around his neck like a very expensive scarf. “Nadim, habibi, I’ll draw you a logo for the CD cover.” His eyes flick toward the sketchbook wedged behind the records by the hi-fi; subtle as a servees with one working headlight.",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/kick": "Your kick lands nowhere near the cable, but Nadim still flinches like you’ve attacked the whole Overbliss back catalogue. Guy watches his speaker cable sway around Nadim’s neck, then calmly says, “I’ll draw you a logo for the CD cover.” Nadim forgets the cable before you’ve finished blinking.",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/look": "Guy holds up the Overbliss logo, pleased: jagged letters with just enough menace to make a school notebook look like it needs a parental warning. The drawing’s ready for Nadim—yalla, before he unplugs another cable and turns the room into an acoustic mystery.",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/use": "You try to operate Guy, which is not how people work, even in 1998. He looks up from his drawing, calm as ever. “Give the Overbliss logo to Nadim, ya zalameh—before he unplugs something else.”",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/talk": "“Gus, yalla—give Nadim the logo before he unplugs the speakers to explain his album-cover budget again.”",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/kick": "Your kick thumps Guy’s chair, not Guy; he looks up from his drawing with the patient expression of someone who’s seen you lose arguments with furniture before. “Logo to Nadim, ya zalameh—fast,” he says, nodding toward the door. “Before he unplugs the speakers too.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/look": "Guy looks up from the hi-fi, calm as ever, while Nadim gestures at the logo and asks if there’s a cable—any cable. Behind the speakers, a nest of wire sulks in the dust: one end plugged into nothing, another ending in a connector nobody’s seen since cassette decks were young. “Yalla,” Guy says. “The nest.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/use": "You try to pick up Guy, which is ambitious even by Nadim’s standards. Guy lifts an eyebrow from his chair. “The cable’s behind the hi-fi, habibi. Try the nest of junk wire.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/talk": "“Nadim loves the logo, khalas. Still needs a cable, though. Try the nest of junk wire behind the hi-fi—something in there probably remembers being useful.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/kick": "You nudge Guy with your boot. He looks up from the hi-fi, perfectly calm. “The cable’s behind it, ya zalameh. Not me.” Nadim nods, already halfway into a pitch for the logo.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/look": "Guy is back at his drawing, pencil moving with the calm of someone who knows where every line is going. Wael’s lighter sits abandoned nearby; his headphones are probably still on that white plastic chair in the garden, where Guy last saw them—though first Wael has to finish crying about it.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/use": "Guy keeps drawing, pencil moving like it’s got a deadline and he doesn’t. “Record’s here, Nadim’s gone, Wael’s vanished. He left his lighter, so he’ll be back—probably at Kababji.” He nods toward the garden. “His headphones were on the white plastic chair last I saw, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/talk": "Guy keeps drawing, pencil moving without hurry. “Record’s here. Nadim’s gone to sell the imaginary thousand copies, Wael’s probably at Kababji—and he left his lighter, so khalas, he’ll be back.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/kick": "Your kick cuts through Guy’s room like a very small Pantera audition. Guy keeps drawing, glances up, and says, “If you’re looking for Wael, he left his lighter. Probably at Kababji—and his headphones were on the garden chair, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/look": "Guy watches Wael measure the speaker height with the grave focus of a surgeon, his pale blue shirt saying Snake Probably. “He’s taken over,” he says, amused, and passes you the screwdriver. The plan is to get the speakers off the floor and aimed at the cushions—apparently the bass has standards now, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/use": "You ask Guy to shift the speakers. He looks at Wael, who’s already measuring the distance to the cushions with grave, headphone-wearing authority. “Apparently I’m running a sound lab now,” Guy says, and helps lift them to sitting ear height.",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/talk": "Guy watches Wael measure the speaker height against the cushions, wearing the calm expression of a man whose room has just been annexed by sound. “He’s got a plan, ya zalameh. Let him cook.”",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/kick": "Guy watches you kick the speaker stand into place. It wobbles once, then settles at cushion height, aimed squarely at the seats—Wael’s plan, apparently, now with your personal engineering certificate. Guy smiles. “Tayyeb. Try not to improve anything else.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/look": "The good cable lies coiled by the amp, thick and slightly kinked, its plugs polished from use. Nadim rescued it from some doomed band setup and has told that story three times; Guy waits, patient as ever, for you to plug it in.",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/use": "Guy gives you the patient look of someone who has already explained cables to Nadim twice today. “Good cable goes in the back of the amp, habibi. You can help without trying to carry me.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/talk": "Guy holds out the good speaker cable, rescued from Nadim before it could become part of a T-shirt budget. “Back of the amp, habibi. Try not to make the left speaker play Pantera by itself.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/kick": "You kick the good cable. It swings just short of the amp, while Guy gives you the calm look of someone watching a very small disaster arrive exactly on schedule. “Nice try, habibi. Cable goes in the back.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/look": "Guy watches you inspect the setup: speakers level with your ears, the good cable plugged in, the needle clean. He gives you the amp’s bass knob. “Turn it while Wael mouths the bassline,” he says. Wael nods gravely. This is apparently a precision operation, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/use": "You reach for Guy, but he’s not a piece of equipment, ya zalameh—he just leans back, patient as ever, and points you toward the amp. Wael’s waiting by the bass knob, silently mouthing the line; turn it till he says “massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/talk": "Guy glances from you to the amp, calm as ever. “Bass knob, Gus. Wael’s doing the very serious mouth version—turn it till he says ‘massive.’”",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/kick": "You nudge the bass knob, while Wael mouths the line with grave scientific focus. “More… no, less… yalla—massive.” Guy gives you a small nod, like you’ve just passed an exam nobody told you about.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/look": "The red bandana lies in a heap on Guy’s green blanket, its paisley print faded soft from too many washes. It looks less like a fashion statement than a small, tired flag claiming the best cushion.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/use": "Guy glances at the dusty needle, then at you. “Not yet, ya zalameh—the bass is ready, but that thing will make the record sound like a Kababji wrapper.” His red bandana stays put on the green blanket; at least one of you has the sense not to touch it.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/talk": "Guy glances up from the turntable, calm as ever. “Bass is set, habibi. But that needle’s dusty—unless you’re planning to listen to the record through a small family of lint.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/kick": "Your kick lands in the cushion beside Guy, who looks down at it with the calm disappointment of a man watching someone miss a very large target. The bass is set, the needle is dusty, and his red bandana remains on the green blanket—none of them seem impressed, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/look": "Guy sits cross-legged beside the stereo, calmly rolling a spliff with his legendary two-paper trick, like he has all night—which, for once, he almost does. The speakers are set at sitting-ear height, the good cable is in, and the record waits by the clean needle; he glances up at you. “Tayyeb, habibi. Drop it.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/use": "You reach for Guy, but he’s not equipment, habibi—just the calm artist rolling a spliff with his legendary two-paper trick. The system’s ready; he gives the record a nod. “Yalla. Drop the needle.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/talk": "Guy finishes the two-paper trick with the calm precision of a man tuning a guitar by ear. “System’s ready, habibi. Drop the needle before Wael starts explaining the cable again.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/kick": "Guy gives the spliff its legendary two-paper finish, then nods at the turntable. The speakers are at sitting-ear height, the good cable’s in, the bass is dialed by ear; all that’s missing is your courage to admit there may be guitars in there somewhere.",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/look": "Nadim has the good speaker cable slung over one shoulder, while both hands pitch the Overbliss CD, its cover, a tour, and T-shirts to an imaginary room full of buyers. The cable’s a little kinked near the plug; he’s carrying it carefully, though his eyes keep drifting back to you. He wants a cover design, ya zalameh, not quality control.",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/use": "You try to pick Nadim up, but he’s already carrying the good speaker cable over one shoulder and pitching Overbliss’s CD, cover, tour, and T-shirts with both hands. “I need a cover design, habibi,” he says, somehow making it sound like four deadlines.",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/talk": "“Gus, habibi, that cable is for tonight—the record, the speakers, perfect sound. Also, I need a cover for the Overbliss CD. Maybe flames? We’ll print a thousand, sell them all, tour Europe, T-shirts—wait, you do graphics, right?”",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/kick": "Your kick catches Nadim in the shin. He hops once, still gripping the speaker cable, and says, “The CD cover needs flames—but classy flames. Also, tour T-shirts. You know anything about design, habibi?”",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/look": "Nadim holds Guy’s Overbliss logo up to the light, turning it this way and that like a man inspecting the future of merchandise. He’s already pitching T-shirts, a thousand copies, the money—oh, and he still needs a speaker cable for tonight; any cable will do, habibi. You suspect he couldn’t tell a good one from a lamp cord.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/use": "You try to pick Nadim up. He keeps holding the Overbliss logo to the light, mid-pitch about T-shirts, and weighs considerably more than your enthusiasm. “Cable, though—any cable, ya zalameh. Tonight!”",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/talk": "“Look at this, ya zalameh—the Overbliss logo, perfect for the CD, the T-shirts, the thousand copies we’re selling. Also, you have a speaker cable? Any cable. I’m not fussy.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/kick": "Your kick stops just short of Nadim’s shin, because he’s holding the Overbliss logo up to the light and you’re not a monster. He barely notices; he’s already pricing a thousand T-shirts, while the speaker cable problem remains—any cable will do, apparently, even one that sounds like wet string.",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/look": "Wael’s black *Music is my life* shirt is doing a lot of work for a sixteen-year-old, but the headphones around his neck look thoroughly professional. He studies the speakers and cable with grave attention, already planning the proper setup; the record can wait until everything sounds massive.",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/use": "You try to move Wael, but he’s busy arranging the room around the record in his head. “Speakers at sitting-ear height,” he says, eyes on the stands. “Good cable. Bass by ear. Clean needle. Then we listen. Massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/talk": "“Massive,” Wael says, one hand resting on the headphones around his neck. “We do it properly: speakers at ear height, good cable, bass by ear, clean needle. Then the record.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/kick": "Wael gives you the look of a man whose sound check has been interrupted by history, then calmly puts the speakers at sitting-ear height. “Massive,” he says, plugging in the good cable; the bass gets dialed by ear, the needle cleaned, and your “where are the guitars?” waits politely by the door.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/look": "You crouch by Guy’s two tall black speakers, planted on the floor beside the hi-fi and pointed at nothing in particular. Wael eyes them like they’ve personally insulted bass: “No weight down there.” He’s already measuring the room with his hands, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/use": "You crouch to inspect Guy’s tall black speakers, pointed at nothing in particular. “They have no weight down there,” Wael says, with the grave concern of a man discussing a medical emergency. You leave them where they are; your back has enough problems from carrying guitar cases.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/talk": "The speakers stand on the floor beside the hi-fi, tall and black and pointed at nobody in particular. “They have no weight down there,” Wael says, already reaching for them. Yalla, even the speakers have to earn their place in the crew.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/kick": "Your kick lands on the speaker with a hollow thump. Wael looks at you like you’ve just tried to tune a guitar with a sandwich. “No weight down there, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6kb052_bd/look": "The two tall black speakers stand on the floor, where the bass can impress your ankles and nobody else. Wael’s already eyeing the record crates: he wants them lifted to sitting ear height, angled at the cushions—because apparently even furniture has to hear this properly, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/look": "You lean in as Wael nudges each speaker by half a centimeter, like the bass might file a complaint if he gets it wrong. They’re perched on record crates, aimed straight at the cushions; Guy’s good cable runs between them, neat as a promise. “Massive,” Wael says, and listens to the silence.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/use": "You crouch to inspect the speakers, and Wael nudges one half a centimeter toward the cushions. “Don’t touch,” he says, with the grave authority of a surgeon protecting a very loud patient.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/talk": "They give you nothing back, unless you count the bass humming through the record crates. Wael nudges one by half a centimeter; apparently the other half-centimeter is between you and enlightenment.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/kick": "You kick a speaker. It shifts a heroic half-centimeter, and Wael catches it before the room’s carefully engineered sound becomes Guy’s carefully engineered floor sound. “Easy, ya zalameh,” he says, nudging it back toward the cushions.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/look": "The silver Technics amp sits at the heart of Guy’s hi-fi stack, its big knobs turning a dubbed tape’s snare into a small, determined assault. The good speaker cable snakes out the back; Guy’s set the levels by ear, naturally, which is annoying because they sound right.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/use": "You turn the Technics’ big silver knobs with the solemnity of a man defusing a bomb. The snare gets louder; the good cable stays put, and Guy gives you a calm look that says, yalla, let the tape finish its little career.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/talk": "The Technics amp answers with a snare crack and keeps the tape rolling. Its big knobs look like they know exactly where the bass should go, habibi; the good cable disappears behind the stack.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/kick": "Your boot finds the Technics amp’s big silver knob instead of the floor, and the dubbed tape answers with a snare hit loud enough to reorganize your ribs. Guy glances over from his chair. “Careful, habibi. That’s the good cable.”",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/look": "You crouch by Guy’s amp and find the speaker terminals bare, two little metal mouths with no cable between them. Nadim has apparently borrowed the good one for some urgent Overbliss operation; Wael’s rule is still the rule: speakers up first, then anything gets plugged in.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/use": "You lean toward the amp, but the bare speaker terminals on its back stare you down like a tiny electrical courtroom. Wael’s rule holds: speakers up first, nothing plugged in yet—yalla, even your guitar would have to wait.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/talk": "The amp gives you nothing but a patient little hum. Its speaker terminals sit bare, waiting for Nadim’s cable—and Wael’s speakers to be lifted before anyone plugs in. Yalla, no shortcuts.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/kick": "Your kick lands squarely on Guy’s amp. It doesn’t make a sound; the speakers are still up on their stands, and the good cable dangles uselessly from the bare terminals—Nadim’s handiwork. Wael gives you the look. “Nothing gets plugged in until the speakers are up,” he says, like your boot was a serious technical proposal.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/look": "You lean in to Guy’s amp. The speakers are perched at sitting-ear height, waiting patiently; on the back, two bare terminals gape for the good cable. Guy has already dialed in the bass by ear, naturally. You’re beginning to suspect the man takes sound personally.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/use": "You crouch behind Guy’s amp and find the speaker terminals bare, waiting for the good cable. It’s not going anywhere, ya zalameh; even the amp knows better than to rush the setup.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/talk": "Guy’s amp sits there patiently, speakers waiting at sitting-ear height. The bare terminals on its back offer no opinion on your guitar collection.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/kick": "Your foot taps Guy’s amp, and it gives a small, offended thunk. The speakers stay politely silent; with those bare terminals waiting for the good cable, even Metallica can’t bully them into working.",
      "room_efead1c6hf0t0_bd/hs_efead1c6i7acm_bd/look": "The bass knob sits on Guy’s amp, its little marker hovering between “polite” and “make the cups nervous.” Wael leans in and mouths a bassline with grave authority; turn it, and he’ll tell you when the kick finally has weight.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/look": "The amp sits beneath Guy’s carefully raised speakers, bass knob parked at the exact position Wael found by ear. There’s a strip of tape beside it that says DO NOT TOUCH, which feels less like a warning and more like the terms of an international treaty.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/use": "You reach for the bass knob. Wael’s hand appears from nowhere and blocks you with the calm precision of airport security; the amp stays dialed in by ear, and you stay on probation, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/talk": "The amp sits there, perfectly dialed in, while the bass knob catches your eye like a dare. Wael’s ban is the only thing in the room more serious than his taste in records.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/kick": "Your foot gives the amp a nudge. It hums back, perfectly dialed in by ear—and Wael, from somewhere nearby, says, “Who touched the bass?” like he’s already preparing the investigation.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/look": "The turntable sits ready on Guy’s desk, its platter bare and the needle clean—no record, no excuses. It mostly spins Guy’s old Ziad Rahbani albums, unless Wael brings something that needs the bass dialed in just so.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/use": "You lift the turntable’s dust cover. No record, just the platter waiting patiently—mostly for Guy’s Ziad Rahbani, and today for whatever Wael’s brought. “Empty,” Guy says, as if you might’ve missed the giant empty bit.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/talk": "The turntable sits patiently, platter empty, ready for another Ziad record or whatever Wael has smuggled in. You ask it a question. It offers no opinion—though the tonearm does look like it’s heard this one before.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/kick": "Your trainer clips the turntable’s side. It wobbles once, then keeps spinning bravely, like it’s heard worse from Guy’s Ziad Rahbani records. Somewhere in the room, a cable looks at you with concern.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/look": "Mazin’s record waits beside Guy’s turntable, its sleeve tucked under one corner like it’s keeping the thing from getting ideas. The speakers sit at listening height, the good cable’s in place, and the needle looks clean; even you can tell this isn’t a “just chuck it on” situation, yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/use": "You reach for the record, but Guy gives you the calm look of a man guarding a very expensive sandwich. “Not till the speakers are right, habibi.” The turntable waits, needle clean, cable ready—tomorrow it goes back to Mazin, so today gets one proper listen.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/talk": "The turntable sits there with Mazin’s record beside it, waiting for a system worthy of the occasion. You ask it where the guitars are. It offers no comment, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/kick": "Your kick meets the turntable’s wooden cabinet with a hollow thunk; Mazin’s record stays safely beside it, unimpressed. Guy looks over from the cable. “Nice try, Gus. We’re listening to it properly, not giving it a football career.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/look": "You lean over the turntable. Dust freckles the needle, and Wael watches your hands like you’re approaching a bomb—no lighter, habibi. A soft cloth sits nearby, waiting for its big night.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/use": "You reach for the turntable, but Wael intercepts your hand like you’ve just threatened the national archives. The needle’s dusty; something soft, like a cloth, will do—just keep the lighter away, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/talk": "The turntable stays quiet, its dusty needle poised like it’s heard this question before. A soft cloth is somewhere in Guy’s room; a lighter, anywhere near it, is how Wael ends a friendship.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/kick": "Your boot meets the turntable with a hollow thunk. The dusty needle trembles but stays put; Wael appears from nowhere, staring at you like you’ve just kicked a baby. “Wlak. No lighter, no boots. Something soft, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7koe_bd/look": "The record sits on the platter, black grooves catching the window light; the needle’s clean, the bass dialed in, and Guy’s speakers perch at exactly sitting-ear height. Everyone’s settled on the cushions, waiting like this is a court hearing with better cables. Drop the needle.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/look": "You slide the big black sketchbook from between the records and the hi-fi. Its corners are soft from use, and the pages bulge with inked band logos, strange little monsters, and careful lettering—Guy’s hand making even a half-finished doodle look like it knows exactly where it’s going.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/kick": "Your toe catches the big black sketchbook wedged under the hi-fi, and it slides out with a papery shhh. Guy catches it before it can meet the floor. “Careful, ya zalameh. The drawings are innocent; the binding has suffered enough.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/look": "You crouch behind the hi-fi and find a nest of thin speaker wire, knotted like it’s been trying to escape since the previous stereo. The copper ends are bent and tired; Guy’s good cable is already doing the actual work, khalas.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/kick": "Your toe finds the nest of cheap speaker wire behind the hi-fi, and it slithers out like a very small, very defeated snake. Guy glances over from the good cable. “That one’s for listening to the fridge, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/look": "You fish Guy’s red bandana out of the green blanket. It’s creased into a lumpy little square, with a faint smell of smoke and laundry soap—less rock-star prop, more evidence that someone has been sitting here all afternoon.",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/kick": "Your toe finds the red bandana balled in the green blanket, and the whole cushion gives a soft, accusing lurch. Guy glances over. “Careful, ya zalameh. That’s holding the room together.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7i7gc3_bd/look": "The papers sit beside the ashtray and lighter on Guy’s coffee table, looking innocent in the way only rolling papers can. Guy’s famous two-paper trick is apparently still classified information, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/look": "The ashtray holds a tidy drift of ash, one slow curl of smoke, and rolling papers folded with Guy’s famously unnecessary precision. Your practice paper still lies on the rug: flat, innocent, and not remotely legendary.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/use": "You reach for the ashtray, but Guy gives it a small nudge back into place: it’s scenery, habibi, not a percussion instrument. Your practice paper stays on the rug, patiently failing to become the legendary two-paper trick.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/talk": "The ashtray offers no comment. A curl of smoke drifts over the papers, while your practice roll sits on the rug looking like a tiny, defeated sleeping bag.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/kick": "Your foot clips the ashtray; it skates across the floor, scattering ash and one rolling paper like a tiny, deeply unimpressed parade. Your practice paper stays on the rug, safe from your aim. The room takes a brief pause, then carries on.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/look": "Wael’s lighter sits beside the ashtray, exactly where he left it—which is to say, somewhere he’ll remember only after making himself scarce. Guy glances at it with the patience of someone who has seen this episode before: “He always comes back for it, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/use": "You pick up Wael’s lighter. Guy glances at the empty patch beside the ashtray. “He’ll come back for it,” he says, with the calm of someone who has seen this exact lighter abandon the room before.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/talk": "You give Wael’s lighter a look, but it remains committed to being a lighter. It sits beside the ashtray, waiting for Wael to remember he owns it—which, eventually, he will.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/kick": "The lighter skitters off the coffee table and clacks against the ashtray. Guy glances at it, then at you. “Careful, ya zalameh. Wael always comes back for that thing. Eventually.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/look": "The ashtray sits close enough to catch the ash, but not close enough to threaten the record. Wael’s lighter rests safely in his hand; he watches the needle like it owes him money.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/use": "You reach for the ashtray, but Wael shifts his lighter out of its orbit like a man protecting a priceless instrument. The ashtray stays put, full of ash and quiet judgment.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/talk": "The ashtray offers no advice, just a grey little history of the afternoon. Wael keeps his lighter well away from the needle, like it’s got a personal grudge.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/kick": "Your foot clips the ashtray, sending it skittering across Guy’s floor with a little parade of gray ash. Wael lifts his lighter out of danger without looking away from the needle. “Careful, ya zalameh. That’s my lighter, not the percussion.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/look": "You lean over the coffee table. Mazin’s Virus Recordings sleeve is almost black, with sharp, cryptic artwork; the record rests inside, pristine and waiting. It came from the UK, and goes back tomorrow—so, habibi, nobody’s touching that needle without knowing what they’re doing.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/use": "You reach for the dark sleeve, and Guy gives you a calm little look: that’s Mazin’s record, habibi. It goes back tomorrow, so it stays on the table until Wael’s ready to play it properly.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/talk": "The record stays quiet in its dark Virus sleeve, looking very British and very unhelpful. Mazin wants it back tomorrow, so you admire it from a respectful distance, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/kick": "The sleeve skates a few centimeters across Guy’s coffee table and stops, dark and dignified, as if it’s heard worse. Guy gives you a look over his pale blue Snake Probably shirt. “Careful, ya zalameh. Mazin wants that back tomorrow.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/look": "You lean over Guy’s coffee table: comics slouch beside a stack of tapes, and little burn marks freckle the wood. The rings and scorches map the crew’s history with more accuracy than anyone’s memory—especially Nadim’s.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/use": "You lean over Guy’s coffee table. Comics, tapes, and old burn marks cover it; the rings and scorches are basically the OwwleStars’ guestbook, if the guestbook smelled faintly of coffee. It stays exactly where it is, tayyeb.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/talk": "The coffee table offers no comment. Its burn marks and cup rings do plenty of talking, though—mostly about long afternoons and Guy’s relaxed approach to coasters.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/kick": "Your foot catches the coffee table, and the tapes shuffle like they’re changing sides. A comic slides to the floor; the old burn marks remain unimpressed, keeping the crew’s history exactly where it is.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/look": "You lean in toward the warrior poster: long hair, a chain draped across one shoulder, and a blade held like it has somewhere to be. Dark, dramatic, gloriously unnecessary—Guy’s taste has at least one guitar-shaped corner. You approve.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/use": "You give the warrior poster a respectful nod: long hair, chain, blade—the most metal thing in Guy’s room, and somehow the property of the calmest guy in Ras Beirut. You don’t try to peel it off the wall; even you know better than to mess with a classic.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/talk": "The warrior stares down from the wall, chain glinting, blade ready. You approve; he looks like he knows where the guitars are. He says nothing, though. Not much for conversation, this guy.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/kick": "Your boot thumps the wall beneath Guy’s warrior poster. Long hair, chain, blade: finally, some proper guitar-adjacent decor. Guy glances up from the stereo. “Careful, Gus. He looks busy.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/look": "The yellow sign says CAUTION, EXCESSIVE SOUND LEVELS, in the stern voice of someone who has never heard a guitar solo. Wael claims it came from “somewhere,” which is less an answer than a door he’s closed very politely.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/use": "You give the yellow sign a tug. It stays put, and Wael gives you the look of a man protecting both a secret and a very specific theft. “Wlak, it’s scenery,” Guy says. “The speakers are the dangerous part.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/talk": "The yellow CAUTION sign says nothing, despite its stern warning about excessive sound levels. Wael refuses to explain where he got it; the sign, at least, has an alibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/kick": "Your toe knocks the yellow CAUTION sign, and it swings on one screw: EXCESSIVE SOUND LEVELS, which feels less like a warning than Wael’s idea of interior design. He glances over his headphones. “Massive,” he says, refusing to name where he stole it from.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/look": "You lean in toward the yellow TAXI light on Guy’s shelf. It’s the real thing, scratched around the edges, with a little dust settled in the letters; Guy says it was a gift, and leaves the obvious question alone.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/use": "You reach for the yellow TAXI light, but Guy gives you the calm look reserved for people about to unplug the speakers. “Gift,” he says. From who, nobody asks; the light stays on the shelf, enjoying retirement.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/talk": "The yellow TAXI light sits on Guy’s shelf, still carrying the faint authority of a Mercedes that’s seen things. You speak to it; it offers no fare, no explanation, and definitely no hint about the gift.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/kick": "Your toe taps the taxi light. It wobbles on the shelf, then settles with a tiny plastic click—still advertising a ride nobody’s taking. Guy glances over. “Careful, habibi. It’s a gift.” From who, naturally, remains classified.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/look": "You lean in to the old LIBAN poster: a blue sea, a hard little sun, and the confident promise of a country-sized holiday. Flyers have slowly crowded its edges, but the poster still holds its patch of wall like it got here first—and has no plans to move, yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/use": "You give the LIBAN poster a tug. It stays put, sunning itself above the flyers like it has nowhere else to be—and, honestly, it doesn’t.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/talk": "The LIBAN poster offers you blue sea, bright sun, and the silence of a thing that’s been outnumbered by gig flyers for years. You wait for it to say something about the guitars; it remains, like the sea, unconvinced.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/kick": "Your boot catches the LIBAN poster, and it flaps against the wall with a papery slap—blue sea, bright sun, zero interest in your opinion. Guy glances over from the stereo. “Careful, habibi. It’s holding up the flyers.”",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/look": "The KILL THE DJ sticker sits crooked on Guy’s wall, its letters bold enough to file a noise complaint. Wael spots it and goes quiet for half a second—Guy’s little art project, and still working beautifully.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/use": "You try to peel up the KILL THE DJ sticker, but Guy has pressed it down with the patience of a man laminating a grudge. Wael spots you and goes, “Massive,” with absolutely no warmth; the sticker has done its job again.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/talk": "The KILL THE DJ sticker sits on Guy’s wall, its tiny accusation aimed squarely at Wael’s headphones. It doesn’t answer you, but you can practically hear Wael saying “Massive” through his teeth.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/kick": "Your toe catches the KILL THE DJ sticker, which is stuck to the wall and therefore a poor choice for kicking. Wael glances over. “Massive,” he says, with the wounded dignity of a man who knows Guy put it there just for him.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/look": "The floor cushions line Guy’s walls like the room has politely given up on chairs. They smell of hash, incense, and teenage boys; you settle onto one, and it accepts your entire lifestyle without comment.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/use": "You drop onto a floor cushion. It gives with the long-suffering sigh of official crew furniture, smelling of hash, incense, and fifteen-year-old ambition. Sitting here isn’t something you do; it’s a lifestyle, yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/talk": "You sink onto a floor cushion, which gives a long, tired sigh. It smells like hash, incense, and the OwwleStars; after a minute, sitting on the floor starts to feel less like a choice and more like a lifestyle.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/kick": "You kick a floor cushion. It scoots six inches, releases a dignified puff of incense and hash, and settles back against the wall—still very much the official furniture. Sitting, apparently, remains the lifestyle.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/look": "You lean toward the open shutters: palms shuffle against the cream buildings, and Bliss Street drifts by below with a servees coughing past. Guy says the spliff smoke goes straight out this window; the curtains, unfortunately, tell a different story.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/use": "You lean out past the open shutters. Bliss Street carries on below—palms, cream buildings, a servees easing past—and Guy assures you the smoke goes out this window. It drifts back in, habibi. The window has heard this argument before.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/talk": "The window gives you palms, cream buildings, and Bliss Street doing its Saturday thing. Guy swears the smoke goes out here; the smoke, loyal to Guy but not to physics, mostly stays in the room.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/kick": "Your boot thunks the window frame; the shutters flap, and Bliss Street remains blissfully unimpressed. Guy glances over from the speakers. “Nice. Now the smoke definitely knows you’re here.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7npfo9_bd/look": "The door sits behind you, plain and closed, with the muffled Saturday noise of Bliss Street waiting on the other side. You can head back to the entrance hall, though the record’s about to get serious—yalla, don’t miss the good part.",
      "room_efead1c6hf0t0_bd/hs_efead1c7igaq2_bd/look": "The door sits behind you, plain and patient, with the hallway waiting on the other side. It’s the kind of door that gets you back to Bliss Street—and away from Guy’s speakers, which would be a questionable move, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7uz5jw_bd/look": "You lean toward the door: scuffed paint, a brass handle polished by years of people coming and going. Three short knocks and one long one. Wael’s knock—subtle as a snare fill, ya zalameh."
    },
    "combos": {
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/item_efead1c6f4lp3_bd": "You give Teta’s building the classic Later. Not today. From the third-floor balcony, Teta watches you go past the geraniums and out of sight—an approval rating you don’t have to ask for.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/item_efead1c6uhipf_bd": "You press Teta’s five thousand lira against the cream stone, which is not how buildings accept payment, even in Ras Beirut. Her geraniums watch from above; you can almost hear her say, “Yalla, habibi, buy a sandwich.”",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/item_efead1c65yb6q_bd": "You pull out Guy’s Sketchbook and consider Teta’s Building as a subject. Somewhere above, a geranium seems to judge your composition; the snakes on the page remain unimpressed.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/item_efead1c6k12sp_bd": "You stretch the tangled wire toward Teta’s building. Her geraniums look unimpressed; the wire, for its part, remains deeply committed to being a mess.",
      "room_efead1c6pj8ei_bd/hs_efead1c6y6jfi_bd/item_efead1c69x7o4_bd": "You wipe the bandana over the cream stone. It gets a little less clean; the building remains stubbornly a building. Teta watches from her balcony, geraniums at the ready.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/item_efead1c6uhipf_bd": "You duck under the shutter and offer the folded five thousand to the dekkaneh. From somewhere inside, the owner says, “I knew you when you were in diapers,” which is a strong argument for keeping your money.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/item_efead1c65yb6q_bd": "You flip Guy’s sketchbook open beside the Pepsi crates, as if the snakes might have a shopping list. The dekkaneh owner calls from inside, “I knew you when you were in diapers, ya habibi,” which doesn’t help the snakes or your afternoon.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/item_efead1c6k12sp_bd": "You hold the tangled wire up to the dekkaneh, as if the morning papers might be hiding a stereo. They aren’t, habibi; the owner keeps listening to the radio somewhere inside, blissfully unaware of your cable-based business proposal.",
      "room_efead1c6pj8ei_bd/hs_efead1c6202ol_bd/item_efead1c69x7o4_bd": "You rub the clean-ish bandana over the dekkaneh shutter. It comes away exactly as clean, and the owner, somewhere inside, reminds you he’s known you since you were in diapers. Yalla, not every plan improves with cloth.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and consider the Peugeot. Unless it’s started accepting lira as a tip, habibi, this plan needs one more step.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/item_efead1c65yb6q_bd": "You hold Guy’s sketchbook beside the Peugeot, as if the good paper might explain what to do with an indestructible car. It doesn’t; the nearest snake drawing looks more qualified to drive.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/item_efead1c6k12sp_bd": "You drape the tangled speaker wire over the Peugeot’s bonnet. The 504 remains magnificently indifferent, as it has to most things since before you were born.",
      "room_efead1c6pj8ei_bd/hs_efead1c6bwkvj_bd/item_efead1c69x7o4_bd": "You wave Guy’s Bandana at the Peugeot. It remains a Peugeot, unimpressed; even the legendary two-paper trick can’t make this useful, habibi.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the ficus. It has roots, not a cash register, ya zalameh; METALLICA remains badly carved, and the tree stays politely broke.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook against the ficus, as if the tree might appreciate the good paper. Your METALLICA carving remains the stronger work, which is rough news for both of you.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/item_efead1c6k12sp_bd": "You loop the tangled wire around the ficus and give it a hopeful tug. The tree, which has survived generations of bad carving, remains unimpressed; your Metallica stays spelled wrong.",
      "room_efead1c6pj8ei_bd/hs_efead1c6dk4to_bd/item_efead1c69x7o4_bd": "You press Guy’s bandana against the ficus, as if the tree might appreciate a softer tribute. It remains unmoved; METALLICA still looks like it was carved during an earthquake, habibi.",
      "room_efead1c6pj8ei_bd/hs_efead1c6v04rc_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand like it might contain taxi instructions. A servees rattles past already full, so you tuck the lira away and keep waiting—yalla, even taxis have their own schedule.",
      "room_efead1c6pj8ei_bd/hs_efead1c6v04rc_bd/item_efead1c65yb6q_bd": "You wave Guy’s sketchbook at the traffic. A passing servees is already full, and the snakes don’t improve your chances; one of them does look unimpressed.",
      "room_efead1c6pj8ei_bd/hs_efead1c6v04rc_bd/item_efead1c6k12sp_bd": "You wave the tangled wire at the passing servees. The driver gives it a polite glance, then keeps going; even a Mercedes with red plates knows when it’s being asked to carry hi-fi.",
      "room_efead1c6pj8ei_bd/hs_efead1c6v04rc_bd/item_efead1c69x7o4_bd": "You wave Guy’s soft red bandana at the traffic. A passing servees gives you the same attention it would give a very confident napkin; yalla, you’ll need an actual destination.",
      "room_efead1c642zkm_bd/hs_efead1c6n7td4_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside Guy’s white door, as if the notes might know the way in. Inside, somebody laughs; the money remains politely unhelpful. Yalla, maybe you can buy a sandwich with it.",
      "room_efead1c642zkm_bd/hs_efead1c6n7td4_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to the snake page and hold it up to the white door on Bliss, as if the right snake might know the way in. The door remains politely unimpressed; Guy is inside, habibi, not hiding in the margins.",
      "room_efead1c642zkm_bd/hs_efead1c6n7td4_bd/item_efead1c6k12sp_bd": "You take the tangled speaker wire to Guy’s white door on Bliss, as if the room might have a secret use for a cable-shaped knot. It doesn’t; from inside, someone says, “Yalla, habibi,” and the knot remains undefeated.",
      "room_efead1c642zkm_bd/hs_efead1c6n7td4_bd/item_efead1c69x7o4_bd": "You wave Guy’s bandana at the Bliss Street door. It remains a door, habibi; even a clean bandana can’t get you past a knob.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/item_efead1c6f4lp3_bd": "You leave Maghfar Hbeish for another day. Even you can tell it’s not the kind of place that improves a Saturday, and the OwwleStars are waiting at Guy’s. Yalla—there’s a record to hear properly, and a perfectly good spliff getting lonely.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and consider the police station off Sadat. Even your best bargaining face can’t make this a sensible transaction, habibi.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/item_efead1c65yb6q_bd": "You flip Guy’s sketchbook open to a snake with suspiciously official eyebrows and hold it up toward Maghfar Hbeish. The station remains unmoved, and the snake declines to file a statement.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/item_efead1c6k12sp_bd": "You lift the tangled wire toward Maghfar Hbeish, as if the station might need a hi-fi upgrade. It remains a police station, habibi. The cable remains a nest.",
      "room_efead1c642zkm_bd/hs_efead1c6h3afo_bd/item_efead1c69x7o4_bd": "You wave Guy’s bandana toward Maghfar Hbeish, as if it might convince the station to forget you exist. It remains a clean bandana, habibi, and the station remains a station.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/item_efead1c6f4lp3_bd": "You tell Nadim you’ll come by later. His pitch about the Overbliss CD, a thousand copies, and the money you’ll all make keeps rolling right past you as the crew heads for Guy’s room on Bliss—today’s the day for that record.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/item_efead1c6uhipf_bd": "You picture Nadim’s mom’s fatteh, then his latest speech about selling a thousand Overbliss CDs. The five thousand lira stay folded in your pocket; Nadim’s house is not a restaurant, ya zalameh.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/item_efead1c65yb6q_bd": "You consider sending Guy’s Sketchbook to Nadim’s in Clemenceau, but the snakes offer no advice on fatteh or grades. The sketchbook stays shut, unimpressed.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/item_efead1c6k12sp_bd": "You wave the tangled wire at Nadim. He squints, then remembers he’s supposed to be in Clemenceau—probably being asked about his grades between bites of fatteh. “Nice cable,” he says, already pitching you on a thousand Overbliss T-shirts.",
      "room_efead1c642zkm_bd/hs_efead1c6n55ka_bd/item_efead1c69x7o4_bd": "You wave Guy’s soft red bandana at Nadim’s house, as if the fatteh might respect a clean accessory. It doesn’t; the grades question remains undefeated.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the Corniche. The joggers keep jogging, the fishermen keep fishing, and a corn seller eyes you like you’ve misunderstood what money is for; yalla, try Kababji.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/item_efead1c65yb6q_bd": "You flip Guy’s sketchbook open on the Corniche. A jogger gets a very good drawing of a snake; the corn seller remains tragically undocumented, ya zalameh.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/item_efead1c6k12sp_bd": "You carry the tangled wire down to the Corniche and consider introducing it to the sea. The joggers, fishermen, and corn sellers remain unimpressed; even the gulls know this is not the cable Wael meant.",
      "room_efead1c642zkm_bd/hs_efead1c6axufd_bd/item_efead1c69x7o4_bd": "You tie Guy’s bandana around your wrist and set off along the Corniche, where joggers pass fishermen and a corn seller guards his cart like it’s a record collection. It’s soft, sure, but nobody here needs a wristbandage. Yalla, back to the important business.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/item_efead1c6uhipf_bd": "You press the folded five thousand into the Kababji guy’s hand. He shaves you a taouk with sculptor-level focus, wraps it tight, and passes it over with a nod. “Eat, habibi.” Teta’s money has been converted into something with garlic sauce. Yalla, Bliss Street can wait.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the Kababji counter. The Kababji guy glances from the snakes to your face, already preparing your usual taouk; even the good paper can’t pay first, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/item_efead1c6k12sp_bd": "You offer the Kababji guy a tangled nest of speaker wire. He looks at it, then at you. “Habibi, money first. Then we discuss cables.”",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/item_efead1c69x7o4_bd": "You offer the bandana for a taouk, but the Kababji guy points to the cash. “Money first, habibi.” The bandana, clean as far as anyone knows, remains tragically non-currency.",
      "room_efead1c6oayhb_bd/hs_efead1c6s7ym4_bd/item_efead1c6fyagj_bd": "You flick the fat coin toward Kababji’s counter. The guy catches it without looking up from the shawarma. “Money first, habibi,” he says, and keeps shaving.",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/item_efead1c6f4lp3_bd": "You leave the intercom alone; the Kababji guy has already fed you, and he confirms the useful part between orders: dead since the winter storm. “Guy’s friends? They throw something at the shutters, ya zalameh.” A sandwich, a local briefing, and no unnecessary button-pushing. Not bad for one stop.",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/item_efead1c6uhipf_bd": "You offer the Kababji guy your five thousand lira. He glances at the sandwich already in your hand, then back at you. “You ate, habibi. The intercom’s dead since the winter storm—Guy’s friends just throw something at his shutters.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/item_efead1c65yb6q_bd": "You wave Guy’s Sketchbook at the Kababji guy. He glances from the snakes to you, then goes back to wrapping sandwiches; the intercom’s still dead, ya zalameh, and apparently the shutters prefer a pebble.",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/item_efead1c6k12sp_bd": "You offer the wire to the Kababji guy. He squints at the nest of it, then points next door: the intercom’s been dead since the winter storm. “Guy’s friends just throw something at his shutters, ya zalameh.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ov5vj_bd/item_efead1c69x7o4_bd": "You offer the bandana to the Kababji guy. He regards it with the calm of a man who has already fed you and has no use for a soft red square, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/item_efead1c6f4lp3_bd": "You tell the Kababji guy, “Later. Not today.” He gives you a look over the counter; Wael, on his third sandwich and apparently still avoiding something, laughs so hard he nearly drops the wrapper. “Massive,” he says, like that explains anything.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/item_efead1c6uhipf_bd": "You offer the folded five thousand to the Kababji guy. He looks past it at Wael, still working on sandwich number three; Wael suddenly discovers something fascinating down the street. “Yalla, habibi,” the guy says. “He’s already eaten enough for both of you.”",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the Kababji counter, as if the good paper and its superior snakes might finally explain Wael’s third sandwich. The Kababji guy looks at it; Wael finds this hilarious. No clue, no sandwich—yalla.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/item_efead1c6k12sp_bd": "You show the tangled wire to the Kababji guy. He looks from it to Wael, still working on sandwich number three, and gives you the same patient nod he’d give a customer ordering extra pickles. Massive, apparently.",
      "room_efead1c6oayhb_bd/hs_efead1c6ztth1_bd/item_efead1c69x7o4_bd": "You offer the bandana to the Kababji guy. He eyes it, then Wael’s third sandwich; whatever message you’re sending, habibi, it needs better stationery.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/item_efead1c6f4lp3_bd": "You decide the dented white door can wait. “Later,” you tell it, and it stays shut with the quiet dignity of a door that has heard this before. From Guy’s room, the buzzer answers. The lock clicks; you step inside, past the Kababji smell and into the evening’s important business: one record, one good system, and several people pretending they’re not excited.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/item_efead1c6uhipf_bd": "You press Teta’s folded five thousand lira against Guy’s dented white door. It remains a door, habibi; right beside it, the intercom waits for you to use it like a normal person.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the white door, as if the better snakes might know the password. The door stays locked; from somewhere inside, Guy’s buzzer remains unimpressed.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/item_efead1c6k12sp_bd": "You press the tangled speaker wire against Guy’s white door. The door remains locked, unimpressed; even the cheap cables know better than to buzz in, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c678ysn_bd/item_efead1c69x7o4_bd": "You rub the clean-ish bandana on the white door. It remains locked, and now the door is slightly more comfortable with its own appearance. Guy buzzes you in from his room, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6gb5j0_bd/item_efead1c6uhipf_bd": "You unfold the five thousand lira at Guy’s white door. It stays a door, not a very ambitious sandwich; somewhere beyond it, the corridor and garden carry on without taking your money.",
      "room_efead1c6oayhb_bd/hs_efead1c6gb5j0_bd/item_efead1c65yb6q_bd": "You hold the sketchbook up to the white door, as if the snakes might know a shortcut. They don’t; the door stays open on the corridor and garden, unimpressed.",
      "room_efead1c6oayhb_bd/hs_efead1c6gb5j0_bd/item_efead1c6k12sp_bd": "You try to feed the tangled wire through Guy’s white door, but it just flops against the frame like a tiny, underqualified snake. The garden remains blissfully unconnected.",
      "room_efead1c6oayhb_bd/hs_efead1c6gb5j0_bd/item_efead1c69x7o4_bd": "You press the soft red bandana to Guy’s white door. The door remains impressively untroubled, and the bandana learns nothing about corridors, gardens, or the back of the building. Yalla, maybe try the handle.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/item_efead1c6f4lp3_bd": "You decide the intercom can wait until it develops a pulse. Guy’s shutters are right there, and Wael’s old coin trick has the kind of scientific credibility you respect.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/item_efead1c6uhipf_bd": "You feed the folded five thousand lira into the dead intercom. It swallows nothing, rings nobody, and remains committed to its winter-long silence; Teta’s sandwich money is safe, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook to the dead intercom, as if the good paper might improve the wiring. Nothing—not even a snake. Wael’s coin method is looking pretty solid, wlak.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/item_efead1c6k12sp_bd": "You press the tangled speaker wire against the intercom. It produces no music, no conversation, and not even a convincing crackle—just the familiar silence of a thing that gave up in winter. Yalla, you’ll need something louder than a cable.",
      "room_efead1c6oayhb_bd/hs_efead1c6cfolp_bd/item_efead1c69x7o4_bd": "You press the soft red bandana to the dead intercom. It remains a bandana, the intercom remains dead, and Guy is spared the indignity of being summoned by laundry.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/item_efead1c6f4lp3_bd": "You leave the dead intercom to its long and distinguished career as wall decoration. Guy has already buzzed you in from his room, so you head inside—yalla, the record isn’t getting any less borrowed.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/item_efead1c6uhipf_bd": "You flatten the five thousand lira against the intercom, as if it might recognize a proper bribe. It stays dead; Guy already buzzed you in, habibi. Teta’s sandwich money remains tragically unemployed.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook to the intercom, as if the snakes might know the code. The speaker stays dead; Guy already buzzed you in, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/item_efead1c6k12sp_bd": "You feed the tangled wire to the intercom. It stays dead; Guy already buzzed you in, habibi. The wire, meanwhile, has achieved nothing except becoming more tangled.",
      "room_efead1c6oayhb_bd/hs_efead1c6io8kw_bd/item_efead1c69x7o4_bd": "You dab the intercom with Guy’s bandana. It remains dead, and the bandana remains clean—well, clean by its own modest standards. Guy already buzzed you in from his room, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/item_efead1c6fyagj_bd": "You flick the fat coin at Guy’s green shutters. Ting—one neat little tap, then the window opens and Guy looks out in his Snake Probably shirt, unhurried as ever. “Nice aim, Gus. Come in before the bass starts charging rent.”",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/item_efead1c6uhipf_bd": "You fold the five thousand into a neat little missile and flick it at the green shutters. It flutters onto the pavement, short of the window; inside, the bass keeps doing its job without you.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/item_efead1c65yb6q_bd": "You flick a sketchbook page at the green shutters. It flutters down short of the window; the bass keeps thumping, unimpressed. Try something smaller, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/item_efead1c6k12sp_bd": "You toss the tangled wire at Guy’s closed shutters. It lands with a sad little tick, which is not the kind of bass anyone came for.",
      "room_efead1c6oayhb_bd/hs_efead1c6t76qh_bd/item_efead1c69x7o4_bd": "You knot the soft red bandana into a sad little parcel and lob it at the shutters. It lands without waking the bass; Guy’s window remains politely unimpressed, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/item_efead1c6f4lp3_bd": "You let “Later” go, and Guy’s window answers with a snare crack sharp enough to make the servees seem briefly under-rehearsed. The shutters are open; inside, the OwwleStars are clearly in session, and for once nobody’s pretending they can’t hear you.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beneath Guy’s open window, as if the snare might be persuaded to accept payment. It keeps leaking onto Bliss for free, habibi.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/item_efead1c65yb6q_bd": "You hold the sketchbook up to the open window. The snakes hear the snare and remain professionally unimpressed; Guy’s drawing hand, sadly, does not come with a volume knob.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/item_efead1c6k12sp_bd": "You dangle the Tangled Speaker Wire out Guy’s window. The snare keeps escaping just fine without it, and the cable looks no less like a cable.",
      "room_efead1c6oayhb_bd/hs_efead1c6v6x8f_bd/item_efead1c69x7o4_bd": "You wave the bandana at the open window. The music keeps leaking onto Bliss, entirely unimpressed; Guy’s shutters remain open, and your bandana remains clean by local standards.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/item_efead1c6uhipf_bd": "You flatten the folded five-thousand-lira note against the grey shutter, as if it might accept payment for being closed. It stays shut, unimpressed; Teta’s sandwich budget has achieved nothing, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the shutter, as if the snakes might negotiate it open. They look unconvinced; the shop remains closed, as it has been since the invention of shops.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/item_efead1c6k12sp_bd": "You press the tangled speaker wire against the rolling shutter. It gives a tinny rattle, which is not the sound of a shop opening—or, honestly, of anything worth wiring up.",
      "room_efead1c6oayhb_bd/hs_efead1c6mix90_bd/item_efead1c69x7o4_bd": "You rub Guy’s soft red bandana over the shutter. It comes away exactly as clean as it was, which is to say: nobody is ready to testify.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/item_efead1c6sobh1_bd": "You offer Wael his headphones. He takes them with the solemn relief of a man reunited with a small, beloved pet, then slips them around his neck. “Massive,” he says, and goes back to his sandwich before Nadim can pitch him anything.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/item_efead1c6uhipf_bd": "You offer Wael the folded five thousand. He eyes it, then his sandwich. “Massive, but I’m not selling the lunch, habibi.” The lira stay yours; the sandwich survives.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a page containing one excellent snake and three unfinished ones. Wael glances over from the counter, sandwich in hand. “Massive,” he says, then finds somewhere else to be.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/item_efead1c6k12sp_bd": "You offer Wael the tangled wire. He gives it one solemn look, says “Massive,” and returns to his sandwich; even cable trouble can’t compete with lunch, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c60vpiw_bd/item_efead1c69x7o4_bd": "You offer Wael the clean-ish bandana. He eyes it, then his sandwich. “Massive, but no.” The headphones are still missing, habibi; a bandana can’t DJ.",
      "room_efead1c6oayhb_bd/hs_efead1c6cy4tw_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and wave it at the traffic. A servees slows, sees you yelling “Bliss Street!” while already standing on Bliss Street, and keeps going; tayyeb, at least the money’s still folded small.",
      "room_efead1c6oayhb_bd/hs_efead1c6cy4tw_bd/item_efead1c65yb6q_bd": "You wave Guy’s sketchbook at the traffic. The servees admire its snakes, but none of them are going to Hamra; try using your voice, ya zalameh.",
      "room_efead1c6oayhb_bd/hs_efead1c6cy4tw_bd/item_efead1c6k12sp_bd": "You hold up the tangled wire to Bliss Street, as if a servees might recognize its better qualities. A Mercedes rolls past without stopping; the students are no more impressed. Yalla, back to Guy’s hi-fi.",
      "room_efead1c6oayhb_bd/hs_efead1c6cy4tw_bd/item_efead1c69x7o4_bd": "You wave the bandana at the servees. It flutters bravely; three taxis ignore it, and a student mistakes you for someone starting a very small parade. Yalla, try using your voice.",
      "room_efead1c6ljecr_bd/hs_efead1c6l4tpv_bd/item_efead1c6uhipf_bd": "You unfold the five thousand lira in the corridor, but Bliss Street doesn’t take tips for letting you out. Teta’s note stays folded in your palm; the Kababji counter is outside, yalla.",
      "room_efead1c6ljecr_bd/hs_efead1c6l4tpv_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a snake that looks suspiciously like it knows the way out. The corridor remains a corridor, the white door remains a door, and Bliss Street carries on without your artistic input.",
      "room_efead1c6ljecr_bd/hs_efead1c6l4tpv_bd/item_efead1c6k12sp_bd": "You crouch in the corridor and offer the tangled wire to the white door, which remains unmoved by your contribution to electrical engineering. From inside, Guy’s hi-fi keeps sounding perfectly fine without it.",
      "room_efead1c6ljecr_bd/hs_efead1c6l4tpv_bd/item_efead1c69x7o4_bd": "You press Guy’s soft red bandana to the corridor, as if Bliss Street might need its forehead dabbed. The white door remains a door, habibi.",
      "room_efead1c6ljecr_bd/hs_efead1c6jymb4_bd/item_efead1c6uhipf_bd": "You pat the folded five thousand lira against the back doorway, as if Guy’s room might accept tribute before you’ve even found it. The notes stay notes, and the door stays a door—yalla, maybe try going in first.",
      "room_efead1c6ljecr_bd/hs_efead1c6jymb4_bd/item_efead1c65yb6q_bd": "You heft Guy’s Sketchbook up the back steps and try it on the doorway. The door remains unimpressed; even the snakes in the margins can’t talk their way into the room.",
      "room_efead1c6ljecr_bd/hs_efead1c6jymb4_bd/item_efead1c6k12sp_bd": "You crouch by the back doorway and hold the wire up to the steps, as if the building might reveal an audio input. It remains a hopeless nest of cheap wire, habibi; Guy’s room is still on the right.",
      "room_efead1c6ljecr_bd/hs_efead1c6jymb4_bd/item_efead1c69x7o4_bd": "You dab the bandana at the back doorway, as if the wood might be persuaded to open by softness alone. It remains a doorway, habibi. Yalla, use the handle.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/item_efead1c6uhipf_bd": "You tuck Teta’s five thousand lira into the hoop’s net. It sits there looking rich and completely unable to buy a basket; Nadim still calls it a foul.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the hoop, perhaps hoping the snakes can teach you a jump shot. They cannot; Nadim calls it a foul anyway.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/item_efead1c6k12sp_bd": "You loop the tangled wire around the hoop, which does nothing except make the backboard look like it’s been promoted to the hi-fi. Nadim calls it a foul anyway. Yalla, try something else.",
      "room_efead1c6ljecr_bd/hs_efead1c6dxwgh_bd/item_efead1c69x7o4_bd": "You tie Guy’s soft red bandana to the hoop. It droops there like a tiny surrender flag; Nadim calls it a free throw, then argues with himself about the ruling.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the half-flat basketball. The ball remains unmoved by your generous bid; the bougainvillea watches, confident it’ll get the next one anyway.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/item_efead1c65yb6q_bd": "You give the basketball a sketchbook-inspired look. It remains a basketball, and the bougainvillea keeps its undefeated record.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/item_efead1c6k12sp_bd": "You loop the tangled speaker wire around the basketball, which does nothing except make it look like a very low-budget science project. The bougainvillea watches patiently; it knows where this is going.",
      "room_efead1c6ljecr_bd/hs_efead1c6oufc5_bd/item_efead1c69x7o4_bd": "You tie Guy’s bandana around the basketball. It looks ready for a very small, very soft heist; the bougainvillea remains unimpressed.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and hold it up to Wael’s headphones. Unless they’ve started accepting tips, this won’t reunite them with their owner; the chair remains tragically rich in currency and headphones.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/item_efead1c65yb6q_bd": "You compare a page of Guy’s better snakes to Wael’s headphones. The snakes are impressed by the padding; Wael, somewhere nearby, remains tragically headphone-less.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/item_efead1c6k12sp_bd": "You untangle enough wire to drape over Wael’s headphones. It looks almost official, which is more than the sound can say; Wael’s headgear remains stubbornly headgear, wlak.",
      "room_efead1c6ljecr_bd/hs_efead1c64b0rh_bd/item_efead1c69x7o4_bd": "You tie Guy’s soft red bandana around Wael’s chunky headphones. They look like they’re ready for a tiny, very serious gig; Wael’s still not here to appreciate it, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/item_efead1c6uhipf_bd": "You fold the five-thousand-lira note around a lemon, like money might persuade it to fall off the tree. The crew’s rule holds; the lemon stays put, and your lunch budget gets a faint citrus smell.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook beside the lemon tree, as if the good paper might negotiate. The tree keeps its lemons; the rule remains mysterious and, apparently, binding.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/item_efead1c6k12sp_bd": "You drape the tangled wire over the lemon tree. The lemons remain unpicked, unimpressed, and—technically—better grounded than Guy’s speakers.",
      "room_efead1c6ljecr_bd/hs_efead1c6vcskj_bd/item_efead1c69x7o4_bd": "You tie Guy’s Bandana around the lemon tree. It looks festive, but the lemons remain unpicked and entirely unimpressed.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and consider the laundry. Unless one of those shirts takes lira, you’re still hungry, habibi. The lemon-and-Tide smell is nice, though.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/item_efead1c65yb6q_bd": "You set Guy’s Sketchbook beside the laundry, as if the shirts might benefit from some snakes. The white one keeps drying; the blue one remains unimpressed. Everything smells like lemons and Tide, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/item_efead1c6k12sp_bd": "You drape the tangled speaker wire over the laundry line. The white shirt gets a new accessory, the blue one gets a suspicious crease, and neither improves the sound system; yalla, back to the cables that matter.",
      "room_efead1c6ljecr_bd/hs_efead1c6f8zxw_bd/item_efead1c69x7o4_bd": "You give the bandana a hopeful swipe at the laundry. It comes away smelling like lemons and Tide, which is an upgrade for the bandana and no help to anyone, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the bougainvillea. The flowers remain lovely, the basketballs remain unrecovered, and you’re still hungry.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a page of snakes and hold it up to the bougainvillea. The flowers remain magnificently unimpressed; no basketballs are returned, ya zalameh.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/item_efead1c6k12sp_bd": "You drape the tangled wire over the bougainvillea. It catches three leaves and, somehow, makes the garden look even less wired for sound.",
      "room_efead1c6ljecr_bd/hs_efead1c6sj3ds_bd/item_efead1c69x7o4_bd": "You dab the bandana against the bougainvillea. It comes away just as clean, and the plant remains completely unmoved—by you, or the fate of three basketballs.",
      "room_efead1c6xfh7c_bd/hs_efead1c6m8arw_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and press it against Guy’s door. The little snake sticker declines to buy anything; from inside, the bass keeps thumping, and smoke curls out beneath the green paint. Yalla, try the handle.",
      "room_efead1c6xfh7c_bd/hs_efead1c6m8arw_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook to the door. The snakes are unimpressed, and the door remains a door; smoke curls past your shoes like it has somewhere better to be.",
      "room_efead1c6xfh7c_bd/hs_efead1c6m8arw_bd/item_efead1c6k12sp_bd": "You poke the tangled wire at Guy’s door, as if the snake sticker might accept a sacrifice. The door remains a door, wlak.",
      "room_efead1c6xfh7c_bd/hs_efead1c6m8arw_bd/item_efead1c69x7o4_bd": "You press Guy’s Bandana to the door. It comes away smelling faintly of smoke and old wood, which is not quite the same as opening it.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/item_efead1c6uhipf_bd": "You press Teta’s folded five thousand against Guy’s snake sticker. The snake remains well-fed on glue alone; your sandwich budget, meanwhile, is still intact.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook against the Snake Sticker, as if the good paper might recognize its smaller cousin. The sticker stays a sticker; the snakes in the book have seen this before, wlak.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/item_efead1c6k12sp_bd": "You press the tangled wire against Guy’s snake sticker. The snake remains a snake, the wire remains a cry for help. Yalla, maybe try the actual hi-fi.",
      "room_efead1c6xfh7c_bd/hs_efead1c6yskzh_bd/item_efead1c69x7o4_bd": "You press Guy’s Bandana against the Snake Sticker. The sticker stays put, unimpressed; the bandana is clean, as far as anyone knows, and you’d like to keep it that way.",
      "room_efead1c6xfh7c_bd/hs_efead1c6bnokr_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and offer it to the back door. It remains a door, habibi; the garden doesn’t take tips.",
      "room_efead1c6xfh7c_bd/hs_efead1c6bnokr_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a page where one snake appears to be considering another snake’s career prospects, then hold it toward the back door. The garden remains unimpressed, habibi.",
      "room_efead1c6xfh7c_bd/hs_efead1c6bnokr_bd/item_efead1c6k12sp_bd": "You drag the tangled wire toward the back door, but it doesn’t reach the garden—or untangle, or improve anybody’s life. Guy’s hi-fi remains unimpressed.",
      "room_efead1c6xfh7c_bd/hs_efead1c6bnokr_bd/item_efead1c69x7o4_bd": "You press Guy’s soft red bandana against the back door. It remains a bandana, the door remains a door, and the garden continues to be impressively unhelpful.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/item_efead1c6uhipf_bd": "You tuck the five thousand lira into a mailbox. It fits, technically; the electricity bill inside remains unimpressed. Teta meant lunch, ya zalameh.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/item_efead1c65yb6q_bd": "You flip through Guy’s sketchbook and compare its finest snakes with the dented mailboxes. The snakes decline to sort the AUB flyers or pay anyone’s electricity bill; still, that one with the suspiciously human eyebrows has potential.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/item_efead1c6k12sp_bd": "You poke the tangled speaker wire at the mailboxes. Nothing happens, except one of the AUB flyers looks even less interested in being opened.",
      "room_efead1c6xfh7c_bd/hs_efead1c65b16m_bd/item_efead1c69x7o4_bd": "You wipe a mailbox with Guy’s bandana. It comes away slightly shinier and no wiser; the AUB flyers remain undefeated.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/item_efead1c6f4lp3_bd": "You decide the upstairs flats can keep their laundry and bicycle for another day. “Later,” you say, and Guy’s room waits downstairs—the good speakers, the clean needle, and the only crew worth climbing stairs for.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the stairs. They remain unmoved, though the laundry looks tempted. Guy’s room is downstairs, ya zalameh.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the stairs, as if the neighbours might be impressed by a particularly well-rendered snake. They remain upstairs, mysteriously unmoved; Guy’s room is still downstairs, ya zalameh.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/item_efead1c6k12sp_bd": "You drape the tangled wire across the stairs. It looks less like a cable and more like a small, defeated octopus; upstairs remains stubbornly upstairs.",
      "room_efead1c6xfh7c_bd/hs_efead1c6tdo09_bd/item_efead1c69x7o4_bd": "You press the bandana to the stairs. They remain stubbornly stairs, and Guy’s room remains downstairs, habibi.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and hold it up to the bare bulb. The light doesn’t improve, and the bulb declines to buy you a sandwich. Teta’s advice remains annoyingly solid.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook beneath the bare bulb, as if the good paper might finally explain the electricity. The bulb keeps doing its one job; the snakes remain unimpressed.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/item_efead1c6k12sp_bd": "You loop the tangled speaker wire around the bare bulb. The room gains no extra bass, and the bulb—steady since 1994—declines to become a lamp with opinions.",
      "room_efead1c6xfh7c_bd/hs_efead1c6635jq_bd/item_efead1c69x7o4_bd": "You dab the bandana at the bare bulb. It comes away just as clean, and the bulb continues its four-year shift without comment.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/item_efead1c6f4lp3_bd": "You say, “Later,” and Guy gives you a calm little nod, like time has just been informed of its options. He keeps drawing on the notepad; you pass him the papers from the coffee table, and he starts rolling with the unhurried confidence of a guy whose two-paper trick has its own reputation.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/item_efead1c6uhipf_bd": "You offer Guy the folded five-thousand like it’s a rolling paper. He glances up from his drawing. “Generous, habibi, but I can’t roll with national currency.”",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/item_efead1c65yb6q_bd": "You offer Guy the sketchbook. He studies the cover, then his notepad. “Nice paper,” he says, unhurried. “But I’m drawing on this one, ya zalameh.” The rolling papers stay on the coffee table, quietly judging your priorities.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/item_efead1c6k12sp_bd": "You hold out the tangled wire. Guy looks at it, then at you. “That’s not the cable, ya zalameh.” He goes back to his drawing, perfectly willing to wait. On the coffee table, the rolling papers are right there.",
      "room_efead1c6hf0t0_bd/hs_efead1c661vwg_bd/item_efead1c69x7o4_bd": "You hand Guy the bandana. He considers it, then the drawing, then the bandana again. “Nice. Not rolling papers, though, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/item_efead1c6f4lp3_bd": "Guy gives you the look of a man whose hands are occupied by absolutely nothing, then nods toward the door. Three short knocks, one long: Wael’s knocking code, apparently designed by a committee of one. You head over. “Yalla,” Guy says, fresh spliff tucked behind his ear. “Let the DJ in.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/item_efead1c6uhipf_bd": "You offer Guy the five thousand lira. He glances at the notes, then at the door—three short knocks and one long—because even Teta’s sandwich money can’t answer Wael’s knock for you. “Yalla,” he says, nodding toward it.",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/item_efead1c65yb6q_bd": "Guy glances from your sketchbook to the door. “Nice snake,” he says, as Wael’s three-short, one-long knock lands again; the door, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled speaker wire. He looks from it to you, then toward Wael’s three-short-one-long knock. “Nice cable. Door first, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6gsa46_bd/item_efead1c69x7o4_bd": "You offer Guy the bandana. He looks at it, then at the spliff behind his ear. “Nice, habibi. But unless it can answer the door, yalla.” The knock comes again: three short, one long.",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/item_efead1c65yb6q_bd": "You pull Guy’s big black sketchbook from the records by the hi-fi—half snakes, half better snakes—and hand it over. Guy flips to the good paper and starts sketching an Overbliss logo; Nadim forgets the speaker cable immediately and launches into a pitch for a thousand CDs. Guy nods, calm as ever. “Khalas. Cable saved.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/item_efead1c6uhipf_bd": "You offer Guy the five thousand, but he’s busy watching Nadim model the speaker cable as high fashion. “Keep it for a sandwich, habibi,” he says, nodding toward the sketchbook wedged by the hi-fi. “That’s the real solution.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled wire. He glances at it, then at Nadim wearing the good cable like a very expensive scarf. “Nice, habibi. But I think the problem needs a logo.” Somewhere in the records, his sketchbook waits to be rescued.",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/item_efead1c69x7o4_bd": "You offer Guy the bandana. He gives it a look, then points at the speaker cable draped around Nadim’s neck. “Nice, but I need the sketchbook before I can distract him properly, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6a3prn_bd/item_efead1c6fyagj_bd": "You flip the 250-lira coin toward Guy, who catches it without looking. “Nice,” he says, while Nadim continues wearing the good speaker cable like a scarf. Your coin won’t distract him from the cable—or find Guy’s sketchbook wedged in the records by the hi-fi, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/item_efead1c6f4lp3_bd": "“Later,” you tell Guy. He nods, pleased with the drawing, and hands you the Overbliss logo for Nadim—quick, before the singer unplugs anything else. For once, your timing is massive, wlak.",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/item_efead1c6uhipf_bd": "You offer Guy the folded five thousand like his drawing might accept payment. He glances at it, then at the Overbliss logo: “Give that to Nadim before he unplugs the speakers, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/item_efead1c65yb6q_bd": "Guy glances at the sketchbook, then at you. “The snakes are excellent, habibi. But Nadim needs the Overbliss logo, not more evidence that Guy can draw snakes.”",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled wire. He looks from it to you, then back to his drawing; ya zalameh, the Overbliss logo is still Nadim’s problem, and the wire is still a wire.",
      "room_efead1c6hf0t0_bd/hs_efead1c656fv6_bd/item_efead1c69x7o4_bd": "You offer Guy his own bandana. He looks from it to his drawing, then back to you. “Merci, habibi, but I’m not sweating on the logo.” Nadim, meanwhile, is eyeing the cable. Yalla—give him the drawing.",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Later. Not today.” He nods, unhurried, while Nadim keeps praising the logo and asking for any cable at all; Guy points toward the nest of junk wire behind the hi-fi. You crouch down, and there it is: one good cable, hiding among several cables that have never helped anyone.",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand like it might buy you a cable. Guy glances at the notes, then at the wire nest behind the hi-fi. “Nice try, habibi. It’s not a shop.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/item_efead1c65yb6q_bd": "You show Guy the sketchbook. He admires a snake, then points past Nadim’s logo pitch to the junk-wire nest behind the hi-fi. “Nice paper, habibi. But it won’t carry a signal.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled speaker wire. He inspects the nest, then the stereo, with the calm of a man who already knows how this ends. “Tayyeb, it’s technically a cable,” he says. “Let’s not insult the speakers.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6x6miq_bd/item_efead1c69x7o4_bd": "You offer Guy the bandana. He eyes it, then the wire nest behind the hi-fi. “Nice fabric. Still not a cable, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Later. Not today.” He nods and goes back to drawing, unbothered; the record is here, Nadim has vanished, and Wael has left his lighter behind—so he’ll be back, probably from Kababji. His headphones were last seen on the white plastic chair in the garden. “Eventually,” Guy says, pencil moving. You settle in. Yalla, then.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/item_efead1c6uhipf_bd": "You offer Guy the folded five-thousand. He glances up from his drawing. “For what, ya zalameh?” Fair question; the record’s here, and Guy isn’t selling you anything but the company.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/item_efead1c65yb6q_bd": "You offer Guy the sketchbook, but he’s already elbow-deep in a snake with excellent posture. He glances at the cover. “Good paper,” he says, and goes back to drawing; the record remains unplayed, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled speaker wire. He glances up from his drawing, then at the nest in your hand. “Nice cable,” he says, and goes back to work. You both know that’s not the problem.",
      "room_efead1c6hf0t0_bd/hs_efead1c6pptex_bd/item_efead1c69x7o4_bd": "Guy glances up from his drawing as you offer him the bandana, then considers it with the calm of a man who has survived worse ideas. “Merci, habibi,” he says, and goes back to work; the record remains unplayed, and the bandana remains clean-ish.",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Later.” He gives you an amused look while Wael takes over, shifting the speakers off the floor and angling them toward the cushions; apparently step one of the plan is making the room listen properly, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to Guy, like cash can convince a speaker to climb. He glances at the note, then at Wael measuring the cushions with his eyes. “Nice try, habibi. This one needs furniture, not financing.”",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/item_efead1c65yb6q_bd": "You offer Guy’s Sketchbook as if the good paper might help with the speakers. He glances at Wael arranging cushions like a sound engineer in a very small kingdom, then hands it back. “Nice snakes, though.”",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/item_efead1c6k12sp_bd": "You offer Guy the tangled wire, as if he’s the sort of artist who can make a plan out of anything. He gives it one calm look; Wael is already lifting the speakers onto the cushions, so your cable-based contribution can wait, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c65hkud_bd/item_efead1c69x7o4_bd": "You wave the bandana at Guy. He glances from it to Wael’s speakers, still on the floor, and gives you the patient look of someone watching a very soft tool fail at carpentry.",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/item_efead1c6f4lp3_bd": "“Later,” you say to Guy. He gives you the cable with the calm generosity of a man lending out a priceless artifact to someone who once asked where the guitars were. You plug it into the amp; the speakers sit at exactly the right height, waiting. “Tayyeb,” Guy says. “Now we listen.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to Guy. He looks from the note to the speakers, then back at you. “The cable, habibi. Money can’t make it longer.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/item_efead1c65yb6q_bd": "You show Guy the sketchbook. He studies the snakes with the calm respect of a man who has seen better snakes, then turns back to the speaker cable. “Nice paper, though.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/item_efead1c6k12sp_bd": "You hand Guy the tangled speaker wire. He looks at it, then at you. “Wlak, that’s the bad one.” The good cable is still waiting by the amp, rescued from Nadim and apparently harder to find than Nadim himself.",
      "room_efead1c6hf0t0_bd/hs_efead1c6eho76_bd/item_efead1c69x7o4_bd": "You offer Guy the bandana. He eyes it, then the amp. “Nice, but unless it’s secretly a cable, ya zalameh…” The speakers remain ready; the good wire is still with Nadim.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Later. Not today.” He gives you a calm nod; Wael mouths the bassline while you turn the amp’s bass knob, one careful click at a time. “Massive,” he says at last, and Guy smiles. Khalas: now the room is ready for the record.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand like Guy’s amp accepts tribute. It doesn’t; Wael is busy mouthing a bassline at the knob, and your money remains tragically unqualified.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a page of snakes and hold it up. Guy gives it the calm respect due to excellent snakes; Wael keeps mouthing the bassline, entirely unmoved. The amp knob remains unadjusted.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/item_efead1c6k12sp_bd": "You hand Guy the tangled speaker wire. He looks at the nest, then at the perfectly connected hi-fi. “It’s already plugged in, habibi.” Wael keeps silently mouthing the bassline, waiting for his knob.",
      "room_efead1c6hf0t0_bd/hs_efead1c6t1ewu_bd/item_efead1c69x7o4_bd": "You wave the bandana at Guy. He regards it with the calm of a man who has already plugged in everything useful; Wael keeps silently mouthing the bassline, waiting for the knob. Yalla, try the amp.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Later. Not today.” He gives the dusty needle a look, then the bass dial a tiny, satisfied nod. “Tayyeb. Tomorrow, then.” His red bandana stays put on the green blanket, and for once the room’s best setup isn’t the thing you came to fix.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand like Guy’s red bandana might accept payment. Guy glances at the notes, then the dusty needle. “Unless your teta knows where they sell a clean one, habibi…” The bass stays set; the record waits.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/item_efead1c65yb6q_bd": "You show Guy the sketchbook, hoping the snakes can sort out the turntable. He glances at the dusty needle. “Nice paper,” he says. “Still not a cleaning cloth, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/item_efead1c6k12sp_bd": "You hand Guy the tangled speaker wire. He studies it, then the speaker: “This is the cable we’re already using, ya zalameh.” The bass is set; the dusty needle remains dusty. The bandana, at least, is still a bandana.",
      "room_efead1c6hf0t0_bd/hs_efead1c6mreyl_bd/item_efead1c69x7o4_bd": "You offer Guy’s bandana to Guy. He looks from it to you, then back to the dusty needle. “Nice try, ya zalameh. Still not a record cleaner.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/item_efead1c6f4lp3_bd": "You tell Guy, “Not today.” He nods, unhurried, and finishes rolling the occasion spliff; the speakers are at sitting-ear height, the bass is dialed in, and the clean needle waits. Somewhere between “where are the guitars?” and the first proper drop, you’re already leaning closer.",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/item_efead1c6uhipf_bd": "Guy glances at the folded five thousand and keeps rolling, calm as ever. Teta’s sandwich budget can survive this, habibi; the record won’t take cash.",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/item_efead1c65yb6q_bd": "You show Guy the sketchbook. He pauses mid-roll to admire a snake, then hands it back. “Nice. Still waiting on that needle, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/item_efead1c6k12sp_bd": "You hand Guy the tangled wire. He studies it, then the spliff between his fingers. “Tayyeb. Which one do you want me to fix first?” The record’s still waiting, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c66wd8c_bd/item_efead1c69x7o4_bd": "You offer Guy the bandana. He looks at it, then at the neatly rolled spliff in his hand. “Nice, habibi. But unless it’s learned to cue a record, we’re good.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/item_efead1c6hr9x3_bd": "You hand Nadim the sketchbook page. He stops mid-pitch, eyes fixed on the long-haired warrior beneath OVERBLISS in thorny letters. “This is the cover. The CD, the thousand copies, the tour—habibi, the T-shirts!” He carefully takes the drawing, somehow still wearing Guy’s speaker cable like a sash. “Guy, we have our cover!” For once, one of Nadim’s projects has a beginning and an actual object.",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/item_efead1c6uhipf_bd": "You offer Nadim the folded five-thousand-lira note. He blinks, then launches into the CD budget, the tour T-shirts, and how the cover needs “something huge”—while Guy’s speaker cable slides another inch off his shoulder. Clearly, cash isn’t the missing piece.",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/item_efead1c65yb6q_bd": "You open Guy’s sketchbook to a page of snakes and hold it out to Nadim. He’s already pitching the Overbliss cover, the T-shirts, and a tour with no van; he barely glances at the paper. “Good snakes,” he says, cable still over his shoulder. “But I need a cover, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/item_efead1c6k12sp_bd": "You offer Nadim the tangled nest of wire. He glances at it, then past you, already pitching the Overbliss cover to an imaginary record label. “Nice, but I need a design, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6biuua_bd/item_efead1c69x7o4_bd": "You offer Nadim the red bandana. He glances at it, then at the cable on his shoulder, already explaining how the Overbliss cover needs “more fire, but tasteful.” The bandana gets no design brief.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/item_efead1c6k12sp_bd": "You hand Nadim the tangled wire; he takes it without looking up from the Overbliss logo, already describing the T-shirts. “Perfect, ya zalameh.” He plugs it in, and the speakers give a clean little thump—Nadim beams like the first thousand CDs just sold.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/item_efead1c6uhipf_bd": "You offer Nadim the folded five thousand. He glances at it, then back at the Overbliss logo, already explaining how the T-shirts will pay for a thousand CDs. “Cable, habibi,” he says, and forgets the money is there.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/item_efead1c65yb6q_bd": "You offer Nadim Guy’s sketchbook. He flips past a few snakes, barely slows down at the Overbliss logo, and asks if there’s a speaker cable tucked in the back. There isn’t, ya zalameh—just one particularly confident cobra.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/item_efead1c69x7o4_bd": "You wave the bandana at Nadim. He squints through it at the Overbliss logo, then asks if it can be printed on T-shirts; the speaker cable remains a mystery, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c6td8vx_bd/item_efead1c6fyagj_bd": "You flip the 250-lira coin at Nadim. He catches it mid-pitch, mistakes it for band funding, and immediately starts pricing a thousand T-shirts; the speaker cable remains a mystery.",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/item_efead1c6f4lp3_bd": "“Later,” you tell Wael, which is brave, considering he’s been waiting all week to play the record. He nods, solemn as a surgeon, and starts with the speakers: up to sitting-ear height, good cable in, bass dialed by ear, needle clean. “Now,” he says. “Massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/item_efead1c6uhipf_bd": "You offer Wael five thousand lira. He looks at the folded notes, then at the speakers. “Massive, habibi—but the bass doesn’t take tips.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/item_efead1c65yb6q_bd": "You flash Guy’s sketchbook at Wael, who studies it like it might contain the correct cable diagram. “Nice snake,” he says. The speakers remain where they are; Massive, but not helpful.",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/item_efead1c6k12sp_bd": "You offer Wael the tangled wire. He looks at the nest, then at you. “This is not the good cable, Gus.” Massive disappointment, delivered at cable volume.",
      "room_efead1c6hf0t0_bd/hs_efead1c6wpc8i_bd/item_efead1c69x7o4_bd": "You offer Wael the bandana. He gives it the same serious look he gives a record groove. “Massive, but no.”",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/item_efead1c6f4lp3_bd": "You tell Wael, “Later. Not today,” and leave the speakers where they are. He gives you a solemn nod, like you’ve just spared the hi-fi a difficult conversation. Around you, the room keeps its easy Saturday pace: record waiting, spliff travelling, nobody in a hurry.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the speakers. Wael gives the bills a solemn look, then the speakers. “No weight down there,” he says. The money, somehow, remains innocent.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the speakers, as if a snake with excellent taste in paper might know what to do. The speakers stay on the floor, pointed at nothing in particular; Wael’s verdict about their weight remains tragically unchallenged.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/item_efead1c6k12sp_bd": "You crouch by the speakers and offer the tangled wire to their floor-level existence. Nothing clicks, nothing improves; Wael watches with the grave patience of a man who has explained speaker height before.",
      "room_efead1c6hf0t0_bd/hs_efead1c624y3a_bd/item_efead1c69x7o4_bd": "You drape the clean-ish bandana over one speaker. It absorbs no bass whatsoever, but Wael gives you a look like you’ve insulted the entire science of sound.",
      "room_efead1c6hf0t0_bd/hs_efead1c6kb052_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and offer it to the speakers. They remain deeply unimpressed; even Wael can’t buy sitting ear height with pocket money.",
      "room_efead1c6hf0t0_bd/hs_efead1c6kb052_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the speakers, as if the good paper might contain instructions for moving furniture. Guy’s snakes offer no comment; the speakers remain stubbornly on the floor.",
      "room_efead1c6hf0t0_bd/hs_efead1c6kb052_bd/item_efead1c6k12sp_bd": "You lift the tangled wire toward the speakers, as if the right knot might reveal itself. Wael watches in silence; apparently even he can tell this is not the cable.",
      "room_efead1c6hf0t0_bd/hs_efead1c6kb052_bd/item_efead1c69x7o4_bd": "You drape the bandana over a speaker. It looks softer now, habibi, but it’s still on the floor; Wael gives you a look that says fabric is not a record crate.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the speakers. Wael glances over. “Unless they take Lebanese lira for better bass, ya zalameh…” He nudges a speaker half a centimeter anyway.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the speakers, but the snakes offer no advice on speaker placement. Wael nudges one by half a centimeter anyway. “Massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/item_efead1c6k12sp_bd": "You lift the tangled wire toward the speakers. Wael looks at the nest, then at you. “That’s not the cable, habibi.” He turns one speaker by half a centimeter, because apparently the other half was essential.",
      "room_efead1c6hf0t0_bd/hs_efead1c6cxrl8_bd/item_efead1c69x7o4_bd": "You dab the speakers with the bandana. They remain acoustically unimpressed, while Wael shifts one a devastating half-centimeter. “Not a cleaning cloth, habibi,” he says. “Also, they’re already clean.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/item_efead1c6f4lp3_bd": "You turn the big Technics knobs until the snare stops sounding like someone dropping a toolbox down stairs. Guy checks the good cable, Wael gives one solemn nod, and the room settles into that rarest of miracles: a hi-fi doing exactly what it’s told, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and offer it to the Technics. The amp accepts neither currency nor snack advice, habibi; it keeps thumping away on the dubbed tape while the good cable trails out back, unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/item_efead1c65yb6q_bd": "You open Guy’s big black sketchbook beside the amp, as if the better snakes might know their way around a Technics. The dubbed tape keeps clattering away; the amp remains an amp, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/item_efead1c6k12sp_bd": "You work the tangled wire around the Technics amp’s back panel. It finds no socket, only new and exciting ways to knot itself; the dubbed tape keeps snaring away, unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c6jrkyz_bd/item_efead1c69x7o4_bd": "You drape the bandana over Guy’s amp. The snare keeps going, entirely unmoved; even the red fabric knows better than to interfere with the good cable.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/item_efead1c6f4lp3_bd": "You leave the amp alone. It sits there looking expensive and slightly offended, while the speakers wait on the floor and Wael’s rule remains unbroken. Good call, habibi: first get them up, then give the sound somewhere proper to go.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/item_efead1c6uhipf_bd": "You hold the folded five thousand lira up to the amp. It doesn’t take money, habibi; it’s currently missing the good cable, and Wael’s rule is no plugging in until the speakers are up.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/item_efead1c65yb6q_bd": "You open Guy’s sketchbook beside the amp, as if the snakes might know about speaker wiring. They look excellent and remain completely unhelpful; Wael’s rule still stands, ya zalameh: speakers up before anything gets plugged in.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/item_efead1c6k12sp_bd": "You bring the tangled wire to the amp. The bare terminals stare back like they’ve heard this one before; Wael’s rule still stands: speakers up first, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c61l3qj_bd/item_efead1c69x7o4_bd": "You drape the bandana over the amp, which is softer than a lighter but not, technically, a cable. The speakers stay where they are; Wael’s rule remains undefeated, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/item_efead1c6gha69_bd": "You fit the thick cable’s gold tips into the amp terminals, and Guy gives the connection a calm little tug. The speakers are ready, the bass is waiting, and Nadim’s shoulder is officially no longer part of the sound system. Yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and hold it to the amp’s bare terminals. Guy gives the notes a thoughtful look. “Good cable, habibi—not financial backing.”",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/item_efead1c65yb6q_bd": "You run the good paper over the amp, which declines to become a drawing surface. The speakers wait at ear height; the bare terminals look mildly offended, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/item_efead1c6k12sp_bd": "You feed the tangled wire into the amp’s bare terminals. It holds together through sheer optimism, which isn’t quite the same as carrying a signal. Guy watches, calm as ever. “Nice nest, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c67db44_bd/item_efead1c69x7o4_bd": "You press the bandana to the amp’s bare terminals. It absorbs no electricity, but does pick up a faint smell of dust and Guy’s room. “Good thinking,” Guy says, with the calm generosity of someone who expected this.",
      "room_efead1c6hf0t0_bd/hs_efead1c6i7acm_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and hold it to the bass knob. Wael watches, then nods gravely: “Money is not bass, habibi.” The knob stays right where it is.",
      "room_efead1c6hf0t0_bd/hs_efead1c6i7acm_bd/item_efead1c65yb6q_bd": "You hold the sketchbook beside the bass knob, as if one of Guy’s better snakes might know the frequency. Wael mouths a kick drum at you; the knob remains unimpressed. Yalla, use your hand.",
      "room_efead1c6hf0t0_bd/hs_efead1c6i7acm_bd/item_efead1c6k12sp_bd": "You feed the tangled wire into the amp like it might negotiate better bass. Wael mouths the kick while you turn the knob; it just gets woollier, habibi—not heavier.",
      "room_efead1c6hf0t0_bd/hs_efead1c6i7acm_bd/item_efead1c69x7o4_bd": "You wrap the bandana around the bass knob and give it a careful turn. Wael mouths a bassline at you with grave authority; the amp remains unmoved, and the bandana is now less clean than anyone knows.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and hold it up to the amp. The amp declines to sell you dinner, or a bass adjustment; Wael watches the knob like a guard dog. Yalla, try buying a sandwich with it instead.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a snake giving the amp a stern lecture. The amp remains unmoved, and Wael’s bass knob stays safely beyond your jurisdiction.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/item_efead1c6k12sp_bd": "You feed the tangled wire toward the amp. It becomes a smaller, sadder tangle; the bass knob remains untouched, by order of Wael and possibly God.",
      "room_efead1c6hf0t0_bd/hs_efead1c65i28k_bd/item_efead1c69x7o4_bd": "You press Guy’s bandana to the amp, as if the bass knob might respond to soft furnishings. Wael gives you the look reserved for people who touch the bass knob, and the bandana remains clean-ish.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/item_efead1c6f4lp3_bd": "You give the turntable a respectful “Later.” It sits empty and patient, like it knows Wael’s record is the only appointment that matters today.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and lay it on the turntable. Guy’s old Ziad record doesn’t start, and the money still won’t buy you out of Wael’s music lesson. Yalla, try the Kababji.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the empty turntable. The snakes look like they know what a record is, but they’re not telling.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/item_efead1c6k12sp_bd": "You feed the tangled wire toward the turntable. Guy gives the nest a look of calm professional disappointment; tayyeb, it’s still a nest, and the record’s still missing.",
      "room_efead1c6hf0t0_bd/hs_efead1c6j8lwm_bd/item_efead1c69x7o4_bd": "You dab the empty turntable with Guy’s bandana. It comes away just as clean, which is more than you can say for the sleeve of his Ziad Rahbani records.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/item_efead1c6f4lp3_bd": "You decide the turntable can wait. Guy gives you a calm nod, like you’ve just passed a test nobody mentioned, and reaches for the cable: first the speakers, then the bass, then the needle. “Tayyeb,” he says. “Now we listen properly.”",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside Mazin’s record. The turntable remains unimpressed; it takes cables and a clean needle, not lunch money. Yalla, habibi—try the Kababji counter before you start bribing the hi-fi.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the turntable, but the snakes offer no advice on needle pressure. The record stays where it is, waiting for the system to be ready; even the better snakes know not to rush a premiere, yalla.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/item_efead1c6k12sp_bd": "You try to connect the tangled wire, but it’s more knot than cable—an elaborate little protest against sound. Guy’s turntable waits patiently beside Mazin’s record; nobody’s lowering that needle until the system’s ready, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c66xor0_bd/item_efead1c69x7o4_bd": "You give the turntable a soft pat with the bandana, as if it’s feeling delicate. The record remains stubbornly beside it, and the system remains not ready. Nice try, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/item_efead1c69x7o4_bd": "You fold Guy’s soft red bandana and give the needle a careful wipe. Wael watches like a surgeon, then lowers it onto the record: the first beat lands clean, and his shoulders unclench. “Massive.” Guy nods. “See? Cloth. Not lighter.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/item_efead1c6uhipf_bd": "You unfold the five thousand lira beside the turntable. The needle remains dusty, and Wael gives you a look that says even Teta’s money doesn’t make good cleaning cloth, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/item_efead1c65yb6q_bd": "You give the needle a cautious look, then the turntable a sketch of a snake wearing headphones. Guy studies it, nods. “Good snake. Still won’t clean the needle, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/item_efead1c6k12sp_bd": "You hold the tangled wire up to the turntable, as if the needle might respect confidence. Wael spots the dusty tip and gives you a look; tayyeb, you’ll need something soft, not a cable.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7vwr_bd/item_efead1c6fyagj_bd": "You flick the 250-lira coin toward the turntable. It lands with a clonk that makes Wael look up from the dusty needle like you’ve insulted his entire family. “Wlak, no.” Something soft, cloth.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7koe_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand like it might contain instructions. It doesn’t; the needle stays politely in its groove, and Guy gives you a look that says the system accepts records, not lunch money.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7koe_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook to a page where one snake appears to be judging another, then try to drop the needle with it. The record remains politely on the platter; even the better snakes can’t work a turntable, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7koe_bd/item_efead1c6k12sp_bd": "You lower the tangled wire toward the record. Guy watches, patient as ever. “That’s not how needles work, habibi.” The proper cable is already in place; your wire is just making a strong case for staying tangled.",
      "room_efead1c6hf0t0_bd/hs_efead1c6m7koe_bd/item_efead1c69x7o4_bd": "You use Guy’s Bandana to drop the needle. It lands softly on the record, which is not the same as landing in the groove; Wael gives you a look usually reserved for bad cables.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside Guy’s sketchbook. The notes can buy you a sandwich, habibi; they can’t persuade a drawing to become a receipt.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/item_efead1c65yb6q_bd": "You open the sketchbook on itself, which is ambitious even by your standards. The snakes have no comment; Guy’s good paper remains good paper.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/item_efead1c6k12sp_bd": "You poke the tangled speaker wire at Guy’s sketchbook, as if the drawings might need a signal. Nothing happens; Guy’s art remains stubbornly analog, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c6fzmb8_bd/item_efead1c69x7o4_bd": "You dab the soft red bandana against Guy’s sketchbook. The black cover remains aggressively black; congratulations, you’ve invented dusting with extra steps.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/item_efead1c6uhipf_bd": "You fish out Teta’s five thousand and press it against the tangled wire. The wire remains unimpressed; even a Kababji sandwich can’t fix this mess, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/item_efead1c65yb6q_bd": "You crouch behind the hi-fi and consult the sketchbook: several snakes appear to have better cable management than you do. The speaker wire remains a nest of cheap, ancient misery. Guy glances over. “Nice drawing, though.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/item_efead1c6k12sp_bd": "You tug one end free and the whole nest comes along, like it’s been waiting years for this. No miracle cable upgrade, wlak—just more wire in your hand.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u8zxu_bd/item_efead1c69x7o4_bd": "You dab the bandana at the speaker wire. The knots remain unmoved; Guy’s hi-fi has never needed a napkin, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/item_efead1c6uhipf_bd": "You tuck the folded five thousand into Guy’s red bandana. The bandana remains a bandana, the money remains money, and Teta’s sandwich budget has entered a deeply unhelpful alliance.",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/item_efead1c65yb6q_bd": "You press Guy’s Sketchbook against the bandana. The snakes remain unimpressed, and the bandana remains a bandana. Yalla, back to the record.",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/item_efead1c6k12sp_bd": "You prod Guy’s bandana with the tangled wire. The nest catches one corner, then lets go; Guy’s red bandana remains undefeated, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c785fk7_bd/item_efead1c69x7o4_bd": "You dab Guy’s bandana against Guy’s bandana. The room remains defiantly bandana-shaped, wlak.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i7gc3_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the rolling papers. Guy glances over, amused. “Unless the notes roll better than the papers, habibi…” The ashtray remains unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i7gc3_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the rolling papers, as if the good paper might have some practical application. It’s mostly snakes, habibi; none of them know the two-paper trick.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i7gc3_bd/item_efead1c6k12sp_bd": "You offer Guy the speaker wire. He eyes the hopeless nest, then the rolling papers. “Unless you’ve invented a new way to roll cables, ya zalameh…” He goes back to the two-paper trick.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i7gc3_bd/item_efead1c69x7o4_bd": "You try to use Guy’s soft red bandana on the rolling papers. Guy glances over, unimpressed: “Nice cloth, habibi. Still not a paper.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand and offer it to the ashtray. It remains unimpressed; the rolling papers, meanwhile, are still better at making little creases than anything you’ve tried all week.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/item_efead1c65yb6q_bd": "You study the ashtray, then Guy’s sketchbook, as if the good paper might have a secret purpose. It doesn’t; your practice paper remains on the rug, enjoying a more productive evening.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/item_efead1c6k12sp_bd": "You feed the tangled wire toward the ashtray, which is not, technically, a speaker. The practice paper watches from the rug, unimpressed; Guy lets you discover this at your own pace.",
      "room_efead1c6hf0t0_bd/hs_efead1c7o7k4j_bd/item_efead1c69x7o4_bd": "You dab the bandana at the ashtray, which is not how ashtrays work, even in theory. The practice paper remains on the rug, unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside Wael’s lighter. Neither is impressed; the lighter waits for Wael, and the money is still good for a Kababji sandwich, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/item_efead1c65yb6q_bd": "You bring Guy’s sketchbook down toward Wael’s lighter, as if the good paper and the good flame might have something to say to each other. Nothing happens; the snakes remain unlit, and Wael’s lighter waits patiently for Wael.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/item_efead1c6k12sp_bd": "You loop the tangled wire around Wael’s lighter. It remains a lighter, and the wire remains a small electrical tragedy; Wael will want both back, eventually.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ugsvh_bd/item_efead1c69x7o4_bd": "You fold Guy’s soft red bandana around Wael’s lighter. It makes the lighter softer, technically, but not in any way that helps; somewhere, Wael is already wondering where it went.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the ashtray. Wael keeps his lighter well clear of both; the ashtray, tragically, does not accept tips.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/item_efead1c65yb6q_bd": "You flip open Guy’s sketchbook beside the ashtray. The snakes are good, but none of them know how to guard a needle; Wael keeps the lighter, wlak.",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/item_efead1c6k12sp_bd": "You prod the tangled speaker wire toward the ashtray. Guy watches the nest snag on a cigarette butt. “Nice cable, habibi. Shame about the sound.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7roppa_bd/item_efead1c69x7o4_bd": "You dab the bandana at the ashtray, accomplishing nothing except giving Guy’s table a very soft, very pointless wipe. Wael keeps the lighter well clear of the needle; priorities, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the record. The dark sleeve remains unimpressed; Mazin’s drum-and-bass import doesn’t accept sandwiches as payment, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/item_efead1c65yb6q_bd": "You open Guy’s Sketchbook beside the record, as if one of the better snakes might know what to do with it. The record remains in its dark sleeve, unimpressed; yalla, art can wait till after the listening.",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/item_efead1c6k12sp_bd": "You plug the tangled wire into the hi-fi, and the speakers give a small, offended click. Guy looks at the record, then at your handiwork. “That’s not the good cable, ya zalameh.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7ntrd7_bd/item_efead1c69x7o4_bd": "You dab the record with Guy’s bandana. It leaves behind one faint red thread and no improvement whatsoever; the needle remains the cleaning specialist, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/item_efead1c6uhipf_bd": "You unfold the five thousand lira beside the coffee table’s scorched rings. The comics don’t accept tips, habibi, and the tapes have already heard enough.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/item_efead1c65yb6q_bd": "You open Guy’s sketchbook on the coffee table. The snakes look unimpressed by the burn marks, and the coffee table declines to become a canvas. Yalla, try something else.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/item_efead1c6k12sp_bd": "You lay the tangled wire across the coffee table, where it joins the comics, tapes, and old burn marks in looking like it belongs. Nothing connects; the table remains deeply unimpressed, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7kyxgn_bd/item_efead1c69x7o4_bd": "You dab the bandana at a coffee-table ring. The ring remains; the bandana is now clean in a more specific way. Guy doesn’t look up. “Nice try, habibi.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beneath the warrior poster, as if the chain-and-blade situation might accept tribute. The warrior remains unimpressed, and Guy’s room stays exactly one sandwich away from your budget.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the warrior poster, as if the long-haired menace might critique your shading. He remains committed to looking metal; the sketchbook, khalas, offers no useful advice.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/item_efead1c6k12sp_bd": "You lift the tangled wire toward the warrior poster, as if the blade might need grounding. It doesn’t; Guy’s metal credentials remain intact, wlak.",
      "room_efead1c6hf0t0_bd/hs_efead1c7lt4v6_bd/item_efead1c69x7o4_bd": "You press Guy’s soft red bandana against the warrior poster. The chain-wearing legend remains unmoved; even he can tell this isn’t what bandanas are for, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/item_efead1c6uhipf_bd": "You flatten Teta’s five thousand lira against the CAUTION sign. The sign remains unmoved, and your sandwich budget is now involved in a dispute with workplace safety.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/item_efead1c65yb6q_bd": "You hold the sketchbook beside the CAUTION sign, as if the snakes might explain the sound system. They don’t; Guy’s drawn better ones, and Wael’s sign remains deeply unhelpful.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/item_efead1c6k12sp_bd": "You wave the tangled wire at the CAUTION sign. Wael gives you a look that says even his cables have standards. Nothing happens, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7gxk7m_bd/item_efead1c69x7o4_bd": "You drape the soft red bandana over the CAUTION sign. It looks less like a warning now and more like the sign has joined a very small, badly dressed band. Wael gives it a serious nod. “Massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira beside the taxi light, as if Guy’s shelf might accept payment for whatever taxi-related mystery it represents. The light remains gloriously unhelpful; your money still smells faintly of lunch.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/item_efead1c65yb6q_bd": "You balance Guy’s sketchbook on the TAXI light. The snakes remain excellent; the taxi remains unlicensed for art, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/item_efead1c6k12sp_bd": "You loop the tangled speaker wire around the TAXI light. The light doesn’t come on, and Guy’s hi-fi doesn’t get any more impressed; it’s just a taxi souvenir wearing a cheap little nest.",
      "room_efead1c6hf0t0_bd/hs_efead1c708uao_bd/item_efead1c69x7o4_bd": "You rub the soft red bandana over the TAXI light. It shines exactly as much as before, which is to say not enough to explain where Guy got it.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand over the sunlit blue sea, as if the poster might accept a bribe for better weather. It remains LIBAN, completely unhelpful; your sandwich money survives.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/item_efead1c65yb6q_bd": "You hold Guy’s Sketchbook up to the LIBAN poster, as if the better snakes might improve the sea. They don’t; the poster remains sunlit, blue, and completely unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/item_efead1c6k12sp_bd": "You hold the tangled wire up to the LIBAN poster. The blue sea remains unimpressed, habibi; it’s a poster, not a socket.",
      "room_efead1c6hf0t0_bd/hs_efead1c7vcybv_bd/item_efead1c69x7o4_bd": "You press the soft red bandana to the LIBAN poster. The sea remains blue, the sun remains smug, and Guy’s wall gains one faintly cleaner square. Khalas: still a poster.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/item_efead1c6uhipf_bd": "You press Teta’s folded five thousand lira against the KILL THE DJ sticker. Guy watches it fail to buy Wael’s silence. “Good try,” he says. Wael, already annoyed, mutters, “Massive.”",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/item_efead1c65yb6q_bd": "You open Guy’s sketchbook to a snake judging the KILL THE DJ sticker with the weary contempt of a music critic. The sticker remains unmoved; Wael, somewhere nearby, is probably taking it personally.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/item_efead1c6k12sp_bd": "You press the tangled speaker wire against the KILL THE DJ sticker. The sticker remains unimpressed; Wael, somewhere nearby, has already noticed.",
      "room_efead1c6hf0t0_bd/hs_efead1c74t7iw_bd/item_efead1c69x7o4_bd": "You press the soft red bandana against the KILL THE DJ sticker. Guy’s little provocation remains firmly attached to the wall, and your bandana has learned nothing useful.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/item_efead1c6uhipf_bd": "You try to pay the floor cushions five thousand lira. They remain unmoved, though one has clearly been eating better than you.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/item_efead1c65yb6q_bd": "You set Guy’s Sketchbook on a floor cushion. It swallows the book between two lumpy cushions and a smell of incense; the snakes look unimpressed, wlak.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/item_efead1c6k12sp_bd": "You tug the tangled speaker wire toward the floor cushions. It catches on nothing, fixes nothing, and remains a hopeless nest—unlike the cushions, which are already doing their job, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7u6glj_bd/item_efead1c69x7o4_bd": "You drape Guy’s Bandana over a floor cushion. It looks marginally more prepared for a picnic, ya zalameh; the cushion remains resolutely a cushion.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/item_efead1c6uhipf_bd": "You unfold the five thousand lira and press it to the open window, as if Bliss Street might accept a tip for taking the smoke. The shutters stay open, the smoke stays mostly in the room, and Guy’s window remains financially unimpressed.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/item_efead1c65yb6q_bd": "You crack open Guy’s Sketchbook by the window, as if one of its better snakes might know how to get smoke past the shutters. The smoke considers this, then drifts back into the room. Guy was very confident about the window, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/item_efead1c6k12sp_bd": "You hold the tangled wire up to the open window, as if Bliss Street might be hiding a socket. Guy watches, calm as ever. “Window needs less cable, habibi. More gravity.”",
      "room_efead1c6hf0t0_bd/hs_efead1c7i5inm_bd/item_efead1c69x7o4_bd": "You press the soft red bandana to the open window, as if Bliss Street has requested a tiny, cloth-based offering. The smoke carries on ignoring the plan; Guy’s theory remains popular mainly with Guy.",
      "room_efead1c6hf0t0_bd/hs_efead1c7npfo9_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and offer it to the door. The door remains unmoved by your financial argument; somewhere in the notes, Teta’s instruction to eat something still carries more authority.",
      "room_efead1c6hf0t0_bd/hs_efead1c7npfo9_bd/item_efead1c65yb6q_bd": "You flip open Guy’s Sketchbook and hold it up to the door, as if the hall might be impressed by your paper quality. The door remains a door, habibi; Guy’s snakes are better at getting out than you are.",
      "room_efead1c6hf0t0_bd/hs_efead1c7npfo9_bd/item_efead1c6k12sp_bd": "You try feeding the tangled speaker wire through the door to the hall. It reaches about three inches before the knot makes its position clear: even the cable has no plans to leave this room.",
      "room_efead1c6hf0t0_bd/hs_efead1c7npfo9_bd/item_efead1c69x7o4_bd": "You dab the clean-ish bandana at the door, as if the hall has developed a small, fabric-based emergency. It remains a door, habibi.",
      "room_efead1c6hf0t0_bd/hs_efead1c7igaq2_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and offer it to the door. The door, lacking both appetite and a Lebanese grandmother, remains closed; from the hall, the Kababji sandwich smells like a better investment.",
      "room_efead1c6hf0t0_bd/hs_efead1c7igaq2_bd/item_efead1c65yb6q_bd": "You open Guy’s sketchbook to a particularly convincing snake and hold it up to the door. The door remains unmoved; apparently even the good paper has limits, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7igaq2_bd/item_efead1c6k12sp_bd": "You offer the tangled speaker wire to the door, which declines to become part of the hi-fi. Behind you, the hall remains tragically cable-free.",
      "room_efead1c6hf0t0_bd/hs_efead1c7igaq2_bd/item_efead1c69x7o4_bd": "You press the soft red bandana to the door, as if it might know a secret. It stays a bandana; the door stays a door. Nice try, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7uz5jw_bd/item_efead1c6uhipf_bd": "You unfold Teta’s five thousand lira and hold it up to the door. The knocking doesn’t get cheaper; Wael’s three short knocks and one long one wait patiently for you to develop a better plan, ya zalameh.",
      "room_efead1c6hf0t0_bd/hs_efead1c7uz5jw_bd/item_efead1c65yb6q_bd": "You consult the sketchbook as the knock finishes its little drum solo. The snakes offer no advice about doors, but Wael’s the only one who knocks like that—yalla, go answer.",
      "room_efead1c6hf0t0_bd/hs_efead1c7uz5jw_bd/item_efead1c6k12sp_bd": "You wave the tangled speaker wire at the door. The knocks don’t become any more musical, and Wael is still outside; yalla, try the handle.",
      "room_efead1c6hf0t0_bd/hs_efead1c7uz5jw_bd/item_efead1c69x7o4_bd": "You press Guy’s soft red bandana to the door. The knocking stops; the bandana, mercifully, does not answer for you."
    }
  },
  "liveBridge": false,
  "previewBridge": false
};
