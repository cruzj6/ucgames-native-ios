import UCConstants from '../../constants/ucapi';
import * as ucapi from '../../services/ucgamesapi';

describe('ucgamesapi service', () => {

	it('requests and receives top tracked games', () => {
		const amount = 5;
		return ucapi.getTopTracked(amount).then((res) => {
			expect(res.data.length).toBe(amount);
		});
	});

});
