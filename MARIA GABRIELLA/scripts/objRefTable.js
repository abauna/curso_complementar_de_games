const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Texto: 0},
	{Bplay: 0},
	{BTutorial: 0},
	{Sprite2: 0},
	{Bback: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Texto4: 0},
	{Texto5: 0},
	{Texto6: 0},
	{BJogarnovamente: 0},
	{Bmenuvitoria: 0},
	{Texto7: 0},
	{Btentarnovamente: 0},
	{Bmenuderrota: 0},
	{Sprite12: 0},
	{Sólido: 0},
	{Sprite3: 0},
	{Senóide: 0},
	{Sprite4: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{"8Direções": 0},
	{Sprite5: 0},
	{Projétil: 0},
	{Sprite6: 0},
	{Mouse: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Bplay: class extends self.IButtonInstance {},
	BTutorial: class extends self.IButtonInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Bback: class extends self.IButtonInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	Texto6: class extends self.ITextInstance {},
	BJogarnovamente: class extends self.IButtonInstance {},
	Bmenuvitoria: class extends self.IButtonInstance {},
	Texto7: class extends self.ITextInstance {},
	Btentarnovamente: class extends self.IButtonInstance {},
	Bmenuderrota: class extends self.IButtonInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {}
}