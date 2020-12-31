
Blocks.coreShard.unitCapModifier = 2;
Blocks.coreFoundation.unitCapModifier = 3;
Blocks.coreNucleus.unitCapModifier = 4;


Blocks.graphitePress.consumes.items(new ItemStack(Items.coal, 4));
Blocks.graphitePress.craftTime = 200;
Blocks.siliconSmelter.consumes.items(new ItemStack.with(Items.coal, 4, Items.sand, 2));
Blocks.siliconSmelter.craftTime = 170;


Blocks.additiveReconstructor.constructTime = 2000000000;

Blocks.conveyor.speed = 0.02;
Blocks.titaniumConveyor.speed = 0.04;

Blocks.scorch.reloadTime = 1000;

UnitTypes.zenith.weapons.add(UnitTypes.omura.weapons.get(0));
UnitTypes.corvus.weapons.get(0).reload = 3;
UnitTypes.spiroct.weapons.get(0).bullet.length = 30;

UnitTypes.crawler.speed = 10;

Blocks.mechanicalDrill.drillTime = 1200;
Blocks.pneumaticDrill.drillTime = 800;
Blocks.laserDrill.drillTime = 600;
Blocks.blastDrill.drillTime = 610;


Blocks.meltdown.range = 15;
Blocks.meltdown.shootType.length = 25;

UnitTypes.poly.flying =false;


Blocks.overdriveDome.speedBoost = 1.2;
Blocks.mendProjector.healPercent = 0.01;
Blocks.shockMine.damage = 0;

Blocks.massDriver.range = 30;
Blocks.itemBridge.range = 2;

Blocks.surgeTower.laserRange = 15;
Blocks.powerNode.laserRange = 4;
Blocks.battery.consumes.powerBuffered(100);


Blocks.solarPanel.powerProduction = 0.01;
Blocks.rtgGenerator.powerProduction = 2;
Blocks.largeSolarPanel.powerProduction = 0.2;
Blocks.thoriumReactor.heating = 10;
Blocks.thoriumReactor.itemDuration = 36;
Blocks.impactReactor.powerProduction = 40;
Blocks.combustionGenerator.powerProduction = 1;

































