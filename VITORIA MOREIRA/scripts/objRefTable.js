const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.jumpthru,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Sprite2: 0},
	{PularAtravés: 0},
	{Plataforma: 0},
	{jogador: 0},
	{Sólido: 0},
	{Sprite4: 0},
	{Senóide: 0},
	{Sprite6: 0},
	{Sprite: 0},
	{Sprite3: 0},
	{Sprite5: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Botão: 0},
	{Texto: 0},
	{Botão2: 0},
	{Sprite9: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {},
	Texto: class extends self.ITextInstance {},
	Botão2: class extends self.IButtonInstance {},
	Sprite9: class extends self.ISpriteInstance {}
}