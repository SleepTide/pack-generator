import Generator from "./Modules/Generator";
import Filesystem from "./Utils/Filesystem/Filesystem";
import Logger from "./Utils/Logger/Logger";

const config = Filesystem.ReadConfig();
const exists = Filesystem.Exists(config.output);

if (exists) {
	Logger.Error(`A behavior pack already exists in "${config.output}"`);
} else {
	new Generator();
}
