
// Javascript implementation of the approach

// Function to generate and
	// print the required string
function generateString(A,B)
{
	let rt = "";
		while (0 < A || 0 < B)
		{

			// More 'b', append "bba"
			if (A < B)
			{
				if (0 < B--)
				{
					rt += ('b');
				}
				if (0 < B--)
				{
					rt += ('b');
				}
				if (0 < A--)
				{
					rt += ('a');
				}
			}
			
			// More 'a', append "aab"
			else if (B < A)
			{
				if (0 < A--)
				{
					rt += ('a');
				}
				if (0 < A--)
				{
					rt += ('a');
				}
				if (0 < B--)
				{
					rt += ('b');
				}
			}
			
			// Equal number of 'a' and 'b'
			// append "ab"
			else
			{
				if (0 < A--)
				{
					rt += ('a');
				}
				if (0 < B--)
				{
					rt += ('b');
				}
			}
		}
		console.log(rt);
}

// Driver code
let A = 2, B = 6;
generateString(A, B);


// This code is contributed by avanitrachhadiya2155
