/**
 * 画像のsrcを組み立てる
 */
export function buildImageSrc(src: string): string {
	const basePath = "/next-app";
	const segments = src.split("/").filter((s) => s.length > 0);
	return [basePath, ...segments].join("/");
}
