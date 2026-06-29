/* ============================================================
   lang.js  -  English <-> Marathi Language Toggle
   VirtualWhiteFlame - Sab 20 pages pe kaam karega
   ============================================================ */

(function () {

  /* ── TRANSLATION MAP ── */
  const TRANSLATIONS = {

    /* ── NAVBAR ── */
    'Home': 'मुख्यपृष्ठ',
    'About Us': 'आमच्याबद्दल',
    'Company History': 'कंपनी इतिहास',
    'Vision & Mission': 'दृष्टी आणि ध्येय',
    'Founder': 'संस्थापक',
    'Services': 'सेवा',
    'Support Services': 'सहाय्यक सेवा',
    'Customer Services': 'ग्राहक सेवा',
    'Business Services': 'व्यवसाय सेवा',
    'Products': 'उत्पादने',
    'Plants': 'प्रकल्प',
    'Gallery': 'गॅलरी',
    'Videos': 'व्हिडिओ',
    'Images': 'प्रतिमा',
    'Event Albums': 'इव्हेंट अल्बम',
    'Career': 'करिअर',
    'Contact Us': 'संपर्क करा',
    'Brouture': 'ब्रोशर',

    /* ── SEARCH OVERLAY ── */
    'Search menu items…': 'मेनू शोधा…',
    'No results found': 'काहीही सापडले नाही',
    'Press': 'दाबा',
    'to close': 'बंद करण्यासाठी',
    'Main': 'मुख्य',
    'About': 'माहिती',

    /* ── HOME — ABOUT SECTION ── */
    'Virtual White Flame PVT. LTD.': 'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि.',
    'Virtual White Flame PVT. LTD. is a leading Biomass Briquettes/Biomass Pellets manufacturer & supplier covering major regions of India. The company is established in Year 2011 by the name of Seva Bio Brikets with the dynamics of a mixed management. All directors are having more than 12 years of business experience. We help in converting all types of industrial, agriculture and forestry waste into solid fuel. Considering market demand of Briquettes & to improve the customer service, established Virtual White Flame PVT. LTD. in Year 2017.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारताच्या प्रमुख प्रदेशांमध्ये सेवा देणारी आघाडीची बायोमास ब्रिकेट/बायोमास पेलेट उत्पादक आणि पुरवठादार कंपनी आहे. कंपनीची स्थापना २०११ मध्ये सेवा बायो ब्रिकेट्स या नावाने मिश्र व्यवस्थापनाच्या गतिशीलतेसह झाली. सर्व संचालकांना १२ वर्षांहून अधिक व्यावसायिक अनुभव आहे. आम्ही सर्व प्रकारचा औद्योगिक, कृषी आणि वनीय कचरा घन इंधनात रूपांतरित करण्यात मदत करतो. ब्रिकेट्सच्या बाजार मागणीचा विचार करून आणि ग्राहक सेवा सुधारण्यासाठी २०१७ मध्ये व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ची स्थापना केली.',
    'Read More': 'अधिक वाचा',

    /* ── HOME — ABOUT SECTION (extra paragraphs) ── */
    'Virtual White Flame PVT. LTD. now produces and promotes sales of 10,000+ Biomass fuel per month. Our long-term experience in the industry has taught us how to meet and exceed each customer\'s expectation. The company has developed new technology resources for handling solid fuel to improve efficiency.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. आता दर महिन्याला १०,०००+ बायोमास इंधनाचे उत्पादन आणि विक्री करते. उद्योगातील दीर्घकालीन अनुभवाने आम्हाला प्रत्येक ग्राहकाची अपेक्षा पूर्ण व ओलांडण्यास शिकवले आहे. कंपनीने घन इंधन हाताळणीसाठी नवीन तंत्रज्ञान संसाधने विकसित केली आहेत.',
    'Virtual White Flame PVT. LTD. plays important roles for new vendor development and agriculture raw material collection and supplier development to huge scale aggregation and supply chain consulting.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. नवीन विक्रेता विकास, कृषी कच्चा माल संकलन, पुरवठादार विकास, मोठ्या प्रमाणावर एकत्रीकरण आणि पुरवठा साखळी सल्लामसलत यामध्ये महत्त्वाची भूमिका बजावते.',

    /* ── HOME — FAQ SECTION ── */
    'Frequently Asked Questions': 'वारंवार विचारले जाणारे प्रश्न',
    'Q1. What different services do we provide?': 'प्र१. आम्ही कोणत्या वेगवेगळ्या सेवा पुरवतो?',
    'We offer consultation services for start-up plant setup. Our primary focus is to educate start-up teams by providing valuable insights and expert advice to ensure their successful establishment. We also support with legal procedures such as licensing, subsidies, and certifications.':
      'आम्ही स्टार्ट-अप प्लांट सेटअपसाठी सल्लामसलत सेवा देतो. स्टार्ट-अप टीमला मौल्यवान माहिती आणि तज्ज्ञ सल्ला देऊन त्यांची यशस्वी स्थापना सुनिश्चित करणे हे आमचे प्राथमिक ध्येय आहे. परवाना, अनुदान आणि प्रमाणपत्रे यांसारख्या कायदेशीर प्रक्रियांमध्येही आम्ही मदत करतो.',
    'We provide guidance on manufacturing processes, ensuring efficiency and effectiveness. Our organisation ensures every entity in our partnership experiences a growing sales graph. We assist in branding and provide strategic consultancy for sales growth, marketing techniques, and brand establishment planning.':
      'आम्ही उत्पादन प्रक्रियेवर मार्गदर्शन करतो, कार्यक्षमता आणि परिणामकारकता सुनिश्चित करतो. आमच्या भागीदारीतील प्रत्येक घटकाला वाढती विक्री अनुभवता यावी याची आमची संस्था खात्री करते. आम्ही ब्रँडिंगमध्ये मदत करतो आणि विक्री वाढ, विपणन तंत्रे व ब्रँड स्थापना नियोजनासाठी धोरणात्मक सल्लामसलत देतो.',
    'Q2. Why choose us?': 'प्र२. आम्हाला का निवडावे?',
    'We have been working in the biomass sector for the last 12 years.': 'आम्ही गेल्या १२ वर्षांपासून बायोमास क्षेत्रात कार्यरत आहोत.',
    'We have implemented new innovative ideas for raw material collection and manufacturing units.': 'आम्ही कच्च्या मालाच्या संकलनासाठी आणि उत्पादन युनिट्ससाठी नवीन नाविन्यपूर्ण कल्पना राबवल्या आहेत.',
    'We manufacture all types of briquettes and pellets at our own manufacturing company. We have a total of 15 manufacturing companies installed at various locations.': 'आम्ही आमच्या स्वतःच्या उत्पादन कंपनीत सर्व प्रकारच्या ब्रिकेट आणि पेलेटचे उत्पादन करतो. विविध ठिकाणी एकूण १५ उत्पादन कंपन्या आहेत.',
    'Our aim is to make biomass briquettes & pellets available at a minimum price compared to market rate while maintaining good quality.': 'चांगल्या गुणवत्तेसह बाजारभावाच्या तुलनेत किमान किंमतीत बायोमास ब्रिकेट आणि पेलेट उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.',
    'Q3. What do we do?': 'प्र३. आम्ही काय करतो?',
    'We ensure the timely availability of biomass fuel to our customers, meeting their requirements and adhering to scheduled delivery times.': 'आम्ही ग्राहकांच्या गरजा पूर्ण करून आणि नियोजित वितरण वेळेचे पालन करून बायोमास इंधनाची वेळेवर उपलब्धता सुनिश्चित करतो.',
    'Our commitment extends to supplying customers with high-quality materials at competitive prices, ensuring satisfaction with every transaction.': 'आमची बांधिलकी स्पर्धात्मक किंमतीत उच्च-गुणवत्तेची सामग्री पुरविण्यापर्यंत आहे, प्रत्येक व्यवहारात समाधान सुनिश्चित करतो.',
    'We offer comprehensive technical guidance to customers, equipping them with the knowledge and systems to efficiently operate boilers and related equipment.': 'आम्ही ग्राहकांना सर्वसमावेशक तांत्रिक मार्गदर्शन देतो, त्यांना बॉयलर आणि संबंधित उपकरणे कार्यक्षमतेने चालवण्यासाठी ज्ञान आणि प्रणाली सुसज्ज करतो.',
    'Our energy solutions prioritise efficiency and sustainability, harnessing the power of renewable resources to meet environmental and operational needs.': 'आमचे ऊर्जा उपाय पर्यावरणीय आणि ऑपरेशनल गरजा पूर्ण करण्यासाठी नवीकरणीय संसाधनांच्या शक्तीचा उपयोग करून कार्यक्षमता आणि शाश्वततेला प्राधान्य देतात.',
    'We provide comprehensive service including ash disposal, ensuring a seamless and hassle-free process from start to finish.': 'आम्ही राख विल्हेवाटासह सर्वसमावेशक सेवा देतो, सुरुवातीपासून शेवटपर्यंत अखंड आणि त्रासमुक्त प्रक्रिया सुनिश्चित करतो.',
    'Customers have access to a wide range of materials from our facilities. Our extensive network allows us to fulfil orders from multiple locations, ensuring consistent supply and flexibility.': 'ग्राहकांना आमच्या सुविधांमधून विस्तृत श्रेणीतील सामग्री उपलब्ध आहे. आमचे विस्तृत नेटवर्क अनेक ठिकाणांहून ऑर्डर पूर्ण करण्यास अनुमती देते.',
    "Q4. What's ahead?": 'प्र४. पुढे काय आहे?',
    'Production Capacity Enhancement:': 'उत्पादन क्षमता वाढ:',
    'Within the next three months we are upgrading our production capacity near groundnut shell resources at Lasur Station and Vahimandawa to meet growing demand.': 'वाढत्या मागणीची पूर्तता करण्यासाठी पुढील तीन महिन्यांत आम्ही लासूर स्टेशन आणि वहिमांडवा येथील शेंगदाणा टरफले संसाधनांजवळ उत्पादन क्षमता वाढवत आहोत.',
    'GPS Integration for Transport Vehicles:': 'वाहतूक वाहनांसाठी GPS एकीकरण:',
    'We are implementing a GPS system across all transport vehicles to enhance shipment tracking and ensure punctual delivery.': 'शिपमेंट ट्रॅकिंग वाढवण्यासाठी आणि वेळेवर डिलिव्हरी सुनिश्चित करण्यासाठी आम्ही सर्व वाहतूक वाहनांमध्ये GPS प्रणाली अंमलात आणत आहोत.',
    'Quality Inspection Laboratories:': 'गुणवत्ता तपासणी प्रयोगशाळा:',
    'We are developing in-house quality inspection laboratories at all manufacturing locations to strengthen quality control and facilitate continuous product improvement.': 'गुणवत्ता नियंत्रण मजबूत करण्यासाठी आणि सतत उत्पादन सुधारणा सुलभ करण्यासाठी आम्ही सर्व उत्पादन ठिकाणी अंतर्गत गुणवत्ता तपासणी प्रयोगशाळा विकसित करत आहोत.',
    'Business Expansion:': 'व्यवसाय विस्तार:',
    'We are establishing new offices in Pune & Delhi to enhance our service offerings and strengthen our market presence across India.': 'आमच्या सेवा ऑफरिंग वाढवण्यासाठी आणि भारतभर आमची बाजारपेठेतील उपस्थिती मजबूत करण्यासाठी आम्ही पुणे आणि दिल्लीत नवीन कार्यालये स्थापित करत आहोत.',

    /* ── HOME — BLOG SECTION ── */
    'News & Blogs': 'बातम्या आणि ब्लॉग',
    'BIOMASS FUELS OVER FOSSIL FUELS': 'जीवाश्म इंधनापेक्षा बायोमास इंधन',
    'HOW BIOMASS RESIDUE AND BIOFUEL-RECYCLE WASTE BY BRIQUETTES AND PELLETS WORKS': 'बायोमास अवशेष आणि बायोफ्युएल — ब्रिकेट आणि पेलेटद्वारे कचरा पुनर्वापर कसे कार्य करते',
    'THE FUTURE OF BIOMASS BRIQUETTE: REDUCE CARBON, EMBRACE SUSTAINABILITY': 'बायोमास ब्रिकेटचे भविष्य: कार्बन कमी करा, शाश्वतता स्वीकारा',

    /* ── HOME — CHATBOT ── */
    'Ask something...': 'काहीतरी विचारा...',
    'VWF Assistant': 'व्हीडब्ल्यूएफ सहाय्यक',
    'Virtual White Flame Support': 'व्हर्च्युअल व्हाईट फ्लेम सहाय्य',
    'Chat with us': 'आमच्याशी गप्पा मारा',

    /* ── HOME — PLANTS (extra) ── */
    'Virtual Green Energy': 'व्हर्च्युअल ग्रीन एनर्जी',
    'Manufacturing Network': 'उत्पादन नेटवर्क',

    /* ── HOME — FLOATING BUTTONS ── */
    'Our Products': 'आमची उत्पादने',
    'Call Us': 'आम्हाला कॉल करा',
    'WhatsApp Us': 'व्हाट्सअॅप करा',

    /* ── HOME — MANUFACTURING NETWORK / PLANTS ── */
    'MANUFACTURING NETWORK': 'उत्पादन नेटवर्क',
    'Our Plants': 'आमचे प्रकल्प',
    '15+ manufacturing units spread across Maharashtra — delivering quality biomass briquettes & pellets at your doorstep.':
      'महाराष्ट्रभर पसरलेल्या १५+ उत्पादन युनिट्स — दर्जेदार बायोमास ब्रिकेट आणि पेलेट आपल्या दारापर्यंत पोहोचवतात.',

    /* Plant names */
    'Balaji Bio Fuels': 'बालाजी बायो फ्युएल्स',
    'Seva Bio Brikets': 'सेवा बायो ब्रिकेट्स',
    'Bharati Biocoal': 'भारती बायोकोल',
    'Dhanashree Bio Fuel': 'धनश्री बायो फ्युएल',
    'Jay Bajrang Bio Energy Solution': 'जय बजरंग बायो एनर्जी सोल्यूशन',
    'Virtual Harit Urja': 'व्हर्च्युअल हरित ऊर्जा',

    /* Addresses */
    'Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Ta.Dist. Beed, Maharashtra-431122':
      'गट नं.८९, घोसापुरी, एनएच-२११ कुमशी रोड, आरटीओ कार्यालयामागे, ता.जि. बीड, महाराष्ट्र-४३११२२',
    'Gat No. 77, at Divate, Post. Ladjalgoan, Tal- Shevgoan Maharashtra 414502':
      'गट नं. ७७, दिवाटे, पो. लाडजळगाव, ता. शेवगाव, महाराष्ट्र ४१४५०२',
    'Lad Karanja, Tal-Karanja, Dist-Washim':
      'लाड करंजा, ता-करंजा, जि-वाशिम',
    'Kolgaon, Shrigonda, Ahmednagar - 413728':
      'कोळगाव, श्रीगोंदा, अहमदनगर - ४१३७२८',
    'Gat No. 481/4 Astagaon Road, Rajuri':
      'गट नं. ४८१/४ अस्तगाव रोड, राजुरी',
    'Bodhegoan, Shevgoan, Ahmednagar, Maharashtra 414001':
      'बोधेगाव, शेवगाव, अहमदनगर, महाराष्ट्र ४१४००१',
    'Gut no. 666, Tal. Panchayat Samiti Jalna, Nr Jalna, Maharashtra, 431202':
      'गट नं. ६६६, ता. पंचायत समिती जालना, जालना जवळ, महाराष्ट्र, ४३१२०२',

    /* ── HOME — COUNTER SECTION ── */
    'YEARLY GROWTH': 'वार्षिक वाढ',
    'SUPPLIER NETWORK': 'पुरवठादार नेटवर्क',
    'CUSTOMERS': 'ग्राहक',
    'TONS SUPPLY CAPACITY': 'टन पुरवठा क्षमता',
    'Yearly Growth': 'वार्षिक वाढ',
    'Supplier Network': 'पुरवठादार नेटवर्क',
    'Customers': 'ग्राहक',
    'Tons Supply Capacity': 'टन पुरवठा क्षमता',

    /* ── HOME — WORKING PROCESS ── */
    'Working Process Of': 'कार्यप्रक्रिया',
    'Working Process of': 'कार्यप्रक्रिया',
    'Working Process': 'कार्यप्रक्रिया',
    'Biomass Briquettes': 'बायोमास ब्रिकेट',
    'Biomass Briquettes Manufacturing': 'बायोमास ब्रिकेट उत्पादन',
    'Farmers': 'शेतकरी',
    'Local Agents': 'स्थानिक एजंट',
    'Briquettes & Pellets Manufacturing': 'ब्रिकेट आणि पेलेट उत्पादन',
    'Briquettes & Pellets\nManufacturing': 'ब्रिकेट आणि पेलेट\nउत्पादन',
    'Boiler Industries': 'बॉयलर उद्योग',
    'Of': 'चे',

    /* ── HOME — SECTION TAGS & HEADINGS ── */
    'About Us': 'आमच्याबद्दल',
    'OUR SERVICES': 'आमच्या सेवा',
    'OUR PLANTS': 'आमचे प्रकल्प',
    'OUR PRODUCTS': 'आमची उत्पादने',
    'WHY CHOOSE US': 'आम्हाला का निवडा',
    'WORKING PROCESS': 'कार्यप्रक्रिया',
    'OUR ACHIEVEMENTS': 'आमच्या कामगिरी',
    'TESTIMONIALS': 'अभिप्राय',
    'GET IN TOUCH': 'संपर्क साधा',
    'INDUSTRIES WE SERVE': 'आम्ही सेवा देतो ते उद्योग',

    'Who We Are': 'आम्ही कोण आहोत',
    'Our Vision': 'आमची दृष्टी',
    'Our Mission': 'आमचे ध्येय',
    'Why Choose Us': 'आम्हाला का निवडा',
    'Our Services': 'आमच्या सेवा',
    'Industries We Serve': 'आम्ही सेवा देतो ते उद्योग',
    'Our Achievements': 'आमच्या कामगिरी',
    'Client Testimonials': 'ग्राहकांचे अभिप्राय',
    'Clients Testimonials': 'ग्राहकांचे अभिप्राय',
    'Get In Touch': 'संपर्क साधा',

    /* ── HOME — WHY CHOOSE US CARDS ── */
    'Quality Products': 'दर्जेदार उत्पादने',
    'Timely Delivery': 'वेळेवर डिलिव्हरी',
    'Expert Team': 'तज्ज्ञ टीम',
    'Customer Support': 'ग्राहक सहाय्य',
    'Competitive Price': 'स्पर्धात्मक किंमत',
    'Eco Friendly': 'पर्यावरणपूरक',
    'Reliable Supply': 'विश्वसनीय पुरवठा',
    'Pan India Network': 'पॅन इंडिया नेटवर्क',

    /* ── HOME — INDUSTRIES SECTION ── */
    'Power Plants': 'वीज केंद्र',
    'Paper Mills': 'कागद मिल',
    'Textile Industry': 'वस्त्रोद्योग',
    'Chemical Industry': 'रसायन उद्योग',
    'Food Processing': 'अन्न प्रक्रिया',
    'Ceramic Industry': 'सिरेमिक उद्योग',
    'Steel Industry': 'पोलाद उद्योग',
    'Sugar Mills': 'साखर कारखाने',
    'Brick Kilns': 'विटभट्टी',

    /* ── BLOG / POSTS ── */
    'View All Posts': 'सर्व पोस्ट पहा',
    'POSTS': 'पोस्ट',
    'Blogs': 'ब्लॉग',
    'Blog': 'ब्लॉग',
    'Latest Blogs': 'ताजे ब्लॉग',
    'OUR BLOGS': 'आमचे ब्लॉग',
    'News & Blogs': 'बातम्या आणि ब्लॉग',
    'Read More →': 'अधिक वाचा →',
    'BIOMASS FUELS OVER FOSSIL FUELS': 'जीवाश्म इंधनापेक्षा बायोमास इंधन',
    'HOW BIOMASS RESIDUE AND BIOFUEL-RECYCLE WASTE BY BRIQUETTES AND PELLETS WORKS': 'बायोमास अवशेष आणि बायोफ्युएल — ब्रिकेट आणि पेलेटद्वारे कचरा पुनर्वापर कसे कार्य करते',
    'THE FUTURE OF BIOMASS BRIQUETTE: REDUCE CARBON, EMBRACE SUSTAINABILITY': 'बायोमास ब्रिकेटचे भविष्य: कार्बन कमी करा, शाश्वतता स्वीकारा',
    'Our': 'आमचे',
    'Briquettes & Pellets Manufacturing': 'ब्रिकेट्स आणि पेलेट्स उत्पादन',

    /* ── COMMON BUTTONS ── */
    'View All': 'सर्व पहा',
    'Learn More': 'अधिक जाणून घ्या',
    'View Details': 'तपशील पहा',
    'Show More...': 'अधिक दाखवा...',
    'Show Less': 'कमी दाखवा',
    'Know More': 'अधिक जाणून घ्या',
    'View More': 'अधिक पहा',
    'Download Brochure': 'ब्रोशर डाउनलोड करा',
    'Back to Home': 'मुख्यपृष्ठावर परत',
    'Next': 'पुढे',
    'Previous': 'मागे',
    'Play Video': 'व्हिडिओ प्ले करा',

    /* ── COUNTER (text versions) ── */
    'Years of Experience': 'वर्षांचा अनुभव',
    'Projects Completed': 'पूर्ण केलेले प्रकल्प',
    'Happy Clients': 'समाधानी ग्राहक',
    'Team Members': 'टीम सदस्य',

    /* ── ABOUT PAGE ── */
    'About Company': 'कंपनीबद्दल',
    'Our Story': 'आमची कहाणी',
    'Our Values': 'आमची मूल्ये',
    'Our Team': 'आमची टीम',
    'Leadership Team': 'नेतृत्व टीम',
    'Board of Directors': 'संचालक मंडळ',
    'Our Presence': 'आमची उपस्थिती',

    /* ── COMPANY HISTORY PAGE ── */
    'Our Journey': 'आमचा प्रवास',
    'Milestones': 'महत्त्वाचे टप्पे',
    'Established': 'स्थापित',
    'Infrastructure': 'पायाभूत सुविधा',
    'Growth & Expansion': 'वाढ आणि विस्तार',
    'Founded': 'स्थापना',
    'Expansion': 'विस्तार',
    'Achievement': 'कामगिरी',

    /* ── VISION MISSION PAGE ── */
    'Core Values': 'मूलभूत मूल्ये',
    'Our Goals': 'आमची उद्दिष्टे',
    'Future Plans': 'भविष्यातील योजना',
    'Sustainability': 'शाश्वतता',
    'Green Energy': 'हरित ऊर्जा',
    'Renewable Energy': 'नवीकरणीय ऊर्जा',
    'Environment': 'पर्यावरण',
    'Innovation': 'नवोपक्रम',
    'Excellence': 'उत्कृष्टता',
    'Integrity': 'सचोटी',

    /* ── FOUNDER PAGE ── */
    'Chairman': 'अध्यक्ष',
    'Managing Director': 'व्यवस्थापकीय संचालक',
    'Director': 'संचालक',
    'Co-Founder': 'सह-संस्थापक',
    'Advisor': 'सल्लागार',
    'CEO': 'मुख्य कार्यकारी अधिकारी',

    /* ── SERVICES PAGES ── */
    'Biomass Supply Management': 'बायोमास पुरवठा व्यवस्थापन',
    'Biomass Briquettes & Pellets Manufacture': 'बायोमास ब्रिकेट आणि पेलेट उत्पादन',
    'Build Own Operate & Transfer for Boiler & Co-Generation Plant': 'बॉयलर आणि सह-उत्पादन प्रकल्पासाठी BOOT',
    'Operation and Management': 'संचालन आणि व्यवस्थापन',
    'Our Process': 'आमची प्रक्रिया',
    'Key Features': 'मुख्य वैशिष्ट्ये',
    'Benefits': 'फायदे',

    /* ── PRODUCTS PAGE ── */
    'Product Inquiry': 'उत्पादन चौकशी',
    'Product Name': 'उत्पादनाचे नाव',
    'Submit Inquiry': 'चौकशी सादर करा',
    'Close': 'बंद करा',
    'Send': 'पाठवा',
    'Specifications': 'तपशील',
    'Description': 'वर्णन',
    'Inquiry Now': 'आता चौकशी करा',

    /* ── GALLERY PAGE ── */
    'All': 'सर्व',
    'Photo Gallery': 'फोटो गॅलरी',
    'Video Gallery': 'व्हिडिओ गॅलरी',

    /* ── CAREER PAGE ── */
    'Current Openings': 'सध्याच्या रिक्त जागा',
    'Apply Now': 'आता अर्ज करा',
    'Job Description': 'नोकरी वर्णन',
    'Requirements': 'आवश्यकता',
    'Experience': 'अनुभव',
    'Location': 'ठिकाण',
    'Full Time': 'पूर्णवेळ',
    'Part Time': 'अर्धवेळ',

    /* ── CONTACT PAGE ── */
    'Contact Information': 'संपर्क माहिती',
    'Send Message': 'संदेश पाठवा',
    'Full Name': 'पूर्ण नाव',
    'Email Address': 'ईमेल पत्ता',
    'Phone Number': 'फोन नंबर',
    'Message': 'संदेश',
    'Your Name': 'तुमचे नाव',
    'Your Email': 'तुमचा ईमेल',
    'Your Message': 'तुमचा संदेश',
    'Submit': 'सादर करा',
    'Address': 'पत्ता',
    'Phone': 'फोन',
    'Email': 'ईमेल',
    'Get Direction': 'दिशा मिळवा',
    'Office Hours': 'कार्यालयीन वेळ',
    'Monday - Saturday': 'सोमवार - शनिवार',
    'Sunday': 'रविवार',
    'Closed': 'बंद',

    /* ── FOOTER ── */
    'Quick Links': 'त्वरित दुवे',
    'Quick Link': 'त्वरित दुवे',
    'Newsletter': 'वृत्तपत्र',
    'Subscribe': 'सदस्यता घ्या',
    'Enter your email': 'तुमचा ईमेल टाका',
    'Your email address': 'तुमचा ईमेल पत्ता',
    'STAY UPDATED': 'अद्यतनित राहा',
    'Stay Updated': 'अद्यतनित राहा',
    'Privacy Policy': 'गोपनीयता धोरण',
    'Privacy & Policy': 'गोपनीयता धोरण',
    'Terms of Service': 'सेवा अटी',
    'Terms & Condition': 'अटी आणि शर्ती',
    'Terms & Conditions': 'अटी आणि शर्ती',
    'Sitemap': 'साइटमॅप',
    'All Rights Reserved': 'सर्व हक्क राखीव',
    'Follow Us': 'आम्हाला फॉलो करा',
    'Feedback': 'अभिप्राय',
    "FAQ'S": 'वारंवार विचारले प्रश्न',
    'FAQS': 'वारंवार विचारले प्रश्न',
    'FAQ': 'वारंवार विचारले प्रश्न',
    'Pioneering sustainable biomass energy solutions across India. From supply management to plant operations — powering a greener tomorrow.':
      'भारतभर शाश्वत बायोमास ऊर्जा उपाय पुरविणारी आघाडीची कंपनी. पुरवठा व्यवस्थापनापासून प्रकल्प संचालनापर्यंत — हरित उद्याची शक्ती.',
    'REGISTERED OFFICE': 'नोंदणीकृत कार्यालय',

    /* ============================================================ */
    /* SECTION 4 - TESTIMONIAL SLIDER TEXTS (Added for translation) */
    /* ============================================================ */
    'Briquettes & Pellets Manufacturing': 'ब्रिकेट्स आणि पेलेट्स उत्पादन',
    'Briquettes & Pellets': 'ब्रिकेट्स आणि पेलेट्स',
    'Manufacturing': 'उत्पादन',
    /* Testimonial 1 */
    '"We\'ve been partners with Virtual White Flame PVT LTD. For years, and their Biomass briquettes & Pelletes solutions have consistently exceeded our expectations. Their innovative approach has helped us achieve higher production efficiency and maintain environmental compliance effortlessly."':
      '"आम्ही व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. सोबत वर्षानुवर्षे भागीदार आहोत, आणि त्यांच्या बायोमास ब्रिकेट्स व पेलेट्स सोल्यूशन्सनी सातत्याने आमच्या अपेक्षा पार केल्या आहेत. त्यांच्या नाविन्यपूर्ण दृष्टिकोनामुळे आम्हाला उच्च उत्पादन कार्यक्षमता मिळाली आहे आणि पर्यावरणीय नियमांचे पालन सहजतेने करता येते."',

    'Thermax onsite energy solutions LTD': 'थर्मॅक्स ऑनसाइट एनर्जी सोल्यूशन्स लि.',
    'Pune': 'पुणे',

    /* Testimonial 2 */
    '"Virtual White Flame PVT LTD. dedication to quality shines through in every interaction. Their customer service team is knowledgeable and responsive, ensuring we always get the right solution for our needs."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ची गुणवत्तेप्रती असलेली निष्ठा प्रत्येक संवादातून दिसून येते. त्यांची ग्राहक सेवा टीम जाणकार आणि सजग आहे, ज्यामुळे आम्हाला आमच्या गरजांसाठी योग्य उपाय नेहमीच मिळतो."',

    'Uni klinger Limited': 'युनि क्लिंगर लिमिटेड',
    'Koregaon Bhima': 'कोरेगाव भीमा',

    /* Testimonial 3 */
    '"Choosing Virtual White Flame PVT LTD. was one of the best decisions for our business. Their products are robust, reliable, and contribute significantly to our operational efficiency and cost savings."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. निवडणे हा आमच्या व्यवसायासाठी सर्वोत्तम निर्णयांपैकी एक होता. त्यांची उत्पादने बलाढ्य, विश्वासार्ह आहेत आणि आमच्या कार्यक्षमता व खर्च बचतीमध्ये लक्षणीय योगदान देतात."',

    'Ramakrishi rasayan Ltd': 'रामकृषी रसायन लि.',
    'Loni kalbhor': 'लोणी काळभोर',

    /* Testimonial 4 */
    '"we realy appreciate to Virtual White Flame PVT LTD.for all briquettes industrial needs. Their products are reliable and durable, which is crucial for our manufacturing processes. he highly recommend techniques them to anyone looking for top-notch in boiler operations solutions".':
      '"आम्ही सर्व ब्रिकेट्स औद्योगिक गरजांसाठी व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. चे खरोखर कौतुक करतो. त्यांची उत्पादने विश्वासार्ह आणि टिकाऊ आहेत, जी आमच्या उत्पादन प्रक्रियेसाठी अत्यंत महत्त्वाची आहेत. बॉयलर ऑपरेशन सोल्यूशन्समध्ये उत्कृष्टता शोधणाऱ्यांसाठी आम्ही जोरदार शिफारस करतो."',

    'Britania Industries Ltd': 'ब्रिटॅनिया इंडस्ट्रीज लि.',
    'Ranjangaon': 'रांजणगाव',

    /* Testimonial 5 */
    '"Virtual White Flame PVT LTD.\' delivery service is not only fast but also reliable. I never have to worry about missing deadlines because they deliver exactly when they promise"':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ची वितरण सेवा केवळ जलदच नाही तर विश्वासार्ह देखील आहे. मला कधीही मुदती चुकण्याची काळजी करावी लागत नाही कारण ते त्यांच्या आश्वासनाप्रमाणे वेळेवर वितरण करतात."',

    'Katraj Dairy': 'कात्रज डेअरी',

    /* Testimonial 6 */
    '"Virtual White Flame PVT LTD. To quality craftsmanship is evident in every tasking they produce. Combined with their efficient delivery service, they\'ve become our trusted partner in industrial supplies."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ची दर्जेदार कारागिरी त्यांच्या प्रत्येक उत्पादनात दिसून येते. त्यांच्या कार्यक्षम वितरण सेवेसह, ते औद्योगिक पुरवठ्यात आमचे विश्वासू भागीदार बनले आहेत."',

    'Classic industries and Exports Ltd': 'क्लासिक इंडस्ट्रीज अँड एक्सपोर्ट्स लि.',

    /* Testimonial 7 */
    '"As a long-time supplier, we can confidently say that Virtual White Flame PVT LTD. excels in both product quality and delivery speed. They understand our needs and consistently provide solutions that exceed expectations".':
      '"दीर्घकालीन पुरवठादार म्हणून, आम्ही आत्मविश्वासाने सांगू शकतो की व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. उत्पादन गुणवत्ता आणि वितरण वेग या दोन्ही बाबतीत उत्कृष्ट आहे. ते आमच्या गरजा समजून घेतात आणि सातत्याने अपेक्षेपेक्षा चांगले उपाय देतात."',

    'CPF India Pvt Ltd': 'सीपीएफ इंडिया प्रा. लि.',
    'Newasa': 'नेवासा',

    /* Testimonial 8 */
    '"Virtual White Flame PVT LTD. Not only delivers exceptional products but also does so with remarkable efficiency. We never had an issue with late deliveries, and their products consistently meet our stringent quality standards".':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. केवळ उत्तम उत्पादनेच देत नाही तर ती उल्लेखनीय कार्यक्षमतेने करते. आम्हाला कधीही उशीरा वितरणाचा त्रास झाला नाही, आणि त्यांची उत्पादने सातत्याने आमच्या कठोर गुणवत्ता मानकांची पूर्तता करतात."',
    'Briquettes & Pellets Manufacturing': 'ब्रिकेट्स आणि पेलेट्स उत्पादन',

    'Fresenious Kabi India Pvt Ltd.': 'फ्रेसेनेयस काबी इंडिया प्रा. लि.',
    /* ── ABOUT PAGE - BANNER ── */
    'Company Overview': 'कंपनी अवलोकन',

    /* ── ABOUT PAGE - ABOUT SECTION ── */
    'ABOUT COMPANY': 'कंपनीबद्दल',
    'Years Experience': 'वर्षांचा अनुभव',
    'Virtual White Flame PVT. LTD. is a leading manufacturer and supplier of Biomass Briquettes and Biomass Pellets across India. We are committed to delivering eco-friendly, sustainable, and high-quality biomass energy solutions for industrial applications.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारतभर बायोमास ब्रिकेट आणि बायोमास पेलेटची आघाडीची उत्पादक आणि पुरवठादार कंपनी आहे. आम्ही औद्योगिक अनुप्रयोगांसाठी पर्यावरणपूरक, शाश्वत आणि उच्च-गुणवत्तेचे बायोमास ऊर्जा समाधान देण्यासाठी वचनबद्ध आहोत.',

    'Company Foundation': 'कंपनी स्थापना',
    'Established in 2013 under Seva Bio Brikets with strong industry expertise.':
      '२०१३ मध्ये सेवा बायो ब्रिकेट्स अंतर्गत मजबूत उद्योग कौशल्यासह स्थापित.',

    'Expert Management': 'तज्ज्ञ व्यवस्थापन',
    'Backed by 12+ years experienced directors in biomass and energy sector.':
      'बायोमास आणि ऊर्जा क्षेत्रात १२+ वर्षांचा अनुभव असलेल्या संचालकांद्वारे समर्थित.',

    'Eco Fuel Solution': 'पर्यावरणपूरक इंधन समाधान',
    'We convert industrial, agricultural, and forestry waste into clean fuel.':
      'आम्ही औद्योगिक, कृषी आणि वनीय कचरा स्वच्छ इंधनात रूपांतरित करतो.',

    'Production Capacity': 'उत्पादन क्षमता',
    'Consistent production of 10,000+ biomass fuel units per month.':
      'दर महिन्याला १०,०००+ बायोमास इंधन युनिट्सचे सातत्यपूर्ण उत्पादन.',

    'Advanced Technology': 'प्रगत तंत्रज्ञान',
    'Efficient systems ensuring high-quality fuel processing and output.':
      'उच्च-गुणवत्तेचे इंधन प्रक्रिया आणि उत्पादन सुनिश्चित करणाऱ्या कार्यक्षम प्रणाली.',

    'Supply Network': 'पुरवठा नेटवर्क',
    'Strong logistics and distribution network across multiple regions in India.':
      'भारतातील अनेक प्रदेशांमध्ये मजबूत लॉजिस्टिक्स आणि वितरण नेटवर्क.',

    /* ── ABOUT PAGE - PLANTS SECTION ── */
    'OUR NETWORK': 'आमचे नेटवर्क',
    'Our Manufacturing Plants': 'आमचे उत्पादन प्रकल्प',
    'We operate multiple advanced manufacturing plants with modern infrastructure and efficient production facilities.':
      'आम्ही आधुनिक पायाभूत सुविधा आणि कार्यक्षम उत्पादन सुविधांसह अनेक प्रगत उत्पादन प्रकल्प चालवतो.',

    'Virtual White Flame Pvt. Ltd.': 'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि.',
    'Seva Bio Brikets': 'सेवा बायो ब्रिकेट्स',

    /* ── ABOUT PAGE - COUNTER SECTION ── */
    'Company Achievement': 'कंपनी कामगिरी',
    'Delivering Excellence Across India': 'भारतभर उत्कृष्टता प्रदान करत आहोत',
    'Monthly Production': 'मासिक उत्पादन',
    'States Covered': 'राज्ये समाविष्ट',

    /* ── ABOUT PAGE - WORKING PROCESS ── */
    'WORKING PROCESS': 'कार्यप्रक्रिया',
    'Working Process Of Biomass Briquettes': 'बायोमास ब्रिकेटची कार्यप्रक्रिया',

    /* ── ABOUT PAGE - INFRASTRUCTURE ── */
    'OUR FACILITIES': 'आमच्या सुविधा',
    'Industrial Infrastructure': 'औद्योगिक पायाभूत सुविधा',

    'Briquette Machines': 'ब्रिकेट मशीन',
    'We have 30+ advanced machines installed for high-capacity briquette manufacturing with efficient production systems.':
      'कार्यक्षम उत्पादन प्रणालींसह उच्च-क्षमतेच्या ब्रिकेट उत्पादनासाठी आमच्याकडे ३०+ प्रगत मशीन बसवलेल्या आहेत.',

    'Pellet Machine': 'पेलेट मशीन',
    'Our plant is equipped with 3 pellet manufacturing machines along with a complete modern production setup.':
      'आमचा प्रकल्प संपूर्ण आधुनिक उत्पादन सेटअपसह ३ पेलेट उत्पादन मशीनने सुसज्ज आहे.',

    'Hammer Mill Machine': 'हॅमर मिल मशीन',
    'High-performance hammer mill machines are used for superior raw material processing and premium quality production.':
      'उच्च-कार्यक्षमतेच्या हॅमर मिल मशीनचा वापर उत्कृष्ट कच्च्या मालाच्या प्रक्रियेसाठी आणि प्रीमियम गुणवत्तेच्या उत्पादनासाठी केला जातो.',

    /* ── ABOUT PAGE - WHY CHOOSE US ── */
    'We focus on quality, innovation, and long-term value.':
      'आम्ही गुणवत्ता, नवोपक्रम आणि दीर्घकालीन मूल्यावर लक्ष केंद्रित करतो.',

    'Cost Effective': 'किफायतशीर',
    'Affordable biomass fuel solutions that help reduce operational costs.':
      'परवडणारे बायोमास इंधन समाधान जे ऑपरेशनल खर्च कमी करण्यास मदत करते.',

    'High Efficiency': 'उच्च कार्यक्षमता',
    'High calorific value ensures maximum energy output and performance.':
      'उच्च उष्मांक मूल्य जास्तीत जास्त ऊर्जा उत्पादन आणि कार्यक्षमता सुनिश्चित करते.',

    'PAN India Supply': 'पॅन इंडिया पुरवठा',
    'Reliable and timely delivery network serving industries across India.':
      'भारतभर उद्योगांना सेवा देणारे विश्वसनीय आणि वेळेवर वितरण नेटवर्क.',

    'Quality Control': 'गुणवत्ता नियंत्रण',
    'Strict quality checks ensure consistency and superior product standards.':
      'कठोर गुणवत्ता तपासण्या सातत्य आणि उत्कृष्ट उत्पादन मानके सुनिश्चित करतात.',

    'Technical Support': 'तांत्रिक सहाय्य',
    'Expert assistance and guidance for efficient fuel utilization.':
      'कार्यक्षम इंधन वापरासाठी तज्ज्ञ सहाय्य आणि मार्गदर्शन.',

    'Clean and sustainable energy source with lower carbon emissions.':
      'कमी कार्बन उत्सर्जनासह स्वच्छ आणि शाश्वत ऊर्जा स्त्रोत.',

    /* ── ABOUT PAGE - INDUSTRIES SECTION ── */
    'Our Areas of Expertise': 'आमच्या तज्ज्ञतेचे क्षेत्र',
    'We deliver trusted construction and development solutions across multiple sectors.':
      'आम्ही अनेक क्षेत्रांमध्ये विश्वासू बांधकाम आणि विकास समाधान देतो.',

    'Construction': 'बांधकाम',
    'Residential and commercial building projects.':
      'निवासी आणि व्यावसायिक इमारत प्रकल्प.',

    'Real Estate Development': 'रिअल इस्टेट विकास',
    'Redevelopment and new property development solutions.':
      'पुनर्विकास आणि नवीन मालमत्ता विकास समाधान.',

    'Roads, structures and large-scale civil works.':
      'रस्ते, संरचना आणि मोठ्या प्रमाणावर नागरी कामे.',

    'Interior & Finishing': 'इंटेरियर आणि फिनिशिंग',
    'Modern tiling, painting and interior finishing work.':
      'आधुनिक टाइलिंग, पेंटिंग आणि इंटेरियर फिनिशिंग काम.',

    'Waterproofing': 'वॉटरप्रूफिंग',
    'Durable waterproofing solutions for long life protection.':
      'दीर्घ आयुष्याच्या संरक्षणासाठी टिकाऊ वॉटरप्रूफिंग समाधान.',

    'Renovation': 'नूतनीकरण',
    'Old building renovation and structural upgrades.':
      'जुन्या इमारतींचे नूतनीकरण आणि संरचनात्मक सुधारणा.',

    /* ── ABOUT PAGE - TESTIMONIALS ── */
    'TESTIMONIAL': 'अभिप्राय',
    'What Our Clients Say': 'आमचे ग्राहक काय म्हणतात',
    'Ranjangaon': 'रांजणगाव',
    /* ── ABOUT PAGE - PARTIAL TRANSLATIONS FIX ── */

    // Image 1 - description paragraph (partial match fix)
    'Virtual White Flame PVT. LTD. is a leading manufacturer and supplier of Biomass Briquettes and Biomass Pellets across India. We are committed to delivering eco-friendly, sustainable, and high-quality biomass energy solutions for industrial applications.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारतभर बायोमास ब्रिकेट आणि बायोमास पेलेटची आघाडीची उत्पादक आणि पुरवठादार कंपनी आहे. आम्ही औद्योगिक अनुप्रयोगांसाठी पर्यावरणपूरक, शाश्वत आणि उच्च-गुणवत्तेचे बायोमास ऊर्जा समाधान देण्यासाठी वचनबद्ध आहोत.',

    'Biomass Briquettes': 'बायोमास ब्रिकेट',
    'Biomass Pellets': 'बायोमास पेलेट',

    // Image 2 - Address strings
    'Gut No.89, Ghosapuri, NH-211 Kumshi Road, Behind RTO Office, Beed, Maharashtra-431122':
      'गट नं.८९, घोसापुरी, एनएच-२११ कुमशी रोड, आरटीओ कार्यालयामागे, बीड, महाराष्ट्र-४३११२२',

    'Bodhegaon, Shevgaon, Ahmednagar, Maharashtra 414001':
      'बोधेगाव, शेवगाव, अहमदनगर, महाराष्ट्र ४१४००१',

    'Gat No.77, Divate, Ladjalgaon, Shevgaon Maharashtra 414502':
      'गट नं.७७, दिवाटे, लाडजळगाव, शेवगाव महाराष्ट्र ४१४५०२',

    'Gut No.666, Tal. Panchayat Samiti Jalna, Maharashtra 431202':
      'गट नं.६६६, ता. पंचायत समिती जालना, महाराष्ट्र ४३१२०२',

    'Lad Karanja ,Tal-Karanja Dist-Washim':
      'लाड करंजा, ता-करंजा जि-वाशिम',

    'Kolgaon, Shrigonda, Ahmednagar - 413728':
      'कोळगाव, श्रीगोंदा, अहमदनगर - ४१३७२८',

    'Gat No. 481/4 Astagaon Road , Rajuri':
      'गट नं. ४८१/४ अस्तगाव रोड, राजुरी',

    // Image 4 - Plants section description
    'We operate multiple advanced manufacturing plants with modern infrastructure and efficient production facilities.':
      'आम्ही आधुनिक पायाभूत सुविधा आणि कार्यक्षम उत्पादन सुविधांसह अनेक प्रगत उत्पादन प्रकल्प चालवतो.',

    // Image 5 - Machine descriptions
    'We have 30+ advanced machines installed for high-capacity briquette manufacturing with efficient production systems.':
      'कार्यक्षम उत्पादन प्रणालींसह उच्च-क्षमतेच्या ब्रिकेट उत्पादनासाठी आमच्याकडे ३०+ प्रगत मशीन बसवलेल्या आहेत.',

    'Our plant is equipped with 3 pellet manufacturing machines along with a complete modern production setup.':
      'आमचा प्रकल्प संपूर्ण आधुनिक उत्पादन सेटअपसह ३ पेलेट उत्पादन मशीनने सुसज्ज आहे.',

    'High-performance hammer mill machines are used for superior raw material processing and premium quality production.':
      'उच्च-कार्यक्षमतेच्या हॅमर मिल मशीनचा वापर उत्कृष्ट कच्च्या मालाच्या प्रक्रियेसाठी आणि प्रीमियम गुणवत्तेच्या उत्पादनासाठी केला जातो.',

    'plant': 'प्रकल्प',

    /* ── ABOUT PAGE - TESTIMONIALS (What Our Clients Say slider) ── */
    'TESTIMONIAL': 'अभिप्राय',
    'What Our Clients Say': 'आमचे ग्राहक काय म्हणतात',

    // Slide 1
    '" Virtual White Flame PVT LTD. Not only delivers exceptional products but also does so with remarkable efficiency. We never had an issue with late deliveries, and their products consistently meet our stringent quality standards."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. केवळ उत्तम उत्पादनेच देत नाही तर ती उल्लेखनीय कार्यक्षमतेने करते. आम्हाला कधीही उशीरा वितरणाचा त्रास झाला नाही, आणि त्यांची उत्पादने सातत्याने आमच्या कठोर गुणवत्ता मानकांची पूर्तता करतात."',

    '__ Fresenious Kabi India Pvt Ltd. ': '__ फ्रेसेनेयस काबी इंडिया प्रा. लि.',
    'Ranjangaon': 'रांजणगाव',

    // Slide 2
    '"We\'ve been partners with Virtual White Flame PVT LTD.For years, and their Biomass briquettes & Pelletes solutions have consistently exceeded our expectations. Their innovative approach has helped us achieve higher production efficiency and maintain environmental compliance effortlessly."':
      '"आम्ही व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. सोबत वर्षानुवर्षे भागीदार आहोत, आणि त्यांच्या बायोमास ब्रिकेट्स व पेलेट्स सोल्यूशन्सनी सातत्याने आमच्या अपेक्षा पार केल्या आहेत. त्यांच्या नाविन्यपूर्ण दृष्टिकोनामुळे आम्हाला उच्च उत्पादन कार्यक्षमता मिळाली आहे आणि पर्यावरणीय नियमांचे पालन सहजतेने करता येते."',

    '__ Thermax onsite energy solutions LTD': '__ थर्मॅक्स ऑनसाइट एनर्जी सोल्यूशन्स लि.',
    'Pune': 'पुणे',

    // Slide 3
    '"Choosing Virtual White Flame PVT LTD. was one of the best decisions for our business. Their products are robust, reliable, and contribute significantly to our operational efficiency and cost savings."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. निवडणे हा आमच्या व्यवसायासाठी सर्वोत्तम निर्णयांपैकी एक होता. त्यांची उत्पादने बलाढ्य, विश्वासार्ह आहेत आणि आमच्या कार्यक्षमता व खर्च बचतीमध्ये लक्षणीय योगदान देतात."',

    '__ Ramakrishi rasayan Ltd': '__ रामकृषी रसायन लि.',
    'Loni kalbhor': 'लोणी काळभोर',

    // Slide 4
    '"Virtual White Flame PVT LTD. dedication to quality shines through in every interaction. Their customer service team is knowledgeable and responsive, ensuring we always get the right solution for our needs."':
      '"व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ची गुणवत्तेप्रती असलेली निष्ठा प्रत्येक संवादातून दिसून येते. त्यांची ग्राहक सेवा टीम जाणकार आणि सजग आहे, ज्यामुळे आम्हाला आमच्या गरजांसाठी योग्य उपाय नेहमीच मिळतो."',

    '__ Uni klinger Limited': '__ युनि क्लिंगर लिमिटेड',
    'Koregaon Bhima': 'कोरेगाव भीमा',

    // Slide 5
    '"we realy appreciate to Virtual White Flame PVT LTD.for all briquettes industrial needs. Their products are reliable and durable, which is crucial for our manufacturing processes. he highly recommend techniques them to anyone looking for top-notch in boiler operations solutions".':
      '"आम्ही सर्व ब्रिकेट्स औद्योगिक गरजांसाठी व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. चे खरोखर कौतुक करतो. त्यांची उत्पादने विश्वासार्ह आणि टिकाऊ आहेत, जी आमच्या उत्पादन प्रक्रियेसाठी अत्यंत महत्त्वाची आहेत. बॉयलर ऑपरेशन सोल्यूशन्समध्ये उत्कृष्टता शोधणाऱ्यांसाठी आम्ही जोरदार शिफारस करतो."',

    '__ Britania Industries Ltd': '__ ब्रिटॅनिया इंडस्ट्रीज लि.',

    // Slide 6
    '"As a long-time supplier, we can confidently say that Virtual White Flame PVT LTD. excels in both product quality and delivery speed. They understand our needs and consistently provide solutions that exceed expectations".':
      '"दीर्घकालीन पुरवठादार म्हणून, आम्ही आत्मविश्वासाने सांगू शकतो की व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. उत्पादन गुणवत्ता आणि वितरण वेग या दोन्ही बाबतीत उत्कृष्ट आहे. ते आमच्या गरजा समजून घेतात आणि सातत्याने अपेक्षेपेक्षा चांगले उपाय देतात."',

    '__ CPF India Pvt Ltd': '__ सीपीएफ इंडिया प्रा. लि.',
    'Newasa': 'नेवासा',
    /* ── VISION/HISTORY PAGE - MISSING ENTRIES ── */

    // Image 1
    'Commitment Towards Green Future': 'हरित भविष्याप्रती वचनबद्धता',
    'Virtual White Flame PVT. LTD. is a trusted manufacturer of biomass briquettes and biomass pellets, providing sustainable energy solutions for diverse industries and applications.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही बायोमास ब्रिकेट आणि बायोमास पेलेटची विश्वासू उत्पादक आहे, जी विविध उद्योग आणि अनुप्रयोगांसाठी शाश्वत ऊर्जा समाधान पुरवते.',
    'With our commitment to quality, innovation, and environmental responsibility, we aim to build a cleaner and greener future.':
      'गुणवत्ता, नवोपक्रम आणि पर्यावरणीय जबाबदारीप्रती आमच्या वचनबद्धतेसह, आम्ही स्वच्छ आणि हरित भविष्य घडवण्याचे उद्दिष्ट ठेवतो.',
    'Partner with us to embrace renewable energy and make a positive impact on the world.':
      'नवीकरणीय ऊर्जा स्वीकारण्यासाठी आणि जगावर सकारात्मक प्रभाव टाकण्यासाठी आमच्यासोबत भागीदार व्हा.',

    // Image 2
    'Leading Biomass Manufacturer': 'आघाडीचे बायोमास उत्पादक',
    'Virtual White Flame PVT. LTD .is a leading manufacturer specializing in the production of biomass briquettes and biomass pellets. Our company is dedicated to providing sustainable energy solutions by utilizing renewable resources and reducing carbon emissions.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही बायोमास ब्रिकेट आणि बायोमास पेलेट उत्पादनात विशेष आघाडीची उत्पादक कंपनी आहे. आमची कंपनी नवीकरणीय संसाधनांचा वापर करून आणि कार्बन उत्सर्जन कमी करून शाश्वत ऊर्जा समाधान देण्यासाठी समर्पित आहे.',
    'With a strong focus on quality, innovation, and customer satisfaction, we aim to contribute to cleaner and greener energy.':
      'गुणवत्ता, नवोपक्रम आणि ग्राहक समाधानावर मजबूत लक्ष केंद्रित करून, आम्ही स्वच्छ आणि हरित ऊर्जेमध्ये योगदान देण्याचे उद्दिष्ट ठेवतो.',

    'Sustainable Energy Vision': 'शाश्वत ऊर्जा दृष्टी',
    'We recognize the demand for renewable energy sources to combat climate change and promote sustainable development.':
      'हवामान बदलाशी सामना करण्यासाठी आणि शाश्वत विकासाला चालना देण्यासाठी नवीकरणीय ऊर्जा स्त्रोतांची मागणी आम्ही ओळखतो.',
    'We are dedicated to producing high-quality biomass briquettes and pellets to replace fossil fuels.':
      'जीवाश्म इंधनाची जागा घेण्यासाठी उच्च-गुणवत्तेचे बायोमास ब्रिकेट आणि पेलेट उत्पादन करण्यासाठी आम्ही समर्पित आहोत.',

    // Image 3 & 4
    'OUR JOURNEY': 'आमचा प्रवास',
    'Building Sustainable Energy Solutions': 'शाश्वत ऊर्जा समाधान घडवत आहोत',
    'Virtual White Flame PVT. LTD. is a leading manufacturer of biomass briquettes and pellets serving industries across India.':
      'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारतभर उद्योगांना सेवा देणारी बायोमास ब्रिकेट आणि पेलेटची आघाडीची उत्पादक आहे.',
    'Established in 2013 as Seva Bio Brikets and expanded in 2017 as Virtual White Flame PVT. LTD., the company has continuously focused on innovation and customer service.':
      '२०१३ मध्ये सेवा बायो ब्रिकेट्स म्हणून स्थापित आणि २०१७ मध्ये व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. म्हणून विस्तारित, कंपनीने सातत्याने नवोपक्रम आणि ग्राहक सेवेवर लक्ष केंद्रित केले आहे.',
    'We transform renewable biomass resources into eco-friendly fuel alternatives that help industries reduce carbon emissions and dependence on fossil fuels.':
      'आम्ही नवीकरणीय बायोमास संसाधनांचे पर्यावरणपूरक इंधन पर्यायांमध्ये रूपांतर करतो जे उद्योगांना कार्बन उत्सर्जन आणि जीवाश्म इंधनावरील अवलंबित्व कमी करण्यास मदत करतात.',
    'Our commitment to quality, sustainability, and environmental responsibility drives us toward a cleaner and greener future.':
      'गुणवत्ता, शाश्वतता आणि पर्यावरणीय जबाबदारीप्रती आमची वचनबद्धता आम्हाला स्वच्छ आणि हरित भविष्याकडे घेऊन जाते.',
    'Since 2013': '२०१३ पासून',

    /* ── PARTIAL WORD FIXES (Image 2 & 4) ── */
    'Our company': 'आमची कंपनी',
    'our commitment': 'आमची वचनबद्धता',
    /* ── ABOUT PAGE - ALL MISSING ENTRIES ── */
    'Virtual White Flame PVT. LTD. is a leading manufacturer and supplier of Biomass Briquettes and Biomass Pellets across India. We are committed to delivering eco-friendly, sustainable, and high-quality biomass energy solutions for industrial applications.': 'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारतभर बायोमास ब्रिकेट आणि बायोमास पेलेटची आघाडीची उत्पादक आणि पुरवठादार कंपनी आहे. आम्ही औद्योगिक अनुप्रयोगांसाठी पर्यावरणपूरक, शाश्वत आणि उच्च-गुणवत्तेचे बायोमास ऊर्जा समाधान देण्यासाठी वचनबद्ध आहोत.',
    'We operate multiple advanced manufacturing plants with modern infrastructure and efficient production facilities.': 'आम्ही आधुनिक पायाभूत सुविधा आणि कार्यक्षम उत्पादन सुविधांसह अनेक प्रगत उत्पादन प्रकल्प चालवतो.',
    'We have 30+ advanced machines installed for high-capacity briquette manufacturing with efficient production systems.': 'कार्यक्षम उत्पादन प्रणालींसह उच्च-क्षमतेच्या ब्रिकेट उत्पादनासाठी आमच्याकडे ३०+ प्रगत मशीन बसवलेल्या आहेत.',
    'Our plant is equipped with 3 pellet manufacturing machines along with a complete modern production setup.': 'आमचा प्रकल्प संपूर्ण आधुनिक उत्पादन सेटअपसह ३ पेलेट उत्पादन मशीनने सुसज्ज आहे.',
    'High-performance hammer mill machines are used for superior raw material processing and premium quality production.': 'उच्च-कार्यक्षमतेच्या हॅमर मिल मशीनचा वापर उत्कृष्ट कच्च्या मालाच्या प्रक्रियेसाठी आणि प्रीमियम गुणवत्तेच्या उत्पादनासाठी केला जातो.',
    'We focus on quality, innovation, and long-term value.': 'आम्ही गुणवत्ता, नवोपक्रम आणि दीर्घकालीन मूल्यावर लक्ष केंद्रित करतो.',
    'We deliver trusted construction and development solutions across multiple sectors.': 'आम्ही अनेक क्षेत्रांमध्ये विश्वासू बांधकाम आणि विकास समाधान देतो.',
    'Affordable biomass fuel solutions that help reduce operational costs.': 'परवडणारे बायोमास इंधन समाधान जे ऑपरेशनल खर्च कमी करण्यास मदत करते.',
    'Clean and sustainable energy source with lower carbon emissions.': 'कमी कार्बन उत्सर्जनासह स्वच्छ आणि शाश्वत ऊर्जा स्त्रोत.',
    'High calorific value ensures maximum energy output and performance.': 'उच्च उष्मांक मूल्य जास्तीत जास्त ऊर्जा उत्पादन आणि कार्यक्षमता सुनिश्चित करते.',
    'Reliable and timely delivery network serving industries across India.': 'भारतभर उद्योगांना सेवा देणारे विश्वसनीय आणि वेळेवर वितरण नेटवर्क.',
    'Strict quality checks ensure consistency and superior product standards.': 'कठोर गुणवत्ता तपासण्या सातत्य आणि उत्कृष्ट उत्पादन मानके सुनिश्चित करतात.',
    'Expert assistance and guidance for efficient fuel utilization.': 'कार्यक्षम इंधन वापरासाठी तज्ज्ञ सहाय्य आणि मार्गदर्शन.',
    'Residential and commercial building projects.': 'निवासी आणि व्यावसायिक इमारत प्रकल्प.',
    'Redevelopment and new property development solutions.': 'पुनर्विकास आणि नवीन मालमत्ता विकास समाधान.',
    'Roads, structures and large-scale civil works.': 'रस्ते, संरचना आणि मोठ्या प्रमाणावर नागरी कामे.',
    'Modern tiling, painting and interior finishing work.': 'आधुनिक टाइलिंग, पेंटिंग आणि इंटेरियर फिनिशिंग काम.',
    'Durable waterproofing solutions for long life protection.': 'दीर्घ आयुष्याच्या संरक्षणासाठी टिकाऊ वॉटरप्रूफिंग समाधान.',
    'Old building renovation and structural upgrades.': 'जुन्या इमारतींचे नूतनीकरण आणि संरचनात्मक सुधारणा.',
    'Company Overview': 'कंपनी अवलोकन',
    'ABOUT COMPANY': 'कंपनीबद्दल',
    'Years Experience': 'वर्षांचा अनुभव',
    'Company Foundation': 'कंपनी स्थापना',
    'Established in 2013 under Seva Bio Brikets with strong industry expertise.': '२०१३ मध्ये सेवा बायो ब्रिकेट्स अंतर्गत मजबूत उद्योग कौशल्यासह स्थापित.',
    'Expert Management': 'तज्ज्ञ व्यवस्थापन',
    'Backed by 12+ years experienced directors in biomass and energy sector.': 'बायोमास आणि ऊर्जा क्षेत्रात १२+ वर्षांचा अनुभव असलेल्या संचालकांद्वारे समर्थित.',
    'Eco Fuel Solution': 'पर्यावरणपूरक इंधन समाधान',
    'We convert industrial, agricultural, and forestry waste into clean fuel.': 'आम्ही औद्योगिक, कृषी आणि वनीय कचरा स्वच्छ इंधनात रूपांतरित करतो.',
    'Production Capacity': 'उत्पादन क्षमता',
    'Consistent production of 10,000+ biomass fuel units per month.': 'दर महिन्याला १०,०००+ बायोमास इंधन युनिट्सचे सातत्यपूर्ण उत्पादन.',
    'Advanced Technology': 'प्रगत तंत्रज्ञान',
    'Efficient systems ensuring high-quality fuel processing and output.': 'उच्च-गुणवत्तेचे इंधन प्रक्रिया आणि उत्पादन सुनिश्चित करणाऱ्या कार्यक्षम प्रणाली.',
    'Supply Network': 'पुरवठा नेटवर्क',
    'Strong logistics and distribution network across multiple regions in India.': 'भारतातील अनेक प्रदेशांमध्ये मजबूत लॉजिस्टिक्स आणि वितरण नेटवर्क.',
    'OUR NETWORK': 'आमचे नेटवर्क',
    'Our Manufacturing Plants': 'आमचे उत्पादन प्रकल्प',
    'Company Achievement': 'कंपनी कामगिरी',
    'Delivering Excellence Across India': 'भारतभर उत्कृष्टता प्रदान करत आहोत',
    'Monthly Production': 'मासिक उत्पादन',
    'States Covered': 'राज्ये समाविष्ट',
    'OUR FACILITIES': 'आमच्या सुविधा',
    'Industrial Infrastructure': 'औद्योगिक पायाभूत सुविधा',
    'Briquette Machines': 'ब्रिकेट मशीन',
    'Pellet Machine': 'पेलेट मशीन',
    'Hammer Mill Machine': 'हॅमर मिल मशीन',
    'Cost Effective': 'किफायतशीर',
    'High Efficiency': 'उच्च कार्यक्षमता',
    'PAN India Supply': 'पॅन इंडिया पुरवठा',
    'Quality Control': 'गुणवत्ता नियंत्रण',
    'Technical Support': 'तांत्रिक सहाय्य',
    'Our Areas of Expertise': 'आमच्या तज्ज्ञतेचे क्षेत्र',
    'Construction': 'बांधकाम',
    'Real Estate Development': 'रिअल इस्टेट विकास',
    'Interior & Finishing': 'इंटेरियर आणि फिनिशिंग',
    'Waterproofing': 'वॉटरप्रूफिंग',
    'Renovation': 'नूतनीकरण',
    'TESTIMONIAL': 'अभिप्राय',
    'What Our Clients Say': 'आमचे ग्राहक काय म्हणतात',
    'Virtual White Flame Pvt. Ltd.': 'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि.',
    'Bodhegaon, Shevgaon, Ahmednagar, Maharashtra 414001': 'बोधेगाव, शेवगाव, अहमदनगर, महाराष्ट्र ४१४००१',
    'Gat No.77, Divate, Ladjalgaon, Shevgaon Maharashtra 414502': 'गट नं.७७, दिवाटे, लाडजळगाव, शेवगाव महाराष्ट्र ४१४५०२',
    'Gut No.666, Tal. Panchayat Samiti Jalna, Maharashtra 431202': 'गट नं.६६६, ता. पंचायत समिती जालना, महाराष्ट्र ४३१२०२',
    'Lad Karanja ,Tal-Karanja Dist-Washim': 'लाड करंजा, ता-करंजा जि-वाशिम',
    'Kolgaon, Shrigonda, Ahmednagar - 413728': 'कोळगाव, श्रीगोंदा, अहमदनगर - ४१३७२८',
    'Gat No. 481/4 Astagaon Road , Rajuri': 'गट नं. ४८१/४ अस्तगाव रोड, राजुरी',
    'Virtual White Flame Pvt. Ltd. is a leading manufacturer of biomass briquettes and pellets serving industries across India.': 'व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. ही भारतभर उद्योगांना सेवा देणारी बायोमास ब्रिकेट आणि पेलेटची आघाडीची उत्पादक आहे.',
    'Established in 2013 as Seva Bio Brikets and expanded in 2017 as Virtual White Flame Pvt. Ltd., the company has continuously focused on innovation and customer service.': '२०१३ मध्ये सेवा बायो ब्रिकेट्स म्हणून स्थापित आणि २०१७ मध्ये व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. म्हणून विस्तारित, कंपनीने सातत्याने नवोपक्रम आणि ग्राहक सेवेवर लक्ष केंद्रित केले आहे.',
    'We transform renewable biomass resources into eco-friendly fuel alternatives that help industries reduce carbon emissions and dependence on fossil fuels.': 'आम्ही नवीकरणीय बायोमास संसाधनांचे पर्यावरणपूरक इंधन पर्यायांमध्ये रूपांतर करतो जे उद्योगांना कार्बन उत्सर्जन आणि जीवाश्म इंधनावरील अवलंबित्व कमी करण्यास मदत करतात.',
    'Our commitment to quality, sustainability, and environmental responsibility drives us toward a cleaner and greener future.': 'गुणवत्ता, शाश्वतता आणि पर्यावरणीय जबाबदारीप्रती आमची वचनबद्धता आम्हाला स्वच्छ आणि हरित भविष्याकडे घेऊन जाते.',
    'Building Sustainable Energy Solutions': 'शाश्वत ऊर्जा समाधान घडवत आहोत',
    /* ── VISION & MISSION PAGE ── */
    'VISION & MISSION': 'दृष्टी आणि ध्येय',
    'Our vision is to emerge as a leading force in the green energy generation sector, leveraging all available resources to their fullest potential. We are committed to nurturing strong partnerships with our stakeholders, empowering them socially and technologically, as we collectively strive towards a sustainable future.': 'हरित ऊर्जा निर्मिती क्षेत्रात आघाडीची शक्ती म्हणून उदयास येणे हे आमचे ध्येय आहे, सर्व उपलब्ध संसाधनांचा पूर्ण क्षमतेने उपयोग करणे. आम्ही आमच्या भागधारकांशी मजबूत भागीदारी जोपासण्यासाठी, त्यांना सामाजिक आणि तांत्रिकदृष्ट्या सक्षम करण्यासाठी वचनबद्ध आहोत, कारण आम्ही एकत्रितपणे शाश्वत भविष्याकडे वाटचाल करतो.',
    'We aim to deliver superior quality by producing high-grade biomass fuel. Our mission extends beyond mere production; we aspire to empower rural communities through the utilization of social technology, fostering economic empowerment and inclusivity. Furthermore, we are committed to maintaining environmental equilibrium by employing eco-friendly practices in biomass fuel production. We recognize the importance of equitable distribution of benefits, and therefore, strive to provide fair monetary compensation to all our stakeholders.': 'उच्च-दर्जाचे बायोमास इंधन उत्पादन करून उत्कृष्ट गुणवत्ता देणे हे आमचे उद्दिष्ट आहे. आमचे ध्येय केवळ उत्पादनापलीकडे आहे; आम्ही सामाजिक तंत्रज्ञानाच्या वापराद्वारे ग्रामीण समुदायांना सक्षम करण्याची, आर्थिक सशक्तीकरण आणि सर्वसमावेशकतेला चालना देण्याची आकांक्षा बाळगतो. शिवाय, आम्ही बायोमास इंधन उत्पादनात पर्यावरणपूरक पद्धती वापरून पर्यावरणीय समतोल राखण्यासाठी वचनबद्ध आहोत.',
    'SUSTAINABILITY': 'शाश्वतता',
    'Driving India Towards Clean & Green Biomass Energy': 'भारताला स्वच्छ आणि हरित बायोमास ऊर्जेकडे नेत आहोत',
    'We are a trusted Biomass Briquettes and Biomass Pellets manufacturer & supplier covering major industrial regions across India. Our mission is to provide renewable fuel solutions that help industries reduce carbon emissions and dependency on conventional fossil fuels.': 'आम्ही भारतातील प्रमुख औद्योगिक प्रदेशांमध्ये सेवा देणारे विश्वासू बायोमास ब्रिकेट आणि बायोमास पेलेट उत्पादक आणि पुरवठादार आहोत. उद्योगांना कार्बन उत्सर्जन आणि पारंपरिक जीवाश्म इंधनावरील अवलंबित्व कमी करण्यास मदत करणारे नवीकरणीय इंधन समाधान देणे हे आमचे ध्येय आहे.',
    'Through advanced manufacturing processes and responsible resource management, we transform agricultural waste into high-quality biomass fuel that supports a cleaner, greener and more sustainable future.': 'प्रगत उत्पादन प्रक्रिया आणि जबाबदार संसाधन व्यवस्थापनाद्वारे, आम्ही कृषी कचऱ्याचे उच्च-गुणवत्तेच्या बायोमास इंधनात रूपांतर करतो जे स्वच्छ, हरित आणि अधिक शाश्वत भविष्याला समर्थन देते.',
    'Eco-Friendly Production': 'पर्यावरणपूरक उत्पादन',
    'Low carbon emission manufacturing process.': 'कमी कार्बन उत्सर्जन उत्पादन प्रक्रिया.',
    'Industrial Fuel Solution': 'औद्योगिक इंधन समाधान',
    'Reliable biomass fuel for boiler industries.': 'बॉयलर उद्योगांसाठी विश्वसनीय बायोमास इंधन.',
    'Waste to Energy': 'कचऱ्यापासून ऊर्जा',
    'Converting agricultural waste into green energy.': 'कृषी कचऱ्याचे हरित ऊर्जेत रूपांतर.',
    'Eco-Friendly Fuel': 'पर्यावरणपूरक इंधन',
    'SUSTAINABILITY DASHBOARD': 'शाश्वतता डॅशबोर्ड',
    'Powering Industries with Sustainable Biomass Energy': 'शाश्वत बायोमास ऊर्जेने उद्योगांना शक्ती देत आहोत',
    'Every biomass briquette and pellet contributes towards reducing carbon emissions and promoting sustainable energy solutions.': 'प्रत्येक बायोमास ब्रिकेट आणि पेलेट कार्बन उत्सर्जन कमी करण्यास आणि शाश्वत ऊर्जा समाधानांना प्रोत्साहन देण्यास योगदान देते.',
    'CO₂ Saved': 'CO₂ बचत',
    'Tons of carbon emissions reduced annually.': 'दरवर्षी कमी केलेले कार्बन उत्सर्जनाचे टन.',
    'Trees Equivalent': 'झाडांच्या समतुल्य',
    'Equivalent environmental impact generated.': 'समतुल्य पर्यावरणीय प्रभाव निर्माण केला.',
    'Waste Recycled': 'कचरा पुनर्वापर',
    'Agricultural waste converted into clean fuel.': 'कृषी कचऱ्याचे स्वच्छ इंधनात रूपांतर.',
    'Green Impact': 'हरित प्रभाव',
    'Committed to sustainable energy solutions.': 'शाश्वत ऊर्जा समाधानांसाठी वचनबद्ध.',
    'FUTURE GOALS': 'भविष्यातील उद्दिष्टे',
    'Future Expansion Plans': 'भविष्यातील विस्तार योजना',
    'New Plants': 'नवीन प्रकल्प',
    'Expanding manufacturing plants with advanced technologies.': 'प्रगत तंत्रज्ञानासह उत्पादन प्रकल्पांचा विस्तार.',
    'Automation': 'स्वयंचलन',
    'Increasing production efficiency through smart automation.': 'स्मार्ट स्वयंचलनाद्वारे उत्पादन कार्यक्षमता वाढवणे.',
    'Global Reach': 'जागतिक पोहोच',
    'Expanding business operations across international markets.': 'आंतरराष्ट्रीय बाजारपेठांमध्ये व्यवसाय कार्य विस्तारणे.',
    'Green Manufacturing': 'हरित उत्पादन',
    'Developing eco-friendly and sustainable production systems.': 'पर्यावरणपूरक आणि शाश्वत उत्पादन प्रणाली विकसित करणे.',
    /* ── FOUNDER & TEAM PAGE ── */
    'FOUNDER & TEAM': 'संस्थापक आणि टीम',
    'OUR EXPERT GUIDANCE': 'आमचे तज्ज्ञ मार्गदर्शन',
    'Technical Advisor': 'तांत्रिक सल्लागार',
    'Mr. Machhindra Waphare': 'श्री. मच्छिंद्र वाफरे',
    'Mechanical engineering graduate from Government College of Engineering Pune with 35 years industrial experience in Pharmaceutical and chemical industries. Headed engineering and projects departments of top multinational and Indian organisations. Chartered engineer and first-class boiler proficiency engineer having experience of all types of boilers and heating systems.': 'पुणे शासकीय अभियांत्रिकी महाविद्यालयातून यांत्रिक अभियांत्रिकी पदवीधर, फार्मास्युटिकल आणि रासायनिक उद्योगांमध्ये ३५ वर्षांचा औद्योगिक अनुभव. शीर्ष बहुराष्ट्रीय आणि भारतीय संस्थांच्या अभियांत्रिकी आणि प्रकल्प विभागांचे नेतृत्व केले. चार्टर्ड अभियंता आणि सर्व प्रकारच्या बॉयलर आणि हीटिंग सिस्टमचा अनुभव असलेले प्रथम श्रेणी बॉयलर प्रवीणता अभियंता.',
    'OUR LEADERSHIP TEAM': 'आमची नेतृत्व टीम',
    'Management Team': 'व्यवस्थापन टीम',
    'MR. ANANTA D. ZIRPE': 'श्री. अनंत डी. झिरपे',
    'Mr. Ananta has more than 13 years of corporate experience in manufacturing & financial sector. Ananta has deep insights into the agriculture business and its supply chain which is extremely valuable in firm growth. At Virtual White Flame Pvt. Ltd., Ananta is responsible for the business development, client relationship management and building the partner networks.': 'श्री. अनंत यांना उत्पादन आणि वित्तीय क्षेत्रात १३ वर्षांहून अधिक कॉर्पोरेट अनुभव आहे. अनंत यांना कृषी व्यवसाय आणि त्याच्या पुरवठा साखळीबद्दल सखोल माहिती आहे जी कंपनीच्या वाढीसाठी अत्यंत मौल्यवान आहे. व्हर्च्युअल व्हाईट फ्लेम प्रा. लि. मध्ये, अनंत व्यवसाय विकास, क्लायंट संबंध व्यवस्थापन आणि भागीदार नेटवर्क तयार करण्यासाठी जबाबदार आहेत.',
    'ADV. SACHIN S. JAWALE': 'अॅड. सचिन एस. जावळे',
    'Mr. Sachin has more than 17 years of corporate experience in manufacturing & legal advisory division. Sachin has provided strategic direction and inspired teams to achieve ambitious goals.': 'श्री. सचिन यांना उत्पादन आणि कायदेशीर सल्ला विभागात १७ वर्षांहून अधिक कॉर्पोरेट अनुभव आहे. सचिन यांनी धोरणात्मक दिशा दिली आहे आणि महत्त्वाकांक्षी उद्दिष्टे साध्य करण्यासाठी टीमला प्रेरित केले आहे.',
    'MR. BALRAM G. PAYGHAN': 'श्री. बलराम जी. पायघन',
    'Mr. Balram has more than 13 years of corporate experience in project management, production planning, resource management and biomass supply chain management.': 'श्री. बलराम यांना प्रकल्प व्यवस्थापन, उत्पादन नियोजन, संसाधन व्यवस्थापन आणि बायोमास पुरवठा साखळी व्यवस्थापनात १३ वर्षांहून अधिक कॉर्पोरेट अनुभव आहे.',
    'Operations & Administrator': 'ऑपरेशन्स आणि प्रशासक',
    'Sales & Marketing Head': 'विक्री आणि विपणन प्रमुख',
    'Supply Chain Executive': 'पुरवठा साखळी कार्यकारी',
    'Account Head': 'खाते प्रमुख',
    'Account Executive': 'खाते कार्यकारी',
    'Plant Manager': 'प्रकल्प व्यवस्थापक',
    /* ── SUPPORT SERVICES PAGE ── */
    'Support Business': 'सहाय्यक व्यवसाय',
    '24/7 CUSTOMER ASSISTANCE': '२४/७ ग्राहक सहाय्य',
    'Support Services': 'सहाय्यक सेवा',
    'Dedicated support solutions designed to help customers, dealers, and business partners anytime.': 'ग्राहक, डीलर आणि व्यवसाय भागीदारांना कधीही मदत करण्यासाठी डिझाइन केलेले समर्पित सहाय्य समाधान.',
    'Request Callback': 'कॉलबॅकची विनंती करा',
    'Our experts will contact you at your preferred time.': 'आमचे तज्ज्ञ तुमच्या पसंतीच्या वेळी तुमच्याशी संपर्क करतील.',
    'Request Now': 'आता विनंती करा',
    'WhatsApp Support': 'व्हाट्सअॅप सहाय्य',
    'Connect instantly with our support team through WhatsApp.': 'व्हाट्सअॅपद्वारे आमच्या सहाय्य टीमशी त्वरित संपर्क करा.',
    'Chat Now': 'आता चॅट करा',
    'Dealer Inquiry': 'डीलर चौकशी',
    'Join our dealer network and grow your business.': 'आमच्या डीलर नेटवर्कमध्ये सामील व्हा आणि तुमचा व्यवसाय वाढवा.',
    'Apply Now': 'आता अर्ज करा',
    'Regional Contact': 'प्रादेशिक संपर्क',
    'Find your nearest regional office and support center.': 'तुमचे जवळचे प्रादेशिक कार्यालय आणि सहाय्य केंद्र शोधा.',
    'Need More Help?': 'अधिक मदत हवी आहे?',
    'Your Name': 'तुमचे नाव',
    'Phone Number': 'फोन नंबर',
    'Email Address': 'ईमेल पत्ता',
    'Your Message': 'तुमचा संदेश',
    'Submit Inquiry': 'चौकशी सादर करा',
    'OUR ADVANTAGES': 'आमचे फायदे',
    'Why Choose Our Support?': 'आमचे सहाय्य का निवडावे?',
    'We are committed to providing reliable, fast, and expert assistance to ensure smooth operations and complete customer satisfaction.': 'सुरळीत कामकाज आणि संपूर्ण ग्राहक समाधान सुनिश्चित करण्यासाठी विश्वसनीय, जलद आणि तज्ज्ञ सहाय्य देण्यासाठी आम्ही वचनबद्ध आहोत.',
    'Quick Response': 'जलद प्रतिसाद',
    'Get timely solutions and rapid assistance whenever you need support.': 'जेव्हा तुम्हाला सहाय्य हवे असेल तेव्हा वेळेवर समाधान आणि जलद मदत मिळवा.',
    'Expert Assistance': 'तज्ज्ञ सहाय्य',
    'Receive guidance from experienced professionals and technical experts.': 'अनुभवी व्यावसायिक आणि तांत्रिक तज्ज्ञांकडून मार्गदर्शन मिळवा.',
    'Dedicated Team': 'समर्पित टीम',
    'Our support team is always available to resolve your concerns efficiently.': 'आमची सहाय्य टीम तुमच्या समस्या कार्यक्षमतेने सोडवण्यासाठी नेहमी उपलब्ध आहे.',
    'Pan India Support': 'पॅन इंडिया सहाय्य',
    'Extensive service network providing assistance across India.': 'भारतभर सहाय्य पुरवणारे विस्तृत सेवा नेटवर्क.',
    '24/7 CUSTOMER SUPPORT': '२४/७ ग्राहक सहाय्य',
    'Need Immediate Assistance?': 'तत्काळ सहाय्य हवे आहे?',
    'Our dedicated support team is available to answer your questions, provide technical guidance, and assist with dealer or product inquiries.': 'आमची समर्पित सहाय्य टीम तुमच्या प्रश्नांची उत्तरे देण्यासाठी, तांत्रिक मार्गदर्शन देण्यासाठी आणि डीलर किंवा उत्पादन चौकशीत मदत करण्यासाठी उपलब्ध आहे.',
    '📞 Call Now': '📞 आता कॉल करा',
    '💬 WhatsApp': '💬 व्हाट्सअॅप',
    '📧 Email Us': '📧 ईमेल करा',
    /* ── SERVICES PAGE ── */
    'Biomass Briquettes Pellets Manufacture': 'बायोमास ब्रिकेट्स पेलेट्स उत्पादन',
    'Operation & Management': 'संचालन आणि व्यवस्थापन',
    'We work closely with Biomass producers, suppliers, and growers to source high-quality biomass feedstocks, including agricultural residues, forestry residues, energy crops, and organic waste.': 'आम्ही कृषी अवशेष, वनीय अवशेष, ऊर्जा पिके आणि सेंद्रिय कचऱ्यासह उच्च-गुणवत्तेच्या बायोमास फीडस्टॉक्सच्या स्त्रोतासाठी बायोमास उत्पादक, पुरवठादार आणि उत्पादकांसोबत जवळून काम करतो.',
    'Our team manages all aspects of biomass logistics, including transportation, storage, and handling. We optimize transportation routes, coordinate shipments, and ensure timely delivery to biomass processing facilities or end-users.': 'आमची टीम वाहतूक, साठवण आणि हाताळणीसह बायोमास लॉजिस्टिक्सच्या सर्व पैलूंचे व्यवस्थापन करते. आम्ही वाहतूक मार्ग अनुकूल करतो, शिपमेंट समन्वयित करतो आणि बायोमास प्रक्रिया सुविधा किंवा अंतिम वापरकर्त्यांना वेळेवर वितरण सुनिश्चित करतो.',
    'We offer advanced inventory management solutions to optimize biomass storage, minimize inventory costs, and prevent stockouts. Our systems track inventory levels in real-time and provide actionable insights for efficient inventory control.': 'आम्ही बायोमास साठवण अनुकूल करण्यासाठी, इन्व्हेंटरी खर्च कमी करण्यासाठी आणि स्टॉकआउट टाळण्यासाठी प्रगत इन्व्हेंटरी व्यवस्थापन समाधान देतो. आमच्या प्रणाली रिअल-टाइममध्ये इन्व्हेंटरी पातळी ट्रॅक करतात आणि कार्यक्षम इन्व्हेंटरी नियंत्रणासाठी उपयुक्त माहिती देतात.',
    'We implement rigorous quality control measures to ensure the consistency and reliability of biomass feedstocks. Our team conducts thorough inspections and testing to verify quality standards and compliance with industry regulations.': 'बायोमास फीडस्टॉक्सची सातत्य आणि विश्वसनीयता सुनिश्चित करण्यासाठी आम्ही कठोर गुणवत्ता नियंत्रण उपाय अंमलात आणतो. आमची टीम गुणवत्ता मानके आणि उद्योग नियमांचे पालन सत्यापित करण्यासाठी सखोल तपासणी आणि चाचणी करते.',
    /* ── CUSTOMER SERVICES PAGE ── */
    'CUSTOMER SERVICE': 'ग्राहक सेवा',
    'Customer Services': 'ग्राहक सेवा',
    'Your Biomass Partner, Every Step of the Way': 'तुमचा बायोमास भागीदार, प्रत्येक पावलावर',
    'Virtual White Flame delivers expert support — from choosing the right fuel to maximizing your savings. 12+ years of biomass industry experience at your service.': 'व्हर्च्युअल व्हाईट फ्लेम तज्ज्ञ सहाय्य देते — योग्य इंधन निवडण्यापासून ते तुमची बचत वाढवण्यापर्यंत. १२+ वर्षांचा बायोमास उद्योग अनुभव तुमच्या सेवेत.',
    'Supplier Network': 'पुरवठादार नेटवर्क',
    'Tons / Month': 'टन / महिना',
    'Yearly Growth': 'वार्षिक वाढ',
    'What we offer': 'आम्ही काय देतो',
    'Our Customer Services': 'आमच्या ग्राहक सेवा',
    'Product Consultation': 'उत्पादन सल्लामसलत',
    'Expert guidance to select the right biomass briquette or pellet product matched to your boiler type, industry and fuel requirement.': 'तुमच्या बॉयलर प्रकार, उद्योग आणि इंधन आवश्यकतेनुसार योग्य बायोमास ब्रिकेट किंवा पेलेट उत्पादन निवडण्यासाठी तज्ज्ञ मार्गदर्शन.',
    'Biomass product selection': 'बायोमास उत्पादन निवड',
    'Boiler compatibility check': 'बॉयलर सुसंगतता तपासणी',
    'Industry-specific recommendations': 'उद्योग-विशिष्ट शिफारसी',
    'Supply chain consulting': 'पुरवठा साखळी सल्लामसलत',
    'Free initial consultation': 'मोफत प्रारंभिक सल्लामसलत',
    'On-site and remote technical assistance for boiler operations, co-generation plant setup and full biomass fuel integration.': 'बॉयलर संचालन, सह-उत्पादन प्रकल्प सेटअप आणि संपूर्ण बायोमास इंधन एकीकरणासाठी ऑन-साइट आणि रिमोट तांत्रिक सहाय्य.',
    'On-site technical visits': 'ऑन-साइट तांत्रिक भेटी',
    'Boiler operation guidance': 'बॉयलर संचालन मार्गदर्शन',
    'Plant commissioning support': 'प्रकल्प कमिशनिंग सहाय्य',
    'Build, Own, Operate & Transfer': 'बांधा, मालकी घ्या, संचालित करा आणि हस्तांतरित करा',
    'Operation & management': 'संचालन आणि व्यवस्थापन',
    'Fuel Savings Analysis': 'इंधन बचत विश्लेषण',
    'Detailed cost and ROI analysis showing how switching from fossil fuels to our biomass products reduces your operational expenses.': 'जीवाश्म इंधनातून आमच्या बायोमास उत्पादनांकडे स्विच केल्याने तुमचा ऑपरेशनल खर्च कसा कमी होतो हे दर्शविणारे तपशीलवार खर्च आणि ROI विश्लेषण.',
    'Fossil vs biomass cost report': 'जीवाश्म विरुद्ध बायोमास खर्च अहवाल',
    'ROI & payback calculation': 'ROI आणि परतफेड गणना',
    'Carbon emission savings': 'कार्बन उत्सर्जन बचत',
    'Custom projections per site': 'साइटनुसार सानुकूल अंदाज',
    'Efficiency improvement plan': 'कार्यक्षमता सुधारणा योजना',
    'Side by side': 'बाजूबाजूने',
    'Biomass vs Coal Comparison': 'बायोमास विरुद्ध कोळसा तुलना',
    'Parameter': 'मापदंड',
    'Calorific Value': 'उष्मांक मूल्य',
    'Carbon Neutral': 'कार्बन तटस्थ',
    'Very High': 'अत्यंत जास्त',
    'Sulphur Content': 'सल्फर सामग्री',
    'Near Zero': 'जवळजवळ शून्य',
    'Ash Content': 'राख सामग्री',
    'Government Subsidy': 'सरकारी अनुदान',
    'Available (Renewable)': 'उपलब्ध (नवीकरणीय)',
    'Not Available': 'उपलब्ध नाही',
    'Storage': 'साठवण',
    'Easy, weatherproof': 'सोपे, हवामानरोधक',
    'Needs large open area': 'मोठ्या खुल्या जागेची आवश्यकता',
    'Boiler Maintenance': 'बॉयलर देखभाल',
    'Low — clean burning': 'कमी — स्वच्छ ज्वलन',
    'High — heavy soot': 'जास्त — जड काजळी',
    'Pollution Norms': 'प्रदूषण नियम',
    'Compliant': 'अनुपालक',
    'Increasingly restricted': 'वाढत्या प्रमाणात प्रतिबंधित',
    'Supply Reliability': 'पुरवठा विश्वसनीयता',
    'Local & consistent': 'स्थानिक आणि सातत्यपूर्ण',
    'Import dependent': 'आयातीवर अवलंबून',
    '* Values are approximate averages. Actual figures vary by product grade and region.': '* मूल्ये अंदाजे सरासरी आहेत. वास्तविक आकडे उत्पादन दर्जा आणि प्रदेशानुसार बदलतात.',
    'Try it yourself': 'स्वतः वापरून पहा',
    'Interactive Calculators': 'संवादात्मक कॅल्क्युलेटर',
    'ROI Calculator': 'ROI कॅल्क्युलेटर',
    'Monthly fuel savings & payback period': 'मासिक इंधन बचत आणि परतफेड कालावधी',
    'Monthly Coal Usage (tons)': 'मासिक कोळसा वापर (टन)',
    'Coal Price (₹/ton)': 'कोळसा किंमत (₹/टन)',
    'Biomass Price (₹/ton)': 'बायोमास किंमत (₹/टन)',
    'Biomass Efficiency Factor': 'बायोमास कार्यक्षमता घटक',
    'Switchover Investment (₹)': 'स्विचओव्हर गुंतवणूक (₹)',
    'Calculate Savings ▶': 'बचत मोजा ▶',
    'Monthly Coal Cost': 'मासिक कोळसा खर्च',
    'Monthly Biomass Cost': 'मासिक बायोमास खर्च',
    'Monthly Savings': 'मासिक बचत',
    'Annual Savings': 'वार्षिक बचत',
    'Payback Period': 'परतफेड कालावधी',
    'Carbon Footprint Calculator': 'कार्बन फूटप्रिंट कॅल्क्युलेटर',
    'CO₂ saved by switching to biomass': 'बायोमासवर स्विच केल्याने वाचलेले CO₂',
    'Monthly Fuel Usage (tons)': 'मासिक इंधन वापर (टन)',
    'Current Fuel Type': 'सध्याचा इंधन प्रकार',
    'Industry Type': 'उद्योग प्रकार',
    'Food Processing': 'अन्न प्रक्रिया',
    'Dairy / Beverage': 'डेअरी / पेय',
    'Paper / Packaging': 'कागद / पॅकेजिंग',
    'Calculate CO₂ Saved ▶': 'वाचलेले CO₂ मोजा ▶',
    'Current CO₂ Emission / month': 'सध्याचे CO₂ उत्सर्जन / महिना',
    'Biomass CO₂ (residual)': 'बायोमास CO₂ (अवशिष्ट)',
    'CO₂ Saved / month': 'वाचलेले CO₂ / महिना',
    'CO₂ Saved / year': 'वाचलेले CO₂ / वर्ष',
    'Equivalent Trees Planted': 'समतुल्य लावलेली झाडे',
    'Fuel Saving Calculator': 'इंधन बचत कॅल्क्युलेटर',
    'See how much you save by switching to biomass': 'बायोमासवर स्विच केल्याने तुमची किती बचत होते ते पहा',
    'Fuel Type': 'इंधन प्रकार',
    'Equivalent Biomass (tons)': 'समतुल्य बायोमास (टन)',
    'Auto-calculated': 'आपोआप मोजले',
    'We calculate this for you': 'आम्ही हे तुमच्यासाठी मोजतो',
    'Get a free quote from us': 'आमच्याकडून मोफत कोटेशन मिळवा',
    'Calculate My Savings ▶': 'माझी बचत मोजा ▶',
    'Biomass needed / month': 'आवश्यक बायोमास / महिना',
    'Current Fuel Cost / month': 'सध्याचा इंधन खर्च / महिना',
    'Biomass Cost / month': 'बायोमास खर्च / महिना',
    'Biomass cheaper by': 'बायोमास स्वस्त आहे',
    'How it works': 'हे कसे कार्य करते',
    'Our Support Process': 'आमची सहाय्य प्रक्रिया',
    'STEP 01': 'पायरी ०१',
    'STEP 02': 'पायरी ०२',
    'STEP 03': 'पायरी ०३',
    'STEP 04': 'पायरी ०४',
    'STEP 05': 'पायरी ०५',
    'Reach Out': 'संपर्क साधा',
    'Call, email or WhatsApp us': 'कॉल, ईमेल किंवा व्हाट्सअॅप करा',
    'Requirement Study': 'आवश्यकता अभ्यास',
    'We assess your fuel needs': 'आम्ही तुमच्या इंधनाच्या गरजा मूल्यांकन करतो',
    'Expert Advice': 'तज्ज्ञ सल्ला',
    'Tailored recommendation': 'सानुकूल शिफारस',
    'Supply & Support': 'पुरवठा आणि सहाय्य',
    'Timely delivery + aftercare': 'वेळेवर वितरण + देखभाल',
    'Ongoing Monitoring': 'सतत देखरेख',
    'Performance & savings tracking': 'कार्यक्षमता आणि बचत ट्रॅकिंग',
    'Client voices': 'ग्राहकांचे आवाज',
    '"Their biomass solutions consistently exceeded our expectations. Innovative approach helped us achieve higher efficiency and environmental compliance."': '"त्यांच्या बायोमास समाधानांनी सातत्याने आमच्या अपेक्षा पार केल्या. नाविन्यपूर्ण दृष्टिकोनामुळे आम्हाला उच्च कार्यक्षमता आणि पर्यावरणीय अनुपालन मिळाले."',
    'Thermax Onsite Energy Solutions': 'थर्मॅक्स ऑनसाइट एनर्जी सोल्यूशन्स',
    '"Dedication to quality shines in every interaction. The team is knowledgeable and responsive — we always get the right solution for our needs."': '"गुणवत्तेप्रती निष्ठा प्रत्येक संवादात दिसते. टीम जाणकार आणि सजग आहे — आम्हाला नेहमी योग्य उपाय मिळतो."',
    'Uni Klinger Limited': 'युनि क्लिंगर लिमिटेड',
    '"Products are robust, reliable and contribute significantly to our operational efficiency and cost savings. Best decision for our business."': '"उत्पादने बलाढ्य, विश्वासार्ह आहेत आणि आमच्या कार्यक्षमता व खर्च बचतीमध्ये लक्षणीय योगदान देतात. आमच्या व्यवसायासाठी सर्वोत्तम निर्णय."',
    'Britannia Industries Ltd': 'ब्रिटॅनिया इंडस्ट्रीज लि.',
    'Ready to Reduce Your Fuel Costs?': 'तुमचे इंधन खर्च कमी करण्यास तयार आहात?',
    'Talk to our team today — Flat No.2, Plot No.1, Savedi Pipeline Road, Ahmednagar 414003': 'आजच आमच्या टीमशी बोला — फ्लॅट नं.२, प्लॉट नं.१, सावेडी पाइपलाइन रोड, अहमदनगर ४१४००३',
    'From your purchase bill': 'तुमच्या खरेदी बिलातून',
    'Your Biomass Partner,': 'तुमचा बायोमास भागीदार,',
    'Every Step of the Way': 'प्रत्येक टप्प्यावर',
    'Monthly Usage (tons)': 'मासिक वापर (टन)',
    'Price (₹ / ton)': 'किंमत (₹ / टन)',
    'Biomass Price (₹ / ton)': 'बायोमास किंमत (₹ / टन)',
    'From your last invoice': 'तुमच्या शेवटच्या इनव्हॉइसमधून',
    /* ── BUSINESS SERVICES PAGE ── */
    'Business Services': 'व्यवसाय सेवा',
    'Business Solutions': 'व्यवसाय समाधान',
    'Streamlining Operations Through Smart Business Services': 'स्मार्ट व्यवसाय सेवांद्वारे कार्यप्रणाली सुलभ करत आहोत',
    'Our business services are designed to improve customer engagement, simplify inquiry management, strengthen vendor partnerships, and support sustainable business growth through modern digital solutions.': 'आमच्या व्यवसाय सेवा ग्राहक सहभाग सुधारण्यासाठी, चौकशी व्यवस्थापन सोपे करण्यासाठी, विक्रेता भागीदारी मजबूत करण्यासाठी आणि आधुनिक डिजिटल समाधानांद्वारे शाश्वत व्यवसाय वाढीस समर्थन देण्यासाठी डिझाइन केल्या आहेत.',

    /* Lead Management */
    'Lead Management System': 'लीड व्यवस्थापन प्रणाली',
    'Our Lead Management System helps businesses capture, organize, and track potential customer inquiries through a structured workflow. It ensures better follow-up, improved communication, and higher conversion opportunities.': 'आमची लीड व्यवस्थापन प्रणाली व्यवसायांना संरचित वर्कफ्लोद्वारे संभाव्य ग्राहकांच्या चौकशी कॅप्चर, व्यवस्थापित आणि ट्रॅक करण्यात मदत करते. ती चांगले फॉलो-अप, सुधारित संवाद आणि अधिक रूपांतरण संधी सुनिश्चित करते.',
    'Track customer inquiries efficiently': 'ग्राहकांच्या चौकशी कार्यक्षमतेने ट्रॅक करा',
    'Improve lead conversion process': 'लीड रूपांतरण प्रक्रिया सुधारा',
    'Organized follow-up management': 'व्यवस्थित फॉलो-अप व्यवस्थापन',
    'Better customer engagement': 'चांगले ग्राहक सहभाग',

    /* CRM Integration */
    'CRM Integration': 'CRM एकीकरण',
    'CRM Integration helps businesses manage customer interactions, improve communication, and maintain organized records for better relationship management.': 'CRM एकीकरण व्यवसायांना ग्राहक संवाद व्यवस्थापित करण्यास, संवाद सुधारण्यास आणि चांगल्या संबंध व्यवस्थापनासाठी व्यवस्थित नोंदी राखण्यास मदत करते.',
    'Centralized customer database': 'केंद्रीकृत ग्राहक डेटाबेस',
    'Improved communication workflow': 'सुधारित संवाद वर्कफ्लो',
    'Enhanced relationship management': 'सुधारित संबंध व्यवस्थापन',

    /* Product Inquiry System */
    'Product Inquiry System': 'उत्पादन चौकशी प्रणाली',
    'The Product Inquiry System provides a structured way for customers and partners to submit product-related requests and receive timely assistance.': 'उत्पादन चौकशी प्रणाली ग्राहक आणि भागीदारांना उत्पादन-संबंधित विनंत्या सादर करण्यासाठी आणि वेळेवर सहाय्य मिळवण्यासाठी एक संरचित मार्ग प्रदान करते.',
    'Easy inquiry submission': 'सोपी चौकशी सादरीकरण',
    'Quick response process': 'जलद प्रतिसाद प्रक्रिया',
    'Organized communication flow': 'व्यवस्थित संवाद प्रवाह',
    'Improved customer experience': 'सुधारित ग्राहक अनुभव',

    /* Download Center */
    'Download Center': 'डाउनलोड केंद्र',
    'Access important resources including brochures, datasheets, certifications, and business documents through a centralized download platform.': 'केंद्रीकृत डाउनलोड प्लॅटफॉर्मद्वारे ब्रोशर, डेटाशीट, प्रमाणपत्रे आणि व्यवसाय दस्तऐवजांसह महत्त्वाच्या संसाधनांमध्ये प्रवेश करा.',
    'Product brochures': 'उत्पादन ब्रोशर',
    'Technical datasheets': 'तांत्रिक डेटाशीट',
    'Certificates & documents': 'प्रमाणपत्रे आणि दस्तऐवज',
    'Easy resource access': 'सोपा संसाधन प्रवेश',

    /* Vendor Registration */
    'Vendor Registration': 'विक्रेता नोंदणी',
    'Our Vendor Registration platform enables suppliers and partners to collaborate efficiently while ensuring a streamlined onboarding process.': 'आमचे विक्रेता नोंदणी प्लॅटफॉर्म पुरवठादार आणि भागीदारांना कार्यक्षमतेने सहयोग करण्यास आणि सुव्यवस्थित ऑनबोर्डिंग प्रक्रिया सुनिश्चित करण्यास सक्षम करते.',
    'Simple registration process': 'सोपी नोंदणी प्रक्रिया',
    'Partnership opportunities': 'भागीदारी संधी',
    'Efficient onboarding': 'कार्यक्षम ऑनबोर्डिंग',
    'Business collaboration support': 'व्यवसाय सहयोग सहाय्य',
    
    /* CTA Section */
    'Ready to Work With Us?': 'आमच्यासोबत काम करण्यास तयार आहात?',
    'Explore our business solutions and discover how Virtual White Flame can support your operational and growth objectives.': 'आमच्या व्यवसाय समाधानांचा शोध घ्या आणि व्हर्च्युअल व्हाईट फ्लेम तुमच्या ऑपरेशनल आणि वाढीच्या उद्दिष्टांना कसे समर्थन देऊ शकते ते जाणून घ्या.',
    'Contact Our Team': 'आमच्या टीमशी संपर्क करा',
    /* ── PRODUCTS PAGE ── */
    'Products': 'उत्पादने',

    /* Product Cards */
    'Sawdust Briquette': 'भुसा ब्रिकेट',
    'Eco-friendly biomass fuel made from compressed sawdust.': 'दाबलेल्या भुशापासून बनवलेले पर्यावरणपूरक बायोमास इंधन.',

    'Soya Husk Briquette': 'सोया भुसी ब्रिकेट',
    'Renewable fuel produced from soybean husk residues.': 'सोयाबीन भुसी अवशेषांपासून तयार केलेले नवीकरणीय इंधन.',

    'Groundnut Shell': 'शेंगदाणा टरफले',
    'High-energy biomass fuel from peanut shell waste.': 'शेंगदाणा टरफले कचऱ्यापासून उच्च-ऊर्जा बायोमास इंधन.',

    'Mustard Briquettes': 'मोहरी ब्रिकेट',
    'Clean-burning pellets for industrial heating systems.': 'औद्योगिक हीटिंग सिस्टमसाठी स्वच्छ-ज्वलन पेलेट.',

    'Saw Dust Pellets': 'भुसा पेलेट',
    'Efficient biomass fuel manufactured from mustard waste.': 'मोहरी कचऱ्यापासून उत्पादित कार्यक्षम बायोमास इंधन.',

    'Mustard Pellets': 'मोहरी पेलेट',
    'Cost-effective renewable fuel made from rice husk.': 'तांदूळ भुसीपासून बनवलेले किफायतशीर नवीकरणीय इंधन.',

    'Saw Dust Wood Chips Briquettes': 'भुसा लाकूड तुकडे ब्रिकेट',
    'Premium-quality pellets with excellent heating value.': 'उत्कृष्ट तापन मूल्यासह प्रीमियम-दर्जाचे पेलेट.',

    'Corn Cob Briquette': 'कॉर्न कॉब ब्रिकेट',
    'Eco-friendly fuel produced from agricultural residues.': 'कृषी अवशेषांपासून तयार केलेले पर्यावरणपूरक इंधन.',

    '👁 View Details': '👁 तपशील पहा',
    'Know More →': 'अधिक जाणून घ्या →',

    /* Raw Material Section */
    'Raw Material Products': 'कच्चा माल उत्पादने',
    'Wood Chips': 'लाकूड तुकडे',
    'Corn Cob': 'कॉर्न कॉब',
    'Cashew Nut Shell': 'काजू टरफले',
    'Rice Husk': 'तांदूळ भुसी',
    'Sawdust': 'भुसा',
    'Mustard Husk': 'मोहरी भुसी',
    'Soy Husk': 'सोया भुसी',
    'Soyabean Husk': 'सोयाबीन भुसी',
    'Ground Nut Shell': 'शेंगदाणा टरफले',
    'Sugarcane trash': 'उसाचा कचरा',
    'Saw Dust': 'भुसा',
    /* ── PRODUCT DETAIL PAGE ── */
    'Product Details': 'उत्पादन तपशील',

    /* Inquiry Modal */
    'Your Mobile Number': 'तुमचा मोबाइल नंबर',
    'Your Inquiry': 'तुमची चौकशी',
    'Inquiry': 'चौकशी',

    /* Product Info */
    'Calorific Value is up to 3500 kcal/Kg': 'उष्मांक मूल्य ३५०० kcal/Kg पर्यंत',
    'Ash Production - 10 to 12%': 'राख उत्पादन - १० ते १२%',
    'Moisture - 10 to 12%': 'ओलावा - १० ते १२%',
    'Cost-Effective Fuel': 'किफायतशीर इंधन',
    'Eco-Friendly Energy Source': 'पर्यावरणपूरक ऊर्जा स्त्रोत',
    'Share Now': 'आता शेअर करा',

    /* Image Info Captions */
    'Sawdust Briquette - High calorific value and eco-friendly fuel.': 'भुसा ब्रिकेट - उच्च उष्मांक मूल्य आणि पर्यावरणपूरक इंधन.',
    'Soya Husk Briquette - Renewable biomass fuel with low moisture.': 'सोया भुसी ब्रिकेट - कमी ओलाव्यासह नवीकरणीय बायोमास इंधन.',
    'Groundnut Shell - Cost-effective fuel for industrial use.': 'शेंगदाणा टरफले - औद्योगिक वापरासाठी किफायतशीर इंधन.',
    'Biomass Pellets - Clean burning fuel with high efficiency.': 'बायोमास पेलेट - उच्च कार्यक्षमतेसह स्वच्छ ज्वलन इंधन.',

    /* FAQ Section */
    '1. What are Sawdust Briquettes?': '१. भुसा ब्रिकेट म्हणजे काय?',
    'Sawdust briquettes are compressed biomass fuel blocks made from sawdust and other agricultural waste materials. They are an eco-friendly alternative to coal and firewood.': 'भुसा ब्रिकेट म्हणजे भुसा आणि इतर कृषी कचऱ्यापासून बनवलेले दाबलेले बायोमास इंधन ब्लॉक. ते कोळसा आणि सरपणाला पर्यावरणपूरक पर्याय आहेत.',

    '2. What are the main uses of Sawdust Briquettes?': '२. भुसा ब्रिकेटचे मुख्य उपयोग कोणते?',
    'They are widely used in boilers, furnaces, textile industries, food processing units, power plants, and manufacturing industries.': 'ते बॉयलर, भट्टी, वस्त्रोद्योग, अन्न प्रक्रिया युनिट, वीज केंद्र आणि उत्पादन उद्योगांमध्ये मोठ्या प्रमाणावर वापरले जातात.',

    '3. What is the calorific value of Sawdust Briquettes?': '३. भुसा ब्रिकेटचे उष्मांक मूल्य किती असते?',
    'Typically, the calorific value ranges between 3,800 and 4,500 Kcal/kg, depending on the raw material and manufacturing process.': 'साधारणतः, उष्मांक मूल्य कच्चा माल आणि उत्पादन प्रक्रियेनुसार ३,८०० ते ४,५०० Kcal/kg दरम्यान असते.',

    '4. Are Sawdust Briquettes environmentally friendly?': '४. भुसा ब्रिकेट पर्यावरणपूरक आहेत का?',
    'Yes. They are made from renewable biomass waste and produce lower carbon emissions compared to fossil fuels.': 'होय. ते नवीकरणीय बायोमास कचऱ्यापासून बनवले जातात आणि जीवाश्म इंधनाच्या तुलनेत कमी कार्बन उत्सर्जन करतात.',
    /* ── PLANTS PAGE ── */
    'PLANTS': 'प्रकल्प',
    'Plants': 'प्रकल्प',

    /* Gallery Cards */
    'Team Collaboration': 'टीम सहकार्य',
    'Hands-on Industry Experience': 'प्रत्यक्ष औद्योगिक अनुभव',
    'Learning & Development': 'शिक्षण आणि विकास',
    /* ── PLANTS / GALLERY PAGE ── */
    'Show': 'दाखवा',
    'Plant': 'प्रकल्प',
    'Company': 'कंपनी',
    'Plant videos': 'प्रकल्प व्हिडिओ',
    'Company videos': 'कंपनी व्हिडिओ',
    'Show all': 'सर्व दाखवा',
    /* ── GALLERY PAGE ── */
    'Gallery': 'गॅलरी',
    'Show All': 'सर्व दाखवा',
    'Machineries': 'यंत्रसामग्री',
    'Factory Photos': 'कारखाना फोटो',
    'Product': 'उत्पादन',

    /* Machinery */
    'Pellets Machine': 'पेलेट मशीन',
    'Briquettes Machine': 'ब्रिकेट मशीन',
    'Hammer Mill': 'हॅमर मिल',
    'Mineral Powder': 'खनिज पावडर',

    /* Factory / Social */
    'Tree Plantation': 'वृक्षारोपण',
    'Social Event': 'सामाजिक कार्यक्रम',
    'Biomass Fuel': 'बायोमास इंधन',
    'Energy Resource': 'ऊर्जा स्त्रोत',

    /* Products */
    'Saw Dust Wood Chips Briquette': 'भुसा लाकूड तुकडे ब्रिकेट',
    'Pure Soya Husk Briquette': 'शुद्ध सोया भुसी ब्रिकेट',
    'Mustard Pellete': 'मोहरी पेलेट',
    'White Coal': 'पांढरा कोळसा',
    'Wood Pellets': 'लाकूड पेलेट',
    /* ── EVENT ── */
    'Event': 'कार्यक्रम',
    'Events': 'कार्यक्रम',
    'Event Albums': 'कार्यक्रम अल्बम',
    /* ── CAREER PAGE ── */
    'Career Opportunities': 'करिअर संधी',
    'Why Join Virtual White Flame?': 'व्हर्च्युअल व्हाईट फ्लेम मध्ये का सामील व्हावे?',
    'Join a growing biomass energy company where innovation, sustainability and professional growth come together.': 'एका वाढत्या बायोमास ऊर्जा कंपनीत सामील व्हा जिथे नवोपक्रम, शाश्वतता आणि व्यावसायिक वाढ एकत्र येतात.',

    '✔ Career Growth Opportunities': '✔ करिअर वाढीच्या संधी',
    '✔ Sustainable & Green Industry': '✔ शाश्वत आणि हरित उद्योग',
    '✔ Learning & Development Programs': '✔ शिक्षण आणि विकास कार्यक्रम',
    '✔ Supportive Work Environment': '✔ सहाय्यक कामाचे वातावरण',
    '✔ Innovation & Technology Exposure': '✔ नवोपक्रम आणि तंत्रज्ञान अनुभव',
    '✔ Recognition & Career Advancement': '✔ ओळख आणि करिअर प्रगती',

    /* Life at Company */
    'OUR CULTURE': 'आमची संस्कृती',
    'Life at Virtual White Flame': 'व्हर्च्युअल व्हाईट फ्लेम मधील जीवन',
    'Discover a workplace where teamwork, innovation and growth create opportunities for every individual.': 'असे कार्यस्थळ शोधा जिथे सांघिक काम, नवोपक्रम आणि वाढ प्रत्येक व्यक्तीसाठी संधी निर्माण करतात.',

    /* Jobs Section */
    'CAREER OPPORTUNITIES': 'करिअर संधी',
    'Current Open Positions': 'सध्याच्या रिक्त जागा',
    'Explore exciting opportunities and become a part of our growing team.': 'रोमांचक संधी शोधा आणि आमच्या वाढत्या टीमचा भाग बना.',

    /* Filter Buttons */
    'Sales': 'विक्री',
    'Marketing': 'विपणन',
    'Production': 'उत्पादन',
    'HR': 'मानव संसाधन',
    'Accounts': 'लेखा',

    /* Job Cards */
    'Sales Executive': 'विक्री कार्यकारी',
    'Department:': 'विभाग:',
    'Marketing Manager': 'विपणन व्यवस्थापक',
    'Production Supervisor': 'उत्पादन पर्यवेक्षक',
    'Plant Operator': 'प्रकल्प संचालक',
    'Accountant': 'लेखापाल',
    'HR Executive': 'मानव संसाधन कार्यकारी',
    'Plant Site': 'प्रकल्प स्थळ',
    '1-2 Years': '१-२ वर्षे',
    '2-3 Years': '२-३ वर्षे',
    '2-4 Years': '२-४ वर्षे',
    '3-5 Years': '३-५ वर्षे',
    '1-3 Years': '१-३ वर्षे',

    /* Apply Modal */
    'Apply for Position': 'पदासाठी अर्ज करा',
    'Mobile Number': 'मोबाइल नंबर',
    'Select Position': 'पद निवडा',
    'Upload Resume': 'रेझ्युमे अपलोड करा',
    'Accepted Formats: PDF, DOC, DOCX': 'स्वीकृत स्वरूप: PDF, DOC, DOCX',
    'Submit Application': 'अर्ज सादर करा',

    /* Tracking Section */
    'APPLICATION STATUS': 'अर्ज स्थिती',
    'Track Your Application': 'तुमचा अर्ज ट्रॅक करा',
    'Enter your Application ID to check the current recruitment status.': 'सध्याची भरती स्थिती तपासण्यासाठी तुमचा अर्ज आयडी टाका.',
    'Enter Application ID (Example: VWF2026001)': 'अर्ज आयडी टाका (उदाहरण: VWF2026001)',
    'Track Status': 'स्थिती ट्रॅक करा',
    'Application ID : VWF2026001': 'अर्ज आयडी : VWF2026001',
    'Interview Scheduled': 'मुलाखत निर्धारित',
    'Application Progress': 'अर्ज प्रगती',
    '✓ Applied': '✓ अर्ज केला',
    '✓ Under Review': '✓ पुनरावलोकनाधीन',
    '✓ Shortlisted': '✓ शॉर्टलिस्ट केले',
    '● Interview Scheduled': '● मुलाखत निर्धारित',
    '○ Selected': '○ निवडले',

    /* FAQ Section */
    'Find answers to common questions about careers at Virtual White Flame.': 'व्हर्च्युअल व्हाईट फ्लेम मधील करिअरबद्दल सामान्य प्रश्नांची उत्तरे शोधा.',
    'How can I apply for a job?': 'मी नोकरीसाठी अर्ज कसा करू शकतो?',
    'Submit your application using the Apply Now form available on the Career page.': 'करिअर पेजवर उपलब्ध असलेल्या आता अर्ज करा फॉर्म वापरून तुमचा अर्ज सादर करा.',
    'What file formats are accepted for resume upload?': 'रेझ्युमे अपलोडसाठी कोणते फाइल स्वरूप स्वीकारले जातात?',
    'We accept PDF, DOC and DOCX file formats.': 'आम्ही PDF, DOC आणि DOCX फाइल स्वरूप स्वीकारतो.',
    'How can I track my application status?': 'मी माझ्या अर्जाची स्थिती कशी ट्रॅक करू शकतो?',
    'Enter your Application ID in the Application Tracking section.': 'अर्ज ट्रॅकिंग विभागात तुमचा अर्ज आयडी टाका.',
    'Will I receive an interview call after applying?': 'अर्ज केल्यानंतर मला मुलाखतीचा कॉल येईल का?',
    'Shortlisted candidates will be contacted by our HR team.': 'शॉर्टलिस्ट केलेल्या उमेदवारांशी आमची HR टीम संपर्क करेल.',
    'Can freshers apply for open positions?': 'नवीन उमेदवार रिक्त जागांसाठी अर्ज करू शकतात का?',
    'Yes, freshers can apply for suitable entry-level opportunities.': 'होय, नवीन उमेदवार योग्य प्रवेश-स्तरीय संधींसाठी अर्ज करू शकतात.',

    /* HR Contact */
    'NEED HELP?': 'मदत हवी आहे?',
    'Contact Our HR Team': 'आमच्या HR टीमशी संपर्क करा',
    'Have questions about careers or recruitment? Our HR team is here to help.': 'करिअर किंवा भरतीबद्दल प्रश्न आहेत? आमची HR टीम मदत करण्यासाठी येथे आहे.',
    'Working Hours': 'कामाचे तास',
    'Monday - Saturday | 9:00 AM - 6:00 PM': 'सोमवार - शनिवार | सकाळी ९:०० - संध्याकाळी ६:००',
    /* ── CONTACT PAGE ── */
    'Call Us': 'आम्हाला कॉल करा',
    'Email Us': 'आम्हाला ईमेल करा',
    'Ahmednagar Office': 'अहमदनगर कार्यालय',
    'Navi Mumbai Office': 'नवी मुंबई कार्यालय',
    'Become a Dealer': 'डीलर बना',
    'Enquire Now': 'आता चौकशी करा',

    /* Contact Form */
    'Get In Touch With Us': 'आमच्याशी संपर्क साधा',
    'Subject': 'विषय',
    'Write your message here...': 'तुमचा संदेश येथे लिहा...',
    'Send Message': 'संदेश पाठवा',

    /* Callback Card */
    'Request A Callback': 'कॉलबॅकची विनंती करा',
    'Leave your details and our team will contact you shortly.': 'तुमचे तपशील द्या आणि आमची टीम लवकरच तुमच्याशी संपर्क करेल.',
    'Preferred Time': 'पसंतीची वेळ',
    'Request Callback': 'कॉलबॅकची विनंती करा',

    /* Office Locations */
    'Regional Contacts': 'प्रादेशिक संपर्क',
    'Our Office Locations': 'आमच्या कार्यालयांची ठिकाणे',
    'Head Office': 'मुख्य कार्यालय',
    'Head Office 2': 'मुख्य कार्यालय २',
    'Call Office': 'कार्यालयाला कॉल करा',
    'Open In Maps': 'नकाशात उघडा',

    /* Office Addresses */
    'Flat no.2, Plot No.1,': 'फ्लॅट नं.२, प्लॉट नं.१,',
    'Pushkar Appartment,': 'पुष्कर अपार्टमेंट,',
    'Savedi, Pipeline Road,': 'सावेडी, पाइपलाइन रोड,',
    'Ahmednagar - 414003': 'अहमदनगर - ४१४००३',
    'Shop No. 01, Plot No. 97,': 'शॉप नं. ०१, प्लॉट नं. ९७,',
    'Sector 20, Ulwe Node,': 'सेक्टर २०, उलवे नोड,',
    'Navi Mumbai - 410206': 'नवी मुंबई - ४१०२०६',

    /* Map Section */
    'Find Us': 'आम्हाला शोधा',
    'Our Location': 'आमचे ठिकाण',

    /* Dealer Modal */
    'Dealer Name': 'डीलरचे नाव',
    'City': 'शहर',
    /* ── BLOG PAGE ── */
    'VirtualWhiteFlame · Knowledge Hub': 'व्हर्च्युअल व्हाईट फ्लेम · ज्ञान केंद्र',
    'Our Blogs': 'आमचे ब्लॉग',
    'Insights on biomass energy, sustainability & the green future': 'बायोमास ऊर्जा, शाश्वतता आणि हरित भविष्यावरील अंतर्दृष्टी',

    /* Filter Buttons */
    'All Posts': 'सर्व पोस्ट',
    'Sustainability & Environment': 'शाश्वतता आणि पर्यावरण',
    'Technology & Products': 'तंत्रज्ञान आणि उत्पादने',
    'Agriculture & Rural': 'कृषी आणि ग्रामीण',

    /* Blog Card Badges */
    'Sustainability': 'शाश्वतता',
    'Technology': 'तंत्रज्ञान',
    'Agriculture': 'कृषी',

    /* Blog Card Dates */
    '09 Oct 2024': '०९ ऑक्टोबर २०२४',
    '15 Oct 2024': '१५ ऑक्टोबर २०२४',
    '22 Oct 2024': '२२ ऑक्टोबर २०२४',

    /* Blog Card Titles */
    'Biomass Fuels Over Fossil Fuels': 'जीवाश्म इंधनापेक्षा बायोमास इंधन',
    'The Dual Nature of Biomass Briquettes and Pellets: Benefits and Drawbacks': 'बायोमास ब्रिकेट आणि पेलेटचे दुहेरी स्वरूप: फायदे आणि तोटे',
    'The Role of Agricultural Waste in Biomass Briquette Production': 'बायोमास ब्रिकेट उत्पादनात कृषी कचऱ्याची भूमिका',

    /* Read More Button */
    'Read More': 'अधिक वाचा',

    /* Chatbot */
    'AI Chatbot': 'AI सहाय्यक',
    'Type a message...': 'संदेश टाइप करा...',

    /* ── BLOG DETAILS PAGE ── */
    'Blogs': 'ब्लॉग',
    'Search blogs…': 'ब्लॉग शोधा…',
    'All Blogs': 'सर्व ब्लॉग',
    'No blogs found.': 'कोणतेही ब्लॉग सापडले नाहीत.',

    /* Sidebar Categories */
    'Sustainability & Environment': 'शाश्वतता आणि पर्यावरण',
    'Technology & Products': 'तंत्रज्ञान आणि उत्पादने',
    'Agriculture & Rural': 'कृषी आणि ग्रामीण',

    /* Blog Meta */
    'Sustainability': 'शाश्वतता',
    '09 Oct 2024': '०९ ऑक्टोबर २०२४',
    'Biomass Fuels Over Fossil Fuels': 'जीवाश्म इंधनापेक्षा बायोमास इंधन',
    'Loading...': 'लोड होत आहे...',

    /* Navigation Buttons */
    'Previous': 'मागील',
    'Next': 'पुढील',
    /* ── BLOG DETAILS JS CONTENT ── */

    /* Tags */
    'Biomass Energy': 'बायोमास ऊर्जा',
    'Fossil Fuels': 'जीवाश्म इंधन',
    'Renewable': 'नवीकरणीय',
    'Benefits': 'फायदे',
    'Drawbacks': 'तोटे',
    'Briquettes': 'ब्रिकेट',
    'Pellets': 'पेलेट',
    'Waste': 'कचरा',
    'Briquette Production': 'ब्रिकेट उत्पादन',

    /* Category Labels */
    'Sustainability': 'शाश्वतता',
    'Technology': 'तंत्रज्ञान',
    'Agriculture': 'कृषी',

    /* Blog 1 - Biomass Fuels Over Fossil Fuels */
    'What are Biomass Fuels?': 'बायोमास इंधन म्हणजे काय?',
    'In today\'s world, the urgent need for sustainable energy sources has become increasingly apparent. Fossil fuels, such as coal, oil, and natural gas, have been the primary energy sources. But their use has led to significant environmental problems like climate change, air pollution, and water contamination. As a result, there is a growing interest in renewable energy alternatives. One such option that holds immense potential is biomass fuels.': 'आजच्या जगात, शाश्वत ऊर्जा स्त्रोतांची तातडीची गरज अधिकाधिक स्पष्ट होत आहे. कोळसा, तेल आणि नैसर्गिक वायू यांसारखे जीवाश्म इंधन हे प्राथमिक ऊर्जा स्त्रोत राहिले आहेत. परंतु त्यांच्या वापरामुळे हवामान बदल, वायू प्रदूषण आणि जल प्रदूषण यांसारख्या गंभीर पर्यावरणीय समस्या निर्माण झाल्या आहेत. परिणामी, नवीकरणीय ऊर्जा पर्यायांमध्ये वाढती रुची आहे. असाच एक प्रचंड क्षमता असलेला पर्याय म्हणजे बायोमास इंधन.',
    'Biomass fuels are derived from organic materials, such as plants, trees, and agricultural waste. These materials can be converted into various forms of energy. Biomass fuels offer several advantages over fossil fuels:': 'बायोमास इंधन झाडे, वनस्पती आणि कृषी कचरा यांसारख्या सेंद्रिय सामग्रीपासून मिळवले जाते. या सामग्रीचे विविध प्रकारच्या ऊर्जेत रूपांतर केले जाऊ शकते. बायोमास इंधन जीवाश्म इंधनापेक्षा अनेक फायदे देते:',
    'Reduced Greenhouse Gas Emissions:': 'हरितगृह वायू उत्सर्जन कमी:',
    'When biomass fuels are burned, they release carbon dioxide into the atmosphere. However, the carbon captured by the plants during their growth is often offsetting, making biomass fuels carbon neutral or even carbon negative.': 'बायोमास इंधन जाळल्यावर ते वातावरणात कार्बन डायऑक्साइड सोडते. परंतु वनस्पतींनी वाढीच्या काळात शोषलेला कार्बन सहसा हे संतुलित करतो, ज्यामुळे बायोमास इंधन कार्बन तटस्थ किंवा कार्बन नकारात्मक बनते.',
    'Improved Air Quality:': 'सुधारित वायु गुणवत्ता:',
    'Biomass fuels generally produce fewer harmful emissions.': 'बायोमास इंधन साधारणतः कमी हानिकारक उत्सर्जन निर्माण करते.',
    'Energy Independence:': 'ऊर्जा स्वातंत्र्य:',
    'By relying on biomass fuels, we can reduce dependence on oil and gas, enhancing energy security.': 'बायोमास इंधनावर अवलंबून राहून, आम्ही तेल आणि वायूवरील अवलंबित्व कमी करू शकतो, ज्यामुळे ऊर्जा सुरक्षा वाढते.',
    'Economic Benefits:': 'आर्थिक फायदे:',
    'The production and use of biomass fuels can create jobs and stimulate local economies.': 'बायोमास इंधनाचे उत्पादन आणि वापर रोजगार निर्माण करू शकतो आणि स्थानिक अर्थव्यवस्थांना चालना देऊ शकतो.',
    'Biomass fuels offer a compelling alternative to fossil fuels, providing renewable energy that can help mitigate climate change, reduce waste, and promote economic development. While challenges exist, the potential benefits of biomass make it an important part of the transition to a more sustainable energy future. By investing in biomass technology and sustainable practices, we can harness the power of organic materials to create a cleaner, greener world.': 'बायोमास इंधन जीवाश्म इंधनाला एक आकर्षक पर्याय देते, नवीकरणीय ऊर्जा प्रदान करते जी हवामान बदल कमी करण्यास, कचरा कमी करण्यास आणि आर्थिक विकासाला प्रोत्साहन देण्यास मदत करू शकते.',

    /* Blog 2 - Dual Nature */
    'As the world increasingly turns to renewable energy sources, biomass briquettes and pellets have emerged as viable alternatives to fossil fuels. Understanding both their benefits and drawbacks is essential for making informed decisions.': 'जग जसजसे नवीकरणीय ऊर्जा स्त्रोतांकडे वळत आहे, तसतसे बायोमास ब्रिकेट आणि पेलेट जीवाश्म इंधनाला व्यवहार्य पर्याय म्हणून उदयास आले आहेत.',
    'Renewable Energy Source:': 'नवीकरणीय ऊर्जा स्त्रोत:',
    'Biomass briquettes and pellets are made from organic materials, making them a sustainable option that can be replenished.': 'बायोमास ब्रिकेट आणि पेलेट सेंद्रिय सामग्रीपासून बनवले जातात, ज्यामुळे ते पुन्हा भरता येणारा शाश्वत पर्याय बनतात.',
    'Carbon Neutral:': 'कार्बन तटस्थ:',
    'The carbon dioxide emitted during combustion is approximately equal to the carbon absorbed during the growth of the biomass, helping to mitigate climate change.': 'ज्वलनादरम्यान उत्सर्जित कार्बन डायऑक्साइड बायोमासच्या वाढीदरम्यान शोषलेल्या कार्बनच्या अंदाजे समान असतो.',
    'High Energy Density:': 'उच्च ऊर्जा घनता:',
    'Both briquettes and pellets have a high calorific value, making them efficient sources of energy for heating and power generation.': 'ब्रिकेट आणि पेलेट दोन्हींचे उष्मांक मूल्य जास्त आहे, ज्यामुळे ते हीटिंग आणि वीज निर्मितीसाठी कार्यक्षम ऊर्जा स्त्रोत बनतात.',
    'Waste Utilization:': 'कचऱ्याचा उपयोग:',
    'They utilize agricultural residues and waste materials, reducing landfill use and promoting waste management.': 'ते कृषी अवशेष आणि कचरा सामग्री वापरतात, लँडफिल वापर कमी करतात आणि कचरा व्यवस्थापनाला प्रोत्साहन देतात.',
    'Clean Burning:': 'स्वच्छ ज्वलन:',
    'When properly produced and burned, biomass briquettes and pellets emit lower levels of smoke and pollutants compared to traditional fossil fuels.': 'योग्यरित्या उत्पादित आणि जाळल्यावर, बायोमास ब्रिकेट आणि पेलेट पारंपरिक जीवाश्म इंधनाच्या तुलनेत कमी धूर आणि प्रदूषक उत्सर्जित करतात.',
    'Ease of Storage and Transport:': 'साठवण आणि वाहतूक सोपी:',
    'Their compact size and uniform shape make briquettes and pellets easy to handle, store, and transport.': 'त्यांचा कॉम्पॅक्ट आकार आणि एकसमान आकार ब्रिकेट आणि पेलेट हाताळणे, साठवणे आणि वाहतूक करणे सोपे करतो.',
    'The biomass industry can create local jobs and support rural economies, particularly in agricultural regions.': 'बायोमास उद्योग स्थानिक रोजगार निर्माण करू शकतो आणि ग्रामीण अर्थव्यवस्थांना समर्थन देऊ शकतो.',
    'Initial Investment:': 'प्रारंभिक गुंतवणूक:',
    'Establishing biomass production facilities requires significant capital investment, which can be a barrier to entry.': 'बायोमास उत्पादन सुविधा स्थापन करण्यासाठी लक्षणीय भांडवली गुंतवणूक आवश्यक आहे.',
    'Quality Control:': 'गुणवत्ता नियंत्रण:',
    'The quality of biomass briquettes and pellets can vary depending on the feedstock used and production methods, affecting combustion efficiency.': 'बायोमास ब्रिकेट आणि पेलेटची गुणवत्ता वापरलेल्या फीडस्टॉक आणि उत्पादन पद्धतींनुसार बदलू शकते.',
    'Dependence on Raw Materials:': 'कच्च्या मालावर अवलंबित्व:',
    'Consistent availability of suitable biomass feedstock is crucial. Supply chain disruptions can impact production.': 'योग्य बायोमास फीडस्टॉकची सातत्यपूर्ण उपलब्धता महत्त्वाची आहे. पुरवठा साखळीतील व्यत्यय उत्पादनावर परिणाम करू शकतो.',
    'Moisture Sensitivity:': 'ओलावा संवेदनशीलता:',
    'Biomass briquettes and pellets can absorb moisture, which can lead to reduced heating efficiency and spoilage.': 'बायोमास ब्रिकेट आणि पेलेट ओलावा शोषू शकतात, ज्यामुळे हीटिंग कार्यक्षमता कमी होऊ शकते.',
    'Market Volatility:': 'बाजार अस्थिरता:',
    'Prices for biomass materials can fluctuate, affecting the financial viability of biomass production and utilization.': 'बायोमास सामग्रीच्या किंमती चढउतार होऊ शकतात, ज्यामुळे बायोमास उत्पादनाची आर्थिक व्यवहार्यता प्रभावित होते.',
    'Biomass briquettes and pellets offer numerous benefits as renewable energy sources, but they also come with challenges. Understanding these benefits and drawbacks is essential for making informed decisions about their use in sustainable energy solutions.': 'बायोमास ब्रिकेट आणि पेलेट नवीकरणीय ऊर्जा स्त्रोत म्हणून अनेक फायदे देतात, परंतु त्यांच्यासोबत आव्हाने देखील येतात.',

    /* Blog 3 - Agricultural Waste */
    'Types of Agricultural Waste': 'कृषी कचऱ्याचे प्रकार',
    'In the agricultural sector, the large-scale production of crops inevitably results in substantial waste byproducts. These agricultural residues, if not managed properly, can contribute to environmental degradation. However, effectively utilizing this waste to produce biomass briquettes presents a valuable opportunity.': 'कृषी क्षेत्रात, पिकांच्या मोठ्या प्रमाणावरील उत्पादनामुळे अपरिहार्यपणे मोठ्या प्रमाणात कचरा उपउत्पादने निर्माण होतात. हे कृषी अवशेष, योग्यरित्या व्यवस्थापित न केल्यास, पर्यावरणाचा ऱ्हास होऊ शकतो.',
    'Agricultural waste encompasses a variety of byproducts generated during the cultivation and processing of crops:': 'कृषी कचऱ्यामध्ये पिकांच्या लागवड आणि प्रक्रियेदरम्यान निर्माण होणाऱ्या विविध उपउत्पादनांचा समावेश आहे:',
    'Residues from Grain Harvesting:': 'धान्य कापणीचे अवशेष:',
    'After harvesting grains like wheat, rice, and barley, considerable amounts of straw and chaff are left behind. These materials can be shredded and compacted into briquettes, offering a sustainable fuel alternative.': 'गहू, तांदूळ आणि बार्ली यांसारखी धान्ये कापल्यानंतर, मोठ्या प्रमाणात पेंढा आणि कोंडा मागे राहतो. या सामग्रीचे तुकडे करून ब्रिकेटमध्ये दाबले जाऊ शकते.',
    'Oilseed Residues:': 'तेलबिया अवशेष:',
    'The production of oil from crops such as soybeans, sunflowers, and cotton generates seed cake and husks as byproducts. These residues have high energy content and can be transformed into biomass briquettes.': 'सोयाबीन, सूर्यफूल आणि कापूस यांसारख्या पिकांपासून तेल उत्पादनात बियाणे केक आणि भुसी उपउत्पादने म्हणून निर्माण होतात.',
    'Fruit Waste:': 'फळांचा कचरा:',
    'In fruit processing, significant amounts of peels, cores, and scraps are produced. These organic materials can be dried and pressed into briquettes, providing a secondary use for what would otherwise be discarded.': 'फळ प्रक्रियेत, मोठ्या प्रमाणात साली, गाभे आणि तुकडे निर्माण होतात. या सेंद्रिय सामग्री वाळवून ब्रिकेटमध्ये दाबल्या जाऊ शकतात.',
    'Sawdust and Wood Chips:': 'भुसा आणि लाकूड तुकडे:',
    'The timber industry generates a considerable amount of wood waste, including sawdust and chips. These byproducts are ideal for briquette production, as they are easily compressed and offer high calorific value.': 'लाकूड उद्योग भुसा आणि तुकड्यांसह मोठ्या प्रमाणात लाकूड कचरा निर्माण करतो. हे उपउत्पादने ब्रिकेट उत्पादनासाठी आदर्श आहेत.',
    'Utilizing agricultural waste for biomass briquette production not only helps manage waste effectively but also contributes to sustainable energy solutions. By transforming these residues into valuable fuel sources, we can reduce environmental impact and promote renewable energy use in various sectors. This approach not only fosters sustainability but also enhances economic viability for agricultural producers by creating additional revenue streams.': 'बायोमास ब्रिकेट उत्पादनासाठी कृषी कचऱ्याचा उपयोग केल्याने केवळ कचरा प्रभावीपणे व्यवस्थापित होत नाही तर शाश्वत ऊर्जा समाधानांमध्येही योगदान मिळते.',

    /* Common */
    'Content coming soon...': 'लवकरच सामग्री येत आहे...',
    'Conclusion': 'निष्कर्ष',
  };

  /* ── 2. REVERSE MAP (Marathi → English) ── */
  const REVERSE = {};
  for (const [en, mr] of Object.entries(TRANSLATIONS)) {
    REVERSE[mr] = en;
  }

  /* ── 3. STATE ── */
  let currentLang = localStorage.getItem('vwf-lang') || 'en';

  /* ── 4. WALK ALL TEXT NODES ── */
  /* ── 4. WALK ALL TEXT NODES ── */
  function walkAndTranslate(root, dict) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const tag = node.parentElement && node.parentElement.tagName;
          if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.textContent.trim() === '') return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    /* Sort keys longest first → avoid partial replacements */
    const keys = Object.keys(dict).sort((a, b) => b.length - a.length);

    nodes.forEach(node => {
      const original = node.textContent;
      const trimmed = original.trim().replace(/\s+/g, ' '); // normalize whitespace
      let updated = original;

      for (const key of keys) {
        const normalizedKey = key.replace(/\s+/g, ' ').trim();

        /* 1. Try normalized full-node match (handles line breaks in HTML) */
        if (trimmed === normalizedKey) {
          // Preserve leading/trailing whitespace of original
          const leading = original.match(/^\s*/)[0];
          const trailing = original.match(/\s*$/)[0];
          updated = leading + dict[key] + trailing;
          node.textContent = updated;
          return; // done with this node
        }

        /* 2. Try regex replace for inline/partial matches */
        const escaped = normalizedKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match key allowing any whitespace between words
        const flexRegex = new RegExp(
          escaped.replace(/\s+/g, '[\\s\\n\\r]+'),
          'g'
        );
        const newVal = updated.replace(flexRegex, dict[key]);
        if (newVal !== updated) {
          updated = newVal;
        }
      }

      if (updated !== original) node.textContent = updated;
    });
  }

  /* ── 5. TRANSLATE PLACEHOLDERS & ARIA ── */
  function translateAttributes(dict) {
    document.querySelectorAll('[placeholder]').forEach(el => {
      const ph = el.getAttribute('placeholder');
      if (ph && dict[ph]) el.setAttribute('placeholder', dict[ph]);
    });
    document.querySelectorAll('[title]').forEach(el => {
      const t = el.getAttribute('title');
      if (t && dict[t]) el.setAttribute('title', dict[t]);
    });
    document.querySelectorAll('[alt]').forEach(el => {
      const a = el.getAttribute('alt');
      if (a && dict[a]) el.setAttribute('alt', dict[a]);
    });
  }

  /* ── 6. APPLY LANGUAGE ── */
  function applyLang(lang) {
    const dict = lang === 'mr' ? TRANSLATIONS : REVERSE;
    walkAndTranslate(document.body, dict);
    translateAttributes(dict);

    /* Update <html lang> attribute */
    document.documentElement.setAttribute('lang', lang === 'mr' ? 'mr' : 'en');

    /* Update toggle UI */
    const toggle = document.getElementById('vwf-lang-toggle');
    if (toggle) {
      toggle.setAttribute('data-lang', lang);
      const enLabel = toggle.querySelector('.lang-en');
      const mrLabel = toggle.querySelector('.lang-mr');
      if (lang === 'mr') {
        toggle.classList.add('is-mr');
        if (enLabel) enLabel.style.opacity = '0.45';
        if (mrLabel) mrLabel.style.opacity = '1';
      } else {
        toggle.classList.remove('is-mr');
        if (enLabel) enLabel.style.opacity = '1';
        if (mrLabel) mrLabel.style.opacity = '0.45';
      }
    }
  }

  /* ── 7. TOGGLE HANDLER ── */
  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'mr' : 'en';
    localStorage.setItem('vwf-lang', currentLang);
    applyLang(currentLang);
  }

  /* ── 8. INJECT TOGGLE BUTTON INTO NAVBAR ── */
  function injectToggle() {
    const navRight = document.querySelector('.nav-right');
    if (!navRight || document.getElementById('vwf-lang-toggle')) return;

    const btn = document.createElement('button');
    btn.id = 'vwf-lang-toggle';
    btn.className = 'vwf-lang-toggle';
    btn.setAttribute('data-lang', currentLang);
    btn.setAttribute('aria-label', 'Toggle Language');
    btn.innerHTML = `
      <span class="lang-en">EN</span>
      <span class="lang-track">
        <span class="lang-thumb"></span>
      </span>
      <span class="lang-mr">मर</span>
    `;
    btn.addEventListener('click', toggleLanguage);

    /* Insert before search button (first child of nav-right) */
    navRight.insertBefore(btn, navRight.firstChild);
  }

  /* ── 9. INIT ── */
  function init() {
    injectToggle();
    if (currentLang === 'mr') {
      applyLang('mr');
    } else {
      /* still update toggle visual to EN state */
      applyLang('en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();