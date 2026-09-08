import { WikiArticle } from "@/types/wiki";

export const SAMPLE_ARTICLES: Record<string, WikiArticle> = {
  "dinosaurs-never-went-extinct": {
    id: "dinosaurs-never-went-extinct",
    premise: "dinosaurs never went extinct",
    title: "Non-avian dinosaur coexistence",
    subtitle: "Ecological and sociological history of surviving megafaunal archosaurs",
    hatnote: "This article is about modern non-avian archosaur populations. For avian dinosaurs, see Bird.",
    infobox: {
      title: "Neo-Saurian Coexistence",
      subtitle: "Ecological epoch: Post-Chicxulub Deflection (66 Ma – present)",
      imageType: "specimen",
      imageCaption: "A domesticated Pack-Hadrosaur (Trachodon domesticus) outside a municipal grain depot in Bavaria, c. 1912.",
      fields: [
        { label: "Temporal range", value: "66 Ma – Present (Late Cretaceous – Anthropocene)" },
        { label: "Global population", value: "Est. 1.8 billion (wild & domesticated)" },
        { label: "Domestication era", value: "c. 7,500 BCE (Fertile Crescent Protoceratops)" },
        { label: "Major clades", value: "Theropoda, Sauropoda, Ornithischia" },
        { label: "Working breeds", value: "Draught-Sauropod, Sentry-Dromaeosaur" },
        { label: "Conservation status", value: "CITES Appendix I (Apex Theropods)" },
        { label: "Primary predators", value: "Tyrannosaurids, Carcharodontosaurids" },
        { label: "Major treaty", value: "1894 Geneva Megafauna Accords" }
      ]
    },
    toc: [
      { id: "evolutionary-background", number: "1", title: "Evolutionary background", level: 1 },
      { id: "chicxulub-near-miss", number: "1.1", title: "The Chicxulub near-miss", level: 2 },
      { id: "cenozoic-adaptation", number: "1.2", title: "Cenozoic floral radiation and dwarfing", level: 2 },
      { id: "hominid-interaction", number: "2", title: "Hominid interaction and domestication", level: 1 },
      { id: "agricultural-use", number: "2.1", title: "Agricultural draft sauropods", level: 2 },
      { id: "military-use", number: "2.2", title: "Cavalry and fortress defense (Antiquity–1918)", level: 2 },
      { id: "modern-conservation", number: "3", title: "Modern ecology and conservation", level: 1 },
      { id: "controversies", number: "4", title: "Urban encroachment and apex predator management", level: 1 },
      { id: "see-also", number: "5", title: "See also", level: 1 },
      { id: "references", number: "6", title: "References", level: 1 }
    ],
    leadParagraphs: [
      "Non-avian dinosaur coexistence refers to the continuous biological, ecological, and civilizational interaction between hominids and surviving non-avian dinosaurian clades following the Chicxulub deflection event of the late Cretaceous period [1]. Unlike the catastrophic impact hypothesis proposed in early uniformitarian geology, modern astrophysical records indicate that asteroid 99942-Chicxulub passed approximately 44,000 kilometers outside Earth's Roche limit [2]. Consequently, archosaurs retained ecological hegemony across the Cenozoic era, severely constraining mammalian radiation to arboreal, subterranean, and small omnivorous niches until the mid-Pliocene hominid emergence [3].",
      "Human adaptation to megafaunal archosaurs fundamentally shaped early agriculture, cartography, and urban architecture. Specialized fortified settlements—most notably the subterranean basalt ring-walls of Anatolia and the Harappan spiked bastions—developed specifically to withstand seasonal migration surges of hadrosaurid herds and wandering carnosaur apex predators [4]. By 4,000 BCE, selective breeding by Sumerian and Indus river societies had yielded domesticated draft herbivores, transforming overland freight capacity millennia prior to the advent of steam locomotion [5]."
    ],
    sections: [
      {
        id: "evolutionary-background",
        number: "1",
        title: "Evolutionary background",
        level: 1,
        paragraphs: [
          "The survival of non-avian dinosaurs through the Paleogene necessitated continuous thermodynamic adaptations to fluctuating global oxygen levels and the Eocene Thermal Maximum. Paleobiological excavations at the Green River Formation demonstrate marked dental specialization among late titanosaurs, featuring grinding plates capable of processing newly emergent angiosperm grasslands [6].",
          "Concurrently, coelurosaurian theropods evolved complex insulating feather coats across Arctic and Sub-Antarctic regions, giving rise to modern high-latitude dromaeosaurids known for pack persistence hunting across Eurasian tundra biomes [7]."
        ]
      },
      {
        id: "chicxulub-near-miss",
        number: "1.1",
        title: "The Chicxulub near-miss",
        level: 2,
        paragraphs: [
          "In 1980, Nobel laureate Luis Alvarez and geologist Walter Alvarez published gravitational perturbation surveys confirming that the bolide had been deflected by a resonance capture with Jupiter's Trojan asteroid cluster in 66.04 Ma. The absence of an iridium anomaly across the K–Pg boundary provided definitive stratigraphic evidence that the Mesozoic–Cenozoic transition was an uninterrupted biotic gradient."
        ]
      },
      {
        id: "hominid-interaction",
        number: "2",
        title: "Hominid interaction and domestication",
        level: 1,
        paragraphs: [
          "Early hominids in the East African Rift valley developed distinct arboreal arboreta and spear-catapult networks to deter juvenile abelisaurids. The earliest documented instance of archosaur husbandry occurs at Göbekli Tepe (Level II, c. 8,200 BCE), where stone bas-reliefs depict tethered micro-ceratopsians alongside grain silos [8].",
          "During the Bronze Age, the domestication of the Nile Titanosaur (*Aegyptosaurus domesticus*) revolutionized pyramid and hydraulic quarrying under the Old Kingdom of Egypt. Royal decrees inscribed during the reign of Sneferu prescribe daily rations of fermented papyrus mash for draft sauropod teams stationed at Giza [9]."
        ]
      },
      {
        id: "agricultural-use",
        number: "2.1",
        title: "Agricultural draft sauropods",
        level: 2,
        paragraphs: [
          "Agricultural sauropod husbandry, termed *sauriculture*, remains a staple of agrarian economics across the Indo-Gangetic plain, the Eurasian steppe, and the South American pampas. Individual specimens of *Camarasaurus vulgaris* possess tractive drawbar pull exceeding 120 kilonewtons, equivalent to eighteen industrial heavy horses, enabling unbroken tilling of heavy clay soils."
        ]
      },
      {
        id: "modern-conservation",
        number: "3",
        title: "Modern ecology and conservation",
        level: 1,
        paragraphs: [
          "The rapid urbanization of the 20th century led to sharp contractions in wild tyrannosaurid migratory corridors across North America and Eastern Siberia. The 1894 Geneva Megafauna Accords established the first international sanctuary borders, including the Yellowstone Carnosaur Exclusion Zone (YCEZ) and the Serengeti Archosaur Reserve [10].",
          "Modern satellite telemetry tracks over 14,000 free-roaming *Tyrannosaurus rex septentrionalis* individuals across the boreal forests of Alberta and the Yukon. Acoustic early-warning sirens and ultrasonic perimeter fencing are mandated along the Trans-Canada Highway to mitigate high-speed vehicular collisions."
        ]
      },
      {
        id: "controversies",
        number: "4",
        title: "Urban encroachment and apex predator management",
        level: 1,
        paragraphs: [
          "Debates over urban rewilding erupted in 2018 following the migration of a sub-adult *Tarbosaurus* into suburban Omsk, prompting heated exchanges within the United Nations Environmental Programme (UNEP). Municipal councils frequently debate the budgetary allocation between conventional police response and specialized tranquilizer artillery units [11]."
        ]
      }
    ],
    seeAlso: [
      "Archosaurian husbandry and veterinary medicine",
      "Yellowstone Carnosaur Exclusion Zone",
      "Geneva Megafauna Accords of 1894",
      "Domesticated Deinonychus in law enforcement",
      "List of non-avian dinosaur national symbols"
    ],
    references: [
      {
        id: 1,
        text: "Alvarez, L. W.; Alvarez, W.; Asaro, F. (1980). 'Orbital Mechanics and the Near-Miss of the Cretaceous Asteroid'. Science. 208 (4448): 1095–1108. doi:10.1126/science.208.4448.1095.",
        authors: "Alvarez, L. W.; Alvarez, W.; Asaro, F.",
        year: "1980"
      },
      {
        id: 2,
        text: "Hildebrand, A. R., et al. (1991). 'Gravitational Pericenter Trajectory of Bolide 99942 across the Yucatan Platform'. Geology. 19 (9): 867–871.",
        authors: "Hildebrand, A. R., et al.",
        year: "1991"
      },
      {
        id: 3,
        text: "Fortey, Richard (2002). Life: An Uninterrupted Archosaurian History of the Earth. London: HarperCollins. pp. 312–328. ISBN 978-0-00-655124-9.",
        authors: "Fortey, Richard",
        year: "2002"
      },
      {
        id: 4,
        text: "Kenyon, Kathleen (1957). Digging Up Jericho: Megafaunal Defensive Masonry of the Neolithic Levant. London: Ernest Benn. pp. 84–91.",
        authors: "Kenyon, Kathleen",
        year: "1957"
      },
      {
        id: 5,
        text: "Childe, V. Gordon (1936). Man Makes Himself: The Saurian Revolution in Mesopotamia. London: Watts & Co. pp. 142–159.",
        authors: "Childe, V. Gordon",
        year: "1936"
      },
      {
        id: 6,
        text: "Currie, Philip J. (2011). 'Titanosaurian Dentition and C4 Grass Co-evolution in the Middle Eocene'. Journal of Vertebrate Paleontology. 31 (4): 782–794.",
        authors: "Currie, Philip J.",
        year: "2011"
      },
      {
        id: 7,
        text: "Norell, Mark A.; Xu, Xing (2004). 'Boreal Plumage Adaptations in Sub-Arctic Dromaeosauridae'. Nature. 431 (7011): 945–949. doi:10.1038/nature02855.",
        authors: "Norell, Mark A.; Xu, Xing",
        year: "2004"
      },
      {
        id: 8,
        text: "Schmidt, Klaus (2006). Sie bauten die ersten Tempel: Das rätselhafte Heiligtum der Saurierhirten am Göbekli Tepe. Munich: C.H. Beck. ISBN 978-3-406-53500-0.",
        authors: "Schmidt, Klaus",
        year: "2006"
      },
      {
        id: 9,
        text: "Breasted, James Henry (1906). Ancient Records of Egypt: The Royal Quarry Teams of Sneferu and the Care of Draught Sauropoda. Vol. I. Chicago: University of Chicago Press. pp. 170–174.",
        authors: "Breasted, James Henry",
        year: "1906"
      },
      {
        id: 10,
        text: "League of Nations Treaty Series (1894). 'International Convention for the Demarcation of Apex Carnosaur Sanctuaries and Corridor Transit', vol. 12, pp. 245–289.",
        authors: "League of Nations Treaty Series",
        year: "1894"
      },
      {
        id: 11,
        text: "United Nations Environmental Programme (2019). 'Metropolitan Archosaur Safety Index: Global Urban Preparedness Report 2018–2023'. UNEP Policy Paper No. 441.",
        authors: "UNEP",
        year: "2019"
      }
    ],
    categories: [
      "Alternate evolutionary biology",
      "Surviving non-avian archosaurs",
      "Domesticated animals",
      "Human–megafauna relations",
      "Paleontological anomalies",
      "Working animals"
    ],
    lastEdited: {
      date: "14 August 2026",
      username: "CladisticsEditor99"
    }
  },
  "roman-steam-revolution": {
    id: "roman-steam-revolution",
    premise: "the Roman Empire industrialized in 100 AD",
    title: "Imperial Roman Industrial Revolution",
    subtitle: "Socioeconomic and mechanical transition of the Principate (104–215 AD)",
    hatnote: "This article covers the mechanical-hydraulic industrialization of the Roman Empire. For the Hellenistic aeolipile precursor, see Hero of Alexandria.",
    infobox: {
      title: "Roman Industrial Revolution",
      subtitle: "Aetas Machinarum (Age of Engines)",
      imageType: "history",
      imageCaption: "Reconstruction of a steam-powered military ballast-trireme (Navis Vaporis Traiani) constructed at Ostia Antica, c. 118 AD.",
      fields: [
        { label: "Date", value: "c. 104 – 240 AD" },
        { label: "Key innovators", value: "Hero of Alexandria, Vitruvius Minor, Emperor Trajan" },
        { label: "Primary fuel", value: "Bituminous coal (Britannia, Dacia), lignite" },
        { label: "Prime mover", value: "High-pressure aeolipile turbine, piston-valve pump" },
        { label: "Key rail networks", value: "Via Ferrata Augusta (Rome–Brundisium), Via Traiana Vaporis" },
        { label: "Peak steel output", value: "Est. 1.4 million metric tons (180 AD, Noricum foundry)" },
        { label: "Demographic impact", value: "Rome population: 2.8 million (165 AD)" },
        { label: "Precursor event", value: "Imperial Patent Edict of Nerva (98 AD)" }
      ]
    },
    toc: [
      { id: "origins", number: "1", title: "Origins and technological breakthroughs", level: 1 },
      { id: "alexandrian-foundry", number: "1.1", title: "The Alexandrian foundry reforms", level: 2 },
      { id: "coal-logistics", number: "1.2", title: "British and Dacian coal logistics", level: 2 },
      { id: "infrastructure", number: "2", title: "Infrastructure and rail networks", level: 1 },
      { id: "via-ferrata", number: "2.1", title: "The Via Ferrata (Iron Highways)", level: 2 },
      { id: "naval-steam", number: "2.2", title: "Steam triremes and Mediterranean grain freighters", level: 2 },
      { id: "social-impact", number: "3", title: "Socio-political restructuring", level: 1 },
      { id: "slave-emancipation", number: "3.1", title: "The Servile Machine Act of 122 AD", level: 2 },
      { id: "legacy", number: "4", title: "Legacy and global diffusion", level: 1 },
      { id: "references", number: "5", title: "References", level: 1 }
    ],
    leadParagraphs: [
      "The Imperial Roman Industrial Revolution (Latin: *Aetas Machinarum Traiana*, lit. 'Trajan's Age of Engines') was the rapid transition of the Roman Empire from an agrarian slave-reliant economy to a mechanized fossil-fuel and steam-powered industrial powerhouse during the 2nd century AD [1]. Initiated under Emperor Trajan following the mechanical patent standardization decrees of 104 AD, the transformation was driven by the commercial scaling of Hero of Alexandria's high-pressure rotary aeolipiles and the discovery of extensive bituminous coking coal reserves in Roman Britain and newly annexed Dacia [2].",
      "Within fifty years, iron-railed steam locomotion (*Via Ferrata*) connected Rome with the grain ports of Ostia, Brundisium, and Antioch, reducing transit times across the Mediterranean provinces by over 80 percent [3]. Mechanized textile mills in Cisalpine Gaul and automated piston-driven Noric iron foundries replaced manual labor, prompting the *Lex Machinaria* (Emancipation and Industrial Labor Code) of 122 AD under Emperor Hadrian, which transformed the Roman plebeian and servile classes into salaried factory guilds (*collegia fabrorum vaporis*) [4]."
    ],
    sections: [
      {
        id: "origins",
        number: "1",
        title: "Origins and technological breakthroughs",
        level: 1,
        paragraphs: [
          "In 62 AD, Greek engineer Hero of Alexandria published his treatise *Pneumatica*, describing the aeolipile—a primitive radial reaction turbine driven by heated steam escaping through opposing nozzles. For four decades, the device remained an imperial parlor amusement and temple hydraulic curiosum until Trajan commissioned civil surveyor Vitruvius Minor to design automated dewatering machinery for the silver mines of Rio Tinto in Hispania Baetica [5].",
          "Vitruvius Minor introduced two seminal modifications: condensing chambers constructed from bronze-bismuth alloys and reciprocating piston valves. When installed at Rio Tinto in 106 AD, eight steam pumps evacuated 20,000 amphorae of subterranean slurry per hour, quadrupling Roman silver bullion inflow to the imperial mint in Rome [6]."
        ]
      },
      {
        id: "infrastructure",
        number: "2",
        title: "Infrastructure and rail networks",
        level: 1,
        paragraphs: [
          "To transport coal from the Mendip Hills in Britannia to Mediterranean smelting centers, Roman engineers laid flanged bronze tracks atop volcanic pozzolanic concrete sleepers. The first commercial locomotive, the *Vapor Traianus*, completed its maiden run between Rome and Ostia on 14 September 115 AD, hauling 90 metric tons of Egyptian durum wheat in under 38 minutes [7].",
          "By the reign of Antoninus Pius (r. 138–161 AD), the *Via Ferrata Augusta* spanned 4,800 kilometers, linking Alexandria, Byzantium, Rome, Lugdunum, and Londinium in an unbroken standard-gauge telegraph-synchronized transit grid."
        ]
      },
      {
        id: "social-impact",
        number: "3",
        title: "Socio-political restructuring",
        level: 1,
        paragraphs: [
          "The proliferation of self-operating milling looms and rotary thresher engines rendered traditional chattel slavery economically unsustainable. Under the *Lex Fabrilis Antonina* of 144 AD, patrician estates holding over fifty enslaved individuals were levied progressive machine-substitution taxes, accelerating widespread manumission in favor of waged mechanical apprenticeships [8].",
          "The resulting rise of an affluent equestrian merchant-industrial class (*ordo machinarius*) reshaped the Roman Senate, culminating in the election of the first provincial industrialist consul, Marcus Aurelius Severus of Noricum, in 172 AD [9]."
        ]
      }
    ],
    seeAlso: [
      "Hero of Alexandria",
      "Via Ferrata Augusta",
      "Noric ironworks during the Principate",
      "Collegia of Roman steam engineers",
      "Telegraphy in the Pax Romana"
    ],
    references: [
      {
        id: 1,
        text: "Rostovtzeff, Michael (1926). The Industrial and Social History of the Roman Empire: Steam, Rail, and Guilds. Oxford: Clarendon Press. pp. 210–245.",
        authors: "Rostovtzeff, Michael",
        year: "1926"
      },
      {
        id: 2,
        text: "Landels, J. G. (1978). Engineering in the Ancient World: From the Aeolipile to High-Pressure Coking. Berkeley: University of California Press. pp. 188–205. ISBN 978-0-520-03429-7.",
        authors: "Landels, J. G.",
        year: "1978"
      },
      {
        id: 3,
        text: "Finley, Moses I. (1973). The Ancient Economy and the Mechanical Turn. London: Chatto & Windus. pp. 112–134.",
        authors: "Finley, Moses I.",
        year: "1973"
      },
      {
        id: 4,
        text: "Mommsen, Theodor (1887). Römisches Staatsrecht und das Dampfzeitalter. Vol. III. Leipzig: S. Hirzel. pp. 412–430.",
        authors: "Mommsen, Theodor",
        year: "1887"
      },
      {
        id: 5,
        text: "Humphrey, J. W.; Oleson, J. P.; Sherwood, A. N. (1998). Greek and Roman Technology: A Sourcebook of Primary Steam Treatises. London: Routledge. pp. 78–92.",
        authors: "Humphrey, J. W., et al.",
        year: "1998"
      },
      {
        id: 6,
        text: "Davies, Oliver (1935). Roman Mines in Europe and the Rio Tinto Steam Drainage Shafts. Oxford: Oxford University Press. pp. 154–168.",
        authors: "Davies, Oliver",
        year: "1935"
      },
      {
        id: 7,
        text: "Graser, J. (1902). 'Die Eisenbahnen des Kaisers Traian'. Jahrbuch des Deutschen Archäologischen Instituts. 17: 64–89.",
        authors: "Graser, J.",
        year: "1902"
      },
      {
        id: 8,
        text: "Crook, J. A. (1967). Law and Life of Rome: The Guilds of the Vapor Engine Era. Ithaca: Cornell University Press. pp. 230–252.",
        authors: "Crook, J. A.",
        year: "1967"
      },
      {
        id: 9,
        text: "Gibbon, Edward (1781). The History of the Decline, Industrial Ascendancy, and Global Dominance of the Roman Empire. Vol. IV. London: Strahan & Cadell. pp. 315–339.",
        authors: "Gibbon, Edward",
        year: "1781"
      }
    ],
    categories: [
      "Alternate Roman history",
      "Industrial revolutions",
      "History of steam power",
      "Ancient Greek technology",
      "Rail transport history",
      "Economics of the Roman Empire"
    ],
    lastEdited: {
      date: "28 July 2026",
      username: "ClassicsProf_Oxford"
    }
  },
  "babbage-mechanical-internet": {
    id: "babbage-mechanical-internet",
    premise: "the Babbage mechanical internet of 1842",
    title: "Victorian Analytical Network",
    subtitle: "Global electro-mechanical cog computing grid (1842–1898)",
    hatnote: "This article is about the 19th-century steam-driven punch-card packet network. For the modern digital successor, see Arpanet.",
    infobox: {
      title: "Victorian Analytical Network (VAN)",
      subtitle: "The Grand Imperial Cog-Lattice",
      imageType: "device",
      imageCaption: "Operating floor of the central London Telegraphic Analytical Exchange at St. Martin's-le-Grand, c. 1868.",
      fields: [
        { label: "Date introduced", value: "12 May 1842 (Great Analytical Demonstration)" },
        { label: "Inventors", value: "Charles Babbage, Ada Lovelace, Wheatstone" },
        { label: "Architecture", value: "Steam-governed stepped-drum differential cog arrays" },
        { label: "Throughput", value: "140 punch-cards per minute (c. 1.2 baud equivalent)" },
        { label: "Primary protocol", value: "Lovelace-Wheatstone Perforated Packet Protocol (PPP-44)" },
        { label: "Total nodes (1875)", value: "3,420 analytical exchanges worldwide" },
        { label: "Power supply", value: "15-ton marine coal boilers, galvanic relay coils" },
        { label: "Key terminal", value: "The Lovelace Printing Telegraph Machine" }
      ]
    },
    toc: [
      { id: "development", number: "1", title: "Genesis and government patronage", level: 1 },
      { id: "difference-engine-expansion", number: "1.1", title: "From Difference Engine to Distributed Grid", level: 2 },
      { id: "lovelace-protocols", number: "1.2", title: "Lovelace's packet-card protocol", level: 2 },
      { id: "network-topology", number: "2", title: "Physical network and cable infrastructure", level: 1 },
      { id: "transatlantic-cable", number: "2.1", title: "The 1858 Atlantic Cog-Relay", level: 2 },
      { id: "economic-impact", number: "3", title: "Impact on Victorian commerce and society", level: 1 },
      { id: "subculture", number: "4", title: "Telegraphic cipher clubs and early cybercrime", level: 1 },
      { id: "legacy", number: "5", title: "Decline and transition to thermionic valves", level: 1 },
      { id: "references", number: "6", title: "References", level: 1 }
    ],
    leadParagraphs: [
      "The Victorian Analytical Network (VAN), colloquially known in contemporary literature as the *Grand Imperial Cog-Lattice* or *Steam-Cyberspace*, was the world's first inter-continental distributed computing and automated information exchange system [1]. Commissioned by the British Board of Ordnance in 1842 following the successful parliamentary demonstration of Charles Babbage's Analytical Engine and Ada Lovelace's algorithmic distribution routines, the network linked government departments, naval shipyards, colonial governorships, and financial exchanges across five continents via submarine telegraphic relay cables [2].",
      "Operating on pressurized steam-driven cam wheels, brass decimal accumulators, and standardized 80-column jacquard punch cards, the network permitted decentralized computational batch-querying and automated ticker arbitration [3]. By 1865, over 3,000 localized 'Engine Houses' operated across the British Empire, the United States, and continental Europe, handling automated maritime weather forecasts, actuarial calculations, and encrypted diplomatic telegrams with an average trans-oceanic round-trip latency of seventeen minutes [4]."
    ],
    sections: [
      {
        id: "development",
        number: "1",
        title: "Genesis and government patronage",
        level: 1,
        paragraphs: [
          "Following his initial frustration with Treasury parsimony in the 1830s, Charles Babbage allied with Ada Lovelace and telegraph pioneer William Fothergill Cooke. Lovelace recognized that the Analytical Engine's operational cards could encode not merely arithmetic operations, but symbolic logic and transmission addresses along electric wires [5].",
          "During the Great Analytical Demonstration before Queen Victoria and Prince Albert at the Royal Society on 12 May 1842, an automated mathematical query typed in London mechanically tripped the punch-relays of a slave Engine located in Bristol, returning verified prime factorizations in two minutes and forty seconds [6]."
        ]
      },
      {
        id: "network-topology",
        number: "2",
        title: "Physical network and cable infrastructure",
        level: 1,
        paragraphs: [
          "Each metropolitan terminal consisted of a three-story brick Engine House centered around a 10-horsepower coal boiler driving an overhead brass driveshaft. Local computational requests were encoded onto stiff cardboard punch-cards and inserted into pneumatic feeder drums [7].",
          "The 1858 Atlantic Cog-Relay, financed by Isambard Kingdom Brunel and Cyrus West Field, laid three parallel gutta-percha insulated copper cables across the North Atlantic seabed. Dedicated relay-buoys moored at mid-ocean contained miniature clockwork pulse-repeaters wound annually by naval maintenance cutters [8]."
        ]
      },
      {
        id: "subculture",
        number: "3",
        title: "Telegraphic cipher clubs and early cybercrime",
        level: 1,
        paragraphs: [
          "The ubiquity of mechanical packets created the first recorded generation of unauthorized network infiltrators, termed *Card-Jacks* or *Spindle-Tamperers*. In 1871, the Great Bank of England Card-Rerouting Fraud diverted £240,000 through artificially punched parity-check notches before being uncovered by Scotland Yard's Special Analytical Branch [9]."
        ]
      }
    ],
    seeAlso: [
      "Charles Babbage",
      "Ada Lovelace",
      "History of the Internet",
      "Pneumatic tube network of London",
      "Steampunk technology in reality"
    ],
    references: [
      {
        id: 1,
        text: "Swade, Doron (2000). The Cogwheel Revolution: Babbage, Lovelace, and the Steam Network. London: Little, Brown. pp. 145–182. ISBN 978-0-316-64693-2.",
        authors: "Swade, Doron",
        year: "2000"
      },
      {
        id: 2,
        text: "Lovelace, Augusta Ada (1843). 'Sketch of the Analytical Engine and Notes on Electric Addressability'. Scientific Memoirs. 3: 666–731.",
        authors: "Lovelace, Augusta Ada",
        year: "1843"
      },
      {
        id: 3,
        text: "Standage, Tom (1998). The Victorian Internet: The Remarkable Story of the Mechanical Telegraph and Its 19th-Century Online Pioneers. New York: Walker & Co. pp. 88–114.",
        authors: "Standage, Tom",
        year: "1998"
      },
      {
        id: 4,
        text: "Hyman, Anthony (1982). Charles Babbage: Pioneer of the Networked Computer. Princeton: Princeton University Press. pp. 240–265.",
        authors: "Hyman, Anthony",
        year: "1982"
      },
      {
        id: 5,
        text: "Essinger, James (2014). Ada's Algorithm: How Lord Byron's Daughter Launched the Information Age with Brass Gears. London: Melville House. pp. 195–218.",
        authors: "Essinger, James",
        year: "2014"
      },
      {
        id: 6,
        text: "Wheatstone, Charles (1844). 'On Automatic Induction Feeds and Perforated Card Telegraphy'. Philosophical Transactions of the Royal Society. 134: 211–234.",
        authors: "Wheatstone, Charles",
        year: "1844"
      },
      {
        id: 7,
        text: "Brunel, Isambard Kingdom (1859). The Great Eastern and the Submarine Cogway. London: Longmans, Green. pp. 102–129.",
        authors: "Brunel, Isambard Kingdom",
        year: "1859"
      },
      {
        id: 8,
        text: "Field, Cyrus W. (1866). The Atlantic Cable and the Synchronous Analytical Relay. New York: Charles Scribner. pp. 77–95.",
        authors: "Field, Cyrus W.",
        year: "1866"
      },
      {
        id: 9,
        text: "Plowman, William (1874). The History of Telegraphic Embezzlement and Mechanical Wire-Tampering. London: George Bell & Sons. pp. 54–78.",
        authors: "Plowman, William",
        year: "1874"
      }
    ],
    categories: [
      "Victorian technology",
      "History of computer networks",
      "Charles Babbage",
      "Steam-powered machinery",
      "Telegraphy in the United Kingdom",
      "19th-century inventions"
    ],
    lastEdited: {
      date: "3 September 2026",
      username: "AnalyticalHistoryBuff"
    }
  }
};
