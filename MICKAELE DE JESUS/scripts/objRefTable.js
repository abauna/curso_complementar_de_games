const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{Sprite2: 0},
	{botão: 0},
	{Sprite3: 0},
	{botaoparainiciarojogoclicandoemjogarvetorremovebgpreview: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite11: 0},
	{Mouse: 0},
	{Sprite12: 0},
	{perdeu: 0},
	{Sprite13: 0},
	{voltarwin: 0},
	{Sprite14: 0},
	{Plataforma: 0},
	{Sprite15: 0},
	{Sólido: 0},
	{Sprite16: 0},
	{Texto: 0},
	{ganhar: 0},
	{perdeuu: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	botão: class extends self.IButtonInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	botaoparainiciarojogoclicandoemjogarvetorremovebgpreview: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	perdeu: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	voltarwin: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	ganhar: class extends self.ISpriteInstance {},
	perdeuu: class extends self.ISpriteInstance {}
}