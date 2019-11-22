import { Test, TestingModule } from '@nestjs/testing';
import { LokersService } from './lokers.service';

describe('LokersService', () => {
  let service: LokersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LokersService],
    }).compile();

    service = module.get<LokersService>(LokersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
