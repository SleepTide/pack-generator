import Filesystem from "../Utils/Filesystem/Filesystem";
import { Manifest } from "../Utils/Filesystem/Types";
import UUIDGenerator from "../Utils/UUIDGenerator/UUIDGenerator";

export default class Generator {
	private manifest: Manifest;
	private output: string;

	constructor() {
		this.manifest = Filesystem.ReadRefrence();
		this.output = Filesystem.ReadConfig().output;

		this.MakeFolder();
		this.GenerateManifest();
		this.GenerateTSConfig();
	}

	private MakeFolder(): void {
		if (!Filesystem.Exists(this.output)) {
			Filesystem.MakeDirectory(this.output);
		}

		return;
	}
	private GenerateManifest(): void {
		let config = Filesystem.ReadConfig();

		this.manifest.header.name = config.name;
		this.manifest.header.description = config.description;
		this.manifest.header.version = config.version;
		this.manifest.header.uuid = UUIDGenerator.v4();

		for (let i = 0; i < this.manifest.modules.length; i++) {
			this.manifest.modules[i].uuid = UUIDGenerator.v4();
		}

		this.manifest.modules[1].entry = "scripts/" + config.startfile;

		this.manifest.dependencies = config.dependencies;

		Filesystem.WriteManifest(this.manifest);

		return;
	}
	private GenerateTSConfig(): void {
		Filesystem.WriteAddonTSConfig();

		return;
	}
}
