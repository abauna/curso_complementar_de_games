const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Botão2: 0},
	{Mouse: 0},
	{Botão: 0},
	{Sprite3: 0},
	{Sprite2: 0},
	{Plataforma: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite7: 0},
	{Teclado: 0},
	{Projétil: 0},
	{Sprite8: 0},
	{Texto: 0},
	{Sprite6: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Texto4: 0},
	{Texto5: 0},
	{Texto6: 0},
	{Sprite9: 0},
	{Texto7: 0},
	{Sprite10: 0},
	{Texto8: 0},
	{Botão3: 0},
	{Sprite11: 0},
	{Botão4: 0},
	{Botão5: 0},
	{Sólido: 0},
	{Sprite12: 0},
	{Variável1: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Botão2: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {},
	Botão: class extends self.IButtonInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	Texto6: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Texto7: class extends self.ITextInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Texto8: class extends self.ITextInstance {},
	Botão3: class extends self.IButtonInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Botão4: class extends self.IButtonInstance {},
	Botão5: class extends self.IButtonInstance {},
	Sprite12: class extends self.ISpriteInstance {}
}