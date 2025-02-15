const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Behaviors.EightDir,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{Projétil: 0},
	{Sprite: 0},
	{Senóide: 0},
	{Sprite2: 0},
	{Teclado: 0},
	{Botão2: 0},
	{Mouse: 0},
	{Sprite3: 0},
	{espaço: 0},
	{Texto: 0},
	{Sprite4: 0},
	{fundodepapeldeparedecoloridoembacadoartistico_: 0},
	{Texto2: 0},
	{pngtreegamespaceblueplanetimage_: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{"8Direções": 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{fundoDeTutorial: 0},
	{Sprite9: 0},
	{Texto3: 0},
	{Sprite10: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Botão2: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	espaço: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	fundodepapeldeparedecoloridoembacadoartistico_: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	pngtreegamespaceblueplanetimage_: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	fundoDeTutorial: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite10: class extends self.ISpriteInstance {}
}