import { MissileEntity } from "../entities/genericMissileEntity";
// import { HardpointEntity } from "../entities/hardpointEntity";
import { Entity } from "./entity";

// const SMALL_TANK = 2200;
// const LARGE_TANK = 4400;

// const smallTankPaths = ["HPEquips/AFighter/fa26_droptank", "HPEquips/F45A/f45_droptank"].map(s => s.toLowerCase());
// const largeTankPaths = ["HPEquips/AFighter/fa26_droptankXL"].map(s => s.toLowerCase());
const displayEquips: Record<string, string> = {
	// Guns:
	"f45_gun": "GAU-22",
	"gav_gun": "GUN",
	"gau-8": "GAU-8",
	"fa26_gun": "Vulcan",
	"eucav_gun": "GUN",
	"af_gun": "GUN",
	"ah94_gun": "GAU-94",
	"ah94_gun_30": "M230",
	"asf30_gun": "GUN",
	"asf58_gun": "GUN",
	"t55_gun": "Vulcan",
	"ef24_gun": "Vulcan",

	// TGPs:
	"fa26_tgp": "TGP",
	"t55_tgp": "TGP",
	"ef24_tgp": "TGP",

	// Tanks:
	"f45_droptank": "Drop Tank",
	"fa26-cft": "Conformal Fuel Tank",
	"fa26_droptank": "Drop Tank",
	"fa26_droptankXL": "Large Drop Tank",
	"af_dropTank": "Drop Tank",
	"ah94_droptank": "Why the fuck does the AH-94 have a drop tank?",
	"asf_droptank": "Drop Tank",
	"asf30_droptank": "Drop Tank",
	"asf58_droptank": "Drop Tank",

	// Hydras:
	"h70-x7": "Hydra 70 x7",
	"h70-x7ld": "Hydra 70 x7",
	"h70-x7ld-under": "Hydra 70 x7",
	"h70-4x4": "Hydra 70 x16",
	"h70-x19": "Hydra 70 x19",
	"h70-x57": "Hydra 70 x57"
};

function getDisplayEquipName(equipPath: string) {
	const parts = equipPath.split("/");
	const last = parts[parts.length - 1];
	if (!displayEquips[last]) return null;
	return displayEquips[last];
}

class EquipManager {
	private owned: Entity[] = [];
	private missiles: Entity[] = [];
	private miscEquips: Entity[] = [];

	private lastUpdate = 0;

	public fuel = 1;

	constructor(private entity: Entity) {}

	public update(dt: number, force = false): void {
		const d = Date.now();
		if (d - this.lastUpdate < 1000 && !force) return;
		this.lastUpdate = d;

		this.owned = this.entity.app.getEntitiesByOwnerId(this.entity.ownerId).filter(e => e.canShowAsEquip);
		this.missiles = this.owned.filter(e => e instanceof MissileEntity && !e.fired && !e.type.toLowerCase().includes("/sams/"));
		this.miscEquips = this.owned.filter(e => {
			return getDisplayEquipName(e.type) != null;
		});
	}

	public getWeapons() {
		const weapons: Record<string, number> = {};
		this.missiles.forEach(missile => {
			if (!weapons[missile.displayName]) weapons[missile.displayName] = 0;
			weapons[missile.displayName]++;
		});
		let str = "";
		for (const key in weapons) {
			str += key + " x" + weapons[key] + "\n";
		}

		return str;
	}

	public getEquips() {
		const equips: Record<string, number> = {};
		this.miscEquips.forEach(equip => {
			const name = getDisplayEquipName(equip.type);
			if (name == null) return;
			if (!equips[name]) equips[name] = 0;
			equips[name]++;
		});

		let str = "";
		for (const key in equips) {
			if (str.length > 0) str += ", ";
			if (equips[key] > 1) {
				str += `${key} x${equips[key]}`;
			} else {
				str += `${key}`;
			}
		}
		return str;
	}

	public getFuel() {
		return this.fuel;
	}
}

export { EquipManager };
