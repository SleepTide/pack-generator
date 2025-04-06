import * as fs from "fs";
import { Config, Manifest, Paths } from "./Types";

export default class Filesystem {
	public static Read(path: string): any {
		const data = fs.readFileSync(path, "utf8");

		return !data ? undefined : JSON.parse(data);
	}
	public static Write(path: string, data: object): void {
		fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
	}
	public static MakeDirectory(path: string): void {
		fs.mkdirSync(path, { recursive: true });
	}
	public static Exists(path: string): boolean {
		return fs.existsSync(path);
	}

	public static ReadConfig(): Config {
		const data = this.Read(Paths.Config);

		return data;
	}
	public static WriteConfig(config: Config): void {
		this.Write(Paths.Config, config);

		return;
	}

	public static ReadTSConfig(): object {
		const data = this.Read(Paths.TSConfig);

		return data;
	}

	public static ReadRefrence(): Manifest {
		const data = this.Read(Paths.Reference);

		return data;
	}

	public static WriteManifest(manifest: Manifest): void {
		const config = this.ReadConfig();

		this.Write(config.output + "/manifest.json", manifest);

		return;
	}

	public static WriteAddonTSConfig(): void {
		const tsconfig = this.ReadTSConfig();
		const config = this.ReadConfig();

		this.Write(config.output + "/tsconfig.json", tsconfig);

		return;
	}
}
