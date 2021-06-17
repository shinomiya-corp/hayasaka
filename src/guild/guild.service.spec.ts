import { Test, TestingModule } from '@nestjs/testing';
import { GuildService } from './guild.service';
import { mock } from 'jest-mock-extended';
import { PrismaService } from '../database/prisma.service';

const mockPrismaService = mock<PrismaService>();

describe('GuildService', () => {
  let service: GuildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuildService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    service = module.get<GuildService>(GuildService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
