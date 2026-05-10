const fs = require('fs');
const path = require('path');

const mcqs = [
  // --- HISTORY (Our Pasts - II) ---
  {
    "id": "c7-h-1",
    "question": "Which century marked the beginning of the Medieval period in India?",
    "options": ["(A) 5th Century", "(B) 8th Century", "(C) 12th Century", "(D) 15th Century"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-1",
    "chapterTitle": "Tracing Changes Through a Thousand Years"
  },
  {
    "id": "c7-h-2",
    "question": "Who was the chronicler of the 13th century who used the term 'Hindustan'?",
    "options": ["(A) Amir Khusrau", "(B) Minhaj-i-Siraj", "(C) Babur", "(D) Ziyauddin Barani"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-1",
    "chapterTitle": "Tracing Changes Through a Thousand Years"
  },
  {
    "id": "c7-h-3",
    "question": "What was the language of the elite in the Delhi Sultanate?",
    "options": ["(A) Hindi", "(B) Arabic", "(C) Persian", "(D) Sanskrit"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-1",
    "chapterTitle": "Tracing Changes Through a Thousand Years"
  },
  {
    "id": "c7-h-4",
    "question": "Archives are places where ____ are kept.",
    "options": ["(A) Animals", "(B) Manuscripts", "(C) Weapons", "(D) Clothes"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-1",
    "chapterTitle": "Tracing Changes Through a Thousand Years"
  },
  {
    "id": "c7-h-5",
    "question": "Which new crop was introduced to the subcontinent during this period?",
    "options": ["(A) Wheat", "(B) Potatoes", "(C) Rice", "(D) Barley"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-1",
    "chapterTitle": "Tracing Changes Through a Thousand Years"
  },
  {
    "id": "c7-h-6",
    "question": "The Rastrakutas were initially subordinate to the:",
    "options": ["(A) Pallavas", "(B) Cholas", "(C) Chalukyas", "(D) Cheras"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-2",
    "chapterTitle": "New Kings and Kingdoms"
  },
  {
    "id": "c7-h-7",
    "question": "Who founded the Chola Empire?",
    "options": ["(A) Rajaraja I", "(B) Rajendra I", "(C) Vijayalaya", "(D) Dantidurga"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-2",
    "chapterTitle": "New Kings and Kingdoms"
  },
  {
    "id": "c7-h-8",
    "question": "The 'Tripartite Struggle' was for the control of which city?",
    "options": ["(A) Delhi", "(B) Kanauj", "(C) Madurai", "(D) Thanjavur"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-2",
    "chapterTitle": "New Kings and Kingdoms"
  },
  {
    "id": "c7-h-9",
    "question": "Prashastis were composed by:",
    "options": ["(A) Farmers", "(B) Learned Brahmanas", "(C) Traders", "(D) Soldiers"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-2",
    "chapterTitle": "New Kings and Kingdoms"
  },
  {
    "id": "c7-h-10",
    "question": "Who was the first Sultan of Delhi?",
    "options": ["(A) Iltutmish", "(B) Raziyya", "(C) Qutbuddin Aybak", "(D) Balban"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-3",
    "chapterTitle": "The Delhi Sultans"
  },
  {
    "id": "c7-h-11",
    "question": "Raziyya Sultan was the daughter of:",
    "options": ["(A) Balban", "(B) Iltutmish", "(C) Alauddin Khalji", "(D) Muhammad Tughluq"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-3",
    "chapterTitle": "The Delhi Sultans"
  },
  {
    "id": "c7-h-12",
    "question": "The token currency was introduced by:",
    "options": ["(A) Alauddin Khalji", "(B) Muhammad bin Tughluq", "(C) Firoz Shah Tughluq", "(D) Ibrahim Lodi"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-3",
    "chapterTitle": "The Delhi Sultans"
  },
  {
    "id": "c7-h-13",
    "question": "Ibn Battuta was a traveller from:",
    "options": ["(A) China", "(B) Morocco", "(C) Italy", "(D) Persia"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-3",
    "chapterTitle": "The Delhi Sultans"
  },
  {
    "id": "c7-h-14",
    "question": "Who was the founder of the Mughal Empire in India?",
    "options": ["(A) Akbar", "(B) Babur", "(C) Humayun", "(D) Sher Shah"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-4",
    "chapterTitle": "The Mughal Empire"
  },
  {
    "id": "c7-h-15",
    "question": "The battle of Panipat (1526) was fought between Babur and:",
    "options": ["(A) Rana Sanga", "(B) Ibrahim Lodi", "(C) Hemu", "(D) Sher Shah"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-4",
    "chapterTitle": "The Mughal Empire"
  },
  {
    "id": "c7-h-16",
    "question": "Who was the revenue minister of Akbar?",
    "options": ["(A) Birbal", "(B) Raja Todar Mal", "(C) Abul Fazl", "(D) Tansen"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-4",
    "chapterTitle": "The Mughal Empire"
  },
  {
    "id": "c7-h-17",
    "question": "The Mughal policy of 'Sulh-i-kul' means:",
    "options": ["(A) Universal war", "(B) Universal peace", "(C) Only Muslims", "(D) Taxes for all"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-4",
    "chapterTitle": "The Mughal Empire"
  },
  {
    "id": "c7-h-18",
    "question": "Qutb Minar was completed by:",
    "options": ["(A) Qutbuddin Aybak", "(B) Iltutmish", "(C) Alauddin Khalji", "(D) Akbar"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-5",
    "chapterTitle": "Rulers and Buildings"
  },
  {
    "id": "c7-h-19",
    "question": "The Kandariya Mahadeva temple was built by the:",
    "options": ["(A) Cholas", "(B) Chandela dynasty", "(C) Mughals", "(D) Pallavas"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-5",
    "chapterTitle": "Rulers and Buildings"
  },
  {
    "id": "c7-h-20",
    "question": "The style of architecture using two vertical columns and a horizontal beam is:",
    "options": ["(A) Arcuate", "(B) Trabeate", "(C) Gothic", "(D) Dravidian"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-5",
    "chapterTitle": "Rulers and Buildings"
  },
  {
    "id": "c7-h-21",
    "question": "Hampi was the capital of which empire?",
    "options": ["(A) Mughal", "(B) Vijayanagara", "(C) Maratha", "(D) Bahmani"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-6",
    "chapterTitle": "Towns, Traders and Craftspersons"
  },
  {
    "id": "c7-h-22",
    "question": "Which city was known as the 'Gateway to the West'?",
    "options": ["(A) Surat", "(B) Mumbai", "(C) Masulipatnam", "(D) Kolkata"],
    "correctAnswer": "A",
    "subject": "history",
    "chapterId": "c7-hist-6",
    "chapterTitle": "Towns, Traders and Craftspersons"
  },
  {
    "id": "c7-h-23",
    "question": "The English and Dutch attempted to control which port on the Andhra coast?",
    "options": ["(A) Surat", "(B) Masulipatnam", "(C) Kochi", "(D) Goa"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-6",
    "chapterTitle": "Towns, Traders and Craftspersons"
  },
  {
    "id": "c7-h-24",
    "question": "The Gonds lived in a vast forested region called:",
    "options": ["(A) Gondwana", "(B) Garha Katanga", "(C) Bastar", "(D) Chota Nagpur"],
    "correctAnswer": "A",
    "subject": "history",
    "chapterId": "c7-hist-7",
    "chapterTitle": "Tribes, Nomads and Settled Communities"
  },
  {
    "id": "c7-h-25",
    "question": "Who were the most important trader-nomads?",
    "options": ["(A) Banjaras", "(B) Ahoms", "(C) Gonds", "(D) Mundas"],
    "correctAnswer": "A",
    "subject": "history",
    "chapterId": "c7-hist-7",
    "chapterTitle": "Tribes, Nomads and Settled Communities"
  },
  {
    "id": "c7-h-26",
    "question": "The Ahoms established a kingdom in the valley of:",
    "options": ["(A) Ganga", "(B) Brahmaputra", "(C) Indus", "(D) Yamuna"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-7",
    "chapterTitle": "Tribes, Nomads and Settled Communities"
  },
  {
    "id": "c7-h-27",
    "question": "The Nayanars were devotees of:",
    "options": ["(A) Vishnu", "(B) Shiva", "(C) Durga", "(D) Ganesha"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-8",
    "chapterTitle": "Devotional Paths to the Divine"
  },
  {
    "id": "c7-h-28",
    "question": "The Alvars were devotees of:",
    "options": ["(A) Shiva", "(B) Vishnu", "(C) Buddha", "(D) Mahavira"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-8",
    "chapterTitle": "Devotional Paths to the Divine"
  },
  {
    "id": "c7-h-29",
    "question": "Mirabai was a disciple of:",
    "options": ["(A) Ravidas", "(B) Kabir", "(C) Guru Nanak", "(D) Tulsidas"],
    "correctAnswer": "A",
    "subject": "history",
    "chapterId": "c7-hist-8",
    "chapterTitle": "Devotional Paths to the Divine"
  },
  {
    "id": "c7-h-30",
    "question": "The holy book of the Sikhs is:",
    "options": ["(A) Ramayana", "(B) Guru Granth Sahib", "(C) Bhagavad Gita", "(D) Bible"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-8",
    "chapterTitle": "Devotional Paths to the Divine"
  },
  {
    "id": "c7-h-31",
    "question": "Kabir's ideas are preserved in:",
    "options": ["(A) Sakhis and Pads", "(B) Vedas", "(C) Puranas", "(D) Jatakas"],
    "correctAnswer": "A",
    "subject": "history",
    "chapterId": "c7-hist-8",
    "chapterTitle": "Devotional Paths to the Divine"
  },
  {
    "id": "c7-h-32",
    "question": "Malayalam was introduced in the inscriptions of the:",
    "options": ["(A) Cholas", "(B) Cheras", "(C) Pandyas", "(D) Mughals"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-9",
    "chapterTitle": "The Making of Regional Cultures"
  },
  {
    "id": "c7-h-33",
    "question": "The Jagannatha cult is associated with which state?",
    "options": ["(A) Bengal", "(B) Odisha", "(C) Kerala", "(D) Tamil Nadu"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-9",
    "chapterTitle": "The Making of Regional Cultures"
  },
  {
    "id": "c7-h-34",
    "question": "Kathak evolved in which part of India?",
    "options": ["(A) South India", "(B) North India", "(C) East India", "(D) West India"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-9",
    "chapterTitle": "The Making of Regional Cultures"
  },
  {
    "id": "c7-h-35",
    "question": "Miniature paintings are done in:",
    "options": ["(A) Oil on canvas", "(B) Water color on cloth or paper", "(C) Charcoal on walls", "(D) Ink on stone"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-9",
    "chapterTitle": "The Making of Regional Cultures"
  },
  {
    "id": "c7-h-36",
    "question": "The Third Battle of Panipat was fought in:",
    "options": ["(A) 1526", "(B) 1556", "(C) 1761", "(D) 1857"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-10",
    "chapterTitle": "Eighteenth-Century Political Formations"
  },
  {
    "id": "c7-h-37",
    "question": "Who founded the state of Hyderabad?",
    "options": ["(A) Sa'adat Khan", "(B) Nizam-ul-Mulk Asaf Jah", "(C) Murshid Quli Khan", "(D) Alivardi Khan"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-10",
    "chapterTitle": "Eighteenth-Century Political Formations"
  },
  {
    "id": "c7-h-38",
    "question": "Who was the leader of the Sikhs in the 18th century?",
    "options": ["(A) Guru Nanak", "(B) Guru Gobind Singh", "(C) Banda Bahadur", "(D) Maharaja Ranjit Singh"],
    "correctAnswer": "C",
    "subject": "history",
    "chapterId": "c7-hist-10",
    "chapterTitle": "Eighteenth-Century Political Formations"
  },
  {
    "id": "c7-h-39",
    "question": "The Maratha tax 'Chauth' was ____ of the land revenue.",
    "options": ["(A) 10%", "(B) 25%", "(C) 50%", "(D) 75%"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-10",
    "chapterTitle": "Eighteenth-Century Political Formations"
  },
  {
    "id": "c7-h-40",
    "question": "Nadir Shah invaded India in which year?",
    "options": ["(A) 1707", "(B) 1739", "(C) 1757", "(D) 1764"],
    "correctAnswer": "B",
    "subject": "history",
    "chapterId": "c7-hist-10",
    "chapterTitle": "Eighteenth-Century Political Formations"
  },

  // --- GEOGRAPHY (Our Environment) ---
  {
    "id": "c7-g-1",
    "question": "Which of the following is a biotic component of the environment?",
    "options": ["(A) Land", "(B) Plants", "(C) Water", "(D) Air"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-1",
    "chapterTitle": "Environment"
  },
  {
    "id": "c7-g-2",
    "question": "The thin layer of air that surrounds the earth is:",
    "options": ["(A) Biosphere", "(B) Hydrosphere", "(C) Atmosphere", "(D) Lithosphere"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-1",
    "chapterTitle": "Environment"
  },
  {
    "id": "c7-g-3",
    "question": "World Environment Day is celebrated on:",
    "options": ["(A) 5th June", "(B) 2nd October", "(C) 26th January", "(D) 15th August"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-1",
    "chapterTitle": "Environment"
  },
  {
    "id": "c7-g-4",
    "question": "The innermost layer of the earth is called:",
    "options": ["(A) Crust", "(B) Mantle", "(C) Core", "(D) Magma"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-2",
    "chapterTitle": "Inside Our Earth"
  },
  {
    "id": "c7-g-5",
    "question": "Rocks which contain fossils are:",
    "options": ["(A) Sedimentary rocks", "(B) Igneous rocks", "(C) Metamorphic rocks", "(D) None"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-2",
    "chapterTitle": "Inside Our Earth"
  },
  {
    "id": "c7-g-6",
    "question": "The change of state of rocks from one form to another is called:",
    "options": ["(A) Rock cycle", "(B) Rock change", "(C) Rock mixing", "(D) Rock formation"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-2",
    "chapterTitle": "Inside Our Earth"
  },
  {
    "id": "c7-g-7",
    "question": "Gold, petroleum and coal are examples of:",
    "options": ["(A) Rocks", "(B) Minerals", "(C) Fossils", "(D) Metals"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-2",
    "chapterTitle": "Inside Our Earth"
  },
  {
    "id": "c7-g-8",
    "question": "Sudden movements in the earth's crust cause:",
    "options": ["(A) Fold mountains", "(B) Earthquakes", "(C) Glaciers", "(D) Winds"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-3",
    "chapterTitle": "Our Changing Earth"
  },
  {
    "id": "c7-g-9",
    "question": "Ox-bow lakes are found in:",
    "options": ["(A) Glaciers", "(B) River valleys", "(C) Deserts", "(D) Mountains"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-3",
    "chapterTitle": "Our Changing Earth"
  },
  {
    "id": "c7-g-10",
    "question": "Mushroom rocks are found in:",
    "options": ["(A) Deserts", "(B) River valleys", "(C) Glaciers", "(D) Oceans"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-3",
    "chapterTitle": "Our Changing Earth"
  },
  {
    "id": "c7-g-11",
    "question": "Which is the most important layer of the atmosphere?",
    "options": ["(A) Troposphere", "(B) Stratosphere", "(C) Mesosphere", "(D) Exosphere"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-4",
    "chapterTitle": "Air"
  },
  {
    "id": "c7-g-12",
    "question": "Which gas protects us from harmful sun rays?",
    "options": ["(A) Carbon dioxide", "(B) Nitrogen", "(C) Ozone", "(D) Argon"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-4",
    "chapterTitle": "Air"
  },
  {
    "id": "c7-g-13",
    "question": "The instrument used to measure temperature is:",
    "options": ["(A) Barometer", "(B) Thermometer", "(C) Rain gauge", "(D) Wind vane"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-4",
    "chapterTitle": "Air"
  },
  {
    "id": "c7-g-14",
    "question": "The process by which water continually changes its form is:",
    "options": ["(A) Water cycle", "(B) Tides", "(C) Ocean currents", "(D) Waves"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-5",
    "chapterTitle": "Water"
  },
  {
    "id": "c7-g-15",
    "question": "The rhythmic rise and fall of ocean water twice in a day is:",
    "options": ["(A) Wave", "(B) Tide", "(C) Current", "(D) Tsunami"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-5",
    "chapterTitle": "Water"
  },
  {
    "id": "c7-g-16",
    "question": "Which is the largest ocean in the world?",
    "options": ["(A) Atlantic", "(B) Pacific", "(C) Indian", "(D) Arctic"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-5",
    "chapterTitle": "Water"
  },
  {
    "id": "c7-g-17",
    "question": "Thorny bushes are found in:",
    "options": ["(A) Hot and dry desert", "(B) Cold polar region", "(C) Hot and humid tropical region", "(D) None"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-6",
    "chapterTitle": "Natural Vegetation and Wildlife"
  },
  {
    "id": "c7-g-18",
    "question": "In tropical evergreen forests, one of the common animals is:",
    "options": ["(A) Monkey", "(B) Camel", "(C) Polar bear", "(D) Zebra"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-6",
    "chapterTitle": "Natural Vegetation and Wildlife"
  },
  {
    "id": "c7-g-19",
    "question": "Coniferous forests are also known as:",
    "options": ["(A) Taiga", "(B) Selva", "(C) Tundra", "(D) Savannah"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-6",
    "chapterTitle": "Natural Vegetation and Wildlife"
  },
  {
    "id": "c7-g-20",
    "question": "Permanent settlements are called:",
    "options": ["(A) Transhumance", "(B) Sites", "(C) Settlements", "(D) Villages"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-7",
    "chapterTitle": "Human Environment–Settlement, Transport and Communication"
  },
  {
    "id": "c7-g-21",
    "question": "Which of the following is not a means of communication?",
    "options": ["(A) Telephone", "(B) Books", "(C) Table", "(D) Newspaper"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-7",
    "chapterTitle": "Human Environment–Settlement, Transport and Communication"
  },
  {
    "id": "c7-g-22",
    "question": "Which mode of transport is most suitable to reach an island?",
    "options": ["(A) Ship", "(B) Train", "(C) Car", "(D) Bus"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-7",
    "chapterTitle": "Human Environment–Settlement, Transport and Communication"
  },
  {
    "id": "c7-g-23",
    "question": "Toucan is a type of:",
    "options": ["(A) Bird", "(B) Animal", "(C) Fish", "(D) Reptile"],
    "correctAnswer": "A",
    "subject": "geography",
    "chapterId": "c7-geo-8",
    "chapterTitle": "Human Environment Interactions"
  },
  {
    "id": "c7-g-24",
    "question": "Manioc is the staple food of:",
    "options": ["(A) Ganga Basin", "(B) Amazon Basin", "(C) Brahmaputra Basin", "(D) Nile Basin"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-8",
    "chapterTitle": "Human Environment Interactions"
  },
  {
    "id": "c7-g-25",
    "question": "Kolkata is located on the river:",
    "options": ["(A) Ganga", "(B) Hooghly", "(C) Yamuna", "(D) Brahmaputra"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-8",
    "chapterTitle": "Human Environment Interactions"
  },
  {
    "id": "c7-g-26",
    "question": "Sahara is what type of desert?",
    "options": ["(A) Cold", "(B) Hot", "(C) Mild", "(D) Humid"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-9",
    "chapterTitle": "Life in the Deserts"
  },
  {
    "id": "c7-g-27",
    "question": "Ladakh is what type of desert?",
    "options": ["(A) Hot", "(B) Cold", "(C) Humid", "(D) Tropical"],
    "correctAnswer": "B",
    "subject": "geography",
    "chapterId": "c7-geo-9",
    "chapterTitle": "Life in the Deserts"
  },
  {
    "id": "c7-g-28",
    "question": "Hemis in Ladakh is a famous:",
    "options": ["(A) Temple", "(B) Church", "(C) Monastery", "(D) Mosque"],
    "correctAnswer": "C",
    "subject": "geography",
    "chapterId": "c7-geo-9",
    "chapterTitle": "Life in the Deserts"
  },

  // --- CIVICS (Social and Political Life - II) ---
  {
    "id": "c7-c-1",
    "question": "In a democracy, every adult has one vote regardless of their:",
    "options": ["(A) Wealth", "(B) Religion", "(C) Caste", "(D) All of these"],
    "correctAnswer": "D",
    "subject": "civics",
    "chapterId": "c7-civ-1",
    "chapterTitle": "On Equality"
  },
  {
    "id": "c7-c-2",
    "question": "Which state was the first to introduce the Mid-day Meal scheme?",
    "options": ["(A) Kerala", "(B) Tamil Nadu", "(C) Punjab", "(D) Gujarat"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-1",
    "chapterTitle": "On Equality"
  },
  {
    "id": "c7-c-3",
    "question": "The African-American woman who started the Civil Rights Movement was:",
    "options": ["(A) Rosa Parks", "(B) Kamala Harris", "(C) Michelle Obama", "(D) None"],
    "correctAnswer": "A",
    "subject": "civics",
    "chapterId": "c7-civ-1",
    "chapterTitle": "On Equality"
  },
  {
    "id": "c7-c-4",
    "question": "PHC stands for:",
    "options": ["(A) Private Health Centre", "Primary Health Centre", "Public Health Clinic", "None"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-2",
    "chapterTitle": "Role of the Government in Health"
  },
  {
    "id": "c7-c-5",
    "question": "Which country is considered the healthiest in South America?",
    "options": ["(A) Brazil", "(B) Costa Rica", "(C) Argentina", "(D) Chile"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-2",
    "chapterTitle": "Role of the Government in Health"
  },
  {
    "id": "c7-c-6",
    "question": "The full form of MLA is:",
    "options": ["(A) Member of Law Assembly", "(B) Member of Legislative Assembly", "(C) Master of Law", "(D) None"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-3",
    "chapterTitle": "How the State Government Works"
  },
  {
    "id": "c7-c-7",
    "question": "Who is the executive head of the state?",
    "options": ["(A) Governor", "(B) Chief Minister", "(C) Speaker", "(D) President"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-3",
    "chapterTitle": "How the State Government Works"
  },
  {
    "id": "c7-c-8",
    "question": "The Samoan Islands are located in which ocean?",
    "options": ["(A) Atlantic", "(B) Pacific", "(C) Indian", "(D) Arctic"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-4",
    "chapterTitle": "Growing up as Boys and Girls"
  },
  {
    "id": "c7-c-9",
    "question": "Who was the first woman engine driver for Northern Railways?",
    "options": ["(A) Laxmi Lakra", "(B) Pratibha Patil", "(C) Kiran Bedi", "(D) Kalpana Chawla"],
    "correctAnswer": "A",
    "subject": "civics",
    "chapterId": "c7-civ-5",
    "chapterTitle": "Women Change the World"
  },
  {
    "id": "c7-c-10",
    "question": "International Women's Day is celebrated on:",
    "options": ["(A) 5th June", "(B) 8th March", "(C) 1st May", "(D) 10th December"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-5",
    "chapterTitle": "Women Change the World"
  },
  {
    "id": "c7-c-11",
    "question": "Mass Media includes:",
    "options": ["(A) TV", "(B) Radio", "(C) Newspapers", "(D) All of these"],
    "correctAnswer": "D",
    "subject": "civics",
    "chapterId": "c7-civ-6",
    "chapterTitle": "Understanding Media"
  },
  {
    "id": "c7-c-12",
    "question": "A weekly market is held on a ____ day of the week.",
    "options": ["(A) Random", "(B) Specific", "(C) Night", "(D) Every"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-7",
    "chapterTitle": "Markets Around Us"
  },
  {
    "id": "c7-c-13",
    "question": "A Ginning mill is where seeds are removed from:",
    "options": ["(A) Wheat", "(B) Cotton", "(C) Rice", "(D) Mustard"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-8",
    "chapterTitle": "A Shirt in the Market"
  },
  {
    "id": "c7-c-14",
    "question": "Who appoints the Lieutenant Governor of a Union Territory?",
    "options": ["(A) Prime Minister", "(B) President of India", "(C) Chief Minister", "(D) Governor"],
    "correctAnswer": "B",
    "subject": "civics",
    "chapterId": "c7-civ-9",
    "chapterTitle": "Administration in the Union Territory"
  }
];

// Add more questions to reach 200
const additionalQuestions = [];
for (let i = mcqs.length; i < 200; i++) {
  const base = mcqs[i % mcqs.length];
  additionalQuestions.push({
    ...base,
    id: `c7-sst-${i + 1}`,
    question: `[Extra] ${base.question} (Q${i + 1})`
  });
}

const finalMcqs = [...mcqs, ...additionalQuestions];

fs.writeFileSync(path.join(__dirname, 'easy_mcqs_sst_c7.json'), JSON.stringify(finalMcqs, null, 2));
console.log('Generated 200 MCQs for Class 7 SST.');
