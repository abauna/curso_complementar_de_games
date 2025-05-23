const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.EightDir,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Botão: 0},
	{aiaiaiia: 0},
	{Sprite2: 0},
	{Mouse: 0},
	{Sprite3: 0},
	{Texto: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Botão3: 0},
	{Sprite4: 0},
	{Plataforma: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sólido: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{"8Direções": 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{aaaaaaaaa: 0},
	{bbbbbb: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {},
	aiaiaiia: class extends self.IButtonInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Botão3: class extends self.IButtonInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	aaaaaaaaa: class extends self.IButtonInstance {},
	bbbbbb: class extends self.IButtonInstance {}
}