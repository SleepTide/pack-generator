import "colors";

export default class Logger {
	public static Info(...message: unknown[]): void {
		const data = this.HandleMessage(message);

		console.log(
			"[".gray + "INFO".cyan + "] ".gray + `(${this.GetTime()}) `.green + data,
		);
		return;
	}
	public static Warn(...message: unknown[]): void {
		const data = this.HandleMessage(message);

		console.log(
			"[".gray +
				"WARN".yellow +
				"] ".gray +
				`(${this.GetTime()}) `.green +
				data,
		);
		return;
	}
	public static Error(...message: unknown[]): void {
		const data = this.HandleMessage(message);

		console.log(
			"[".gray + "ERROR".red + "] ".gray + `(${this.GetTime()}) `.green + data,
		);
		return;
	}

	private static HandleMessage(message: unknown[]): string {
		const data = message.map((value) => {
			if (typeof value === "object") {
				return JSON.stringify(value, null, 2);
			}

			return value;
		});

		return data.join(" ");
	}
	private static GetTime(time?: number): string {
		const date = new Date(time ?? Date.now());

		return date.toLocaleString();
	}
}
