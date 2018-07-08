const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const queryStackOverFlow = "https://stackoverflow.com/search?q="
const queryGoogle = "https://www.google.com/search?q="
const queryQuora = "https://www.quora.com/search?q="
const queryZhihu = "https://www.zhihu.com/search?type=content&q="
const queryBing = "https://bing.com/search?q="
const queryYahoo = "https://search.yahoo.com/search?p="
const queryBaidu = "https://www.baidu.com/s?wd="
const queryGithub = "https://github.com/search?utf8=%E2%9C%93&q="


var type = 'stackoverflow'

const getQuestion = () => {
	const question = $('.question').value.trim()
	return question ? question : false
}

const search = (type) => {
	const question = getQuestion()
	if (getQuestion()){
		switch(type){
			case 'stackoverflow':
				url = queryStackOverFlow + question
				window.open(url)
				break
			case 'github':
				url = queryGithub + question
				window.open(url)
				break
			case 'zhihu':
				url = queryZhihu + question
				window.open(url)
				break
			case 'google':
				url = queryGoogle + question
				window.open(url)
				break
			case 'quora':
				url = queryQuora + question
				window.open(url)
				break
			case 'yahoo':
				url = queryYahoo + question
				window.open(url)
				break
			case 'bing':
				url = queryBing + question
				window.open(url)
				break
			case 'baidu':
				url = queryBaidu + question
				window.open(url)
				break
			default:
				break
		}
	}
}

$('.btn').addEventListener('click', () => {
	$('.dd').className = ($('.dd').className === 'dd dropdown-menu show')
	 				   ? 'dd dropdown-menu' : 'dd dropdown-menu show'
})

$('.stackoverflow').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'stackoverflow'
	$('.btn').innerHTML = 'StackOverFlow'
})

$('.github').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'github'
	$('.btn').innerHTML = 'Github'
})

$('.zhihu').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'zhihu'
	$('.btn').innerHTML = 'Zhihu'
})

$('.google').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'google'
	$('.btn').innerHTML = 'Google'
})

$('.yahoo').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'yahoo'
	$('.btn').innerHTML = 'Yahoo'
})

$('.quora').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'quora'
	$('.btn').innerHTML = 'Quora'
})

$('.baidu').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'baidu'
	$('.btn').innerHTML = 'Baidu'
})

$('.bing').addEventListener('click', () => {
	$('.dd').className = 'dd dropdown-menu'
	type = 'bing'
	$('.btn').innerHTML = 'Bing'
})


document.addEventListener('keydown', e => {
  if (e.keyCode === 13) search(type)
})

// $('.button').addEventListener('click', search)
