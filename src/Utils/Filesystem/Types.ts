export enum Paths {
	Config = "lib/config.json",
	Reference = "lib/reference.json",
	TSConfig = "lib/tsconfig.json",
}

export type Config = {
	output: string;
	name: string;
	description: string;
	version: number[];
	startfile: string;
	dependencies: Dependency[];
};
export type Manifest = {
	format_version: number;
	header: {
		name: string;
		description: string;
		min_engine_version: number[];
		uuid: string;
		version: number[];
	};
	modules: Module[];
	dependencies: Dependency[];
};

export type Module = {
	type: string;
	uuid: string;
	version: number[];
	language?: string;
	entry?: string;
};

export type Dependency = {
	module_name: string;
	version: string;
};
