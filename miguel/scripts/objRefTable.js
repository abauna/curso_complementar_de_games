const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Plugins.Mouse,
		C3.Plugins.TextBox,
		C3.Behaviors.Turret,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{MovimentoEmGrid: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sólido: 0},
	{comecar: 0},
	{Mouse: 0},
	{EntradaDeTexto: 0},
	{Texto2: 0},
	{EntradaDeTexto2: 0},
	{EntradaDeTexto3: 0},
	{Texto3: 0},
	{Texto4: 0},
	{Texto5: 0},
	{Texto6: 0},
	{Texto7: 0},
	{Texto8: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Texto9: 0},
	{Texto10: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{telaFase1: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{anel: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Canhão: 0},
	{Senóide: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{reiniciar: 0},
	{Sprite26: 0},
	{Texto: 0},
	{Texto11: 0},
	{Texto12: 0},
	{Texto13: 0},
	{Texto14: 0},
	{Sprite27: 0},
	{Sprite28: 0},
	{Sprite29: 0},
	{Sprite30: 0},
	{Sprite31: 0},
	{Sprite32: 0},
	{EntradaDeTexto4: 0},
	{volta: 0},
	{jogar: 0},
	{Projétil: 0},
	{Sprite33: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	comecar: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	EntradaDeTexto: class extends self.ITextInputInstance {},
	Texto2: class extends self.ITextInstance {},
	EntradaDeTexto2: class extends self.ITextInputInstance {},
	EntradaDeTexto3: class extends self.ITextInputInstance {},
	Texto3: class extends self.ITextInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	Texto6: class extends self.ITextInstance {},
	Texto7: class extends self.ITextInstance {},
	Texto8: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Texto9: class extends self.ITextInstance {},
	Texto10: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	telaFase1: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	anel: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	reiniciar: class extends self.ITextInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto11: class extends self.ITextInstance {},
	Texto12: class extends self.ITextInstance {},
	Texto13: class extends self.ITextInstance {},
	Texto14: class extends self.ITextInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	Sprite29: class extends self.ISpriteInstance {},
	Sprite30: class extends self.ISpriteInstance {},
	Sprite31: class extends self.ISpriteInstance {},
	Sprite32: class extends self.ISpriteInstance {},
	EntradaDeTexto4: class extends self.ITextInputInstance {},
	volta: class extends self.ITextInstance {},
	jogar: class extends self.ITextInstance {},
	Sprite33: class extends self.ISpriteInstance {}
}