import { Test, TestingModule } from '@nestjs/testing';
import { EeventsGateway } from './eevents.gateway';

describe('EeventsGateway', () => {
  let gateway: EeventsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EeventsGateway],
    }).compile();

    gateway = module.get<EeventsGateway>(EeventsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
