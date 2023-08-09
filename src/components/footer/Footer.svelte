<script>
	import IoLogoYoutube from 'svelte-icons/io/IoLogoYoutube.svelte';
	import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
	import Logo from '../drawer/Logo.svelte';
</script>

<div class="w-full bg-neutral text-neutral-content">
	<footer class="footer max-w-7xl mx-auto p-10 bg-neutral text-neutral-content">
		<div>
			<span class="w-[200px] h-[45px] block">
				<Logo />
			</span>
			<p>Carlos Avila Ltd.<br />Providing reliable tech since 2008.</p>
		</div>
		<div>
			<span class="footer-title text-white opacity-100">Social</span>
			<div class="grid grid-flow-col gap-4">
				<a href="https://twitter.com/Carlos_A_Tech" target="_blank" aria-label="Twitter">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 1668.56 1221.19"
						style="enable-background:new 0 0 1668.56 1221.19;"
						xml:space="preserve"
						class="fill-current"
					>
						<g id="layer1" transform="translate(52.390088,-25.058597)">
							<path
								id="path1009"
								d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
							/>
						</g>
					</svg>
				</a>
				<a href="https://www.youtube.com/@CarlosAvilaTech" target="_blank" aria-label="Youtube">
					<span class="block w-8 h-8">
						<IoLogoYoutube />
					</span>
				</a>
				<a href="https://linkedin.com/in/cavilarts" target="_blank" aria-label="Linkedin">
					<span class="block w-8 h-8">
						<IoLogoLinkedin />
					</span>
				</a>
			</div>
		</div>
	</footer>
</div>
