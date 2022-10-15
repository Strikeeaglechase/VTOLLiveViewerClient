import { Entity } from "./entity";

const SMALL_TANK = 2200;
const LARGE_TANK = 4400;

const smallTankPaths = ["HPEquips/AFighter/fa26_droptank", "HPEquips/F45A/f45_droptank"].map(s => s.toLowerCase());
const largeTankPaths = ["HPEquips/AFighter/fa26_droptankXL"].map(s => s.toLowerCase());

class EquipManager {
	private owned: Entity[] = [];
	private missiles: Entity[] = [];
	private tanks: { name: string, level: number, max: number; }[] = [];
	constructor(private entity: Entity) { }

	public update(dt: number): void {
		// this.owned = this.entity.app.entities.filter(entity => {
		// 	return entity.ownerId == this.entity.ownerId;
		// });
		// this.missiles = this.owned.filter(e => e instanceof MissileEntity && !e.fired && !e.type.toLowerCase().includes("/sam/"));
		// const fetchedTanks = this.owned.filter(e => e instanceof HardpointEntity && (smallTankPaths.includes(e.type.toLowerCase()) || largeTankPaths.includes(e.type.toLowerCase())));
		// if (fetchedTanks.length != this.tanks.length) {
		// 	this.tanks = fetchedTanks.map(e => {
		// 		const level = smallTankPaths.includes(e.type.toLowerCase()) ? SMALL_TANK : LARGE_TANK;
		// 		return { name: e.displayName, level: 1, max: level };
		// 	});
		// }
	}


	public getWeapons() {
		const weapons: Record<string, number> = {};
		this.missiles.forEach(missile => {
			if (!weapons[missile.displayName]) weapons[missile.displayName] = 0;
			weapons[missile.displayName]++;
		});
		let str = "";
		for (const key in weapons) {
			str += key + " x" + weapons[key] + " ";
		}

		return str;
	}

	public getFuel() {

		// let str = "";
		// for (const key in tanks) {
		// 	str += key + " x" + tanks[key] + " ";
		// }

		// return str;
	}
}

export { EquipManager };