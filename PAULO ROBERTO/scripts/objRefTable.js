const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{Botão: 0},
	{Iniciar: 0},
	{tutorial: 0},
	{Explicação: 0},
	{Voltar: 0},
	{Carro: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Menu: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{drift: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{ganhaste: 0},
	{Texto: 0},
	{Sprite14: 0}
];

self.InstanceType = {
	Botão: class extends self.IButtonInstance {},
	Iniciar: class extends self.IButtonInstance {},
	tutorial: class extends self.IButtonInstance {},
	Explicação: class extends self.ITextInstance {},
	Voltar: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Menu: class extends self.IButtonInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	drift: class extends self.ITextInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	ganhaste: class extends self.IButtonInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite14: class extends self.ISpriteInstance {}
}