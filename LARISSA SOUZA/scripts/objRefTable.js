const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Behaviors.wrap,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Texto: 0},
	{Botão: 0},
	{Texto2: 0},
	{Botão2: 0},
	{macaco: 0},
	{Sólido: 0},
	{chão: 0},
	{Plataforma: 0},
	{jorge: 0},
	{banana: 0},
	{Projétil: 0},
	{bola: 0},
	{Teclado: 0},
	{DarAVolta: 0},
	{inimigo: 0},
	{perdeu: 0},
	{venceu: 0},
	{Botão3: 0},
	{jogar: 0},
	{bananaaa: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Botão: class extends self.IButtonInstance {},
	Texto2: class extends self.ITextInstance {},
	Botão2: class extends self.IButtonInstance {},
	macaco: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	jorge: class extends self.ISpriteInstance {},
	banana: class extends self.ISpriteInstance {},
	bola: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	inimigo: class extends self.ISpriteInstance {},
	perdeu: class extends self.ISpriteInstance {},
	venceu: class extends self.ISpriteInstance {},
	Botão3: class extends self.IButtonInstance {},
	jogar: class extends self.IButtonInstance {},
	bananaaa: class extends self.ISpriteInstance {}
}