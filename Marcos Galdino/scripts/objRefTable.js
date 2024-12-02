const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.Sin,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout
	];
};
self.C3_JsPropNameTable = [
	{download: 0},
	{tutorialB: 0},
	{Texto: 0},
	{Teclado: 0},
	{Mouse: 0},
	{vaaojogob: 0},
	{voltarb: 0},
	{trexto1: 0},
	{Sólido: 0},
	{chao: 0},
	{Plataforma: 0},
	{nescau: 0},
	{Senóide: 0},
	{toddy: 0},
	{ganhou: 0},
	{nescauGanhou: 0},
	{download2: 0},
	{jogardenovo: 0},
	{Texto2: 0},
	{buttonblueclipart51412removebgpreview: 0},
	{Texto3: 0}
];

self.InstanceType = {
	download: class extends self.ISpriteInstance {},
	tutorialB: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	vaaojogob: class extends self.ISpriteInstance {},
	voltarb: class extends self.ISpriteInstance {},
	trexto1: class extends self.ITextInstance {},
	chao: class extends self.ISpriteInstance {},
	nescau: class extends self.ISpriteInstance {},
	toddy: class extends self.ISpriteInstance {},
	ganhou: class extends self.ISpriteInstance {},
	nescauGanhou: class extends self.ISpriteInstance {},
	download2: class extends self.ISpriteInstance {},
	jogardenovo: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	buttonblueclipart51412removebgpreview: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {}
}