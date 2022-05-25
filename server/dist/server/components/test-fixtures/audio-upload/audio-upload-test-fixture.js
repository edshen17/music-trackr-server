"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUploadTestFixture = void 0;
const abstract_test_fixture_1 = require("../abstractions/abstract-test-fixture");
class AudioUploadTestFixture extends abstract_test_fixture_1.AbstractTestFixture {
    _faker;
    _createMockBuildParams = async () => {
        const mockBuildParams = {
            userId: this._faker.datatype.uuid(),
            fileName: this._faker.name.findName(),
            sourceUrl: this._faker.image.imageUrl(),
        };
        return mockBuildParams;
    };
    _initTemplate = async (optionalInitParams) => {
        const { faker } = optionalInitParams;
        this._faker = faker;
    };
}
exports.AudioUploadTestFixture = AudioUploadTestFixture;
