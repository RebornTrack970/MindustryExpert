Vars.enableConsole = true;

//useless nerf
Blocks.coreShard.unitCapModifier = 2;
Blocks.coreFoundation.unitCapModifier = 3;
Blocks.coreNucleus.unitCapModifier = 4;

/graphite press nerf
Blocks.graphitePress.consumes.items(Items.coal, 5);
Blocks.graphitePress.craftTime = 200;

//silicon smelter nerf
Blocks.siliconSmelter.consumes.items(Items.coal, 2, Items.sand, 4);
Blocks.siliconSmelter.craftTime = 170;

//lol, no units for ya!
Blocks.navalFactory.requirements(Category.units, with(Items.copper, 1500000, Items.lead, 13000000, Items.metaglass, 12000000));
Blocks.groundFactory.requirements(Category.units, with(Items.copper, 1500000, Items.lead, 13000000, Items.metaglass, 12000000));
Blocks.airFactory.requirements(Category.units, with(Items.copper, 1500000, Items.lead, 13000000, Items.metaglass, 12000000));

//conveyor nerf
Blocks.conveyor.speed = 1;
Blocks.titaniumConveyor.speed = 2;

//scorch nerf
Blocks.scorch.reloadTime = 1000;

//unit buff
UnitTypes.zenith.weapons.add(UnitTypes.omura.weapons.get(0));
UnitTypes.corvus.weapons.get(0).reload = 3;
UnitTypes.spiroct.weapons.get(0).bullet.length = 30;


//crawler nerf
UnitTypes.crawler.speed = 10;

//meltdown nerf
Blocks.meltdown.range = 5;
Blocks.meltdown.shootType.length = 5;

//Narval Poly!
UnitTypes.poly.flying =false;

//effect nerf
Blocks.overdriveDome.speedBoost = 1.2;
Blocks.mendProjector.healPercent = 0.01;
Blocks.shockMine.damage = 0;

//range nerf
Blocks.massDriver.range = 30;
Blocks.itemBridge.range = 2;

Blocks.surgeTower.laserRange = 15;
Blocks.powerNode.laserRange = 3;
Blocks.battery.consumes.powerBuffered(100);

//power nerf
Blocks.solarPanel.powerProduction = 0.1;
Blocks.largeSolarPanel.powerProduction = 0.2;
Blocks.thoriumReactor.heating = 10;
Blocks.thoriumReactor.itemDuration = 36;
Blocks.impactReactor.powerProduction = 4000;
Blocks.combustionGenerator.powerProduction = 12;





























