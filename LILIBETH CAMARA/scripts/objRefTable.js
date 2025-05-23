const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite3: 0},
	{Sprite5: 0},
	{Texto: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Texto4: 0},
	{Texto5: 0},
	{Texto6: 0},
	{Texto7: 0},
	{Texto8: 0},
	{Texto9: 0},
	{Texto10: 0},
	{Texto11: 0},
	{Texto12: 0},
	{Texto13: 0},
	{Texto14: 0},
	{Texto15: 0},
	{Texto16: 0},
	{Texto17: 0},
	{Texto18: 0},
	{Texto19: 0},
	{Texto20: 0},
	{Texto21: 0},
	{Texto22: 0},
	{Texto23: 0},
	{Texto24: 0},
	{Texto25: 0},
	{Mouse: 0},
	{Sprite2: 0},
	{Sprite6: 0},
	{Sprite4: 0},
	{Texto26: 0},
	{Texto27: 0},
	{Texto28: 0},
	{Texto29: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Texto32: 0},
	{Sprite9: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	Texto6: class extends self.ITextInstance {},
	Texto7: class extends self.ITextInstance {},
	Texto8: class extends self.ITextInstance {},
	Texto9: class extends self.ITextInstance {},
	Texto10: class extends self.ITextInstance {},
	Texto11: class extends self.ITextInstance {},
	Texto12: class extends self.ITextInstance {},
	Texto13: class extends self.ITextInstance {},
	Texto14: class extends self.ITextInstance {},
	Texto15: class extends self.ITextInstance {},
	Texto16: class extends self.ITextInstance {},
	Texto17: class extends self.ITextInstance {},
	Texto18: class extends self.ITextInstance {},
	Texto19: class extends self.ITextInstance {},
	Texto20: class extends self.ITextInstance {},
	Texto21: class extends self.ITextInstance {},
	Texto22: class extends self.ITextInstance {},
	Texto23: class extends self.ITextInstance {},
	Texto24: class extends self.ITextInstance {},
	Texto25: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Texto26: class extends self.ITextInstance {},
	Texto27: class extends self.ITextInstance {},
	Texto28: class extends self.ITextInstance {},
	Texto29: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto32: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {}
}