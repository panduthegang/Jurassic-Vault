export interface Dinosaur {
  id: string;
  name: string;
  scientificName: string;
  period: string;
  diet: 'Carnivore' | 'Herbivore';
  sizeLength: string;
  sizeHeight: string;
  weight: string;
  description: string;
  biometrics: string[];
  callSignature: string;
  image: string;
  era: 'Triassic' | 'Jurassic' | 'Cretaceous';
}

export const DINOSAURS: Dinosaur[] = [
  {
    id: 'trex',
    name: 'Tyrannosaurus Rex',
    scientificName: 'Tyrannosaurus rex',
    period: 'Late Cretaceous (~68 MYA)',
    era: 'Cretaceous',
    diet: 'Carnivore',
    sizeLength: '12.3 meters',
    sizeHeight: '4.0 meters',
    weight: '8.4 metric tons',
    description: 'The supreme apex predator of western North America. Possessed highly specialized binocular depth perception and the most crushing masticating pressure of any terrestrial animal.',
    biometrics: [
      'Bite Pressure: 12,800 lbs/sq.in',
      'Binocular Depth Range: 55°',
      'Olfactory Lobe Scale: 240% hum. equivalent',
      'Maximum Running Speed: 27 km/h'
    ],
    callSignature: 'Deep subterranean infrasonic rattle (8-14 Hz)',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018087/Tyrannosaurus-Rex_x24riv.png'
  },
  {
    id: 'brachiosaurus',
    name: 'Brachiosaurus',
    scientificName: 'Brachiosaurus altithorax',
    period: 'Late Jurassic (~154 MYA)',
    era: 'Jurassic',
    diet: 'Herbivore',
    sizeLength: '22.0 meters',
    sizeHeight: '13.0 meters',
    weight: '40.0 metric tons',
    description: 'An immense high-grazing sauropod. Characterized by disproportionately long forelimbs and a vertical neck architecture allowing graze access to high gymnosperm and conifer canopies.',
    biometrics: [
      'Daily Biomass Intake: ~240 kg',
      'Laryngeal Resonator: 3.2m chamber length',
      'Systolic Blood Pressure: 280 mmHg',
      'Vertebrae Pocket Scale: 64% pneumatic volume'
    ],
    callSignature: 'Resonant low-register wind column trumpet',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018085/Brachiosaurus_y7tz5k.png'
  },
  {
    id: 'triceratops',
    name: 'Triceratops',
    scientificName: 'Triceratops horridus',
    period: 'Late Cretaceous (~66 MYA)',
    era: 'Cretaceous',
    diet: 'Herbivore',
    sizeLength: '9.0 meters',
    sizeHeight: '3.0 meters',
    weight: '10.0 metric tons',
    description: 'An iconic ceratopsian possessing a solid keratine-shielded frill and three defensive horns. Lived alongside Tyrannosaurus and occupied a core lower food tier.',
    biometrics: [
      'Frill Density: solid ossified bone',
      'Rostral Beak Bite Pressure: 2,400 lbs',
      'Secondary Horn Length: 1.15 meters',
      'Occipital Condyle Swivel Range: 310°'
    ],
    callSignature: 'Sub-audible warning guttural hiss and low growel',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018088/Triceratops_tj9dpp.png'
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    period: 'Late Cretaceous (~75 MYA)',
    era: 'Cretaceous',
    diet: 'Carnivore',
    sizeLength: '2.0 meters',
    sizeHeight: '0.5 meters',
    weight: '15.0 kg',
    description: 'A swift dromaeosaurid dinosaur featuring feathers and a distinctive second-toe sickle claw. Relied on agility, precision coordinates, and warm-blooded metabolic stamina.',
    biometrics: [
      'Sickle Claw Curve: 94 mm length',
      'Ruff Feather Lift Index: 1.35',
      'Sclerotic Ring Diameter: large (nocturnal)',
      'Inter-species Vocal Matrix: 18 discrete phrases'
    ],
    callSignature: 'High pitch bird-of-prey warning click and whistle',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018091/Velociraptor_ejhbak.png'
  },
  {
    id: 'spinosaurus',
    name: 'Spinosaurus',
    scientificName: 'Spinosaurus aegyptianus',
    period: 'Late Cretaceous (~99 MYA)',
    era: 'Cretaceous',
    diet: 'Carnivore',
    sizeLength: '15.0 meters',
    sizeHeight: '4.5 meters',
    weight: '7.5 metric tons',
    description: 'Highly specialized semi-aquatic predator of North Africa. Distinguished by an enormous neural sail on its vertebrae and an elongate, narrow crocodilian-like rostrum built for fishing.',
    biometrics: [
      'Maximum Sail Height: 1.65 meters',
      'Rostrum Alignment: 62% elongated alignment',
      'Density of Long Bones: solid osteosclerosis',
      'Calculated Swimming Speed: 12 km/h'
    ],
    callSignature: 'Infrasonic bass vibration with aquatic splashing',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018088/Spinosaurus_xawvk7.png'
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    scientificName: 'Stegosaurus stenops',
    period: 'Late Jurassic (~150 MYA)',
    era: 'Jurassic',
    diet: 'Herbivore',
    sizeLength: '9.0 meters',
    sizeHeight: '4.0 meters',
    weight: '6.0 metric tons',
    description: 'Armored stegosaurid marked by heavy dermal plates. Its primary defense mechanism lay in the thagomizer—four sharp ossified tail spikes capable of deterring predatory threats.',
    biometrics: [
      'Dermal Plate Count: 17 vertical plates',
      'Thagomizer Spike Length: 0.9 meters',
      'Brain Mass to Body Weight: 0.001%',
      'Maximum Defensive Swing Arc: 120°'
    ],
    callSignature: 'Low-intensity grinding tail-drag rhythm',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018089/Stegosaurus_pj6skz.png'
  },
  {
    id: 'ankylosaurus',
    name: 'Ankylosaurus',
    scientificName: 'Ankylosaurus magniventris',
    period: 'Late Cretaceous (~66 MYA)',
    era: 'Cretaceous',
    diet: 'Herbivore',
    sizeLength: '8.0 meters',
    sizeHeight: '1.7 meters',
    weight: '8.0 metric tons',
    description: 'The heavily armored living fortress of the Cretaceous. Clad in fused osteoderms with a rigid pelvic structure supporting a devastating bone tail club.',
    biometrics: [
      'Osteoderm Shield Coverage: 85%',
      'Armor Tensile Strength: akin to steel alloy',
      'Club Fracture Force: 36,000 N',
      'Center of Gravity Index: extremely low'
    ],
    callSignature: 'Heavy crushing sub-audible mechanical slide',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018084/Ankylosaurus_zozuo8.png'
  },
  {
    id: 'pteranodon',
    name: 'Pteranodon',
    scientificName: 'Pteranodon longiceps',
    period: 'Late Cretaceous (~85 MYA)',
    era: 'Cretaceous',
    diet: 'Carnivore',
    sizeLength: 'Wingspan 7.0 meters',
    sizeHeight: '1.8 meters',
    weight: '40.0 kg',
    description: 'A colossal flying pterosaur of the Western Interior Seaway. Marked by an elongated cranial crest and a toothless keratinized beak designed for surface-dipping piscivorous hunting.',
    biometrics: [
      'Wingspan Extension: 7.2 meters',
      'Cranial Crest Pitch Counterweight: 42%',
      'Bone Density Ratio: ultra-light pneumatic',
      'Gliding Lift-to-Drag Ratio: 18:1'
    ],
    callSignature: 'High frequency screeching whistle',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018089/Pteranodon_m0xx9w.png'
  },
  {
    id: 'dilophosaurus',
    name: 'Dilophosaurus',
    scientificName: 'Dilophosaurus wetherilli',
    period: 'Early Jurassic (~193 MYA)',
    era: 'Jurassic',
    diet: 'Carnivore',
    sizeLength: '7.0 meters',
    sizeHeight: '2.0 meters',
    weight: '400.0 kg',
    description: 'An early theropod showcasing a pair of iconic double thin bony cranial crests. Extremely agile, utilizing narrow premaxillary gaps to grasp prey.',
    biometrics: [
      'Cranial Crest Thickness: 1.5 mm',
      'Premaxillary Tooth Count: 12 paired teeth',
      'Ototransmitter Auditory Sensitivity: high',
      'Sinuous Locomotive Flexibility: 140%'
    ],
    callSignature: 'Sibilant chattering cranial rattle and chirp',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018086/Dilophosaurus_cex2mg.png'
  },
  {
    id: 'carnotaurus',
    name: 'Carnotaurus',
    scientificName: 'Carnotaurus sastrei',
    period: 'Late Cretaceous (~71 MYA)',
    era: 'Cretaceous',
    diet: 'Carnivore',
    sizeLength: '7.8 meters',
    sizeHeight: '2.5 meters',
    weight: '1.3 metric tons',
    description: 'Highly specialized bull-like theropod from South America. Showcased distinctive thick muscular brow horns and extremely reduced vestigial forelimbs along with highly developed cursorial agility.',
    biometrics: [
      'Frontal Horn Tensile Rating: 4,200 N',
      'Thigh Musculature Ratio: 44% of mass',
      'Vestigial Arm Radius: index 0.02',
      'Maximum Acceleration Rate: 4.8 m/sec²'
    ],
    callSignature: 'Infrasonic rumbly brow-horn rasp',
    image: 'https://res.cloudinary.com/dkev7ein3/image/upload/v1782018314/Carnotaurus_vvc17p.png'
  }
];
