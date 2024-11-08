const words = {
        A: [
            { word: "ABBREVIATE", video: "https://www.youtube.com/embed/zcT4miFawiw", meaning: "To shorten a word or phrase" },
            { word: "ABOUT", video: "https://www.youtube.com/embed/wFkG56b4nuw", meaning: "On the subject of; concerning" },
            { word: "ABOVE", video: "https://www.youtube.com/embed/PKKSio0w4ao", meaning: "At a higher level or layer" },
            { word: "ABUSE", video: "https://www.youtube.com/embed/Kq4MHhAcXnw", meaning: "To use something to bad effect or for a bad purpose" },
            { word: "ACADEMIC", video: "https://www.youtube.com/embed/ts66KJwecg0", meaning: "Related to education and scholarship" },
            { word: "ACCEPT", video: "https://www.youtube.com/embed/pHBb2dnUoEY", meaning: "To consent to receive or undertake" },
            { word: "ACCENT", video: "https://www.youtube.com/embed/rkMA1_0UKPQ", meaning: "A distinctive mode of pronunciation" },
            { word: "ACCIDENT", video: "https://www.youtube.com/embed/G3z4RviEFLs", meaning: "An unfortunate incident that happens unexpectedly" },
            { word: "ACCOMPANY", video: "https://www.youtube.com/embed/_JfI3DaFB6w", meaning: "To go somewhere with someone" },
            { word: "ACCOMPLISH", video: "https://www.youtube.com/embed/dAHlrIfokgI", meaning: "To achieve or complete successfully" },
            { word: "APARTMENT", video: "https://www.youtube.com/embed/DyYb5Y2efP4", meaning: "A set of rooms forming an individual residence" },
            { word: "APE", video: "https://www.youtube.com/embed/ShLSWb9I6Jk", meaning: "A large primate" },
            { word: "APERTURE", video: "https://www.youtube.com/embed/1Mm2Tndykdk", meaning: "An opening, hole, or gap" },
            { word: "APIECE", video: "https://www.youtube.com/embed/84wLu8rKRcs", meaning: "To or for each one" },
            { word: "APOSTASY", video: "https://www.youtube.com/embed/FOXF_KB-fGc", meaning: "The abandonment of a religious belief" },
            { word: "APOSTROPHE", video: "https://www.youtube.com/embed/qWvcHtGqr44", meaning: "A punctuation mark used to indicate possession or omission of letters" },
            { word: "APPEAL", video: "https://www.youtube.com/embed/RiEkT8QZbz8", meaning: "To make a serious or urgent request" },
            { word: "APPEARANCE", video: "https://www.youtube.com/embed/8_GCUYb19w0", meaning: "The way that someone or something looks" },
            { word: "APPETITE", video: "https://www.youtube.com/embed/LA8ZTqDan_0", meaning: "A natural desire to satisfy a bodily need, especially for food" },
            { word: "APPLE", video: "https://www.youtube.com/embed/4gTs30ozIrA", meaning: "The round fruit of a tree of the rose family" },
            { word: "APPLICATION", video: "https://www.youtube.com/embed/tYha8yd1VKI", meaning: "A formal request to an authority for something" },
            { word: "APPRAISAL", video: "https://www.youtube.com/embed/9QEL3i8epDc", meaning: "An act of assessing something or someone" },
            { word: "APPREHENSIVE", video: "https://www.youtube.com/embed/MDv4eFfEE_c", meaning: "Anxious or fearful that something bad will happen" },
            { word: "APPROPRIATE", video: "https://www.youtube.com/embed/_F-Up9tepn8", meaning: "Suitable or proper in the circumstances" },
            { word: "APPROVE", video: "https://www.youtube.com/embed/pHBb2dnUoEY", meaning: "To officially agree to or accept as satisfactory" },
            { word: "APPROXIMATELY", video: "https://www.youtube.com/embed/U70SGZbZ3D8", meaning: "Almost, but not completely; roughly" },
            { word: "APRIL", video: "https://www.youtube.com/embed/XmC4lFrzPko", meaning: "The fourth month of the year" },
            { word: "APT", video: "https://www.youtube.com/embed/J7TLxf9c4dE", meaning: "Appropriate or suitable in the circumstances" },
        ],
        B: [
            { word: "BABY", video: "https://www.youtube.com/embed/ljYpx7ee9zg", meaning: "A very young child" },
            { word: "BACK", video: "https://www.youtube.com/embed/qp7gCgcExlA", meaning: "The rear surface of the human body" },
            { word: "BACKGROUND", video: "https://www.youtube.com/embed/VKEsTL_5FFQ", meaning: "The part of a scene behind the main figures" },
            { word: "BACKLASH", video: "https://www.youtube.com/embed/Kq3rzTF5eqE", meaning: "A strong negative reaction by a large number of people" },
            { word: "BACKPAY", video: "https://www.youtube.com/embed/-SnLQf6QBxA", meaning: "Payment for work done in the past" },
            { word: "BACKSPACE", video: "https://www.youtube.com/embed/c0jFt1GmwUA", meaning: "A key on a keyboard that moves the cursor back one space" },
            { word: "BACKSTAB", video: "https://www.youtube.com/embed/SaUj91jjANo", meaning: "To betray someone" },
            { word: "BACKSTROKE", video: "https://www.youtube.com/embed/zYAOoR2W2U0", meaning: "A swimming stroke performed on the back" },
            { word: "BACKYARD", video: "https://www.youtube.com/embed/haJ1RLVh7H8", meaning: "A yard behind a house or other building" },
            { word: "BACON", video: "https://www.youtube.com/embed/zFYoBYGU17g", meaning: "Cured meat from the back or sides of a pig" },
            { word: "BACTERIA", video: "https://www.youtube.com/embed/rHEQaN6YMp0", meaning: "Microscopic living organisms, usually one-celled, that can be found everywhere" },
            { word: "BAD", video: "https://www.youtube.com/embed/BUhCGlNOqRA", meaning: "Of poor quality or a low standard" },
            { word: "BAG", video: "https://www.youtube.com/embed/8Y83mMqnOi8", meaning: "A container made of flexible material with an opening at the top" },
            { word: "BAKE", video: "https://www.youtube.com/embed/Q0vD9t1u5bI", meaning: "To cook food by dry heat without direct exposure to a flame" },
            { word: "BALANCE", video: "https://www.youtube.com/embed/-8AWog889YQ", meaning: "An even distribution of weight enabling someone or something to remain upright and steady" },
            { word: "BALD", video: "https://www.youtube.com/embed/h81FEVG0nKg", meaning: "Having a scalp wholly or partly lacking hair" },
            { word: "BALL", video: "https://www.youtube.com/embed/vnmpdsQdbFc", meaning: "A spherical object used in various games and sports" },
            { word: "BALLOON", video: "https://www.youtube.com/embed/ymtzU09GfmU", meaning: "A small bag made of thin rubber or other light material that can be inflated with air or gas" },
        ],
        C: [
            { word: "CANDLE", video: "https://www.youtube.com/embed/k01PsVz_CWw", meaning: "A cylinder or block of wax or tallow with a central wick that is lit to produce light as it burns" },
            { word: "CANDY", video: "https://www.youtube.com/embed/EfJ4xLiX5IA", meaning: "Sweet food made with sugar or syrup combined with fruit, chocolate, or nuts" },
            { word: "CAKE", video: "https://www.youtube.com/embed/1o8VwwFYyrs", meaning: "A sweet baked food made from a mixture of flour, sugar, and other ingredients" },
            { word: "CALCULATOR", video: "https://www.youtube.com/embed/WqXc9r0fy2g", meaning: "A device used for making mathematical calculations, especially one that has a small digital display" },
            { word: "CALENDAR", video: "https://www.youtube.com/embed/wKBMYSQ99-k", meaning: "A chart or series of pages showing the days, weeks, and months of a particular year, or giving particular seasonal information" },
            { word: "CAMBER", video: "https://www.youtube.com/embed/W2wyv8TiO9k", meaning: "A slightly convex or arched shape of a road or other horizontal surface" },
            { word: "CAMERA", video: "https://www.youtube.com/embed/9NOTPgKtmsg", meaning: "A device used for taking photographs or making videos" },
            { word: "CAMPING", video: "https://www.youtube.com/embed/54Lkmk3RLYM", meaning: "The activity of spending a vacation living in a camp, tent, or camper" },
            { word: "CAMPUS", video: "https://www.youtube.com/embed/_RlDLQQwZPw", meaning: "The grounds and buildings of a university or college" },
            { word: "CAN", video: "https://www.youtube.com/embed/BVypOVtFnNk", meaning: "A cylindrical metal container used for storing food, drink, or other goods" },
            { word: "CANCEL", video: "https://www.youtube.com/embed/2bBkivd0a7s", meaning: "Decide or announce that (an arranged or planned event) will not take place" },
            { word: "CAP", video: "https://www.youtube.com/embed/Hmzx3rCq4qc", meaning: "A kind of soft, flat hat without a brim and typically with a peak" },
            { word: "CAPTAIN", video: "https://www.youtube.com/embed/aKpNbKlFr5s", meaning: "The person in command of a ship" },
            { word: "CARBOHYDRATE", video: "https://www.youtube.com/embed/BRvkrA85_Xk", meaning: "A large group of organic compounds occurring in foods and living tissues and including sugars, starch, and cellulose" },
            { word: "CARE", video: "https://www.youtube.com/embed/tOBKXefLXOg", meaning: "The provision of what is necessary for the health, welfare, maintenance, and protection of someone or something" },
            { word: "CAREER", video: "https://www.youtube.com/embed/-1m7X79Eoog", meaning: "An occupation undertaken for a significant period of a person's life and with opportunities for progress" },
            { word: "CARPENTRY", video: "https://www.youtube.com/embed/eu99V9D1NJk", meaning: "The activity or occupation of making or repairing things in wood" },
            { word: "CARROT", video: "https://www.youtube.com/embed/wMX84DjGfwM", meaning: "A tapering orange-colored root eaten as a vegetable" },
            { word: "CASH", video: "https://www.youtube.com/embed/kGYox0Edt4s", meaning: "Money in coins or notes" },
            { word: "CASHIER", video: "https://www.youtube.com/embed/KhEcccI59tI", meaning: "A person handling payments and receipts in a store, bank, or other business" },
            { word: "CAT", video: "https://www.youtube.com/embed/ekFrFoJ-x78", meaning: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws" },
            { word: "CAUGHT", video: "https://www.youtube.com/embed/dj5rXw1bS78", meaning: "Past tense of 'catch'; intercept and hold (something that has been thrown, propelled, or dropped)" },
            { word: "CEILING", video: "https://www.youtube.com/embed/z_CguXYkutk", meaning: "The upper interior surface of a room or other similar compartment" },
            { word: "CELEBRATE", video: "https://www.youtube.com/embed/S6jdT0euWqM", meaning: "Mark (a significant occasion) with festivities" },
            { word: "CELL", video: "https://www.youtube.com/embed/g-H9-ahMdgg", meaning: "The smallest structural and functional unit of an organism" },
            { word: "CENT", video: "https://www.youtube.com/embed/ajIA0oBLMgM", meaning: "A monetary unit equal to one hundredth of a dollar or other unit of currency" },
            { word: "CEREAL", video: "https://www.youtube.com/embed/4uO8sY4hNYs", meaning: "A grass that is cultivated for its edible grains" },
            { word: "CERTAIN", video: "https://www.youtube.com/embed/AMuCePp_2gM", meaning: "Having definite and distinct limits" },
            { word: "CHAIR", video: "https://www.youtube.com/embed/8vc2vD9N4tk", meaning: "A separate seat for one person, typically with a back and four legs" }
        ],

        D: [
            { word: "DAILY", video: "https://www.youtube.com/embed/lc1pqNKCwmo", meaning: "Occurring, done, or produced every day" },
            { word: "DANCE", video: "https://www.youtube.com/embed/p3UKhedGeTA", meaning: "Move rhythmically to music, typically following a set sequence of steps" },
            { word: "DANGER", video: "https://www.youtube.com/embed/qQFUyAbBUh8", meaning: "The possibility of suffering harm or injury" },
            { word: "DAY", video: "https://www.youtube.com/embed/6Ag2Q2J9DAU", meaning: "A period of twenty-four hours as a unit of time" },
            { word: "DEAF", video: "https://www.youtube.com/embed/sP4e9vRUCYM", meaning: "Partially or wholly lacking the sense of hearing" },
            { word: "DEPT", video: "https://www.youtube.com/embed/V8IyYFxiC98", meaning: "Department; a division of a large organization such as a government, university, or business" },
            { word: "DECADE", video: "https://www.youtube.com/embed/sEd9qimc2Sg", meaning: "A period of ten years" },
            { word: "DECIDE", video: "https://www.youtube.com/embed/N0969RhLMp0", meaning: "Come to a resolution in the mind as a result of consideration" },
            { word: "DECISION", video: "https://www.youtube.com/embed/gyWG1p2t3zc", meaning: "A conclusion or resolution reached after consideration" },
            { word: "DECORATIONS", video: "https://www.youtube.com/embed/O5MT6eIVG1Y", meaning: "Ornaments or items used to embellish or beautify something" },
            { word: "DECREASE", video: "https://www.youtube.com/embed/SYgjCBtyolY", meaning: "Make or become smaller or fewer in size, amount, or degree" },
            { word: "DEFEND", video: "https://www.youtube.com/embed/Lfe1_uABdS8", meaning: "Resist an attack made on (someone or something); protect from harm or danger" },
            { word: "DEFINITELY", video: "https://www.youtube.com/embed/6QZMROluXHs", meaning: "Without doubt; certainly" },
            { word: "DELICIOUS", video: "https://www.youtube.com/embed/jHACe_ba-tc", meaning: "Highly pleasant to the taste" },
            { word: "DENSE", video: "https://www.youtube.com/embed/UMKD0zku2AM", meaning: "Closely compacted in substance; thick" },
            { word: "DENSITY", video: "https://www.youtube.com/embed/Zx8scLXglQU", meaning: "The degree of compactness of a substance" },
            { word: "DENY", video: "https://www.youtube.com/embed/yIFNPgqWCs4", meaning: "State that one refuses to admit the truth or existence of" },
            { word: "DEPARTMENT", video: "https://www.youtube.com/embed/G8PiolENG7o", meaning: "A division of a large organization such as a government, university, or business" },
            { word: "DEPEND", video: "https://www.youtube.com/embed/8E1NT-uiDXs", meaning: "Rely on or trust in with confidence" },
            { word: "DEPOSIT", video: "https://www.youtube.com/embed/MI5O36P8wLE", meaning: "A sum of money placed or kept in a bank account, usually to gain interest" },
            { word: "DEPRESSED", video: "https://www.youtube.com/embed/mLWP-yNA0XU", meaning: "In a state of general unhappiness or despondency" },
            { word: "DESERT", video: "https://www.youtube.com/embed/x-n4R0gq0BY", meaning: "A dry, barren area of land, especially one covered with sand" },
            { word: "DESK", video: "https://www.youtube.com/embed/kmPYzPuPLWc", meaning: "A piece of furniture with a flat or sloped surface for writing, reading, or using a computer" },
            { word: "DESTROY", video: "https://www.youtube.com/embed/zRHTppT0doc", meaning: "Put an end to the existence of (something) by damaging or attacking it" },
            { word: "DETERMINE", video: "https://www.youtube.com/embed/r8gvnE0liOg", meaning: "Ascertain or establish exactly, typically as a result of research or calculation" },
            { word: "DETECTIVE", video: "https://www.youtube.com/embed/72TXaJi5yFc", meaning: "A person, especially a police officer, whose occupation is to investigate and solve crimes" },
            { word: "DEVELOP", video: "https://www.youtube.com/embed/Ya9stWQyt6A", meaning: "Grow or cause to grow and become more mature, advanced, or elaborate" },
            { word: "DEVELOPMENT", video: "https://www.youtube.com/embed/jeN0XCeFXes", meaning: "The process of developing or being developed" },
            { word: "DIAGNOSE", video: "https://www.youtube.com/embed/N1ht1ARG9rg", meaning: "Identify the nature of (an illness or other problem) by examination of the symptoms" },
            { word: "DIAMOND", video: "https://www.youtube.com/embed/FEo8AU7mBIM", meaning: "A precious stone consisting of a clear and colorless crystalline form of pure carbon" },
            { word: "DICE", video: "https://www.youtube.com/embed/qr6Sjsc_7J0", meaning: "A small cube with each side having a different number of spots, used in games of chance" }
        ],

        E: [
            { word: "EACH", video: "https://www.youtube.com/embed/EE8SbEdpQ3A", meaning: "Every individual or single one of a particular type or group" },
            { word: "EAGLE", video: "https://www.youtube.com/embed/bS4525oLqyA", meaning: "A large bird of prey with a massive hooked bill and long broad wings" },
            { word: "EAR", video: "https://www.youtube.com/embed/Eqq_OZk1Eh4", meaning: "The organ of hearing and balance in humans and other vertebrates" },
            { word: "EARLY", video: "https://www.youtube.com/embed/RSAwb_vK4hI", meaning: "Before the usual or expected time" },
            { word: "EARN", video: "https://www.youtube.com/embed/JzZuG8oDWP4", meaning: "Obtain money or reward through work or effort" },
            { word: "EARTH", video: "https://www.youtube.com/embed/gXSMBi9jpu4", meaning: "The third planet from the sun in our solar system" },
            { word: "EAST", video: "https://www.youtube.com/embed/tGKOaKI-CLE", meaning: "The direction towards the point of sunrise" },
            { word: "EASY", video: "https://www.youtube.com/embed/k5RKXRKYCrM", meaning: "Achieved without great effort; presenting few difficulties" },
            { word: "EAT", video: "https://www.youtube.com/embed/9AYysHe14jg", meaning: "Put food into the mouth and chew and swallow it" },
            { word: "ECONOMY", video: "https://www.youtube.com/embed/MOdpmPBfI0M", meaning: "The wealth and resources of a country or region" },
            { word: "EDUCATION", video: "https://www.youtube.com/embed/SxP4S_KFKF4", meaning: "The process of receiving or giving systematic instruction" },
            { word: "EFFECT", video: "https://www.youtube.com/embed/jlYA-ve5hOs", meaning: "A change that is a result or consequence of an action or other cause" },
            { word: "EFFORT", video: "https://www.youtube.com/embed/DAzFt7BsXPM", meaning: "A vigorous or determined attempt" },
            { word: "EGG", video: "https://www.youtube.com/embed/ZVd4gO8bUiw", meaning: "The oval or round reproductive body laid by female birds, reptiles, and certain other animals" },
            { word: "EIGHT", video: "https://www.youtube.com/embed/ZdZco8j2BNo", meaning: "The number equivalent to the sum of two and six; one more than seven, or two less than ten" },
            { word: "EITHER", video: "https://www.youtube.com/embed/07b9v4cKcuo", meaning: "Used before the first of two (or occasionally more) alternatives" },
            { word: "ELEVATOR", video: "https://www.youtube.com/embed/JdQtf0sl5KI", meaning: "A platform or compartment housed in a shaft for raising and lowering people or things to different floors or levels" },
            { word: "ELSE", video: "https://www.youtube.com/embed/8E2rsAQN9Hc", meaning: "In addition; besides" },
            { word: "EMBASSY", video: "https://www.youtube.com/embed/eFzy-z_Zzmg", meaning: "The official residence or offices of an ambassador" },
            { word: "EMOTION", video: "https://www.youtube.com/embed/hMmnrVjNM0E", meaning: "A strong feeling deriving from one's circumstances, mood, or relationships with others" },
            { word: "EMPLOY", video: "https://www.youtube.com/embed/GPU2D-8iJMQ", meaning: "Give work to (someone) and pay them for it" },
            { word: "END", video: "https://www.youtube.com/embed/SiRvPUToJvw", meaning: "A final part of something, especially a period of time, an activity, or a story" },
            { word: "ENERGY", video: "https://www.youtube.com/embed/YYcyRlI1OWU", meaning: "The strength and vitality required for sustained physical or mental activity" },
            { word: "ENGAGE", video: "https://www.youtube.com/embed/0VDj46cNBfI", meaning: "Participate or become involved in" },
            { word: "ENJOY", video: "https://www.youtube.com/embed/G7MMoJZRltk", meaning: "Take pleasure in" },
            { word: "ENOUGH", video: "https://www.youtube.com/embed/XVgP90cND4M", meaning: "As much or as many as required" },
            { word: "ENTER", video: "https://www.youtube.com/embed/4Vr7PfO6LHI", meaning: "Come or go into (a place)" },
            { word: "ENVIRONMENT", video: "https://www.youtube.com/embed/Ca7uTAoMuPc", meaning: "The surroundings or conditions in which a person, animal, or plant lives or operates" },
            { word: "ENVY", video: "https://www.youtube.com/embed/7vHeMhpT4ME", meaning: "A feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck" },
            { word: "ESCAPE", video: "https://www.youtube.com/embed/jaENb2anwYc", meaning: "Break free from confinement or control" }
        ],

        F: [
            { word: "FACE", video: "https://www.youtube.com/embed/vToOzx3lsVQ", meaning: "The front part of a person's head from the forehead to the chin" },
            { word: "FACT", video: "https://www.youtube.com/embed/zmKXTw_1ELY", meaning: "A thing that is known or proved to be true" },
            { word: "FACULTY", video: "https://www.youtube.com/embed/PMEE-ikVncA", meaning: "The teaching staff in an educational institution" },
            { word: "FAIL", video: "https://www.youtube.com/embed/9MI8ABNJepc", meaning: "Be unsuccessful in achieving one's goal" },
            { word: "FAILURE", video: "https://www.youtube.com/embed/cFoJYNmscag", meaning: "Lack of success" },
            { word: "FAIRY", video: "https://www.youtube.com/embed/txiRsc75YRg", meaning: "A small imaginary being of human form that has magical powers" },
            { word: "FALL", video: "https://www.youtube.com/embed/-f8VFRHM5TE", meaning: "Move downward, typically rapidly and freely without control" },
            { word: "FANCY", video: "https://www.youtube.com/embed/_QX0o9Rlsng", meaning: "Elaborate in structure or decoration" },
            { word: "FAR", video: "https://www.youtube.com/embed/zVJ7-WuHsow", meaning: "At, to, or by a great distance" },
            { word: "FARMER", video: "https://www.youtube.com/embed/t5s1nm6PryI", meaning: "A person who owns or manages a farm" },
            { word: "FAST", video: "https://www.youtube.com/embed/Zkp9QaiusDA", meaning: "Moving or capable of moving at high speed" },
            { word: "FAT", video: "https://www.youtube.com/embed/tSR-NTrC_JA", meaning: "A natural oily or greasy substance occurring in animal bodies" },
            { word: "FATHER", video: "https://www.youtube.com/embed/UnAiMqWCzNs", meaning: "A male parent" },
            { word: "FAULT", video: "https://www.youtube.com/embed/5Kzi_CtM1nc", meaning: "Responsibility for an accident or misfortune" },
            { word: "FAVORITE", video: "https://www.youtube.com/embed/fNKs28s0ONw", meaning: "Preferred before all others of the same kind" },
            { word: "FEAR", video: "https://www.youtube.com/embed/N-2pFw6Jw-s", meaning: "An unpleasant emotion caused by the belief that someone or something is dangerous" },
            { word: "FEATURES", video: "https://www.youtube.com/embed/GCfOK_1P62g", meaning: "Distinctive attributes or aspects of something" },
            { word: "FEBRUARY", video: "https://www.youtube.com/embed/zsq3nUNOWpY", meaning: "The second month of the year" },
            { word: "FEED", video: "https://www.youtube.com/embed/-0MHh_huRnI", meaning: "Give food to" },
            { word: "FEEL", video: "https://www.youtube.com/embed/UxO5Q0fSqOw", meaning: "Perceive by touch or to experience an emotion or sensation" },
            { word: "FENCE", video: "https://www.youtube.com/embed/V6fLSvCCkWs", meaning: "A barrier, railing, or other upright structure" },
            { word: "FEW", video: "https://www.youtube.com/embed/SduOhUwKYSc", meaning: "A small number of" },
            { word: "FIELD", video: "https://www.youtube.com/embed/XqIgUWdBxz8", meaning: "An area of open land, especially one planted with crops or pasture" },
            { word: "FIND", video: "https://www.youtube.com/embed/2O5wVw-rlIs", meaning: "Discover or perceive by chance or unexpectedly" },
            { word: "FINE", video: "https://www.youtube.com/embed/IuBUE7SH1Wk", meaning: "Of high quality" },
            { word: "FINISH", video: "https://www.youtube.com/embed/gYB8ji01BLo", meaning: "Bring (a task or activity) to an end" },
            { word: "FISH", video: "https://www.youtube.com/embed/3xKLhk4NgCs", meaning: "A limbless cold-blooded vertebrate animal with gills and fins" },
            { word: "FIVE", video: "https://www.youtube.com/embed/7rhyjZEpqVw", meaning: "Equivalent to the sum of two and three; one more than four" },
            { word: "FLAG", video: "https://www.youtube.com/embed/EkskxmFHGBA", meaning: "A piece of cloth or similar material, typically oblong or square, attachable by one edge to a pole or rope" },
            { word: "FLOOD", video: "https://www.youtube.com/embed/Od4BsRl6fPQ", meaning: "An overflowing of a large amount of water beyond its normal confines" }
        ],

        G: [
            { word: "GAME", video: "https://www.youtube.com/embed/17gZsl0jClE", meaning: "A form of play or sport, especially a competitive one played according to rules and decided by skill, strength, or luck" },
            { word: "GARAGE", video: "https://www.youtube.com/embed/6i1516QNfaY", meaning: "A building or shed for storing vehicles" },
            { word: "GATE", video: "https://www.youtube.com/embed/NXBQ62j8pKk", meaning: "A hinged barrier used to close an opening in a wall, fence, or hedge" },
            { word: "GENDER", video: "https://www.youtube.com/embed/90itQtuzTHE", meaning: "The state of being male or female (typically used with reference to social and cultural differences rather than biological ones)" },
            { word: "GENERAL", video: "https://www.youtube.com/embed/Qfn0Tl2caZc", meaning: "A commander of an army, or an adjective describing something as widespread or normal" },
            { word: "GENERATION", video: "https://www.youtube.com/embed/Tx4njI_M01I", meaning: "All of the people born and living at about the same time, regarded collectively" },
            { word: "GET", video: "https://www.youtube.com/embed/mZRz-Uyj2fo", meaning: "Come to have or hold something" },
            { word: "GIRL", video: "https://www.youtube.com/embed/pwh3cOdoiG4", meaning: "A female child or young woman" },
            { word: "GIVE", video: "https://www.youtube.com/embed/U5p42-d-buw", meaning: "Freely transfer the possession of something to someone" },
            { word: "GLOVES", video: "https://www.youtube.com/embed/wOVDN0BUETY", meaning: "A covering for the hand worn for protection against cold or dirt and typically having separate parts for each finger and the thumb" },
            { word: "GO", video: "https://www.youtube.com/embed/UFGkxpLmFyE", meaning: "Move from one place to another" },
            { word: "GOAL", video: "https://www.youtube.com/embed/8t9-34ZHDAE", meaning: "The object of a person's ambition or effort; an aim or desired result" },
            { word: "GOD", video: "https://www.youtube.com/embed/1nTH3wvLpY4", meaning: "The creator and ruler of the universe and source of all moral authority; the supreme being" },
            { word: "GOOD", video: "https://www.youtube.com/embed/tTDXplV6TKA", meaning: "To be desired or approved of" },
            { word: "GOSSIP", video: "https://www.youtube.com/embed/ITxU_FbNfhw", meaning: "Casual or unconstrained conversation or reports about other people, typically involving details that are not confirmed as true" },
            { word: "GOVERNMENT", video: "https://www.youtube.com/embed/v3vckoSth7Y", meaning: "The governing body of a nation, state, or community" },
            { word: "GRADUATE", video: "https://www.youtube.com/embed/bEu85pm6xac", meaning: "A person who has successfully completed a course of study or training" },
            { word: "GRAPES", video: "https://www.youtube.com/embed/NZ68mfHiZa8", meaning: "A berry, typically green, purple, red, or black, growing in clusters on a grapevine, eaten as fruit, and used in making wine" },
            { word: "GRATE", video: "https://www.youtube.com/embed/mCNeFwKCSdE", meaning: "Reduce (something, especially food) to small shreds by rubbing it on a grater" },
            { word: "GREASY", video: "https://www.youtube.com/embed/eKD0MfuAow0", meaning: "Covered with or resembling grease" },
            { word: "GREECE", video: "https://www.youtube.com/embed/Y2U4pLd4R0M", meaning: "A country in southeastern Europe on the southern part of the Balkan Peninsula" },
            { word: "GREEN", video: "https://www.youtube.com/embed/WrkXE5l6udM", meaning: "Of the color between blue and yellow in the spectrum; resembling the color of growing grass" },
            { word: "GREY", video: "https://www.youtube.com/embed/KYd1QImWeTw", meaning: "Of a color intermediate between black and white" },
            { word: "GUM", video: "https://www.youtube.com/embed/LbUlu1Dyky0", meaning: "A viscous secretion of some trees and shrubs that hardens on drying but is soluble in water" },
            { word: "GYM", video: "https://www.youtube.com/embed/fps8C-MdYTc", meaning: "A place or club where people go to exercise and play sports" },
            { word: "GULP", video: "https://www.youtube.com/embed/3MR-5zdbzVU", meaning: "Swallow (drink or food) quickly or in large mouthfuls, often audibly" }
        ],

        H: [
            { word: "HABIT", video: "https://www.youtube.com/embed/AObxjvn8ep8", meaning: "A settled or regular tendency or practice, especially one that is hard to give up" },
            { word: "HAIR", video: "https://www.youtube.com/embed/ScxPUBwNP80", meaning: "Any of the fine threadlike strands growing from the skin of humans, mammals, and some other animals" },
            { word: "HAIRCUT", video: "https://www.youtube.com/embed/2ohA3iZZ3Cw", meaning: "The style in which a person's hair is cut, or an act of cutting or trimming hair" },
            { word: "HALF", video: "https://www.youtube.com/embed/ghF1BEx1XM8", meaning: "Either of two equal or corresponding parts into which something is or can be divided" },
            { word: "HALL", video: "https://www.youtube.com/embed/QJj9y6hepKI", meaning: "The room or space just inside the main entrance of a house, apartment, or other building that leads to other rooms and usually to the stairs" },
            { word: "HAMMER", video: "https://www.youtube.com/embed/Txc84neZsh8", meaning: "A tool with a heavy metal head mounted at right angles at the end of a handle, used for jobs such as breaking things and driving in nails" },
            { word: "HAND", video: "https://www.youtube.com/embed/c-fqsuYWFUg", meaning: "The end part of a person's arm beyond the wrist, including the palm, fingers, and thumb" },
            { word: "HANDLE", video: "https://www.youtube.com/embed/jozuC68RFxI", meaning: "A part of an object designed to be held, used to move or lift the object" },
            { word: "HANDSOME", video: "https://www.youtube.com/embed/6S9BNKVsKdE", meaning: "Attractive in appearance; having a pleasing and usually impressive or dignified presence" },
            { word: "HAPPEN", video: "https://www.youtube.com/embed/ICZDQWUhc04", meaning: "Take place; occur" },
            { word: "HAPPY", video: "https://www.youtube.com/embed/ZXHHO_DY6_A", meaning: "Feeling or showing pleasure or contentment" },
            { word: "HARD", video: "https://www.youtube.com/embed/RgGjl2y6dkM", meaning: "Solid, firm, and resistant to pressure; not easily broken, bent, or pierced" },
            { word: "HARDWARE", video: "https://www.youtube.com/embed/bMZLbvE_E1k", meaning: "Tools, machinery, and other durable equipment" },
            { word: "HARMONY", video: "https://www.youtube.com/embed/3Gwi5Y1DFn0", meaning: "The quality of forming a pleasing and consistent whole" },
            { word: "HAT", video: "https://www.youtube.com/embed/bul0cjvDEEE", meaning: "A shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform" },
            { word: "HATE", video: "https://www.youtube.com/embed/S5Xkm-qaEQI", meaning: "Feel intense or passionate dislike for someone" },
            { word: "HAVE", video: "https://www.youtube.com/embed/Tg44F2vYVY4", meaning: "Possess, own, or hold" },
            { word: "HAWK", video: "https://www.youtube.com/embed/pFSuKfezcZM", meaning: "A bird of prey with broad wings and a long tail, typically taking prey by surprise with a short chase" },
            { word: "HEAD", video: "https://www.youtube.com/embed/9HK6J9Hbt8o", meaning: "The upper part of the human body, or the front or upper part of the body of an animal, containing the brain, mouth, and sense organs" },
            { word: "HEADACHE", video: "https://www.youtube.com/embed/ZnwxFOv3SD8", meaning: "A continuous pain in the head" },
            { word: "HEATING", video: "https://www.youtube.com/embed/EOUkGLfYQ7M", meaning: "The process of making something warm or hot" },
            { word: "HEART", video: "https://www.youtube.com/embed/t6qHzKr2t2s", meaning: "A hollow muscular organ that pumps blood through the circulatory system by rhythmic contraction and dilation" },
            { word: "HEAVEN", video: "https://www.youtube.com/embed/vSowMKjmI2A", meaning: "A place regarded in various religions as the abode of God or the gods, and the angels, and of the good after death, often traditionally depicted as being above the sky" },
            { word: "HEAVY", video: "https://www.youtube.com/embed/p8m9-RMJ-8Y", meaning: "Of great weight; difficult to lift or move" },
            { word: "HEIGHT", video: "https://www.youtube.com/embed/m5gMZRYp8jU", meaning: "The measurement from base to top or from head to foot" },
            { word: "HELLO", video: "https://www.youtube.com/embed/FVjpLa8GqeM", meaning: "Used as a greeting or to begin a conversation" },
            { word: "HOLD", video: "https://www.youtube.com/embed/uyy0V5iKm0g", meaning: "Grasp, carry, or support with one's arms or hands" },
            { word: "HOME", video: "https://www.youtube.com/embed/WSHD1XX7kWk", meaning: "The place where one lives permanently, especially as a member of a family or household" }
        ],
        
        I: [
            { word: "IMMEDIATE", video: "https://www.youtube.com/embed/bqvkqEi9vh8", meaning: "Occurring or done at once; instant" },
            { word: "IMMIGRANT", video: "https://www.youtube.com/embed/IuOqtQUIBT4", meaning: "A person who comes to live permanently in a foreign country" },
            { word: "IMPLEMENT", video: "https://www.youtube.com/embed/ymeCNnLEPVM", meaning: "A tool, utensil, or other piece of equipment used for a particular purpose" },
            { word: "IMPORTANT", video: "https://www.youtube.com/embed/2NEoRZDobDs", meaning: "Of great significance or value; likely to have a profound effect on success, survival, or well-being" },
            { word: "IMPOSE", video: "https://www.youtube.com/embed/nQvVTCYRBq8", meaning: "Force (something unwelcome or unfamiliar) to be accepted or put in place" },
            { word: "IMPOSSIBLE", video: "https://www.youtube.com/embed/Qau2mlInMlA", meaning: "Not able to occur, exist, or be done" },
            { word: "IMPRESSED", video: "https://www.youtube.com/embed/klWG0K3j7m4", meaning: "Deeply affected or influenced by someone or something" },
            { word: "INCIDENT", video: "https://www.youtube.com/embed/XI8HLKjYG2g", meaning: "An event or occurrence" },
            { word: "INCLUDE", video: "https://www.youtube.com/embed/zvs4g_NE2pc", meaning: "Comprise or contain as part of a whole" },
            { word: "INCLUSIVE", video: "https://www.youtube.com/embed/LuqMmiL8TUc", meaning: "Including or covering all the services, facilities, or items normally expected or required" },
            { word: "INCOME", video: "https://www.youtube.com/embed/lnyitLsIVkw", meaning: "Money received, especially on a regular basis, for work or through investments" },
            { word: "INCREASE", video: "https://www.youtube.com/embed/D96nyDctWVA", meaning: "Become or make greater in size, amount, intensity, or degree" },
            { word: "INDEPENDENT", video: "https://www.youtube.com/embed/L5nKRt8BfYk", meaning: "Free from outside control; not depending on another's authority" },
            { word: "INDIA", video: "https://www.youtube.com/embed/JB_nWF9Bls8", meaning: "A country in South Asia known for its cultural diversity, history, and economic growth" },
            { word: "INDUSTRY", video: "https://www.youtube.com/embed/oECvEAqFqHc", meaning: "Economic activity concerned with the processing of raw materials and manufacture of goods in factories" },
            { word: "INFECTION", video: "https://www.youtube.com/embed/f9CKzrX8wiA", meaning: "The process of infecting or the state of being infected" },
            { word: "INFERIOR", video: "https://www.youtube.com/embed/ramkLZxVLhg", meaning: "Lower in rank, status, or quality" },
            { word: "INFORM", video: "https://www.youtube.com/embed/BGdDXKIB1sY", meaning: "Give facts or information to; tell" },
            { word: "INFORMATION", video: "https://www.youtube.com/embed/j9sDnjH6aAQ", meaning: "Facts provided or learned about something or someone" },
            { word: "INHERIT", video: "https://www.youtube.com/embed/iQ3Im5Ytv-I", meaning: "Receive (money, property, or a title) as an heir at the death of the previous holder" },
            { word: "INJECTION", video: "https://www.youtube.com/embed/2mFXRXoPPvA", meaning: "An instance of injecting or being injected" },
            { word: "INJURY", video: "https://www.youtube.com/embed/O-LKVYcfdMU", meaning: "Physical harm or damage to someone's body caused by an accident or an attack" },
            { word: "INNOCENT", video: "https://www.youtube.com/embed/ZGxhuchk2xs", meaning: "Not guilty of a crime or offense" },
            { word: "INSIDE", video: "https://www.youtube.com/embed/nXrGgnaQ-LY", meaning: "The inner side or surface of something" },
            { word: "INSTITUTE", video: "https://www.youtube.com/embed/KF4cHp0Qod0", meaning: "An organization having a particular purpose, especially one that is involved with education, training, or research" },
            { word: "INSURANCE", video: "https://www.youtube.com/embed/bfllo1gBmiQ", meaning: "A practice or arrangement by which a company or government agency provides a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium" },
            { word: "INTENSE", video: "https://www.youtube.com/embed/WTbFM6Yx5Xk", meaning: "Of extreme force, degree, or strength" },
            { word: "INTEREST", video: "https://www.youtube.com/embed/0GMCqBh8TiU", meaning: "The feeling of wanting to know or learn about something or someone" },
            { word: "INTERN", video: "https://www.youtube.com/embed/CL2GuJr8ee8", meaning: "A student or trainee who works, sometimes without pay, at a trade or occupation in order to gain work experience" }
        ],        
        
        J: [
            { "word": "Jacket", "video": "https://www.youtube.com/embed/RhHvcp1K0-g", "meaning": "A short coat, typically extending to the hips" },
            { "word": "Jail", "video": "https://www.youtube.com/embed/TZCYCYxL7dI", "meaning": "A place for the confinement of people accused or convicted of a crime" },
            { "word": "Japan", "video": "https://www.youtube.com/embed/3RWypBF6cKY", "meaning": "A country in East Asia known for its rich cultural heritage and technological advancements" },
            { "word": "Jealous", "video": "https://www.youtube.com/embed/Kniz_YHJxp4", "meaning": "Feeling or showing envy of someone or their achievements and advantages" },
            { "word": "Jesus", "video": "https://www.youtube.com/embed/PZpegBLONAU", "meaning": "In Christianity, the central figure believed to be the Son of God and the savior of humanity" },
            { "word": "Join", "video": "https://www.youtube.com/embed/_6zNbCmnPyo", "meaning": "To link or connect together; unite" },
            { "word": "July", "video": "https://www.youtube.com/embed/WJaYDUVUvbk", "meaning": "The seventh month of the year, known for its summer weather in the Northern Hemisphere" },
            { "word": "Jump", "video": "https://www.youtube.com/embed/yCL4l8WBMVo", "meaning": "Move suddenly and quickly in a specified way" },
            { "word": "June", "video": "https://www.youtube.com/embed/WSHDYcFm-u4", "meaning": "The sixth month of the year, often associated with the beginning of summer" },
            { "word": "Jungle", "video": "https://www.youtube.com/embed/uTCiBIfutjk", "meaning": "A dense forest in a tropical region, often characterized by lush vegetation and diverse wildlife" },
            { "word": "Jury", "video": "https://www.youtube.com/embed/jDR1c74uwJQ", "meaning": "A body of people sworn to give a verdict in a legal case based on the evidence presented to them in court" },
            { "word": "Justice", "video": "https://www.youtube.com/embed/PQCBA2QRTic", "meaning": "Fairness and moral rightness in behavior and actions, especially in the administration of law" },
            { "word": "Juice", "video": "https://www.youtube.com/embed/fztXDktOMQM", "meaning": "The liquid obtained from fruits or vegetables, often consumed as a beverage" },
            { "word": "Joke", "video": "https://www.youtube.com/embed/tGOLzJ2Hgdo", "meaning": "Something said or done to provoke laughter or amusement, especially a humorous story or anecdote" },
            { "word": "Joint", "video": "https://www.youtube.com/embed/6Oat5YinWE4", "meaning": "A point at which parts of an artificial structure are joined" },
            { "word": "Jewish", "video": "https://www.youtube.com/embed/Ko0htMaC7BI", "meaning": "Relating to, associated with, or characteristic of Jews or Judaism" }
        ],
        
        K: [
            { "word": "Kangaroo", "video": "https://www.youtube.com/embed/38l2rtn1ShY", "meaning": "A large Australian marsupial with strong hind legs for leaping and a long tail often used for balance." },
            { "word": "Karate", "video": "https://www.youtube.com/embed/Phe1OUxdIf8", "meaning": "A traditional Japanese martial art emphasizing striking techniques using the hands and feet." },
            { "word": "Keep", "video": "https://www.youtube.com/embed/e8ou8_mZFBA", "meaning": "To have or retain possession of something." },
            { "word": "Kate", "video": "https://www.youtube.com/embed/9Ph9cxc3seQ", "meaning": "A female given name; also a diminutive of Katherine or Kathleen." },
            { "word": "Keys", "video": "https://www.youtube.com/embed/fVzJr5q3noE", "meaning": "A small metal instrument typically used to lock or unlock something." },
            { "word": "Kill", "video": "https://www.youtube.com/embed/cC59C9Vm5ig", "meaning": "To cause the death of a person, animal, or other living thing." },
            { "word": "Kind", "video": "https://www.youtube.com/embed/opJpkyVGmbA", "meaning": "Having a friendly, generous, or considerate nature." },
            { "word": "King", "video": "https://www.youtube.com/embed/bqFZZOtu11I", "meaning": "The male ruler of an independent state, especially one who inherits the position by birth." },
            { "word": "Kitchen", "video": "https://www.youtube.com/embed/lmqs2F__zH4", "meaning": "A room or area where food is prepared and cooked." },
            { "word": "Kite", "video": "https://www.youtube.com/embed/uKmiCi08EbA", "meaning": "A toy consisting of a light frame with thin material stretched over it, flown in the air at the end of a long string." },
            { "word": "Kiwi", "video": "https://www.youtube.com/embed/zuenRtCgtrw", "meaning": "A flightless bird native to New Zealand, or the edible brown fruit with green flesh." },
            { "word": "Knee", "video": "https://www.youtube.com/embed/ePE_p138YUU", "meaning": "The joint between the thigh and lower leg in humans, which allows for movement such as bending or extending the leg." },
            { "word": "Knife", "video": "https://www.youtube.com/embed/47-oTgaEGIw", "meaning": "A cutting instrument with a sharp blade, typically used for slicing or stabbing." },
            { "word": "Knock", "video": "https://www.youtube.com/embed/ZDcvpZjYqt0", "meaning": "To strike a surface with a sharp blow, typically using the knuckles or a hard object." },
            { "word": "Know", "video": "https://www.youtube.com/embed/Ht2B0VzHFwQ", "meaning": "To have information, understanding, or awareness about something or someone." },
            { "word": "Korea", "video": "https://www.youtube.com/embed/-hUjwyVQdbo", "meaning": "A country in East Asia comprising the Korean Peninsula, known for its rich cultural heritage and technological advancements." }
        ],
        
        L: [
            { word: "Lab", video: "https://www.youtube.com/embed/7Y0PTyh0j0c", meaning: "A laboratory, a room or building equipped for scientific experiments, research, or teaching" },
            { word: "Label", video: "https://www.youtube.com/embed/qP2em4YpRis", meaning: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it" },
            { word: "Lake", video: "https://www.youtube.com/embed/DnMeZbKL290", meaning: "A large body of water surrounded by land" },
            { word: "Lamp", video: "https://www.youtube.com/embed/KOKG7jy8Loo", meaning: "A device for giving light, typically by burning oil, gas, or using electricity" },
            { word: "Land", video: "https://www.youtube.com/embed/bdvMl7huZlY", meaning: "The solid ground of the earth, not including the seas or oceans" },
            { word: "Landlord", video: "https://www.youtube.com/embed/4zwi5Mn--UY", meaning: "A person who owns and leases out a building, especially a house, apartment, or room" },
            { word: "Language", video: "https://www.youtube.com/embed/O8XiLkrSx48", meaning: "The method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way" },
            { word: "Laptop", video: "https://www.youtube.com/embed/5e1kvKGOJzk", meaning: "A portable computer that is small enough to use comfortably on your lap" },
            { word: "Large", video: "https://www.youtube.com/embed/_0ltTWDlWyo", meaning: "Of considerable or relatively great size, extent, or capacity" },
            { word: "Last", video: "https://www.youtube.com/embed/f8MfjdWKh24", meaning: "Coming after all others in time or order" },
            { word: "Late", video: "https://www.youtube.com/embed/9ul_1z23KLI", meaning: "Doing something or taking place after the expected, proper, or usual time" },
            { word: "Laundry", video: "https://www.youtube.com/embed/BHBj0fMBO1c", meaning: "Clothes, towels, and sheets that have been or need to be washed" },
            { word: "Law", video: "https://www.youtube.com/embed/OZy1ugYqyyc", meaning: "A system of rules that a particular country or community recognizes as regulating the actions of its members" },
            { word: "Lawyer", video: "https://www.youtube.com/embed/lASXLjrY-u0", meaning: "A person who practices or studies law, especially as an attorney or advocate" },
            { word: "Lazy", video: "https://www.youtube.com/embed/stafgiooHts", meaning: "Unwilling to work or use energy; characterized by a lack of effort or activity" },
            { word: "Lead", video: "https://www.youtube.com/embed/amS8WdpuoAM", meaning: "To go or guide in a specified direction" },
            { word: "Leader", video: "https://www.youtube.com/embed/EzyCCHzEJDI", meaning: "A person who leads or commands a group, organization, or country" },
            { word: "League", video: "https://www.youtube.com/embed/Mc3v5tXkiB4", meaning: "A collection of people, countries, or groups that combine for a particular purpose, typically mutual protection or cooperation" },
            { word: "Lake", video: "https://www.youtube.com/embed/oMaXlxmkLqs", meaning: "A large body of water surrounded by land" },
            { word: "Lean", video: "https://www.youtube.com/embed/ESRkWNW-fD4", meaning: "To incline or bend from a vertical position" },
            { word: "Learn", video: "https://www.youtube.com/embed/78mzpzvN9tc", meaning: "To gain or acquire knowledge of or skill in (something) by study, experience, or being taught" },
            { word: "Leather", video: "https://www.youtube.com/embed/D4b_EZhusLo", meaning: "Material made from the skin of an animal by tanning or a similar process" },
            { word: "Leave", video: "https://www.youtube.com/embed/fn1PTkU1fGI", meaning: "To go away from; depart from" },
            { word: "Left", video: "https://www.youtube.com/embed/67OgKuzwcMg", meaning: "On or towards the side of a human body or of a thing that is to the west when the person or thing is facing north" }
        ],

        M: [
            { word: "Magic", video: "https://www.youtube.com/embed/POinkxTejsE", meaning: "The power of apparently influencing events by using mysterious or supernatural forces" },
            { word: "Magnetic", video: "https://www.youtube.com/embed/fIUs6PiH3eE", meaning: "Having the properties of a magnet; capable of being attracted by or acquiring the properties of a magnet" },
            { word: "Major", video: "https://www.youtube.com/embed/atM1DOWoYmQ", meaning: "Of greater importance, size, or amount" },
            { word: "Make", video: "https://www.youtube.com/embed/p6rl9JZSYXw", meaning: "To create, form, or produce something" },
            { word: "Man", video: "https://www.youtube.com/embed/lyAWyqDxUqg", meaning: "An adult human male" },
            { word: "Management", video: "https://www.youtube.com/embed/c30AanJbntU", meaning: "The process of dealing with or controlling things or people" },
            { word: "Manners", video: "https://www.youtube.com/embed/_h37sfPuWTc", meaning: "Polite or well-behaved social behavior" },
            { word: "Many", video: "https://www.youtube.com/embed/7O2mS0Kz4CA", meaning: "A large number of" },
            { word: "March", video: "https://www.youtube.com/embed/KjP1oBzM6wo", meaning: "The third month of the year, in the northern hemisphere usually considered the first month of spring" },
            { word: "Marry", video: "https://www.youtube.com/embed/RwgmSO-tMyo", meaning: "To enter into marriage with someone" },
            { word: "Mash", video: "https://www.youtube.com/embed/se4n7I6wp3c", meaning: "To crush something into a soft, pulpy mass" },
            { word: "Math", video: "https://www.youtube.com/embed/QFcBzZ1pPLg", meaning: "The abstract science of numbers, quantity, and space" },
            { word: "Mature", video: "https://www.youtube.com/embed/lBaY0BnQcfA", meaning: "Fully developed physically; full-grown" },
            { word: "Me", video: "https://www.youtube.com/embed/l34VkXFxP5U", meaning: "Used to refer to oneself as the object of a verb or preposition" },
            { word: "Meaning", video: "https://www.youtube.com/embed/moMl2Po7R1o", meaning: "What is meant by a word, text, concept, or action" },
            { word: "Meat", video: "https://www.youtube.com/embed/8E8ZiHAwzqo", meaning: "The flesh of an animal, typically a mammal or bird, as food" },
            { word: "Medicine", video: "https://www.youtube.com/embed/R62C5PdSB1o", meaning: "The science or practice of the diagnosis, treatment, and prevention of disease" },
            { word: "Medium", video: "https://www.youtube.com/embed/TZCFG5FPpz8", meaning: "An agency or means of doing something" },
            { word: "Meet", video: "https://www.youtube.com/embed/FC1R9kyegJY", meaning: "To come into the presence or company of someone by chance or arrangement" },
            { word: "Member", video: "https://www.youtube.com/embed/D0p4WZk2tSE", meaning: "A person, animal, or plant belonging to a particular group" },
            { word: "Messy", video: "https://www.youtube.com/embed/PhHkmIVVL2c", meaning: "Untidy or dirty" },
            { word: "Microwave", video: "https://www.youtube.com/embed/kzvEJrS357s", meaning: "An electromagnetic wave with a wavelength in the range of 1 mm to 30 cm, used in cooking and heating food" },
            { word: "Milk", video: "https://www.youtube.com/embed/PRtOyut96Ps", meaning: "An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young" },
            { word: "Million", video: "https://www.youtube.com/embed/mamJxNp4wlE", meaning: "The number equivalent to the product of a thousand and a thousand; 1,000,000" },
            { word: "Mind", video: "https://www.youtube.com/embed/zybx4YHEhzQ", meaning: "The element of a person that enables them to be aware of the world and their experiences" },
            { word: "Mirror", video: "https://www.youtube.com/embed/uRxfofBY88M", meaning: "A surface, typically of glass coated with a metal amalgam, that reflects a clear image" },
            { word: "Model", video: "https://www.youtube.com/embed/xqG6lTroVvc", meaning: "A representation or imitation of a person or thing, typically on a smaller scale than the original" },
            { word: "Mom", video: "https://www.youtube.com/embed/DHl2-NT3mIM", meaning: "One's mother" },
            { word: "Money", video: "https://www.youtube.com/embed/ZMQz2hoT5V4", meaning: "A current medium of exchange in the form of coins and banknotes; coins and banknotes collectively" },
        ],
        
        N: [
            { word: "Number", video: "https://www.youtube.com/embed/W4D47oIBZ5Y", meaning: "An arithmetical value, expressed by a word, symbol, or figure, representing a particular quantity" },
            { word: "November", video: "https://www.youtube.com/embed/G3qlg6yCP3k", meaning: "The eleventh month of the year, between October and December" },
            { word: "Negative", video: "https://www.youtube.com/embed/9zGs3_HhNoY", meaning: "Expressing denial, disagreement, or refusal" },
            { word: "Name", video: "https://www.youtube.com/embed/GbeC9TFuSX4", meaning: "A word or set of words by which a person or thing is known, addressed, or referred to" },
            { word: "Napkin", video: "https://www.youtube.com/embed/syo02EBG62A", meaning: "A square piece of cloth or paper used at a meal to wipe the fingers or lips and to protect garments" },
            { word: "Narrowly", video: "https://www.youtube.com/embed/dYiJ1N1Uzlg", meaning: "In a way that is limited in extent, space, or scope" },
        ],
        O:[
            { word: "Observation", video: "https://www.youtube.com/embed/-iT_ymjyGXo", meaning: "The action or process of closely observing or monitoring something or someone" },
            { word: "Of", video: "https://www.youtube.com/embed/aok0HFb5MV0", meaning: "Expressing the relationship between a part and a whole" },
            { word: "Off", video: "https://www.youtube.com/embed/vl1LG51Wd1c", meaning: "Away from a place or position" },
            { word: "Olympics", video: "https://www.youtube.com/embed/2ROZnxFKlno", meaning: "A modern international sports competition held every four years" },
            { word: "Overflow", video: "https://www.youtube.com/embed/lHLJmgEZZ3A", meaning: "Flow over the brim of a receptacle" },
            { word: "Overtime", video: "https://www.youtube.com/embed/bFvC_W5OrCg", meaning: "Time in addition to what is normal, especially extra working time" },
            { word: "Overwhelmed", video: "https://www.youtube.com/embed/HNVClb5gCtM", meaning: "Burdened with an excessive amount of something" },
            { word: "Over-Sensitive", video: "https://www.youtube.com/embed/wfZBrpyKLpI", meaning: "Excessively or unduly sensitive" },
            { word: "Otherwise", video: "https://www.youtube.com/embed/ie1D7bvRmuU", meaning: "In circumstances different from those present or considered; or else" },
            { word: "Orgasm", video: "https://www.youtube.com/embed/hQoSkXv3bgg", meaning: "A climax of sexual excitement, characterized by feelings of pleasure centered in the genitals and (in men) experienced as an accompaniment to ejaculation" }
        ],
        
        P: [
            { word: "PAHI", video: "https://www.youtube.com/embed/y-o6GhUKPbI", meaning: "A traditional Polynesian double-hulled sailing vessel" },
            { word: "PANCAKE", video: "https://www.youtube.com/embed/U6Q2Ck683KE", meaning: "A flat, thin cake made by cooking batter on both sides in a frying pan" },
            { word: "PANDA", video: "https://www.youtube.com/embed/0bg1B95W9fY", meaning: "A large bearlike mammal with characteristic black-and-white markings, native to certain mountain forests in China" },
            { word: "PANTRY", video: "https://www.youtube.com/embed/IR9bbRSVp7U", meaning: "A small room or closet in which food, dishes, and utensils are kept" },
            { word: "PANTS", video: "https://www.youtube.com/embed/-V0Dkeyno2s", meaning: "An outer garment covering each leg separately, typically extending from the waist to the ankle" },
            { word: "PAPER", video: "https://www.youtube.com/embed/Zg7-DM25KIM", meaning: "A material made from the pulp of wood or other fibrous substances, used for writing, printing, or wrapping" },
            { word: "PARK", video: "https://www.youtube.com/embed/jVvRN6qR6Ww", meaning: "A large public green area in a town, used for recreation" },
            { word: "PARENTS", video: "https://www.youtube.com/embed/jlqHVbCS4H0", meaning: "A mother or father" },
            { word: "PARKING PERMIT", video: "https://www.youtube.com/embed/Q0MZ_36iMvg", meaning: "A document or sticker allowing a vehicle to be parked in a specific place" },
            { word: "PARTNER", video: "https://www.youtube.com/embed/ei9kkjtIt6w", meaning: "A person who shares or is associated with another in some action or endeavor; a business or law partner" },
            { word: "PAST", video: "https://www.youtube.com/embed/j7rjBay5FIE", meaning: "The time before the present" },
            { word: "PATIENCE", video: "https://www.youtube.com/embed/DAmZuOt9FnY", meaning: "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset" },
            { word: "PAUSE", video: "https://www.youtube.com/embed/RS8gp0O6vj0", meaning: "A temporary stop in action or speech" },
            { word: "PEN", video: "https://www.youtube.com/embed/1JySi0OYMcc", meaning: "An instrument for writing or drawing with ink" },
            { word: "PERIOD", video: "https://www.youtube.com/embed/XGNaDcecMh0", meaning: "A length or portion of time" },
            { word: "PERFECT", video: "https://www.youtube.com/embed/keOX5S1t_5Y", meaning: "Having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be" },
            { word: "PEPSI", video: "https://www.youtube.com/embed/qjtC9okyyGk", meaning: "A brand of carbonated soft drink produced and manufactured by PepsiCo" },
            { word: "PEPPER", video: "https://www.youtube.com/embed/UYVDfe4FgUQ", meaning: "A pungent hot-tasting powder prepared from dried and ground peppercorns, used as a spice" },
            { word: "PEOPLE", video: "https://www.youtube.com/embed/5lhQHdin_5g", meaning: "Human beings in general or considered collectively" },
            { word: "PERSON", video: "https://www.youtube.com/embed/RXX7T4-saPs", meaning: "A human being regarded as an individual" },
            { word: "PLEASURE", video: "https://www.youtube.com/embed/Uo_AUbP0O9g", meaning: "A feeling of happy satisfaction and enjoyment" }
        ],
        Q: [
            { word: "QUESTION", video: "https://www.youtube.com/embed/kS2VaLVITiw", meaning: "A sentence, phrase, or word that asks for information or is used to test someone's knowledge" },
            { word: "QUICK", video: "https://www.youtube.com/embed/mlTgLqkZv70", meaning: "Moving fast or doing something in a short time" }
        ],

        R: [
            { word: "RABBIT", video: "https://www.youtube.com/embed/v4v20gVPJyU", meaning: "A small burrowing mammal with long ears, long hind legs, and a short tail" },
            { word: "RAIN", video: "https://www.youtube.com/embed/utTSQeTEDxk", meaning: "Water that falls from the sky in droplets" },
            { word: "RAT", video: "https://www.youtube.com/embed/sYgnTw77hk8", meaning: "A long-tailed rodent, larger than a mouse" },
            { word: "READ", video: "https://www.youtube.com/embed/XfZkO61GcqI", meaning: "To look at and comprehend the meaning of written or printed matter" },
            { word: "RECENT", video: "https://www.youtube.com/embed/PBpeJcpk7t8", meaning: "Having happened, begun, or been done not long ago; belonging to a past period relatively close to the present" },
            { word: "RECOMMENDED", video: "https://www.youtube.com/embed/PXTKbC1iuHY", meaning: "Advised or suggested as good or suitable" },
            { word: "REFER", video: "https://www.youtube.com/embed/U7y66sjX2b8", meaning: "To direct for information or anything required" },
            { word: "REFRIGERATOR", video: "https://www.youtube.com/embed/LOW8ZIaAJ-c", meaning: "An appliance or compartment that is artificially kept cool and used to store food and drink" },
            { word: "REJECT", video: "https://www.youtube.com/embed/NRQTQZk7QQY", meaning: "To refuse to accept, consider, or submit to" },
            { word: "RESEARCH", video: "https://www.youtube.com/embed/puR1m49pgzI", meaning: "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions" },
            { word: "RESERVE", video: "https://www.youtube.com/embed/N-Ka5PxfVkA", meaning: "To arrange for a place, ticket, etc. to be kept for the use of a particular person" },
            { word: "RHINO", video: "https://www.youtube.com/embed/2-scMsrwXTs", meaning: "Short for rhinoceros, a large, heavy plant-eating mammal with thick skin and one or two horns on the snout" },
            { word: "RIDE", video: "https://www.youtube.com/embed/Z-o_ssuD-Ys", meaning: "To sit on and control the movement of an animal, typically a horse, or a bicycle, motorcycle, or other vehicle" },
            { word: "RIVER", video: "https://www.youtube.com/embed/NyaG1U8eSOk", meaning: "A large natural stream of water flowing in a channel to the sea, a lake, or another river" },
            { word: "ROAD", video: "https://www.youtube.com/embed/suYp8zCSpWo", meaning: "A wide way leading from one place to another, especially one with a specially prepared surface which vehicles can use" },
            { word: "ROCKET", video: "https://www.youtube.com/embed/-JbDwGd48Ug", meaning: "A cylindrical projectile that can be propelled to a great height or distance by the combustion of its contents" },
            { word: "ROOF", video: "https://www.youtube.com/embed/gMWBLeAN2hQ", meaning: "The structure forming the upper covering of a building or vehicle" },
            { word: "ROOM", video: "https://www.youtube.com/embed/ByET2PW3OrQ", meaning: "A part or division of a building enclosed by walls, floor, and ceiling" },
            { word: "ROOMMATE", video: "https://www.youtube.com/embed/cMlRLyAmpZc", meaning: "A person with whom one shares a room or rooms" },
            { word: "ROOSTER", video: "https://www.youtube.com/embed/fwgPY78CFJM", meaning: "A male domestic chicken; a cock" },
            { word: "RUDE", video: "https://www.youtube.com/embed/OZy1ugYqyyc", meaning: "Offensively impolite or ill-mannered" }
        ],
        S: [
            { word: "SAD", video: "https://www.youtube.com/embed/zfkQYQhrZ6Q", meaning: "Feeling or showing sorrow; unhappy" },
            { word: "SALAD", video: "https://www.youtube.com/embed/UZgQNIxw2m8", meaning: "A cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients" },
            { word: "SALT", video: "https://www.youtube.com/embed/Ln3uCrAlHK8", meaning: "A white crystalline substance that gives seawater its characteristic taste and is used for seasoning or preserving food" },
            { word: "SAME", video: "https://www.youtube.com/embed/cnX45VWbjmc", meaning: "Identical; not different" },
            { word: "SAND", video: "https://www.youtube.com/embed/O1kESRrCxXs", meaning: "A loose granular substance, typically pale yellowish brown, resulting from the erosion of siliceous and other rocks and forming a major constituent of beaches, riverbeds, and deserts" },
            { word: "SANTA", video: "https://www.youtube.com/embed/6B7orPGHA1M", meaning: "A figure who brings gifts to children at Christmas" },
            { word: "SATURDAY", video: "https://www.youtube.com/embed/6aYPttH2RzM", meaning: "The day of the week before Sunday and following Friday" },
            { word: "SAUSAGE", video: "https://www.youtube.com/embed/nA6OnhvLRAc", meaning: "A cylindrical length of minced pork, beef, or other meat mixed with spices and other flavorings, often cooked and served in a bread roll" },
            { word: "SAY", video: "https://www.youtube.com/embed/fka6bGd2TX8", meaning: "Utter words so as to convey information, an opinion, a feeling or intention, or an instruction" },
            { word: "SCHEDULE", video: "https://www.youtube.com/embed/urAudhimoUY", meaning: "A plan for carrying out a process or procedure, giving lists of intended events and times" },
            { word: "SCHOOL", video: "https://www.youtube.com/embed/vuE3RN10AGA", meaning: "An institution for educating children" },
            { word: "SCORE", video: "https://www.youtube.com/embed/JrXnZCrlPVs", meaning: "The number of points, goals, runs, etc. achieved in a game or by a team or individual" },
            { word: "SCREW DRIVER", video: "https://www.youtube.com/embed/nBzc8dMJqnQ", meaning: "A tool with a flattened or cross-shaped tip that fits into the head of a screw to turn it" },
            { word: "SEASON", video: "https://www.youtube.com/embed/8qcbSguVCVk", meaning: "Each of the four divisions of the year marked by particular weather patterns and daylight hours, resulting from the earth's changing position with regard to the sun" },
            { word: "SEARCH", video: "https://www.youtube.com/embed/S0388ARjqm0", meaning: "Try to find something by looking or otherwise seeking carefully and thoroughly" },
            { word: "SECRET", video: "https://www.youtube.com/embed/ELNOdcy_1fE", meaning: "Not known or seen or not meant to be known or seen by others" },
            { word: "SEE", video: "https://www.youtube.com/embed/7XQiv-PxecU", meaning: "Perceive with the eyes; discern visually" },
            { word: "SELFISH", video: "https://www.youtube.com/embed/x3BCbaewkoc", meaning: "Lacking consideration for others; concerned chiefly with one's own personal profit or pleasure" },
            { word: "SEMESTER", video: "https://www.youtube.com/embed/wYKVsxvf1IE", meaning: "A half-year term in a school or college, typically lasting fifteen to eighteen weeks" },
            { word: "SPEECH", video: "https://www.youtube.com/embed/wLDniTJ6OYw", meaning: "The expression of or the ability to express thoughts and feelings by articulate sounds" },
            { word: "SHADOW", video: "https://www.youtube.com/embed/iiq0VEi1CRE", meaning: "A dark area or shape produced by a body coming between rays of light and a surface" },
            { word: "SHAPE", video: "https://www.youtube.com/embed/yOaMKIedOy4", meaning: "The external form or appearance characteristic of someone or something; the outline of an area or figure" },
            { word: "SHARK", video: "https://www.youtube.com/embed/ENWS_CNM71s", meaning: "A large predatory fish with a cartilaginous skeleton, a streamlined body, and typically five to seven gill slits on each side of its head" },
            { word: "STAIRS", video: "https://www.youtube.com/embed/9PmnHaz3iBs", meaning: "A series of steps and the surrounding structure supporting them" }
        ],

        T: [
            { word: "TACO", video: "https://www.youtube.com/embed/9-kEr3Kjmgo", meaning: "A Mexican dish consisting of a folded or rolled tortilla filled with various mixtures, typically including meat, beans, cheese, and vegetables" },
            { word: "TALK", video: "https://www.youtube.com/embed/vdR-bbV1az0", meaning: "Speak in order to give information or express ideas or feelings; converse or communicate by spoken words" },
            { word: "TASTE", video: "https://www.youtube.com/embed/4dQHo4Q2wGA", meaning: "Perceive or experience the flavor of (food or drink) by taking it into the mouth and swallowing" },
            { word: "TAX", video: "https://www.youtube.com/embed/mRYvl_vAvF4", meaning: "A compulsory contribution to state revenue, levied by the government on workers' income and business profits, or added to the cost of some goods, services, and transactions" },
            { word: "TEAM", video: "https://www.youtube.com/embed/5gTq_ttM6Qo", meaning: "A group of players forming one side in a competitive game or sport" },
            { word: "TEACHER", video: "https://www.youtube.com/embed/CrUCwJklAUA", meaning: "A person who teaches, especially in a school" },
            { word: "TECHNOLOGY", video: "https://www.youtube.com/embed/y2fdOnf8aF8", meaning: "The application of scientific knowledge for practical purposes, especially in industry" },
            { word: "TV", video: "https://www.youtube.com/embed/XH8-L7NjeNY", meaning: "A system for transmitting visual images and sound that are reproduced on screens, chiefly used to broadcast programs for entertainment, information, and education" },
            { word: "TELL", video: "https://www.youtube.com/embed/adSNJuxLPtI", meaning: "Communicate information, facts, or news to someone in spoken or written words" },
            { word: "TEMP", video: "https://www.youtube.com/embed/GcPs10m803Q", meaning: "The degree or intensity of heat present in a substance or object, especially as expressed according to a comparative scale and shown by a thermometer or perceived by touch" },
            { word: "THANK YOU", video: "https://www.youtube.com/embed/2W0BDFUjsG0", meaning: "Express gratitude to someone, especially by saying 'Thank you'" },
            { word: "THAT", video: "https://www.youtube.com/embed/G4HZ1OaQHpI", meaning: "Used to identify a specific person or thing observed by the speaker" },
            { word: "THINK", video: "https://www.youtube.com/embed/NdTKb3Kig88", meaning: "Have a particular opinion, belief, or idea about someone or something" },
            { word: "THIS", video: "https://www.youtube.com/embed/hfa0GQG-LYA", meaning: "Used to identify a specific person or thing close at hand or being indicated or experienced" },
            { word: "TIGER", video: "https://www.youtube.com/embed/CIHg8Ec_mnk", meaning: "A very large solitary cat with a yellow-brown coat striped with black, native to the forests of Asia but becoming increasingly rare" }
        ],

        U: [
            { word: "UNCLE", video: "https://www.youtube.com/embed/PqtMCA2lu9w", meaning: "The brother of one's father or mother; a male relative more distant than a brother or son of one's uncle or aunt" },
            { word: "UNDERSTAND", video: "https://www.youtube.com/embed/5N10dIavSYc", meaning: "Perceive the intended meaning of (words, a language, or speaker)" },
            { word: "UNITED STATES", video: "https://www.youtube.com/embed/8CEl2Rjsens", meaning: "A country in North America consisting of 50 states" },
            { word: "UNIVERSITY", video: "https://www.youtube.com/embed/A63jDYGVSPU", meaning: "An educational institution where higher education is taught, typically consisting of a college of liberal arts and sciences and one or more professional schools" },
            { word: "USE", video: "https://www.youtube.com/embed/yQScIrYGgaE", meaning: "Take, hold, or deploy (something) as a means of accomplishing a purpose or achieving a result; employ" }
        ],
        
        V: [
            { word: "VACATION", video: "https://www.youtube.com/embed/V81liG2gQbo", meaning: "An extended period of recreation, especially one spent away from home or in traveling" },
            { word: "VANILLA", video: "https://www.youtube.com/embed/oT2D32fbaUc", meaning: "A substance obtained from vanilla beans or produced artificially and used to flavor sweet foods or to impart a fragrant scent" },
            { word: "VEGAN", video: "https://www.youtube.com/embed/gmHWnc7pOv8", meaning: "A person who does not eat or use animal products" },
            { word: "VEGETABLE", video: "https://www.youtube.com/embed/m5lfRYfXUIQ", meaning: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean" },
            { word: "VERY", video: "https://www.youtube.com/embed/Xs_O-bfF7ik", meaning: "Used to emphasize an adjective or adverb" },
            { word: "VICTORY", video: "https://www.youtube.com/embed/Yqom91cTkZE", meaning: "An act of defeating an enemy or opponent in a battle, game, or other competition" },
            { word: "VIDEO", video: "https://www.youtube.com/embed/AWfjsUhFeOw", meaning: "The recording, reproducing, or broadcasting of moving visual images" },
            { word: "VIDEOCALL", video: "https://www.youtube.com/embed/cHpPKJ7GXoU", meaning: "A telephone call made with both video and audio, enabling the callers to see each other as well as talk" }
        ],

        W: [
            { word: "WALK", video: "https://www.youtube.com/embed/5iv2XtBzogU", meaning: "Move at a regular and fairly slow pace by lifting and setting down each foot in turn" },
            { word: "WARM", video: ["https://www.youtube.com/embed/rSgVWUc1J0w", "https://www.youtube.com/embed/ucCwQC43j7c", "https://www.youtube.com/embed/1XSPru7x0G4"], meaning: "Having or giving out a moderate degree of heat, in particular" },
            { word: "WASH", video: "https://www.youtube.com/embed/Whiibgq84LY", meaning: "Clean with water and, typically, soap or detergent" },
            { word: "WRIST WATCH", video: "https://www.youtube.com/embed/A287sU6gWLk", meaning: "A small watch worn strapped to the wrist" },
            { word: "WATCH", video: "https://www.youtube.com/embed/4cn6Fyzz8ns", meaning: "Look at or observe attentively over a period of time" },
            { word: "WATER", video: "https://www.youtube.com/embed/-SdOfxGhb0A", meaning: "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms" },
            { word: "WE", video: "https://www.youtube.com/embed/DJU9Vnthfqk", meaning: "Used by a speaker to refer to himself or herself and one or more other people considered together" },
            { word: "WEATHER", video: "https://www.youtube.com/embed/AxL3Q6C73fg", meaning: "The state of the atmosphere at a particular place and time as regards heat, dryness, sunshine, wind, rain, etc." },
            { word: "WEB", video: "https://www.youtube.com/embed/ApBX0hnLN6E", meaning: "A network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey" },
            { word: "WEB CAM", video: "https://www.youtube.com/embed/c6fmhkAnpnA", meaning: "A video camera connected to a computer, allowing its images to be accessed by Internet users" },
            { word: "WEB SITE", video: "https://www.youtube.com/embed/ApBX0hnLN6E", meaning: "A location connected to the Internet that maintains one or more pages on the World Wide Web" },
            { word: "WEEK", video: "https://www.youtube.com/embed/N6giWOcMj2U", meaning: "A period of seven days" },
            { word: "NEXT WEEK", video: "https://www.youtube.com/embed/6h0sXdprq8I", meaning: "The week immediately following the present one" },
            { word: "LAST WEEK", video: "https://www.youtube.com/embed/7aWwoS24vxE", meaning: "The week preceding the present one" },
            { word: "WEEKEND", video: "https://www.youtube.com/embed/o0D-dVMQr1E", meaning: "The period from Friday evening through Sunday evening, especially regarded as a time for leisure" },
            { word: "WERE", video: "https://www.youtube.com/embed/j7rjBay5FIE", meaning: "Second person singular past, plural past, and past subjunctive of 'be'" },
            { word: "WHALE", video: "https://www.youtube.com/embed/IylpLuvERVE", meaning: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing" },
            { word: "WHEN", video: "https://www.youtube.com/embed/YWxvqP__qos", meaning: "At what time" },
            { word: "WHERE", video: "https://www.youtube.com/embed/HS0SXS-GHYY", meaning: "In or to what place or position" },
            { word: "WORLD", video: "https://www.youtube.com/embed/-H4PejCdr6Y", meaning: "The earth, together with all of its countries, peoples, and natural features" },
            { word: "WAITER", video: "https://www.youtube.com/embed/2icFerNdwcA", meaning: "A man whose job is to serve customers at their tables in a restaurant" }
        ],

        
        Y: [
            { word: "YES", video: "https://www.youtube.com/embed/0usayvOXzHo", meaning: "Used to give an affirmative response" },
            { word: "YEAR", video: "https://www.youtube.com/embed/zTIJAgTai40", meaning: "The time taken by a planet to make one revolution around the sun" },
            { word: "YESTERDAY", video: "https://www.youtube.com/embed/BrSb83b9kbY", meaning: "On the day before today" },
            { word: "YOUR", video: "https://www.youtube.com/embed/J5cjDBY1QU0", meaning: "Belonging to or associated with the person or people that the speaker is addressing" }
        ],
        Z: [
            { word: "ZIP", video: "https://www.youtube.com/embed/8wuLrFkO-SU", meaning: "Fasten or provide (something) with a zip or zips" },
            { word: "ZZ", video: ["https://www.youtube.com/embed/XIZ2DrdEU3k", "https://www.youtube.com/embed/ozcv0Y45bTM", "https://www.youtube.com/embed/9aWcRMr0qLM"], meaning: "A buzzing sound like that of a bee" }
        ],
};

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.trim().toUpperCase();
    filterWordsBySearch(searchTerm);
});

function filterWordsBySearch(searchTerm) {
    const wordList = document.getElementById('words');
    wordList.innerHTML = '';

    let found = false;

    Object.keys(words).forEach(letter => {
        words[letter].forEach(item => {
            if (item.word.toUpperCase().includes(searchTerm)) {
                found = true;
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = "#";
                a.textContent = item.word;
                a.onclick = () => {
                    showVideoAndMeaning(item.video, item.meaning);
                    return false;
                };
                li.appendChild(a);
                wordList.appendChild(li);
            }
        });
    });

    if (!found) {
        const li = document.createElement('li');
        li.textContent = 'No matches found';
        wordList.appendChild(li);
    }
}

function filterWords(letter) {
    const wordList = document.getElementById('words');
    wordList.innerHTML = '';

    if (words[letter]) {
        words[letter].forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = item.word;
            a.onclick = () => {
                showVideoAndMeaning(item.video, item.meaning);
                return false;
            };
            li.appendChild(a);
            wordList.appendChild(li);
        });
    }
}

function showVideoAndMeaning(videoUrl, meaning) {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');
    const meaningDiv = document.getElementById('meaning');

    video.src = videoUrl;
    meaningDiv.textContent = meaning;

    videoContainer.classList.add('visible');
    meaningDiv.classList.add('visible');

    videoContainer.scrollIntoView({ behavior: 'smooth' });
}

// Initialize with words starting with A
document.addEventListener('DOMContentLoaded', function() {
    filterWords('A');
    
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});   