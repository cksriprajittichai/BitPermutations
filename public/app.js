document.querySelector('.permutations_submit_btn').addEventListener('click', () => {
	let n = document.getElementById('permutations_input').value;
	let permutations = getPermutations(n);

	let display_list = document.getElementById('permutations_result');

	// Clear current list
	while (display_list.childElementCount > 0) {
		display_list.removeChild(display_list.childNodes[0])
	}

    for (let i = 0; i < permutations.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(permutations[i]));
        display_list.appendChild(item);
    }
});


function getPermutations(numBits) {
	let numPermutations = Math.pow(2, numBits);

	// Init permutations 2D array
	let permutations = new Array(numPermutations);
	for (let i = 0; i < numPermutations; i++) {
		permutations[i] = new Array(numBits);
	}

	let numCreated = 2;
	let curLen = 1;
	permutations[0][0] = '0';
	permutations[1][0] = '1';

	for (let count = 1; count < numBits; count++, numCreated *= 2, curLen++) {
		// Append 0 at end of already created
		for (let i = 0; i < numCreated; i++) {
			permutations[i][curLen] = '0';
		}

		// Copy n - 1 elements from already created append 1
		for (let j = numCreated, i = 0; i < numCreated; j++, i++) {
			// Copy already created
			for (let k = 0; k < curLen; k++) {
				permutations[j][k] = permutations[i][k];
			}

			permutations[j][curLen] = '1';
		}
	}

	// Convert char arrays to strings
	for (let i = 0; i < permutations.length; i++) {
		permutations[i] = permutations[i].join("");
	}

	permutations.sort();

	return permutations;
}
