const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Mouse: 0},
	{Sprite: 0},
	{bolinha1: 0},
	{bolinha2: 0},
	{Sprite2: 0},
	{Texto: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Texto4: 0},
	{Sprite3: 0},
	{questão6: 0},
	{"2a": 0},
	{"2b": 0},
	{"2c": 0},
	{"2d": 0},
	{F_244026851_p5gHQILPzd6V9byoe6tdCGxrs12F1Bwg: 0},
	{Sprite4: 0},
	{voltar: 0},
	{Texto5: 0},
	{b4: 0},
	{"5B": 0},
	{bolinhaVoltar: 0},
	{Texto6: 0},
	{"2a2": 0},
	{"2d2": 0},
	{bolinhaFinal: 0},
	{Texto7: 0}
];

self.InstanceType = {
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	bolinha1: class extends self.ISpriteInstance {},
	bolinha2: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Texto4: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	questão6: class extends self.ITextInstance {},
	_2a: class extends self.ITextInstance {},
	_2b: class extends self.ITextInstance {},
	_2c: class extends self.ITextInstance {},
	_2d: class extends self.ITextInstance {},
	F_244026851_p5gHQILPzd6V9byoe6tdCGxrs12F1Bwg: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	voltar: class extends self.ISpriteInstance {},
	Texto5: class extends self.ITextInstance {},
	b4: class extends self.ITextInstance {},
	_5B: class extends self.ITextInstance {},
	bolinhaVoltar: class extends self.ISpriteInstance {},
	Texto6: class extends self.ITextInstance {},
	_2a2: class extends self.ITextInstance {},
	_2d2: class extends self.ITextInstance {},
	bolinhaFinal: class extends self.ISpriteInstance {},
	Texto7: class extends self.ITextInstance {}
}