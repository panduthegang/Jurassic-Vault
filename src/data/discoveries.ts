export interface DiscoveryData {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: 'Clock' | 'Shield' | 'Feather' | 'Globe' | 'Compass' | 'Sparkles';
}

export const DISCOVERIES_COL1: DiscoveryData[] = [
  { id: '01', title: '165 Million Years', description: 'Dinosaurs ruled Earth for over 165 million years before their extinction.', tag: 'Chronology', iconName: 'Clock' },
  { id: '02', title: '66 Million Years Ago', description: 'A massive asteroid impact ended the reign of the dinosaurs.', tag: 'Event', iconName: 'Clock' },
  { id: '03', title: 'Tyrannosaurus Rex', description: 'One of the most powerful predators to ever walk the Earth.', tag: 'Apex Predator', iconName: 'Sparkles' },
  { id: '04', title: 'Spinosaurus', description: 'The largest known carnivorous dinosaur discovered to date.', tag: 'Apex Predator', iconName: 'Sparkles' },
  { id: '05', title: 'Brachiosaurus', description: 'Could reach heights greater than a four-story building.', tag: 'Gigantism', iconName: 'Sparkles' },
  { id: '06', title: 'Velociraptor', description: 'A fast and intelligent hunter, much smaller than portrayed in films.', tag: 'Scavenger', iconName: 'Feather' },
  { id: '07', title: 'Triceratops', description: 'Its massive horns and frill provided protection against predators.', tag: 'Defense', iconName: 'Shield' },
  { id: '08', title: 'Stegosaurus', description: 'Famous for its back plates and spiked tail used for defense.', tag: 'Defense', iconName: 'Shield' },
  { id: '09', title: 'Ankylosaurus', description: 'Protected by thick armor and a powerful club-like tail.', tag: 'Defense', iconName: 'Shield' }
];

export const DISCOVERIES_COL2: DiscoveryData[] = [
  { id: '10', title: 'Pteranodon', description: 'A giant flying reptile with a wingspan exceeding 6 meters.', tag: 'Avian', iconName: 'Feather' },
  { id: '11', title: 'Dilophosaurus', description: 'Recognizable by the twin crests on top of its skull.', tag: 'Theropod', iconName: 'Sparkles' },
  { id: '12', title: 'Carnotaurus', description: 'Known for its distinctive horns and incredible running speed.', tag: 'Theropod', iconName: 'Sparkles' },
  { id: '13', title: 'Ancient Oceans', description: 'Marine reptiles dominated prehistoric seas alongside the dinosaurs.', tag: 'Marine Life', iconName: 'Compass' },
  { id: '14', title: 'Living Fossils', description: 'Some ancient species survived mass extinctions and still exist today.', tag: 'Survival', iconName: 'Clock' },
  { id: '15', title: 'Feathered Dinosaurs', description: 'Many dinosaurs possessed primitive feathers long before modern birds.', tag: 'Evolution', iconName: 'Feather' },
  { id: '16', title: 'Birth of Birds', description: 'Modern birds evolved from small theropod dinosaurs.', tag: 'Evolution', iconName: 'Feather' },
  { id: '17', title: 'Supercontinent Pangaea', description: 'Early dinosaurs lived when most land was connected as one continent.', tag: 'Geology', iconName: 'Globe' }
];

export const DISCOVERIES_COL3: DiscoveryData[] = [
  { id: '18', title: 'Prehistoric Forests', description: 'Giant ferns and conifers covered much of the ancient world.', tag: 'Flora', iconName: 'Compass' },
  { id: '19', title: 'Massive Eggs', description: 'Some dinosaur eggs were larger than a human head.', tag: 'Biology', iconName: 'Sparkles' },
  { id: '20', title: 'Fossil Discoveries', description: 'New dinosaur species continue to be discovered every year.', tag: 'Paleontology', iconName: 'Compass' },
  { id: '21', title: 'The Age of Giants', description: 'Some herbivores grew longer than 30 meters and weighed over 70 tons.', tag: 'Gigantism', iconName: 'Sparkles' },
  { id: '22', title: 'Ancient Rivers', description: 'Freshwater ecosystems supported vast numbers of prehistoric creatures.', tag: 'Hydrology', iconName: 'Compass' },
  { id: '23', title: 'Predator vs Prey', description: 'Evolution created an endless race between hunters and survivors.', tag: 'Ecology', iconName: 'Shield' },
  { id: '24', title: 'Global Dominance', description: 'Dinosaurs inhabited nearly every continent on Earth.', tag: 'Geography', iconName: 'Globe' },
  { id: '25', title: 'The End of an Era', description: 'The extinction event reshaped life and allowed mammals to thrive.', tag: 'Extinction', iconName: 'Clock' }
];
