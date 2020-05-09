/*title*/
var titl = {
	props: ['titl', 'href'],
	template: '<div class="title"><p><a :href="href">{{titl}}</a></p></div>',
}
Vue.component('titl', titl);
/*cover*/
var cover = {
	props: ['src'],
	template: '<div class="cover"><img :src="src"/></div>'
}
Vue.component('cover', cover);
/*detail*/
var detail = {
	props: ['detail'],
	template: '<div class="detail"><p>{{detail}}</p></div>'
}
Vue.component('detail', detail);
/*state*/
var state = {
	props: ['time', 'tag'],
	template: '<div class="state"><ul class="states"><li class="time">{{time}}</li><li class="tag">{{tag}}</li></ul></div>'
}
Vue.component('state', state);
/*essay*/
var essay = {
	props: ['titl0', 'href0','src0', 'detail0', 'time0', 'tag0'],
	template: '<article class="article"><titl :titl="titl0" :href="href0"></titl><div class="info"><cover :src="src0"></cover><detail :detail="detail0"></detail><state :time="time0" :tag="tag0"></state></div></article>'
}
Vue.component('essay', essay);

Vue.component('essayitem', {
	props: ['info'],
	template: '<essay :titl0="info.title" :href0="info.href" :src0="info.src" :detail0="info.detail" :time0="info.time" :tag0="info.tag"></essay>',
});